import MainNavbar from "../../MainNavbar/MainNavbar";

export interface NavbarLayoutProps {
    children: React.ReactNode;
}

export const NavbarLayout = ({ children }: NavbarLayoutProps) => {
    return (
        <div>
            <MainNavbar />
            {children}
        </div>
    )
}

export default NavbarLayout