import { Routes } from '@angular/router';
import { NotfoundComponent } from './layout/notfound.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { Lab04Component } from './lab04/lab04.component';
import { Lab07Component } from './lab07/lab07.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch:'full' },
    { path: 'home', component: HomeComponent, title: '首頁'},  
    { path: 'lab04', component: Lab04Component, title: '生命週期'}, 
    { path: 'lab07', component: Lab07Component, title: 'Pipe'}, 
    { path: 'about', component: AboutComponent, title: '關於'}, 
    { path: '**', component:NotfoundComponent}
];
