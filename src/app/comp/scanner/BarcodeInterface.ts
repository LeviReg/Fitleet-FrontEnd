export interface BarcodeInterface {
  object: product[];
}

export interface product {
  nutriments: nutriments[];
}

export interface nutriments {
  protein_100g: number;
  carbohydrates_100g: number;
  fat_100g: number;
}
