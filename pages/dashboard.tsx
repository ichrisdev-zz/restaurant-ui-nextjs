import { useSelector } from "react-redux";
import { AppState } from "../store/store";

export const Dashboard = () => {
    const { userName, phoneNumber, password, email, fk_Rol } = useSelector((state: AppState) => state.user);
    return (
        <div>
            <h1>Dashboard</h1>
            <h2> {userName ? userName : 'user not found'}</h2>
            <h2> {phoneNumber ? phoneNumber : 'phoneNumber not found'}</h2>
            <h2> {password ? password : 'password not found'}</h2>
            <h2> {email ? email : 'email not found'}</h2>
            <h2> {fk_Rol ? fk_Rol : 'fk_Rol not found'}</h2>
        </div>
    )
}

export default Dashboard