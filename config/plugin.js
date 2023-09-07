module.exports = ({ env }) => ({
    // ...
    email: {
      config: {
        provider: "strapi-provider-email-mailjet",
          providerOptions: {
            publicApiKey: env("MAILJET_PUBLIC_KEY"),
            secretApiKey: env("MAILJET_SECRET_KEY"),
          },
          settings: {
            defaultFrom: "contact@jess-louvel.com",
            defaultFromName: "Contact from jess-louvel",
            defaultTo: "jessica.louvel@gmail.com",
            defaultToName: "Jessica",
          },
        },
        // ...
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