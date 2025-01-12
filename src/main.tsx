import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import { ListContact } from "./views/ListContact";
import { AddContact } from "./views/AddContact";
import { BrowserRouter } from "react-router-dom";
import { ContactProvider } from "./store/contactContext";
import { UpdateContact } from "./views/UpdateContact";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ContactProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListContact />} />
          <Route path="/add-contact" element={<AddContact />} />
          <Route path="/update-contact" element={<UpdateContact />} />
        </Routes>
      </BrowserRouter>
    </ContactProvider>
  </StrictMode>
);
