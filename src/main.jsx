import React from "react"
import ReactDOM from "react-dom/client"
import "./styles/reset.css"
import "./styles/index.css"

function App() {
  return <div className="text-center">R3F Vite template</div>
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
