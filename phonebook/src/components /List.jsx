import React from 'react'

const List = ({contacts, deleteContact}) => {
    const handleDelete = (contactId) => {
        try {
            deleteContact(contactId)
        } catch (error) {
            console.error(error)
        }
      };
      
      return (
        <div>
          <h2>Numbers</h2>
          <div>
            {contacts.map((contact) => (
              <div key={contact.name}>
                <h4>
                  {contact.name} {contact.number}
                </h4>
                <button onClick={() => handleDelete(contact.id)}>delete</button>
              </div>
            ))}
          </div>
        </div>
      );
      
}

export default List