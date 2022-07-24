import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatePageRoutingModule } from './create-page-routing.module';
import { CreatePageComponent } from './create-page.component';
import {ReactiveFormsModule} from "@angular/forms";
import {ChipsModule} from "primeng/chips";
import {InputNumberModule} from "primeng/inputnumber";
import {DropdownModule} from "primeng/dropdown";
import {InputTextModule} from "primeng/inputtext";
import {FileUploadModule} from "primeng/fileupload";


@NgModule({
  declarations: [
    CreatePageComponent
  ],
  imports: [
    CommonModule,
    CreatePageRoutingModule,
    ReactiveFormsModule,
    InputTextModule,
    InputNumberModule,
    DropdownModule,
    FileUploadModule,
  ]
})
export class CreatePageModule { }
