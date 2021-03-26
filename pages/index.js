import styles from '../styles/Home.module.css'
import Head from 'next/head'
import { useUser } from '@auth0/nextjs-auth0';
import Footer from '../components/Footer';

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
            {/* Logo */}
            <div className="group font-medium flex items-center space-x-3 sm:space-x-4 hover:text-gray-600 transition-colors duration-200 w-full py-2">
              Template app
            </div>
            <div className="flex items-center space-x-6 sm:space-x-10 ml-6 sm:ml-10">
              <a className="text-base leading-6 font-medium hover:text-gray-600 transition-colors duration-200 py-2" href="/api/auth/login">
                <span className="sm:hidden">Log in</span>
                <span className="hidden sm:inline">Log in here</span>
              </a>
            </div>
          </div>
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
      <section>
        <div className="px-4 sm:px-6 md:px-8 mb-10 sm:mb-16 md:mb-20">
          {user ? user.name : "not logged in"} <br/>
          {user.email}<br/>
          {user.email_verified}<br/>
          {user.nickname}<br/>
          {user.picture}<br/>
          {user.sub}<br/>
          {user.updated_at}<br/>
        </div>
      </section>
      <Footer />
    </div>
  )
}
