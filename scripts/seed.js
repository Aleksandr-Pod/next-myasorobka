const { db } = require('@vercel/postgres');
const { products, orders, order_products } = require('./placeholder-data.js');
// const bcrypt = require('bcrypt');

async function seedProducts(client) {
  try {
    // await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    console.log(`Creating "products" table ...`);
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS products (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        product_name VARCHAR(32) NOT NULL UNIQUE,
        category VARCHAR(32) NOT NULL,
        price SMALLINT DEFAULT 0,
        unit VARCHAR(16) DEFAULT '--',
        discount_price VARCHAR(32) DEFAULT 'no discount',
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
        INSERT INTO products (id, product_name, category, price, unit, discount_price, description, images, available, favourite, archived)
        VALUES (${product.id}, ${product.product_name}, ${product.category}, ${product.price}, ${product.unit}, ${product.discount_price}, ${product.description}, '{""}', ${product.available}, ${product.favourite}, ${product.archived})
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
    // await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    
    console.log("creating orders table");
    const createOrdersTable = client.sql`
      CREATE TABLE IF NOT EXISTS orders (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        order_number SMALLINT UNIQUE,
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
          VALUES (DEFAULT, ${order_number}, ${delivery_address}, ${order_date}, ${customer_name}, ${tel}, ${archived})
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

// Insert data into the "order_products" table
async function seedOrderProducts(client) {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  try {
    console.log("Create intermediate table ORDER_PRODUCTS ...");

    const createOrderProductsTable = await client.sql`
    CREATE TABLE IF NOT EXISTS order_products (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      order_number SMALLINT,
      product_name VARCHAR(32),
      qtty SMALLINT DEFAULT 1,
      FOREIGN KEY (order_number) REFERENCES orders(order_number),
      FOREIGN KEY (product_name) REFERENCES products(product_name)
    )
    `;
    console.log("insert values into ORDER_PRODUCTS ...");
    
    const insertedOrderProducts = await Promise.all(
      order_products.map(({order_number, product_name, qtty}) => (
        client.sql`
          INSERT INTO order_products
          VALUES (DEFAULT, ${order_number}, ${product_name}, ${qtty})
          ON CONFLICT (id) DO NOTHING
        `
      ))
    )

    console.log(`seeded ${insertedOrderProducts.length} order_products`);
    return {
      createOrderProductsTable,
      orderProducts: insertedOrderProducts,
    }
  } catch (error) {
    console.error('Error seeding order_products:', error);
    throw error;
  }
}
  
async function main() {
  const client = await db.connect();
  await seedProducts(client);
  await seedOrders(client);
  await seedOrderProducts(client);
  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
