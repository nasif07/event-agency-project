import gate1 from '../assets/col1.jpg'
import gate2 from '../assets/col2.jpg'
import gate3 from '../assets/col3.jpg'
import gate4 from '../assets/col4.jpg'
import g1 from '../assets/g1.jpg'
import g2 from '../assets/g2.jpg'
import g3 from '../assets/g3.jpg'
import g4 from '../assets/g4.jpg'
import g5 from '../assets/g5.jpg'
import g6 from '../assets/g6.jpg'
import g7 from '../assets/g7.jpg'
import g8 from '../assets/g8.jpg'



const Gallery = () => {
    return (
        <div style={{ backgroundColor: "#F5F5F6" }} className="max-w-[1600px] mx-auto px-16">
            <div className=" text-center">
                <h1 className=" font-bold text-5xl py-6"><span className="text-[#FCB41E]">Welcome</span> to our gallery</h1>
                <p className="pt-2 text-[#676767] text-lg font-medium pb-8" >Here our some previous work photo of our team.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-9">
                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={gate1} alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={g1} alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={g2} alt="" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={g3} alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={gate2} alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={g4} alt="" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={gate3} alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={g5} alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={g6} alt="" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={g7} alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={gate4} alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={g8} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;