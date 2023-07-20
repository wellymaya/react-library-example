import { CSSProperties } from "react";

interface ModalProps {
  /**
   * Style properties
   */
  sx?: CSSProperties;

  /**
   * Button contents
   */
  children: React.ReactNode;

  /**
   * Open?
   */
  open: boolean;

  /**
   * handle open?
   */
  onClose: () => void;
}

export default ModalProps;
