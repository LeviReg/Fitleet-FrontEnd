import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.page.html',
  styleUrls: ['./add-food.page.scss']
})
export class AddFoodPage implements OnInit {
  foodForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.foodForm = this.formBuilder.group({
      foodName: [],
      Serving: [],
      ServingSize: [],
      Calories: []
    });
  }

  ngOnInit() {}

  onSubmit() {
    console.log(this.foodForm.value);
  }
}
