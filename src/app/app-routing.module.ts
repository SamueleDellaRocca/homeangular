import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componenti/home/home.component';
import { NotfoundComponent } from './componenti/notfound/notfound.component';
import { UsersComponent } from './componenti/users/users.component';
import { UserComponent } from './componenti/user/user.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/homepage" },
  { path: "homepage", component: HomeComponent },
  {
    path: "users", component: UsersComponent, children: [
      { path: ":index", component: UserComponent }
    ],
  },




  { path: "404", component: NotfoundComponent },

  // inserire questo path sempre per ultimo
  { path: "**", redirectTo: "/404" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
