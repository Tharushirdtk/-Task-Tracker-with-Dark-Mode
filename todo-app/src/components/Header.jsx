function Header({ toggleDark, darkMode }) {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold">✅ Task Tracker</h1>
      <button
        onClick={toggleDark}
        className="bg-indigo-500 text-white px-3 py-1 rounded hover:bg-indigo-600"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}

export default Header;
