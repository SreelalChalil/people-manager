import React ,{useEffect,useState} from 'react';
import {CardDeck, Row, Col} from 'react-bootstrap';
import ContactCard from './ContactCard';
import { Link } from 'react-router-dom';
import {db} from '../config/firebase';

function AllContacts() {

  const [contacts,setContacts] = useState([])
    
  useEffect(() => {
      const unsubscribe = db.collection("contacts")
                          .orderBy('name')
                          .onSnapshot( (querySnapshot) => {
                              const mycontacts = querySnapshot.docs.map((doc) => ({
                                      key: doc.id,
                                      ...doc.data()
                                  }))
                              setContacts(mycontacts)
                          })                      
      
      return () => unsubscribe() 
  },[])

  return(
            <div> 
                <h3>All Contacts</h3>
                <hr />
                <CardDeck>
                    <Row>
                      {contacts.map(contact =>
                      <Col md={3} key={contact.key}>
                          <Link className="text-link" to={`details/${contact.key}`}>
                              <ContactCard  contact={contact} />  
                          </Link>
                      </Col>
                      )}
                    </Row>              
                </CardDeck>
            </div>          
      )
}
export default AllContacts;