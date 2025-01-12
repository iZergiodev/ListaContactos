import { useContext } from "react";
import { contactContext } from "../store/context";


export const AddContact = () => {
  const { contactList, setContactList, handleContact } = useContext(contactContext);

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    const newContact = {
      name: e.target.name.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      address: e.target.address.value,
    };

    console.log(newContact)
    
    await handleContact.post(newContact);
    // set(newContact)
  };
  
  const tener = async() => {

    console.log(await handleContact.get())

  }

  tener()

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" />
      <label htmlFor="phone">Phone</label>
      <input type="tel" name="phone" />
      <label htmlFor="email">Email</label>
      <input type="email" name="email" />
      <label htmlFor="address">Dirección</label>
      <input type="text" name="address" />
      <button type="submit">Guardar</button>
    </form>
  );
};
