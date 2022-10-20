import { Contact } from './about'
import { ContactContainer } from './about-styles'

export function ContactCard ({ src, alt, title, desc }: Contact) {
  return (
    <ContactContainer>
      <div>
        <img src={src} alt={alt} />
      </div>
      <strong>{title}</strong>
      <small>{desc}</small>
    </ContactContainer>
  )
}
