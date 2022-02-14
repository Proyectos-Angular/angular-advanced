import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ContentProyectionComponent } from './content-proyection/content-proyection.component';
import { ContentChildComponent } from './content-child/content-child.component';

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
