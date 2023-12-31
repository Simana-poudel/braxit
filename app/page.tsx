import AboutUsHome from '@/components/AboutUsHome'
import Copyright from '@/components/Copyright'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import HomeImage from '@/components/HomeImage'
import ImageColumn from '@/components/ImageColumn'
import Map from '@/components/Map'
import News from '@/components/News'
import Offer from '@/components/Offer'
import Projects from '@/components/Projects'
import Social from '@/components/Social'
import Testimonial from '@/components/Testimonial'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      
      <div className="">
      <HomeImage />
      <AboutUsHome />
      <ImageColumn />
      <Features />
      <Projects />
      <Offer />
      <Testimonial />
      <News />
      <Map />
      <Social />
      <Footer />
      <Copyright />
      </div>
    </main>
  )
}
