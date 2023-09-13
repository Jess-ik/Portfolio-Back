export default ({ env }: any) => ({
    url: env("RENDER_EXTERNAL_URL"),
    dirs: {
      public: "/data/public"
    },
  });