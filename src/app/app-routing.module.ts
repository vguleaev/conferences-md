import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'schedule',
    loadChildren: './features/schedule/schedule.module#ScheduleModule'
  },
  {
    path: 'admin',
    loadChildren: './features/admin/admin.module#AdminModule'
  },
  {
    path: '',
    redirectTo: 'schedule',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
