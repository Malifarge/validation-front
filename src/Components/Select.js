const Select = ({options, required, handleChange,value, error}) =>{
    return (<>
        <select defaultValue={value} required={required} onChange={handleChange} className={error && error.length>0 ? "erreur" : ""}>
        {options.map(option=>{
            return <option key={option} value={option==="select a city" ? "" : `${option}`}>{option}</option>
        })}
    </select>
    {error && <small className="m-t-10 red">{error.map(err=>err.msg)}</small>}
    </>
    )
}

export default Select