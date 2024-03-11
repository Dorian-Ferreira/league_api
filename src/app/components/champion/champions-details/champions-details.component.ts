import { Component, OnInit } from '@angular/core';
import { Champion } from '../../../../entity/champion';
import { ApiService } from '../../../../service/api-service.service';
import { ImageService } from '../../../../utils/image-service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Skin } from '../../../../entity/skin';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { Spell } from '../../../../entity/spell';


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
	version!: string;
	selection!: Spell;

	get fullImage() { return (this.champion) ? this.imageService.getSplashUrl(this.champion.id + "_" + this.champion.skins[0].num + ".jpg", "champion/splash") : null; }

	skinImage(skin: Skin | undefined) { return (this.champion && skin) ? this.imageService.getSplashUrl(this.champion.id + "_" + skin.num + ".jpg", "champion/splash") : null; }

	spellImage(spell: Spell | undefined) { return (this.champion && spell) ? this.imageService.getImageUrl(this.version, spell.image): null; }

	constructor(private apiService: ApiService, private imageService: ImageService, private activatedRoute: ActivatedRoute) {
	}

	ngOnInit(): void {
		this.activatedRoute.params.subscribe(params => {
			let championName:string = params["championID"];
			this.apiService.champion.byName({championName})
				.then(data => {
					this.champion = data.data[championName];
					this.selection = this.champion.passive;
				});
			this.apiService.versions.latest().then(version => this.version = version);
		})
	}

	click(spell: Spell) {
		this.selection = spell;
	}
}
