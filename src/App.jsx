import React from 'react'
import { hero, footer, SpecialOffer, Subscribe, SuperQuality, services, CustomerReviews, popularProduct } from './sections'
import Hero from './sections/Hero'
import PopularProducts from './sections/PopularProducts'
import Services from './sections/Services'
import Footer from './sections/Footer'

const App = () => {
  return (
    <>
      <main className='relative'>
        nav
        <section className='xl:padding-l wide:padding-r padding-b'>
          <Hero />
        </section>

        <section className='padding'>
          <PopularProducts />
        </section>

        <section className='padding'>
          <SuperQuality />
        </section>

        <section className='padding-x py-10'>
          <Services />
        </section>

        <section className='padding'>
          <SpecialOffer />
        </section>

        <section className='padding bg-pale-blue'>
          <CustomerReviews />
        </section>

        <section className='padding-x sm:py-32 py-16 w-full'>
          <Subscribe />
        </section>

        <section className='bg-black padding-x padding-t pb-8'>
          <Footer />
        </section>

      </main>
    </>
  )
}

export default App