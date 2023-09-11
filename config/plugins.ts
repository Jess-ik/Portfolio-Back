export default ({ env }: any) => ({
  // ...


  email: {
    config: {
    provider: 'nodemailer',
      providerOptions: {
        host: 'in-v3.mailjet.com', // Mailjet SMTP server host
        port: 587, // Mailjet SMTP server port
        auth: {
          user: env('MAILJET_PUBLIC_KEY'), // Utilisez votre clé API Mailjet
          pass: env('MAILJET_SECRET_KEY'), // Utilisez votre clé secrète API Mailjet
        }
     
    },
    settings: {
      defaultFrom: 'contact@jess-louvel.com', // Votre adresse e-mail par défaut
      defaultReplyTo: 'jessica.louvel@gmail.com', // Adresse de réponse par défaut
      },
    },
  },

  // ...
  'import-export-entries': {
    enabled: true,
    config: {
      // See `Config` section.
    },
  },
  // ...
});