export const apiKey = "d414cf72a47385522ad301bf96fa55ef";

export const ownerUrl = (userId: string) =>
  `https://www.flickr.com/services/rest/?method=flickr.people.getInfo&api_key=${apiKey}&user_id=${userId}&format=json&nojsoncallback=1`;

export enum ImageSize {
  "Small" = "w",
  "Medium" = "z",
  "Large" = "b",
}

export const imageUrl = (
  server: string,
  photoId: string,
  secret: string,
  imageSize: ImageSize = ImageSize.Small
) =>
  `https://live.staticflickr.com/${server}/${photoId}_${secret}_${imageSize}.jpg`;

export const perPage = 20;

export const galleryUrl = (query: string, pageNumber: number) =>
  `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${query}&per_page=${perPage}&page=${pageNumber}&format=json&nojsoncallback=1`;
