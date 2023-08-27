import { NavLink } from "react-router-dom"
import s from './NotFound.module.css'


const NotFound: React.FC = () => {
    return (
        <>
            <div className={s.errorWrapper}>
                <div>
                    Страница не найдена
                </div>
                <NavLink className={s.errorLink} to='/'>Подобрать оттенок </NavLink>
            </div>
        </>
    )
}

export default NotFound