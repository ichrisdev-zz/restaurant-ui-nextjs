import Link from "next/link";
import { useRouter } from "next/router";

const navigationRoutes = ['home', 'repository'];
export const MainNavbar = () => {
    const router = useRouter();
    return (
        <nav>
            {navigationRoutes.map((singleRoute) => {
                return (
                    <NavigationLink
                        key={singleRoute}
                        href={`/${singleRoute}`}
                        text={singleRoute}
                        router={router}
                    />
                );
            })}

        </nav>


    )
}

function NavigationLink({ href, text, router }: { href: string, text: string, router: any }) {
    const isActive = router.asPath === (href === "/home" ? "/" : href);
    return (
        <Link href={href === "/home" ? "/" : href} passHref legacyBehavior>
            <a
                href={href === "/home" ? "/" : href}
                className={`${isActive && "nav_item_active"} nav_item`}
            >
                {text}
            </a>
        </Link>
    );
}

export default MainNavbar