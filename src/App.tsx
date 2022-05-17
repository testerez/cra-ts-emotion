import { css } from "@emotion/react"
import React from "react"
import "./App.css"

function App() {
  return (
    <div>
      <div css={{ color: "red" }}>Hello!</div>
      <div css={css({ color: "red" })}>Hello!</div>
      <div
        css={css`
          color: red;
        `}
      >
        Hello!
      </div>
    </div>
  )
}

export default App
