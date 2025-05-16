import './style.css'
import {createRoot} from 'react-dom/client'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.ts'
import D3Visualization from './d3Visualization.tsx'

/*
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`
*/

const domNode = document.getElementById('app')

if(domNode) {
  const root = createRoot(domNode)

  root.render(<D3Visualization />);
} else {
  console.error('Failed to find the app element in the DOM.')
}


/* setupCounter(document.querySelector<HTMLButtonElement>('#counter')!) */
