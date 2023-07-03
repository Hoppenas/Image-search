import { useState, useEffect } from "react";
import { galleryUrl } from "../utils";
import { TApiResponse, TImages } from "../types";

const checkForDublicates = (oldImages: TImages[], newImages: TImages[]) => {
  const gallery = [...oldImages];
  newImages.forEach((newImg) => {
    if (!gallery.some((oldImg) => oldImg.id === newImg.id)) {
      gallery.push(newImg);
    }
  });
  return gallery;
};

const useImageSearch = (query: string, pageNumber: number): TApiResponse => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [images, setImages] = useState<TImages[]>([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setImages([]);
  }, [query]);

  useEffect(() => {
    setError("");

    const timeout = setTimeout(() => {
      if (query) {
        setLoading(true);
        fetch(galleryUrl(query, pageNumber))
          .then((response) => response.json())
          .then((data) => {
            setImages((prevImages) =>
              checkForDublicates(prevImages, data.photos.photo)
            );
            setHasMore(data.photos.pages > pageNumber);
            setLoading(false);
          })
          .catch((e) => setError(e.message));
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [query, pageNumber]);

  return { loading, error, images, hasMore };
};

export default useImageSearch;
