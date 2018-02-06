import {Component, ElementRef} from '@angular/core';

import 'leaflet-map';

@Component({
  selector: 'leaflet-maps',
  styleUrls: ['./leafletMaps.scss'],
  templateUrl: './leafletMaps.html'
})
export class LeafletMaps {

  constructor(private _elementRef:ElementRef) {
  }

  ngAfterViewInit() {
    let el = this._elementRef.nativeElement.querySelector('.leaflet-maps');

    L.Icon.Default.imagePath = 'assets/img/theme/vendor/leaflet';
    var map = L.map(el).setView([40.9256538, -73.140943], 8);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([40.9256538, -73.314094]).addTo(map)
      .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
      .openPopup();
  }
}
