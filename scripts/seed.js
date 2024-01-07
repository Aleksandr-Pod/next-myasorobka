const { db } = require('@vercel/postgres');
const { products, orders } = require('./placeholder-data.js');
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

    // Insert data into the "orders" table
async function seedOrders(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    
    console.log("creating orders table");
    const createOrdersTable = client.sql`
      CREATE TABLE IF NOT EXISTS orders (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        order_number smallint,
        delivery_address VARCHAR(255),
        order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        customer_name VARCHAR(63),
        tel VARCHAR(15),
        archived BOOLEAN DEFAULT false
      )`;
    
    console.log("inserting orders ... ");

    const insertedOrders = await Promise.all(
      orders.map(async ({id, order_number, delivery_address, order_date, customer_name, tel, archived}) => {
        return client.sql`
          INSERT INTO orders (id, order_number, delivery_address, order_date, customer_name, tel, archived)
          VALUES (${id}, ${order_number}, ${delivery_address}, ${order_date}, ${customer_name}, ${tel}, ${archived})
          ON CONFLICT (id) DO NOTHING
        `
      })
    );
    console.log(`seeded ${insertedOrders.length} orders`);
    return {
      createOrdersTable,
      orders: insertedOrders
    };
  } catch (error) {
      console.error('Error seeding orders:', error);
      throw error;
  }
  
}

async function main() {
  const client = await db.connect();
  await seedProducts(client);
  await seedOrders(client);
  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
