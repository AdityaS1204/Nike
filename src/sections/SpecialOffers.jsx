import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../Components/Button";
const SpecialOffers = () => {
  return (
    <section className="flex justify-wrap items-center max-lg:flex-col-reverse gap-10 max-container">
<div className="flex-1">
  <img src={offer} width={773}
  height={687}
  className="object-contain w-full" />
</div>
    <div className="flex flex-1 flex-col">
<h2 className='mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>

  <span className='text-coral-red '>Special</span> Offers
</h2>
<p className='mt-4 lg:max-w-lg info-text'>Discover stylish Nike arrivals, quality comfort, and innovation for your active life. Lorem ipsum dolor sit amet consectent quas quia aut necessitatibus ipsum excepturi! Quis!</p>
<p className="mt-4 lg:max-w-lg info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptate aliquam Ipsa blanditiis dicabo rem incidunt repudiandae dolorem voluptatum.</p>
<div className=" flex flex-wrap gap-4 mt-6">
<Button 
label="Shop now"
iconURL={arrowRight}
/>
<Button 
label="Learn more"
borderColor="border-slate-gray"
backGroundColor='bg-white'
textColor="text-slate-gray"
/>
</div>
</div>

    </section>
  )
}

export default SpecialOffers;