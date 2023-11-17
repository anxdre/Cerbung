import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('../detail/detail.module').then(m => m.DetailPageModule)
  },
  {
    path: 'edit-data/:id',
    loadChildren: () => import('../edit-data/edit-data.module').then(m => m.EditDataPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
