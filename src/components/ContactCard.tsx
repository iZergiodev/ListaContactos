import { useContext } from "react";
import { contactContext } from "../store/context";

export const ContactCard = ({ id, name, phone, email, address }) => {
  const { handleContact } = useContext(contactContext);

  const handleDelete = async () => {
    await handleContact.delete(id);
    await handleContact.get();
  };

  return (
    <div className="border p-5 w-[50%] flex flex-col m-auto items-center gap-2 mt-5 rounded-lg bg-gray-100">
      <div>
        <h1 className="text-3xl font-bold">{name}</h1>
      </div>
      <h4>{phone}</h4>
      <h4>{email}</h4>
      <h4>{address}</h4>
      <div className="mx-auto">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Actualizar
        </button>
        <button
          onClick={handleDelete}
          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          Borrar
        </button>
      </div>
    </div>
  );
};
