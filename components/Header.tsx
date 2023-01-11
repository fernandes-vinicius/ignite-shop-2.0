import Link from 'next/link'
import Image from 'next/image'
import { Handbag } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog'

import logoImg from 'assets/logo.svg'
import { useBag } from 'hooks/useBag'
import { BagDrawer } from 'components/BagDrawer'
import { Bag, BagCounter, HeaderContainer } from 'styles/components/header'

export function Header() {
  const { totalProducts } = useBag()

  return (
    <HeaderContainer>
      <Link href="/">
        <Image src={logoImg} alt="" />
      </Link>

      <Dialog.Root>
        <Dialog.Trigger asChild  >
          <Bag variant="full" disabled={totalProducts <= 0}>
            {totalProducts > 0 && <BagCounter>{totalProducts}</BagCounter>}
            <Handbag size={24} weight="bold" />
          </Bag>
        </Dialog.Trigger>

        <BagDrawer />
      </Dialog.Root>
    </HeaderContainer>
  )
}
