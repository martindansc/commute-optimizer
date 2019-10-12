import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `commute-optimizer`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class CommuteOptimizer extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'commute-optimizer',
      },
    };
  }
}

window.customElements.define('commute-optimizer', CommuteOptimizer);
