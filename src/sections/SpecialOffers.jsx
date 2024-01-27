import { offer } from "../assets/images"
import Button from "../components/button"
import { arrowRight } from "../assets/icons"
const SpecialOffers = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1 flex flex-col-reverse">
        <img src={offer} alt="" width={773} height={687} className="object-contain w-full" />
      </div>
      <div className="flex flex-col flex-1">
            <h2 className="text-4xl font-palanquin font-bold lg:max-w-lg"><span className="text-coral-red">Special </span>Offers</h2>
            <p className=" lg:max-w-lg mt-6  text-slate-gray info-text ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora animi sapiente esse facere sit ipsa quisquam </p>
            <p className=" lg:max-w-lg mt-6 font-montserrat text-slate-gray info-text ">sint autem, harum eveniet veritatis alias a omnis eaque praesentium quis laborum, reprehenderit molestias? Quisquam tempore amet sint!</p>
            <div className="mt-11 flex flex-wrap gap-4">
              <Button label="Shop now" iconURL={arrowRight} />
              <Button label="Learn More"  backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray"    />
            </div>
        </div>

    </section>
  )
}

export default SpecialOffers