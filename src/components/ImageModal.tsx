import React from "react";
import { TImageModal } from "../types";
import { ImageSize, imageUrl } from "../utils";
import {
  Img,
  ModalContainer,
  ModalOverlay,
  SecondaryButton,
} from "./Styled/Components";

const ImageModal: React.FC<TImageModal> = ({ open, onClose, img }) => {
  if (!open) return null;
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer
        onClick={(e) => {
          e.stopPropagation();
        }}
        style={{ padding: 0 }}
      >
        <SecondaryButton onClick={onClose}>x</SecondaryButton>
        {img && (
          <Img
            src={imageUrl(img.server, img.id, img.secret, ImageSize.Large)}
            alt={img.title}
            style={{ objectFit: "cover" }}
          />
        )}
      </ModalContainer>
    </ModalOverlay>
  );
};

export default ImageModal;
