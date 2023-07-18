require('dotenv').config(); 
const crypto = require('crypto');

module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ALoWE1O+q6Q8WmqtxiuflQ==')
  },
  apiToken: {
    salt: env('API_TOKEN_SALT',"G5CnmhGgFCk/WpTMyIfPzA=="),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT','uCGo1ZhqApG8B933thVVow=='),
    },
  },
});
