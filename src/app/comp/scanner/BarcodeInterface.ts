interface BarcodeInterface {
  product: product;
  status: number;
}

interface product {
  product_name: string;
  nutriments: nutriments;
}

interface nutriments {
  protein_100g: string;
  carbohydrates_100g: string;
  fat_100g: string;
  'energy-kcal_100g': string;
}
