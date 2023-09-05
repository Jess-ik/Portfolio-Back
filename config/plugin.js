module.exports = ({ env }) => ({
    // ...
    email: {
      config: {
        provider: "strapi-provider-email-mailjet",
          providerOptions: {
            publicApiKey: env("MAILJET_PUBLIC_KEY"),
            secretApiKey: env("MAILJET_SECRET_KEY"),
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