import { useEffect } from "react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAccountAction } from "../../actionCreator/actionCreator"

import './Header.scss'

const Search = () => {
    const [value, setValue] = useState('');
    return (
        <input className={'form-control'} type="text" placeholder="Поиск..." value={value} onChange={(e) => setValue(e.target.value)} />
    )
}


const Accout = (props) => {
    const getInitails = (arr = [props.accout.name, props.accout.patronymic]) => {
        return arr.map(str => !!str === false || str === '' ? '' : str.charAt(0) + '.')
    }
    const initials = getInitails()
    return (
        <div className="Header__accout">
            <div className="Header__name">{props.accout.surname} {initials}</div>
            <div className="Header__avatar">
                {
                    props.accout.avatar ?
                        <img src={props.accout.avatar} alt="" /> :
                        <div>{initials}</div>
                }
            </div>
        </div>
    )
}

const Header = () => {
    const dispatch = useDispatch()
    const account = useSelector(state => state.account)
    useEffect(() => {
        dispatch(getAccountAction())
    }, [])
    return (
        <div className={'Header'}>
            <div className="Header__inner">
                <div className="col-3">

                    {<Search />}
                </div>
                {<Accout accout={account} />}
            </div>
        </div>
    )
}

export default Header