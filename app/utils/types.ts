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