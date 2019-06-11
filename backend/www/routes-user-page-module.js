(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routes-user-page-module"],{

/***/ "./src/app/routes/user-page/module.ts":
/*!********************************************!*\
  !*** ./src/app/routes/user-page/module.ts ***!
  \********************************************/
/*! exports provided: Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Module", function() { return Module; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./router */ "./src/app/routes/user-page/router.ts");
/* harmony import */ var _user_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-page.component */ "./src/app/routes/user-page/user-page.component.ts");

/*
Imports
*/
// Angular


// Inner


//
/*
Definition
*/
var Module = /** @class */ (function () {
    //
    /*
    Export
    */
    function Module() {
    }
    Module = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_user_page_component__WEBPACK_IMPORTED_MODULE_4__["UserPageComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _router__WEBPACK_IMPORTED_MODULE_3__["Routing"]
            ]
        })
        //
        /*
        Export
        */
    ], Module);
    return Module;
}());

;
//


/***/ }),

/***/ "./src/app/routes/user-page/router.ts":
/*!********************************************!*\
  !*** ./src/app/routes/user-page/router.ts ***!
  \********************************************/
/*! exports provided: Routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routing", function() { return Routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-page.component */ "./src/app/routes/user-page/user-page.component.ts");


//
/*
Definition
*/
var route = [
    {
        path: '',
        component: _user_page_component__WEBPACK_IMPORTED_MODULE_1__["UserPageComponent"]
    }
];
//
/*
Export
*/
var Routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(route);
//


/***/ }),

/***/ "./src/app/routes/user-page/user-page.component.html":
/*!***********************************************************!*\
  !*** ./src/app/routes/user-page/user-page.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <h1>Time : {{time}}</h1>\n    <p>{{qtt}}</p>\n\n    <button [disabled]=\"stop\" (click)=\"onClickMe()\">ON CLICK</button> <br><br>\n\n    <button (click)=\"onRestart()\">RESTART</button>\n</div>"

/***/ }),

/***/ "./src/app/routes/user-page/user-page.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/routes/user-page/user-page.component.ts ***!
  \*********************************************************/
/*! exports provided: UserPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPageComponent", function() { return UserPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth/auth-service.service */ "./src/app/services/auth/auth-service.service.ts");
/* harmony import */ var _services_game_game_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/game/game-service.service */ "./src/app/services/game/game-service.service.ts");

/*
Imports & definition
*/
// Imports



// Definition
var UserPageComponent = /** @class */ (function () {
    /*
    Config.
    */
    // Module injection
    function UserPageComponent(AuthService, GameService) {
        var _this = this;
        this.AuthService = AuthService;
        this.GameService = GameService;
        this.user = [];
        this.qtt = 0;
        this.time = 0;
        this.stop = false;
        this.first = true;
        this.data = {};
        /*  saveGame() {
             let game = {
                 user : this.user.data._id,
                 point : this.qtt,
                 time : new Date()
             }
             console.log('final : ', game)
         } */
        this.saveGame = function (data) {
            // Send user data
            _this.GameService.save(data)
                .then(function (apiResponse) {
                // API success response
                _this.apiMessageLogin = apiResponse.message;
                console.log('sucess :', _this.apiMessageLogin);
            })
                .catch(function (apiResponse) {
                // API error response
                _this.apiMessageLogin = apiResponse.message;
                console.log('error :', _this.apiMessageLogin);
            });
        };
    }
    ;
    //
    /*
    Methods
    */
    //
    UserPageComponent.prototype.onClickMe = function () {
        if (this.first) {
            this.first = false;
            this.startGame();
            this.qtt++;
        }
        else {
            this.qtt++;
        }
    };
    UserPageComponent.prototype.onRestart = function () {
        this.qtt = 0;
        this.time = 0;
        this.stop = false;
        this.first = true;
    };
    UserPageComponent.prototype.startGame = function () {
        var _this = this;
        var id = setInterval(function () {
            if (_this.time < 3) {
                _this.time++;
            }
            else {
                clearInterval(id);
                _this.stop = true;
                var data = {
                    user: _this.user.data._id,
                    point: _this.qtt,
                    time: new Date()
                };
                _this.saveGame(data);
            }
        }, 1000);
    };
    /*
    Hooks
    */
    UserPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.AuthService.getUserId().then(function (userData) {
            _this.user = userData;
        });
    };
    ;
    UserPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-page',
            template: __webpack_require__(/*! ./user-page.component.html */ "./src/app/routes/user-page/user-page.component.html"),
            providers: [_services_auth_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_game_game_service_service__WEBPACK_IMPORTED_MODULE_3__["GameService"]]
        })
        //
        /*
        Export
        */
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_game_game_service_service__WEBPACK_IMPORTED_MODULE_3__["GameService"]])
    ], UserPageComponent);
    return UserPageComponent;
}());

//


/***/ }),

/***/ "./src/app/services/game/game-service.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/game/game-service.service.ts ***!
  \*******************************************************/
/*! exports provided: GameService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameService", function() { return GameService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");

/*
Imports
*/


// import 'rxjs/add/operator/toPromise';

//
/*
Definition
*/
var GameService = /** @class */ (function () {
    // Inject module(s) in the service
    function GameService(HttpClient) {
        this.HttpClient = HttpClient;
    }
    ;
    GameService.prototype.save = function (gameData) {
        // Set header
        var myHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        myHeader.append('Content-Type', 'application/json');
        // POST 
        return this.HttpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/game/", gameData, { headers: myHeader })
            .toPromise().then(this.getData).catch(this.handleError);
    };
    ;
    // Get the API response
    GameService.prototype.getData = function (res) {
        return res || {};
    };
    ;
    // Get the API error
    GameService.prototype.handleError = function (err) {
        return Promise.reject(err.error);
    };
    ;
    GameService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GameService);
    return GameService;
}());



/***/ })

}]);
//# sourceMappingURL=routes-user-page-module.js.map