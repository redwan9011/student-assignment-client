import { useContext } from "react";

import PropTypes from "prop-types"
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthPorvider/AuthProvider";

const PrivateRout = ({children}) => {

    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading) {
        return <div className="h-screen flex justify-center items-center">
            <span className="loading loading-dots loading-lg "></span>
        </div>
    }
    if(user) {
        return children
    }
    return <Navigate state={location.pathname} to = "/login"></Navigate>
};

PrivateRout.propTypes = {
    children: PropTypes.node
  };

export default PrivateRout;