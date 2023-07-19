module.exports = ({ env }) => ({
    "netlify-deployments": {
      enabled: true,
      config: {
        accessToken: "bbm7XHyvQmMzb3W-0iCddf28J-ptZKWO8xPx4fyvyQ0",
        sites: [
          {
            name: 'Site 1',
            id: "56fcee72-63e1-4f77-b321-7c304b512179",
            buildHook: "https://api.netlify.com/build_hooks/648655b9691fdf64c3a037b3",
          }
        ]
      },
    },
    "users-permissions": {
      jwtSecret: process.env.JWT_SECRET || "IvydeLAqYJCRgTkRs1PuOg==",
    },
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('CLOUDINARY_NAME',"dc5ohptw5"),
          api_key: env('CLOUDINARY_KEY',"713193361936257"),
          api_secret: env('CLOUDINARY_SECRET',"EEsrIAByWB5fed-A8iUe8IGi8Jg"),
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    },
  });