import React from 'react'
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
const { resolvedTheme, setTheme } = useTheme();
  return (
    <div className="fixed z-20 flex flex-col space-y-2 rounded-3xl p-2 h-32 justify-between right-7" style={{
        background: 'linear-gradient(180deg, #F5F5F5 38.97%, #BFB6B6 50.75%, #121212 67.87%)'
      }}>
        <button
          aria-label="Toggle Light Mode"
          type="button"
          className={`w-8 h-8 p-1 rounded-full transition-colors duration-200`}
          onClick={() => setTheme("light")}
        >
          {/* <Image src={LightModeIcon} alt="Light Mode" width={32} height={32} /> */}
        </button>
  
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className={`w-8 h-8 p-1 rounded-full transition-colors duration-200`}
          onClick={() => setTheme("dark")}
        >
          {/* <Image src={DarkModeIcon} alt="Dark Mode" width={32} height={32} /> */}
        </button>
  
      </div>
  )
}
