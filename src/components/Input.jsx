export default function Input({label, type}) {
  return (
    <>
      <label className="input-wrapper">
        <span className="input-label">{label}</span>
        <input className="input" type={type} />
      </label>
    </>
  )
}