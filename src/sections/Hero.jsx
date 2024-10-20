import React from 'react'
import Button from '../Components/Button'
import {arrowRight} from '../assets/icons'
import {bigShoe1,bigShoe2,bigShoe3} from '../assets/images'
import {shoes, statistics} from '../constants'
import ShoeCard from '../Components/ShoeCard'
import { useState } from "react";


const Hero = () => {
  const [bigShoeImg, setbigShoeImg] = useState(bigShoe1)
  return (
 <section
 id='home'
 className="flex xl:flex-row flex-col max-container w-full gap-10 min-h-screen justify-center">
  <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
<p className='text-xl font-montserrat text-coral-red'>Our Summer Collection</p>
<h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] 
font-bold max-sm:leading-none'>
  <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>The New Arrival</span>
  <br />
  <span className='text-coral-red inline-block mt-3'>Nike</span> Shoes
</h1>
<p className='font-montserrat leading-8 mt-6 text-slate-gray text-lg mb-14 sm:max-w-sm'>Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
<Button 
label="Shop now"
iconURL={arrowRight}
/>
<div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
{statistics.map((stat)=>(
  <div key={stat.label}>
    <p className='font-palanquin text-4xl font-bold'>{stat.value}</p>
    <p className='text-slate-gray leading-7 font-montserrat'>{stat.label}</p>
  </div>
))}
</div>
  </div>

<div className='flex justify-center items-center flex-1 relative xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
  <img 
  src={bigShoeImg} 
  alt="shoe collection"
  className='relative object-contain z-10'
   />
<div className="flex gap-4 sm:gap-6 absolute -bottom-[10%] sm:left-[20%] max-sm:px-6">
{shoes.map((shoe)=> (
  <div key={shoe}>
  <ShoeCard 
  imgURL={shoe}
  changeBigShoeImage={(shoe) => setbigShoeImg(shoe)}
  bigShoeImg={bigShoeImg}
  />
  </div>
))}


</div>
</div>

 </section>
  )
}

export default Hero
