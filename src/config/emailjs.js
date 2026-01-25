// Configuration EmailJS
// Pour obtenir ces valeurs, créez un compte sur https://www.emailjs.com/
// 1. Créez un service email (Gmail, Outlook, etc.)
// 2. Créez un template email
// 3. Obtenez votre Public Key

export const emailjsConfig = {
  serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_aoysydv',
  templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_63u6jpf',
  publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'j07ONc8nbSovRet4t'
};
