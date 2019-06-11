/* 
Imports 
*/
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// import 'rxjs/add/operator/toPromise';
import { environment } from "../../../environments/environment";
import { GameModel } from '../../models/game.model';
//

/* 
Definition 
*/
@Injectable()
export class GameService {

    // Inject module(s) in the service
    constructor( private HttpClient: HttpClient ){};
  

    public save(gameData: GameModel): Promise<any>{
        // Set header
        let myHeader = new HttpHeaders();
        myHeader.append('Content-Type', 'application/json');

        // POST 
        return this.HttpClient.post(`${environment.apiUrl}/game/`, gameData, { headers: myHeader })
        .toPromise().then(this.getData).catch(this.handleError);
    };

    // Get the API response
    private getData(res: any){
      return res || {};
    };

    // Get the API error
    private handleError(err: any){
      return Promise.reject(err.error);
    };
}