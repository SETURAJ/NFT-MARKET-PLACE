//This is for layout and navigation
import '../styles/globals.css'
import '../styles/style.css'
import '../styles/tailwind.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav className="border-b p-6" style={{ backgroundColor: '' }}>
        <img src='ethereum-eth-logo.svg' style={{ width: '100px', height: '100px', float: 'left' }} />
        <p className="text-4xl font-bold text-black"  >
          NFTCart
        </p>
        <div className="flex mt-4">
          <Link href="/">
            <a className='mr-6 text-xl font-bold text-red-500'>
              Home
            </a>
          </Link>
          <Link href="/create-item">
            <a className="mr-6 text-xl font-bold text-blue-500">
              Sell Digital Asset
            </a>
          </Link>
          <Link href="/my-assets">
            <a className='mr-6 text-xl font-bold text-teal-500'>
              My Digital Assets
            </a>
          </Link>
          <Link href="/creator-dashboard">
            <a className='mr-6 text-xl font-bold text-orange-500'>
              Creator Dashboard
            </a>
          </Link>
          <Link href="/about-us">
            <a className='mr-6 text-xl font-bold text-black-500'>
              About us
            </a>
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </div >
  )
}

export default MyApp



