import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ContentProyectionComponent } from './content-proyection/content-proyection.component';
import { ContentChildComponent } from './content-child/content-child.component';
import { DynamicFormComponent } from './dynamic-forms/dynamic-form/dynamic-form.component';
import { DynamicFormsComponent } from './dynamic-forms/dynamic-forms.component';
import { SharedOperatorComponent } from './shared-operator/shared-operator.component';
import { Gridster2Component } from './gridster2/gridster2.component';

const routes: Routes = [

  {
    path: 'content-proyection', component: ContentProyectionComponent,
    data: {
      title: 'Conten Proyection'
    }
  },
  {
    path: 'content-child', component: ContentChildComponent,
    data: {
      title: 'Content Child'
    }
  },
  {
    path: 'dynamic-form', component: DynamicFormsComponent
  },
  {
    path: 'shared', component: SharedOperatorComponent
  },
  {
    path: 'gridster2', component: Gridster2Component
  }

]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ComponentsRoutingModule { }
