//@ts-nocheck
import { createContext, useMemo } from 'react';

export const AuthContext = (createContext({ isLoggedIn: () => boolean }))


const AuthProvider = (props: any) => {
    const isLoggedIn = useMemo(() => {
        if (!localStorage.getItem('accessToken')) {
            return false
        }
        return true
    }, [])


    return (

        <AuthContext.Provider value={{ isLoggedIn }} >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider