import React, { useCallback, useEffect, useRef, useState } from "react";
import ImageContainer from "../components/ImageContainer";
import useImageSearch from "../hooks/useImageSearch";
import FavouriteModal from "../components/FavouriteModal";
import {
  Background,
  Error,
  GalleryContainer,
  Header,
  Input,
  Loading,
  MainButton,
} from "../components/Styled/Components";
import { TImages } from "../types";
import ImageModal from "../components/ImageModal";
import GlobalStyle from "../components/Styled/GlobalStyles";

const Dashboard = () => {
  const [query, setQuery] = useState("postcard");
  const [pageNumber, setPageNumber] = useState(1);
  const [favouriteGallery, setFavouriteGallery] = useState<TImages[]>([]);
  const [openFavouriteModal, setOpenFavouriteModal] = useState(false);
  const [openImageModal, setOpenImageModal] = useState(false);
  const [activeImage, setActiveImage] = useState<TImages>();

  const handleImageNameChange = (name: string) => {
    setPageNumber(1);
    setQuery(name);
  };

  useEffect(() => {
    const favouriteImages = localStorage.getItem("favouriteGallery");
    if (favouriteImages) setFavouriteGallery(JSON.parse(favouriteImages));
  }, []);

  useEffect(() => {
    if (favouriteGallery.length > 0)
      localStorage.setItem(
        "favouriteGallery",
        JSON.stringify(favouriteGallery)
      );
  }, [favouriteGallery]);

  const { loading, error, images, hasMore } = useImageSearch(query, pageNumber);

  const observer = useRef<IntersectionObserver>();

  const lastImageElementRef = useCallback(
    (node: HTMLDivElement) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  const handleAddToFavourites = (image: TImages) => {
    if (favouriteGallery.some((img) => img.id === image.id)) {
      setFavouriteGallery((prevState) => [
        ...prevState.filter((img) => img.id !== image.id),
      ]);
    } else {
      setFavouriteGallery((prevState) => [...prevState, image]);
    }
  };

  const handleOpenImageModal = (image: TImages) => {
    setActiveImage(image);
    setOpenImageModal(true);
  };

  const closeImageModal = () => {
    setOpenImageModal(false);
    setActiveImage(undefined);
  };

  return (
    <Background>
      <GlobalStyle />
      <Header>
        <Input
          onChange={(event) => handleImageNameChange(event.target.value)}
          value={query}
          placeholder="Please add image name"
        />
        {error && <Error>!!! {error} !!!</Error>}
        <MainButton
          onClick={() => setOpenFavouriteModal(true)}
          title="Favourite"
        >
          Favourite
        </MainButton>
      </Header>
      <GalleryContainer style={{ paddingTop: "80px" }}>
        {images.map((img, index) => (
          <ImageContainer
            lastRef={
              images.length === index + 1 ? lastImageElementRef : undefined
            }
            key={img.id}
            img={img}
            handleAddToFavourites={handleAddToFavourites}
            isFavourite={favouriteGallery.some(
              (favImg) => favImg.id === img.id
            )}
            onImageClick={() => handleOpenImageModal(img)}
          />
        ))}
      </GalleryContainer>
      {loading && <Loading>Loading...</Loading>}
      <FavouriteModal
        open={openFavouriteModal}
        onClose={() => setOpenFavouriteModal(false)}
        images={favouriteGallery}
        handleAddToFavourites={handleAddToFavourites}
        onImageClick={handleOpenImageModal}
      />
      <ImageModal
        open={openImageModal}
        onClose={closeImageModal}
        img={activeImage}
      />
    </Background>
  );
};

export default Dashboard;
