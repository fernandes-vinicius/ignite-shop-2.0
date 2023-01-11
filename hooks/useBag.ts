import { useContext } from 'react'

import { BagContext } from 'contexts/BagContext'

export function useBag() {
  const context = useContext(BagContext)
  return context
}
