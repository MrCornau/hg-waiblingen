type Props = {
    name: string;
    email: string;
    phone: string;
    location: string;
    subject: string;
    service: string;
    message: string;
  };
  
  export function EmailTemplate({
    name,
    email,
    phone,
    location,
    subject,
    service,
    message,
  }: Props) {
    return (
      <div>
        <h2>Neue Kontaktanfrage</h2>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Telefon:</strong> {phone}</p>
        <p><strong>Ort:</strong> {location}</p>
        <p><strong>Betreff:</strong> {subject}</p>
        <p><strong>Service:</strong> {service}</p>
        <p><strong>Nachricht:</strong> {message}</p>
      </div>
    );
  }