import React, { useEffect, useState } from "react";
import { imageUrl } from "../utils";
import useOwnerSearch from "../hooks/useOwnerSerch";
import { TImageContainer } from "../types";
import {
  Img,
  InfoContainer,
  Line,
  OutlinedButton,
  SubTitle,
  Title,
} from "./Styled/Components";

const ImageContainer: React.FC<TImageContainer> = ({
  img,
  handleAddToFavourites,
  isFavourite,
  lastRef,
  onImageClick,
}) => {
  const [imageHovered, setImageHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { owner } = useOwnerSearch(img.owner);

  const handleScreenResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleScreenResize);
  });

  return (
    <div
      ref={lastRef}
      onMouseEnter={() => setImageHovered(true)}
      onMouseLeave={() => setImageHovered(false)}
      style={{ position: "relative" }}
    >
      <Img
        src={imageUrl(img.server, img.id, img.secret)}
        alt={img.title}
        style={{
          opacity: imageHovered || isMobile ? 1 : 0.9,
          objectFit: "cover",
        }}
        onClick={() => onImageClick(img)}
        loading="lazy"
      />
      {(imageHovered || isMobile) && (
        <InfoContainer>
          <Title>{img.title}</Title>
          <Line />
          <SubTitle>{owner}</SubTitle>
          <OutlinedButton
            onClick={() => handleAddToFavourites(img)}
            style={{
              backgroundColor: isFavourite ? "#007782" : "transparent",
            }}
          >
            {isFavourite ? "Unfavourite" : "Favourite"}
          </OutlinedButton>
        </InfoContainer>
      )}
    </div>
  );
};

export default ImageContainer;
