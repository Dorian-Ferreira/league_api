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

  allChampions!:Array<Champion>;
  champions!:Array<Champion>;
  version!:string;

  filter!:string;

  constructor(private apiService: ApiService) {
    this.allChampions = new Array<Champion>;
    this.champions = new Array<Champion>;
    this.apiService.versions.latest().then(data => this.version = data);

    this.apiService.champion.all().then(data => {
      for(const champion in data.data) {
        this.allChampions.push(data.data[champion]);
      }
    });

    this.champions = this.allChampions;
  }

  onKey(event: any) {
    this.champions = this.allChampions.filter((c) => c.name.toLowerCase().includes(event.target.value.toLowerCase())
                                                || c.tags.filter((t) => t.toLowerCase().includes(event.target.value.toLowerCase())).length > 0
                                              );
  }
}
