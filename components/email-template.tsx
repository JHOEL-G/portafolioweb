import * as React from "react";

interface EmailTemplateProps {
  firstName: string
  message: string
  email: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  message,
  email,
}) => {
  return (
    <div>
        <h1>MAIL ENVIADO DE:{firstName} </h1>
        <h2>MENSAJE: {message}</h2>
        <h3>CORREO ENVIADO DE: {email}</h3>
    </div>
  )
}
