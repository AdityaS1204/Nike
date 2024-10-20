import Button from "../Components/Button";

const Subscribe = () => {
  return (
   <section 
   id="section"
   className="max-container flex justify-between items-center max-lg:flex-col gap-10"
   >
    <h3 className="leading-[68px] lg:max-w-md text-4xl font-palanquin font-bold">
      Sign Up from <span className="text-coral-red">Updates</span> & Newsletter
    </h3>
    <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border-slate-gray sm:border rounded-full">
      <input type="text"
      placeholder="subscribe@nike.com"
      className="input"/>
      <div className="flex max-sm:w-full max-sm:justify-end items-center">
        <Button label="Sign Up"
        fullWidth />
      </div>

    </div>
    <button />
   </section>
  )
}

export default Subscribe