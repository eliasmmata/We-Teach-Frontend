import * as React from "react"

import Container from "@mui/material/Container"
import { useRouter } from "next/router"
import axios from "axios"
import { toast } from "react-toastify"

export default function SignIn() {
  const router = useRouter()

  const { token } = router.query

  console.log(token)

  const handleSubmit = async (event) => {
    event.preventDefault()
    const result = new FormData(event.currentTarget)
    // eslint-disable-next-line no-console

    try {
      const conPassword = result.get("conPassword")
      const password = result.get("password")

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      }

      const { data } = await axios.put(
        `/api/user/reset/${token}`,
        { conPassword, password },
        config
      )
      toast.success(data.message)
    } catch (error) {
      toast.error(error?.response?.data?.error)
    }
  }

  return (
    <>
      <Container>
            <input
              required
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onSubmit={handleSubmit}
            />
            <input
              required
              id="conPassword"
              label="Confirm Password"
              name="conPassword"
              type="password"
              autoComplete="email"
              autoFocus
            />

            <button type="submit"> Submit </button>

      </Container>
    </>
  )
}