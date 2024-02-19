import { ImageLeague } from "./image-league";
import { Skin } from "./skin";

export interface Champion {
    id:string;
    name:string;
    title:string;
    image:ImageLeague;
    skins:Array<Skin>;
    lore:string;
    blurb:string;
    tags:Array<string>;
    partype:string;
}
