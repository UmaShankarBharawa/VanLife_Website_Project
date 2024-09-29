import { Link, NavLink } from 'react-router-dom'

export default function Header() {

    return (
        <header className="vans-header">
            <Link to='/' className="nav--logo">#VANLIFE</Link>
            <nav className='header--nav'>
                <NavLink
                    to='/host'
                    className={({ isActive }) => `nav--host ${isActive ? "active-style" : null}`}
                >
                    Host
                </NavLink>
                <NavLink
                    to='/about'
                    className={({ isActive }) => `nav--about ${isActive ? "active-style" : null}`}
                >
                    About
                </NavLink>
                <NavLink
                    to='/vans'
                    className={({ isActive }) => `nav--vans ${isActive ? "active-style" : null}`}
                >
                    Vans
                </NavLink>
            </nav>
        </header>
    )
}

