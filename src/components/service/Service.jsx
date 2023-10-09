import { Link } from "react-router-dom";

const Service = ({ service }) => {
    // console.log(service);
    const { id, name, image, price, short_description, bg_color} = service;
    return (
        <div className="card">
            <><img src={image} alt="event" /></>
            <div style={{background: bg_color}} className="card-body">
                <h2 className="card-title text-white font-bold">{name}</h2>
                <p className="text-white">{short_description}</p>
                <p className="text-white font-bold text-xl">{price}</p>
                <div className="card-actions justify-center">
                    <Link to={`/service/${id}`}><button className="btn bg-[#FCB41E] text-white">see more....</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Service;