import { useEffect } from 'react'
import { Card, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../../acyncAction/getPosts'

const Employees = () => {

    const dispath = useDispatch()
    const posts = useSelector(state => state.posts.posts)
    const loading = useSelector(state => state.posts.loading)

    useEffect(() => {
        dispath(fetchPosts())
    }, []);

    if (loading) {
        return <Spinner animation="border" />
    }

    return (
        <div>
            <h1>Employees</h1>
            {posts.length > 0 ?
                posts.map(item => <Card
                    bg={'light'}
                    border={"primary"}
                    key={item.id}
                    text={'dark'}
                    className="mb-2"
                >
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
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

export default Employees