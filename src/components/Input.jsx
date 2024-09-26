export default function Input({label, type, value, onChange}) {
  return (
    <>
      <label className="input-wrapper">
        <p className="input-label">{label}</p>
        {onChange
        ?
        <input 
          className="input" 
          type={type} 
          value={value}
          onChange={e => onChange(e)}
        />
        :
        <input 
          className="input" 
          type={type} 
          value={value}
        />
        }
        
      </label>
    </>
  )
}