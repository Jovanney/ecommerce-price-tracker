import React from 'react'
import { MoveRight } from 'lucide-react';
import Searchbar from '@/components/Searchbar';
const Home = () => {
  return (
    <>
      <section className="px-6 md:px-20 py-24">
          <div className="flex max-xl:flex-col gap-16">
            <div className="flex flex-col justify-center"> 
              <p className="small-text">
                Smart Shopping Starts Here:
                <MoveRight size={16} color="#e82121" strokeWidth={1.25} />
              </p>

              <h1 className="head-text">
                Unleash the Power of
                <span className="text-primary"> PriceWise</span>
              </h1>

              <p className="mt-6">
                Powerful, self-serve product and growth analytics to help you convert, engage, and retain more.
              </p>

              <Searchbar />
            </div>

            {/* <HeroCarousel /> */}
          </div>
        </section>

        <section className='trending-section'>
          <h2 className='section-text'>Trending</h2>

          <div className='flex flex-wrap gap-x-8 gap-y-16'>
              {["Iphone 15", "Playstation 5", "Airpods"].map(product => (
                <div>{product}</div>
              ))}
          </div>
        </section>
      </>
  )
}

export default Home