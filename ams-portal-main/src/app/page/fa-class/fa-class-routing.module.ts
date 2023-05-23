import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FaClassListingComponent} from "./fa-class-listing/fa-class-listing.component";

const routes: Routes = [
  { path: '', component: FaClassListingComponent },
  { path: 'list', component: FaClassListingComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FaClassRoutingModule { }
