import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  return (
  <>
  <Component {...pageProps} />
  <style jsx global>{`
  body {
    background: #e7f9e773;
  }
`}</style>
  </>)
}

export default MyApp
