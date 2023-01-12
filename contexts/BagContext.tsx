import { createContext, ReactNode, useState } from 'react'

interface IProduct {
  id: string
  name: string
  imageUrl: string
  price: string
  defaultPriceId: string
  bagId: string
}

interface IBagContext {
  products: IProduct[]
  totalProducts: number
  addProduct: (product: IProduct) => void
  removeProduct: (bagId: string) => void
}

interface BagProviderProps {
  children: ReactNode
}

export const BagContext = createContext({} as IBagContext)

export function BagProvider({ children }: BagProviderProps) {
  const [products, setProducts] = useState<IProduct[]>([])

  const totalProducts = products.length

  function addProduct(product: IProduct) {
    setProducts((state) => [...state, product])
  }

  function removeProduct(bagId: string) {
    setProducts((state) => {
      return state.filter((product) => product.bagId !== bagId)
    })
  }

  return (
    <BagContext.Provider
      value={{ products, totalProducts, addProduct, removeProduct }}
    >
      {children}
    </BagContext.Provider>
  )
}
