/*THE FOLLOWING IS FOR THE JAWSDB MARIA database*/

module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'q0h7yf5pynynaq54.cbetxkdyhwsb.us-east-1.rds.amazonaws.com	'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'mjn31od0so9xd9ub'),
      user: env('DATABASE_USERNAME', 'aeyzft5f0n3mhsez'),
      password: env('DATABASE_PASSWORD', 'jwq0pfxer31us40l'),
      ssl: {
        rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
      },
    },
    debug: false,
  },
});





/*THE FOLLOWING IS FOR THE SQLITE DATABASE*/

// const path = require('path');

// let db;

// module.exports = ({ env }) => {
//   const client = env('DATABASE_CLIENT', 'sqlite');

//   const connections = {
    
//     sqlite: {
//       connection: {
//         filename: path.join(
//           __dirname,
//           '..',
//           env('DATABASE_FILENAME', '.tmp/data.db')
//         ),
//       },
//       useNullAsDefault: true,
//     },

//   };


//   return {
//     connection: {
//       client,
//       ...connections[client],
//       acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
//     },
//     getDatabase: () => db, // Expose the database client
//   };
// };