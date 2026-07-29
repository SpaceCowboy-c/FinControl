import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import {Lancamentos} from './pages/lancamentos/lancamentos';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home },
    {path: 'lancamentos', component: Lancamentos}

];