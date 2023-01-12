import type { AppProps } from 'next/app'
import { Roboto } from '@next/font/google'
import { useRouter } from 'next/router'

import { globalStyles } from 'styles/globals'
import { Container } from 'styles/pages/app'
import { BagProvider } from 'contexts/BagContext'
import { Header } from 'components/Header'

const roboto = Roboto({ weight: ['400', '700'], subsets: ['latin'] })

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  const isDefaultHeader = ![`/success`].includes(router.pathname)

  return (
    <BagProvider>
      <Container className={roboto.className}>
        {isDefaultHeader && <Header />}
        <Component {...pageProps} />
      </Container>
    </BagProvider>
  )
}
