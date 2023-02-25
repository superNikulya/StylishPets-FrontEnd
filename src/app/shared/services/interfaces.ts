export interface User{
  email:string
  password:string
  name?:string
}
export interface Category {
  name: string
  imageSrc: string
  user?: string
  _id: string
  characteristic?: string
}
export interface Message {
  message: string
}
export interface Product{
  name: string
  price: number
  imageSrc: string
  _id?: string
  user?: string
  categoryId: Category
  characteristic: string
}

export type Products = Product[];


export interface Order extends Product{
  size: string
  quantity: number
}
