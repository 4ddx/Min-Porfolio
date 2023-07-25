import '@/styles/globals.css'
export default function App({ Component, pageProps }) {
  return (
    <div className='bg-neutral-900'>
    <Component {...pageProps} />
  </div>
  )
}
