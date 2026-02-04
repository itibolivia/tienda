import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CheckoutService {

    public api = environment.apiUrl;

    constructor(private http: HttpClient) { }

    sendCheckout(formValues: any, items: any[]) {

        const formData = new FormData();

        // Campos del formulario
        formData.append('name', formValues.name);
        formData.append('phone', formValues.phone);
        formData.append('city', formValues.city);
        formData.append('address', formValues.address);
        formData.append('ship', formValues.ship);
        formData.append('shipcost', String(formValues.shipcost));

        // Archivo (si existe)
        if (formValues.pay) {
            formData.append('pay', formValues.pay);
        }

        // Items → deben enviarse como string JSON
        formData.append('items', JSON.stringify(items));

        /*formData.forEach((value, key) => {
            console.log(key, value);
        });*/
        
        return this.http.post((this.api+'checkout'), formData);
    }

}
