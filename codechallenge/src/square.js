import React from 'react'

function Square({ colorName, displayColor ,isDark}) {
  

  return (
    <div className="sqr"
    
      style={{
        background: displayColor,
        color: isDark ? 'black' : 'white'
    }}
    
    >
      <p>{colorName ? colorName : 'No color name entered'}</p>
      <p>{ displayColor ? displayColor : null}</p>


    </div>
  )
}

export default Square