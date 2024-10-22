function FormRow({
  type,
  name,
  labelText,
  defaultValue,
  showPassword = false,
  showPasswordHandler,
  showPass,
  placeholder,
  onChange,
}) {
  return (
    <div className="form-row">
      {!showPassword ? (
        <label htmlFor={name} className="form-label">
          {labelText || name}
        </label>
      ) : (
        <div className="show-password-container">
          <label htmlFor={name} className="form-label">
            {labelText || name}
          </label>

          <span onClick={showPasswordHandler} className="show-password">
            {showPass ? "Hide" : "Show"} Password
          </span>
        </div>
      )}

      <input
        type={type}
        id={name}
        name={name}
        className="form-input"
        defaultValue={defaultValue || ""}
        onChange={onChange}
        required
        placeholder={placeholder}
      />
    </div>
  );
}

export default FormRow;
