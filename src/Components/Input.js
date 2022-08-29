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
            className={error && error.length>0 ? "erreur" : ""}
          />
        </div>
        {error && <small className="m-t-10 red">{error.map(err=>err.msg)}</small>}
      </div>
    )
  }
  
  export default Input