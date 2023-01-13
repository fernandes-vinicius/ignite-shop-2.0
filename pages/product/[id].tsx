import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import Head from 'next/head'
import { v4 as uuid } from 'uuid'
import Stripe from 'stripe'

import { stripe } from 'lib/stripe'
import { useBag } from 'hooks/useBag'
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from 'styles/pages/product'

interface ProductProps {
  product: {
    id: string
    name: string
    description: string
    imageUrl: string
    price: string
    priceAmount: number
    defaultPriceId: string
  }
}

export default function Product({ product }: ProductProps) {
  const { addProduct } = useBag()

  function handleAddInBag() {
    const bagId = uuid()
    addProduct({ ...product, bagId })
  }

  return (
    <>
      <Head>
        <title>{`${product.name} | Ignite Shop`}</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>

          <p>{product.description}</p>

          <button onClick={handleAddInBag}>Colocar na sacola</button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  // Buscar os produtos mais vendidos / mais acessados

  return {
    paths: [{ params: { id: 'prod_MzbJRoEXnYFzaT' } }],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params?.id || ''

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        description: product.description,
        imageUrl: product.images[0],
        url: product.url,
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(price.unit_amount! / 100),
        priceAmount: price.unit_amount! / 100,
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1, // 1 hour
  }
}
