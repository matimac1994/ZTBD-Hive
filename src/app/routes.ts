import {Routes} from "@angular/router";
import {ListComponent} from "./component/list/list.component";
import {ShowComponent} from "./component/show/show.component";
import {EditComponent} from "./component/edit/edit.component";
import {CreateComponent} from "./component/create/create.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/create',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'edit',
    component: EditComponent
  },
  {
    path: 'show/:id',
    component: ShowComponent
  }
];
