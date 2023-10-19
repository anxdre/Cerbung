import {NgModule} from '@angular/core';
import {mapToCanActivate, PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AuthGuard} from "./shared/guards/auth.guard";
import {AppComponent} from "./app.component";

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/main/main.module').then(m => m.MainPageModule),
  },
  {
    path: 'auth/sign-in',
    loadChildren: () => import('./pages/sign-in/sign-in.module').then( m => m.SignInPageModule),
    pathMatch: "full"
  },
  {
    path: 'auth/sign-up',
    loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupPageModule),
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules}),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
