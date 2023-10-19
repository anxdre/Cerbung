import {NgModule} from '@angular/core';
import {Routes, RouterModule, mapToCanActivate} from '@angular/router';

import {MainPage} from './main.page';
import {AuthGuard} from "../../shared/guards/auth.guard";

const routes: Routes = [
  {
    path: 'tab',
    component: MainPage,
    canActivate:mapToCanActivate([AuthGuard]),
    children: [
      {
        path: 'home',
        loadChildren: () => import('../main/home/home.module').then(m => m.HomePageModule),
      },
      {
        path: 'following',
        loadChildren: () => import('../main/following/following.module').then(m => m.FollowingPageModule),

      },
      {
        path: 'create',
        loadChildren: () => import('../main/create/create.module').then(m => m.CreatePageModule),

      },
      {
        path: 'users',
        loadChildren: () => import('../main/users/users.module').then(m => m.UsersPageModule),

      },
      {
        path: 'prefs',
        loadChildren: () => import('../main/prefs/prefs.module').then(m => m.PrefsPageModule),
      },
    ]
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('../main/detail/detail.module').then(m => m.DetailPageModule),
  },
  {
    path: '',
    redirectTo: 'tab/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {
}
