import React ,{Component} from 'react';
import {CardDeck} from 'react-bootstrap';
import ContactCard from './ContactCard';


class AllContacts extends Component{

    render() {
        return(
            <div> 
                <h3>All Contacts</h3>
                <hr />
                <CardDeck>
                    <ContactCard />  
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