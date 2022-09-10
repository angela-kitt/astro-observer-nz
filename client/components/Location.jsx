import React, { useState } from 'react'

const initialData = { location: '' }

export default function Location() {
  const [data, setData] = useState(initialData)
  const { location } = data

  function handleChange(event) {
    setData({ ...data, [event.target.name]: event.target.value })
  }

  function handleSubmit(event) {
    event.preventDefault()
    location
    alert(`The location you entered was: ${location}`, setData(initialData))
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="location">Enter your location: </label>
        <input
          type="text"
          id="location"
          name="location"
          value={location}
          onChange={handleChange}
        />
        <input type="submit" />
      </form>
    </>
  )
}
