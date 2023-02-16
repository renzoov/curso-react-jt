module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cfmrc5cgqg415e65cms0-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_pgo1'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'Iufi8ElivTrvUAElqAt1U5c5oRWywmDH'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
