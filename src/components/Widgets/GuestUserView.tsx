
import { useGoogleLogin } from '@react-oauth/google';
import { GoogleIcon } from '../Icons'

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
            <div className="border border-gray-100 dark:border-slate-700 m-4 p-2 rounded-lg">
                <h2 className="font-extrabold text-lg dark:text-white">
                    New to Twitter?
                </h2>
                <h4 className="text-xs text-slate-500 my-2">
                    Sign up now to get your own personalized timeline!
                </h4>


                <div className="mt-3">
                    <button className='rounded-xl w-full dark:text-white py-2 px-2 font-bold capitalize  text-black border dark:border-slate-700'
                        onClick={handleLogin}
                    >
                        <div className='flex justify-center items-center'>
                            <span className="pr-3 block">
                                <GoogleIcon />
                            </span>

                            <span className='text-sm'>Sign up with Google</span>
                        </div>
                    </button>

                </div>
            </div>

        </>
    )
}


export default GuestUserView