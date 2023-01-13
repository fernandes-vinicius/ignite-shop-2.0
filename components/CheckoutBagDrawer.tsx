import { useState } from 'react'
import Image from 'next/image'
import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import axios from 'axios'

import { useBag } from 'hooks/useBag'
import {
  ButtonCheckout,
  CloseButton,
  Content,
  ListProductsContainer,
  Overlay,
  ProductDetails,
  ProductItem,
  QuantityItems,
  Title,
  TotalItems,
} from 'styles/components/checkoutBagDrawer'

export function CheckoutBagDrawer() {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)

  const { products, totalProducts, removeProduct } = useBag()

  async function handleCheckout() {
    try {
      setIsCreatingCheckoutSession(true)

      const priceIds = products.map((product) => product.defaultPriceId)

      const response = await axios.post('/api/checkout', { priceIds })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (error) {
      // Conectar com uma ferramenta de observabilidade (Datadog / Sentry)

      setIsCreatingCheckoutSession(false)
      alert('Falha ao redirecionar ao checkout')
    }
  }

  function handleRemove(bagId: string) {
    removeProduct(bagId)
  }

  const total = products.reduce((acc, currentValue) => {
    acc += currentValue.priceAmount
    return acc
  }, 0)
  const qtdItems = products.length
  const disabledCheckout = isCreatingCheckoutSession || totalProducts <= 0

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <CloseButton>
          <X size={24} weight="bold" />
        </CloseButton>

        <Title>Sacola de compras</Title>

        <ListProductsContainer>
          {products.map((product) => (
            <ProductItem key={product.bagId}>
              <Image src={product.imageUrl} width={100} height={93} alt="" />

              <ProductDetails>
                <span>{product.name}</span>
                <strong>{product.price}</strong>

                <button onClick={() => handleRemove(product.bagId)}>
                  Remover
                </button>
              </ProductDetails>
            </ProductItem>
          ))}
        </ListProductsContainer>

        <QuantityItems>
          <span>Quantidade</span>
          <span>
            {qtdItems} {qtdItems === 1 ? 'item' : 'itens'}
          </span>
        </QuantityItems>

        <TotalItems>
          <span>Total</span>
          <span>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(total)}
          </span>
        </TotalItems>

        <ButtonCheckout disabled={disabledCheckout} onClick={handleCheckout}>
          Finalizar Compra
        </ButtonCheckout>
      </Content>
    </Dialog.Portal>
  )
}
