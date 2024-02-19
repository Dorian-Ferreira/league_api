import { Component, Input, OnInit } from '@angular/core';
import { Champion } from '../../../../entity/champion';
import { ImageService } from '../../../../utils/image-service';
import { ApiService } from '../../../../service/api-service.service';

@Component({
  selector: 'app-champion-mini',
  standalone: true,
  imports: [],
  templateUrl: './champion-mini.component.html',
  styleUrl: './champion-mini.component.css'
})
export class ChampionMiniComponent implements OnInit {
  
  @Input() champion!: Champion;
  @Input() version!: string;

  fullImage!: string;

  constructor(private imageService:ImageService, private apiService:ApiService) {

  }

  ngOnInit(): void {
    this.apiService.versions.latest().then(data => {
      this.fullImage = this.imageService.getImageUrl(data, this.champion.image);
    });
  }

}
