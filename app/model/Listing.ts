export interface ListingItem {
  id: number;
  title: string;
  images: Image[];
  price: number;
  categoryId: number;
  userId: number;
  location: Location;
}

export interface Image {
  url: string;
  thumbnailUrl: string;
}

export interface Location {
  latitude: number;
  longitude: number;
}
