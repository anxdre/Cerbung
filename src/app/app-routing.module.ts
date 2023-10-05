import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'following',
    loadChildren: () => import('./pages/following/following.module').then(m => m.FollowingPageModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./pages/create/create.module').then(m => m.CreatePageModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./pages/users/users.module').then(m => m.UsersPageModule)
  },
  {
    path: 'prefs',
    loadChildren: () => import('./pages/prefs/prefs.module').then(m => m.PrefsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules}),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
