import { useContext, useEffect } from "react";
import { contactContext } from "../store/context";
import { ContactCard } from "../components/ContactCard";
import { useNavigate } from "react-router-dom";

export const ListContact = () => {
  const { contactList, setContactList, handleContact } =
    useContext(contactContext);
  
  useEffect(() => {
    const getAllContacts = async () => {
      setContactList(await handleContact.get());
    };
    getAllContacts();
  }, []);

  const navigate = useNavigate()


  return (
    <>
    <nav className="flex justify-end p-5">
    <button onClick={() => {navigate('/add-contact')}} className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Añadir Contacto</button>

    </nav>
      {contactList.map((e) => (
        <ContactCard
          key={e.id}
          id={e.id}
          name={e.name}
          phone={e.phone}
          email={e.email}
          address={e.address}
        />
      ))}
    </>
  );
};
