import { useState, useEffect } from 'react'
import './styles.css'
import List from "./List"
import Form from "./Form"

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "Berkcan",
      phone_number: "90555555555"
    },{
      fullname: "Ceren",
      phone_number: "90666666666"
    },
    {
      fullname: "Halil",
      phone_number: "90777777777"
    },
    {
      fullname: "Ayşe",
      phone_number: "90888888888"
    }
  ]); 

  useEffect(() => {
    console.log(contacts);
  }, [contacts])
  return (
    <div id='container'>
      <h1>Contacts App</h1>
      <List contacts={contacts} />
      <Form addContacts={setContacts} contacts={contacts} />
    </div>
  )
}

export default Contacts
