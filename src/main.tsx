import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ParentSize from '@visx/responsive/lib/components/ParentSize';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ParentSize>{({ width, height }) => <App width={width} height={height} />}</ParentSize>
  </React.StrictMode>,
)
