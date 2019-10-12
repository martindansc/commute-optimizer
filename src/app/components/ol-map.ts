import { LitElement, html, customElement, property, css } from 'lit-element';

import { Map, View, Feature, Overlay } from 'ol';
import { fromLonLat, toLonLat, transform } from 'ol/proj';
import OSM from 'ol/source/OSM';
import XYZ from 'ol/source/XYZ';
import VectorLayer from 'ol/layer/Vector.js';
import VectorSource from 'ol/source/Vector.js';
import GeoJSON from 'ol/format/GeoJSON.js';
import {
  Fill,
  Stroke,
  Style,
  Text,
  Icon,
  Circle as CircleStyle
} from 'ol/style';
import { Point, Polygon} from 'ol/geom';
import { Tile as TileLayer } from 'ol/layer';

@customElement('ol-map')
export class OpenLayersMap extends LitElement {
  private map: Map;
  private markersLayer: VectorLayer;

  static get styles() {
    return css``;
  }

  render() {
    return html`
      <link rel="stylesheet" href="node_modules/ol/ol.css" />

      <div id="ol-map"></div>
    `;
  }

  firstUpdated() {
    this.drawMap();
  }

  updated(changedProperties: any) {
    super.updated(changedProperties);
    console.log("update");
    this.map.render();
  }

  drawMap() {
    var self = this;

    this.map = new Map({
      target: this.shadowRoot.getElementById('ol-map'),
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: [0, 0],
        zoom: 0
      })
    });

    var vectorLayer = new VectorLayer({
      source: new VectorSource({
        url: 'assets/data/countries.json',
        format: new GeoJSON()
      })
    });

    this.map.addLayer(vectorLayer);


  

    // add Event listeners
    this.map.on('singleclick', (evt) => {
      this.addMarker(evt.coordinate);
    });
  }

  addMarker(coordinates) {
    console.log(coordinates);

    var marker = new Feature({
      geometry : new Point(coordinates)
    });

    marker.setStyle(new Style({
      image: new CircleStyle({
        radius: 5,
        fill: new Fill({color: '#666666'}),
        stroke: new Stroke({color: '#bada55', width: 1})
      })
    }));

    console.log(marker);
    
    var vectorSource = new VectorSource({
      features: [marker]
    });

    console.log("vector", vectorSource);

    this.markersLayer = new VectorLayer({
      source: vectorSource
    });

    console.log(this.markersLayer);

    this.map.addLayer(this.markersLayer);
  }

  
}
