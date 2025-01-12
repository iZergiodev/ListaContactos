import { createContext } from "react";

export interface Contact {
  id?: number;
  name: string;
  phone: number;
  email: string;
  address: string;
}

  export const contactContext = createContext(null);