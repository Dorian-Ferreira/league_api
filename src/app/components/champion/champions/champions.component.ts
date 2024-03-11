import { Component, OnInit } from '@angular/core';
import { ChampionMiniComponent } from "../champion-mini/champion-mini.component";
import { ApiService } from '../../../../service/api-service.service';
import { Champion } from '../../../../entity/champion';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

    
@Component({
    selector: 'app-champions',
    standalone: true,
    templateUrl: './champions.component.html',
    styleUrl: './champions.component.css',
    imports: [ChampionMiniComponent, CommonModule]
})
export class ChampionsComponent implements OnInit {

  allChampions!:Array<Champion>;
  champions!:Array<Champion>;
  version!:string;

  filter!:string;

  constructor(private apiService: ApiService, private route: ActivatedRoute) {
    this.allChampions = new Array<Champion>;
    this.champions = new Array<Champion>;
  }
  
  ngOnInit(): void {
    this.apiService.versions.latest().then(data => this.version = data);

    this.apiService.champion.all().then(data => {
      for(const champion in data.data) {
        this.allChampions.push(data.data[champion]);
      }

      this.champions = this.allChampions;
  
      this.route.queryParams.subscribe(params => {
        if(params["search"]){
          this.filterChampionsList(params["search"].toLowerCase());
        }
      });
    });
  }

  onKey(event: any) {
    this.filterChampionsList(event.target.value.toLowerCase());
  }

  filterChampionsList(search:string) {
    this.champions = this.allChampions.filter((c) => c.name.toLowerCase().includes(search)
                                                || c.tags.filter((t) => t.toLowerCase().includes(search)).length > 0
                                              );
  }
}
