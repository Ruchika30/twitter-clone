

import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';


const Login = (): JSX.Element => {
    const login = useGoogleLogin({
        onSuccess: tokenResponse => console.log("tokenResponse---", tokenResponse),
        flow: 'auth-code',

    });

    return (
        <>
            <div className='w-5'>
                <GoogleLogin
                    type='standard'
                    onSuccess={credentialResponse => {
                        console.log("credentialResponse---", credentialResponse);
                    }}
                    onError={() => {
                        console.log('Login Failed');
                    }}
                />
            </div>
            {/* <button onClick={() => login()}>
                Sign in with Google 🚀{' '}
            </button>; */}
        </>
    )
}

export default Login