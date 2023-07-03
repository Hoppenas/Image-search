import styled from "styled-components";

export const GalleryContainer = styled.div`
  max-width: 1220px;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: minmax(250px, 300px);
  margin: 0 auto;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1040;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #e7e7e7;
  box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.75);
  border-radius: 8px;
  max-height: 90%;
  overflow-y: auto;
  padding: 15px;
  margin-bottom: 20px;
  width: 70%;
`;

export const Header = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  color: #fff;
  z-index: 10;
  opacity: 0.9;
  justify-content: space-between;
  padding: 20px;
  display: flex;
  box-sizing: border-box;
`;

export const Input = styled.input`
  width: 150px;
  background: #e7e7e7;
  border: 0;
  color: #808080;
  padding: 10px;
  borderradius: 5px;
`;

export const MainButton = styled.button`
  background: #007782;
  color: #fff;
  padding: 10px;
  border: 0;
  border-radius: 5px;
  cursor: pointer;
`;

export const SecondaryButton = styled.button`
  border-radius: 50%;
  border: 0;
  padding: 4px 8px;
  font-size: 14px;
  color: rgb(0, 119, 130);
  font-weight: 900;
  top: 0;
  right: 0;
  margin: 10px;
  position: absolute;
  cursor: pointer;
`;

export const OutlinedButton = styled.button`
  border-radius: 20px;
  border: 1px solid #fff;
  background-color: transparent;
  color: #fff;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  opacity: 0.8;
`;

export const Background = styled.div`
  background: #e7e7e7;
  width: 100vw;
  height: 100%;
  margin: 0;
`;

export const Loading = styled.div`
  width: fit-content;
  color: #007782;
  margin: 0 auto;
  padding: 20px;
  height: 100vh;
`;

export const Title = styled.p`
  color: white;
  font-size: 20px;
  font-weight: 700;
  max-width: 250px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 10px;
`;

export const SubTitle = styled.p`
  color: white;
  font-size: 18px;
  margin: 10px;
`;

export const Line = styled.div`
  border-bottom: 2px solid #fff;
  width: 40%;
  margin: auto;
`;

export const InfoContainer = styled.div`
  transition: 0.5s ease;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  ms-transform: translate(-50%, -50%);
`;

export const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  display: block;
  transition: 0.5s ease;
  backface-visibility: hidden;
  border-radius: 5px;
  box-shadow: 3px 3px 2px grey;
`;

export const Error = styled.p`
  background: #ff6242;
  padding: 10px 20px;
  border-radius: 5px;
  margin: 0;
`;
