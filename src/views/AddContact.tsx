import { useContext } from "react";
import { contactContext } from "../store/context";
import { useNavigate } from "react-router-dom";

export const AddContact = () => {
  const { handleContact } = useContext(contactContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newContact = {
      name: e.target.name.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      address: e.target.address.value,
    };

    await handleContact.post(newContact);
    navigate("/");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[50%] flex flex-col mx-auto min-h-[100vh] justify-center"
    >
      <label htmlFor="name" className="block mb-2 text-sm text-slate-600 mt-2">
        Name
      </label>
      <input
        type="text"
        name="name"
        className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" required
      />
      <label htmlFor="phone" className="block mb-2 text-sm text-slate-600 mt-2">
        Phone
      </label>
      <input
        type="tel"
        name="phone"
        className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" required
      />
      <label htmlFor="email" className="block mb-2 text-sm text-slate-600 mt-2">
        Email
      </label>
      <input
        type="email"
        name="email"
        className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" required
      />
      <label
        htmlFor="address"
        className="block mb-2 text-sm text-slate-600 mt-2"
      >
        Dirección
      </label>
      <input
        type="text"
        name="address"
        className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" required
      />
      <div className="self-center mt-10">
        <button
          type="submit"
          className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Guardar
        </button>
      </div>
    </form>
  );
};
