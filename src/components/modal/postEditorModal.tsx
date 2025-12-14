// src/components/modal/postEditorModal.tsx

import { ImageIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog"; // import 주의
import { usePostEditorModal } from "@/store/postEditorModal";
import { useEffect, useRef, useState } from "react";

export const PostEditorModal = () => {
  const { isOpen, close } = usePostEditorModal();
  const [content, setContent] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleCloseModal = () => {
    close();
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  }, [content]);

  useEffect(() => {
    if (!isOpen) return;
    textareaRef.current?.focus();
    setContent("");
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={handleCloseModal}>
      <DialogContent className="max-h-[90vh]">
        <DialogHeader>
          <DialogTitle>포스트 작성</DialogTitle>
          <textarea
            ref={textareaRef}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="max-h-[500px] min-h-[100px] focus:outline-none"
            placeholder="무슨 일이 있었나요?"
          />
          <Button variant={"outline"}>
            <ImageIcon />
            이미지 추가
          </Button>
          <Button>저장</Button>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
