import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentProyectionComponent } from './content-proyection/content-proyection.component';
import { ButtonComponent } from './content-proyection/button/button.component';
import { MultipleComponent } from './content-proyection/multiple/multiple.component';
import { ContentChildComponent } from './content-child/content-child.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DynamicFormsComponent } from './dynamic-forms/dynamic-forms.component';
import { DynamicFormInputComponent } from './dynamic-forms/dynamic-form-input/dynamic-form-input.component';
import { DynamicFormComponent } from './dynamic-forms/dynamic-form/dynamic-form.component';
import { SharedOperatorComponent } from './shared-operator/shared-operator.component';
import { TableComponent } from './shared-operator/table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { Gridster2Component } from './gridster2/gridster2.component';

import { GridsterModule } from 'angular-gridster2';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    ContentProyectionComponent,
    ButtonComponent,
    MultipleComponent,
    ContentChildComponent,
    DynamicFormInputComponent,
    DynamicFormComponent,
    DynamicFormsComponent,
    SharedOperatorComponent,
    TableComponent,
    Gridster2Component
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    GridsterModule,
    MatIconModule
  ]
})
export class ComponentsModule { }
