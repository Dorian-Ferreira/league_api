import { Routes } from '@angular/router';
import { ChampionsComponent } from './components/champion/champions/champions.component';
import { ChampionsDetailsComponent } from './components/champion/champions-details/champions-details.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {path: '/', component: HomeComponent},
    {path: 'champions', component: ChampionsComponent},
    {path: 'champions/:championID', component: ChampionsDetailsComponent},
];
