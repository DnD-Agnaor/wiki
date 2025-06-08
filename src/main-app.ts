import { LitElement, html, type PropertyValues } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Router } from '@vaadin/router';

import './pages/home-landing';

@customElement('main-app')
export class MainApp extends LitElement {
  
  protected firstUpdated(_changedProperties: PropertyValues): void {
    super.firstUpdated(_changedProperties);

    const router = new Router(this.shadowRoot?.querySelector('#outlet'))
    router.setRoutes([
      {path: '/home', component: 'home-landing'},
      {path: '(.*)', redirect: '/home'}
    ]);
  }

  render() {
    return html`
      <main>
        <div id='outlet'></div>
      </main>
    `;
  }
}
