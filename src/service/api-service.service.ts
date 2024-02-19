import { Injectable } from '@angular/core';
import { LeagueApiResponse } from '../entity/league-api-response';
@Injectable({
	providedIn: 'root'
})
export class ApiService {

	readonly host: string = "https://ddragon.leagueoflegends.com";

	async request<T>(path: string): Promise<T> {
		const resp = await fetch(`${this.host}${path}`);

		if (resp.ok) return resp.json();
		throw resp;
	} get versions() {
		return {
			latest: async (): Promise<string> => {
				const ddVersions: string[] = await this.request("/api/versions.json");
				return ddVersions[0];
			},
			all: (): Promise<string[]> => this.request("/api/versions.json"),
		};
	}

	get champion() {
		return {
			all: async ({
			}: {
				} = {}): Promise<LeagueApiResponse> => {
				const v = (await this.versions.latest());
				return await this.request(`/cdn/${v}/data/en_US/champion.json`);
			},
			byName: async ({
				championName,
			}: {
				championName: string;
			}): Promise<LeagueApiResponse> => {
				if (!championName) throw new Error("championName is required");
				const v = (await this.versions.latest());
				return await this.request(
					`/cdn/${v}/data/en_US/champion/${championName}.json`
				);
			},
		};
	}
}
