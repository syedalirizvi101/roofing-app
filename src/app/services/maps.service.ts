import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, of } from "rxjs";
import { environment } from "@environments/environment";

@Injectable({
    providedIn: 'root'
})

export class MapsService {
    constructor(private httpClient: HttpClient) {}

    public getGoogleMaps() { 
        return this.httpClient.jsonp(`https://maps.googleapis.com/maps/api/js?key=${environment.mapsApiKey}`, 'callback')
        .pipe(
          map(() => true),
          catchError(() => of(false)),
        );
    }
}