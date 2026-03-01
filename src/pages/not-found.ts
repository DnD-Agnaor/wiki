import { LitElement, html, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';

import { theme } from '../theme';

@customElement('not-found')
export class NotFound extends LitElement {

  static styles = [
    theme,
  ];
  
  protected render(): TemplateResult {
    return html`
        <h1>404 - Not Found</h1>
        <p>I cannot find the page you are looking for :(</p>
        <p>If you think this page should exist, please contact me</p>
    `
  }
}