import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateServiceDetailes = ({children}) => {
    

    const {user} = useContext(AuthContext);

    if(user) {
        return children;
    }



    return <Navigate to="/login"></Navigate>
};

export default PrivateServiceDetailes;