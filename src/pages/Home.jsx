import { useLoaderData } from "react-router-dom";
import BGImage from "../assets/bg.jpg"
import Services from "../components/services/Services";
import AboutWe from "../components/aboutWe/AboutWe";


const Home = () => {

    const {services} = useLoaderData();
    console.log(services);
    return (
        <>
            <div className="hero min-h-[90vh]" style={{ backgroundImage: `url(${BGImage})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-6xl font-bold"><span className=" text-[#FCB41E]">We create</span><br />You celebrate</h1>
                        <p className="mb-5 pt-10 text-white text-lg font-medium">Planning a wedding, Proposal, or Event in our busy city is not so easy. and it takes skills and time to make it all look easy-going</p>
                        <button className="btn bg-[#FCB41E] text-white font-bold">Services</button>

                    </div>
                </div>
            </div>
            <Services services={services}></Services>
            <AboutWe></AboutWe>

        </>
    );
};

export default Home;