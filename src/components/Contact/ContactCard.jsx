import Card from "../Card"

function ContactSection({children}) {
  return (
    <div className="contact-section">
      {children}
    </div>
  )
}

export default function ContactCard({data}) {
  return (
    <ul className="cards-wrapper">
      <Card classes={["contact-card"]} key={data.id}>
        {Object.entries(data).map(([key, data]) =>
          <ContactSection key={key}>
            <p className={`${key} data`}>{data.value}</p>
          </ContactSection>
        )}
    </Card>
    </ul>
  )
}