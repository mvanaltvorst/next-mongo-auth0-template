import styles from '../styles/Home.module.css'
import Head from 'next/head'
import { useUser } from '@auth0/nextjs-auth0';

export default function Home() {
  const { user, error, isLoading } = useUser();
  
  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>{error.message}</div>
  }

  return (
    <div className="space-y-20 sm:space-y-32 md:space-y-40 lg:space-y-44 overflow-hidden">
      <Head>
        <title>Template App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="relative z-10 max-w-screen-lg xl:max-w-screen-xl mx-auto">
        <div className="px-4 sm:px-6 md:px-8 mb-14 sm:mb-20 xl:mb-8">
          Asdf
        </div>
      </header>

      <footer className="bg-gray-50 pt-16 pb-12 sm:pt-20 md:pt-24 xl:pt-32 sm:pb-20 ">
        <div className="max-w-screen-lg xl:max-w-screen-xl mx-auto divide-y divide-gray-200 px-4 sm:px-6 md:px-8">
          <ul className="text-sm font-medium pb-14 sm:pb-20 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10">
            <li className="space-y-5">
              <h2 className="text-xs font-semibold tracking-wide text-gray-900 uppercase">
                Contact
              </h2>
              <ul className="space-y-4">
                <li>
                  <a className="hover:text-gray-900 transition-colors duration-200" href="">
                    Asdf
                   </a>
                </li>
              </ul>
            </li>
            <li className="space-y-5">

            </li>
          </ul>
          <div className="pt-10 sm:pt-12">
            <p className="max-w-4xl text-lg sm:text-2xl font-medium sm:leading-10 space-y-6 mb-6">
              © Maurits van Altvorst
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
