import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChampionsComponent } from "./components/champion/champions/champions.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
        RouterOutlet,
        ChampionsComponent
    ]
})
export class AppComponent {
  title = 'league_api';
}
