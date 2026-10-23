import React from 'react'
import {useState} from 'react'
export default function Contacts() {
    const [name,setName]=useState("")
    const [phone,setPhone]=useState("")
    const[contacts,setContacts]=useState([
        {id:1,name:"ahmed",phone:"059595959"},
          {id:2,name:"hosam",phone:"059595959"},
    ])
    const handleSubmit =()=>{
        const newitem={
            id:Date.now(),
            name:name,
            phone:phone
        }
        setContacts([...contacts,newitem])
        setName("")
        setPhone("")
    }
    const removeItem =(id)=>{
        setContacts(contacts.filter(i=>i.id !==id))
    }
  return (
    <div>
        <h2>Conatcts list</h2>
        {contacts.map((item)=>{
            return(
                <div key={item.id}>
            <p>
             id#:   {item.id}
            </p>
             <p>
              Name:  {item.name}
            </p>
             <p>
               Phone:  {item.phone}
            </p>
            <button onClick={()=>removeItem(item.id)}>delete</button>
            </div>
            )
          
        })}
        <>
            <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
            <input type="text" onChange={(e)=>setPhone(e.target.value)} value={phone}/>
            <button onClick={handleSubmit}>Add new contact</button>
        </>
    </div>
  )
}
