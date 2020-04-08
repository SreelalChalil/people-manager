import React ,{Component} from 'react';
import {CardDeck, Row, Col} from 'react-bootstrap';
import ContactCard from './ContactCard';
import { Link } from 'react-router-dom';


class AllContacts extends Component{

    render() {
        return(
            <div> 
                <h3>All Contacts</h3>
                <hr />
                <CardDeck>
                    <Row>
                    <Col md={3}>
                        <Link className="text-link" to="/details"><ContactCard />  </Link>
                    </Col>
                    <Col md={3}>
                        <Link className="text-link" to="/details"><ContactCard />  </Link>
                    </Col>
                    <Col md={3}>
                        <Link className="text-link" to="/details"><ContactCard />  </Link>
                    </Col>
                    <Col md={3}>
                        <Link className="text-link" to="/details"><ContactCard />  </Link>
                    </Col>
                    <Col md={3}>
                        <Link className="text-link" to="/details"><ContactCard />  </Link>
                    </Col>
                    </Row>
                                
                </CardDeck>
            </div>          
        )
    }
}

export default AllContacts;