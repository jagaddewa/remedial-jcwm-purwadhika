import React from 'react' 
import NavigationBar from '../components/NavBar'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { getHistory } from '../redux/actions'

class PageHistory extends React.Component{
    componentDidMount() {
        this.props.getHistory()
    }

    render() {
        if (!this.props.email) {
            return <Redirect to="/login" />
        }

        return (
            <div style={{ padding: '1%', minHeight: '100vh' }}>
                <NavigationBar />
                <div style={{ marginTop: '10vh' }}>
                    <h1>History Page</h1>
                    <Accordion>
                        {this.props.history.reverse().map((item, index) => {
                            return (
                                <Card key={index}>
                                    <Accordion.Toggle as={Card.Header} variant="link" eventKey={index.toString()}>
                                       E-mail: {item.email}, Time: {item.time}
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey={index.toString()}>
                                        <Table striped bordered hover variant="dark">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Image</th>
                                                    <th>Name</th>
                                                    <th>Price</th>
                                                    <th>Quantity</th>
                                                    <th>Total Price</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {item.products.map((item2, index2) => {
                                                    return (
                                                        <tr>
                                                            <td>{index2 + 1}</td>
                                                            <td><Image src={item2.image} style={{ width: '70px' }} rounded /></td>
                                                            <td>{item2.name}</td>
                                                            <td>IDR {item2.price.toLocaleString()},00</td>
                                                            <td>{item2.qty}</td>
                                                            <td>IDR {(item2.qty * item2.price).toLocaleString()},00</td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </Table>
                                    </Accordion.Collapse>
                                </Card>
                            )
                        })}
                    </Accordion>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        email: state.UserReducer.email,
        history: state.HistoryReducer.history
    }
}

export default PageHistory