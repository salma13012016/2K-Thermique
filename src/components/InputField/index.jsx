

const InputField = ({ label, name, value, onChange, error, type = "text" }) => (
  <div>
    <label htmlFor={name}>{label}*</label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required
    />
    {error && <p style={{ color: "red" }}>{error}</p>}
  </div>
);

export default InputField;