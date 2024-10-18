import Card from '../Card'

function ContactSection({children}) {
  return (
    <div className="contact-section">
      {children}
    </div>
  )
}

export default function ContactList({data}) {
  let hasEntries = false;
  {Object.entries(data[0].data).map(([key, value]) => {
    if (value.value !== '') hasEntries = true
  })}

  
  return (
    <ul className="cards-wrapper">
      {/* Gotta check it to prevent displaying an empty square} */}
      {hasEntries && data.map((contact) => 
        <Card classes={["contact-card"]} key={contact.id}>
          {Object.entries(contact.data).map(([key, value]) =>
            value.value && (
              <ContactSection key={key}>
                <p className={`${key} data`}>{value.value}</p>
              </ContactSection>
            )
          )}
        </Card>
      )}
    </ul>
  )
}