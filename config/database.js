/*THE FOLLOWING IS FOR THE CLEARDB DATABASE*/

module.exports = ({ env }) => {
  const client = 'mysql2';

  const connections = {
    mysql: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql2',
        host: env('DATABASE_HOST', 'us-cdbr-east-06.cleardb.net'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'heroku_0964b3720c902a8'),
        username: env('DATABASE_USERNAME', 'b534aa53a06e29'),
        password: env('DATABASE_PASSWORD', '89b797f7'),
        dialectOptions: {
          ssl: env.bool('DATABASE_SSL', false),
        },
      },
      options: {},
    },
  };

  return {
    defaultConnection: 'default',
    connections: {
      default: {
        connector: connections[client].connector,
        settings: connections[client].settings,
        options: connections[client].options,
      },
    },
  };
};

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