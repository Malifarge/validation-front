const Input = ({
    label,
    type,
    value,
    placeholder,
    handleChange,
    required,
    error,
    className
  }) => {
    
    return (
      <div className="flex clmn aic">
        <div className="flex jcsb w-280">
          <label htmlFor={label}>{label}</label>
          <input
            name={label}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={handleChange}
            required={required}
            className={className}
          />
        </div>
        {error && <small className="m-t-10 red">{error.map(err=>err.msg)}</small>}
      </div>
    )
  }
  
  export default Input