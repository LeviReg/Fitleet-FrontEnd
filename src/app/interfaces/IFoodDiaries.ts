export interface IFoods {
  foodName: String,
  servingSize: String,
  weightType: String,
  calories:  String,
  carbs:  String,
  fats:  String,
  protein: String,
  mealType: String,
  _id: String,
}

export interface IFoodDiaries {
  foods:IFoods[],
  _id: String,
  userID: String,
}
