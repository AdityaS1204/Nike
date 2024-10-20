
const ShoeCard = ({imgURL,changeBigShoeImage, bigShoeImg}) => {
const handleClick = () => {
  if(bigShoeImg !== imgURL.bigShoe){
    changeBigShoeImage(imgURL.bigShoe)
  }
}


  return (
 <div className={`
 border-2 rounded-xl shadow-lg-slate-700
 ${bigShoeImg === imgURL.bigShoe ? 'border-coral-red':'border-transparent'} cursor-pointer max-sm:flex-1` }
 onClick={handleClick}
 >
  <div className="bg-card bg-center bg-cover flex justify-center items-center sm:h-40 rounded-xl max-sm:p-4">
  <img
   src={imgURL.thumbnail}
    alt="Shoe collection"
    width={127}
    height={103}
    className="object-contain"
  
  />

  </div>
 </div>
  )
}

export default ShoeCard;