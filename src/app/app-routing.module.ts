import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PurePipeComponent } from './pure-pipe/pure-pipe.component';
import { ImpurePipeComponent } from './impure-pipe/impure-pipe.component';
import { NoPipeComponent } from './no-pipe/no-pipe.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'nopipe',
    component: NoPipeComponent
  },
  {
    path: 'purepipe',
    component: PurePipeComponent
  },
  {
    path: 'impurepipe',
    component: ImpurePipeComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
