import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Feature, Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { transform } from 'ol/proj';
import { Point } from 'ol/geom';
import { Coordinate } from 'ol/coordinate';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { Icon, Style } from 'ol/style';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapComponent implements OnInit {
  @Input() coordinates: [number, number] | null = null;
  olCoordinates: Coordinate | null = null;

  map: Map | null = null;

  ngOnInit(): void {
    this.olCoordinates = transform(this.coordinates || [49.4181, 53.5154], 'EPSG:4326', 'EPSG:3857');

    this.map = new Map({
      view: new View({
        zoom: 12,
        center: this.olCoordinates,
      }),
      layers: [new TileLayer({ source: new OSM() })],
      target: 'ol-map',
    });

    this.setMarker();
  }

  private setMarker() {
    if (!this.map || !this.olCoordinates) {
      return;
    }
    const marker = new Feature({
      type: 'icon',
      geometry: new Point(this.olCoordinates),
    });

    const vectorLayer = new VectorLayer({
      source: new VectorSource({
        features: [marker],
      }),
      style: new Style({
        image: new Icon({
          anchor: [0.5, 1],
          src: 'marker.svg',
        }),
      }),
    });

    this.map.addLayer(vectorLayer);
  }
}
