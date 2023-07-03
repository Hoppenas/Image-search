import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FavouriteModal from "./FavouriteModal";

const galleryMock = [
  {
    farm: 66,
    id: "52742765539",
    isfamily: 0,
    isfriend: 0,
    ispublic: 1,
    owner: "197546151@N06",
    secret: "ef499e3ef2",
    server: "65535",
    title: "22629 Entrance to Hoo-Doos",
  },
  {
    farm: 66,
    id: "52742765540",
    isfamily: 0,
    isfriend: 0,
    ispublic: 1,
    owner: "197546151@N06",
    secret: "ef499e3ef2",
    server: "65535",
    title: "22629 Entrance to Hoo-Doos",
  },
  {
    farm: 66,
    id: "52742765541",
    isfamily: 0,
    isfriend: 0,
    ispublic: 1,
    owner: "197546151@N06",
    secret: "ef499e3ef2",
    server: "65535",
    title: "22629 Entrance to Hoo-Doos",
  },
];

const handleAddToFavourites = jest.fn();
const onClose = jest.fn();
const onImageClick = jest.fn();

describe("Favourite gallery", () => {
  it("Favourtie modal renders without crashing with props", () => {
    render(
      <FavouriteModal
        open={true}
        onClose={onClose}
        images={galleryMock}
        handleAddToFavourites={handleAddToFavourites}
        onImageClick={onImageClick}
      />
    );
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getAllByRole("img").length).toBe(galleryMock.length);
  });
});
