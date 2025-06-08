import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('home-landing')
export class HomeLanding extends LitElement {
  
  render() {
    return html`
      <h1>Welcome to Aganor!</h1>
    `
  }
}