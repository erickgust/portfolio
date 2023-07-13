import { Contact } from './about'
import { ContactContainer } from './about-styles'

export function ContactCard ({ src, alt, title, desc }: Contact) {
  return (
    <ContactContainer>
      <div>
        <img src={src} alt={alt} width={32} height={32} />
      </div>
      <strong>{title}</strong>
      <small>{desc}</small>
    </ContactContainer>
  )
}
