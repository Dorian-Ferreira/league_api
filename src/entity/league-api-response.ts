import { DataType } from "./data-type";

export interface LeagueApiResponse {
    type: string;
    format: string;
    version: string;
    data: DataType;
}
