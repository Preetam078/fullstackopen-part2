import React, { useEffect, useState } from 'react'
import Header from './components /Header'
import Filter from './components /Filter'
import List from './components /List'
import { addNewContact, fetchContacts, deleteContact } from './services/contacts'

const App = () => {

  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState({name:"", number:""})

  /*run on rendering the component and on reactivating the dependency array */
  useEffect(() => {
    const fetchAllContacts = async() => {
      try {
        fetchContacts().then(
          res => {
            setContacts(res.data)
          }
        )
        .catch(error => {
          console.error(error.message)
        })
      } catch (error) {
        console.error(error)
      }
    }
    fetchAllContacts()
  }, [addNewContact, deleteContact])

  /**Handling the logic if the detailed form is submitted */
  const handleSubmit = () => {
    try {
      const newContact = {
        ...contact, 
        id:contacts.length+1
      }
      addNewContact(newContact).then(res => {
        console.log(res.status)
      })
      .catch(error => {
        console.error(error)
      })
    } catch (error) {
      console.log(error)
    }
  }
  

  return (
    <div>
      <Header></Header>
      <Filter></Filter>
      <form style={{marginTop:"10px"}}>
        <div style={{marginTop:"10px"}}>
          <label>enter the name</label>
          <input value={contact.name} onChange={(e) => setContact({...contact, name:e.target.value})} type='text'/>
        </div>
        <div  style={{marginTop:"10px"}}> 
          <label>enter the number</label>
          <input type='text'value={contact.number} onChange={(e) => setContact({...contact, number:e.target.value})}/>
        </div>
        <button onClick={handleSubmit}>add contact</button>
      </form>
      <List contacts={contacts} deleteContact={deleteContact}></List>
    </div>
  )
}

export default App