import './Footer.css';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'


function Footer() {


    return (

        <Nav className="justify-content-center p-0 m-0" activeKey="/home" id="foot"  >
            <Nav.Item className="m-4 nav-item">
                <Nav.Link href='https://www.linkedin.com/in/daniel-azulay/'>Design By Daniel Azulay</Nav.Link>
            </Nav.Item>

        </Nav >

    )


}

export default Footer