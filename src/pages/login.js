import React, { useEffect, useState } from "react"
import { navigate } from "gatsby"
import { handleLogin } from "../services/auth"
import { ShakeHorizontal } from "reshake"
const Login = () => {
  const [password, setPassword] = useState(``)
  const [numberAttempts, setNumberAttempts] = useState(0)
  const [wrongPassActive, setWrongPassActive] = useState(false)
  const [hint, setHint] = useState(``)

  const handleUpdate = event => {
    setPassword(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    return handleLogin(password)
  }

  const handleWrongPass = () => {
    setWrongPassActive(true)
    setTimeout(() => {
      setWrongPassActive(false)
    }, 400)
  }

  useEffect(() => {
    if (numberAttempts > 3) {
      setHint("Pals, you got this. I know you do! Think like a doctor.")
    }
    if (numberAttempts > 5) {
      setHint("It is mine, but you can only keep it. What is it?")
    }
    if (numberAttempts > 7) {
      setHint("Put my name before and you'll be able to enter.")
    }
  }, [numberAttempts])

  return (
    <ShakeHorizontal
      v={0}
      w={10}
      dur={400}
      fixed={true}
      active={wrongPassActive}
    >
      <div
        style={{
          display: "flex",
          backgroundColor: "black",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "30vh",
          width: "60vh",
          borderRadius: "5%",
        }}
      >
        <h1
          style={{
            fontSize: 24,
            fontFamily: "Tahoma",
            color: "coral",
            paddingBottom: "3vh",
          }}
        >
          Type in the password to see it all.
        </h1>
        <form
          // class="row g-3"
          method="post"
          onSubmit={event => {
            if (handleSubmit(event)) {
              navigate(`postList`)
            } else {
              handleWrongPass()
              setNumberAttempts(numberAttempts + 1)
            }
          }}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <div style={{ marginRight: 30 }}>
            <label class="visually-hidden">Password</label>
            <input
              type="password"
              name="password"
              class="form-control"
              style={{
                display: "block",
                fontSize: 17,
              }}
              id="inputPassword2"
              placeholder="Password"
              onChange={handleUpdate}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            style={{
              fontSize: 15,
            }}
          >
            Submit
          </button>
        </form>
        <h1
          style={{
            fontSize: 15,
            fontFamily: "Tahoma",
            color: "green",
          }}
        >
          {hint}
        </h1>
      </div>
    </ShakeHorizontal>
  )
}

export default Login
