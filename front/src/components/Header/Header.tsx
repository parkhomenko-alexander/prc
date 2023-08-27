import { NavLink } from 'react-router-dom'
import s from './Header.module.css'
import { headerItems } from './headerItems'

const setActive = ({ isActive }: { isActive: boolean }) => isActive ? s.active : ''

const Header: React.FC = () => {

    return (
        <div className={s.headerWrapper}>
            <ul className={s.header}>
                {headerItems.map((e, i) => {
                    return (
                        <li key={i}>
                            <NavLink to={e.path} className={setActive}>{e.title}</NavLink>
                        </li>
                    )
                })}

            </ul>
        </div >


    )
}

export default Header