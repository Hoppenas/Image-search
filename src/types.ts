export type TImages = {
  id: string;
  owner: string;
  secret: string;
  server: string;
  farm: number;
  title: string;
  ispublic: number;
  isfriend: number;
  isfamily: number;
};

export type TApiResponse = {
  error: string;
  loading: boolean;
  images: TImages[];
  hasMore: boolean;
};

export type TOwnerResponse = {
  owner: string;
  error: boolean;
};

export type TImageContainer = {
  lastRef?: (node: HTMLDivElement) => void;
  img: TImages;
  handleAddToFavourites: (img: TImages) => void;
  isFavourite: boolean;
  onImageClick: (image: TImages) => void;
};

export type TFavouriteModal = {
  open: boolean;
  onClose: () => void;
  images: TImages[];
  handleAddToFavourites: (img: TImages) => void;
  onImageClick: (image: TImages) => void;
};

export type TImageModal = {
  open: boolean;
  onClose: () => void;
  img: TImages | undefined;
};
