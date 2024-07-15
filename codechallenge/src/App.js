import { useState } from "react";
import Input from "./input";
import Square from "./square";

function App() {
  const [colorName, setColorName] = useState('');
  const [displayColor, setDisplayColor] = useState('');
  const [isDark, setIsDark] = useState(true)

  
  return (
    <div className="App">
      <Square
        colorName={colorName}
        displayColor={displayColor}
        isDark={isDark}
      
      />
      <Input
        colorName={colorName}
        setColorName={setColorName}
        setDisplayColor={setDisplayColor}
        isDark={isDark}
        setIsDark={setIsDark}
      
      />
    </div>
  );
}

export default App;