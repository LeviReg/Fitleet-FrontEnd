export interface Data {
  name: string;
  id: number;
  category: string;
  image_thumbnail: string;
  image: string;
}

export interface Suggestion {
  data: Data;
  value: string;
}

export interface RootObject {
  suggestions: Suggestion[];
}

export class SearchResult implements SearchResult {
  name: string;
  id: string;
  category: string;
  image_thumbnail: string;
  image: string;

  constructor(
    name: string,
    id: string,
    category: string,
    image_thumbnail: string,
    image?: string
  ) {
    this.name = name;
    this.id = id;
    this.category = category;
    this.image_thumbnail = image_thumbnail;
    this.image = image;
  }
}
