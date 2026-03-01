import { LitElement, html, type PropertyValues, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Router } from '@vaadin/router';

import './pages/home-landing';
import './pages/not-found';

@customElement('main-app')
export class MainApp extends LitElement {
  
  protected firstUpdated(_changedProperties: PropertyValues): void {
    super.firstUpdated(_changedProperties);

    const router = new Router(this.shadowRoot?.querySelector('#outlet'))
    router.setRoutes([
      {path: '/', component: 'home-landing'},
      {path: '(.*)', component: 'not-found'}
    ]);
  }

  protected render(): TemplateResult {
    return html`
      <main>
        <div id='outlet'></div>
      </main>
    `;
  }
}
