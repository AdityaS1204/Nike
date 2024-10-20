import ReviewCard from "../Components/ReviewCard";
import { reviews } from "../constants/index";


const CustomerReviews = () => {
  return (
    <section className="max-container">
<h3 className="font-palanquin text-center text-4xl font-bold">What our <span className="text-coral-red">Customers</span> say?</h3>
<p className="text-center m-auto mt-4 max-w-lg info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nisi, sed iste animi omnis officia a iure impedit soluta expedita.</p>
<div className="mt-24 flex flex-1 justify-evenly items-center gap-14 max-lg:flex-col">
{reviews.map((review)=>(

<ReviewCard 
key={review.customerName}
imgURL={review.imgURL}
customerName={review.customerName}
rating={review.rating}
feedback={review.feedback}
/>
))}
</div>
    </section>
  )
}

export default CustomerReviews