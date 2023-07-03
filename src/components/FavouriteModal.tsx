import React from "react";
import { TFavouriteModal } from "../types";
import ImageContainer from "./ImageContainer";
import {
  GalleryContainer,
  ModalContainer,
  ModalOverlay,
  SecondaryButton,
} from "./Styled/Components";

const FavouriteModal: React.FC<TFavouriteModal> = ({
  open,
  onClose,
  images,
  handleAddToFavourites,
  onImageClick,
}) => {
  if (!open) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <SecondaryButton onClick={onClose}>x</SecondaryButton>
        <GalleryContainer style={{ padding: "30px 0" }}>
          {images.length ? (
            images.map((img) => (
              <ImageContainer
                img={img}
                key={img.id}
                handleAddToFavourites={handleAddToFavourites}
                isFavourite={true}
                onImageClick={() => onImageClick(img)}
              />
            ))
          ) : (
            <p>No favourite images in the gallery...</p>
          )}
        </GalleryContainer>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default FavouriteModal;
