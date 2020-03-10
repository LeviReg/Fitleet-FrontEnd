import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.page.html',
  styleUrls: ['./add-food.page.scss'],
})
export class AddFoodPage implements OnInit {
  foodForm: FormGroup;
  mealType: string;
  foodInfo: any;
  returnedFood: BarcodeInterface;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.foodForm = this.formBuilder.group({
      foodName: [],
      servingSize: [],
      weightType: [],
      calories: [],
    });
  }

  ngOnInit() {
    this.mealType = this.route.snapshot.paramMap.get('mealType');
  }

  getData(data) {
    this.returnedFood = data;
    this.populateFields();
  }

  populateFields() {
    console.log(this.returnedFood);
    console.log(this.returnedFood.product.nutriments['energy-kcal_100g']);
    if (this.returnedFood != undefined) {
      this.foodForm
        .get('foodName')
        .setValue(this.returnedFood.product.product_name);
      this.foodForm
        .get('calories')
        .setValue(this.returnedFood.product.nutriments['energy-kcal_100g']);
    }
  }

  onSubmit() {
    this.foodInfo = {
      foodName: this.foodForm.get('foodName').value,
      servingSize: this.foodForm.get('servingSize').value,
      weightType: this.foodForm.get('weightType').value,
      calories: this.foodForm.get('calories').value,
      mealType: this.mealType,
    };
    console.log(this.foodInfo);
    this.authService.addFood(this.foodInfo).subscribe(res => {
      console.log(res);
    });
    this.router.navigate(['/food-diary']);
  }
}
