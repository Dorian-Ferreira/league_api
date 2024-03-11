import { ImageLeague } from "./image-league";
import { Skin } from "./skin";
import { Spell } from "./spell";

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
    spells:Array<Spell>;
    passive:Spell;
}
