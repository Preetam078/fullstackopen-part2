import axios from "axios";

const baseUrl = `http://localhost:3002/contacts`

/**Functional API to make get all the data from the server */
const fetchContacts = () => {
    return axios.get(baseUrl)
}

/**Functional API to add the contact into the server */
const addNewContact = (newContact) => {
    return axios.post(baseUrl, newContact)
}

/**Functional API to delete the contact into the server */
const deleteContact = (id) => {
    return axios.delete(`${baseUrl}/${id}`);
}

export {fetchContacts, addNewContact, deleteContact}