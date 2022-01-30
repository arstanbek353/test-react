import { useEffect } from 'react'
import { Card, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { fetchComments } from '../../acyncAction/getComments'

const Analytics = () => {

    const dispath = useDispatch()
    const comments = useSelector(state => state.comments.comments)
    const loading = useSelector(state => state.comments.loading)

    useEffect(() => {
        dispath(fetchComments())
    }, []);

    if (loading) {
        return <Spinner animation="border" />
    }

    return (
        <div>
            <h1>Analytics</h1>
            {comments.length > 0 ?
                comments.map(item => <Card
                    bg={'light'}
                    key={item.id}
                    border={"success"}
                    text={'dark'}
                    className="mb-2"
                >
                    <Card.Header>{item.name}</Card.Header>
                    <Card.Body>
                        <Card.Title>{item.email}</Card.Title>
                        <Card.Text>
                            {item.body}
                        </Card.Text>
                    </Card.Body>
                </Card>) :
                'нет данных'
            }
        </div>
    )
}

export default Analytics