import { ICategory } from '@/types/category-type';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategorysService {

  #productosSubject = new BehaviorSubject<ICategory[]>([]);
  productos$ = this.#productosSubject.asObservable();

  public api = environment.apiUrl;

  constructor(private http: HttpClient) { }

  // Get Categorys
    public get categorys(): Observable<ICategory[]> {
      return this.http.get<ICategory[]>(this.api+'categorys')
      .pipe(
        tap(categorys => {
          this.#productosSubject.next(categorys)
        } ),
        catchError((error)=>{
          console.error('Error cargando Repuestos', error);
          return throwError(()=> error);
        })
      );//of(product_data);
    }
}
