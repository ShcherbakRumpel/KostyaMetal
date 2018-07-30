// import { Component } from '@angular/core';
// import { ViewChild } from '@angular/core';

// @Component({
//   selector: 'app-map-contact',
//   templateUrl: './map-contact.component.html',
//   styleUrls: ['./map-contact.component.css']
// })
// export class MapContactComponent {
//   @ViewChild('gmap') gmapElement: any;
//   map: google.maps.Map;

//   latitude: any;
//   longitude: any;

//   iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';

//   markerTypes = [
//     {
//       text: 'Parking', value: 'parking_lot_maps.png'
//     }
//     // ,
//     // {
//     //   text: "Library", value: "library_maps.png"
//     // },
//     // {
//     //   text: "Information", value: "info-i_maps.png"
//     // }
//   ];

//   selectedMarkerType = 'parking_lot_maps.png';

//   isHidden = false;


//   // tslint:disable-next-line:use-life-cycle-interface
//   ngAfterContentInit() {
//     const mapProp = {
//       center: new google.maps.LatLng(49.995098, 36.207719),
//       zoom: 15,
//       mapTypeId: google.maps.MapTypeId.ROADMAP
//     };
//     this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);

//   }

//   setMapType(mapTypeId: string) {
//     this.map.setMapTypeId(mapTypeId);
//   }

//   setCenter() {
//     this.map.setCenter(new google.maps.LatLng(this.latitude, this.longitude));

//     const location = new google.maps.LatLng(this.latitude, this.longitude);

//     const marker = new google.maps.Marker({
//       position: location,
//       map: this.map,
//       title: 'Got you!'
//     });

//     marker.addListener('click', this.simpleMarkerHandler);

//     marker.addListener('click', () => {
//       this.markerHandler(marker);
//     });
//   }

//   simpleMarkerHandler() {
//     alert('Simple Component\'s function...');
//   }

//   markerHandler(marker: google.maps.Marker) {
//     alert('Marker\'s Title: ' + marker.getTitle());
//   }

//   showCustomMarker() {


//     this.map.setCenter(new google.maps.LatLng(this.latitude, this.longitude));

//     const location = new google.maps.LatLng(this.latitude, this.longitude);

//     console.log(`selected marker: ${this.selectedMarkerType}`);

//     const marker = new google.maps.Marker({
//       position: location,
//       map: this.map,
//       icon: this.iconBase + this.selectedMarkerType,
//       title: 'Got you!'
//     });
//     console.log(marker.getCursor());
//   }

//   toggleMap() {
//     this.isHidden = !this.isHidden;

//     this.gmapElement.nativeElement.hidden = this.isHidden;
//   }



// }

import { MouseEvent } from '@agm/core';
import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-map-contact',
  templateUrl: './map-contact.component.html',
  styleUrls: ['./map-contact.component.css']
})
export class MapContactComponent {
  // google maps zoom level
  zoom = 18;

  // initial center position for the map
  lat = 49.995098;
  lng = 36.207719;

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`);
  }

  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }

  // tslint:disable-next-line:member-ordering
  markers: marker[] = [
    {
      lat: 49.995098,
      lng: 36.207719,
      label: 'Our office',
      draggable: false
    }
  ];
}

// just an interface for type safety.
// tslint:disable-next-line:class-name
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
