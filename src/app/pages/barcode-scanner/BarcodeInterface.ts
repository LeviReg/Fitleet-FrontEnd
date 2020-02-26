export interface BarcodeInterface {
  product;
}

export interface product {
  nutriments: nutriments[];
}

export interface nutriments {
  proteins_100g: number;
  carbohydrates_100g: number;
  fat_100g: number;
}
