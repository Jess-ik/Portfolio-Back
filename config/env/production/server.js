module.exports = ({ env }) => ({
    url: env("https://strapi-h2ev.onrender.com"),
    dirs: {
      public: "/data/public"
    },
  });