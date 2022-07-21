import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { Layout } from "./layout/Layout"
import C from "./views/C"
import A from "./views/A"
import B from "./views/B"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<C />} />
          <Route path="a" element={<A />} />
          <Route path="b" element={<B />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
