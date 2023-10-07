import { HiOutlineHomeModern } from "react-icons/hi2";
const AboutWe = () => {

    return (
        <div className="py-12">
            <div>

                <h1 className="font-bold text-5xl text-center py-8"><span className=" text-[#FCB41E]">Hello! </span>We Are an Event <br /> Planning Agency</h1>
                <p className=" text-lg font-medium text-center text-[#676767]">As the premier event planning company in the area, we know that it is not “one size fits all”. <br /> Each event and client is unique and we believe our services should be as well. We know that it should be <br /> “Can I hire a planner?” not “Can I afford one?”.</p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 max-w-[1600px] mx-auto">
                <div className="card w-96text-neutral-content">
                    <div className="card-body items-center text-center">
                    <h2><HiOutlineHomeModern className="text-7xl text-[#FD625B]"></HiOutlineHomeModern></h2>
                        <h2 className="card-title">Find the perfect <br /> venue for free</h2>
                    </div>
                </div>
                <div className="card w-96text-neutral-content">
                    <div className="card-body items-center text-center">
                    <h2><HiOutlineHomeModern className="text-7xl text-[#FD625B]"></HiOutlineHomeModern></h2>
                        <h2 className="card-title">Find the perfect <br /> venue for free</h2>
                    </div>
                </div>
                <div className="card w-96text-neutral-content">
                    <div className="card-body items-center text-center">
                    <h2><HiOutlineHomeModern className="text-7xl text-[#FD625B]"></HiOutlineHomeModern></h2>
                        <h2 className="card-title">Find the perfect <br /> venue for free</h2>
                    </div>
                </div>
                <div className="card w-96text-neutral-content">
                    <div className="card-body items-center text-center">
                    <h2><HiOutlineHomeModern className="text-7xl text-[#FD625B]"></HiOutlineHomeModern></h2>
                        <h2 className="card-title">Find the perfect <br /> venue for free</h2>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutWe;




{/* 

<h2>Find the perfect venue for free</h2> */}