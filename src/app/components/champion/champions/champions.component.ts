import { Component } from '@angular/core';
import { ChampionMiniComponent } from "../champion-mini/champion-mini.component";
import { ApiService } from '../../../../service/api-service.service';
import { Champion } from '../../../../entity/champion';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-champions',
    standalone: true,
    templateUrl: './champions.component.html',
    styleUrl: './champions.component.css',
    imports: [ChampionMiniComponent, CommonModule]
})
export class ChampionsComponent {

  champions!:Array<Champion>;
  version!:string;

  constructor(private apiService: ApiService) {
    this.champions = new Array<Champion>;
    this.apiService.versions.latest().then(data => this.version = data);

    this.apiService.champion.all().then(data => {
      for(const champion in data.data) {
        this.champions.push(data.data[champion]);
      }
    });
  }
}
