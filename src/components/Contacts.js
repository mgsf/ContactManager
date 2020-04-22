import React, {Component} from 'react';
import Contact from './Contact'

class Contacts extends Component {
    constructor() {
        super();
        this.state ={
            contacts: [
                {
                    id: 1,
                    name: 'John Doe',
                    email: 'jdoe@gmail.com',
                    phone: '555-555-5555'
                },
                {
                    id: 2,
                    name: 'Kenan Fonseka',
                    email: 'kenan@gmail.com',
                    phone: '222-222-2222'
                },
                {
                    id: 3,
                    name: 'Shenath Orlando',
                    email: 'orlando@gmail.com',
                    phone: '333-333-3333'
                }
            ]
        }
    }

    render() {
        const {contacts} = this.state;

        return (
            <div>
                {contacts.map(contact => (
                    <Contact
                        key={contact.id}
                        name={contact.name}
                        email={contact.email}
                        phone={contact.phone}
                    />
                ))}
            </div>
        );
    }
}

export default Contacts;