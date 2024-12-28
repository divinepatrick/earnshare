import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { app } from '../firebase.js';


const OAuth = () => {

    const handleGoogleClick = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);

            const result = await signInWithPopup(auth, provider);

            console.log(result);
        }
        catch {
            console.log('Could not sign in with Google', error);
        }
    };

    return (
        <button onClick={handleGoogleClick} type="button" className="bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95">
            Continue with Google
        </button>
    )
}

export default OAuth;

