import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  {
    path: 'home',
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
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
