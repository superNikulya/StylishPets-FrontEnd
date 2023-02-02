import {Category, Message} from "./intarfaces";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CategoriesService {

  constructor(
    private http: HttpClient
  ) {}

  getAll(): Observable<Category[]>{
    return this.http.get<Category[]>('/api/category')
  }

  create(name: string, image?: File) {
    const formData = new FormData()
    if (image) {
      formData.append('image', image, image.name)
    }
    formData.append('name', name)
    return this.http.post<Category>('/api/category/', formData)
  }

  update(id: string|undefined , name: string, image?: File) {
    const formData = new FormData()
    if(image){
        formData.append('image', image, image.name)
    }
    formData.append('name', name)
    return this.http.patch<Category>(`/api/category/${id}`, formData)
  }

  delete(id: string|undefined):Observable<Message>{
    return this.http.delete<Message>(`/api/category/${id}` )
  }
}
