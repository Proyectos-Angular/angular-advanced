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

@NgModule({
  declarations: [
    ContentProyectionComponent,
    ButtonComponent,
    MultipleComponent,
    ContentChildComponent,
    DynamicFormInputComponent,
    DynamicFormComponent,
    DynamicFormsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ComponentsModule { }
