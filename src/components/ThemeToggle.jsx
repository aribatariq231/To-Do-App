import { FaSun, FaMoon } from "react-icons/fa";

function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {theme === "dark" ? <FaSun /> : <FaMoon />}
      <span>{theme === "dark" ? "Light" : "Dark"} Mode</span>
    </button>
  );
}

export default ThemeToggle;