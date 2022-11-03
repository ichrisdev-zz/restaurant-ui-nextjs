import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';


export const SignIn = () => {
    const url = 'http://localhost:4000/auth/login';
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
    });
    const router = useRouter();
    const handleSubmit = async (e: any) => {

        e.preventDefault();
        const res = await axios.post(url, credentials);
        console.log(res);

        if (res.status === 200) {
            return router.push("/repository");
        }
        if (res.status === 400) {
            console.log(res.data.message)
        }

    };

    return (
        <div>
            <h1>Sign In</h1>
            <form  >
                <input type="email" placeholder="email" onChange={(e) => setCredentials({
                    ...credentials,
                    email: e.target.value,
                })} />
                <input type="password" placeholder="password" onChange={(e) =>
                    setCredentials({
                        ...credentials,
                        password: e.target.value,
                    })
                } />
                <button type="submit">Sign In</button>
            </form>
        </div>
    )

}

export default SignIn