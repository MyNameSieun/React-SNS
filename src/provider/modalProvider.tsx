// src/provider/modalProvider.tsx

import { PostEditorModal } from "@/components/modal/postEditorModal";
import { createPortal } from "react-dom";

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
    {createPortal(<PostEditorModal/>, document.getElementById("modal-root")!,)}
      {children}
    </>
  );
};
