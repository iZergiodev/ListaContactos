import { useState, ReactNode } from "react";
import { Contact, contactContext } from "./context";

export const ContactProvider = ({ children }: { children: ReactNode }) => {
  
  const [contactList, setContactList] = useState<Contact[]>([]);

  const handleContact = {
    post: async (contacto: Contact) => {
      await fetch(
        "https://playground.4geeks.com/contact/agendas/sergio/contacts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(contacto),
        }
      );
    },

    get: async () => {
      try {
        const resp = await fetch(
          "https://playground.4geeks.com/contact/agendas/sergio"
        );
        const { contacts } = await resp.json();
        return contacts;

      } catch (error) {
        console.log(error);
      }
    },

    delete: async () => {},
  };

  return (
    <contactContext.Provider
      value={{ contactList, setContactList, handleContact }}
    >
      {children}
    </contactContext.Provider>
  );
};
