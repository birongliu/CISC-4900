import React from 'react'
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
const { setTheme } = useTheme();
  return (
    <div className="fixed z-20 flex flex-col space-y-2 rounded-3xl p-2 h-32 justify-between right-7">
        <button
          aria-label="Toggle Light Mode"
          type="button"
          className={`w-8 h-8 p-1 rounded-full transition-colors duration-200`}
          onClick={() => setTheme("light")}
        >
          ok
        </button>
  
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className={`w-8 h-8 p-1 rounded-full transition-colors duration-200`}
          onClick={() => setTheme("dark")}
        >
          lol
        </button>
  
      </div>
  )
}
