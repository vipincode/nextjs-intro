'use client'

import React, { useState } from 'react'

const NewTodoForm = () => {
  const [state, updateState] = useState('')
  return (
    <div>
      <form action="">
        <input type="text" placeholder="Add todos" />
      </form>
    </div>
  )
}

export default NewTodoForm
