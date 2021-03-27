import styles from '../styles/Home.module.css'
import Head from 'next/head'
import { useUser } from '@auth0/nextjs-auth0';
import Footer from '../components/Footer';
import Image from 'next/image';

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
          <div className="border-b border-gray-200 py-4 flex items-center justify-between mb-16 sm:mb-20 -mx-4 px-4 sm:mx-0 sm:px-0">
            <div className="group font-medium flex items-center space-x-3 sm:space-x-4 hover:text-gray-600 transition-colors duration-200 w-full py-2">
              Template app logo
            </div>
            <div className="flex items-center space-x-6 sm:space-x-10 ml-6 sm:ml-10">
              <a className="text-base leading-6 font-medium hover:text-gray-600 transition-colors duration-200 py-2" 
                 href="/api/auth/me">
                <span className="sm:hidden">Profile</span>
                <span className="hidden sm:inline">My profile</span>
              </a>
            </div>
          </div>
          {/* Logo here */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl leading-none font-extrabold tracking-tight text-gray-900 mt-10 mb-8 sm:mt-14 sm:mb-10">
            Template application.
          </h1>
          <p className="max-w-screen-lg text-lg sm:text-2xl sm:leading-10 font-medium mb-10 sm:mb-11">
            A template application.
          </p>
          <div className="flex flex-wrap space-y-4 sm:space-y-0 sm:space-x-4 text-center">
            <a className="w-full sm:w-auto flex-none bg-gray-900 hover:bg-gray-700 text-white text-lg leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200" 
               href="/api/auth/login">
              Sign up
            </a>
            <a className="w-full sm:w-auto flex-none text-lg leading-6 font-semibold py-3 hover:text-gray-600 transition-colors duration-200"
               href="/api/auth/login">
              or log in.
            </a>
          </div>
        </div>
      </header>
      <section className="relative z-10 text-center max-w-screen-lg xl:max-w-screen-xl mx-auto">
        <div className="px-4 sm:px-6 md:px-8">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl leading-none font-extrabold text-gray-900 tracking-tight mb-8">
            Reserving study spaces should be easy.
          </h2>
          <figure>
            <blockquote>
              <p className="max-w-4xl text-lg sm:text-2xl font-medium sm:leading-10 space-y-6 max-w-4xl mx-auto mb-6">
                Asdf asdf
              </p>
            </blockquote>
            <figcaption className="sm:text-xl font-medium flex flex-col items-center">
                <div className="p-1 border-2 border-blue-500 rounded-full mb-3">
                  <img src="/me.jpg" 
                       alt="Picture of the author"
                       className="w-10 h-10 rounded-full bg-blue-500"
                       />
                </div>
                <div className="text-gray-900">Maurits van Altvorst</div>
                <div className="text-blue-500">Creator of template app</div>
            </figcaption>
          </figure>
        </div>
      </section>
      <Footer />
    </div>
  )
}
