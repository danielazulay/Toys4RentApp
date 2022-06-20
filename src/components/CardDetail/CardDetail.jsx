import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap'
import { Link, useParams, useNavigate } from 'react-router-dom'
import toyServices from '../../services/ToyServices'
import './CardDetail.css'
import { AiTwotoneDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { AiOutlineRollback } from "react-icons/ai";

function ProductCard(props) {

  const { id } = useParams()

  const history = useNavigate()

  const handleDelete = (event) => {
    event.preventDefault()
    toyServices.deleteToy(id).then((res) => {
      alert('The item was deleted')
    }, (err) => {
      console.log(err)
      alert('Error occured')
    })

    history('/')


  }
  return (

    <div>
      {/*    <Card>
        <Card.Header>{props.name}d</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            {props.description}
          </Card.Text>
          <Link to='/alltoys'><AiOutlineRollback /></Link>

          <Link to={`/edittoy/${id}`}><AiFillEdit /></Link>

          <a onClick={(event) => handleDelete(event)}>
            <AiTwotoneDelete />
          </a>

        </Card.Body>

      </Card> */}
      <div id='detailed'><h1>{props.name}</h1>
        <img src={props.url} />
        <p> {props.description}</p>
      </div>


    </div>



  )

}

export default ProductCard