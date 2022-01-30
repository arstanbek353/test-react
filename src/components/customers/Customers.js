import { useEffect } from 'react'
import { Card, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCustomers } from '../../acyncAction/getCustomers'

const Customers = () => {
    const dispath = useDispatch()
    const customers = useSelector(state => state.customers.customers)
    const loading = useSelector(state => state.customers.loading)

    useEffect(() => {
        dispath(fetchCustomers())
    }, []);

    if (loading) {
        return <Spinner animation="border" />
    }
    return (
        <div>
            <h1>Customers</h1>
            {customers.length > 0 ?
                customers.map(item => <Card
                    bg={'light'}
                    key={item.id}
                    border={"warning"}
                    text={'dark'}
                    className="mb-2"
                >
                    <Card.Header>{item.username}</Card.Header>
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>
                            <a href={item.website}>{item.website}</a> <br />
                            {item.phone} <br />
                            {item.email} <br />
                        </Card.Text>
                    </Card.Body>
                </Card>) :
                'нет данных'
            }
        </div>
    )
}

export default Customers