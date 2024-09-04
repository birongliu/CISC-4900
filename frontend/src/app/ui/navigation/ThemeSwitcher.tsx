import React from 'react'
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
const { resolvedTheme, setTheme } = useTheme();

  return (
    <div>
      <button
        aria-label="Toggle Dark Mode"
        type="button"
        className="w-8 h-8 p-1 mr-3 bg-gray-200 rounded dark:bg-gray-800"
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      />
    </div>
  )

}
