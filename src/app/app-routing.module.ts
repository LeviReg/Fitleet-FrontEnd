import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  {
    path: 'home',
    pathMatch: 'full',
    loadChildren: './pages/home/home.module#HomePageModule'
  },
  {
    path: 'register',
    loadChildren: './pages/register/register.module#RegisterPageModule'
  },
  {
    path: 'pedometer',
    loadChildren: './pages/pedometer/pedometer.module#PedometerPageModule'
  },
  {
    path: 'food-diary',
    loadChildren: './pages/food-diary/food-diary.module#FoodDiaryPageModule'
  },
  {
    path: 'workout-tracker',
    loadChildren:
      './pages/workout-tracker/workout-tracker.module#WorkoutTrackerPageModule'
  },
  {
    path: 'profile',

    loadChildren: './pages/profile/profile.module#ProfilePageModule'
  },
  {
    path: 'rest',
    loadChildren: './pages/rest-timer/rest-timer.module#RestTimerPageModule'
  },
  {
    path: 'barcode-scanner',
    loadChildren:
      './pages/barcode-scanner/barcode-scanner.module#BarcodeScannerPageModule'
  },
  {
    path: 'workout-arms/:type',
    loadChildren:'./pages/workout-arms/workout-arms.module#WorkoutArmsPageModule'
  },
    
 // {
//   path: 'workout-back',
 //   loadChildren:
  //     './pages/workout-back/workout-back.module#WorkoutBackPageModule'
  // },
  {
        path: 'work-select',
        loadChildren: './pages/work-select/work-select.module#WorkSelectPageModule'
  },
  {
    path: 'add-food/:mealType',
    loadChildren: './pages/add-food/add-food.module#AddFoodPageModule'
  },
  { path: 'edit-workout/:type', loadChildren: './pages/edit-workout/edit-workout.module#EditWorkoutPageModule' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
