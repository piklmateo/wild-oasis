import { HiXMark } from "react-icons/hi2";
import ReactModal from "react-modal";
import { ReactNode } from "react";
import { useModal } from "../context/ModalContext";

const customStyles = {
  content: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "var(--color-grey-0)",
    borderRadius: "var(--border-radius-lg)",
    boxShadow: "var(--shadow-lg)",
    padding: "1rem 1rem",
    height: "65dvh",
    overflowY: "scroll",
    transition: "all 0.5s",
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    backgroundColor: "var(--backdrop-color)",
    backdropFilter: "blur(4px)",
    zIndex: 1000,
    transition: "all 0.5s",
  },
} as ReactModal.Styles;

interface ModalProps {
  children: ReactNode;
}

const Modal = ({ children }: ModalProps) => {
  const { modalIsOpen, closeModal } = useModal();

  return (
    <ReactModal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} ariaHideApp={false}>
      <button
        className="absolute top-5 right-5 text-gray-700 hover:text-indigo-700 hover:bg-gray-200 hover:rounded-md p-1 text-2xl transition-all"
        onClick={closeModal}
      >
        <HiXMark />
      </button>
      {children}
    </ReactModal>
  );
};

export default Modal;
