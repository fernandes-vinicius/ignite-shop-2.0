import { useState } from 'react'
import Image from 'next/image'
import { X } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog'

import { useBag } from 'hooks/useBag'
import {
  ButtonCheckout,
  CloseButton,
  Content,
  ListProductsContainer,
  ProductDetails,
  ProductItem,
  Title,
} from 'styles/components/bagDrawer'

export function BagDrawer() {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)

  const { products,totalProducts, removeProduct } = useBag()

  async function handleCheckout() {
    try {
      setIsCreatingCheckoutSession(true)

      // const response = await axios.post('/api/checkout', {
      //   priceId: product.defaultPriceId,
      // })

      // const { checkoutUrl } = response.data

      // window.location.href = checkoutUrl
    } catch (error) {
      // Conectar com uma ferramenta de observabilidade (Datadog / Sentry)

      setIsCreatingCheckoutSession(false)
      alert('Falha ao redirecionar ao checkout')
    }
  }

  function handleRemove(productId:string) {
    removeProduct(productId)
  }

  const disabledCheckout = isCreatingCheckoutSession || totalProducts <= 0

  return (
    <Dialog.Portal>
      {/* <Overlay /> */}

      <Content>
        <CloseButton>
          <X size={24} weight="bold" />
        </CloseButton>

        <Title>Sacola de compras</Title>

        <ListProductsContainer>
          {products.map((product) => (
            <ProductItem key={product.id}>
              <Image src={product.imageUrl} width={100} height={93} alt="" />

              <ProductDetails>
                <span>{product.name}</span>
                <strong>{product.price}</strong>

                <button onClick={()=> handleRemove(product.id)}>Remover</button>
              </ProductDetails>
            </ProductItem>
          ))}
        </ListProductsContainer>

        <ButtonCheckout
          disabled={disabledCheckout}
          onClick={handleCheckout}
        >
          Finalizar Compra
        </ButtonCheckout>
      </Content>
    </Dialog.Portal>
  )
}
