import { createContext, ReactNode, useContext, useState } from "react";

interface ModalContextProviderProps {
  children: ReactNode;
}

interface ModalContextType {
  modalIsOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

const ModalContextProvider = ({ children }: ModalContextProviderProps) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return <ModalContext.Provider value={{ modalIsOpen, openModal, closeModal }}>{children}</ModalContext.Provider>;
};

function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined) throw new Error("ModalContext was used outside of ModalContextProvider");
  return context;
}

export { useModal, ModalContextProvider };
