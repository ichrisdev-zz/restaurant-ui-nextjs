import jwt_decode from "jwt-decode";
import { useRouter } from "next/router";
import { DashboardLayout } from "../components/DashboardLayout/DashboardLayout";
export const Dashboard = ({ data }: any, { decoded }: any) => {
    const { idUser, userName, phoneNumber, password, email, fk_Rol } = data.listUser;
    const router = useRouter();
    console.log("data" + data.userName);
    console.log("token decode" + decoded);
    const handleLogout = () => {
        localStorage.removeItem('tokenUser');
        // deelte cookie
        document.cookie = "tokenUser=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        router.push("/auth/signIn");

    }
    return (
        <DashboardLayout>
            <h1>Dashboard</h1>

            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={handleLogout}>salir</button>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => router.push("/crud/action")}>Ir a las actions</button>


            <h2> {userName ? userName : 'user not found'}</h2>
            <h2> {email ? email : 'user not found'}</h2>
            <h2> {phoneNumber ? phoneNumber : 'user not found'}</h2>
            <h2> {fk_Rol ? fk_Rol : 'user not found'}</h2>


            {/* <h2> {phoneNumber ? phoneNumber : 'phoneNumber not found'}</h2>
            <h2> {password ? password : 'password not found'}</h2>
            <h2> {email ? email : 'email not found'}</h2>
            <h2> {fk_Rol ? fk_Rol : 'fk_Rol not found'}</h2> */}
        </DashboardLayout>
    )
}
export async function getServerSideProps({ req }: any) {

    //get cookie
    const token = req.cookies.tokenUser;
    console.log("este es el token" + token);
    // token decoder
    let decoded: any = jwt_decode(token);
    console.log("este es el decoded" + decoded.idUser);

    const res = await fetch(`http://localhost:4000/user/adminRole/${decoded.idUser}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
    const data: any = await res.json();

    return {
        props: { data }, // will be passed to the page component as props
    }
}

export default Dashboard

