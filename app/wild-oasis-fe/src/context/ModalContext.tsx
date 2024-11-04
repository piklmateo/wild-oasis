import { createContext, useContext, useState, ReactNode } from "react";
import { Cabin } from "../services/data/types";

interface ModalContextProps {
  modalIsOpen: boolean;
  modalType: "add" | "edit" | null;
  selectedCabin: Cabin | null;
  openModal: (type: "add" | "edit", cabin?: Cabin) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

const ModalContextProvider = ({ children }: { children: ReactNode }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalType, setModalType] = useState<ModalContextProps["modalType"]>(null);
  const [selectedCabin, setSelectedCabin] = useState<Cabin | null>(null);

  const openModal = (type: "add" | "edit", cabin?: Cabin) => {
    setModalType(type);
    setSelectedCabin(cabin ?? null);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalType(null);
    setSelectedCabin(null);
  };

  return (
    <ModalContext.Provider value={{ modalIsOpen, modalType, selectedCabin, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error("useModal was used outside ModalContextProvider");
  return context;
};

export { ModalContextProvider, useModal };
