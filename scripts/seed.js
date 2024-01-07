const { db } = require('@vercel/postgres');
const { products } = require('./placeholder-data.js');
// const bcrypt = require('bcrypt');

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
        price smallint DEFAULT 0,
        unit VARCHAR(16) DEFAULT '--',
        discount_price VARCHAR(64) DEFAULT 'no discount',
        description VARCHAR(255) DEFAULT 'no description',
        images VARCHAR(255) ARRAY DEFAULT '{""}',
        available BOOLEAN DEFAULT true,
        favourite BOOLEAN DEFAULT false,
        archived BOOLEAN DEFAULT false
      );
    `;

    console.log(`Created "products" table`);

    // Insert data into the "products" table
    const insertedProducts = await Promise.all(
      products.map(async (product) => {
        // const hashedPassword = await bcrypt.hash(product.password, 10);
        return client.sql`
        INSERT INTO products (id, name, category, price, unit, discount_price, description, images, available, favourite, archived)
        VALUES (${product.id}, ${product.name}, ${product.category}, ${product.price}, ${product.unit}, ${product.discount_price}, ${product.description}, '{""}', ${product.available}, ${product.favourite}, ${product.archived})
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
