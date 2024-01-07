const products = [
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Aldebaran',
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
    name: 'Sosiska',
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
    name: 'Свинячи ушки',
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
    name: 'Хрюшкин пятак',
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
    name: 'Курочка',
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
    name: 'Что-то новое',
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
    // total_amount: 530,
    // products: [
    //   {
    //     product: products[2].id,
    //     quantity: 2
    //   },
    //   {
    //     product: products[0].id,
    //     quantity: 1
    //   }
    // ],
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
]
  module.exports = { products, orders };
