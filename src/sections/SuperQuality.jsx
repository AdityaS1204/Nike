import  Button  from "../Components/Button";
import {  shoe8} from "../assets/images";
const SuperQuality = () => {
  return (
  <section 
  id="about-us"
  className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
  >
<div className="flex flex-1 flex-col">
<h2 className='mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
We provide You
  <span className='text-coral-red '>Super</span> 
  <span className='text-coral-red '>Quality</span> Shoes
</h2>
<p className='mt-4 lg:max-w-lg info-text'>Discover stylish Nike arrivals, quality comfort, and innovation for your active life. Lorem ipsum dolor sit amet consectent quas quia aut necessitatibus ipsum excepturi! Quis!</p>
<p className="mt-4 lg:max-w-lg info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptate aliquam Ipsa blanditiis dicabo rem incidunt repudiandae dolorem voluptatum.</p>
<div className="mt-6">
<Button 
label="View Details"
/>
</div>
</div>
<div className="flex-1 flex justify-center items-center">
  <img src={shoe8} 
  width={570}
  height={572} 
  className="object-contain"
  />
</div>
  </section>
  )
}

export default SuperQuality;