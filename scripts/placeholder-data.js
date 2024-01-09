const products = [
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    product_name: 'Aldebaran',
    category: 'be-e-e',
    price: 230,
    unit: "piece",
    discount_price: "no discount",
    description: "Sweat dry meat with spices",
    images: ["/"],
    available: true,
    favourite: false,
    archived: false,
  },
  {
    id: '3958dc9e-712f-4377-85e9-fec34736442a',
    product_name: 'Sosiska',
    category: 'be-e-e',
    price: 150,
    unit: "kg",
    discount_price: "no discount",
    description: "Sosiska est sosiska",
    images: ["/"],
    available: true,
    favourite: true,
    archived: false,
  },
  {
    id: '3958621e-712f-4377-85e9-fec4b6a6442a',
    product_name: 'Свинячи ушки',
    category: 'Хрю-хрю',
    price: 190,
    unit: "кг",
    discount_price: "no discount",
    description: "Ушки свинки в специях",
    images: ["/"],
    available: true,
    favourite: false,
    archived: false,
  },
  {
    id: '3958dc9e-712f-1111-85e9-fec75116442a',
    product_name: 'Хрюшкин пятак',
    category: 'Хрю-хрю',
    price: 80,
    unit: "piece",
    discount_price: "no discount",
    description: "Пятак как пятак",
    images: ["/"],
    available: true,
    favourite: false,
    archived: false,
  },
  {
    id: '3950000e-712f-4377-85e9-fec4b6a6442a',
    product_name: 'Курочка',
    category: 'Кукареку',
    price: 177,
    unit: "кг",
    discount_price: "no discount",
    description: "Курочка в маринаде для мангала",
    images: ["/"],
    available: true,
    favourite: true,
    archived: false,
  },
  {
    id: 'cd8bf441-9def-4b18-a91e-ed0a8968e08f',
    product_name: 'Что-то новое',
    category: 'Кукареку',
    price: 145,
    images: ["/"],
  },
]

const orders = [
  {
    order_number: 23,
    customer_name: "Sudzi",
    delivery_address: "address address",
    order_date: "2023-07-22 01:04:39",
    tel: "(033)-152-44-87",
    archived: false
  },
  {
    order_number: 27,
    customer_name: "Angel",
    delivery_address: "NY city, 56 Derrick str.",
    order_date: "2023-08-25 01:04:39",
    tel: "(033)-152-44-87",
    archived: true
  },
  {
    order_number: 30,
    customer_name: "Brad",
    delivery_address: "Kyiv, 20 Naberezhnaya str.",
    order_date: "2024-01-05 12:04:00",
    tel: "(067)-222-99-00",
    archived: false
  },
]

const order_products = [
  {
    order_number: 23,
    product_name: 'Хрюшкин пятак',
    qtty: 2
  },
  {
    order_number: 23,
    product_name: 'Sosiska',
    qtty: 1
  },
  {
    order_number: 27,
    product_name: 'Aldebaran',
    qtty: 1
  },
  {
    order_number: 30,
    product_name: 'Aldebaran',
    qtty: 1
  },
  {
    order_number: 30,
    product_name: 'Sosiska',
    qtty: 2
  },
  {
    order_number: 30,
    product_name: 'Свинячи ушки',
    qtty: 4
  }
]
module.exports = { products, orders, order_products };
