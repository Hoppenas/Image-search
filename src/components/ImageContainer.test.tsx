import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ImageContainer from "./ImageContainer";
import { ImageSize } from "../utils";

const imgMock = {
  farm: 66,
  id: "52742765539",
  isfamily: 0,
  isfriend: 0,
  ispublic: 1,
  owner: "197546151@N06",
  secret: "ef499e3ef2",
  server: "65535",
  title: "22629 Entrance to Hoo-Doos",
};

const handleAddToFavourites = jest.fn();
const onImageClick = jest.fn();
const imageSize = ImageSize.Small;

const imgUrl = `https://live.staticflickr.com/${imgMock.server}/${imgMock.id}_${imgMock.secret}_${imageSize}.jpg`;

describe("Image container", () => {
  it("Image container renders without crashing with props", () => {
    render(
      <ImageContainer
        img={imgMock}
        handleAddToFavourites={handleAddToFavourites}
        isFavourite={false}
        onImageClick={onImageClick}
      />
    );
    expect(screen.getByAltText(imgMock.title)).toBeDefined();
    expect(screen.getByRole("img")).toHaveAttribute("src", imgUrl);
  });
  it("Image container on hover shows title, owner and Favourite button", () => {
    render(
      <ImageContainer
        img={imgMock}
        handleAddToFavourites={handleAddToFavourites}
        isFavourite={false}
        onImageClick={onImageClick}
      />
    );
    const image = screen.getByRole("img");
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
    fireEvent.mouseEnter(image);
    expect(screen.getByText("Favourite")).toBeDefined();
    fireEvent.mouseLeave(image);
    expect(screen.queryByText(imgMock.title)).not.toBeInTheDocument();
  });
});
