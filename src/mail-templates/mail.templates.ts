export const verifyTemplate = `
<mjml>
  <mj-head>
    <mj-attributes>
      <mj-all padding="0px"></mj-all>
      <mj-text font-family="Ubuntu, Helvetica, Arial, sans-serif" padding="0 25px" font-size="13px"></mj-text>
      <mj-section background-color="#ffffff"></mj-section>
      <mj-class name="preheader" color="#000000" font-size="11px"></mj-class>
    </mj-attributes>
    <mj-style inline="inline">a { text-decoration: none!important; color: inherit!important; }</mj-style>
  </mj-head>
  <mj-body background-color="#041a2f">
    <mj-section>
      <mj-column width="100%">
        <mj-image src="https://res.cloudinary.com/du7xgj6ms/image/upload/v1601350874/mail/healthy-header-mail_yutzcs.png" alt="header image" padding="0px"></mj-image>
      </mj-column>
    </mj-section>
    <mj-section padding-bottom="20px" padding-top="10px" background-color="#03111f">
      <mj-column>
        <mj-text align="center" padding="10px 25px" font-size="20px" color="#FFFF"><strong>Hola {{nameOrUsername}}!</strong></mj-text>
        <mj-text align="center" font-size="18px" font-family="Arial" color="#FFFF">Muchas gracias por registrarte en Healthy Dev<br/> Por favor presiona en el botón para activar tu cuenta</mj-text>
  
        <mj-button background-color="#f4dd27" color="#FFFFFF" href="{{activationLink}}" font-family="Arial, sans-serif" padding="20px 0 0 0" font-weight="bold" font-size="16px">Activar cuenta</mj-button>
        <mj-text align="center" color="#FFFF" font-size="14px" font-family="Arial, sans-serif" padding-top="40px">Healthy Dev es un proyecto de la comunidad FrontEnd Cafe
        </mj-text>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>
`;