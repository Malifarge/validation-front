const Select = ({options, required, handleChange,value}) =>{
    return <select defaultValue={value} required={required} onChange={handleChange}>
        {options.map(option=>{
            return <option key={option} value={option==="select a city" ? "" : `${option}`}>{option}</option>
        })}
    </select>
}

export default Select