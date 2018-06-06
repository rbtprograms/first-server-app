const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://localhost:5432/explore';
const client = new Client(databaseUrl);

client.connect()
  .then(() => {
      return client.query(`
        CREATE TABLE IF NOT EXISTS rappers (
            id SERIAL PRIMARY KEY,
            name VARCHAR(256),
            from VARCHAR(256),
            numAlbums INTEGER,
            albums VARCHAR(256),
            aka VARCHAR(256)
            dead BOOLEAN
        );
      `);
  })
  .then(
      () => console.log('tables have been created'),
      err => console.log('ERROR TABLES NOT CREATED')
  )
  .then(() => {
      client.end();
  });

