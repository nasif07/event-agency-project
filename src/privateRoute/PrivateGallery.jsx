import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const PrivateGallery = ({ children }) => {

    const {user, loading} = useContext(AuthContext);

    if(loading) {
        return <span className="loading loading-spinner text-primary"></span>
    }

    if(user) {
        return children;
    }


    return <Navigate to="/login"></Navigate>
};

export default PrivateGallery;