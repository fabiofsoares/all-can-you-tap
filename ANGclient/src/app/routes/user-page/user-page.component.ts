/* 
Imports & definition 
*/
  // Imports
  import { Component, OnInit } from '@angular/core';

  // Inner
  import { IdentityModel } from '../../models/identity.model';
  import { GameModel } from '../../models/game.model';
  import { ApiResponseModel } from "../../models/api.reponse.model";
  import { AuthService } from "../../services/auth/auth-service.service";
  import { GameService } from "../../services/game/game-service.service";

  // Definition
  @Component({
    selector: 'app-user-page',
    templateUrl: './user-page.component.html',
    providers: [ AuthService, GameService ]
  })
//


/* 
Export
*/
  export class UserPageComponent implements OnInit {
    user: IdentityModel[] = [];
    qtt = 0;
    time = 0;
    stop = false;
    first = true;
    data = {};
    public apiMessageLogin : String
    /* 
    Config.
    */
      // Module injection
      constructor(
        private AuthService: AuthService,
        private GameService: GameService
      ) {};
    //


    /*
    Methods
    */
    //
    onClickMe() {
        if(this.first) {
            this.first = false;
            this.startGame();
            this.qtt++;
        
        } else {
            this.qtt++;
        }
    }

    onRestart() {
        this.qtt = 0;
        this.time = 0;
        this.stop = false;
        this.first = true;
    }

    startGame() {
        let id = setInterval( () => {
            if(this.time < 3) {
                this.time++;
            } else {
                clearInterval(id)
                this.stop = true;
                
                let data = {
                    user : this.user.data._id,
                    point : this.qtt,
                    time : new Date()
                }

                this.saveGame(data)
            }
            
        }, 1000)
    }

   /*  saveGame() {
        let game = {
            user : this.user.data._id,
            point : this.qtt,
            time : new Date()
        }       
        console.log('final : ', game)
    } */

    public saveGame = (data : GameModel) => {
        // Send user data
        this.GameService.save(data)
        .then( (apiResponse: ApiResponseModel) => {
            // API success response
            this.apiMessageLogin = apiResponse.message;
            console.log('sucess :', this.apiMessageLogin)    
        })
        .catch( (apiResponse: ApiResponseModel) => {
            // API error response
            this.apiMessageLogin = apiResponse.message;
            console.log('error :', this.apiMessageLogin)
        })
    }; 

    /* 
    Hooks
    */
    ngOnInit() { 
        this.AuthService.getUserId().then((userData: IdentityModel[]) => {
            this.user = userData;           
        });       
    };
    //
  }
//