import { Link, resolvePath, useMatch, useResolvedPath } from "react-router-dom"
export function Navbar() {
    const path = window.location.pathname 
    return(
    <nav className="nav">
    <Link to="/" className="site-title">
        Flex Types
    </Link>
    <ul>
        <CustomLink to="/AlignItems">AlignItems</CustomLink>
        <CustomLink to="/FlexDirection">FlexDirection</CustomLink>
        <CustomLink to="/FlexWrap">FlexWrap</CustomLink>
        <CustomLink to="/LayoutDirection">LayoutDirection</CustomLink>
        <CustomLink to="/AlignContent">AlignContent</CustomLink>
    </ul>
</nav>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvePath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvePath.pathname, end: true})
    

    return ( 
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

export default Navbar;