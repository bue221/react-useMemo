import React from "react";

import "./modal.css";

const Modal = ({ open, close, children }) => {
  const handleModalDialogClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className={`modal ${open && "modal-open"}`} onClick={close}>
      <div className="modal__dialog" onClick={handleModalDialogClick}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
