import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { EventDetailComponent }  from './event-detail/event-detail.component';

const routes: Routes = [
  { path: 'events', component: EventsComponent },
//{ path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: 'detail/:id', component: EventDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }