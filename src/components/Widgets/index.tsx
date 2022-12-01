import { useContext } from "react";
import { AuthContext } from '../../use-auth'


const Widgets = () => {
    const { isLoggedIn } = useContext(AuthContext);

    return (
        <>
            <div className="border m-4 p-2 rounded-lg">
                <h2 className="font-extrabold text-lg">
                    New to Twitter?
                </h2>
                <h4 className="text-sm text-slate-500">
                    Sign up now to get your own personalized timeline!
                </h4>


                <div id="customBtn" className="customGPlusSignIn">
                    <span className="icon"></span>
                    <span className="buttonText">Google</span>
                </div>


            </div>
        </>

    )

}

export default Widgets