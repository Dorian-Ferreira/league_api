import { Component, OnInit } from '@angular/core';
import { Champion } from '../../../../entity/champion';
import { ApiService } from '../../../../service/api-service.service';
import { ImageService } from '../../../../utils/image-service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Skin } from '../../../../entity/skin';
import { CarouselModule } from 'ngx-bootstrap/carousel';


@Component({
	selector: 'app-champions-details-component',
	standalone: true,
	imports: [CommonModule, CarouselModule],
	templateUrl: './champions-details.component.html',
	styleUrl: './champions-details.component.css'
})
export class ChampionsDetailsComponent implements OnInit {

	interval:number = 10000;

	champion!: Champion;

	get getChampionName() { return (this.champion) ? this.champion.name : null; }
	get getChampionTitle() { return (this.champion) ? this.champion.title : null; }
	get getChampionLore() { return (this.champion) ? this.champion.lore : null; }
	get getChampionSkins() { return (this.champion) ? this.champion.skins : null; }

	get fullImage() { return (this.champion) ? this.imageService.getSplashUrl(this.champion.name + "_" + this.champion.skins[0].num + ".jpg", "champion/splash") : null; }
	skinImage(skin: Skin | undefined) { return (this.champion && skin) ? this.imageService.getSplashUrl(this.champion.name + "_" + skin.num + ".jpg", "champion/splash") : null; }

	constructor(private apiService: ApiService, private imageService: ImageService, private activatedRoute: ActivatedRoute) {
	}

	ngOnInit(): void {
		this.activatedRoute.params.subscribe(params => {
			let championName:string = params["championID"];
			this.apiService.champion.byName({championName})
				.then(data => this.champion = data.data[championName]);
		})
	}
}
