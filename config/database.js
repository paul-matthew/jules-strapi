const path = require('path');

module.exports = ({ env }) => {
  const client = 'mysql';

  const connections = {
    mysql: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: 'us-cdbr-east-06.cleardb.net',
        port: '3306',
        database: 'heroku_0964b3720c902a8', 
        username: 'b534aa53a06e29',
        password: '89b797f7',
        ssl: false,
        options: {
          dialectOptions: {
            supportBigNumbers: false,
            bigNumberStrings: false,
          },
        },
      },
      options: {},
    },
  };

  console.log('Client:', client);
  console.log('Connection:', connections[client]);

  return {
    connection: {
      client,
      ...connections[client],
    },
  };
};