import Input from "./Input";

export default function FormField({data, dataName, onChange}) {

  return (
    <>
    {data.map((field) =>
      <Input 
        key={field.id}
        label={field.label}
        type={field.inputType}
        value={field.value}
        onChange={(e) => onChange(dataName, field.id, e.target.value)}
      />
    )}
    </>
  )
}