import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookiesTokenService } from '../cookies-token/cookiestoken.service';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
const AUTH_API = 'http://localhost/Backend_RP/api php/resources/';

@Injectable({
    providedIn: 'root'
})

export class UsersService {

    constructor(private http: HttpClient, private cookietoken: CookiesTokenService) { }


    //todo INSERT PARA REGISTRO
    insertCustomer(user:any): Observable<any>{ 
        return this.http.post(`http://localhost/Backend_RP/api php/routes-customer/insertCustomer.php`,JSON.stringify(user));
    }
    insertVendor(user:any): Observable<any>{ 
        return this.http.post(`http://localhost/Backend_RP/api php/routes-vendors/insertVendor.php`,JSON.stringify(user));
    }
    duplicateUser(email:string):Observable<any>{
        return this.http.post(AUTH_API + 'duplicateCredentialsAux', {email}, httpOptions);
    }





    //* GETS PARA OBTENER INFORMACION DE USUARIOS CON ROLE DE VENDOR
    getVendor(): Observable<any>{ 
        const idToken = this.cookietoken.getUser().cred;
        return this.http.get(`http://localhost/Backend_RP/api php/routes-vendors/getVendor.php?id=`+idToken);
    }
    getBusiness(): Observable<any>{ 
        const vendor_id = this.cookietoken.getUser().vend;
        return this.http.get(`http://localhost/Backend_RP/api php/routes-vendors/getBusiness.php?id=`+vendor_id);
    }
    getVendorDefaultAddress(): Observable<any>{ 
        const vendor_id = this.cookietoken.getUser().vend;
        return this.http.get(`http://localhost/Backend_RP/api php/routes-vendors/getVendorDefaultAddress.php?id=`+ vendor_id);
    }   
    getVendorAddress(address_id:string): Observable<any>{ 
        return this.http.get(`http://localhost/Backend_RP/api php/routes-vendors/getVendorAddress.php?id=`+ address_id);
    }   
    getVendorAddresses(): Observable<any>{ 
        const vendor_id = this.cookietoken.getUser().vend;
        return this.http.get(`http://localhost/Backend_RP/api php/routes-vendors/getVendorAddresses.php?id=`+ vendor_id);
    }
    
    


    //todo INSERTAR DIRECCIONES PARA USUARIOS CON ROL DE VENDORS
    insertVendorAddress(address:any): Observable<any>{ 
        return this.http.post(`http://localhost/Backend_RP/api php/routes-vendors/insertVendorAddress.php`, JSON.stringify(address));
    }




    //comment PUTS PARA ACTUALIZAR INFORMACION DE USUARIOS CON ROLE DE VENDOR
    updateInfoVendor(user:any): Observable<any>{
        return this.http.put(`http://localhost/Backend_RP/api php/routes-vendors/updateInfoVendor.php`, JSON.stringify(user));
    }
    updateInfoBusiness(business:any): Observable<any>{
        return this.http.put(`http://localhost/Backend_RP/api php/routes-vendors/updateInfoBusiness.php`, JSON.stringify(business));
    }





    //* GETS PARA OBTENER INFORMACION DE USUARIOS CON ROLE DE CUSTOMER
    getCustomer(): Observable<any>{ 
        const idToken = this.cookietoken.getUser().cred;
        return this.http.get(`http://localhost/Backend_RP/api php/routes-customers/getCustomer.php?id=`+idToken);
    }   
    getCustomerDefaultAddress(): Observable<any>{ 
        const cust_id = this.cookietoken.getUser().cust;
        return this.http.get(`http://localhost/Backend_RP/api php/routes-customers/getCustomerDefaultAddress.php?id=`+cust_id);
    }   
    getCustomerAddress(address_id:string): Observable<any>{ 
        return this.http.get(`http://localhost/Backend_RP/api php/routes-customers/getCustomerAddress.php?id=`+address_id);
    }   
    getCustomerAddresses(): Observable<any>{ 
        const cust_id = this.cookietoken.getUser().cust;
        return this.http.get(`http://localhost/Backend_RP/api php/routes-customers/getCustomerAddresses.php?id=`+cust_id);
    }   



    //todo INSERTAR DIRECCIONES PARA USUARIOS CON ROL DE CUSTOMER
    insertCustomerAddress(address:any): Observable<any>{ 
        return this.http.post(`http://localhost/Backend_RP/api php/routes-customers/insertCustomerAddress.php`, JSON.stringify(address));
    }



    //comment PUTS PARA ACTUALIZAR INFORMACION DE USUARIOS CON ROLE DE CUSTOMER
    updateInfoCustomer(user:any): Observable<any>{
        return this.http.put(`http://localhost/Backend_RP/api php/routes-customers/updateInfoCustomer.php`, JSON.stringify(user));
    }



    //? PUT PARA ACTUALIZAR CREDENCIALES DE USUARIOS
    updateCredentialsCustomer(user:any): Observable<any>{
        return this.http.put(`http://localhost/Backend_RP/api php/routes-customers/updateCredentials.php`, JSON.stringify(user));
    }

    //? PUT PARA ACTUALIZAR CREDENCIALES DE USUARIOS
    updateCredentialsVendor(user:any): Observable<any>{
        return this.http.put(`http://localhost/Backend_RP/api php/routes-vendors/updateCredentials.php`, JSON.stringify(user));
    }



}