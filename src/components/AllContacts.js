import React ,{Component} from 'react';
import {CardDeck, Row, Col} from 'react-bootstrap';
import ContactCard from './ContactCard';
import { Link } from 'react-router-dom';
import firebase from '../config/firebase';

class AllContacts extends Component{

    constructor(props) {
        super(props);
        this.ref = firebase.firestore().collection('contacts');
        this.unsubscribe = null;
        this.state = {
          contacts: []
        };
      }
    
      onCollectionUpdate = (querySnapshot) => {
        // initialises a contacts array
        const contacts = [];
        querySnapshot.forEach((doc) => {
          const { name } = doc.data();
          // push each record to contacts array
          contacts.push({
            key: doc.id,
            name, 
          });
        });

        this.setState({contacts});
      }
    
      componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
      }

    render() {
        return(
            <div> 
                <h3>All Contacts</h3>
                <hr />
                <CardDeck>
                    <Row>
                    {this.state.contacts.map(contact =>
                    <Col md={3} key={contact.key}>
                        <Link className="text-link" to={`details/${contact.key}`} key={contact.key}>
                            <ContactCard  id={contact.key} key={contact.key}/>  
                        </Link>
                    </Col>
                     )}
                    </Row>
                                
                </CardDeck>
            </div>          
        )
    }
}

export default AllContacts;