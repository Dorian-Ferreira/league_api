import { Routes } from '@angular/router';
import { ChampionsComponent } from './components/champion/champions/champions.component';
import { ChampionsDetailsComponent } from './components/champion/champions-details/champions-details.component';

export const routes: Routes = [
    {path: 'champion', component: ChampionsComponent},
    {path: 'champion/:championID', component: ChampionsDetailsComponent},
];
