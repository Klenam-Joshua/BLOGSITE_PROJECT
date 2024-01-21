import { useEffect } from "react";

export const useDismissModal = (openModal, onClose) => {
  useEffect(() => {
    let onClickListener = null;

    if (openModal) {
      onClickListener = document.addEventListener("click", onClose);
    }

    return () => (onClickListener ? document.removeEventListener("click") : "");
  }, [openModal]);
};
