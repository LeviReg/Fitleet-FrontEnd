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
    loadChildren: './pages/home/home.module#HomePageModule',
    canActivate: [AuthGuardService],
  },
  {
    path: 'register',
    loadChildren: './pages/register/register.module#RegisterPageModule',
  },
  {
    path: 'pedometer',
    loadChildren: './pages/pedometer/pedometer.module#PedometerPageModule',
    canActivate: [AuthGuardService],
  },
  {
    path: 'food-diary',
    loadChildren: './pages/food-diary/food-diary.module#FoodDiaryPageModule',
    canActivate: [AuthGuardService],
  },
  {
    path: 'workout-tracker',
    loadChildren:
      './pages/workout-tracker/workout-tracker.module#WorkoutTrackerPageModule',
    canActivate: [AuthGuardService],
  },
  {
    path: 'profile',

    loadChildren: './pages/profile/profile.module#ProfilePageModule',
    canActivate: [AuthGuardService],
  },
  {
    path: 'rest',
    loadChildren: './pages/rest-timer/rest-timer.module#RestTimerPageModule',
    canActivate: [AuthGuardService],
  },
  {
    path: 'workout-arms/:type',
    loadChildren:
      './pages/workout-arms/workout-arms.module#WorkoutArmsPageModule',
    canActivate: [AuthGuardService],
  },
  {
    path: 'add-food/:mealType',
    loadChildren: './pages/add-food/add-food.module#AddFoodPageModule',
    canActivate: [AuthGuardService],
  },
  {
    path: 'work-select',
    loadChildren: './pages/work-select/work-select.module#WorkSelectPageModule',
    canActivate: [AuthGuardService],
  },
  {
    path: 'add-food/:mealType',
    loadChildren: './pages/add-food/add-food.module#AddFoodPageModule',
    canActivate: [AuthGuardService],
  },
  {
    path: 'edit-workout/:type',
    loadChildren:
      './pages/edit-workout/edit-workout.module#EditWorkoutPageModule',
    canActivate: [AuthGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
