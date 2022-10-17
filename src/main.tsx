import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

const rootElement = document.querySelector('[data-js="root"]')

if (!rootElement) {
  throw new Error('Failed to find the root element')
}

createRoot(rootElement).render(
  <StrictMode>
    <h1>Hello world</h1>
  </StrictMode>,
)
