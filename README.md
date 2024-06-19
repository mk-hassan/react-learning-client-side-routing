# Learning react-router-dom-v6.4

> I walked through the lesssons provided in this [toturial series](https://www.youtube.com/playlist?list=PL4cUxeGkcC9iVKmtNuCeIswnQ97in2GGf).

## Prior react-router-dom-v6.4
You only make use of `<BrowserRouter>` tag import from react-router-dom which is wrapping the main `<App />` component.

```javascript
// main.jsx
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
```
```javascript
// App.js
import { Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <main>
      <Routes>
        <Route path="home" element={<Home />}>
        <Route path="about" element={<About />}>
      </Routes>
    </main>
  );
}
```