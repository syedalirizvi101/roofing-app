import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MapsService } from './services/maps.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public apiLoaded: Observable<boolean>;
  public geocoder= new google.maps.Geocoder();
   
  public mapOptions: google.maps.MapOptions = {
    center: {lat: 40, lng: -20},
    zoom: 4
  };

  public address: string ='';

  @ViewChild('maps')
  public mapsElement!: ElementRef<HTMLElement>;

  constructor(private mapsSvc: MapsService) {
    this.apiLoaded = this.mapsSvc.getGoogleMaps();
  }
  
  ngOnInit(): void {
    this.initialize();
  }

  private initialize() {
    this.geocoder = new google.maps.Geocoder();
  }

 private codeAddress() {
  
  // this.geocoder.geocode({ 'address': this.address }, function (results, status) {
  //   if (status == 'OK') {
  //     console.log(results);
  //     this.mapsElement.setCenter(results[0].geometry.location);
  //     var marker = new google.maps.Marker({
  //       map: map,
  //       position: results[0].geometry.location
  //     });
  //   } else {
  //     alert('Geocode was not successful for the following reason: ' + status);
  //   }
  // });
}
}
