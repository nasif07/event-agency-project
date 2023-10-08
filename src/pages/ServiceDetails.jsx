import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";



const ServiceDetails = () => {

    const [serviceItem, setServiceItem] = useState();

    const { id } = useParams()




    const { services } = useLoaderData();
    console.log(id);

    useEffect(() => {
        const findServiceItem = services.find(service => service.id == id);
        setServiceItem(findServiceItem);
    }, [id, services])

    console.log(serviceItem);
    const { image, price, name, long_description, bg_color, short_description } = serviceItem || {};



    return (
        <>

            <div className="px-16 max-w-[1600px] mx-auto">
                <h1 className="font-bold text-5xl text-center py-8"><span className=" text-[#FCB41E]">Hello! </span> <br />Here your desired plan!!</h1>
                <p className=" text-lg font-medium text-center text-[#676767] mb-9">Before you buy our services please contact us.</p>


                <div className="card">
                    <img className="mx-7 max-h-[70vh]" src={image} alt="Shoes" />
                    <div className="card-body">
                        <h2 className="card-title font-bold text-2xl">{name}</h2>
                        <p className="text-lg font-medium text-[#676767]">{long_description}</p>
                        <p className=" font-bold text-xl mt-3">Price: {price}</p>
                        <div className="card-actions">
                            <button className="btn bg-[#FCB41E] text-white my-6">buy now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceDetails;