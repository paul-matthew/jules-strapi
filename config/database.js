/*THE FOLLOWING IS FOR THE CLEARDB DATABASE*/

const path = require('path');
// const fs = require('fs');

module.exports = ({ env }) => {
  const client = 'mysql2';

  const connections = {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql2',
        host: 'us-cdbr-east-06.cleardb.net',
        port: '3306',
        database: 'heroku_0964b3720c902a8',
        username: 'b534aa53a06e29',
        password: '89b797f7',
        
        // ssl: {
        //   ca: fs.readFileSync(path.resolve(__dirname, './cleardb-ca.pem')),
        //   cert: fs.readFileSync(path.resolve(__dirname, './b534aa53a06e29-cert.pem')),
        //   key: fs.readFileSync(path.resolve(__dirname, './b534aa53a06e29-key.pem')),
        // },
        options: {
          dialectOptions: {
            supportBigNumbers: false,
            bigNumberStrings: false,
          },
          ssl: false
        },
      },
    },
  };

  // console.log('Client:', client);
  // console.log('Connection:', connections[client]);

  return {
    connection: {
      client,
      ...connections[client],
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