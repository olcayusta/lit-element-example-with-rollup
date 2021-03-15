import { LitElement, html } from "lit-element";

export class MyElement extends LitElement {
  static get properties() {
    return {
      name: { type: String },

      count: { type: Number },
    };
  }

  constructor() {
    super()
    this.name = 'DAFFY DUCK';
    this.count = 0;
  }

  render() {
    return html`
      <h1>Hello, ${this.name}!</h1>
      <button @click="${this._onClick}" part="button">
        Click Count: ${this.count}
      </button>
      <slot></slot>
    `;
  }

  _onClick() {
    this.count++;
  }
}

window.customElements.define("my-element", MyElement);
