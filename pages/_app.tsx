import type { AppProps } from 'next/app'
import { Roboto } from '@next/font/google'
import Image from 'next/image'
import { Handbag } from 'phosphor-react'

import logoImg from 'assets/logo.svg'
import { globalStyles } from 'styles/globals'
import { Bag, BagCounter, Container, Header } from 'styles/pages/app'

const roboto = Roboto({ weight: ['400', '700'], subsets: ['latin'] })

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container className={roboto.className}>
      <Header>
        <Image src={logoImg} alt="" />

        <Bag variant="full">
          <BagCounter>1</BagCounter>
          <Handbag size={24} weight="bold" />
        </Bag>
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
