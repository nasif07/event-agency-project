import { AiFillPhone, AiFillSnippets } from "react-icons/ai";
import { BsStopwatch } from "react-icons/bs";
import { FaLocationDot } from 'react-icons/fa6';
const Contact = () => {
    return (
        <div style={{ backgroundColor: "#F5F5F6" }} className="py-12">
            <div>
                <h1 className="font-bold text-5xl text-center py-8"><span className=" text-[#FCB41E]">Hello! </span> here our address, email, <br /> phone number and sessions</h1>
                <p className=" text-lg font-medium text-center text-[#676767] pb-6">Event Agency</p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 max-w-[1600px] mx-auto">
                <div className="card w-96text-neutral-content bg-whi">
                    <div className="card-body items-center text-center">
                        <h2><FaLocationDot className="text-7xl text-[#FD625B]"></FaLocationDot></h2>
                        <h2 className=" font-bold text-3xl my-6">Postal Address</h2>
                        <p className=" text-lg font-medium text-center text-[#676767]">Unica Event Agency</p>
                        <p className=" text-lg font-medium text-center text-[#676767]">85 Fentiman Ave</p>
                        <p className=" text-lg font-medium text-center text-[#676767]">Ottawa, ON K1S 0T7</p>
                        <h2 className="w-10 h-10 pt-2 rounded-full bg-[#FCB41E] text-white font-bold mt-5">1</h2>
                    </div>
                </div>
                <div className="card w-96text-neutral-content">
                    <div className="card-body items-center text-center">
                        <h2><AiFillPhone className="text-7xl text-[#FD625B]"></AiFillPhone></h2>
                        <h2 className=" font-bold text-3xl my-6">Phone & E-mail</h2>
                        <p className=" text-lg font-medium text-center text-[#676767]">Phone: 1-800-64-38</p>
                        <p className=" text-lg font-medium text-center text-[#676767]">Fax: 1-800-64-39</p>
                        <p className=" text-lg font-medium text-center text-[#676767]">office@fable.com</p>
                        <h2 className="w-10 h-10 pt-2 rounded-full bg-[#FCB41E] text-white font-bold mt-5">2</h2>
                    </div>
                </div>
                <div className="card w-96text-neutral-content">
                    <div className="card-body items-center text-center">
                        <h2><BsStopwatch className="text-7xl text-[#FD625B]"></BsStopwatch></h2>
                        <h2 className=" font-bold text-3xl my-6">Open Hours</h2>
                        <p className=" text-lg font-medium text-center text-[#676767]">Monday - Friday</p>
                        <p className=" text-lg font-medium text-center text-[#676767]">8.00 am - 5.00 pm</p>
                        <p className=" text-lg font-medium text-center text-[#676767]">Weekend Closed</p>
                        <h2 className="w-10 h-10 pt-2 rounded-full bg-[#FCB41E] text-white font-bold mt-5">3</h2>
                    </div>
                </div>
                <div className="card w-96text-neutral-content">
                    <div className="card-body items-center text-center">
                        <h2><AiFillSnippets className="text-7xl text-[#FD625B]"></AiFillSnippets></h2>
                        <h2 className=" font-bold text-3xl my-6">Sessions
</h2>
                        <p className=" text-lg font-medium text-center text-[#676767]">Mornings, 8 am - 12 noon</p>
                        <p className=" text-lg font-medium text-center text-[#676767]">Afternoons, 1 pm - 5 pm</p>
                        <p className=" text-lg font-medium text-center text-[#676767]">Full Day, 8 am - 5 pm</p>
                        <h2 className="w-10 h-10 pt-2 rounded-full bg-[#FCB41E] text-white font-bold mt-5">4</h2>
                    </div>
                </div>
               

            </div>
        </div>
    );
};

export default Contact;