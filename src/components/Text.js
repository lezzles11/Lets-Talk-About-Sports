import React from "react"
import ReactDOM from "react-dom"
import { useDencrypt } from "use-dencrypt-effect"

const values = ["boyfriend", "colleague", "boss", "in-law"]

const Text = () => {
  const { result, dencrypt } = useDencrypt()

  React.useEffect(() => {
    let i = 0

    const action = setInterval(() => {
      dencrypt(values[i])

      i = i === values.length - 1 ? 0 : i + 1
    }, 2250)

    return () => clearInterval(action)
  }, [])

  return (
    <p>
      A quick nonsense way to talk about sports so that one can impress
      one's&nbsp;{result}
    </p>
  )
}

export default Text
