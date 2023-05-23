import {NgModule} from '@angular/core';

import {FaClassRoutingModule} from './fa-class-routing.module';
import {FaClassListingComponent} from './fa-class-listing/fa-class-listing.component';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    FaClassListingComponent
  ],
  imports: [
    SharedModule,
    FaClassRoutingModule
  ]
})
export class FaClassModule { }
