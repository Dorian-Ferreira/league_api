import { Injectable } from '@angular/core';
import { ImageLeague } from '../entity/image-league';

@Injectable({
	providedIn: 'root'
})
export class ImageService {

	baseLink: string = "https://ddragon.leagueoflegends.com/cdn/";

	getImageUrl(version:string, image: ImageLeague): string {
		return this.baseLink + version + "/img/" + image.group + "/" + image.full;
	}

	getSplashUrl(image: string, group: string): string {
		return this.baseLink + "img/" + group + "/" + image;
	}
}
