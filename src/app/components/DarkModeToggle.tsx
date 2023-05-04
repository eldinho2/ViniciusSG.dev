const DarkModeToggle = () => {

  return (
    <div className="dark-mode-toggle">
      <input type="checkbox" className="checkbox" id="checkbox" />
      <label htmlFor="checkbox" className="label">
        <i className="fas fa-moon"></i>
        <i className="fas fa-sun"></i>
        <div className="ball"></div>
      </label>
    </div>
  );
}

export default DarkModeToggle;