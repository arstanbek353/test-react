import { useState } from 'react'
import filter from '../../resource/images/filter.svg'
import './Filter.scss'

const Create = (props) => {
    const [value, setValue] = useState('');
    return <div className="col">
        <input
            className="form-control"
            name={props.fields.name}
            type={props.fields.type}
            placeholder={props.fields.name}
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
    </div>
}

const Filter = () => {
    const [isOpen, setOpen] = useState(false);

    const fields = [
        { name: 'from', type: 'date' },
        { name: 'to', type: 'date' },
        { name: 'name', type: 'text' },
        { name: 'tel', type: 'tel' }
    ]

    return (
        <div className={`Filter ${isOpen ? 'active' : ''}`}>
            <div className="Filter__header">
                <div className="Filter__mtitle card-title">Filter</div>
                <div className="Filter__open" onClick={() => setOpen(!isOpen)}>
                    <img src={filter} alt="" />
                </div>
            </div>
            <div className="Filter__inner row">
                {
                    isOpen ?
                        fields.map(item => <Create key={item.name} fields={item} />) :
                        null
                }
            </div>
        </div>
    )
}

export default Filter