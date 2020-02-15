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
    path: 'workout-arms',
    loadChildren:
      './pages/workout-arms/workout-arms.module#WorkoutArmsPageModule'
  },
  {
    path: 'workout-legs',
    loadChildren:
      './pages/workout-legs/workout-legs.module#WorkoutLegsPageModule'
  },
  {
    path: 'workout-shoulders',
    loadChildren:
      './pages/workout-shoulders/workout-shoulders.module#WorkoutShouldersPageModule'
  },
  {
    path: 'workout-back',
    loadChildren:
      './pages/workout-back/workout-back.module#WorkoutBackPageModule'
  },
  {
    path: 'workout-progress',
    loadChildren:
      './pages/workout-progress/workout-progress.module#WorkoutProgressPageModule'
  },
  {
    path: 'workout-item',
    loadChildren:
      './pages/workout-item/workout-item.module#WorkoutItemPageModule'
  },
  {
    path: 'work-select',
    loadChildren: './pages/work-select/work-select.module#WorkSelectPageModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
