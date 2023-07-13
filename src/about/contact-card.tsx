import { Contact } from './about'
import { ContactContainer } from './about-styles'

export function ContactCard ({ src, alt, title, desc, url }: Contact) {
  return (
    <ContactContainer>
      <div>
        <img src={src} alt={alt} width={32} height={32} />
      </div>
      <strong>{title}</strong>
      {url
        ? <a href={url}>{desc}</a>
        : <small>{desc}</small>
      }
    </ContactContainer>
  )
}
