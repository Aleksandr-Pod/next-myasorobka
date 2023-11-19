const { db } = require('@vercel/postgres');
const { products } = require('./placeholder-data.js');
// const bcrypt = require('bcrypt');

async function createTestTable(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS testtable (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(64) NOT NULL UNIQUE
      )
    `
  }
  catch (error) {
    console.error('Error creating Table:', error);
    throw error;
  }
}

async function seedProducts(client) {
  try {
    // await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    console.log(`Creating "products" table ...`);
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS products (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(64) NOT NULL UNIQUE,
        category VARCHAR(64) NOT NULL,
        price smallint NOT NULL,
        unit VARCHAR(16) NOT NULL,
        discount_price VARCHAR(64) NOT NULL,
        description VARCHAR(255) NOT NULL,
        img VARCHAR(256),
        available BOOLEAN NOT NULL,
        favourite BOOLEAN NOT NULL,
        archived BOOLEAN NOT NULL
      );
    `;

    console.log(`Created "products" table`);

    // Insert data into the "products" table
    const insertedProducts = await Promise.all(
      products.map(async (product) => {
        // const hashedPassword = await bcrypt.hash(product.password, 10);
        return client.sql`
        INSERT INTO products (id, name, category, price, unit, discount_price, description, img, available, favourite, archived)
        VALUES (${product.id}, ${product.name}, ${product.category}, ${product.price}, ${product.unit}, ${product.discount_price}, ${product.description}, ${product.img}, ${product.available}, ${product.favourite}, ${product.archived})
        ON CONFLICT (id) DO NOTHING
      `;
      }),
    );

    console.log(`Seeded ${insertedProducts.length} products`);

    return {
      createTable,
      products: insertedProducts,
    };
  } catch (error) {
    console.error('Error seeding products:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();
  await seedProducts(client);
  // await createTestTable(client);
  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
