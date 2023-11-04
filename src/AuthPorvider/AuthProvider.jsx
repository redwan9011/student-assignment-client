import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { GoogleAuthProvider } from "firebase/auth";
import app from '../Firebase/firebase.config';

export const AuthContext = createContext(null)


const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const [user, setUser] = useState(null)
    const [loading , setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();


    const register = ( email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
        
    }

    const login  = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect( ()=>{
        const unSubscriber =  onAuthStateChanged(auth, (currentUser) =>{
                console.log('user in the state changed', currentUser);
                setUser(currentUser)
                setLoading(false)
              
            }) 
            return () => {
                unSubscriber()
            }
    
        }, [auth])

   
    const authInfo = {
        register,
        login,
        user,
        logOut,
        loading,
        googleLogin
    }
    return (
        <AuthContext.Provider value={authInfo}>
             {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children:PropTypes.node
}

export default AuthProvider;