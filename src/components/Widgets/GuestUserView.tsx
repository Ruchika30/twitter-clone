
import { useGoogleLogin } from '@react-oauth/google';


const GuestUserView = () => {

    const handleLogin = useGoogleLogin({
        onSuccess: response => {
            if (response.code) {
                localStorage.setItem('accessToken', response.code)
                window.location.reload();
            }
        },
        onError: codeResponse => console.log("Login failed", codeResponse),
        flow: 'auth-code',
    });

    return (
        <>
            <div className="border m-4 p-2 rounded-lg">
                <h2 className="font-extrabold text-lg">
                    New to Twitter?
                </h2>
                <h4 className="text-xs text-slate-500 my-2">
                    Sign up now to get your own personalized timeline!
                </h4>


                <div className="mt-3">
                    <button className='rounded-xl w-full  py-2 px-2 font-bold capitalize  text-black border'
                        onClick={handleLogin}
                    > Sign up with Google 🚀{' '}</button>

                </div>
            </div>

        </>
    )
}


export default GuestUserView