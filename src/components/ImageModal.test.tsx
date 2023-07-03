import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ImageModal from "./ImageModal";
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

const imageSize = ImageSize.Large;

const imgUrl = `https://live.staticflickr.com/${imgMock.server}/${imgMock.id}_${imgMock.secret}_${imageSize}.jpg`;

const onClose = jest.fn();

describe("Image modal", () => {
  it("Image modal renders without crashing with props", () => {
    render(<ImageModal open={true} onClose={onClose} img={imgMock} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute("src", imgUrl);
  });
});
