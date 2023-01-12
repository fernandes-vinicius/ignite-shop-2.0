import { GetServerSideProps } from 'next'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import Stripe from 'stripe'
import { v4 as uuid } from 'uuid'

import logoImg from 'assets/logo.svg'
import { stripe } from 'lib/stripe'
import {
  ImageContainer,
  ImagesContainer,
  SuccessContainer,
} from 'styles/pages/success'

interface SuccessProps {
  customerName: string
  products: {
    id: string
    imageUrl: string
  }[]
}

export default function Success({ customerName, products }: SuccessProps) {
  const qtdItems = products.length
  const qtdItemsLabel =
    qtdItems === 1 ? 'sua camiseta' : `sua compra de ${qtdItems} camisetas`

  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>
        <Link href="/">
          <Image src={logoImg} alt="" />
        </Link>

        <ImagesContainer>
          {products.map((product) => (
            <ImageContainer key={product.id}>
              <Image src={product.imageUrl} width={120} height={110} alt="" />
            </ImageContainer>
          ))}
        </ImagesContainer>

        <h1>Compra efetuada!</h1>

        <p>
          Uhuul <strong>{customerName}</strong>, {qtdItemsLabel} já está a
          caminho da sua casa.
        </p>

        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const customerName = session.customer_details?.name

  const products = session.line_items?.data.map((lineItem) => {
    const product = lineItem.price?.product as Stripe.Product

    return {
      id: uuid(),
      imageUrl: product.images[0],
    }
  })

  return {
    props: {
      customerName,
      products,
    },
  }
}
