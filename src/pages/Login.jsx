import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import swal from 'sweetalert';

const Login = () => {

    const {googleLogIn} = useContext(AuthContext)
    // console.log(googleLogIn);

    const handleLogIn = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        googleLogIn(email, password)
        .then(res => {
            console.log(res);
            swal("Good job!", "Login successful!", "success");
        })
        .catch(err => {
            console.log(err);
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="font-bold text-5xl text-center py-8"><span className=" text-[#FCB41E]">Log </span> in</h1>
                    <p className=" text-lg font-medium text-center text-[#676767] mb-9">Please Login to recive our services.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="Password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn bg-[#FCB41E] text-white my-6">Login</button>
                        <p className="text-center mt-4">Do not have an account <Link className="text=blue-600 font-bold" to="/register">Sign Up</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;