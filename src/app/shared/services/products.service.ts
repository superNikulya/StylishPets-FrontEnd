import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Message, Product} from "./interfaces";
import {AsyncSubject, BehaviorSubject, Observable, Subject} from "rxjs";
@Injectable({
    providedIn: 'root'
})
export class ProductsService {
  id: string =''

  constructor(
    private http: HttpClient
  ) {}
  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(`/api/product/`)
  }
  getByCategoryId(category: string): Observable<Product[]> {
    return this.http.get<Product[]>(`/api/product/category/${category}`)
  }
  getById(id: string): Observable<Product>{
    return this.http.get<Product>(`/api/product/${id}`)
  }
  create(name: string,
         price: number,
         characteristic: string,
         category: string,
         image: File) {
    const formData = new FormData()
    if(image){
        formData.append('image', image, image.name)
    }
    formData.append('name', name)
    formData.append('price', price.toString())
    formData.append('category', category)
    formData.append('characteristic', characteristic)
    return this.http.post<Product>('/api/product/', formData)
  }
  update( id: string| undefined,
          name: string,
          price: number,
          characteristic: string,
          image: File) {
    const formData = new FormData()
    if(image){
        formData.append('image', image, image.name)
    }
    formData.append('name', name)
    formData.append('price', price.toString())
    formData.append('characteristic', characteristic)
    return this.http.patch<Product>(`/api/product/${id}`, formData)
  }
  delete(id: string|undefined): Observable<Message>{
    return this.http.delete<Message>(`/api/product/${id}`)
  }
}
