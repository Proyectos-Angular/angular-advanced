import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentProyectionComponent } from './content-proyection/content-proyection.component';
import { ButtonComponent } from './content-proyection/button/button.component';
import { MultipleComponent } from './content-proyection/multiple/multiple.component';
import { ContentChildComponent } from './content-child/content-child.component';

@NgModule({
  declarations: [
    ContentProyectionComponent,
    ButtonComponent,
    MultipleComponent,
    ContentChildComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
