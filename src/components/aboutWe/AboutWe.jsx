import { HiOutlineHomeModern } from "react-icons/hi2";
import { LiaSmsSolid, LiaChalkboardTeacherSolid } from "react-icons/lia";
import { GiPartyPopper } from "react-icons/gi";
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
                        <h2 className="w-10 h-10 pt-2 rounded-full bg-[#FCB41E] text-white font-bold mt-5">1</h2>
                    </div>
                </div>
                <div className="card w-96text-neutral-content">
                    <div className="card-body items-center text-center">
                        <h2><LiaSmsSolid className="text-7xl text-[#FD625B]"></LiaSmsSolid></h2>
                        <h2 className="card-title">Connect with the <br /> best vendor</h2>
                        <h2 className="w-10 h-10 pt-2 rounded-full bg-[#FCB41E] text-white font-bold mt-5">2</h2>
                    </div>
                </div>
                <div className="card w-96text-neutral-content">
                    <div className="card-body items-center text-center">
                        <h2><LiaChalkboardTeacherSolid className="text-7xl text-[#FD625B]"></LiaChalkboardTeacherSolid></h2>
                        <h2 className="card-title">Let us help you <br /> with the event</h2>
                        <h2 className="w-10 h-10 pt-2 rounded-full bg-[#FCB41E] text-white font-bold mt-5">3</h2>
                    </div>
                </div>
                <div className="card w-96text-neutral-content">
                    <div className="card-body items-center text-center">
                        <h2><GiPartyPopper className="text-7xl text-[#FD625B]"></GiPartyPopper></h2>
                        <h2 className="card-title">Enjoy the party <br /> with your friends</h2>
                        <h2 className="w-10 h-10 pt-2 rounded-full bg-[#FCB41E] text-white font-bold mt-5">4</h2>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutWe;





{/* 

<h2>Find the perfect venue for free</h2> */}