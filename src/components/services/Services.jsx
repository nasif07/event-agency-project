import Service from "../service/Service";

const Services = ({ services }) => {
    // console.log(services);
    return (
        <>
            <div style={{backgroundColor: "#F5F5F6"}} className="py-5">
                <div className=" text-center">
                    <h1 className=" font-bold text-5xl underline">Services</h1>
                    <p className="pt-2" >WE ARE THE BEST</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-24 px-16 max-w-[1600px] mx-auto">
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
                </div>
            </div>
        </>
    );
};

export default Services;