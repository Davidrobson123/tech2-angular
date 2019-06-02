import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ProductsService {

    constructor(private http: HttpClient) {

    }

    getProducts() {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json',
                'x-api-key': 'zQo4PPqD862IwDIQRZub8gX4dqjA3aW2DDhI6UF4'
            })
        };

        return this.http.get("https://27gmrimn45.execute-api.eu-west-2.amazonaws.com/demos/leighton-demo-api?TableName=products", httpOptions);
    }
}
