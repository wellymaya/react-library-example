import { useRef } from "react";
import { ModalContent, ModalOverlay, Button } from "./Modal.styles";
import ModalProps from "./Modal.types";
import { ReactComponent as CloseIcon } from "../../assets/icons/CloseIcon.svg";

const Modal = ({ sx, children, open, onClose, ...props }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  if (open) {
    document.addEventListener("mousedown", handleOutsideClick);
  } else {
    document.removeEventListener("mousedown", handleOutsideClick);
  }

  const handleClose = () => onClose();

  return (
    <>
      {open && (
        <ModalOverlay style={sx}>
          <ModalContent ref={modalRef} {...props}>
            <Button onClick={handleClose}>
              <CloseIcon />
            </Button>
            <div>{children}</div>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

export default Modal;
