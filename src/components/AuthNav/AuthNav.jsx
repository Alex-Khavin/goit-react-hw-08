import { NavLink } from "react-router-dom"
import css from './AuthNav.module.css'
import clsx from 'clsx'

export default function AuthNav() {
    const isActiveClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.isActive)
}
    return (
        <div>
            <header className={css.header}>
                <nav className={css.nav}>
                    <NavLink to="/register" className={isActiveClass}>Register</NavLink>
                    <NavLink to="/login" className={isActiveClass}>Log In</NavLink>
                </nav>
            </header>
        </div>
    )
}