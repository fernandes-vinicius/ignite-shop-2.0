import { createContext, ReactNode, useState } from 'react'

interface IProduct {
  id: string
  name: string
  imageUrl: string
  price: string
}

interface IBagContext {
  products: IProduct[]
  totalProducts: number
  addProduct: (product: IProduct) => void
  removeProduct: (productId: string) => void
}

interface BagProviderProps {
  children: ReactNode
}

export const BagContext = createContext({} as IBagContext)

export function BagProvider({ children }: BagProviderProps) {
  const [products, setProducts] = useState<IProduct[]>([])
  const [totalProducts, setTotalProducts] = useState(0)

  console.log('products', products)
  console.log('totalProducts', totalProducts)

  function addProduct(product: IProduct) {
    setProducts((prevState) => [product, ...prevState])
    setTotalProducts((prevState) => prevState + 1)
  }

  function removeProduct(productId: string) {
    setProducts((prevState) => prevState.filter((p) => p.id !== productId))
    setTotalProducts((prevState) => prevState - 1)
  }

  return (
    <BagContext.Provider
      value={{ products, totalProducts, addProduct, removeProduct }}
    >
      {children}
    </BagContext.Provider>
  )
}
