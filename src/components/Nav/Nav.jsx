import './Nav.css';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'


function Navb() {


    return (

        <Nav className="justify-content-center p-0 m-0" activeKey="/home" >
            <Nav.Item className="m-4 nav-item">
                <Nav.Link href='/signup'>Sign Up</Nav.Link>
            </Nav.Item>
            <Nav.Item className="m-4 nav-item">
                <Nav.Link href='/login'>Login</Nav.Link>
            </Nav.Item>
            <Nav.Item className="m-4 nav-item">
                <Nav.Link href='/alltoys'>All Toys</Nav.Link>
            </Nav.Item>
            <Nav.Item className="m-4 nav-item">
                <Nav.Link href='/formtoy'>New Toy</Nav.Link>
            </Nav.Item>
            <Nav.Item className="m-4 nav-item">
                <Nav.Link href='/formtoy'></Nav.Link>
            </Nav.Item>

        </Nav >

    )


}

export default Navb