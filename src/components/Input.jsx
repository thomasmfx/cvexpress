export default function Input({label, type, value, onChange}) {
  return (
    <>
      <div className="input-wrapper">
        <label htmlFor={label} className="input-label">{label}</label>
        <input
          autoComplete="on"
          id={label}
          className="input" 
          type={type === 'url' ? 'text' : type} 
          value={value}
          onChange={e => onChange(e)}
        />
      </div>
    </>
  )
}