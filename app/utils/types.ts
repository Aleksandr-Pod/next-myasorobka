export type TProduct = {
  id: string,
  name: string,
  category: string,
  price: number,
  unit: string,
  discount_price: string,
  description: string,
  images: string[],
  available: boolean,
  favourite: boolean,
  archived: boolean
}

export type TOrders = {
  id: string,
  order_number: number,
  delivery_address: string,
  order_date: string,
  customer_name: string,
  tel: string,
  archived: boolean
}