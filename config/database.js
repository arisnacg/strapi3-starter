module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', 'cakepin-development.cnireqmbdrar.ap-southeast-1.rds.amazonaws.com'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'rikhi_db'),
        username: env('DATABASE_USERNAME', 'cakepindev'),
        password: env('DATABASE_PASSWORD', 'cakepdev1234'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
