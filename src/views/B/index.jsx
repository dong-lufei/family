import logo from "../../../src/logo.svg"
import { Counter } from "../../features/counter/Counter"
import "./index.css"

function B() {
  return (
    <div className="B">
      <header className="B-header">
        <img src={logo} className="B-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/B.js</code> and save to reload.
        </p>
      </header>
    </div>
  )
}

export default B
