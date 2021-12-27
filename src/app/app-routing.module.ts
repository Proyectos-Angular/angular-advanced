import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'home', component: HomeComponent,
        loadChildren: () => import('./components/components-routing.module').then(m => m.ComponentsRoutingModule)

    },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
]

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
