import { LitElement, html, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';

import { theme } from '../theme';

@customElement('home-landing')
export class HomeLanding extends LitElement {

  static styles = [
    theme,
  ];
  
  protected render(): TemplateResult {
    return html`
      <h1>Welcome to Aganor!</h1>
      
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut lobortis mauris. Nunc non hendrerit purus. Pellentesque viverra vestibulum velit. Nullam convallis placerat neque, vitae dapibus nisi cursus vitae. Morbi ut lectus condimentum, imperdiet mi vel, efficitur leo. Nunc a ultrices enim. Sed malesuada tristique erat sit amet fermentum. Pellentesque pharetra enim ut elit aliquam, a mattis nulla venenatis. Aliquam erat volutpat. Nulla eget posuere enim. Duis ullamcorper diam dui, sit amet congue tellus vulputate et.</p>
      
      <img
        src="https://picfiles.alphacoders.com/311/311202.jpg"
        alt="A cat looking at the viewer"
        width="300px"
      />

      <p>dapibus lobortis quam nec rhoncus. Proin cursus sapien nec lacinia vehicula. Phasellus gravida placerat augue, vel commodo massa pellentesque nec. Cras ipsum mi, cursus ut nulla a, elementum congue justo. Nunc non sem nulla. Integer vel metus nunc. Pellentesque iaculis lacinia turpis, nec commodo erat. Morbi et ipsum iaculis, tincidunt neque eu, faucibus odio. Nunc blandit fermentum mi, imperdiet mollis mi pulvinar a. Proin at suscipit nulla. Vestibulum quis tempus felis.</p>
      
      <p>finibus vitae nibh in consequat. Cras nisl enim, ultrices ut dolor fermentum, commodo venenatis lectus. Aenean viverra finibus arcu vitae venenatis. Aliquam accumsan ante in tempor feugiat. Maecenas ultricies sem a elit semper interdum. Praesent dapibus nisi in eleifend mollis. Nunc suscipit, justo at ullamcorper aliquam, ligula purus mattis arcu, eu tempus ex velit sed mi. Cras dictum ante turpis, at gravida lacus vehicula a. Vestibulum id massa tincidunt, egestas ligula quis, lobortis sapien. Duis fringilla lacinia lectus at dictum. Sed sodales, mi tempus tincidunt porttitor, augue nunc pretium felis, rhoncus dapibus eros enim quis enim. Donec rutrum dui dapibus orci condimentum hendrerit. Mauris accumsan a erat non mattis. Nunc iaculis semper ultricies. Aliquam ultricies, turpis quis rhoncus pellentesque, lacus lectus eleifend tellus, quis porttitor nisi libero a magna.</p>

      <p>Nulla felis mi, egestas et tincidunt et, sodales eu dolor. Quisque convallis tempor justo, a mattis nulla rhoncus et. Ut convallis sit amet leo a imperdiet. Fusce in felis ultrices, egestas dolor ut, pharetra magna. Donec nibh nulla, fringilla ut egestas ac, viverra at eros. Ut rutrum fringilla arcu in fermentum. Suspendisse fermentum vestibulum velit, sit amet convallis ante imperdiet at.</p>

      <p>Ut vel nisi ligula. Cras quis pellentesque tortor. Donec malesuada tellus a ligula accumsan, in vestibulum est lobortis. Donec laoreet dui magna, quis fermentum mauris sollicitudin in. Fusce justo est, volutpat a tempus quis, molestie in lorem. Nam consectetur sollicitudin velit, in ultrices nisl molestie sit amet. Phasellus volutpat vitae tellus non pharetra. Cras viverra lobortis metus at dapibus. Donec diam elit, vulputate id tempor id, maximus sed erat. Proin est elit, vehicula dictum sagittis sed, accumsan et sem. In dictum elementum purus, at aliquam turpis molestie ac. Sed vitae neque varius, finibus nisl vitae, commodo enim.</p>
    `
  }
}