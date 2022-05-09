
import '../app/assets/styles/globals.scss'
import { QueryClient, QueryClientProvider } from 'react-query'
import Head from 'next/head'

const queryClient = new QueryClient({
  defaultOption: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1"
          />
      </Head>
        <Component {...pageProps} />
    </QueryClientProvider>
  )
}

export default MyApp
