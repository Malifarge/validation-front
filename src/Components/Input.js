const Input = ({
    label,
    type,
    value,
    placeholder,
    handleChange,
    required,
    error
  }) => {
    return (
      <>
        <div>
          <label htmlFor={label}>{label}</label>
          <input
            name={label}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={handleChange}
            required={required}
          />
        </div>
        {error && <small>{error.map(err=>err.msg)}</small>}
      </>
    )
  }
  
  export default Input