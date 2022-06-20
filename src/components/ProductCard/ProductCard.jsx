
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap'
import './ProductCard.css'
import { Link } from 'react-router-dom'

function ProductCard(props) {

    return (
        <>
            <Card style={{ width: '16rem' }}  >
                <Card.Img src={props.imgUrl} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        $ {props.value}
                    </Card.Text>
                    <Link to={`/product/${props.id}`} id='buttondir'><Button variant="primary">Details</Button></Link>
                </Card.Body>
            </Card>
        </>
    )

}

export default ProductCard