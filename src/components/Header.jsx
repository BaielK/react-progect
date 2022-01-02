import { NavLink } from "react-router-dom"

export const Header = ({
    count
}) => {
    return (
        <div className='app-header'>
            <div className='app-header__inner app-container'>
                <NavLink to='/'>
                    <span className='app-header__logo'>myFilm</span>
                </NavLink>

                <nav>
                    <NavLink to='/collection'>
                        <div>
                            Моя коллекция { count > 0 && `(${count})` }
                        </div>
                    </NavLink>
                </nav>
            </div>
        </div>
    )
}