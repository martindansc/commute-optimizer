import {
  LitElement,
  html,
  customElement,
  PropertyValues,
  property
} from 'lit-element';

import './app/components/ol-map';
import './land-page';
import {
  Layer,
  Categories,
  MarineWall,
  TerrestrialWall,
  VirtualWall,
  FrontexWall,
  GeoWall
} from './app/types';

@customElement('my-app')
export class MyApp extends LitElement {
  layers: Layer[];

  yearsInfo: { [key: number]: string } = {};

  schengenInfo: { [key: string]: number } = {};

  fetchOptions: RequestInit = {
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'cors'
  };

  // Defer the first update of the component until the strings has been loaded to avoid empty strings being shown
  @property({ type: Boolean })
  hasLoaded = false;

  initLayers(): Layer[] {
    return [
    ];
  }

  connectedCallback() {
    super.connectedCallback();
  }

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <style>
        .center {
          position: fixed;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
      </style>
      <ol-map></ol-map>
    `;
  }
}
