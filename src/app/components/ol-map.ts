import { LitElement, html, customElement, property, css } from 'lit-element';

import { Map, View, Feature, Overlay } from 'ol';
import { fromLonLat, toLonLat } from 'ol/proj';
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
import { Point } from 'ol/geom';
import { Tile as TileLayer, Vector } from 'ol/layer';
import { defaults as defaultInteractions, Select } from 'ol/interaction';
import { defaults as defaultControls } from 'ol/control';
import { easeOut } from 'ol/easing';
import { unByKey } from 'ol/Observable';

import { sharedStyles, OVERLAY_COLUMN_WIDTH } from '../../shared-styles';

import { Layer, Categories, GeoWall } from '../types';

@customElement('ol-map')
export class OpenLayersMap extends LitElement {

  private map; 

  static get styles() {
    return css`

    `;
  }

  render() {

    return html`
      <link rel="stylesheet" href="node_modules/ol/ol.css" />

      <div id="ol-map">
      </div>
    `;
  }

  firstUpdated() {
    this.drawMap();
  }

  updated(changedProperties: any) {
    super.updated(changedProperties);
    this.map.render();
  }

  drawMap() {
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
  }
}
