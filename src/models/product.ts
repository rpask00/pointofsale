import { Observable } from 'rxjs';

export interface Product {
    ID: string,
    name: string,
    price: number,
    photo?: File | string | Observable<string>
}