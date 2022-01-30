import { Container, Row, Col } from 'react-bootstrap'
import Customers from '../customers/Customers'
import Employees from '../employees/Employees'

const Home = () => {
    return (
        <div className="Home">
            <Container>
                <Row>
                    <Col className="Home__customers">
                        {
                            <Customers />
                        }
                    </Col>
                    <Col className="Home__posts">
                        {
                            <Employees />
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home