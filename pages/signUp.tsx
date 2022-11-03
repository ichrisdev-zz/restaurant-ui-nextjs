import { useRouter } from 'next/router';
import { useFormik } from 'formik'
import * as yup from 'yup'

interface Values {
    email: string,
    userName: string,
    phoneNumber: string,
    password: string,
}

const registerSchema = yup.object({
    email: yup.string().email().required(),
    userName: yup.string().required(),
    phoneNumber: yup.string().required(),
    password: yup.string().required(),
})

const initialValues: Values = {
    email: '',
    userName: '',
    phoneNumber: '',
    password: '',
}

export const SignUp = () => {

    const router = useRouter();

    const formik = useFormik({
        validationSchema: registerSchema,
        initialValues,
        onSubmit: () => {
            router.push('/dashboard')
        },
    })

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={formik.handleSubmit} >
                <input type="text" />
                <button type="submit">Sign In</button>
            </form>
        </div>
    )

}

export default SignUp