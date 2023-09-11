export default ({ env }: any) => ({
  // ...


  email: {
    config: {
    provider: 'nodemailer',
      providerOptions: {
        host: 'ssl0.ovh.net', // Mailjet SMTP server host
        port: 465, // Mailjet SMTP server port
        auth: {
          user: process.env.OVH_USER, // Utilisez votre clé API Mailjet
          pass: process.env.OVH_PASS // Utilisez votre clé secrète API Mailjet
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