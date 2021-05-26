import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './component/person/create/create.component';
import { ListComponent } from './component/person/list/list.component';

const routes: Routes = [
  {path:"list", component:ListComponent},
  {path:"create", component:CreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
