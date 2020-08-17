import React from 'react';
import {Link} from "react-router-dom";
import { Navbar, Button } from 'react-bootstrap';
// import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './signout.css'

class Signout extends React.Component {
    render(){
        // const { route } = this.props;
        return (
            <Navbar sticky="top" bg="dark-blue" className='signout'>
                <div>    
                    <Navbar.Brand>
                        <Link to="/">
                        <img
                            alt=""
                            src="/logo.png"
                            width="45"
                            height="35"
                            className=""
                        /></Link>
                        <Link className='white f4 pointer hover-white name-size'to='/'>Sourav Rishishwar</Link>
                    </Navbar.Brand>
                </div>
                <div>
                    <Link to="/"><Button className=' mr3 b bg-black' variant="outline-success">Home</Button></Link>
                </div>    
                {/* {(route === 'signin' || route === 'register')
                    ?<Form inline>
                    </Form>
                    :<div>
                        <Link to="/"><Button className=' mr3 b bg-black' variant="outline-success">Home</Button></Link>
                        <Button onClick={()=>onRouteChange('signin')} className='b' variant="outline-success">Signout</Button>
                    </div>
                } */}
            </Navbar>
        );
    }
}

export default Signout;