import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({ providedIn: 'root' })
export class RecipeApi{

    constructor(private http:HttpClient){

    }
    search(searchString: string) {
        let param = new HttpParams({
            fromObject: {
              q: searchString,
              app_id:'6e6e22a5',
              app_key:'222edb3e8c64c4841c17cc44af1fe930',

            }
          });
        return this.http.get('https://api.edamam.com/search',{params:param});
    }

}
