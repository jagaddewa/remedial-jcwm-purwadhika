import React from 'react' 
import NavigationBar from '../components/NavBar'
import Axios from 'axios'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Image from 'react-bootstrap/Image'


class PageHome extends React.Component{

    constructor(props){
       super(props)
       this.state={
            Products:[],
            visibility:false,
       }
    }


    componentDidMount(){
        Axios.get('http://localhost:4000/products').then(res=>{
            this.setState({Products:res.data})
        })
    }
    
    /*
    function ModalDetail () {
        const [show, setShow] = useState(false);
        
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
        return(
            <>
            <Button onclick={handleShow}><i class="fas fa-shopping-bag"></i> Tes</Button>
            <Modal show={show} onhide={handleClose} animation={false} style={{width: '800px'}}>
                <Modal.Header closeButton>
                <Modal.Title>{item.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Image src={item.img}/>
                    <p>{item.price}</p>
                    <p>{item.stock}</p>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    <i class="fas fa-times"></i> Close
                </Button>
                </Modal.Footer>
            </Modal>
            </>
        );
    }*/

    ShowProduct=()=>{
        let CurrentProduct=this.state.Products
        console.log(CurrentProduct)

        const { visibility } = this.state

        return(
            CurrentProduct.map((item,index)=>{
                return(
                    <Card style={{width: '600px', margin: '15px'}} key={index}>
                        <Card.Img variant="top" src={item.img} />
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>{item.price}</Card.Text>
                            <Card.Text>Stok: {item.stock}</Card.Text>
                            <Button><i class="fas fa-shopping-bag"></i></Button>
                            {/*Di bawah harusnya isi detil barang*/}
                        </Card.Body>
                    </Card>
                )
            })
        )
    }

    render(){
        return(
            <Container>
                <NavigationBar />
                    <div style={Styles.contProducts}>
                        {this.ShowProduct()}
                    </div>
            </Container>
        )
    }
}

const Styles={
    contProducts: {
        display: 'flex',
        flexWrap: 'wrap',
        borderRadius: "10px"
    }
}
export default PageHome