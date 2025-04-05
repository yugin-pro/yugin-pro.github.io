import {html} from "../../_npm/htl@0.3.1/72f4716c.js";

export function renderKeyPointList(list) {
      return html`<ol>
        ${list.map(el => html`
          <li>${el}</li>
        `)}
      </ol>`;
    }