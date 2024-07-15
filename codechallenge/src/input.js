import React from 'react'
import colorNames from 'colornames'

function Input({colorName, setColorName, setDisplayColor, isDark, setIsDark}) {
  return (
    <form className="colorInput"
    onSubmit ={(e)=> e.preventDefault()}>
      <input
        type='text'
        required
        placeholder='Type color name'
        value={colorName}
        onChange={(e) => {
        setColorName(e.target.value)
          setDisplayColor(colorNames(e.target.value))
        }
        }
   />
      <button
        type='button'
        onClick={()=> setIsDark(!isDark)}
      
      >
        Toggle
      </button>

    </form>
  )
}

export default Input