import { useContext, useEffect } from "react";
import { contactContext } from "../store/context";

export const ListContact = () => {
  const { contactList, setContactList, handleContact } =
    useContext(contactContext);

  useEffect(() => {
    const getAllContacts = async () => {
      setContactList(await handleContact.get());
    };
    getAllContacts();
  }, []);

  return (
    <>
      {contactList.map((e, i) => (
        <h1 key={i}>
          {e.name} {e.id}
        </h1>
      ))}
    </>
  );
};
