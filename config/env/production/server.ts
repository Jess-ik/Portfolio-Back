export default ({ env }: any) => ({
    url: env("https://strapi-h2ev.onrender.com"),
    dirs: {
      public: "/data/public"
    },
  });