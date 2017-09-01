import { WallComponent } from './wall/wall.component';
import { User1Component } from './user1/user1.component';

import {Routes, RouterModule} from '@angular/Router';
import { GuestComponent } from './guest/guest.component';


const APP_ROUTES: Routes = [
  { path: '', component : WallComponent },
  { path: 'user1', component: User1Component },
   { path: 'guest', component: GuestComponent }

];

export const MyRoutes = RouterModule.forRoot(APP_ROUTES);
