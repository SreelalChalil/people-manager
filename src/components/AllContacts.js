import React ,{Component} from 'react';
import {CardDeck} from 'react-bootstrap';
import ContactCard from './ContactCard';
import { Link } from 'react-router-dom';


class AllContacts extends Component{

    render() {
        return(
            <div> 
                <h3>All Contacts</h3>
                <hr />
                <CardDeck>
                    <Link className="text-link" to="/details"><ContactCard />  </Link>
                    <ContactCard />  
                    <ContactCard />  
                    <ContactCard />  
                    <ContactCard />               
                </CardDeck>
            </div>          
        )
    }
}

export default AllContacts;