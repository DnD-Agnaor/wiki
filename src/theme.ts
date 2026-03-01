import { css, CSSResult } from "lit";

export const theme: CSSResult = css`
  * {
  color-scheme: dark light;
  
  /* Surfaces */
  --color-surface: light-dark(#fff, #181818);

  /* Text */
  --color-text: light-dark(#0f0f0f, #e4e4e4);
  --color-text-highlight: light-dark(#B45118, #e1661e);
  
  /* Base Settings */
  background-color: var(--color-surface);
  color: var(--color-text);
  }

  h1 {
    color: var(--color-text-highlight);
    margin: 0.2em -1em 0.5em
  }

  img {
    display: block;
    align-self: right;
    margin-left: 1em;
    margin-right: -5vw;
    max-width: 90vw;
    float: right;
  }
`;