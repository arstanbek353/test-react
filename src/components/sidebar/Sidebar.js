import { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import logo from '../../resource/images/logo.svg'
import close from '../../resource/images/close.svg'
import './Sidebar.scss'

const menuItems = (arr) => {
    if (arr.length === 0) {
        return <div>none</div>
    }
    return arr.map(item => {
        return <li className="Sidebar__item" key={item.name}>
            <NavLink to={item.path}>
                <img src={item.icon} alt="" className="Sidebar__icon" />
                <span className="Sidebar__name">{item.name}</span>
            </NavLink>
        </li>
    })
}

const Sidebar = () => {
    const menu = useSelector(state => state.sidebar.menu)
    const sidebarWrapper = useRef(null);
    const toggleMuneHandler = () => {
        sidebarWrapper.current.classList.toggle('active');
    }
    return (
        <div ref={sidebarWrapper} className={`Sidebar`}>
            <div className="Sidebar__inner">
                <div className="Sidebar__logo">
                    <div className="Sidebar__icon" onClick={toggleMuneHandler} onMouseOver={toggleMuneHandler}>
                        <img src={logo} alt="" />
                    </div>
                    <div className="Sidebar__name">Name company
                    </div>
                    <div className="Sidebar__close" onClick={toggleMuneHandler}>
                        <img src={close} alt="" />
                    </div>
                </div>
                <ul className="Sidebar__list">
                    {menuItems(menu)}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar