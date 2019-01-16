webpackJsonp([0],{

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_toast__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__product_detail_product_detail__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_loading_loading__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_login__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shipping_address_shipping_address__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_animations__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__products_products__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/














var CartPage = (function () {
    function CartPage(navCtrl, shared, config, http, loading, toast, storage, events, modalCtrl) {
        this.navCtrl = navCtrl;
        this.shared = shared;
        this.config = config;
        this.http = http;
        this.loading = loading;
        this.toast = toast;
        this.storage = storage;
        this.events = events;
        this.modalCtrl = modalCtrl;
        this.qunatityPlus = function (q) {
            this.toast.show("Product Quantity is Limited!", 'short', 'center');
            q.customers_basket_quantity++;
            q.subtotal = q.final_price * q.customers_basket_quantity;
            q.total = q.subtotal;
            if (q.customers_basket_quantity > q.quantity) {
                q.customers_basket_quantity--;
                this.toast.show("Product Quantity is Limited!", 'short', 'center');
            }
            this.totalPrice();
            this.shared.cartTotalItems();
            this.storage.set('cartProducts', this.shared.cartProducts);
        };
        //function decreasing the quantity
        this.qunatityMinus = function (q) {
            if (q.customers_basket_quantity == 1) {
                return 0;
            }
            q.customers_basket_quantity--;
            q.subtotal = q.final_price * q.customers_basket_quantity;
            q.total = q.subtotal;
            this.totalPrice();
            this.shared.cartTotalItems();
            this.storage.set('cartProducts', this.shared.cartProducts);
        };
    }
    CartPage.prototype.totalPrice = function () {
        var price = 0;
        for (var _i = 0, _a = this.shared.cartProducts; _i < _a.length; _i++) {
            var value = _a[_i];
            var pp = value.final_price * value.customers_basket_quantity;
            price = price + pp;
        }
        this.total = price;
    };
    ;
    CartPage.prototype.getSingleProductDetail = function (id) {
        var _this = this;
        this.loading.show();
        var data = {};
        if (this.shared.customerData != null)
            data.customers_id = this.shared.customerData.customers_id;
        else
            data.customers_id = null;
        data.products_id = id;
        data.language_id = this.config.langId;
        this.http.post(this.config.url + 'getAllProducts', data).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.loading.hide();
            if (data.success == 1) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__product_detail_product_detail__["a" /* ProductDetailPage */], { data: data.product_data[0] });
            }
        });
    };
    CartPage.prototype.removeCart = function (id) {
        this.shared.removeCart(id);
        this.totalPrice();
    };
    CartPage.prototype.ionViewDidLoad = function () {
        this.totalPrice();
    };
    CartPage.prototype.proceedToCheckOut = function () {
        if (this.shared.customerData.customers_id == null || this.shared.customerData.customers_id == undefined) {
            var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_10__login_login__["a" /* LoginPage */]);
            modal.present();
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__shipping_address_shipping_address__["a" /* ShippingAddressPage */]);
        }
    };
    CartPage.prototype.openProductsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__products_products__["a" /* ProductsPage */], { sortOrder: 'newest' });
    };
    CartPage.prototype.ionViewDidLeave = function () {
        // this.storage.set('cartProducts', this.shared.cartProducts);
    };
    CartPage.prototype.ionViewWillEnter = function () {
        if (this.config.admob == 1)
            this.shared.showAd();
    };
    CartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-cart',
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_12__angular_animations__["j" /* trigger */])('animate', [
                    Object(__WEBPACK_IMPORTED_MODULE_12__angular_animations__["i" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_12__angular_animations__["h" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_12__angular_animations__["e" /* animate */])('500ms', Object(__WEBPACK_IMPORTED_MODULE_12__angular_animations__["h" /* style */])({ opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_12__angular_animations__["i" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_12__angular_animations__["h" /* style */])({ opacity: 1 }),
                        Object(__WEBPACK_IMPORTED_MODULE_12__angular_animations__["e" /* animate */])('700ms', Object(__WEBPACK_IMPORTED_MODULE_12__angular_animations__["h" /* style */])({ opacity: 0 }))
                    ])
                ])
            ],template:/*ion-inline-start:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/cart/cart.html"*/'\n<ion-header #myElement>\n\n  <ion-navbar>\n    <ion-title>\n      {{\'My Cart\'| translate }}\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only class="cart-button">\n        <ion-icon name="cart">\n          <ion-badge color="secondary">{{shared.cartquantity}}</ion-badge>\n        </ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n<ion-content class="page-cart">\n\n  <ion-grid class="page-empty" *ngIf="shared.cartProducts.length==0" [@animate]>\n    <ion-row align-items-center>\n      <ion-col col-12>\n        <h3 text-center>\n          <ion-icon name="cart"></ion-icon>\n        </h3>\n        <h4 text-center>{{\'Your cart is empty\'|translate}}</h4>\n        <h5 text-center>{{\'continue shopping\'|translate}}</h5>\n        <p text-center>\n          <button ion-button color="secondary" (click)="openProductsPage()">{{\'Explore\'|translate}}</button>\n        </p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n  <ion-card class="card-product animated flipInX" *ngFor="let product of shared.cartProducts" [@animate]>\n    <ion-card-header>\n      <h3>{{product.products_name}}\n        <br>\n        <small>{{product.categories_name}}</small>\n      </h3>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="{{config.url+product.image}}">\n        </ion-thumbnail>\n\n        <ion-row>\n          <ion-col col-6>{{\'Price\' |translate}}&nbsp;:&nbsp;</ion-col>\n          <ion-col col-6>{{product.price| curency}}</ion-col>\n        </ion-row>\n\n        <ion-row *ngFor="let att of product.attributes">\n          <ion-col col-6>{{att.products_options_values+\'&nbsp;\'+att.products_options}}&nbsp;:</ion-col>\n          <ion-col col-6>{{att.price_prefix +\'&nbsp;\'+ att.options_values_price+\'&nbsp;\'+config.currency}}</ion-col>\n        </ion-row>\n\n        <ion-row align-items-center>\n          <ion-col col-6>{{\'Quantity\' |translate}}&nbsp;:&nbsp;</ion-col>\n          <ion-col col-6>\n            <button ion-button small outline (click)="qunatityMinus(product);">\n              <ion-icon name="remove"></ion-icon>\n            </button>\n            <span class="dgi">{{product.customers_basket_quantity}}</span>\n            <button ion-button small outline (click)="qunatityPlus(product);">\n              <ion-icon name="add"></ion-icon>\n            </button>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col col-6>\n            <strong>{{\'Sub Total\' |translate}}&nbsp;:&nbsp;</strong>\n          </ion-col>\n          <ion-col col-6>\n            <strong>{{product.total | curency}}</strong>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n      <button ion-button small color="secondary" (click)="getSingleProductDetail(product.products_id)">{{\'View\' | translate}}</button>\n      <button ion-button small clear color="danger" (click)="removeCart(product.cart_id);">{{\'Remove\' | translate}}</button>\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n<ion-footer *ngIf="shared.cartProducts.length!=0">\n  <ion-toolbar color="light">\n    <ion-buttons left>\n      <strong>\n        {{\'Total\'|translate}}&nbsp;:&nbsp;\n        <span>{{total| curency}}</span>\n      </strong>\n    </ion-buttons>\n    <ion-buttons right>\n      <button ion-button solid color="secondary" (click)="proceedToCheckOut()">\n        {{\'Proceed\'|translate}}\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/cart/cart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_8__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_toast__["a" /* Toast */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
    ], CartPage);
    return CartPage;
}());

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_onesignal__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/




var LoadingProvider = (function () {
    function LoadingProvider(loadingCtrl, config, oneSignal) {
        this.loadingCtrl = loadingCtrl;
        this.config = config;
        this.oneSignal = oneSignal;
    }
    LoadingProvider.prototype.show = function () {
        this.loading = this.loadingCtrl.create({
            duration: 10000
        });
        this.loading.present();
    };
    LoadingProvider.prototype.hide = function () {
        try {
            this.loading.dismiss();
        }
        catch (error) { }
    };
    LoadingProvider.prototype.autoHide = function (time) {
        this.loading = this.loadingCtrl.create({
            duration: time
        });
        this.loading.present();
    };
    LoadingProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_onesignal__["a" /* OneSignal */]])
    ], LoadingProvider);
    return LoadingProvider;
}());

//# sourceMappingURL=loading.js.map

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_loading_loading__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__products_products__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__cart_cart__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/









var SearchPage = (function () {
    function SearchPage(navCtrl, navParams, config, http, alert, loading, shared) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.config = config;
        this.http = http;
        this.alert = alert;
        this.loading = loading;
        this.shared = shared;
        this.searchResult = [];
        this.showCategories = true;
        this.onChangeKeyword = function (e) {
            //console.log(this.search);
            // if (search != undefined) {
            //rchResult = [];
            //  }
        };
        this.getSearchData = function () {
            var _this = this;
            if (this.search != undefined) {
                if (this.search == null || this.search == '') {
                    this.alert.show("Please enter something ");
                    return 0;
                }
            }
            else {
                this.alert.show("Please enter something ");
                return 0;
            }
            this.loading.show();
            this.http.post(this.config.url + 'getSearchData', { 'searchValue': this.search }).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.loading.hide();
                if (data.success == 1) {
                    _this.searchResult = data.product_data;
                    _this.showCategories = false;
                }
                if (data.success == 0) {
                    _this.alert.show(data.message);
                }
            });
        };
    }
    SearchPage.prototype.openProducts = function (id, name) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__products_products__["a" /* ProductsPage */], { id: id, name: name, sortOrder: 'newest' });
    };
    SearchPage.prototype.openCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__cart_cart__["a" /* CartPage */]);
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-search',template:/*ion-inline-start:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/search/search.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      {{\'Search\'| translate }}\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only class="cart-button" (click)="openCart()">\n        <ion-icon name="cart">\n          <ion-badge color="secondary">{{shared.cartquantity}}</ion-badge>\n        </ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <form #loginForm="ngForm" (ngSubmit)="getSearchData()">\n    <ion-searchbar [(ngModel)]="search" name="search" placeholder="{{\'Search\'|translate}}" [showCancelButton]="shouldShowCancel"\n      (ionInput)="onChangeKeyword($event)">\n    </ion-searchbar>\n  </form>\n\n  <div *ngFor="let p of searchResult.products">\n    <product [data]="p" [type]="\'list\'"></product>\n  </div>\n\n  <ion-list *ngIf="showCategories">\n    <ion-item *ngFor="let c of shared.subCategories" (click)="openProducts(c.id,c.name)" class="animated flipInX">\n      <ion-avatar item-start>\n        <img src="{{config.url+c.image}}">\n      </ion-avatar>\n      <h2>{{c.name}}</h2>\n      <p>{{c.total_products}} {{\'Products\'| translate }} </p>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/search/search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_shared_data_shared_data__["a" /* SharedDataProvider */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_loading_loading__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/









var SignUpPage = (function () {
    function SignUpPage(http, config, viewCtrl, modalCtrl, loading, shared, platform, camera) {
        this.http = http;
        this.config = config;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.loading = loading;
        this.shared = shared;
        this.platform = platform;
        this.camera = camera;
        this.formData = {
            customers_firstname: '',
            customers_lastname: '',
            customers_email_address: '',
            customers_password: '',
            customers_telephone: '',
            customers_picture: ''
        };
        this.errorMessage = '';
    }
    SignUpPage.prototype.openCamera = function () {
        var _this = this;
        var options = {
            quality: 80,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            allowEdit: true,
            targetWidth: 100,
            targetHeight: 100,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };
        this.platform.ready().then(function () {
            _this.camera.getPicture(options).then(function (imageData) {
                // imageData is either a base64 encoded string or a file URI
                // If it's base64:
                _this.image = 'data:image/jpeg;base64,' + imageData;
                // console.log(base64Image);
            }, function (err) { });
        });
    };
    SignUpPage.prototype.signUp = function () {
        var _this = this;
        this.loading.show();
        this.errorMessage = '';
        this.formData.customers_picture = this.image;
        this.http.post(this.config.url + 'processRegistration', this.formData).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.loading.hide();
            if (data.success == 1) {
                _this.shared.login(data.data[0]);
                //this.config.customerData = data.data[0];
                _this.viewCtrl.dismiss();
            }
            if (data.success == 0) {
                _this.errorMessage = data.message;
            }
        });
    };
    SignUpPage.prototype.openPrivacyPolicyPage = function () {
        var modal = this.modalCtrl.create('PrivacyPolicyPage');
        modal.present();
    };
    SignUpPage.prototype.openTermServicesPage = function () {
        var modal = this.modalCtrl.create('TermServicesPage');
        modal.present();
    };
    SignUpPage.prototype.openRefundPolicyPage = function () {
        var modal = this.modalCtrl.create('RefundPolicyPage');
        modal.present();
    };
    SignUpPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* LoginPage */]);
        modal.present();
    };
    SignUpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-sign-up',template:/*ion-inline-start:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/sign-up/sign-up.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button icon-only (click)="dismiss()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>{{\'Create an Account\'|translate}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="page-sign-up" padding>\n  <ion-row>\n    <ion-col col-12>\n      <div class="photo">\n        <div class="image">\n          <img class="avatar" src="assets/avatar.png" *ngIf="image==null">\n          <img class="avatar" src="{{image}}" *ngIf="image!=null">\n        </div>\n        <div class="upload">\n          <ion-icon name="camera" (click)=\'openCamera()\'></ion-icon>\n        </div>\n      </div>\n    </ion-col>\n  </ion-row>\n\n  <form #loginForm="ngForm" class="form" (ngSubmit)="signUp()">\n    <ion-row>\n      <ion-col>\n        <ion-list>\n          <ion-item>\n            <ion-input type="text" placeholder="{{\'First Name\'|translate}}" name="customers_firstname" [(ngModel)]="formData.customers_firstname"\n              required></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input type="text" placeholder="{{\'Last Name\'|translate}}" name="customers_lastname" [(ngModel)]="formData.customers_lastname"\n              required></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input type="email" email placeholder="{{\'Email\'|translate}}" name="customers_email_address" [(ngModel)]="formData.customers_email_address"\n              required></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-input type="password" placeholder="{{\'Password\'|translate}}" name="customers_password" [(ngModel)]="formData.customers_password"\n              required></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input type="number" placeholder="{{\'Mobile\'|translate}}" name="customers_telephone" [(ngModel)]="formData.customers_telephone"\n              required></ion-input>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n      <ion-col col-12>\n        <label *ngIf="errorMessage!=\'\'">\n          <span>{{errorMessage}}</span>\n        </label>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <p>{{"Creating an account means you’re okay with our"|translate}}\n          <a (click)="openTermServicesPage()">{{\'Term and Services\'|translate}}</a>,\n          <a (click)="openPrivacyPolicyPage()">{{\'Privacy Policy\'|translate}}</a> {{\'and\'|translate}}\n          <a (click)="openRefundPolicyPage()">{{\'Refund Policy\'|translate}}</a>\n        </p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <button ion-button block color="secondary" type="submit" [disabled]="!loginForm.form.valid">{{\'Register\'|translate}}</button>\n      </ion-col>\n    </ion-row>\n  </form>\n</ion-content>'/*ion-inline-end:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/sign-up/sign-up.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */]])
    ], SignUpPage);
    return SignUpPage;
}());

//# sourceMappingURL=sign-up.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyOrdersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_loading_loading__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_alert_alert__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__order_detail_order_detail__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__cart_cart__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__search_search__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/











var MyOrdersPage = (function () {
    function MyOrdersPage(navCtrl, navParams, http, config, shared, translate, alert, loading) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.config = config;
        this.shared = shared;
        this.alert = alert;
        this.loading = loading;
        this.orders = new Array;
        this.httpRunning = true;
    }
    MyOrdersPage.prototype.getOrders = function () {
        var _this = this;
        this.httpRunning = true;
        this.orders = [];
        this.loading.show();
        var data = {};
        data.customers_id = this.shared.customerData.customers_id;
        data.language_id = this.config.langId;
        this.http.post(this.config.url + 'getOrders', data).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.loading.hide();
            _this.httpRunning = false;
            //$rootScope.address=response.data.data;
            if (data.success == 1) {
                _this.orders = [];
                _this.orders = data.data;
            }
            // $scope.$broadcast('scroll.refreshComplete');
        }, function (response) {
            this.loading.hide();
            this.alert.show("Server Error while Loading Orders");
            console.log(response);
        });
    };
    ;
    MyOrdersPage.prototype.showOrderDetail = function (order) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__order_detail_order_detail__["a" /* OrderDetailPage */], { 'data': order });
    };
    MyOrdersPage.prototype.ionViewDidLoad = function () {
        this.httpRunning = true;
        this.getOrders();
    };
    MyOrdersPage.prototype.openCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__cart_cart__["a" /* CartPage */]);
    };
    MyOrdersPage.prototype.openSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__search_search__["a" /* SearchPage */]);
    };
    MyOrdersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-my-orders',template:/*ion-inline-start:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/my-orders/my-orders.html"*/'\n<ion-header>\n  \n    <ion-navbar>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n  \n      <ion-title>\n        {{\'Customer Orders\'| translate }}\n      </ion-title>\n  \n      <ion-buttons end>\n        <button ion-button icon-only (click)="openSearch()">\n          <ion-icon name="search"></ion-icon>\n        </button>\n        <button ion-button icon-only class="cart-button" (click)="openCart()">\n          <ion-icon name="cart">\n            <ion-badge color="secondary">{{shared.cartquantity}}</ion-badge>\n          </ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  \n  </ion-header>\n\n<ion-content class="page-my-orders">\n  <ion-grid class="page-empty" *ngIf="orders.length==0 && httpRunning==false">\n      <ion-row align-items-center>\n        <ion-col  col-12>\n            <h3 text-center><ion-icon name="briefcase"></ion-icon></h3>\n            <h4 text-center>{{\'Your Order List is Empty\'|translate}}</h4>\n            <h5 text-center>{{\'continue shopping\'|translate}}</h5>\n            <p text-center>\n              <button ion-button>{{\'Explore\'|translate}}</button>\n            </p>\n        </ion-col>\n      </ion-row>\n  </ion-grid>\n\n  <ion-card *ngFor="let order of orders" (click)="showOrderDetail(order)">\n    <ion-card-content>\n      <ion-row>\n        <ion-col col-6>\n          {{\'Order ID\'|translate}}\n        </ion-col>\n        <ion-col text-right col-6>\n          {{\'#\'+order.orders_id}}\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6>\n          {{\'Date\'|translate}}\n        </ion-col>\n        <ion-col text-right col-6>\n          {{order.last_modified}}\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6>\n          {{\'Price\'|translate}}\n        </ion-col>\n        <ion-col text-right col-6>\n          {{order.order_price|curency}}\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6>\n          {{\'Status\'|translate}}\n        </ion-col>\n        <ion-col text-right col-6>\n          <span [class.pending]="order.orders_status==\'Pending\'"  \n          [class.cancel]="order.orders_status==\'Cancel\'" \n          [class.inprocess]="order.orders_status==\'In Process\'" [class.complete]="order.orders_status==\'Completed\'"><strong>{{order.orders_status}}</strong></span>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/my-orders/my-orders.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_7__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_loading_loading__["a" /* LoadingProvider */]])
    ], MyOrdersPage);
    return MyOrdersPage;
}());

//# sourceMappingURL=my-orders.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubCategories6Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__products_products__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_animations__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cart_cart__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_search__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/








var SubCategories6Page = (function () {
    function SubCategories6Page(navCtrl, navParams, shared, config) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.shared = shared;
        this.config = config;
        this.subcategories = [];
        this.parent = navParams.get("parent");
        for (var _i = 0, _a = this.shared.subCategories; _i < _a.length; _i++) {
            var value = _a[_i];
            if (value.parent_id == this.parent) {
                this.subcategories.push(value);
            }
        }
    }
    SubCategories6Page.prototype.openProducts = function (id, name) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__products_products__["a" /* ProductsPage */], { id: id, name: name, sortOrder: 'newest' });
    };
    SubCategories6Page.prototype.openCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__cart_cart__["a" /* CartPage */]);
    };
    SubCategories6Page.prototype.openSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__search_search__["a" /* SearchPage */]);
    };
    SubCategories6Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-sub-categories6',
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["j" /* trigger */])('animate', [
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["i" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('500ms', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* style */])({ opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["i" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* style */])({ opacity: 1 }),
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('700ms', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* style */])({ opacity: 0 }))
                    ])
                ])
            ],template:/*ion-inline-start:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/sub-categories6/sub-categories6.html"*/'<ion-header>\n    \n      <ion-navbar>\n        <ion-title>\n          {{\'Sub Categories\'| translate }}\n        </ion-title>\n    \n        <ion-buttons end>\n          <button ion-button icon-only (click)="openSearch()">\n            <ion-icon name="search"></ion-icon>\n          </button>\n          <button ion-button icon-only class="cart-button" (click)="openCart()">\n            <ion-icon name="cart">\n              <ion-badge color="secondary">{{shared.cartquantity}}</ion-badge>\n            </ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-navbar>\n    \n    </ion-header>\n\n<ion-content class="page-sub-categories6">\n  <ion-card *ngFor="let c of subcategories" (click)="openProducts(c.id)" class="animated flipInX">\n    <img src="{{config.url+c.image}}" />\n    <div class="categories-title">{{c.name}}</div>\n    <div class="categories-subtitle">{{c.total_products}} {{\'Products\'| translate }} </div>\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/sub-categories6/sub-categories6.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_config_config__["a" /* ConfigProvider */]])
    ], SubCategories6Page);
    return SubCategories6Page;
}());

//# sourceMappingURL=sub-categories6.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubCategoriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__products_products__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_animations__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cart_cart__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_search__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/








var SubCategoriesPage = (function () {
    function SubCategoriesPage(navCtrl, navParams, shared, config) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.shared = shared;
        this.config = config;
        this.subcategories = [];
        this.parent = navParams.get("parent");
        for (var _i = 0, _a = this.shared.subCategories; _i < _a.length; _i++) {
            var value = _a[_i];
            if (value.parent_id == this.parent) {
                this.subcategories.push(value);
            }
        }
    }
    SubCategoriesPage.prototype.openProducts = function (id, name) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__products_products__["a" /* ProductsPage */], { id: id, name: name, sortOrder: 'newest' });
    };
    SubCategoriesPage.prototype.openCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__cart_cart__["a" /* CartPage */]);
    };
    SubCategoriesPage.prototype.openSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__search_search__["a" /* SearchPage */]);
    };
    SubCategoriesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-sub-categories',
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["j" /* trigger */])('animate', [
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["i" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('500ms', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* style */])({ opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["i" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* style */])({ opacity: 1 }),
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('700ms', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* style */])({ opacity: 0 }))
                    ])
                ])
            ],template:/*ion-inline-start:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/sub-categories/sub-categories.html"*/'\n<ion-header>\n    \n      <ion-navbar>\n        <ion-title>\n          {{\'Sub Categories\'| translate }}\n        </ion-title>\n    \n        <ion-buttons end>\n          <button ion-button icon-only (click)="openSearch()">\n            <ion-icon name="search"></ion-icon>\n          </button>\n          <button ion-button icon-only class="cart-button" (click)="openCart()">\n            <ion-icon name="cart">\n              <ion-badge color="secondary">{{shared.cartquantity}}</ion-badge>\n            </ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-navbar>\n    \n    </ion-header>\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-6 *ngFor="let c of subcategories" (click)="openProducts(c.id)" class="animated flipInX">\n          <ion-card [ngStyle]="{ \'background-image\': \'url(\' + config.url+c.image + \')\'}">\n            <div class="categories-title">\n              <h2>{{c.name}}<br><small>{{c.total_products}} {{\'Products\'| translate }}</small></h2>\n            </div>\n          </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/sub-categories/sub-categories.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */]])
    ], SubCategoriesPage);
    return SubCategoriesPage;
}());

//# sourceMappingURL=sub-categories.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LanguagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_loading_loading__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_shared_data_shared_data__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/







var LanguagePage = (function () {
    function LanguagePage(viewCtrl, http, shared, config, translateService, loading) {
        var _this = this;
        this.viewCtrl = viewCtrl;
        this.http = http;
        this.shared = shared;
        this.config = config;
        this.loading = loading;
        this.prviousLanguageId = localStorage.langId;
        //getting all languages
        this.loading.show();
        this.http.get(config.url + 'getLanguages').map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.loading.hide();
            _this.translate = translateService;
            _this.languages = data.languages;
            for (var _i = 0, _a = _this.languages; _i < _a.length; _i++) {
                var data_1 = _a[_i];
                if (data_1.languages_id == _this.prviousLanguageId) {
                    _this.selectedLanguage = data_1;
                }
            }
        });
    }
    LanguagePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    LanguagePage.prototype.updateLanguage = function (lang) {
        if (lang != undefined && this.prviousLanguageId != lang.languages_id) {
            this.loading.show();
            //this.translate.use(lang.languages_id);
            localStorage.langId = lang.languages_id;
            localStorage.direction = lang.direction;
            //this.storage.set('langId', lang.languages_id);
            this.shared.emptyCart();
            this.shared.emptyRecentViewed();
            setTimeout(function () {
                window.location.reload();
            }, 900);
        }
        //this.
    };
    LanguagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-language',template:/*ion-inline-start:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/language/language.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{\'Select Language\'| translate }}</ion-title>\n    <ion-buttons left>\n      <button ion-button icon-only (click)="dismiss()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="page-language" padding>\n\n  <ion-list radio-group [(ngModel)]="selectedLanguage" (ionChange)="updateLanguage(selectedLanguage)">\n    <ion-item *ngFor="let l of languages">\n      <img src="{{config.url+l.image}}" item-start>\n      <ion-label>\n        {{l.name}}\n      </ion-label>\n      <ion-radio [value]="l"></ion-radio>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/language/language.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_6__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_5__providers_loading_loading__["a" /* LoadingProvider */]])
    ], LanguagePage);
    return LanguagePage;
}());

//# sourceMappingURL=language.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacyPolicyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/




var PrivacyPolicyPage = (function () {
    function PrivacyPolicyPage(viewCtrl, sharedData, translate) {
        this.viewCtrl = viewCtrl;
        this.sharedData = sharedData;
    }
    PrivacyPolicyPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    PrivacyPolicyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-privacy-policy',template:/*ion-inline-start:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/privacy-policy/privacy-policy.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button (click)="dismiss()">\n        <ion-icon name="md-close"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>{{\'Privacy Policy\'|translate}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div [innerHTML]="sharedData.privacyPolicy"></div>\n</ion-content>'/*ion-inline-end:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/privacy-policy/privacy-policy.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]])
    ], PrivacyPolicyPage);
    return PrivacyPolicyPage;
}());

//# sourceMappingURL=privacy-policy.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermServicesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_shared_data_shared_data__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/




var TermServicesPage = (function () {
    function TermServicesPage(viewCtrl, sharedData, translate) {
        this.viewCtrl = viewCtrl;
        this.sharedData = sharedData;
    }
    TermServicesPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    TermServicesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-term-services',template:/*ion-inline-start:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/term-services/term-services.html"*/'\n<ion-header>\n  \n    <ion-navbar>\n      <ion-buttons left>\n        <button ion-button (click)="dismiss()">\n              <ion-icon name="md-close"></ion-icon>\n            </button>\n      </ion-buttons>\n      <ion-title translate> {{\'Term and Services\'| translate }}</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n\n\n<ion-content padding>\n  <div [innerHTML]="sharedData.termServices"></div>\n</ion-content>\n\n'/*ion-inline-end:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/term-services/term-services.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
    ], TermServicesPage);
    return TermServicesPage;
}());

//# sourceMappingURL=term-services.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RefundPolicyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/




var RefundPolicyPage = (function () {
    function RefundPolicyPage(viewCtrl, sharedData, translate) {
        this.viewCtrl = viewCtrl;
        this.sharedData = sharedData;
    }
    RefundPolicyPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    RefundPolicyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-refund-policy',template:/*ion-inline-start:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/refund-policy/refund-policy.html"*/'<ion-header>\n  \n    <ion-navbar>\n      <ion-buttons left>\n        <button ion-button (click)="dismiss()">\n          <ion-icon name="md-close"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-title>{{\'Refund Policy\'|translate}}</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding>\n    <div [innerHTML]="sharedData.refundPolicy"></div>\n  </ion-content>'/*ion-inline-end:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/refund-policy/refund-policy.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]])
    ], RefundPolicyPage);
    return RefundPolicyPage;
}());

//# sourceMappingURL=refund-policy.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sub_categories_sub_categories__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_animations__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cart_cart__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_search__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/








var CategoriesPage = (function () {
    function CategoriesPage(navCtrl, shared, config) {
        this.navCtrl = navCtrl;
        this.shared = shared;
        this.config = config;
    }
    CategoriesPage.prototype.openSubCategories = function (parent) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__sub_categories_sub_categories__["a" /* SubCategoriesPage */], { 'parent': parent });
    };
    CategoriesPage.prototype.openCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__cart_cart__["a" /* CartPage */]);
    };
    CategoriesPage.prototype.openSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__search_search__["a" /* SearchPage */]);
    };
    CategoriesPage.prototype.ionViewWillEnter = function () {
        if (this.config.admob == 1)
            this.shared.showAd();
    };
    CategoriesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-categories',
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["j" /* trigger */])('animate', [
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["i" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('500ms', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* style */])({ opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["i" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* style */])({ opacity: 1 }),
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('700ms', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* style */])({ opacity: 0 }))
                    ])
                ])
            ],template:/*ion-inline-start:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/categories/categories.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title>\n      {{\'Categories\'| translate }}\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="openSearch()">\n        <ion-icon name="search"></ion-icon>\n      </button>\n      <button ion-button icon-only class="cart-button" (click)="openCart()">\n        <ion-icon name="cart">\n          <ion-badge color="secondary">{{shared.cartquantity}}</ion-badge>\n        </ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n<ion-content>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col col-6 *ngFor="let c of shared.categories" (click)="openSubCategories(c.id)" class="animated flipInX">\n        <ion-card [ngStyle]="{ \'background-image\': \'url(\' + config.url+c.image + \')\'}">\n          <div class="categories-title">\n            <h2>{{c.name}}\n              <br>\n              <small>{{c.total_products}} {{\'Products\'| translate }}</small>\n            </h2>\n          </div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n<ion-footer *ngIf="config.footerShowHide==\'1\'">\n  <footer></footer>\n</ion-footer>'/*ion-inline-end:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/categories/categories.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */]])
    ], CategoriesPage);
    return CategoriesPage;
}());

//# sourceMappingURL=categories.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyAccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_alert_alert__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_loading_loading__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__cart_cart__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__search_search__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/











var MyAccountPage = (function () {
    function MyAccountPage(http, config, shared, translate, platform, camera, navCtrl, alert, loading) {
        this.http = http;
        this.config = config;
        this.shared = shared;
        this.translate = translate;
        this.platform = platform;
        this.camera = camera;
        this.navCtrl = navCtrl;
        this.alert = alert;
        this.loading = loading;
        this.myAccountData = {
            customers_firstname: '',
            customers_lastname: '',
            customers_telephone: '',
            currentPassword: '',
            customers_password: '',
            customers_dob: '',
            customers_old_picture: ''
        };
        this.profilePicture = '';
        this.passwordData = {};
        //============================================================================================  
        //function updating user information
        this.updateInfo = function () {
            var _this = this;
            //this.shared.customerData.customers_password="1234"
            var currenrtPassword = this.myAccountData.currentPassword;
            var newPassword = this.myAccountData.customers_password;
            // console.log(currenrtPassword + "  " + newPassword);
            // console.log(this.shared.customerData.customers_password);
            if (newPassword != "" && currenrtPassword == "") {
                this.translate.get("Please Enter Current Password").subscribe(function (res) {
                    _this.alert.show(res);
                });
            }
            else if (currenrtPassword != "" && currenrtPassword != this.shared.customerData.customers_password) {
                this.translate.get("Please Enter Current Password Correctly").subscribe(function (res) {
                    _this.alert.show(res);
                });
            }
            else if (newPassword != undefined && newPassword != "" && currenrtPassword != this.shared.customerData.customers_password) {
                this.translate.get("Please Enter Current Password Correctly").subscribe(function (res) {
                    _this.alert.show(res);
                });
            }
            else {
                this.loading.show();
                this.myAccountData.customers_id = this.shared.customerData.customers_id;
                if (this.profilePicture == this.config.url + this.shared.customerData.customers_picture) {
                    // this.myAccountData.customers_picture=$rootScope.customerData.customers_picture;
                    this.myAccountData.customers_old_picture = this.shared.customerData.customers_picture;
                }
                else if (this.profilePicture == '')
                    this.myAccountData.customers_picture = null;
                else
                    this.myAccountData.customers_picture = this.profilePicture;
                var data = this.myAccountData;
                //  console.log("post data  "+JSON.stringify(data));
                this.http.post(this.config.url + 'updateCustomerInfo', data).map(function (res) { return res.json(); }).subscribe(function (data) {
                    _this.loading.hide();
                    if (data.success == 1) {
                        //   document.getElementById("updateForm").reset();
                        _this.alert.show(data.message);
                        _this.shared.customerData.customers_firstname = _this.myAccountData.customers_firstname;
                        _this.shared.customerData.customers_lastname = _this.myAccountData.customers_lastname;
                        _this.shared.customerData.customers_telephone = _this.myAccountData.customers_telephone;
                        _this.shared.customerData.customers_picture = data.data[0].customers_picture;
                        _this.shared.customerData.customers_dob = _this.myAccountData.customers_dob;
                        if (_this.myAccountData.customers_password != '')
                            _this.shared.customerData.customers_password = _this.myAccountData.customers_password;
                        _this.shared.login(_this.shared.customerData);
                        _this.myAccountData.currentPassword = "";
                        _this.myAccountData.customers_password = "";
                    }
                }, function (error) {
                    _this.loading.hide();
                    _this.alert.show("Error while Updating!");
                });
            }
        };
    }
    MyAccountPage.prototype.openCamera = function () {
        var _this = this;
        this.loading.autoHide(1000);
        var options = {
            quality: 80,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            allowEdit: true,
            targetWidth: 100,
            targetHeight: 100,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };
        this.platform.ready().then(function () {
            _this.camera.getPicture(options).then(function (imageData) {
                _this.profilePicture = 'data:image/jpeg;base64,' + imageData;
            }, function (err) { });
        });
    };
    //============================================================================================  
    //function updating user password
    // updatePassword = function (form) {
    //   if (this.passwordData.currentPassword != this.shared.customerData.customers_password) {
    //     this.alert.show("Please enter Correct Password");
    //   }
    //   else {
    //     this.loading.show();
    //     this.passwordData.customers_id = this.shared.customerData.customers_id;
    //     var data = this.passwordData;
    //     this.http.post(this.config.url + 'updateCustomerPassword', data).map(res => res.json()).subscribe(data => {
    //       this.loading.hide();
    //       if (data.success == 1) {
    //         this.shared.customerData.customers_password = this.passwordData.customers_password;
    //         this.shared.login(this.shared.customerData);
    //         this.alert.show(data.message);
    //         this.passwordData.currentPassword = "";
    //         this.passwordData.customers_password = "";
    //       }
    //       else {
    //       }
    //     }, function (response) {
    //       this.loading.hide();
    //       this.alert.show("Server Error while changing password");
    //     });
    //   }
    // };
    MyAccountPage.prototype.ionViewWillEnter = function () {
        this.myAccountData.customers_firstname = this.shared.customerData.customers_firstname;
        this.myAccountData.customers_lastname = this.shared.customerData.customers_lastname;
        this.profilePicture = this.config.url + this.shared.customerData.customers_picture;
        this.myAccountData.customers_old_picture = this.shared.customerData.customers_picture;
        this.myAccountData.customers_telephone = this.shared.customerData.customers_telephone;
        try {
            // console.log(this.shared.customerData.customers_dob);
            this.myAccountData.customers_dob = new Date(this.shared.customerData.customers_dob).toISOString();
            // console.log(this.myAccountData.customers_dob);
        }
        catch (error) {
            this.myAccountData.customers_dob = new Date("1-1-2000").toISOString();
        }
    };
    MyAccountPage.prototype.openCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__cart_cart__["a" /* CartPage */]);
    };
    MyAccountPage.prototype.openSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__search_search__["a" /* SearchPage */]);
    };
    MyAccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-my-account',template:/*ion-inline-start:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/my-account/my-account.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title>\n      {{\'Edit Profile\'| translate }}\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="openSearch()">\n        <ion-icon name="search"></ion-icon>\n      </button>\n      <button ion-button icon-only class="cart-button" (click)="openCart()">\n        <ion-icon name="cart">\n          <ion-badge color="secondary">{{shared.cartquantity}}</ion-badge>\n        </ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n<ion-content class="page-my-account" padding>\n  <ion-row>\n    <ion-col col-12>\n      <div class="photo">\n        <div class="image">\n          <img class="avatar" src="{{profilePicture}}">\n        </div>\n        <div class="upload">\n          <ion-icon name="create" (click)=\'openCamera()\'></ion-icon>\n        </div>\n      </div>\n    </ion-col>\n  </ion-row>\n\n  <form #userForm="ngForm" (ngSubmit)="updateInfo()">\n    <ion-row>\n      <ion-col>\n        <ion-list>\n\n          <ion-item>\n            <ion-input type="text" placeholder="{{\'First Name\'|translate}}" [(ngModel)]="myAccountData.customers_firstname" name="customers_firstname"\n              required></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-input type="text" placeholder="{{\'Last Name\'|translate}}" [(ngModel)]="myAccountData.customers_lastname" name="customers_lastname"\n              required></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input type="number" placeholder="{{\'Mobile\'|translate}}" [(ngModel)]="myAccountData.customers_telephone" name="customers_telephone"\n              required></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label>{{\'Date of Birth\'|translate}}</ion-label>\n            <ion-datetime displayFormat="DD/MM/YYYY" max="2010" name="customers_dob" [(ngModel)]="myAccountData.customers_dob" required></ion-datetime>\n\n            <!-- <ion-input type="date"[(ngModel)]="myAccountData.customers_dob"\n              name="customers_dob" required></ion-input> -->\n          </ion-item>\n          <ion-item>\n            <ion-input type="password" placeholder="{{\'Current Password\'|translate}}" [(ngModel)]="myAccountData.currentPassword" name="currentPassword"\n              ></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input type="password" placeholder="{{\'New Password\'|translate}}" [(ngModel)]="myAccountData.customers_password" name="customers_password"\n              ></ion-input>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button block color="secondary" type="submit" [disabled]="!userForm.form.valid">{{\'Update\'|translate}}</button>\n      </ion-col>\n    </ion-row>\n  </form>\n\n  <!-- <form #passwordForm="ngForm" (ngSubmit)="updatePassword()">\n\n    <ion-row>\n      <ion-col>\n        <ion-list>\n          <ion-item>\n            <ion-input type="password" placeholder="{{\'Current Password\'|translate}}" [(ngModel)]="passwordData.currentPassword" name="currentPassword"\n              required></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input type="password" placeholder=" {{\'New Password\'|translate}}" [(ngModel)]="passwordData.customers_password" name="customers_password"\n              required></ion-input>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button block color="secondary" type="submit" [disabled]="!passwordForm.form.valid">{{\'Change Password\'|translate}}</button>\n      </ion-col>\n    </ion-row>\n  </form> -->\n</ion-content>'/*ion-inline-end:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/my-account/my-account.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_loading_loading__["a" /* LoadingProvider */]])
    ], MyAccountPage);
    return MyAccountPage;
}());

//# sourceMappingURL=my-account.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_toast__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__news_detail_news_detail__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__news_list_news_list__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__cart_cart__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__search_search__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/












var NewsPage = (function () {
    function NewsPage(navCtrl, navParams, http, config, loading, toast, shared, translate) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.config = config;
        this.loading = loading;
        this.toast = toast;
        this.shared = shared;
        this.featuredPosts = new Array;
        this.segments = 'newest';
        //WordPress intergation
        this.categories = new Array;
        //page varible
        this.page = 0;
        //WordPress intergation
        this.posts = new Array;
        //page varible
        this.page2 = 0;
        //========================================= tab newest categories ===============================================================================
        this.getCategories = function () {
            var _this = this;
            var data = {};
            data.language_id = this.config.langId;
            data.page_number = this.page2;
            this.http.post(this.config.url + 'allNewsCategories', data).map(function (res) { return res.json(); }).subscribe(function (data) {
                if (_this.page2 == 0) {
                    _this.categories = [];
                }
                if (data.success == 1) {
                    _this.page2++;
                    data.data.forEach(function (value, index) {
                        _this.categories.push(value);
                    });
                    // console.log(data.data.length);
                    _this.getCategories();
                }
                if (data.data.length < 9) {
                    if (_this.categories.length != 0) {
                        _this.toast.show("All Categories Loaded!", 'short', 'bottom');
                    }
                }
            }, function (response) {
                // console.log("Error while loading categories from the server");
                // console.log(response);
            });
        };
        var dat = {};
        dat.language_id = this.config.langId;
        dat.is_feature = 1;
        this.http.post(this.config.url + 'getAllNews', dat).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.featuredPosts = data.news_data;
        });
        this.getPosts();
        this.getCategories();
    }
    //============================================================================================  
    //getting list of posts
    NewsPage.prototype.getPosts = function () {
        var _this = this;
        var data = {};
        data.language_id = this.config.langId;
        data.page_number = this.page;
        this.http.post(this.config.url + 'getAllNews', data).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.infinite.complete(); //stopping infinite scroll loader
            if (_this.page == 0) {
                _this.posts = [];
                _this.infinite.enable(true);
            }
            if (data.success == 1) {
                _this.page++;
                data.news_data.forEach(function (value, index) {
                    _this.posts.push(value);
                });
            }
            if (data.news_data.length < 9) {
                _this.infinite.enable(false); //disabling infinite scroll
                if (_this.posts.length != 0) {
                    _this.toast.show("All Posts Loaded!", 'short', 'bottom');
                }
            }
        }, function (response) {
            // console.log("Error while loading posts from the server");
            // console.log(response);
        });
    };
    ;
    //============================================================================================  
    //getting list of sub categories from the server
    NewsPage.prototype.showPostDetail = function (post) {
        this.loading.autoHide(500);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__news_detail_news_detail__["a" /* NewsDetailPage */], { 'post': post });
    };
    ;
    NewsPage.prototype.openPostsPage = function (name, id) {
        this.loading.autoHide(500);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__news_list_news_list__["a" /* NewsListPage */], { 'name': name, 'id': id });
    };
    NewsPage.prototype.openCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__cart_cart__["a" /* CartPage */]);
    };
    NewsPage.prototype.openSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__search_search__["a" /* SearchPage */]);
    };
    NewsPage.prototype.ionViewWillEnter = function () {
        if (this.config.admob == 1)
            this.shared.showAd();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* InfiniteScroll */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* InfiniteScroll */])
    ], NewsPage.prototype, "infinite", void 0);
    NewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-news',template:/*ion-inline-start:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/news/news.html"*/'\n\n<ion-header>\n  \n    <ion-navbar>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n  \n      <ion-title>\n        {{\'News\'| translate }}\n      </ion-title>\n  \n      <ion-buttons end>\n        <button ion-button icon-only (click)="openSearch()">\n          <ion-icon name="search"></ion-icon>\n        </button>\n        <button ion-button icon-only class="cart-button" (click)="openCart()">\n          <ion-icon name="cart">\n            <ion-badge color="secondary">{{shared.cartquantity}}</ion-badge>\n          </ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  \n  </ion-header>\n\n<ion-content class="page-news">\n  <ion-slides pager=true paginationType="bullets" autoplay="true" loop="true" dir="{{shared.dir}}" class="animated fadeIn">\n    <ion-slide *ngFor="let post of featuredPosts" (click)="showPostDetail(post)">\n      <img src="{{config.url+post.news_image}}">\n      <h4 class="slider-title">{{post.news_name}}</h4>\n    </ion-slide>\n  </ion-slides>\n\n  <!-- top Segments  -->\n  <ion-segment [(ngModel)]="segments" color="primary">\n    <ion-segment-button value="newest">{{\'Newest\' |translate}}</ion-segment-button>\n    <ion-segment-button value="categories">{{ \'Categories\' | translate }} </ion-segment-button>\n  </ion-segment>\n  <!-- top segments products -->\n  <div class="segments-inner"  [ngSwitch]="segments">\n\n    <div class="segments-posts" *ngSwitchCase="\'newest\'">\n\n      <ion-grid class="page-empty" *ngIf="posts.length==0">\n        <ion-row align-items-center>\n          <ion-col  col-12>\n              <h3 text-center><ion-icon name="ionic"></ion-icon></h3>\n              <h4 text-center>{{\'No Posts Available\'| translate}}</h4>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <ion-list>\n        <ion-item *ngFor="let post of posts" (click)="showPostDetail(post)" class="animated fadeIn">\n          <ion-thumbnail item-start>\n            <img src="{{config.url+post.news_image}}">\n          </ion-thumbnail>\n          <h2>{{post.news_name}}<br><small><ion-icon name="time"></ion-icon>{{post.news_date_added}}</small></h2>\n          <div class="post-excerpt" [innerHTML]="post.news_description"></div>\n        </ion-item>\n        <ion-infinite-scroll #infinite (ionInfinite)="getPosts()">\n          <ion-infinite-scroll-content></ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n      </ion-list>\n    </div>\n\n\n    <div class="segments-categories" *ngSwitchCase="\'categories\'">\n      <ion-grid class="page-empty" *ngIf="categories.length==0">\n        <ion-row align-items-center>\n          <ion-col  col-12>\n              <h3 text-center><ion-icon name="ionic"></ion-icon></h3>\n              <h4 text-center>{{\'No Categories Available\'| translate}}</h4>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <ion-grid class="grid-categories">\n        <ion-row>\n          <ion-col col-6 *ngFor="let cat of categories" (click)="openPostsPage(cat.name,cat.id)" class="animated fadeIn">\n            <ion-card class="card-background-page">\n              <img src="{{config.url+cat.image}}"/>\n              <div class="card-title">{{cat.name}}</div>\n              <div class="card-subtitle">{{cat.total_news}} {{\'Posts\'|translate}}</div>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </div>\n</ion-content>\n<ion-footer *ngIf="config.footerShowHide==\'1\'">\n  <footer ></footer>\n</ion-footer>'/*ion-inline-end:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/news/news.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_toast__["a" /* Toast */],
            __WEBPACK_IMPORTED_MODULE_5__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["c" /* TranslateService */]])
    ], NewsPage);
    return NewsPage;
}());

//# sourceMappingURL=news.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_config_config__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/



var NewsDetailPage = (function () {
    function NewsDetailPage(navCtrl, navParams, config) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.config = config;
        this.post = this.navParams.get('post');
    }
    NewsDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewsDetailPage');
    };
    NewsDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-news-detail',template:/*ion-inline-start:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/news-detail/news-detail.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      {{\'News Details\'| translate }}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="page-news-detail">\n  <ion-card>\n    <img src="{{config.url+post.news_image}}" />\n    <ion-card-content>\n      <ion-card-title>\n        {{post.news_name}}\n        <br>\n        <small>\n          <ion-icon name="time"></ion-icon>{{post.news_date_added }}</small>\n      </ion-card-title>\n      <div class="post-description" [innerHTML]="post.news_description"></div>\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/news-detail/news-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_config_config__["a" /* ConfigProvider */]])
    ], NewsDetailPage);
    return NewsDetailPage;
}());

//# sourceMappingURL=news-detail.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_local_notifications__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__language_language__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__privacy_policy_privacy_policy__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__term_services_term_services__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__refund_policy_refund_policy__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_loading_loading__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__login_login__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__my_account_my_account__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_in_app_browser__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__cart_cart__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__search_search__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_social_sharing__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_app_version__ = __webpack_require__(78);
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



















var SettingsPage = (function () {
    function SettingsPage(navCtrl, navParams, modalCtrl, config, storage, loading, http, localNotifications, events, shared, iab, socialSharing, plt, appVersion) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.config = config;
        this.storage = storage;
        this.loading = loading;
        this.http = http;
        this.localNotifications = localNotifications;
        this.events = events;
        this.shared = shared;
        this.iab = iab;
        this.socialSharing = socialSharing;
        this.plt = plt;
        this.appVersion = appVersion;
        this.setting = {};
    }
    SettingsPage.prototype.turnOnOffNotification = function (value) {
        if (this.setting.localNotification == false) {
            this.localNotifications.cancel(1).then(function (result) {
            });
        }
        else {
            this.localNotifications.schedule({
                id: 1,
                title: this.config.notifTitle,
                text: this.config.notifText,
                every: this.config.notifDuration,
            });
        }
        this.updateSetting();
    };
    SettingsPage.prototype.updateSetting = function () {
        console.log(this.setting);
        this.storage.set('setting', this.setting);
    };
    SettingsPage.prototype.openLoginPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_12__login_login__["a" /* LoginPage */]);
        modal.present();
    };
    SettingsPage.prototype.logOut = function () {
        this.shared.logOut();
    };
    SettingsPage.prototype.openPage = function (page) {
        if (page == 'myAccount')
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__my_account_my_account__["a" /* MyAccountPage */]);
    };
    SettingsPage.prototype.openSite = function () {
        this.loading.autoHide(2000);
        this.iab.create(this.config.siteUrl, "blank");
    };
    //============================================================================================
    //turning on off local  notification
    SettingsPage.prototype.onOffPushNotification = function () {
        var _this = this;
        this.storage.get('registrationId').then(function (registrationId) {
            var data = {};
            data.device_id = registrationId;
            if (_this.setting.notification == false)
                data.is_notify = 0;
            else
                data.is_notify = 1;
            _this.http.post(_this.config.url + 'notify_me', data).map(function (res) { return res.json(); }).subscribe(function (data) {
                if (data.success == 1) {
                    _this.updateSetting();
                }
            }, function (response) {
                console.log(response);
            });
        });
    };
    ;
    SettingsPage.prototype.hideShowFooterMenu = function () {
        this.events.publish('setting', this.setting);
        this.updateSetting();
    };
    SettingsPage.prototype.hideShowCartButton = function () {
        this.events.publish('setting', this.setting);
        this.updateSetting();
    };
    SettingsPage.prototype.showModal = function (value) {
        this.loading.autoHide(1000);
        if (value == 'privacyPolicy') {
            var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__privacy_policy_privacy_policy__["a" /* PrivacyPolicyPage */]);
            modal.present();
        }
        else if (value == 'termServices') {
            var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__term_services_term_services__["a" /* TermServicesPage */]);
            modal.present();
        }
        else if (value == 'language') {
            var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__language_language__["a" /* LanguagePage */]);
            modal.present();
        }
        else {
            var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__refund_policy_refund_policy__["a" /* RefundPolicyPage */]);
            modal.present();
        }
    };
    SettingsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('setting').then(function (val) {
            if (val != null || val != undefined) {
                _this.setting = val;
            }
            else {
                _this.setting.localNotification = true;
                _this.setting.notification = true;
                _this.setting.cartButton = true;
                _this.setting.footer = true;
            }
        });
    };
    SettingsPage.prototype.openCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_15__cart_cart__["a" /* CartPage */]);
    };
    SettingsPage.prototype.openSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_16__search_search__["a" /* SearchPage */]);
    };
    SettingsPage.prototype.rateUs = function () {
        var _this = this;
        this.loading.autoHide(2000);
        if (this.plt.is('ios')) {
            this.iab.create(this.config.packgeName.toString(), "_system");
        }
        else if (this.plt.is('android')) {
            this.appVersion.getPackageName().then(function (val) {
                _this.iab.create("https://play.google.com/store/apps/details?id=" + val, "_system");
            });
        }
    };
    SettingsPage.prototype.share = function () {
        var _this = this;
        this.loading.autoHide(2000);
        if (this.plt.is('ios')) {
            this.socialSharing.share(this.config.packgeName.toString(), this.config.appName, this.config.packgeName.toString(), this.config.packgeName.toString()).then(function () {
            }).catch(function () {
            });
        }
        else if (this.plt.is('android')) {
            this.appVersion.getPackageName().then(function (val) {
                _this.socialSharing.share(_this.config.appName, _this.config.appName, "", "https://play.google.com/store/apps/details?id=" + val).then(function () {
                }).catch(function () {
                });
            });
        }
    };
    SettingsPage.prototype.showAd = function () {
        this.loading.autoHide(2000);
        this.events.publish('showAd');
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-settings',template:/*ion-inline-start:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/settings/settings.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title>\n      {{\'Settings\'| translate }}\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="openSearch()">\n        <ion-icon name="search"></ion-icon>\n      </button>\n      <button ion-button icon-only class="cart-button" (click)="openCart()">\n        <ion-icon name="cart">\n          <ion-badge color="secondary">{{shared.cartquantity}}</ion-badge>\n        </ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="page-settings">\n\n  <ion-list class="list-avatar" padding>\n    <ion-item text-center *ngIf="shared.customerData.customers_id==null" (click)="openLoginPage()">\n      <ion-avatar>\n        <ion-icon name="contact"></ion-icon>\n      </ion-avatar>\n      <h2>{{ \'Login & Register\' | translate }}</h2>\n      <p>{{ \'Please login or create an account for free\' | translate }}</p>\n    </ion-item>\n\n    <ion-item text-center *ngIf="shared.customerData.customers_id!=null">\n      <ion-avatar>\n        <img src="{{config.url+shared.customerData.customers_picture}}">\n      </ion-avatar>\n      <h2>{{shared.customerData.customers_firstname +"&nbsp;"+shared.customerData.customers_lastname}}</h2>\n      <p>{{shared.customerData.customers_email_address}}</p>\n      <button ion-button color="light" (click)="openPage(\'myAccount\')">\n        {{\'Edit Profile\' | translate }}\n      </button>\n    </ion-item>\n  </ion-list>\n\n  <ion-list padding>\n    <ion-item>\n      <ion-label>{{"Turn on/off Local Notifications"|translate}}</ion-label>\n      <ion-toggle [(ngModel)]="setting.localNotification" (ionChange)="turnOnOffNotification()"></ion-toggle>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>{{"Turn on/off Notifications"|translate}}</ion-label>\n      <ion-toggle [(ngModel)]="setting.notification" (ionChange)="onOffPushNotification()"></ion-toggle>\n    </ion-item>\n\n    <!-- <ion-item>\n      <ion-label>{{"Show/Hide Add to cart button"|translate}}</ion-label> \n      <ion-toggle [(ngModel)]="setting.cartButton" (ionChange)="hideShowCartButton()"></ion-toggle>\n    </ion-item>\n    <ion-item>\n      <ion-label>{{"Show Footer Menu"|translate}}</ion-label>\n      <ion-toggle [(ngModel)]="setting.footer" (ionChange)="hideShowFooterMenu()"></ion-toggle>\n    </ion-item> -->\n\n  </ion-list>\n\n\n  <ion-list padding>\n    <button ion-item (click)="showModal(\'language\')">\n      {{"Change Language"|translate}}\n      <ion-icon showWhen="android" name="globe" item-end></ion-icon>\n    </button>\n\n    <button ion-item (click)="openSite()">\n      {{"Official Website"|translate}}\n      <ion-icon showWhen="android" name="arrow-forward" item-end></ion-icon>\n    </button>\n    <button ion-item (click)="showModal(\'privacyPolicy\')">\n      {{"Privacy Policy"|translate}}\n      <ion-icon showWhen="android" name="arrow-forward" item-end></ion-icon>\n\n    </button>\n    <button ion-item (click)="showModal(\'refundPolicy\')">\n      {{"Refund Policy"|translate}}\n      <ion-icon showWhen="android" name="arrow-forward" item-end></ion-icon>\n\n    </button>\n    <button ion-item (click)="showModal(\'termServices\')">\n      {{"Term and Services"|translate}}\n      <ion-icon showWhen="android" name="arrow-forward" item-end></ion-icon>\n    </button>\n    <button ion-item (click)="rateUs()">\n      {{"Rate Us"|translate}}\n      <ion-icon showWhen="android" name="star-half" item-end></ion-icon>\n    </button>\n    <button ion-item (click)="share()">\n      {{"Share"|translate}}\n      <ion-icon showWhen="android" name="share" item-end></ion-icon>\n    </button>\n    <button ion-item *ngIf="config.admob == 1" (click)="showAd()">\n      {{"Show Interstitial Ad"|translate}}\n      <ion-icon showWhen="android" name="easel" item-end></ion-icon>\n    </button>\n  </ion-list>\n  <ion-list *ngIf="shared.customerData.customers_id!=null" padding>\n    <button ion-button block color="secondary" (click)="logOut()">\n      {{\'Log Out\' | translate }}\n    </button>\n  </ion-list>\n</ion-content>\n\n<ion-footer *ngIf="config.footerShowHide==\'1\'">\n  <footer></footer>\n</ion-footer>'/*ion-inline-end:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_10__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_local_notifications__["a" /* LocalNotifications */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_11__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_18__ionic_native_app_version__["a" /* AppVersion */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Categories2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sub_categories2_sub_categories2__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_animations__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cart_cart__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_search__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/








var Categories2Page = (function () {
    function Categories2Page(navCtrl, shared, config) {
        this.navCtrl = navCtrl;
        this.shared = shared;
        this.config = config;
    }
    Categories2Page.prototype.openSubCategories = function (parent) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__sub_categories2_sub_categories2__["a" /* SubCategories2Page */], { 'parent': parent });
    };
    Categories2Page.prototype.openCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__cart_cart__["a" /* CartPage */]);
    };
    Categories2Page.prototype.openSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__search_search__["a" /* SearchPage */]);
    };
    Categories2Page.prototype.ionViewWillEnter = function () {
        if (this.config.admob == 1)
            this.shared.showAd();
    };
    Categories2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-categories2',
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["j" /* trigger */])('animate', [
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["i" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('500ms', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* style */])({ opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["i" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* style */])({ opacity: 1 }),
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('700ms', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* style */])({ opacity: 0 }))
                    ])
                ])
            ],template:/*ion-inline-start:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/categories2/categories2.html"*/'<ion-header>\n    \n      <ion-navbar>\n        <button ion-button icon-only menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    \n        <ion-title>\n          {{\'Categories\'| translate }}\n        </ion-title>\n    \n        <ion-buttons end>\n          <button ion-button icon-only (click)="openSearch()">\n            <ion-icon name="search"></ion-icon>\n          </button>\n          <button ion-button icon-only class="cart-button" (click)="openCart()">\n            <ion-icon name="cart">\n              <ion-badge color="secondary">{{shared.cartquantity}}</ion-badge>\n            </ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-navbar>\n    \n    </ion-header>\n\n\n<ion-content class="page-categories2">\n\n\n\n  <ion-list>\n    <ion-item *ngFor="let c of shared.categories" (click)="openSubCategories(c.id)" class="animated flipInX">\n      <ion-icon item-start>\n        <img src="{{config.url+c.icon}}">\n      </ion-icon>\n      <h2>{{c.name}}<br><small>{{c.total_products}} {{\'Products\'| translate }} </small></h2>\n    </ion-item>\n  </ion-list>\n\n\n</ion-content>\n<ion-footer *ngIf="config.footerShowHide==\'1\'">\n  <footer ></footer>\n</ion-footer>'/*ion-inline-end:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/categories2/categories2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */]])
    ], Categories2Page);
    return Categories2Page;
}());

//# sourceMappingURL=categories2.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Categories4Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sub_categories4_sub_categories4__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_animations__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cart_cart__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_search__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/








var Categories4Page = (function () {
    function Categories4Page(navCtrl, shared, config) {
        this.navCtrl = navCtrl;
        this.shared = shared;
        this.config = config;
    }
    Categories4Page.prototype.openSubCategories = function (parent) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__sub_categories4_sub_categories4__["a" /* SubCategories4Page */], { 'parent': parent });
    };
    Categories4Page.prototype.openCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__cart_cart__["a" /* CartPage */]);
    };
    Categories4Page.prototype.openSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__search_search__["a" /* SearchPage */]);
    };
    Categories4Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-categories4',
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["j" /* trigger */])('animate', [
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["i" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('500ms', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* style */])({ opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["i" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* style */])({ opacity: 1 }),
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('700ms', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* style */])({ opacity: 0 }))
                    ])
                ])
            ],template:/*ion-inline-start:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/categories4/categories4.html"*/'<ion-header>\n    \n      <ion-navbar>\n        <button ion-button icon-only menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    \n        <ion-title>\n          {{\'Categories\'| translate }}\n        </ion-title>\n    \n        <ion-buttons end>\n          <button ion-button icon-only (click)="openSearch()">\n            <ion-icon name="search"></ion-icon>\n          </button>\n          <button ion-button icon-only class="cart-button" (click)="openCart()">\n            <ion-icon name="cart">\n              <ion-badge color="secondary">{{shared.cartquantity}}</ion-badge>\n            </ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-navbar>\n    \n    </ion-header>\n  \n  <ion-content class="page-categories4">\n      <ion-grid>\n          <ion-row>\n            <ion-col col-6  *ngFor="let c of shared.categories" (click)="openSubCategories(c.id)" class="animated flipInX">\n                <ion-card>\n                  <img src="{{config.url+c.icon}}"/>\n                  <div class="categories-title">{{c.name}}</div>\n                  <div class="categories-subtitle">{{c.total_products}} {{\'Products\'| translate }} </div>\n                </ion-card>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n\n    \n  </ion-content>\n  <ion-footer *ngIf="config.footerShowHide==\'1\'">\n    <footer ></footer>\n  </ion-footer>'/*ion-inline-end:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/categories4/categories4.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */]])
    ], Categories4Page);
    return Categories4Page;
}());

//# sourceMappingURL=categories4.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Categories5Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__products_products__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_animations__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cart_cart__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_search__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/








var Categories5Page = (function () {
    function Categories5Page(navCtrl, shared, config) {
        this.navCtrl = navCtrl;
        this.shared = shared;
        this.config = config;
    }
    Categories5Page.prototype.openProducts = function (id, name) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__products_products__["a" /* ProductsPage */], { id: id, name: name, sortOrder: 'newest' });
    };
    Categories5Page.prototype.openCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__cart_cart__["a" /* CartPage */]);
    };
    Categories5Page.prototype.openSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__search_search__["a" /* SearchPage */]);
    };
    Categories5Page.prototype.ionViewWillEnter = function () {
        if (this.config.admob == 1)
            this.shared.showAd();
    };
    Categories5Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-categories5',
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["j" /* trigger */])('animate', [
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["i" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('500ms', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* style */])({ opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["i" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* style */])({ opacity: 1 }),
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('700ms', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* style */])({ opacity: 0 }))
                    ])
                ])
            ],template:/*ion-inline-start:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/categories5/categories5.html"*/'<ion-header>\n    \n      <ion-navbar>\n        <button ion-button icon-only menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    \n        <ion-title>\n          {{\'Categories\'| translate }}\n        </ion-title>\n    \n        <ion-buttons end>\n          <button ion-button icon-only (click)="openSearch()">\n            <ion-icon name="search"></ion-icon>\n          </button>\n          <button ion-button icon-only class="cart-button" (click)="openCart()">\n            <ion-icon name="cart">\n              <ion-badge color="secondary">{{shared.cartquantity}}</ion-badge>\n            </ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-navbar>\n    \n    </ion-header>\n  \n  <ion-content class="page-categories5">\n\n\n    <ion-list *ngFor="let c of shared.categories" class="animated fadeIn">\n        <ion-list-header>\n          {{c.name}}\n        </ion-list-header>\n        <div *ngFor="let s of shared.subCategories">\n          <ion-item *ngIf="c.id==s.parent_id" (click)="openProducts(s.id,s.name)">\n            <h2>{{s.name}}<br><small>{{s.total_products}} {{\'Products\'| translate }}</small></h2>\n            <ion-avatar item-end>\n              <img src="{{config.url+s.image}}">\n            </ion-avatar>\n          </ion-item>\n        </div>\n      </ion-list>\n\n  </ion-content>\n  <ion-footer *ngIf="config.footerShowHide==\'1\'">\n    <footer ></footer>\n  </ion-footer>'/*ion-inline-end:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/categories5/categories5.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */]])
    ], Categories5Page);
    return Categories5Page;
}());

//# sourceMappingURL=categories5.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Categories3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sub_categories3_sub_categories3__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_animations__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cart_cart__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_search__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/








var Categories3Page = (function () {
    function Categories3Page(navCtrl, shared, config) {
        this.navCtrl = navCtrl;
        this.shared = shared;
        this.config = config;
    }
    Categories3Page.prototype.openSubCategories = function (parent) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__sub_categories3_sub_categories3__["a" /* SubCategories3Page */], { 'parent': parent });
    };
    Categories3Page.prototype.openCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__cart_cart__["a" /* CartPage */]);
    };
    Categories3Page.prototype.openSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__search_search__["a" /* SearchPage */]);
    };
    Categories3Page.prototype.ionViewWillEnter = function () {
        if (this.config.admob == 1)
            this.shared.showAd();
    };
    Categories3Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-categories3',
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["j" /* trigger */])('animate', [
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["i" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('500ms', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* style */])({ opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["i" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* style */])({ opacity: 1 }),
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('700ms', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* style */])({ opacity: 0 }))
                    ])
                ])
            ],template:/*ion-inline-start:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/categories3/categories3.html"*/'<ion-header>\n    \n      <ion-navbar>\n        <button ion-button icon-only menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    \n        <ion-title>\n          {{\'Categories\'| translate }}\n        </ion-title>\n    \n        <ion-buttons end>\n          <button ion-button icon-only (click)="openSearch()">\n            <ion-icon name="search"></ion-icon>\n          </button>\n          <button ion-button icon-only class="cart-button" (click)="openCart()">\n            <ion-icon name="cart">\n              <ion-badge color="secondary">{{shared.cartquantity}}</ion-badge>\n            </ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-navbar>\n    \n    </ion-header>\n  \n  \n  <ion-content class="page-categories3">\n      <ion-list>\n          <ion-item *ngFor="let c of shared.categories" (click)="openSubCategories(c.id)" class="animated flipInX">\n            <ion-avatar item-start>\n              <img src="{{config.url+c.image}}">\n            </ion-avatar>\n            <h2>{{c.name}}<br><small>{{c.total_products}} {{\'Products\'| translate }} </small></h2>\n          </ion-item>\n        </ion-list>\n      \n  </ion-content>\n  <ion-footer *ngIf="config.footerShowHide==\'1\'">\n    <footer ></footer>\n  </ion-footer>'/*ion-inline-end:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/categories3/categories3.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */]])
    ], Categories3Page);
    return Categories3Page;
}());

//# sourceMappingURL=categories3.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Categories6Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sub_categories6_sub_categories6__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_animations__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cart_cart__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_search__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/








var Categories6Page = (function () {
    function Categories6Page(navCtrl, shared, config) {
        this.navCtrl = navCtrl;
        this.shared = shared;
        this.config = config;
    }
    Categories6Page.prototype.openSubCategories = function (parent) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__sub_categories6_sub_categories6__["a" /* SubCategories6Page */], { 'parent': parent });
    };
    Categories6Page.prototype.openCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__cart_cart__["a" /* CartPage */]);
    };
    Categories6Page.prototype.openSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__search_search__["a" /* SearchPage */]);
    };
    Categories6Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-categories6',
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["j" /* trigger */])('animate', [
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["i" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('500ms', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* style */])({ opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["i" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* style */])({ opacity: 1 }),
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('700ms', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* style */])({ opacity: 0 }))
                    ])
                ])
            ],template:/*ion-inline-start:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/categories6/categories6.html"*/'<ion-header>\n    \n      <ion-navbar>\n        <button ion-button icon-only menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    \n        <ion-title>\n          {{\'Categories\'| translate }}\n        </ion-title>\n    \n        <ion-buttons end>\n          <button ion-button icon-only (click)="openSearch()">\n            <ion-icon name="search"></ion-icon>\n          </button>\n          <button ion-button icon-only class="cart-button" (click)="openCart()">\n            <ion-icon name="cart">\n              <ion-badge color="secondary">{{shared.cartquantity}}</ion-badge>\n            </ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-navbar>\n    \n    </ion-header>\n\n\n<ion-content class="page-categories6">\n\n  <ion-card *ngFor="let c of shared.categories" (click)="openSubCategories(c.id)" class="animated flipInX">\n    <img src="{{config.url+c.image}}" />\n    <div class="categories-title">{{c.name}}</div>\n    <div class="categories-subtitle">{{c.total_products}} {{\'Products\'| translate }} </div>\n  </ion-card>\n\n</ion-content>\n<ion-footer *ngIf="config.footerShowHide==\'1\'">\n  <footer ></footer>\n</ion-footer>'/*ion-inline-end:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/categories6/categories6.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */]])
    ], Categories6Page);
    return Categories6Page;
}());

//# sourceMappingURL=categories6.js.map

/***/ }),

/***/ 171:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 171;

/***/ }),

/***/ 215:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 215;

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_loading_loading__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__cart_cart__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/








var ProductsPage = (function () {
    function ProductsPage(navCtrl, navParams, config, shared, loading, translate, http, actionSheet) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.config = config;
        this.shared = shared;
        this.loading = loading;
        this.translate = translate;
        this.http = http;
        this.actionSheet = actionSheet;
        this.scrollTopButton = false;
        //@ViewChild(IonRange) priceRange: IonRange;
        this.products = new Array;
        this.selectedTab = '';
        this.categoryId = '';
        this.categoryName = '';
        this.sortOrder = 'newest';
        this.sortArray = ['Newest', 'A - Z', 'Z - A', 'Price : high - low', 'Price : low - high', 'Top Seller', 'Special Products', 'Most Liked'];
        this.page = 0;
        this.applyFilter = false;
        this.filters = [];
        this.selectedFilters = [];
        this.price = { lower: 0, upper: 500 };
        this.maxAmount = 500;
        this.side = "right";
        this.productView = 'grid';
        //============================================================================================  
        // filling filter array for keyword search 
        this.fillFilterArray = function (fValue, fName, keyword) {
            var _this = this;
            if (fValue._value == true) {
                this.selectedFilters.push({ 'name': fName, 'value': keyword });
            }
            else {
                this.selectedFilters.forEach(function (value, index) {
                    if (value.value == keyword) {
                        _this.selectedFilters.splice(index, 1);
                    }
                });
            } //console.log(this.selectedFilters);
        };
        //============================================================================================  
        //getting countries from server
        this.getFilters = function (id) {
            var _this = this;
            var data = {};
            data.categories_id = id;
            data.language_id = this.config.langId;
            this.http.post(this.config.url + 'getFilters', data).map(function (res) { return res.json(); }).subscribe(function (data) {
                //  console.log(data);
                if (data.success == 1)
                    _this.filters = data.filters;
                _this.maxAmount = _this.price.upper = data.maxPrice;
            });
        };
        if (shared.dir == "rtl")
            this.side = "left";
        if (this.navParams.get('id') != undefined)
            this.selectedTab = this.categoryId = this.navParams.get('id');
        if (this.navParams.get('name') != undefined)
            this.categoryName = this.navParams.get('name');
        if (this.navParams.get('sortOrder') != undefined)
            this.sortOrder = this.navParams.get('sortOrder');
        this.getProducts(null);
        this.getFilters(this.categoryId);
    }
    ProductsPage.prototype.getProducts = function (infiniteScroll) {
        var _this = this;
        if (this.page == 0) {
            this.loading.show();
        }
        var data = {};
        if (this.shared.customerData != null)
            data.customers_id = this.shared.customerData.customers_id;
        if (this.applyFilter == true) {
            data.filters = this.selectedFilters;
            data.price = { minPrice: this.price.lower, maxPrice: this.price.upper };
        }
        data.categories_id = this.selectedTab;
        data.page_number = this.page;
        data.type = this.sortOrder;
        data.language_id = this.config.langId;
        this.http.post(this.config.url + 'getAllProducts', data).map(function (res) { return res.json(); }).subscribe(function (data) {
            // console.log(data.product_data.length + "   " + this.page);
            _this.infinite.complete();
            if (_this.page == 0) {
                _this.products = new Array;
                _this.loading.hide();
                _this.scrollToTop();
            }
            if (data.success == 1) {
                _this.page++;
                var prod = data.product_data;
                for (var _i = 0, prod_1 = prod; _i < prod_1.length; _i++) {
                    var value = prod_1[_i];
                    _this.products.push(value);
                }
            }
            if (data.success == 1 && data.product_data.length == 0) {
                _this.infinite.enable(false);
            }
            if (data.success == 0) {
                _this.infinite.enable(false);
            }
        });
    };
    //changing tab
    ProductsPage.prototype.changeTab = function (c) {
        this.applyFilter = false;
        this.infinite.enable(true);
        this.page = 0;
        if (c == '')
            this.selectedTab = c;
        else
            this.selectedTab = c.id;
        this.getProducts(null);
        this.getFilters(this.selectedTab);
    };
    ProductsPage.prototype.applyFilters = function () {
        this.applyFilter = true;
        this.infinite.enable(true);
        this.page = 0;
        this.getProducts(null);
    };
    ProductsPage.prototype.resetFilters = function () {
        this.getFilters(this.selectedTab);
    };
    ProductsPage.prototype.removeFilters = function () {
        this.applyFilter = false;
        this.infinite.enable(true);
        this.page = 0;
        this.getProducts(null);
        this.getFilters(this.selectedTab);
    };
    ProductsPage.prototype.ionViewDidEnter = function () {
        //this.product = this.navParams.get('data');
    };
    ProductsPage.prototype.ngOnChanges = function () {
    };
    ProductsPage.prototype.getSortProducts = function (value) {
        if (value == 'Newest')
            value = 'newest';
        else if (value == 'A - Z')
            value = 'a to z';
        else if (value == 'Z - A')
            value = 'z to a';
        else if (value == 'Price : high - low')
            value = 'high to low';
        else if (value == 'low to high')
            value = 'low to high';
        else if (value == 'Top Seller')
            value = 'top seller';
        else if (value == 'Special Products')
            value = 'special';
        else if (value == 'Most Liked')
            value = 'most liked';
        else
            value = value;
        //console.log(value);
        if (value == this.sortOrder)
            return 0;
        else {
            this.sortOrder = value;
            this.infinite.enable(true);
            this.page = 0;
            this.getProducts(null);
        }
    };
    ProductsPage.prototype.openSortBy = function () {
        var _this = this;
        var buttonArray = [];
        this.translate.get(this.sortArray).subscribe(function (res) {
            var _loop_1 = function (key) {
                buttonArray.push({ text: res[key], handler: function () { _this.getSortProducts(key); } });
            };
            for (var key in res) {
                _loop_1(key);
            }
            buttonArray.push({
                text: 'Cancel',
                role: 'cancel',
                handler: function () {
                    //console.log('Cancel clicked');
                }
            });
            var actionSheet = _this.actionSheet.create({
                buttons: buttonArray
            });
            actionSheet.present();
        });
    };
    ProductsPage.prototype.changeLayout = function () {
        if (this.productView == 'list')
            this.productView = "grid";
        else
            this.productView = "list";
        this.scrollToTop();
    };
    ProductsPage.prototype.scrollToTop = function () {
        this.content.scrollToTop(700);
        this.scrollTopButton = false;
    };
    ProductsPage.prototype.onScroll = function (e) {
        if (e.scrollTop >= 1200)
            this.scrollTopButton = true;
        if (e.scrollTop < 1200)
            this.scrollTopButton = false;
        //else this.scrollTopButton=false;
        //   console.log(e);
    };
    ProductsPage.prototype.openCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__cart_cart__["a" /* CartPage */]);
    };
    ProductsPage.prototype.ionViewDidLoad = function () {
        // console.log("loaded");
        var _this = this;
        try {
            setTimeout(function () {
                var ind = 0;
                _this.shared.subCategories.forEach(function (value, index) {
                    if (_this.selectedTab == value.id) {
                        ind = index;
                    }
                });
                _this.slides.slideTo(ind, 1000, true);
            }, 100);
        }
        catch (error) {
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], ProductsPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Slides */])
    ], ProductsPage.prototype, "slides", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* InfiniteScroll */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* InfiniteScroll */])
    ], ProductsPage.prototype, "infinite", void 0);
    ProductsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-products',template:/*ion-inline-start:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/products/products.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      {{\'Shop\'| translate }}\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only class="cart-button" (click)="openCart()">\n        <ion-icon name="cart">\n          <ion-badge color="secondary">{{shared.cartquantity}}</ion-badge>\n        </ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n  <ion-toolbar class="toolbar-secondary">\n    <ion-slides slidesPerView="auto" dir="{{shared.dir}}">\n      <ion-slide [class.selected]="selectedTab==\'\'" *ngIf="shared.subCategories!=null" (click)="changeTab(\'\')">{{\'All\'|translate}}</ion-slide>\n\n      <ion-slide [class.selected]="selectedTab==c.id" *ngFor="let c of shared.subCategories" (click)="changeTab(c)">\n        {{c.name}}\n      </ion-slide>\n    </ion-slides>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content class="page-products" (ionScroll)="onScroll($event)">\n\n  <ion-grid *ngIf="productView==\'grid\'">\n    <ion-col *ngFor="let p of products" col-6>\n      <product [data]="p" [type]="\'normal\'"></product>\n    </ion-col>\n\n    <ion-col *ngIf="products.length==0" col-12 class="animated fadeIn">\n      <h6 text-center>{{\'No Products Found!\'|translate}}</h6>\n    </ion-col>\n  </ion-grid>\n\n  <ion-list class="list-view" *ngIf="productView==\'list\'">\n    <span *ngFor="let p of products">\n      <product [data]="p" [type]="\'list\'"></product>\n    </span>\n  </ion-list>\n\n\n  <ion-infinite-scroll #infinite (ionInfinite)="getProducts($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n  <ion-fab bottom right *ngIf="scrollTopButton">\n    <button ion-fab (click)="scrollToTop()">\n      <ion-icon name="arrow-round-up"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color="light">\n    <ion-buttons left>\n      <button ion-button solid color="secondary" (click)="openSortBy()">\n        {{sortOrder| translate}}\n      </button>\n    </ion-buttons>\n\n    <ion-buttons right>\n      <button ion-button icon-only (click)="changeLayout()">\n        <ion-icon name="list" [name]="productView==\'grid\'? \'list\' : \'apps\'"></ion-icon>\n      </button>\n      <button ion-button icon-only (click)="removeFilters()" *ngIf="applyFilter==true">\n        <ion-icon name="refresh"></ion-icon>\n      </button>\n      <button ion-button icon-only *ngIf="shared.dir==\'ltr\'" menuToggle="right">\n        <ion-icon name="funnel"></ion-icon>\n      </button>\n      <button ion-button icon-only *ngIf="shared.dir==\'rtl\'" menuToggle="left">\n        <ion-icon name="funnel"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n\n<ion-menu [content]="content" side="{{side}}" id="menu2">\n  <ion-header>\n    <ion-toolbar>\n      <ion-buttons left>\n        <button ion-button icon-only *ngIf="shared.dir==\'ltr\'" menuToggle="right">\n          <ion-icon name="close"></ion-icon>\n        </button>\n        <button ion-button icon-only *ngIf="shared.dir==\'rtl\'" menuToggle="left">\n          <ion-icon name="close"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-title>{{"Filters"|translate}}</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content class="side-menu">\n    <h3 style="margin-bottom:0;">{{\'Price Range\'| translate}}</h3>\n    <ion-item dir="ltr">\n      <ion-range dualKnobs="true" pin="true" snaps="true" [(ngModel)]="price" [min]="0" [max]="maxAmount">\n        <ion-label range-left>{{price.lower}}</ion-label>\n        <ion-label range-right>{{price.upper}}</ion-label>\n      </ion-range>\n    </ion-item>\n\n    <div *ngIf="filters.length>0">\n      <ion-list *ngFor="let filter of filters">\n        <h3>{{filter.option.name}}</h3>\n        <ion-item *ngFor="let options of filter.values">\n          <ion-label>{{options.value}}</ion-label>\n          <ion-checkbox (ionChange)="fillFilterArray($event,filter.option.name,options.value)"></ion-checkbox>\n        </ion-item>\n      </ion-list>\n    </div>\n  </ion-content>\n  <ion-footer>\n    <ion-toolbar color="light">\n      <ion-buttons left>\n        <button ion-button outline color="secondary" menuClose="right" (click)="resetFilters()">\n          {{\'Reset\'| translate}}\n        </button>\n      </ion-buttons>\n      <ion-title></ion-title>\n      <ion-buttons right>\n        <button ion-button solid color="secondary" menuClose="right" (click)="applyFilters()">\n          {{\'Apply\'| translate}}\n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-footer>\n</ion-menu>\n<ion-nav #content></ion-nav>'/*ion-inline-end:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/products/products.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], ProductsPage);
    return ProductsPage;
}());

//# sourceMappingURL=products.js.map

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertProvider = (function () {
    function AlertProvider(alertCtrl, translate) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.okText = "ok";
        this.alertText = "Alert";
        translate.get(this.okText).subscribe(function (res) {
            _this.okText = res;
        });
        translate.get(this.alertText).subscribe(function (res) {
            _this.alertText = res;
        });
    }
    AlertProvider.prototype.show = function (text) {
        var alert = this.alertCtrl.create({
            title: this.alertText,
            subTitle: text,
            buttons: [this.okText]
        });
        alert.present();
    };
    AlertProvider.prototype.showWithTitle = function (text, title) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: [this.okText]
        });
        alert.present();
    };
    AlertProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
    ], AlertProvider);
    return AlertProvider;
}());

//# sourceMappingURL=alert.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_loading_loading__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_config_config__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/





/**
 * Generated class for the ForgotPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForgotPasswordPage = (function () {
    function ForgotPasswordPage(navCtrl, viewCtrl, loading, http, config, navParams) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.loading = loading;
        this.http = http;
        this.config = config;
        this.navParams = navParams;
        this.formData = {
            customers_email_address: '',
        };
        this.errorMessage = '';
    }
    ForgotPasswordPage.prototype.forgetPassword = function () {
        var _this = this;
        this.loading.show();
        this.errorMessage = '';
        this.http.post(this.config.url + 'processForgotPassword', this.formData).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.loading.hide();
            if (data.success == 1) {
                _this.dismiss();
            }
            if (data.success == 0) {
                _this.errorMessage = data.message;
            }
        });
    };
    ForgotPasswordPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ForgotPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-forgot-password',template:/*ion-inline-start:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/forgot-password/forgot-password.html"*/'<!--\n  Generated template for the ForgetPasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button icon-only (click)="dismiss()">\n            <ion-icon name="close"></ion-icon>\n          </button>\n    </ion-buttons>\n    <ion-title>{{\'Forgot Password\'|translate}}</ion-title>\n  </ion-navbar>\n\n\n</ion-header>\n\n\n<ion-content class="page-forgot-password" padding>\n  <ion-row class="grid-t">\n    <ion-col>\n      <div class="logo">\n        <img class="image" src="assets/icons_stripe.svg"/>\n      </div>\n    </ion-col>\n  </ion-row>\n\n  <form #loginForm="ngForm" class="form" (ngSubmit)="forgetPassword()">\n    <ion-row class="grid-b">\n      <ion-col>\n        <ion-list>\n          <ion-item>\n            <ion-input type="email" email placeholder="{{\'Email\'|translate}}" name="customers_email_address" [(ngModel)]="formData.customers_email_address"\n              required></ion-input>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n      <ion-col col-12>\n          <label *ngIf="errorMessage!=\'\'">\n            <span>{{errorMessage}}</span>\n          </label>\n        </ion-col>\n    </ion-row>\n    \n    <ion-row>\n      <ion-col>\n        <button ion-button block color="secondary" type="submit" [disabled]="!loginForm.form.valid">{{\'Send\'|translate}}</button>\n      </ion-col>\n    </ion-row>\n  </form>\n</ion-content>'/*ion-inline-end:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/forgot-password/forgot-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], ForgotPasswordPage);
    return ForgotPasswordPage;
}());

//# sourceMappingURL=forgot-password.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShippingAddressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__select_country_select_country__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__select_zones_select_zones__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__billing_address_billing_address__ = __webpack_require__(273);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/









var ShippingAddressPage = (function () {
    function ShippingAddressPage(navCtrl, navParams, config, http, shared, modalCtrl, loading) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.config = config;
        this.http = http;
        this.shared = shared;
        this.modalCtrl = modalCtrl;
        this.loading = loading;
        this.loading.show();
        var data = {};
        data.customers_id = this.shared.customerData.customers_id;
        this.http.post(this.config.url + 'getAllAddress', data).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.loading.hide();
            if (data.success == 1) {
                var allShippingAddress = data.data;
                for (var _i = 0, allShippingAddress_1 = allShippingAddress; _i < allShippingAddress_1.length; _i++) {
                    var value = allShippingAddress_1[_i];
                    if (value.default_address != null || allShippingAddress.length == 1) {
                        _this.shared.orderDetails.tax_zone_id = value.zone_id;
                        _this.shared.orderDetails.delivery_firstname = value.firstname;
                        _this.shared.orderDetails.delivery_lastname = value.lastname;
                        _this.shared.orderDetails.delivery_state = value.state;
                        _this.shared.orderDetails.delivery_city = value.city;
                        _this.shared.orderDetails.delivery_postcode = value.postcode;
                        _this.shared.orderDetails.delivery_zone = value.zone_name;
                        _this.shared.orderDetails.delivery_country = value.country_name;
                        _this.shared.orderDetails.delivery_country_id = value.countries_id;
                        _this.shared.orderDetails.delivery_street_address = value.street;
                        //this.shared.orderDetails.delivery_telephone = $rootScope.customerData.customers_telephone;
                        // if ($rootScope.zones.length == 0)
                    }
                }
            }
            if (data.success == 0) { }
        });
    }
    ShippingAddressPage.prototype.submit = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__billing_address_billing_address__["a" /* BillingAddressPage */]);
    };
    ShippingAddressPage.prototype.selectCountryPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__select_country_select_country__["a" /* SelectCountryPage */], { page: 'shipping' });
        modal.present();
    };
    ShippingAddressPage.prototype.selectZonePage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__select_zones_select_zones__["a" /* SelectZonesPage */], { page: 'shipping', id: this.shared.orderDetails.delivery_country_id });
        modal.present();
    };
    ShippingAddressPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-shipping-address',template:/*ion-inline-start:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/shipping-address/shipping-address.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      {{\'Shipping Address\'| translate }}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form #loginForm="ngForm">\n    <ion-row>\n      <ion-col col-12>\n        <ion-list>\n          <ion-item>\n            <ion-input type="text" placeholder="{{\'First Name\'|translate}}" name="delivery_firstname" [(ngModel)]="shared.orderDetails.delivery_firstname"\n              required></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-input type="text" placeholder="{{\'Last Name\'|translate}}" name="delivery_lastname" [(ngModel)]="shared.orderDetails.delivery_lastname"\n              required></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input type="text" placeholder="{{\'Address\'|translate}}" name="delivery_street_address" [(ngModel)]="shared.orderDetails.delivery_street_address"\n              required></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input type="text" placeholder="{{\'Country\'|translate}}" name="delivery_country" (tap)="selectCountryPage()" [readonly]="true"\n              [(ngModel)]="shared.orderDetails.delivery_country" required></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input type="text" placeholder="{{\'Zone\'|translate}}" required name="delivery_zone" (tap)="selectZonePage()" [readonly]="true"\n              [(ngModel)]="shared.orderDetails.delivery_zone"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input type="text" placeholder="{{\'City\'|translate}}" name="delivery_city" [(ngModel)]="shared.orderDetails.delivery_city"\n              required></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input type="text" placeholder="{{\'Postcode\'|translate}}" name="delivery_postcode" [(ngModel)]="shared.orderDetails.delivery_postcode"\n              required></ion-input>\n          </ion-item>\n\n        </ion-list>\n      </ion-col>\n      <ion-col col-12>\n        <label *ngIf="errorMessage!=\'\'">\n          <span>{{errorMessage}}</span>\n        </label>\n      </ion-col>\n    </ion-row>\n  </form>\n</ion-content>\n<ion-footer>\n  <button ion-button block color="secondary" (click)="submit()" [disabled]="!loginForm.form.valid">{{\'Next\'|translate}}</button>\n</ion-footer>'/*ion-inline-end:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/shipping-address/shipping-address.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_5__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__["a" /* LoadingProvider */]])
    ], ShippingAddressPage);
    return ShippingAddressPage;
}());

//# sourceMappingURL=shipping-address.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillingAddressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__select_country_select_country__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__select_zones_select_zones__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shipping_method_shipping_method__ = __webpack_require__(274);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/






var BillingAddressPage = (function () {
    function BillingAddressPage(navParams, 
        // public config: ConfigProvider,
        //public http: Http,
        shared, modalCtrl, navCtrl) {
        this.navParams = navParams;
        this.shared = shared;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.defaultAddress = true;
        this.setAddress(true);
    }
    BillingAddressPage.prototype.setAddress = function (value) {
        if (value == true) {
            this.shared.orderDetails.billing_firstname = this.shared.orderDetails.delivery_firstname;
            this.shared.orderDetails.billing_lastname = this.shared.orderDetails.delivery_lastname;
            this.shared.orderDetails.billing_state = this.shared.orderDetails.delivery_state;
            this.shared.orderDetails.billing_city = this.shared.orderDetails.delivery_city;
            this.shared.orderDetails.billing_postcode = this.shared.orderDetails.delivery_postcode;
            this.shared.orderDetails.billing_zone = this.shared.orderDetails.delivery_zone;
            this.shared.orderDetails.billing_country = this.shared.orderDetails.delivery_country;
            this.shared.orderDetails.billing_country_id = this.shared.orderDetails.delivery_country_id;
            this.shared.orderDetails.billing_street_address = this.shared.orderDetails.delivery_street_address;
        }
        else {
            this.shared.orderDetails.billing_firstname = '';
            this.shared.orderDetails.billing_lastname = '';
            this.shared.orderDetails.billing_state = '';
            this.shared.orderDetails.billing_city = '';
            this.shared.orderDetails.billing_postcode = '';
            this.shared.orderDetails.billing_zone = '';
            this.shared.orderDetails.billing_country = '';
            this.shared.orderDetails.billing_country_id = '';
            this.shared.orderDetails.billing_street_address = '';
        }
    };
    BillingAddressPage.prototype.submit = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__shipping_method_shipping_method__["a" /* ShippingMethodPage */]);
    };
    BillingAddressPage.prototype.selectCountryPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__select_country_select_country__["a" /* SelectCountryPage */], { page: 'billing' });
        modal.present();
    };
    BillingAddressPage.prototype.selectZonePage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__select_zones_select_zones__["a" /* SelectZonesPage */], { page: 'billing', id: this.shared.orderDetails.billing_country_id });
        modal.present();
    };
    BillingAddressPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-billing-address',template:/*ion-inline-start:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/billing-address/billing-address.html"*/'\n<ion-header>\n    <ion-navbar>\n      <ion-title>\n        {{\'Billing Address\'| translate }}\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n<ion-content padding>\n  <form #loginForm="ngForm">\n    <ion-row>\n      <ion-col col-12>\n        <ion-list>\n          <ion-item>\n            <ion-input type="text" placeholder="{{\'First Name\'|translate}}" name="billing_firstname" [(ngModel)]="shared.orderDetails.billing_firstname"\n              required></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-input type="text" placeholder="{{\'Last Name\'|translate}}" name="billing_lastname" [(ngModel)]="shared.orderDetails.billing_lastname"\n              required></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input type="text" placeholder="{{\'Address\'|translate}}" name="billing_street_address" [(ngModel)]="shared.orderDetails.billing_street_address"\n              required></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input type="text" placeholder="{{\'Country\'|translate}}" name="billing_country" (tap)="selectCountryPage()" [readonly]="true"\n              [(ngModel)]="shared.orderDetails.billing_country" required></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input type="text" placeholder="{{\'Zone\'|translate}}" required name="billing_zone" (tap)="selectZonePage()" [readonly]="true"\n              [(ngModel)]="shared.orderDetails.billing_zone"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input type="text" placeholder="{{\'City\'|translate}}" name="billing_city" [(ngModel)]="shared.orderDetails.billing_city"\n              required></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input type="text" placeholder="{{\'Postcode\'|translate}}" name="billing_postcode" [(ngModel)]="shared.orderDetails.billing_postcode"\n              required></ion-input>\n          </ion-item>\n\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </form>\n  <ion-item>\n    <ion-label>{{\'Same as Shipping Address\'|translate}}</ion-label>\n    <ion-checkbox [(ngModel)]="defaultAddress" (ionChange)="setAddress(defaultAddress)"></ion-checkbox>\n  </ion-item>\n</ion-content>\n\n<ion-footer>\n  <button ion-button block color="secondary" (click)="submit()" [disabled]="!loginForm.form.valid">{{\'Next\'|translate}}</button>\n</ion-footer>'/*ion-inline-end:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/billing-address/billing-address.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
    ], BillingAddressPage);
    return BillingAddressPage;
}());

//# sourceMappingURL=billing-address.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShippingMethodPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_loading_loading__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__order_order__ = __webpack_require__(275);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/







var ShippingMethodPage = (function () {
    function ShippingMethodPage(navCtrl, navParams, shared, http, config, loading) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.shared = shared;
        this.http = http;
        this.config = config;
        this.loading = loading;
        this.shippingMethod = new Array;
        this.selectedMethod = true;
        //================================================================================
        //calcualting products total weight
        this.calculateWeight = function () {
            var pWeight = 0;
            var totalWeight = 0;
            for (var _i = 0, _a = this.shared.cartProducts; _i < _a.length; _i++) {
                var value = _a[_i];
                pWeight = parseFloat(value.weight);
                if (value.unit == 'kg') {
                    pWeight = parseFloat(value.weight) * 1000;
                }
                //  else {
                totalWeight = totalWeight + pWeight;
                //   }
                //  console.log(totalWeight);
            }
            return totalWeight;
        };
        this.loading.show();
        var data = {};
        data.tax_zone_id = this.shared.orderDetails.tax_zone_id;
        // data.shipping_method = this.shared.orderDetails.shipping_method;
        // data.shipping_method = 'upsShipping';
        // data.shipping_method_code = this.shared.orderDetails.shipping_method_code;
        data.state = this.shared.orderDetails.delivery_state;
        data.city = this.shared.orderDetails.delivery_city;
        data.country_id = this.shared.orderDetails.delivery_country_id;
        data.postcode = this.shared.orderDetails.delivery_postcode;
        data.zone = this.shared.orderDetails.delivery_zone;
        data.street_address = this.shared.orderDetails.delivery_street_address;
        data.products_weight = this.calculateWeight();
        data.products_weight_unit = 'g';
        data.products = this.shared.cartProducts;
        data.language_id = config.langId;
        this.http.post(this.config.url + 'getRate', data).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.loading.hide();
            if (data.success == 1) {
                var m = data.data.shippingMethods;
                _this.shippingMethod = Object.keys(m).map(function (key) { return m[key]; });
                _this.shared.orderDetails.total_tax = data.data.tax;
            }
        });
    }
    ShippingMethodPage.prototype.setMethod = function (data) {
        this.selectedMethod = false;
        this.shared.orderDetails.shipping_cost = data.rate;
        this.shared.orderDetails.shipping_method = data.name + '(' + data.shipping_method + ')';
        // console.log(this.shared.orderDetails);
    };
    ShippingMethodPage.prototype.openOrderPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__order_order__["a" /* OrderPage */]);
    };
    ShippingMethodPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-shipping-method',template:/*ion-inline-start:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/shipping-method/shipping-method.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      {{\'Shipping Method\'| translate }}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-row radio-group>\n    <ion-col *ngFor="let m of shippingMethod" col-12>\n        <ion-list  *ngIf="m.services.length!=0">\n            \n              <ion-list-header >\n                <h2>{{m.name}}</h2>\n              </ion-list-header>\n        \n              <ion-item *ngFor="let s of m.services" >\n                \n                <ion-label>{{s.name+\' ---- \'+s.rate+\' \'+s.currencyCode}}</ion-label>\n                <ion-radio [value]=[s] (ionSelect)="setMethod(s)"></ion-radio>\n              </ion-item>\n            \n          </ion-list>\n    </ion-col>\n  </ion-row>\n</ion-content>\n<ion-footer>\n  <button ion-button block color="secondary" (click)="openOrderPage()" [disabled]="selectedMethod">{{\'Next\'|translate}}</button>\n</ion-footer>'/*ion-inline-end:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/shipping-method/shipping-method.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_loading_loading__["a" /* LoadingProvider */]])
    ], ShippingMethodPage);
    return ShippingMethodPage;
}());

//# sourceMappingURL=shipping-method.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_loading_loading__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_alert_alert__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__thank_you_thank_you__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_stripe__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_coupon_coupon__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_paypal__ = __webpack_require__(280);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/












var OrderPage = (function () {
    function OrderPage(navCtrl, navParams, http, config, shared, loading, alert, couponProvider, payPal, translate, actionSheetCtrl, stripe) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.config = config;
        this.shared = shared;
        this.loading = loading;
        this.alert = alert;
        this.couponProvider = couponProvider;
        this.payPal = payPal;
        this.translate = translate;
        this.actionSheetCtrl = actionSheetCtrl;
        this.stripe = stripe;
        this.orderDetail = {}; //include shipping address, billing address,  shipping methods.
        this.products = [];
        this.couponArray = [];
        this.couponApplied = 0;
        this.tokenFromServer = null;
        this.discount = 0;
        this.productsTotal = 0;
        this.totalAmountWithDisocunt = 0;
        this.nonce = '';
        this.stripeCard = {
            number: '',
            expMonth: 1,
            expYear: 2020,
            cvc: ''
        };
        this.paymentMethods = [];
        this.paypalClientId = "";
        this.paypalEnviroment = "";
        //============================================================================================  
        //placing order
        this.addOrder = function (nonce) {
            var _this = this;
            this.loading.autoHide(5000);
            this.orderDetail.customers_id = this.shared.customerData.customers_id;
            this.orderDetail.customers_name = this.shared.orderDetails.delivery_firstname + " " + this.shared.orderDetails.delivery_lastname;
            this.orderDetail.delivery_name = this.shared.orderDetails.billing_firstname + " " + this.shared.orderDetails.billing_lastname;
            this.orderDetail.customers_email_address = this.shared.customerData.customers_email_address;
            this.orderDetail.customers_telephone = this.shared.customerData.customers_telephone;
            this.orderDetail.delivery_suburb = this.shared.orderDetails.delivery_state;
            this.orderDetail.customers_suburb = this.shared.orderDetails.customers_state;
            this.orderDetail.customers_address_format_id = '1';
            this.orderDetail.delivery_address_format_id = '1';
            this.orderDetail.products = this.products;
            this.orderDetail.is_coupon_applied = this.couponApplied;
            this.orderDetail.coupons = this.couponArray;
            this.orderDetail.coupon_amount = this.discount;
            this.orderDetail.totalPrice = this.totalAmountWithDisocunt;
            this.orderDetail.nonce = nonce;
            this.orderDetail.language_id = this.config.langId;
            var data = this.orderDetail;
            this.http.post(this.config.url + 'addToOrder', data).map(function (res) { return res.json(); }).subscribe(function (data) {
                //this.loading.hide();
                if (data.success == 1) {
                    _this.shared.emptyCart();
                    _this.products = [];
                    _this.orderDetail = {};
                    _this.shared.orderDetails = {};
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__thank_you_thank_you__["a" /* ThankYouPage */]);
                }
                if (data.success == 0) {
                    _this.alert.show(data.message);
                }
            }, function (err) {
                _this.translate.get("Server Error").subscribe(function (res) {
                    _this.alert.show(res + " " + err.status);
                });
            });
        };
        //============================================================================================  
        //CAlculate Discount total
        this.calculateDiscount = function () {
            var subTotal = 0;
            var total = 0;
            for (var _i = 0, _a = this.products; _i < _a.length; _i++) {
                var value = _a[_i];
                subTotal += parseFloat(value.subtotal);
                total += value.total;
            }
            this.productsTotal = subTotal;
            this.discount = (subTotal - total);
        };
        //============================================================================================  
        //CAlculate all total
        this.calculateTotal = function () {
            var a = 0;
            for (var _i = 0, _a = this.products; _i < _a.length; _i++) {
                var value = _a[_i];
                // console.log(value);
                var subtotal = parseFloat(value.total);
                a = a + subtotal;
            }
            var b = parseFloat(this.orderDetail.total_tax.toString());
            var c = parseFloat(this.orderDetail.shipping_cost.toString());
            this.totalAmountWithDisocunt = parseFloat((parseFloat(a.toString()) + b + c).toString());
            // console.log(" all total " + $scope.totalAmountWithDisocunt);
            // console.log("shipping_tax " + $scope.orderDetail.shipping_tax);
            // console.log(" shipping_cost " + $scope.orderDetail.shipping_cost);
            this.calculateDiscount();
        };
        //============================================================================================  
        //delete Coupon
        this.deleteCoupon = function (code) {
            var _this = this;
            this.couponArray.forEach(function (value, index) {
                if (value.code == code) {
                    _this.couponArray.splice(index, 1);
                    return true;
                }
            });
            this.products = (JSON.parse(JSON.stringify(this.shared.cartProducts)));
            this.orderDetail.shipping_cost = this.shared.orderDetails.shipping_cost;
            this.couponArray.forEach(function (value) {
                //checking for free shipping
                if (value.free_shipping == true) {
                    _this.orderDetail.shippingName = 'free shipping';
                    _this.orderDetail.shippingCost = 0;
                }
                _this.products = _this.couponProvider.apply(value, _this.products);
            });
            this.calculateTotal();
            if (this.couponArray.length == 0) {
                this.couponApplied = 0;
            }
        };
        //========================================================================================
        //============================================================================================   
        //getting getMostLikedProducts from the server
        this.getCoupon = function (code) {
            var _this = this;
            if (code == '' || code == null) {
                this.alert.show('Please enter coupon code!');
                return 0;
            }
            this.loading.show();
            var data = { 'code': code };
            this.http.post(this.config.url + 'getCoupon', data).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.loading.hide();
                if (data.success == 1) {
                    var coupon = data.data[0];
                    // console.log($scope.coupon)
                    _this.applyCouponCart(coupon);
                }
                if (data.success == 0) {
                    _this.alert.show(data.message);
                }
            }, function (error) {
                _this.loading.hide();
                console.log(error);
            });
        };
        //============================================================================================  
        //applying coupon on the cart
        this.applyCouponCart = function (coupon) {
            //checking the coupon is valid or not
            if (this.couponProvider.validateCouponService(coupon, this.products, this.couponArray) == false) {
                return 0;
            }
            else {
                if (coupon.individual_use == 1) {
                    this.products = (JSON.parse(JSON.stringify(this.shared.cartProducts)));
                    this.couponArray = [];
                    this.orderDetail.shipping_cost = this.shared.orderDetails.shipping_cost;
                    console.log('individual_use');
                }
                var v = {};
                v.code = coupon.code;
                v.amount = coupon.amount;
                v.product_ids = coupon.product_ids;
                v.exclude_product_ids = coupon.exclude_product_ids;
                v.product_categories = coupon.product_categories;
                v.excluded_product_categories = coupon.excluded_product_categories;
                v.discount = coupon.amount;
                v.individual_use = coupon.individual_use;
                v.free_shipping = coupon.free_shipping;
                v.discount_type = coupon.discount_type;
                //   v.limit_usage_to_x_items = coupon.limit_usage_to_x_items;
                //  v.usage_limit = coupon.usage_limit;
                // v.used_by = coupon.used_by ;
                // v.usage_limit_per_user = coupon.usage_limit_per_user ;
                // v.exclude_sale_items = coupon.exclude_sale_items;
                this.couponArray.push(v);
            }
            //checking for free shipping
            if (coupon.free_shipping == 1) {
                // $scope.orderDetail.shippingName = 'free shipping';
                this.orderDetail.shipping_cost = 0;
                //  console.log('free_shipping');
            }
            //applying coupon service
            this.products = this.couponProvider.apply(coupon, this.products);
            if (this.couponArray.length != 0) {
                this.couponApplied = 1;
            }
            this.calculateTotal();
        };
        //============================================================================================  
        //getting token from server
        this.getToken = function () {
            var _this = this;
            this.loading.autoHide(2000);
            this.http.get(this.config.url + 'generateBraintreeToken').map(function (res) { return res.json(); }).subscribe(function (data) {
                // this.loading.hide();
                if (data.success == 1) {
                    if (_this.tokenFromServer == null) {
                        _this.tokenFromServer = data.token;
                        _this.braintreePaypal(_this.tokenFromServer);
                        _this.braintreeCreditCard(_this.tokenFromServer);
                    }
                }
                if (data.success == 0) {
                }
            }, function (error) {
                // this.loading.hide();
                if (_this.paymentBraintree) {
                    _this.translate.get("Server Error").subscribe(function (res) {
                        _this.alert.show(res + " " + error.status + " Braintree Token");
                    });
                }
            });
        };
        //================================================================================
        // braintree paypal method
        this.braintreePaypal = function (clientToken) {
            var _this = this;
            this.loading.autoHide(2000);
            var nonce = 0;
            var promise = new Promise(function (resolve, reject) {
                braintree.setup(clientToken, "custom", {
                    paypal: {
                        container: "paypal-container",
                        displayName: "Shop"
                    },
                    onReady: function () {
                        // $(document).find('#braintree-paypal-button').attr('href', 'javascript:void(0)');
                    },
                    onPaymentMethodReceived: function (obj) {
                        //   console.log(obj.nonce);
                        // this.nonce = obj.nonce;
                        nonce = obj.nonce;
                        resolve();
                    }
                });
            });
            promise.then(function (data) {
                // console.log(nonce);
                _this.addOrder(nonce);
            }, function (err) { console.log(err); });
        };
        //================================================================================
        // braintree creditcard method
        this.braintreeCreditCard = function (clientToken) {
            var _this = this;
            // this.loading.autoHide(2000);
            var nonce = 0;
            var promise = new Promise(function (resolve, reject) {
                var braintreeForm = document.querySelector('#braintree-form');
                var braintreeSubmit = document.querySelector('button[id="braintreesubmit"]');
                braintree.client.create({
                    authorization: clientToken
                }, function (clientErr, clientInstance) {
                    if (clientErr) { }
                    braintree.hostedFields.create({
                        client: clientInstance,
                        styles: {},
                        fields: {
                            number: {
                                selector: '#card-number',
                                placeholder: '4111 1111 1111 1111'
                            },
                            cvv: {
                                selector: '#cvv',
                                placeholder: '123'
                            },
                            expirationDate: {
                                selector: '#expiration-date',
                                placeholder: '10/2019'
                            }
                        }
                    }, function (hostedFieldsErr, hostedFieldsInstance) {
                        if (hostedFieldsErr) {
                            // Handle error in Hosted Fields creation
                            //alert("hostedFieldsErr" + hostedFieldsErr);
                            document.getElementById('error-message').innerHTML = "hostedFieldsErr" + hostedFieldsErr;
                            console.log("hostedFieldsErr" + hostedFieldsErr);
                            return;
                        }
                        braintreeSubmit.removeAttribute('disabled');
                        braintreeForm.addEventListener('submit', function (event) {
                            document.getElementById('error-message').innerHTML = null;
                            event.preventDefault();
                            hostedFieldsInstance.tokenize(function (tokenizeErr, payload) {
                                if (tokenizeErr) {
                                    //alert('Error : ' + JSON.stringify(tokenizeErr.message));
                                    // Handle error in Hosted Fields tokenization
                                    document.getElementById('error-message').innerHTML = tokenizeErr.message;
                                    return 0;
                                }
                                // Put `payload.nonce` into the `payment-method-nonce` input, and then
                                // submit the form. Alternatively, you could send the nonce to your server
                                // with AJAX.
                                // document.querySelector('input[name="payment-method-nonce"]').value = payload.nonce;
                                // this.nonce = payload.nonce;
                                // this.addOrder(payload.nonce);
                                nonce = payload.nonce;
                                resolve();
                                //  console.log(payload.nonce);
                            });
                        }, false);
                    });
                });
            });
            promise.then(function (data) {
                _this.addOrder(nonce);
            }, function (err) { console.log(err); });
        };
        // shared.orderDetails.payment_method = 'cash_on_delivery';
    }
    OrderPage.prototype.initializePaymentMethods = function () {
        var _this = this;
        // this.loading.show();
        var data = {};
        data.language_id = this.config.langId;
        this.http.post(this.config.url + 'getPaymentMethods', data).map(function (res) { return res.json(); }).subscribe(function (data) {
            //  this.loading.hide();
            if (data.success == 1) {
                _this.paymentMethods = data.data;
                for (var _i = 0, _a = data.data; _i < _a.length; _i++) {
                    var a = _a[_i];
                    if (a.method == "braintree_card" && a.active == '1') {
                        _this.getToken();
                    }
                    if (a.method == "braintree_paypal" && a.active == '1') {
                        _this.getToken();
                    }
                    if (a.method == "paypal" && a.active == '1') {
                        _this.paypalClientId = a.public_key;
                        if (a.environment == "Test")
                            _this.paypalEnviroment = "PayPalEnvironmentSandbox";
                        else
                            _this.paypalEnviroment = "PayPalEnvironmentProduction";
                    }
                    if (a.method == "stripe" && a.active == '1') {
                        _this.stripe.setPublishableKey(a.public_key);
                    }
                }
            }
        }, function (err) {
            _this.translate.get("getPaymentMethods Server Error").subscribe(function (res) {
                _this.alert.show(res + " " + err.status);
            });
        });
    };
    OrderPage.prototype.stripePayment = function () {
        var _this = this;
        // this.loading.show();
        this.stripe.createCardToken(this.stripeCard)
            .then(function (token) {
            // this.loading.hide();
            //this.nonce = token.id
            _this.addOrder(token.id);
        })
            .catch(function (error) {
            //this.loading.hide();
            _this.alert.show(error);
        });
    };
    OrderPage.prototype.paypalPayment = function () {
        var _this = this;
        this.loading.autoHide(2000);
        this.payPal.init({
            PayPalEnvironmentProduction: this.paypalClientId,
            PayPalEnvironmentSandbox: this.paypalClientId
        }).then(function () {
            // this.loading.hide();
            // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
            _this.payPal.prepareToRender(_this.paypalEnviroment, new __WEBPACK_IMPORTED_MODULE_11__ionic_native_paypal__["b" /* PayPalConfiguration */]({})).then(function () {
                //this.loading.show();
                var payment = new __WEBPACK_IMPORTED_MODULE_11__ionic_native_paypal__["c" /* PayPalPayment */](_this.totalAmountWithDisocunt.toString(), _this.config.paypalCurrencySymbol, 'cart Payment', 'sale');
                _this.payPal.renderSinglePaymentUI(payment).then(function (res) {
                    // Successfully paid
                    //  alert(JSON.stringify(res));
                    //this.nonce = res.response.id;
                    _this.addOrder(res);
                    // Example sandbox response
                    //
                    // {
                    //   "client": {
                    //     "environment": "sandbox",
                    //     "product_name": "PayPal iOS SDK",
                    //     "paypal_sdk_version": "2.16.0",
                    //     "platform": "iOS"
                    //   },
                    //   "response_type": "payment",
                    //   "response": {
                    //     "id": "PAY-1AB23456CD789012EF34GHIJ",
                    //     "state": "approved",
                    //     "create_time": "2016-10-03T13:33:33Z",
                    //     "intent": "sale"
                    //   }
                    // }
                }, function () {
                    console.log('Error or render dialog closed without being successful');
                    _this.alert.show('Error or render dialog closed without being successful');
                });
            }, function () {
                console.log('Error in configuration');
                _this.alert.show('Error in configuration');
            });
        }, function () {
            console.log('Error in configuration');
            _this.alert.show('Error in initialization, maybe PayPal isnt supported or something else');
        });
    };
    OrderPage.prototype.couponslist = function () {
        var _this = this;
        // + '<li>Cart Percentage <span>(cp9989)</a><p>{{"A percentage discount for the entire cart"|translate}}</p></li>'
        //   + '<li>Cart Fixed <span>(cf9999)</span> <p>{{"A fixed total discount for the entire cart"|translate}}</p></li>'
        //   + '<li>Product Fixed <span>(pf8787)</span></a><p>{{"A fixed total discount for selected products only"|translate}}</p></li>'
        //   + '<li>Product Percentage <span>(pp2233)</span><p>{{"A percentage discount for selected products only"|translate}}</p></li>'
        //   + '</ul>';
        // this.translate.get(array).subscribe((res) => { });
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Demo Coupons',
            buttons: [
                {
                    icon: 'arrow-round-forward',
                    text: 'Cart Percentage (cp9989). A percentage discount for selected products only',
                    handler: function () {
                        _this.c = 'cp9989';
                    }
                }, {
                    icon: 'arrow-round-forward',
                    text: 'Product Fixed (pf8787). A fixed total discount for selected products only',
                    handler: function () {
                        _this.c = 'pf8787';
                    }
                },
                {
                    icon: 'arrow-round-forward',
                    text: 'Cart Fixed (cf9999). A fixed total discount for the entire cart',
                    handler: function () {
                        _this.c = 'cf9999';
                    }
                },
                {
                    icon: 'arrow-round-forward',
                    text: 'Product Percentage (pp2233). A percentage discount for selected products only',
                    handler: function () {
                        _this.c = 'pp2233';
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                    }
                }
            ]
        });
        actionSheet.present();
    };
    OrderPage.prototype.scrollToBottom = function () {
        var _this = this;
        setTimeout(function () {
            _this.content.scrollToBottom();
            console.log("botton");
        }, 300);
    };
    OrderPage.prototype.ngOnInit = function () {
        this.orderDetail = (JSON.parse(JSON.stringify(this.shared.orderDetails)));
        this.products = (JSON.parse(JSON.stringify(this.shared.cartProducts)));
        this.calculateTotal();
        this.initializePaymentMethods();
    };
    OrderPage.prototype.openHomePage = function () {
        this.navCtrl.popToRoot();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], OrderPage.prototype, "content", void 0);
    OrderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-order',template:/*ion-inline-start:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/order/order.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>\n      {{\'Order\'| translate }}\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="openHomePage()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="page-order">\n  <ion-card>\n    <ion-card-header>\n      {{\'Shipping Address\'|translate}}\n    </ion-card-header>\n    <ion-card-content>\n      {{orderDetail.delivery_street_address+\', \'+orderDetail.delivery_city+\', \'+orderDetail.delivery_state+\' \'+orderDetail.delivery_postcode+\',\n      \'+orderDetail.delivery_country}}\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      {{\'Billing Address\'|translate}}\n    </ion-card-header>\n    <ion-card-content>\n      {{orderDetail.billing_street_address+\', \'+orderDetail.billing_city+\', \'+orderDetail.billing_state+\' \'+orderDetail.billing_postcode+\',\n      \'+orderDetail.billing_country}}\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      {{\'Shipping Method\'|translate}}\n    </ion-card-header>\n    <ion-card-content>\n      {{orderDetail.shipping_method}}\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card class="order-product">\n    <ion-card-header>\n      {{\'Products\'|translate}}\n    </ion-card-header>\n    <ion-card-content *ngFor="let product of products">\n      <ion-row>\n        <h3>{{product.products_name}}\n          <br>\n          <small>{{product.categories_name}}</small>\n        </h3>\n      </ion-row>\n      <ion-item>\n\n        <ion-thumbnail item-start>\n          <img src="{{config.url+product.image}}">\n        </ion-thumbnail>\n        <ion-row>\n          <ion-col col-6>{{\'Price\' |translate}}&nbsp;:&nbsp;</ion-col>\n          <ion-col col-6>{{product.price| curency}}</ion-col>\n        </ion-row>\n\n        <ion-row *ngFor="let att of product.attributes">\n          <ion-col col-6>{{att.products_options_values+\'&nbsp;\'+att.products_options}}&nbsp;:</ion-col>\n          <ion-col col-6>{{att.price_prefix +\'&nbsp;\'+ att.options_values_price+\'&nbsp;\'+config.curency}}</ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col col-6>\n            <strong>{{\'Sub Total\' |translate}}</strong>&nbsp;:&nbsp;</ion-col>\n          <ion-col col-6>\n            <strong>{{product.total | curency}}</strong>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n\n\n  <ion-card>\n    <ion-card-header>\n      {{\'SubTotal\'|translate}}\n    </ion-card-header>\n    <ion-card-content>\n      <ion-row>\n        <ion-col col-6>\n          {{\'Products Price\'|translate}}\n        </ion-col>\n        <ion-col col-6 text-right>\n          {{productsTotal| curency}}\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6>\n          {{\'Tax\'|translate}}\n        </ion-col>\n        <ion-col col-6 text-right>\n          {{orderDetail.total_tax| curency}}\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6>\n          {{\'Shipping Cost\'|translate}}\n        </ion-col>\n        <ion-col col-6 text-right>\n          {{orderDetail.shipping_cost| curency}}\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf="couponApplied == 1">\n        <ion-col col-6>\n          {{\'Discount\'|translate}}\n        </ion-col>\n        <ion-col col-6 text-right>\n          {{discount| curency}}\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6>\n          <strong>{{\'Total\'|translate}}</strong>\n        </ion-col>\n        <ion-col col-6 text-right>\n          <strong>{{totalAmountWithDisocunt| curency}}</strong>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngFor="let coupon of couponArray">\n    <ion-card-content>\n      <ion-row>\n        <ion-col col-6>\n          {{\'Coupon Code\'|translate}}\n        </ion-col>\n        <ion-col col-6 text-right>\n          {{coupon.code}}\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6>\n          {{\'Coupon Amount\'|translate}}\n        </ion-col>\n        <ion-col col-6 text-right>\n          {{coupon.amount}}\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-12 *ngIf="coupon.discount_type == \'percent\'">\n          {{\'A percentage discount for the entire cart\'|translate}}\n        </ion-col>\n        <ion-col col-12 *ngIf="coupon.discount_type == \'fixed_cart\'">\n          {{\'A fixed total discount for the entire cart\'|translate}}\n        </ion-col>\n        <ion-col col-12 *ngIf="coupon.discount_type == \'fixed_product\'">\n          {{\'A fixed total discount for selected products only\'|translate}}\n        </ion-col>\n        <ion-col col-12 *ngIf="coupon.discount_type == \'percent_product\'">\n          {{\'A percentage discount for selected products only\'|translate}}\n        </ion-col>\n        <ion-col col-12>\n          <button ion-button small color="secondary" (click)="deleteCoupon(coupon.code)">{{\'Remove\'|translate}}</button>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-content>\n      <ion-list>\n        <ion-item>\n          <ion-input type="text" placeholder="{{\'coupon code\'|translate}}" [(ngModel)]="c"></ion-input>\n          <button ion-button clear item-end (click)="getCoupon(c)">{{\'Apply\'|translate}}</button>\n        </ion-item>\n      </ion-list>\n\n    </ion-card-content>\n  </ion-card>\n  <!-- <button ion-button small clear (click)="couponslist()">{{\'Sample coupon codes for testing app\'|translate}}</button> -->\n\n  <ion-card>\n    <ion-card-header>\n      {{\'Order Notes\'|translate}}\n    </ion-card-header>\n    <ion-card-content>\n      <ion-item>\n        <ion-input type="text" placeholder="{{\'Note to the buyer\'|translate}}" name="note" [(ngModel)]="orderDetail.comments"></ion-input>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-content>\n      <ion-list>\n        <ion-item>\n          <ion-label color="dark">{{\'Payment\'|translate}}</ion-label>\n          <ion-select [(ngModel)]="orderDetail.payment_method" (ionChange)=" scrollToBottom()" okText="{{\'ok\'|translate}}" cancelText="{{\'Cancel\'|translate}}">\n            <div *ngFor="let p of paymentMethods">\n              <ion-option *ngIf="p.active==1" [value]="p.method">{{p.name}}</ion-option>\n            </div>\n            <!-- <ion-option value="simplePaypal" *ngIf="paymentPaypal">{{\'Paypal\'|translate}}</ion-option>\n            <ion-option value="paypal" *ngIf="paymentBraintree">{{\'Braintree Paypal\'|translate}}</ion-option>\n            <ion-option value="card_payment" *ngIf="paymentBraintree">{{\'Braintree Card Payment\'|translate}}</ion-option>\n            <ion-option value="stripe" *ngIf="paymentStripe">{{\'Stripe Card Payment\'|translate}}</ion-option>\n            <ion-option value="cash_on_delivery" *ngIf="paymentCod">{{\'Cash on Delivery\'|translate}}</ion-option> -->\n          </ion-select>\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n\n  <div class="braintree-paypal" [class.hidden]="orderDetail.payment_method!=\'braintree_paypal\'">\n    <div id="paypal-container"></div>\n  </div>\n\n  <div class="braintree-card" [class.hidden]="orderDetail.payment_method!=\'braintree_card\'">\n    <form id="braintree-form" class="form" #brainForm="ngForm">\n      <div id="error-message"></div>\n      <label class="hosted-fields--label" for="card-number" translate>{{\'Card Number\'|translate}}</label>\n      <div class="hosted-field form-control" id="card-number" value="4111111111111111"></div>\n\n      <label class="hosted-fields--label" for="cvv" value="123">CVV</label>\n      <div class="hosted-field form-control" id="cvv"></div>\n\n      <label class="hosted-fields--label" for="expiration-date" translate>{{\'Expiration Date\'|translate}}</label>\n      <div class="hosted-field form-control" id="expiration-date" value="10/2019"></div>\n\n      <input type="hidden" name="payment-method-nonce">\n      <button ion-button block color="secondary" type="submit" id="braintreesubmit" disabled> {{\'Continue\'|translate}}</button>\n    </form>\n  </div>\n\n  <div class="stripe-card" *ngIf="orderDetail.payment_method==\'stripe\'">\n    <form #stripeForm="ngForm" (ngSubmit)="stripePayment()">\n      <ion-row>\n        <ion-col>\n          <ion-list>\n\n            <ion-item>\n              <ion-input type="number" max=16 name="number" placeholder="{{\'Number\'|translate}}" [(ngModel)]="stripeCard.number" required></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label>{{\'Expire Month\'|translate}}</ion-label>\n              <ion-select name="expMonth" [(ngModel)]="stripeCard.expMonth" required>\n                <ion-option *ngFor="let n of [1,2,3,4,5,6,7,8,9,10,11,12]" value="{{n}}">{{n}}</ion-option>\n              </ion-select>\n            </ion-item>\n\n            <ion-item>\n              <ion-label>{{\'Expire Year\'|translate}}</ion-label>\n              <ion-select name="expYear" [(ngModel)]="stripeCard.expYear" required>\n                <ion-option *ngFor="let n of [2017,2018,2019,2020,2021,2022,2023,2024,2025,2026,2027,2028,2029,2030,2031,2032,2033]" value="{{n}}">{{n}}</ion-option>\n              </ion-select>\n            </ion-item>\n\n            <ion-item>\n              <ion-input type="number" max=3 name="cvc" placeholder="{{\'CVC\'|translate}}" [(ngModel)]="stripeCard.cvc" required></ion-input>\n            </ion-item>\n\n          </ion-list>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <button ion-button block color="secondary" type="submit" [disabled]="!stripeForm.form.valid">{{\'Continue\'|translate}}</button>\n        </ion-col>\n      </ion-row>\n    </form>\n  </div>\n  <button ion-button block class="button-footer" color="secondary" (click)="paypalPayment()" *ngIf="orderDetail.payment_method==\'paypal\'">{{\'Continue\'|translate}}</button>\n  <button ion-button block class="button-footer" color="secondary" (click)="addOrder()" *ngIf="orderDetail.payment_method==\'cod\'">{{\'Continue\'|translate}}</button>\n</ion-content>'/*ion-inline-end:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/order/order.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_coupon_coupon__["a" /* CouponProvider */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_paypal__["a" /* PayPal */],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_stripe__["a" /* Stripe */]])
    ], OrderPage);
    return OrderPage;
}());

//# sourceMappingURL=order.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThankYouPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__my_orders_my_orders__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cart_cart__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_search__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home2_home2__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home3_home3__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home5_home5__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home4_home4__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_config_config__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/












var ThankYouPage = (function () {
    function ThankYouPage(navCtrl, shared, config, navParams) {
        this.navCtrl = navCtrl;
        this.shared = shared;
        this.config = config;
        this.navParams = navParams;
        this.array = new Array;
        this.array = this.navCtrl.getViews();
    }
    ThankYouPage.prototype.openHome = function () {
        if (this.config.homePage == 1) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
        }
        if (this.config.homePage == 2) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__home2_home2__["a" /* Home2Page */]);
        }
        if (this.config.homePage == 3) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__home3_home3__["a" /* Home3Page */]);
        }
        if (this.config.homePage == 4) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__home4_home4__["a" /* Home4Page */]);
        }
        if (this.config.homePage == 5) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__home5_home5__["a" /* Home5Page */]);
        }
    };
    ThankYouPage.prototype.openOrders = function () { this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__my_orders_my_orders__["a" /* MyOrdersPage */]); };
    ThankYouPage.prototype.ionViewDidLoad = function () {
        // let c = 0;
        // for (let value of this.navCtrl.getViews().reverse()) {
        //   if (c <= 4){ this.navCtrl.removeView(value);console.log(value);}
        //   // if (value.component.name == "OrderPage") { this.navCtrl.removeView(value); }
        //   // if (value.component.name == "ShippingMethodPage") { this.navCtrl.removeView(value); }
        //   // if (value.component.name == "ShippingAddressPage") { this.navCtrl.removeView(value); }
        //   // if (value.component.name == "BillingAddressPage") { this.navCtrl.removeView(value); }
        //   // if (value.component.name == "CartPage") { this.navCtrl.removeView(value); }
        //  // console.log(value);
        //   c++
        // }
    };
    ThankYouPage.prototype.openCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__cart_cart__["a" /* CartPage */]);
    };
    ThankYouPage.prototype.openSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__search_search__["a" /* SearchPage */]);
    };
    ThankYouPage.prototype.ionViewWillEnter = function () {
        if (this.config.admob == 1)
            this.shared.showAd();
    };
    ThankYouPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-thank-you',template:/*ion-inline-start:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/thank-you/thank-you.html"*/'<ion-header>\n  \n    <ion-navbar>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n  \n      <ion-title>\n        {{\'Thank You\'| translate }}\n      </ion-title>\n  \n      <ion-buttons end>\n        <button ion-button icon-only (click)="openSearch()">\n          <ion-icon name="search"></ion-icon>\n        </button>\n        <button ion-button icon-only class="cart-button" (click)="openCart()">\n          <ion-icon name="cart">\n            <ion-badge color="secondary">{{shared.cartquantity}}</ion-badge>\n          </ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  \n  </ion-header>\n\n\n<ion-content class="page-thank-you">\n  <ion-card>\n    <ion-card-content>\n        <ion-icon name="checkmark-circle"></ion-icon>\n        <h3>{{\'Thank You\'| translate }}</h3>\n        <h4>{{\'Thank you for shopping with us.\'| translate }}</h4>\n        <button ion-button block color="primary" (click)="openOrders()">{{\'My Orders\'| translate }}</button>\n        <button ion-button block clear color="primary" (click)="openHome()">{{\'Continue Shopping\'| translate }}</button>\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/thank-you/thank-you.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_11__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], ThankYouPage);
    return ThankYouPage;
}());

//# sourceMappingURL=thank-you.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__product_detail_product_detail__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/








var OrderDetailPage = (function () {
    function OrderDetailPage(navCtrl, config, navParams, http, shared, alert, loading) {
        this.navCtrl = navCtrl;
        this.config = config;
        this.navParams = navParams;
        this.http = http;
        this.shared = shared;
        this.alert = alert;
        this.loading = loading;
        this.order = {};
        this.order = this.navParams.get('data');
        //console.log(this.order);
    }
    ;
    OrderDetailPage.prototype.getSingleProductDetail = function (id) {
        var _this = this;
        this.loading.show();
        var data = {};
        if (this.shared.customerData != null)
            data.customers_id = this.shared.customerData.customers_id;
        else
            data.customers_id = null;
        data.products_id = id;
        data.language_id = this.config.langId;
        this.http.post(this.config.url + 'getAllProducts', data).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.loading.hide();
            if (data.success == 1) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__product_detail_product_detail__["a" /* ProductDetailPage */], { data: data.product_data[0] });
            }
        });
    };
    OrderDetailPage.prototype.ionViewDidLoad = function () {
        this.order = this.navParams.get('data');
    };
    OrderDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-order-detail',template:/*ion-inline-start:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/order-detail/order-detail.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      {{\'Order Details\'| translate }}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="page-order-detail">\n  <ion-card>\n    <ion-card-header>\n      {{\'Shipping Address\'|translate}}\n    </ion-card-header>\n    <ion-card-content>\n      {{order.delivery_street_address+\', \'+order.delivery_city+\', \'+order.delivery_state+\' \'+order.delivery_postcode+\',\n      \'+order.delivery_country}}\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      {{\'Billing Address\'|translate}}\n    </ion-card-header>\n    <ion-card-content>\n      {{order.billing_street_address+\', \'+order.billing_city+\', \'+order.billing_state+\' \'+order.billing_postcode+\',\n      \'+order.billing_country}}\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      {{\'Shipping Method\'|translate}}\n    </ion-card-header>\n    <ion-card-content>\n      {{order.shipping_method}}\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card class="order-product">\n    <ion-card-header>\n      {{\'Products\'|translate}}\n    </ion-card-header>\n    <ion-card-content *ngFor="let product of order.data" (click)="getSingleProductDetail(product.products_id)">\n        <ion-row>\n            <h3>{{product.products_name}}<br><small>{{product.categories_name}}</small></h3>\n        </ion-row>\n      <ion-item>\n          \n          <ion-thumbnail item-start>\n            <img src="{{config.url+product.image}}">\n          </ion-thumbnail>\n          <ion-row>\n              <ion-col col-6>{{\'Price\' |translate}}&nbsp;:&nbsp;</ion-col>\n              <ion-col col-6>{{product.products_price| curency}}</ion-col>\n          </ion-row>\n\n          <ion-row *ngFor="let att of product.attributes">\n              <ion-col col-6>{{att.products_options_values+\'&nbsp;\'+att.products_options}}&nbsp;:</ion-col>\n              <ion-col col-6>{{att.price_prefix +\'&nbsp;\'+ att.options_values_price+\'&nbsp;\'+config.currency}}</ion-col>\n          </ion-row>\n\n          <ion-row>\n              <ion-col col-6>{{\'Quantity\'|translate}}&nbsp;:&nbsp;</ion-col>\n              <ion-col col-6>{{product.products_quantity}}</ion-col>\n            </ion-row>\n          <ion-row>\n            <ion-col col-6><strong>{{\'Total\' |translate}}</strong>&nbsp;:&nbsp;</ion-col>\n            <ion-col col-6><strong>{{product.final_price | curency}}</strong></ion-col>\n          </ion-row>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n\n\n  <ion-card>\n    <ion-card-header>\n        {{\'Price Detail\'|translate}}\n    </ion-card-header>\n    <ion-card-content>\n        <ion-row>\n          <ion-col col-6>\n              {{\'Sub Total\'|translate}}\n          </ion-col>\n          <ion-col col-6 text-right>\n              {{order.order_price-order.shipping_cost | curency }}\n            </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-6>\n              {{\'Shipping\'|translate}}\n          </ion-col>\n          <ion-col col-6 text-right>\n              {{order.shipping_cost | curency }}\n            </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-6>\n              {{\'Total\'|translate}}\n          </ion-col>\n          <ion-col col-6 text-right>\n              {{order.order_price | curency}}\n            </ion-col>\n        </ion-row>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngIf="order.coupons.length!=0">\n    <ion-card-header>\n      {{\'Coupons Applied\'|translate}}\n    </ion-card-header>\n    <ion-card-content>\n      <ion-row>\n        <ion-col col-6>\n          {{\'Coupon Code\'|translate}}\n        </ion-col>\n        <ion-col col-6 text-right>\n          {{\'Coupon Price\'|translate}}\n        </ion-col>\n      </ion-row>\n      <ion-row *ngFor="let c of order.coupons">\n        <ion-col col-6>\n            {{c.code}}\n        </ion-col>\n        <ion-col col-6 text-right>\n            {{c.amount|curency}}\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngIf="order.customer_comments!=\'\'">\n    <ion-card-header>\n      {{\'Order Notes\'|translate}}\n    </ion-card-header>\n    <ion-card-content>\n      {{order.customer_comments}}\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngIf="order.admin_comments!=\'\'">\n    <ion-card-header>\n      {{\'Admin Notes\'|translate}}\n    </ion-card-header>\n    <ion-card-content>\n      {{order.admin_comments}}\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      {{\'Payment Method\'|translate}}\n    </ion-card-header>\n    <ion-card-content>\n      {{order.payment_method}}\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/order-detail/order-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_5__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__["a" /* LoadingProvider */]])
    ], OrderDetailPage);
    return OrderDetailPage;
}());

//# sourceMappingURL=order-detail.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CouponProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alert_alert__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/



var CouponProvider = (function () {
    function CouponProvider(shared, alert) {
        this.shared = shared;
        this.alert = alert;
        // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< All below services are used for coupon >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        //========================================================================================================
        //=============================== service to calculate line items total ==============================
        this.lineItemTotalService = function (lineItems) {
            var total = 0;
            for (var _i = 0, lineItems_1 = lineItems; _i < lineItems_1.length; _i++) {
                var value = lineItems_1[_i];
                // console.log(value);
                var subtotal = parseFloat(value.total);
                total = total + subtotal;
            }
            return total;
        };
        //========================================================================================================
        //=============================== service to calculate line items total ==============================
        this.checkOnSaleService = function (lineItems, coupon) {
            if (coupon.exclude_sale_items == 0 || coupon.exclude_sale_items == '')
                return false;
            var found = false;
            lineItems.some(function (value, index) {
                if (value.on_sale == true)
                    found = true;
            });
            if (found && coupon.discount_type == 'fixed_cart')
                return true;
            else if (found && coupon.discount_type == 'percent')
                return true;
            else
                return false;
        };
        //========================================================================================================
        //=============================== service to calculate line items total ==============================
        this.emailCheckService = function (emailList) {
            if (emailList.length == 0)
                return false;
            var found = false;
            for (var _i = 0, emailList_1 = emailList; _i < emailList_1.length; _i++) {
                var value = emailList_1[_i];
                if (value == this.shared.customerData.customers_email_address) {
                    found = true;
                    return true;
                }
            }
            return found;
        };
        //========================================================================================================
        //=============================== service to calculate line items total ==============================
        this.checkCategoriesService = function (value, coupon) {
            if (coupon.product_categories.length == 0 && coupon.excluded_product_categories.length == 0)
                return true;
            var categoryId = value.categories_id;
            var found = 0;
            for (var _i = 0, _a = coupon.product_categories; _i < _a.length; _i++) {
                var y = _a[_i];
                /// console.log("product_categories x = " + x.id + " y=" + y);
                if (categoryId == y) {
                    found++;
                }
            }
            if (coupon.product_categories.length == 0) {
                found++;
            }
            var found2 = 0;
            //for excluded categries
            for (var _b = 0, _c = coupon.excluded_product_categories; _b < _c.length; _b++) {
                var y = _c[_b];
                // console.log("excluded_product_categories x = " + x.id + " y=" + y);
                if (categoryId == y) {
                    found2++;
                }
            }
            //  console.log('found ' + found + ' found2 ' + found2);
            if (found != 0 && found2 == 0)
                return true;
            else
                return false;
        };
        //========================================================================================================
        //=============================== service to calculate line items total ==============================
        this.couponApplyOnProductService = function (value, coupon) {
            if (coupon.product_ids.length == 0 && coupon.exclude_product_ids.length == 0)
                return true;
            var id = value.products_id;
            var found = 0;
            //checking in allowed products
            for (var _i = 0, _a = coupon.product_ids; _i < _a.length; _i++) {
                var value_1 = _a[_i];
                //  console.log("id = " + id + "vid" + vId + " value =" + value);
                if (id == value_1) {
                    found++;
                    return true;
                }
            }
            if (coupon.product_ids.length == 0) {
                found++;
            }
            var found2 = 0;
            //checking in excluded products
            for (var _b = 0, _c = coupon.exclude_product_ids; _b < _c.length; _b++) {
                var value_2 = _c[_b];
                if (id == value_2) {
                    found2++;
                    return true;
                }
            }
            // console.log('found ' + found + ' found2 ' + found2);
            if (found != 0 && found2 == 0) {
                return true;
            }
            else
                return false;
        };
        //========================================================================================================
        //=============================== service to calculate line items total ==============================
        this.checkAlreadyAppliedService = function (coupon, couponLines) {
            if (couponLines.length == 0)
                return false;
            var found = false;
            for (var _i = 0, couponLines_1 = couponLines; _i < couponLines_1.length; _i++) {
                var value = couponLines_1[_i];
                if (value.code == coupon.code)
                    found = true;
            }
            return found;
        };
        //========================================================================================================
        //=============================== service to calculate line items total ==============================
        this.checkUserUsageService = function (coupon) {
            if (coupon.used_by == '')
                return false;
            if (coupon.usage_limit == 0 && coupon.usage_limit_per_user == 0)
                return false;
            if (coupon.usage_limit == 0) { }
            else if (coupon.usage_count >= coupon.usage_limit)
                return true;
            //console.log($rootScope.customerData);
            var id = this.shared.customerData.customers_email_address;
            if (this.shared.customerData != null)
                var id2 = this.shared.customerData.customers_id;
            var count = 0;
            for (var _i = 0, _a = coupon.used_by; _i < _a.length; _i++) {
                var value = _a[_i];
                if (value == id || value == id2)
                    count++;
            }
            if (count >= coupon.usage_limit_per_user)
                return true;
            else
                return false;
        };
        //========================================================================================================
        //=============================== service to check ==============================
        this.checkNoItemInCartService = function (lineItems, coupon) {
            var productIds = coupon.product_ids;
            var ExProductIds = coupon.exclude_product_ids;
            var pCategory = coupon.product_categories;
            var ExPCategory = coupon.excluded_product_categories;
            if (productIds.length == 0 && ExProductIds.length == 0 && pCategory.length == 0 && ExPCategory.length == 0)
                return true;
            // var pFound = 0;
            // var ExPfound = 0;
            var result = false;
            //checking in products ids
            if (productIds.length != 0) {
                for (var _i = 0, lineItems_2 = lineItems; _i < lineItems_2.length; _i++) {
                    var x = lineItems_2[_i];
                    var id = x.products_id;
                    var vId = -1;
                    if (x.variation_id != undefined)
                        vId = x.variation_id;
                    for (var _a = 0, productIds_1 = productIds; _a < productIds_1.length; _a++) {
                        var y = productIds_1[_a];
                        if (id == y || vId == y) {
                            result = true;
                        }
                    }
                }
            }
            else {
                result = true;
            }
            //checking in excluded products ids
            if (ExProductIds.length != 0) {
                for (var _b = 0, lineItems_3 = lineItems; _b < lineItems_3.length; _b++) {
                    var x = lineItems_3[_b];
                    var id_1 = x.products_id;
                    var vId_1 = -1;
                    if (x.variation_id != undefined)
                        vId_1 = x.variation_id;
                    for (var _c = 0, ExProductIds_1 = ExProductIds; _c < ExProductIds_1.length; _c++) {
                        var y = ExProductIds_1[_c];
                        if (id_1 == y || vId_1 == y) {
                            result = false;
                        }
                    }
                }
            }
            var result2 = false;
            //checking in products categories
            if (pCategory.length != 0) {
                for (var _d = 0, lineItems_4 = lineItems; _d < lineItems_4.length; _d++) {
                    var w = lineItems_4[_d];
                    for (var _e = 0, _f = w.categories; _e < _f.length; _e++) {
                        var x = _f[_e];
                        for (var _g = 0, pCategory_1 = pCategory; _g < pCategory_1.length; _g++) {
                            var y = pCategory_1[_g];
                            // console.log("x " + x.id + " y " + y);
                            if (x.id == y) {
                                result2 = true;
                            }
                        }
                    }
                }
            }
            else {
                result2 = true;
            }
            if (ExPCategory.length != 0) {
                for (var _h = 0, lineItems_5 = lineItems; _h < lineItems_5.length; _h++) {
                    var w = lineItems_5[_h];
                    for (var _j = 0, _k = w.categories; _j < _k.length; _j++) {
                        var x = _k[_j];
                        for (var _l = 0, pCategory_2 = pCategory; _l < pCategory_2.length; _l++) {
                            var y = pCategory_2[_l];
                            // console.log("x " + x.id + " y " + y);
                            if (x.id == y) {
                                result2 = false;
                            }
                        }
                    }
                }
            }
            //console.log("result " + result + " result2 " + result2);
            if (result == true && result2 == true && coupon.discount_type != 'fixed_cart')
                return true;
            else if (result == true && result2 == true && coupon.discount_type != 'percent')
                return true;
            else if (result == true && result2 == false && coupon.discount_type == 'fixed_product')
                return true;
            else if (result == true && result2 == false && coupon.discount_type == 'percent_product')
                return true;
            else if (result == false && result2 == true && coupon.discount_type == 'percent_product')
                return true;
            else if (result == false && result2 == true && coupon.discount_type == 'fixed_product')
                return true;
            else
                return false;
        };
        //========================================================================================================
        //=============================== service to check the validity of coupon  ==============================
        this.validateCouponService = function (coupon, lineItems, couponLines) {
            var expDate = new Date(coupon.expiry_date);
            var todayDate = new Date();
            //checking coupon expire or not
            if (expDate <= todayDate && coupon.expiry_date != null) {
                this.alert.show("Sorry Coupon is Expired");
                return false;
            }
            else if (this.lineItemTotalService(lineItems) <= coupon.minimum_amount) {
                this.alert.show("Sorry your Cart total is low than coupon min limit!");
                return false;
            }
            else if (this.lineItemTotalService(lineItems) >= coupon.maximum_amount && coupon.maximum_amount != 0) {
                this.alert.show("Sorry your Cart total is Higher than coupon Max limit!");
                return false;
            }
            else if (this.emailCheckService(coupon.email_restrictions) == true) {
                this.alert.show("Sorry, this coupon is not valid for this email address!");
                return false;
            }
            else if (this.checkOnSaleService(lineItems, coupon) == true) {
                this.alert.show("Sorry, this coupon is not valid for sale items.");
                return false;
            }
            else if (this.checkAlreadyAppliedService(coupon, couponLines) == true) {
                this.alert.show("Coupon code already applied!");
                return false;
            }
            else if (couponLines != 0 && couponLines[0].individual_use == 1) {
                this.alert.show('Sorry Individual Use Coupon is already applied any other coupon cannot be applied with it !');
                return false;
            }
            else if (this.checkUserUsageService(coupon) == true) {
                this.alert.show('Coupon usage limit has been reached.');
                return false;
            }
            else
                return true;
        };
        //========================================================================================================
        //=============================== service to apply check coupon ==============================
        this.apply = function (coupon, lineItems) {
            var _this = this;
            var productLimit = coupon.limit_usage_to_x_items;
            if (productLimit == 0)
                productLimit = null;
            var product_qty_flag = 0;
            //fixed cart applying on line items
            if (coupon.discount_type == 'fixed_cart') {
                var cartTotal = parseFloat(this.lineItemTotalService(lineItems));
                var discount = parseFloat((coupon.amount / cartTotal).toString());
                lineItems.forEach(function (value, index) {
                    var result = value.total - parseFloat((discount * value.total).toString());
                    if (result < 0)
                        result = 0;
                    value.total = result;
                });
                //console.log('fixed_cart'); //console.log(lineItems);
                return lineItems;
            }
            else if (coupon.discount_type == 'percent') {
                lineItems.forEach(function (value, index) {
                    var amount = parseFloat(coupon.amount);
                    var subtotal = parseFloat(value.subtotal);
                    var total = parseFloat(value.total);
                    var discount = (subtotal / 100) * amount;
                    value.total = parseFloat((total - discount).toString());
                    if (value.total < 0)
                        value.total = 0;
                });
                // console.log('percent'); console.log(lineItems);
                return lineItems;
            }
            else if (coupon.discount_type == 'fixed_product') {
                var amount = parseFloat(coupon.amount);
                lineItems.forEach(function (value, index) {
                    if (_this.couponApplyOnProductService(value, coupon) && _this.checkCategoriesService(value, coupon)) {
                        var quantity = value.customers_basket_quantity;
                        var total = parseFloat(value.total);
                        if (productLimit > 0) {
                            for (var l = 1; l <= quantity; l++) {
                                if (product_qty_flag < productLimit) {
                                    total = parseFloat((total - amount).toString());
                                    product_qty_flag = product_qty_flag + 1;
                                }
                            }
                            value.total = total;
                        }
                        else {
                            value.total = parseFloat((total - (amount * quantity)).toString());
                        }
                        if (value.total < 0) {
                            value.total = 0;
                        }
                    }
                });
                // console.log('fixed_product');
                return lineItems;
            }
            else if (coupon.discount_type == 'percent_product') {
                var amount_1 = parseFloat(coupon.amount);
                lineItems.forEach(function (value, index) {
                    if (_this.couponApplyOnProductService(value, coupon) && _this.checkCategoriesService(value, coupon)) {
                        var total = parseFloat(value.total);
                        if (productLimit > 0) {
                            for (var l = 1; l <= value.customers_basket_quantity; l++) {
                                var discount = parseFloat(((value.price / 100) * amount_1).toString());
                                if (product_qty_flag < productLimit) {
                                    total = parseFloat((total - discount).toString());
                                    product_qty_flag = product_qty_flag + 1;
                                }
                            }
                            value.total = total;
                        }
                        else {
                            value.total = parseFloat((total - (total / 100) * amount_1).toString());
                        }
                        if (value.total < 0)
                            value.total = 0;
                    }
                });
                //console.log('percent_product');
                return lineItems;
            }
            // else return lineItems;
        };
    }
    CouponProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_2__alert_alert__["a" /* AlertProvider */]])
    ], CouponProvider);
    return CouponProvider;
}());

//# sourceMappingURL=coupon.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home2_home2__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home3_home3__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home4_home4__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home5_home5__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/









var IntroPage = (function () {
    function IntroPage(navCtrl, shared, config) {
        this.navCtrl = navCtrl;
        this.shared = shared;
        this.config = config;
        this.slides = [
            { image: "assets/intro/1.gif", title: "Home Page", icon: "home", description: "" },
            { image: "assets/intro/2.gif", title: "Category Page", icon: "cart", description: "" },
            { image: "assets/intro/3.gif", title: "Shop Page", icon: "share", description: "" },
            { image: "assets/intro/4.gif", title: "Cart Page", icon: "md-list-box", description: "" },
            { image: "assets/intro/5.gif", title: "Order Page", icon: "md-list-box", description: "" }
        ];
        this.slides;
    }
    IntroPage.prototype.openHomePage = function () {
        if (this.config.homePage == 1) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
        }
        if (this.config.homePage == 2) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home2_home2__["a" /* Home2Page */]);
        }
        if (this.config.homePage == 3) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home3_home3__["a" /* Home3Page */]);
        }
        if (this.config.homePage == 4) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__home4_home4__["a" /* Home4Page */]);
        }
        if (this.config.homePage == 5) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__home5_home5__["a" /* Home5Page */]);
        }
    };
    IntroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-intro',template:/*ion-inline-start:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/intro/intro.html"*/'<ion-content class="page-intro">\n  <ion-slides pager="true" dir="{{shared.dir}}">\n    <ion-slide *ngFor="let s of slides" padding>\n      <div class="page-intro-image">\n        <img class="image" src="{{s.image}}">\n      </div>\n      <ion-icon name="{{s.icon}}"></ion-icon>\n      <h2 class="slide-title">{{s.title|translate}}</h2>\n      <p>{{s.description}}</p>\n      <button ion-button outline small color="secondary" (click)="openHomePage()">{{ \'Skip\' | translate }}</button>\n    </ion-slide>\n  </ion-slides>\n</ion-content>'/*ion-inline-end:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/intro/intro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_config_config__["a" /* ConfigProvider */]])
    ], IntroPage);
    return IntroPage;
}());

//# sourceMappingURL=intro.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactUsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_alert_alert__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__cart_cart__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__search_search__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/









var ContactUsPage = (function () {
    function ContactUsPage(http, config, loading, shared, navCtrl, alert, navParams) {
        this.http = http;
        this.config = config;
        this.loading = loading;
        this.shared = shared;
        this.navCtrl = navCtrl;
        this.alert = alert;
        this.navParams = navParams;
        this.contact = {
            name: '',
            email: '',
            message: ''
        };
    }
    ContactUsPage.prototype.ionViewDidLoad = function () {
        this.loadMap();
    };
    ContactUsPage.prototype.submit = function () {
        var _this = this;
        this.loading.show();
        var data = {};
        data = this.contact;
        this.http.post(this.config.url + 'contactUs', data).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.loading.hide();
            if (data.success == 1) {
                _this.contact.name = '';
                _this.contact.email = '';
                _this.contact.message = '';
                _this.alert.show(data.message);
            }
        }, function (response) {
            this.loading.hide();
            this.alert.show("Error server not reponding");
        });
    };
    ;
    ContactUsPage.prototype.loadMap = function () {
        var _this = this;
        var latLng = new google.maps.LatLng(this.config.latitude, this.config.longitude);
        var mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        var marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: this.map.getCenter()
        });
        var content = this.config.address;
        var infoWindow = new google.maps.InfoWindow({
            content: content
        });
        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open(_this.map, marker);
        });
    };
    ContactUsPage.prototype.openCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__cart_cart__["a" /* CartPage */]);
    };
    ContactUsPage.prototype.openSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__search_search__["a" /* SearchPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ContactUsPage.prototype, "mapElement", void 0);
    ContactUsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contact-us',template:/*ion-inline-start:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/contact-us/contact-us.html"*/'<ion-header>\n  \n    <ion-navbar>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n  \n      <ion-title>\n        {{\'Contact Us\'| translate }}\n      </ion-title>\n  \n      <ion-buttons end>\n        <button ion-button icon-only (click)="openSearch()">\n          <ion-icon name="search"></ion-icon>\n        </button>\n        <button ion-button icon-only class="cart-button" (click)="openCart()">\n          <ion-icon name="cart">\n            <ion-badge color="secondary">{{shared.cartquantity}}</ion-badge>\n          </ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  \n  </ion-header>\n<ion-content class="page-contact-us">\n  <div #map id="map"></div>\n\n  <ion-card>\n    <ion-card-content>\n      <ion-row>\n        <ion-col col-12>\n          <ion-icon name="pin"></ion-icon>\n          {{config.address}}\n        </ion-col>\n        <ion-col col-12>\n            <ion-icon name="mail"></ion-icon>\n            {{config.email}}\n          </ion-col>\n          <ion-col col-12>\n            <ion-icon name="call"></ion-icon>\n            {{config.phoneNo}}\n          </ion-col>\n      </ion-row>\n\n      <form #contactForm="ngForm" (ngSubmit)="submit()">\n        <ion-list>\n          <ion-item>\n            <ion-input type="text" placeholder="{{\'Name\'|translate}}" name="name" [(ngModel)]="contact.name" required></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input type="email" placeholder="{{\'Email\'|translate}}" name="email" [(ngModel)]="contact.email" required></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input type="text" placeholder="{{\'Your Messsage\'|translate}}" name="message" [(ngModel)]="contact.message" required></ion-input>\n          </ion-item>\n        </ion-list>\n        <button ion-button block color="secondary" type="submit" [disabled]="!contactForm.form.valid">{{\'Send\'|translate}}</button>\n      </form>\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/contact-us/contact-us.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], ContactUsPage);
    return ContactUsPage;
}());

//# sourceMappingURL=contact-us.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__privacy_policy_privacy_policy__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__term_services_term_services__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__refund_policy_refund_policy__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_loading_loading__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_in_app_browser__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__cart_cart__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__search_search__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/












var AboutUsPage = (function () {
    function AboutUsPage(navCtrl, shared, modalCtrl, config, navParams, loading, iab, translate) {
        this.navCtrl = navCtrl;
        this.shared = shared;
        this.modalCtrl = modalCtrl;
        this.config = config;
        this.navParams = navParams;
        this.loading = loading;
        this.iab = iab;
    }
    AboutUsPage.prototype.showModal = function (value) {
        if (value == 'privacyPolicy') {
            var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__privacy_policy_privacy_policy__["a" /* PrivacyPolicyPage */]);
            modal.present();
        }
        else if (value == 'termServices') {
            var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__term_services_term_services__["a" /* TermServicesPage */]);
            modal.present();
        }
        else {
            var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__refund_policy_refund_policy__["a" /* RefundPolicyPage */]);
            modal.present();
        }
    };
    AboutUsPage.prototype.openSite = function () {
        this.loading.autoHide(2000);
        this.iab.create(this.config.siteUrl, "blank");
    };
    AboutUsPage.prototype.openCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__cart_cart__["a" /* CartPage */]);
    };
    AboutUsPage.prototype.openSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__search_search__["a" /* SearchPage */]);
    };
    AboutUsPage.prototype.ionViewWillEnter = function () {
        if (this.config.admob == 1)
            this.shared.showAd();
    };
    AboutUsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-about-us',template:/*ion-inline-start:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/about-us/about-us.html"*/'\n<ion-header>\n    <ion-navbar>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n  \n      <ion-title>\n        {{\'About Us\'| translate }}\n      </ion-title>\n  \n      <ion-buttons end>\n        <button ion-button icon-only (click)="openSearch()">\n          <ion-icon name="search"></ion-icon>\n        </button>\n        <button ion-button icon-only class="cart-button" (click)="openCart()">\n          <ion-icon name="cart">\n            <ion-badge color="secondary">{{shared.cartquantity}}</ion-badge>\n          </ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n\n<ion-content class="page-about-us" padding>\n  <ion-row>\n    <ion-col text-center col-12>\n      <img src="../assets/icon_logo.svg" width="40">\n      <h3>ABOUT VECTORSHOP</h3>\n    </ion-col>\n  </ion-row>\n  <div [innerHTML]="shared.aboutUs"></div>\n\n  <ion-list>\n    <!-- <button ion-item (click)="openSite()">\n      {{"Official Website"|translate}}\n      <ion-icon showWhen="android" name="arrow-forward" item-end></ion-icon>\n    </button> -->\n    <button ion-item (click)="showModal(\'privacyPolicy\')">\n        {{\'Privacy Policy\'|translate}}\n        <ion-icon showWhen="android" name="arrow-forward" item-end></ion-icon>\n        \n    </button>\n    <button ion-item (click)="showModal(\'refundPolicy\')">\n        {{\'Refund Policy\'|translate}}\n        <ion-icon showWhen="android" name="arrow-forward" item-end></ion-icon>\n        \n    </button>\n    <button ion-item (click)="showModal(\'termServices\')">\n        {{\'Term and Services\'|translate}}\n        <ion-icon showWhen="android" name="arrow-forward" item-end></ion-icon>\n        \n    </button>\n  </ion-list>\n</ion-content>\n<!-- <ion-footer *ngIf="config.footerShowHide==1">\n  <footer ></footer>\n</ion-footer> -->'/*ion-inline-end:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/about-us/about-us.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_8__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]])
    ], AboutUsPage);
    return AboutUsPage;
}());

//# sourceMappingURL=about-us.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WishListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_animations__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__cart_cart__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__search_search__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/









var WishListPage = (function () {
    function WishListPage(navCtrl, navParams, http, config, shared, translate) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.config = config;
        this.shared = shared;
        this.page = 0;
    }
    WishListPage.prototype.getProducts = function () {
        var _this = this;
        var data = {};
        if (this.shared.customerData.customers_id != null)
            data.customers_id = this.shared.customerData.customers_id;
        data.page_number = 0;
        data.page_number = this.page;
        data.type = 'wishlist';
        data.language_id = this.config.langId;
        this.http.post(this.config.url + 'getAllProducts', data).map(function (res) { return res.json(); }).subscribe(function (data) {
            if (data.success == 1) {
                _this.page++;
                var prod = data.product_data;
                for (var _i = 0, prod_1 = prod; _i < prod_1.length; _i++) {
                    var value = prod_1[_i];
                    _this.shared.wishList.push(value);
                }
            }
            if (data.success == 0) {
                _this.infinite.enable(false);
            }
        });
    };
    WishListPage.prototype.ngOnInit = function () {
        this.getProducts();
    };
    WishListPage.prototype.openCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__cart_cart__["a" /* CartPage */]);
    };
    WishListPage.prototype.openSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__search_search__["a" /* SearchPage */]);
    };
    WishListPage.prototype.ionViewWillEnter = function () {
        if (this.config.admob == 1)
            this.shared.showAd();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* InfiniteScroll */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* InfiniteScroll */])
    ], WishListPage.prototype, "infinite", void 0);
    WishListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-wish-list',
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["j" /* trigger */])('animate', [
                    Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["i" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["h" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["e" /* animate */])('500ms', Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["h" /* style */])({ opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["i" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["h" /* style */])({ opacity: 1 }),
                        Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["e" /* animate */])('500ms', Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["h" /* style */])({ opacity: 0 }))
                    ])
                ])
            ],template:/*ion-inline-start:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/wish-list/wish-list.html"*/'<ion-header>\n  \n    <ion-navbar>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n  \n      <ion-title>\n        {{\'Wish List\'| translate }}\n      </ion-title>\n  \n      <ion-buttons end>\n        <button ion-button icon-only (click)="openSearch()">\n          <ion-icon name="search"></ion-icon>\n        </button>\n        <button ion-button icon-only class="cart-button" (click)="openCart()">\n          <ion-icon name="cart">\n            <ion-badge color="secondary">{{shared.cartquantity}}</ion-badge>\n          </ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  \n  </ion-header>\n\n\n<ion-content class="page-wish-list">\n  <ion-grid>\n    <ion-col col-6 *ngFor="let p of shared.wishList" [@animate]>\n        <product [data]="p" [type]="\'wishList\'"></product>\n    </ion-col>\n  \n    <ion-col col-12 *ngIf="shared.wishList.length == 0">\n      <h6 text-center>No Products Found!</h6>\n    </ion-col>\n  </ion-grid>\n\n  <ion-infinite-scroll #infinite (ionInfinite)="getProducts($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>'/*ion-inline-end:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/wish-list/wish-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */]])
    ], WishListPage);
    return WishListPage;
}());

//# sourceMappingURL=wish-list.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyShippingAddressesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_loading_loading__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_alert_alert__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__edit_shipping_address_edit_shipping_address__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__cart_cart__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__search_search__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/











var MyShippingAddressesPage = (function () {
    function MyShippingAddressesPage(navCtrl, navParams, http, config, shared, translate, modalCtrl, alert, loading) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.config = config;
        this.shared = shared;
        this.modalCtrl = modalCtrl;
        this.alert = alert;
        this.loading = loading;
        this.allShippingAddress = new Array;
        //============================================================================================  
        // delete shipping address
        this.deleteAddress = function (id) {
            var _this = this;
            this.loading.show();
            var data = {
                customers_id: this.shared.customerData.customers_id,
                address_book_id: id
            };
            this.http.post(this.config.url + 'deleteShippingAddress', data).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.loading.hide();
                if (data.success == 1) {
                    _this.getAllAddress();
                }
            }, function (response) {
                this.loading.hide();
                this.alert.show("Error server not reponding");
            });
        };
        //============================================================================================  
        // default shipping address
        this.defaultAddress = function (id) {
            var _this = this;
            this.loading.show();
            var data = {
                customers_id: this.shared.customerData.customers_id,
                address_book_id: id
            };
            this.http.post(this.config.url + 'updateDefaultAddress', data).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.loading.hide();
                if (data.success == 1) {
                    _this.getAllAddress();
                }
            }, function (response) {
                this.loading.hide();
                this.alert.show("Error server not reponding");
            });
        };
    }
    MyShippingAddressesPage.prototype.getAllAddress = function () {
        var _this = this;
        this.loading.show();
        var data = { customers_id: this.shared.customerData.customers_id };
        this.http.post(this.config.url + 'getAllAddress', data).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.loading.hide();
            if (data.success == 1) {
                _this.allShippingAddress = data.data;
            }
        });
    };
    MyShippingAddressesPage.prototype.openEditShippingPage = function (data) {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__edit_shipping_address_edit_shipping_address__["a" /* EditShippingAddressPage */], { data: data, type: 'update' });
        modal.present();
        modal.onDidDismiss(function () {
            _this.getAllAddress();
        });
    };
    MyShippingAddressesPage.prototype.addShippingAddress = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__edit_shipping_address_edit_shipping_address__["a" /* EditShippingAddressPage */], { type: 'add' });
        modal.onDidDismiss(function () {
            _this.getAllAddress();
        });
        modal.present();
    };
    MyShippingAddressesPage.prototype.ionViewWillEnter = function () { this.getAllAddress(); };
    MyShippingAddressesPage.prototype.openCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__cart_cart__["a" /* CartPage */]);
    };
    MyShippingAddressesPage.prototype.openSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__search_search__["a" /* SearchPage */]);
    };
    MyShippingAddressesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-my-shipping-addresses',template:/*ion-inline-start:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/my-shipping-addresses/my-shipping-addresses.html"*/'<ion-header>\n    <ion-navbar>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n  \n      <ion-title>\n        {{\'Customer Address\'| translate }}\n      </ion-title>\n  \n      <ion-buttons end>\n        <button ion-button icon-only (click)="openSearch()">\n          <ion-icon name="search"></ion-icon>\n        </button>\n        <button ion-button icon-only class="cart-button" (click)="openCart()">\n          <ion-icon name="cart">\n            <ion-badge color="secondary">{{shared.cartquantity}}</ion-badge>\n          </ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n\n<ion-content class="page-my-shipping-addresses" padding>\n  <div *ngIf="allShippingAddress.length==0" text-center>\n    {{\'Please add your new shipping address for the futher processing of the your order\'|translate}}\n  </div>\n  <ion-list>\n    <ion-item *ngFor="let address of allShippingAddress">\n\n      <ion-icon name="create" item-start (click)="openEditShippingPage(address)"></ion-icon>\n      {{address.street+\', \'+ address.city+\', \'+address.state+\' \'+address.postcode+\', \'+address.country_name}}\n\n      <ion-icon name="radio-button-off" *ngIf="address.default_address!=address.address_id" (click)="defaultAddress(address.address_id)"\n        item-end></ion-icon>\n      <ion-icon name="radio-button-on" *ngIf="address.default_address==address.address_id" item-end></ion-icon>\n\n    </ion-item>\n  </ion-list>\n  <button ion-button block color="secondary" (click)="addShippingAddress()">{{\'Add New Address\'|translate}}</button>\n</ion-content>'/*ion-inline-end:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/my-shipping-addresses/my-shipping-addresses.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_loading_loading__["a" /* LoadingProvider */]])
    ], MyShippingAddressesPage);
    return MyShippingAddressesPage;
}());

//# sourceMappingURL=my-shipping-addresses.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditShippingAddressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__select_country_select_country__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__select_zones_select_zones__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_alert_alert__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/









var EditShippingAddressPage = (function () {
    function EditShippingAddressPage(navCtrl, navParams, http, config, viewCtrl, loading, modalCtrl, shared, alert) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.config = config;
        this.viewCtrl = viewCtrl;
        this.loading = loading;
        this.modalCtrl = modalCtrl;
        this.shared = shared;
        this.alert = alert;
        this.shippingData = {};
        this.type = 'update';
        //============================================================================================  
        //adding shipping address of the user
        this.addShippingAddress = function (form) {
            var _this = this;
            this.loading.show();
            this.shippingData.customers_id = this.shared.customerData.customers_id;
            var data = this.shippingData;
            data.entry_state = data.delivery_zone;
            data.entry_zone = data.delivery_zone;
            this.http.post(this.config.url + 'addShippingAddress', data).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.loading.hide();
                _this.dismiss();
                _this.alert.show(data.message);
            }, function (response) {
                this.loading.hide();
                console.log(response);
            });
        };
        //============================================================================================  
        //updating shipping address of the user
        this.updateShippingAddress = function (form, id) {
            var _this = this;
            this.loading.show();
            this.shippingData.customers_id = this.shared.customerData.customers_id;
            var data = this.shippingData;
            data.entry_state = data.delivery_zone;
            data.entry_zone = data.delivery_zone;
            this.http.post(this.config.url + 'updateShippingAddress', data).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.loading.hide();
                if (data.success == 1) {
                    _this.dismiss();
                    _this.alert.show(data.message);
                }
            }, function (response) {
                this.loading.hide();
                console.log(response);
            });
        };
        this.data = navParams.get('data');
        this.type = navParams.get('type');
        if (this.type != 'add') {
            this.shippingData.entry_firstname = this.data.firstname;
            this.shippingData.entry_lastname = this.data.lastname;
            this.shippingData.entry_street_address = this.data.street;
            this.shippingData.entry_country_name = this.data.country_name;
            this.shippingData.entry_zone = this.data.zone_name;
            this.shippingData.entry_postcode = this.data.postcode;
            this.shippingData.entry_country_id = this.data.countries_id;
            this.shippingData.entry_address_id = this.data.address_id;
            this.shippingData.entry_city = this.data.city;
            this.shippingData.entry_zone_id = this.data.zone_id;
            this.shippingData.entry_state = this.data.state;
            this.shippingData.suburb = this.data.suburb;
            this.shippingData.address_id = this.data.address_id;
        }
        // console.log(this.data);
        // console.log(this.shippingData);
    }
    EditShippingAddressPage.prototype.selectCountryPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__select_country_select_country__["a" /* SelectCountryPage */], { page: 'editShipping' });
        modal.present();
    };
    EditShippingAddressPage.prototype.selectZonePage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__select_zones_select_zones__["a" /* SelectZonesPage */], { page: 'editShipping', id: this.shippingData.entry_country_id });
        modal.present();
    };
    //close modal
    EditShippingAddressPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    EditShippingAddressPage.prototype.ionViewWillEnter = function () {
        if (this.shared.tempdata.entry_country_id != undefined) {
            this.shippingData.entry_country_id = this.shared.tempdata.entry_country_id;
            this.shippingData.entry_country_name = this.shared.tempdata.entry_country_name;
            this.shippingData.entry_country_code = this.shared.tempdata.entry_country_code;
            this.shippingData.entry_zone = this.shared.tempdata.entry_zone;
        }
        if (this.shared.tempdata.entry_zone != undefined) {
            this.shippingData.entry_zone = this.shared.tempdata.entry_zone;
            this.shippingData.entry_zone_id = this.shared.tempdata.entry_zone_id;
        }
    };
    EditShippingAddressPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-edit-shipping-address',template:/*ion-inline-start:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/edit-shipping-address/edit-shipping-address.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button icon-only (click)="dismiss()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>{{\'Shipping Address\'|translate}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content class="page-edit-shipping-address" padding> \n  <form #loginForm="ngForm">\n    <ion-row>\n      <ion-col>\n        <ion-list>\n          <ion-item>\n            <ion-input type="text" placeholder="{{\'First Name\'|translate}}" name="firstname" [(ngModel)]="shippingData.entry_firstname"\n              required></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-input type="text" placeholder="{{\'Last Name\'|translate}}" name="lastname" [(ngModel)]="shippingData.entry_lastname"\n              required></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input type="text" placeholder="{{\'Address\'|translate}}" name="street" [(ngModel)]="shippingData.entry_street_address"\n              required></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input type="text" placeholder="{{\'Country\'|translate}}" name="country_name" (tap)="selectCountryPage()" [readonly]="true"\n              [(ngModel)]="shippingData.entry_country_name" required></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input type="text" placeholder="{{\'Zone\'|translate}}" required name="zone_name" (tap)="selectZonePage()" [readonly]="true"\n              [(ngModel)]="shippingData.entry_zone"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input type="text" placeholder="{{\'City\'|translate}}" name="city" [(ngModel)]="shippingData.entry_city" required></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input type="text" placeholder="{{\'Postcode\'|translate}}" name="postcode" [(ngModel)]="shippingData.entry_postcode" required></ion-input>\n          </ion-item>\n\n        </ion-list>\n      </ion-col>\n    </ion-row>\n    \n  </form>\n  <button ion-button block color="secondary" *ngIf="type==\'update\'" (click)="updateShippingAddress()" [disabled]="!loginForm.form.valid">{{\'Update Address\'|translate}}</button>\n  <button ion-button block color="secondary" *ngIf="type==\'add\'" (click)="addShippingAddress()" [disabled]="!loginForm.form.valid">{{\'Save Address\'|translate}}</button>\n</ion-content>'/*ion-inline-end:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/edit-shipping-address/edit-shipping-address.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_alert_alert__["a" /* AlertProvider */]])
    ], EditShippingAddressPage);
    return EditShippingAddressPage;
}());

//# sourceMappingURL=edit-shipping-address.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__news_detail_news_detail__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_toast__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/







var NewsListPage = (function () {
    function NewsListPage(navCtrl, navParams, http, toast, config, loading) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.toast = toast;
        this.config = config;
        this.loading = loading;
        this.page = 0;
        this.posts = new Array;
        this.name = this.navParams.get('name');
        this.id = this.navParams.get('id');
        this.getPosts();
    }
    NewsListPage.prototype.showPostDetail = function (post) {
        this.loading.autoHide(500);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__news_detail_news_detail__["a" /* NewsDetailPage */], { 'post': post });
    };
    ;
    //============================================================================================  
    //getting list of posts
    NewsListPage.prototype.getPosts = function () {
        var _this = this;
        var data = {};
        data.language_id = this.config.langId;
        data.page_number = this.page;
        data.categories_id = this.id;
        this.http.post(this.config.url + 'getAllNews', data).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.infinite.complete(); //stopping infinite scroll loader
            if (_this.page == 0) {
                _this.posts = [];
                _this.infinite.enable(true);
            }
            if (data.success == 1) {
                _this.page++;
                data.news_data.forEach(function (value, index) {
                    _this.posts.push(value);
                });
            }
            if (data.news_data.length < 9) {
                _this.infinite.enable(false); //disabling infinite scroll
                if (_this.posts.length != 0) {
                    _this.toast.show("All Posts Loaded!", 'short', 'bottom');
                }
            }
        }, function (response) {
            // console.log("Error while loading posts from the server");
            // console.log(response);
        });
    };
    ;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* InfiniteScroll */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* InfiniteScroll */])
    ], NewsListPage.prototype, "infinite", void 0);
    NewsListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-news-list',template:/*ion-inline-start:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/news-list/news-list.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      {{\'News List\'| translate }}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="page-news-list">\n  <ion-grid class="page-empty" *ngIf="posts.length==0">\n    <ion-row align-items-center>\n      <ion-col  col-12>\n          <h3 text-center><ion-icon name="ionic"></ion-icon></h3>\n          <h4 text-center>{{\'No Posts Avaialable\'| translate}}</h4>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-list>\n    <ion-item *ngFor="let post of posts" (click)="showPostDetail(post)">\n      <ion-thumbnail item-start>\n        <img src="{{config.url+post.news_image}}">\n      </ion-thumbnail>\n      <h2>{{post.news_name}}<br><small><ion-icon name="time"></ion-icon>{{post.news_date_added}}</small></h2>\n      <div class="post-excerpt" [innerHTML]="post.news_description"></div>\n    </ion-item>\n    <ion-infinite-scroll #infinite (ionInfinite)="getPosts()">\n      <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/news-list/news-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_toast__["a" /* Toast */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__["a" /* LoadingProvider */]])
    ], NewsListPage);
    return NewsListPage;
}());

//# sourceMappingURL=news-list.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubCategories2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__products_products__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_animations__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cart_cart__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_search__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/








var SubCategories2Page = (function () {
    function SubCategories2Page(navCtrl, navParams, shared, config) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.shared = shared;
        this.config = config;
        this.parent = navParams.get("parent");
    }
    SubCategories2Page.prototype.openProducts = function (id, name) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__products_products__["a" /* ProductsPage */], { id: id, name: name, sortOrder: 'newest' });
    };
    SubCategories2Page.prototype.openCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__cart_cart__["a" /* CartPage */]);
    };
    SubCategories2Page.prototype.openSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__search_search__["a" /* SearchPage */]);
    };
    SubCategories2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-sub-categories2',
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["j" /* trigger */])('animate', [
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["i" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('500ms', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* style */])({ opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["i" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* style */])({ opacity: 1 }),
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('700ms', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* style */])({ opacity: 0 }))
                    ])
                ])
            ],template:/*ion-inline-start:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/sub-categories2/sub-categories2.html"*/'<ion-header>\n    \n      <ion-navbar>\n        <ion-title>\n          {{\'Sub Categories\'| translate }}\n        </ion-title>\n    \n        <ion-buttons end>\n          <button ion-button icon-only (click)="openSearch()">\n            <ion-icon name="search"></ion-icon>\n          </button>\n          <button ion-button icon-only class="cart-button" (click)="openCart()">\n            <ion-icon name="cart">\n              <ion-badge color="secondary">{{shared.cartquantity}}</ion-badge>\n            </ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-navbar>\n    \n    </ion-header>\n\n<ion-content>\n  <ion-list>\n    <div *ngFor="let c of shared.subCategories" (click)="openProducts(c.id,c.name)" class="animated flipInX">\n      <ion-item *ngIf="c.parent_id==parent">\n        <ion-icon item-start>\n          <img src="{{config.url+c.icon}}">\n        </ion-icon>\n        <h2>{{c.name}}\n          <br>\n          <small>{{c.total_products}} {{\'Products\'| translate }} </small>\n        </h2>\n      </ion-item>\n    </div>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/sub-categories2/sub-categories2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */]])
    ], SubCategories2Page);
    return SubCategories2Page;
}());

//# sourceMappingURL=sub-categories2.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubCategories4Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__products_products__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_animations__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cart_cart__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_search__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/








var SubCategories4Page = (function () {
    function SubCategories4Page(navCtrl, navParams, shared, config) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.shared = shared;
        this.config = config;
        this.subcategories = [];
        this.parent = navParams.get("parent");
        for (var _i = 0, _a = this.shared.subCategories; _i < _a.length; _i++) {
            var value = _a[_i];
            if (value.parent_id == this.parent) {
                this.subcategories.push(value);
            }
        }
    }
    SubCategories4Page.prototype.openProducts = function (id, name) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__products_products__["a" /* ProductsPage */], { id: id, name: name, sortOrder: 'newest' });
    };
    SubCategories4Page.prototype.openCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__cart_cart__["a" /* CartPage */]);
    };
    SubCategories4Page.prototype.openSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__search_search__["a" /* SearchPage */]);
    };
    SubCategories4Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-sub-categories4',
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["j" /* trigger */])('animate', [
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["i" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('500ms', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* style */])({ opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["i" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* style */])({ opacity: 1 }),
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('700ms', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* style */])({ opacity: 0 }))
                    ])
                ])
            ],template:/*ion-inline-start:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/sub-categories4/sub-categories4.html"*/'<ion-header>\n    \n      <ion-navbar>\n        <ion-title>\n          {{\'Sub Categories\'| translate }}\n        </ion-title>\n    \n        <ion-buttons end>\n          <button ion-button icon-only (click)="openSearch()">\n            <ion-icon name="search"></ion-icon>\n          </button>\n          <button ion-button icon-only class="cart-button" (click)="openCart()">\n            <ion-icon name="cart">\n              <ion-badge color="secondary">{{shared.cartquantity}}</ion-badge>\n            </ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-navbar>\n    \n    </ion-header>\n<ion-content class="card-background-page">\n  <ion-grid>\n      <ion-row>\n        <ion-col col-6  *ngFor="let c of subcategories" (click)="openProducts(c.id,c.name)" class="animated flipInX">\n            <ion-card >\n              <img src="{{config.url+c.icon}}"/>\n              <div class="categories-title">{{c.name}}</div>\n              <div class="categories-subtitle">{{c.total_products}} {{\'Products\'| translate }} </div>\n            </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n</ion-content>'/*ion-inline-end:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/sub-categories4/sub-categories4.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */]])
    ], SubCategories4Page);
    return SubCategories4Page;
}());

//# sourceMappingURL=sub-categories4.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubCategories3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__products_products__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_animations__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cart_cart__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_search__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/








var SubCategories3Page = (function () {
    function SubCategories3Page(navCtrl, navParams, shared, config) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.shared = shared;
        this.config = config;
        this.parent = navParams.get("parent");
    }
    SubCategories3Page.prototype.openProducts = function (id, name) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__products_products__["a" /* ProductsPage */], { id: id, name: name, sortOrder: 'newest' });
    };
    SubCategories3Page.prototype.openCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__cart_cart__["a" /* CartPage */]);
    };
    SubCategories3Page.prototype.openSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__search_search__["a" /* SearchPage */]);
    };
    SubCategories3Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-sub-categories3',
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["j" /* trigger */])('animate', [
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["i" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('500ms', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* style */])({ opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["i" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* style */])({ opacity: 1 }),
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('700ms', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* style */])({ opacity: 0 }))
                    ])
                ])
            ],template:/*ion-inline-start:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/sub-categories3/sub-categories3.html"*/'<ion-header>\n    \n      <ion-navbar>\n        <ion-title>\n          {{\'Sub Categories\'| translate }}\n        </ion-title>\n    \n        <ion-buttons end>\n          <button ion-button icon-only (click)="openSearch()">\n            <ion-icon name="search"></ion-icon>\n          </button>\n          <button ion-button icon-only class="cart-button" (click)="openCart()">\n            <ion-icon name="cart">\n              <ion-badge color="secondary">{{shared.cartquantity}}</ion-badge>\n            </ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-navbar>\n    \n    </ion-header>\n\n<ion-content class="card-background-page">\n\n  <ion-list>\n    <div *ngFor="let c of shared.subCategories" (click)="openProducts(c.id,c.name)" class="animated flipInX">\n      <ion-item *ngIf="c.parent_id==parent">\n        <ion-avatar item-start>\n          <img src="{{config.url+c.image}}">\n        </ion-avatar>\n        <h2>{{c.name}}<br><small>{{c.total_products}} {{\'Products\'| translate }} </small></h2>\n      </ion-item>\n    </div>\n    </ion-list>\n\n\n</ion-content>'/*ion-inline-end:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/sub-categories3/sub-categories3.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */]])
    ], SubCategories3Page);
    return SubCategories3Page;
}());

//# sourceMappingURL=sub-categories3.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(304);
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_lazyload_image__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_lazyload_image___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng_lazyload_image__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_translate_translate__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_storage__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_camera__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_products_products__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_language_language__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_sign_up_sign_up__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_login_login__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_intro_intro__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_about_us_about_us__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_contact_us_contact_us__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_loading_loading__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_forgot_password_forgot_password__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_banners_banners__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_product_product__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_footer_footer__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_sliding_tabs_sliding_tabs__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_product_detail_product_detail__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_header_header__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_cart_cart__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pipes_curency_curency__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_toast__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_search_search__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__providers_alert_alert__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_categories_categories__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_products_products__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_wish_list_wish_list__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_shipping_address_shipping_address__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_select_country_select_country__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_select_zones_select_zones__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_billing_address_billing_address__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_shipping_method_shipping_method__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_order_order__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__ionic_native_social_sharing__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_thank_you_thank_you__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__ionic_native_stripe__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__providers_coupon_coupon__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__ionic_native_paypal__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_my_account_my_account__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__pages_my_shipping_addresses_my_shipping_addresses__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__pages_edit_shipping_address_edit_shipping_address__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__pages_my_orders_my_orders__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__pages_order_detail_order_detail__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__pages_news_news__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__pages_settings_settings__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__pages_news_detail_news_detail__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__pages_news_list_news_list__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__ionic_native_local_notifications__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__ionic_native_push__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__ionic_native_device__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__ionic_native_facebook__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__ionic_native_google_plus__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__pages_categories2_categories2__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__pages_sub_categories_sub_categories__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__pages_home5_home5__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__pages_home4_home4__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__pages_home3_home3__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__pages_home2_home2__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__pages_categories3_categories3__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__pages_categories4_categories4__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__pages_categories5_categories5__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__pages_privacy_policy_privacy_policy__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__pages_term_services_term_services__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__pages_refund_policy_refund_policy__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__angular_platform_browser_animations__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76__ionic_native_network__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_77__pages_sub_categories2_sub_categories2__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_78__pages_sub_categories3_sub_categories3__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_79__pages_sub_categories4_sub_categories4__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_80__pages_sub_categories5_sub_categories5__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_81__pages_categories6_categories6__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_82__pages_sub_categories6_sub_categories6__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_83__ionic_native_in_app_browser__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_84__ionic_native_admob_free__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_85__ionic_native_fcm__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_86__ionic_native_app_version__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_87__ionic_native_onesignal__ = __webpack_require__(77);
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/
// Version: 1.0
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
if (localStorage.langId == undefined) {
    localStorage.langId = '1';
}
if (localStorage.direction == undefined) {
    localStorage.direction = 'ltr';
}



























//import { ComponentsModule } from '../components/components.module';





























































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_68__pages_home2_home2__["a" /* Home2Page */],
                __WEBPACK_IMPORTED_MODULE_67__pages_home3_home3__["a" /* Home3Page */],
                __WEBPACK_IMPORTED_MODULE_66__pages_home4_home4__["a" /* Home4Page */],
                __WEBPACK_IMPORTED_MODULE_65__pages_home5_home5__["a" /* Home5Page */],
                __WEBPACK_IMPORTED_MODULE_33__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_categories_categories__["a" /* CategoriesPage */],
                __WEBPACK_IMPORTED_MODULE_63__pages_categories2_categories2__["a" /* Categories2Page */],
                __WEBPACK_IMPORTED_MODULE_69__pages_categories3_categories3__["a" /* Categories3Page */],
                __WEBPACK_IMPORTED_MODULE_70__pages_categories4_categories4__["a" /* Categories4Page */],
                __WEBPACK_IMPORTED_MODULE_71__pages_categories5_categories5__["a" /* Categories5Page */],
                __WEBPACK_IMPORTED_MODULE_81__pages_categories6_categories6__["a" /* Categories6Page */],
                __WEBPACK_IMPORTED_MODULE_18__pages_intro_intro__["a" /* IntroPage */],
                __WEBPACK_IMPORTED_MODULE_64__pages_sub_categories_sub_categories__["a" /* SubCategoriesPage */],
                __WEBPACK_IMPORTED_MODULE_77__pages_sub_categories2_sub_categories2__["a" /* SubCategories2Page */],
                __WEBPACK_IMPORTED_MODULE_78__pages_sub_categories3_sub_categories3__["a" /* SubCategories3Page */],
                __WEBPACK_IMPORTED_MODULE_79__pages_sub_categories4_sub_categories4__["a" /* SubCategories4Page */],
                __WEBPACK_IMPORTED_MODULE_80__pages_sub_categories5_sub_categories5__["a" /* SubCategories5Page */],
                __WEBPACK_IMPORTED_MODULE_82__pages_sub_categories6_sub_categories6__["a" /* SubCategories6Page */],
                __WEBPACK_IMPORTED_MODULE_36__pages_products_products__["a" /* ProductsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_language_language__["a" /* LanguagePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_contact_us_contact_us__["a" /* ContactUsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_about_us_about_us__["a" /* AboutUsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_intro_intro__["a" /* IntroPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_sign_up_sign_up__["a" /* SignUpPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_wish_list_wish_list__["a" /* WishListPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_shipping_address_shipping_address__["a" /* ShippingAddressPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_forgot_password_forgot_password__["a" /* ForgotPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_29__components_header_header__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_banners_banners__["a" /* BannersComponent */],
                __WEBPACK_IMPORTED_MODULE_40__pages_select_zones_select_zones__["a" /* SelectZonesPage */],
                __WEBPACK_IMPORTED_MODULE_50__pages_my_shipping_addresses_my_shipping_addresses__["a" /* MyShippingAddressesPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_billing_address_billing_address__["a" /* BillingAddressPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_select_country_select_country__["a" /* SelectCountryPage */],
                __WEBPACK_IMPORTED_MODULE_49__pages_my_account_my_account__["a" /* MyAccountPage */],
                __WEBPACK_IMPORTED_MODULE_25__components_product_product__["a" /* ProductComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_footer_footer__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_sliding_tabs_sliding_tabs__["a" /* SlidingTabsComponent */],
                __WEBPACK_IMPORTED_MODULE_28__pages_product_detail_product_detail__["a" /* ProductDetailPage */],
                __WEBPACK_IMPORTED_MODULE_31__pipes_curency_curency__["a" /* CurencyPipe */],
                __WEBPACK_IMPORTED_MODULE_42__pages_shipping_method_shipping_method__["a" /* ShippingMethodPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_thank_you_thank_you__["a" /* ThankYouPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_order_order__["a" /* OrderPage */],
                __WEBPACK_IMPORTED_MODULE_53__pages_order_detail_order_detail__["a" /* OrderDetailPage */],
                __WEBPACK_IMPORTED_MODULE_52__pages_my_orders_my_orders__["a" /* MyOrdersPage */],
                __WEBPACK_IMPORTED_MODULE_72__pages_privacy_policy_privacy_policy__["a" /* PrivacyPolicyPage */],
                __WEBPACK_IMPORTED_MODULE_74__pages_refund_policy_refund_policy__["a" /* RefundPolicyPage */],
                __WEBPACK_IMPORTED_MODULE_73__pages_term_services_term_services__["a" /* TermServicesPage */],
                __WEBPACK_IMPORTED_MODULE_51__pages_edit_shipping_address_edit_shipping_address__["a" /* EditShippingAddressPage */],
                __WEBPACK_IMPORTED_MODULE_54__pages_news_news__["a" /* NewsPage */],
                __WEBPACK_IMPORTED_MODULE_56__pages_news_detail_news_detail__["a" /* NewsDetailPage */],
                __WEBPACK_IMPORTED_MODULE_57__pages_news_list_news_list__["a" /* NewsListPage */],
                __WEBPACK_IMPORTED_MODULE_55__pages_settings_settings__["a" /* SettingsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {
                    backButtonText: '',
                    iconMode: 'md',
                }, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_75__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4_ng_lazyload_image__["LazyLoadImageModule"],
                __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (__WEBPACK_IMPORTED_MODULE_10__providers_translate_translate__["a" /* createTranslateLoader */]),
                        deps: [__WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]]
                    }
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_68__pages_home2_home2__["a" /* Home2Page */],
                __WEBPACK_IMPORTED_MODULE_67__pages_home3_home3__["a" /* Home3Page */],
                __WEBPACK_IMPORTED_MODULE_66__pages_home4_home4__["a" /* Home4Page */],
                __WEBPACK_IMPORTED_MODULE_65__pages_home5_home5__["a" /* Home5Page */],
                __WEBPACK_IMPORTED_MODULE_33__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_categories_categories__["a" /* CategoriesPage */],
                __WEBPACK_IMPORTED_MODULE_63__pages_categories2_categories2__["a" /* Categories2Page */],
                __WEBPACK_IMPORTED_MODULE_69__pages_categories3_categories3__["a" /* Categories3Page */],
                __WEBPACK_IMPORTED_MODULE_70__pages_categories4_categories4__["a" /* Categories4Page */],
                __WEBPACK_IMPORTED_MODULE_71__pages_categories5_categories5__["a" /* Categories5Page */],
                __WEBPACK_IMPORTED_MODULE_81__pages_categories6_categories6__["a" /* Categories6Page */],
                __WEBPACK_IMPORTED_MODULE_64__pages_sub_categories_sub_categories__["a" /* SubCategoriesPage */],
                __WEBPACK_IMPORTED_MODULE_77__pages_sub_categories2_sub_categories2__["a" /* SubCategories2Page */],
                __WEBPACK_IMPORTED_MODULE_78__pages_sub_categories3_sub_categories3__["a" /* SubCategories3Page */],
                __WEBPACK_IMPORTED_MODULE_79__pages_sub_categories4_sub_categories4__["a" /* SubCategories4Page */],
                __WEBPACK_IMPORTED_MODULE_80__pages_sub_categories5_sub_categories5__["a" /* SubCategories5Page */],
                __WEBPACK_IMPORTED_MODULE_82__pages_sub_categories6_sub_categories6__["a" /* SubCategories6Page */],
                __WEBPACK_IMPORTED_MODULE_18__pages_intro_intro__["a" /* IntroPage */],
                __WEBPACK_IMPORTED_MODULE_72__pages_privacy_policy_privacy_policy__["a" /* PrivacyPolicyPage */],
                __WEBPACK_IMPORTED_MODULE_74__pages_refund_policy_refund_policy__["a" /* RefundPolicyPage */],
                __WEBPACK_IMPORTED_MODULE_73__pages_term_services_term_services__["a" /* TermServicesPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_language_language__["a" /* LanguagePage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_products_products__["a" /* ProductsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_contact_us_contact_us__["a" /* ContactUsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_about_us_about_us__["a" /* AboutUsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_intro_intro__["a" /* IntroPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_wish_list_wish_list__["a" /* WishListPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_shipping_address_shipping_address__["a" /* ShippingAddressPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_sign_up_sign_up__["a" /* SignUpPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_billing_address_billing_address__["a" /* BillingAddressPage */],
                __WEBPACK_IMPORTED_MODULE_50__pages_my_shipping_addresses_my_shipping_addresses__["a" /* MyShippingAddressesPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_select_country_select_country__["a" /* SelectCountryPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_select_zones_select_zones__["a" /* SelectZonesPage */],
                __WEBPACK_IMPORTED_MODULE_49__pages_my_account_my_account__["a" /* MyAccountPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_forgot_password_forgot_password__["a" /* ForgotPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_29__components_header_header__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_banners_banners__["a" /* BannersComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_product_product__["a" /* ProductComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_footer_footer__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_sliding_tabs_sliding_tabs__["a" /* SlidingTabsComponent */],
                __WEBPACK_IMPORTED_MODULE_28__pages_product_detail_product_detail__["a" /* ProductDetailPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_shipping_method_shipping_method__["a" /* ShippingMethodPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_order_order__["a" /* OrderPage */],
                __WEBPACK_IMPORTED_MODULE_52__pages_my_orders_my_orders__["a" /* MyOrdersPage */],
                __WEBPACK_IMPORTED_MODULE_53__pages_order_detail_order_detail__["a" /* OrderDetailPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_thank_you_thank_you__["a" /* ThankYouPage */],
                __WEBPACK_IMPORTED_MODULE_51__pages_edit_shipping_address_edit_shipping_address__["a" /* EditShippingAddressPage */],
                __WEBPACK_IMPORTED_MODULE_54__pages_news_news__["a" /* NewsPage */],
                __WEBPACK_IMPORTED_MODULE_56__pages_news_detail_news_detail__["a" /* NewsDetailPage */],
                __WEBPACK_IMPORTED_MODULE_57__pages_news_list_news_list__["a" /* NewsListPage */],
                __WEBPACK_IMPORTED_MODULE_55__pages_settings_settings__["a" /* SettingsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__providers_config_config__["a" /* ConfigProvider */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_44__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_32__ionic_native_toast__["a" /* Toast */],
                __WEBPACK_IMPORTED_MODULE_9__providers_config_config__["a" /* ConfigProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_products_products__["a" /* ProductsProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_14__providers_products_products__["a" /* ProductsProvider */],
                __WEBPACK_IMPORTED_MODULE_21__providers_loading_loading__["a" /* LoadingProvider */],
                __WEBPACK_IMPORTED_MODULE_22__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_46__ionic_native_stripe__["a" /* Stripe */],
                __WEBPACK_IMPORTED_MODULE_34__providers_alert_alert__["a" /* AlertProvider */],
                __WEBPACK_IMPORTED_MODULE_47__providers_coupon_coupon__["a" /* CouponProvider */],
                __WEBPACK_IMPORTED_MODULE_48__ionic_native_paypal__["a" /* PayPal */],
                __WEBPACK_IMPORTED_MODULE_59__ionic_native_push__["a" /* Push */],
                __WEBPACK_IMPORTED_MODULE_60__ionic_native_device__["a" /* Device */],
                __WEBPACK_IMPORTED_MODULE_61__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_62__ionic_native_google_plus__["a" /* GooglePlus */],
                __WEBPACK_IMPORTED_MODULE_58__ionic_native_local_notifications__["a" /* LocalNotifications */],
                __WEBPACK_IMPORTED_MODULE_83__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_76__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_84__ionic_native_admob_free__["a" /* AdMobFree */],
                __WEBPACK_IMPORTED_MODULE_85__ionic_native_fcm__["a" /* FCM */],
                __WEBPACK_IMPORTED_MODULE_86__ionic_native_app_version__["a" /* AppVersion */],
                __WEBPACK_IMPORTED_MODULE_87__ionic_native_onesignal__["a" /* OneSignal */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_language_language__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_intro_intro__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_contact_us_contact_us__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_about_us_about_us__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_sign_up_sign_up__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_categories_categories__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_wish_list_wish_list__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_my_account_my_account__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_my_orders_my_orders__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_my_shipping_addresses_my_shipping_addresses__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_news_news__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_products_products__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_settings_settings__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_network__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_alert_alert__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_loading_loading__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_home2_home2__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_home3_home3__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_home4_home4__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_home5_home5__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_categories2_categories2__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_categories4_categories4__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_categories5_categories5__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_categories3_categories3__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_categories6_categories6__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__angular_animations__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ionic_native_admob_free__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__ionic_native_app_version__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__ionic_native_in_app_browser__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__ionic_native_social_sharing__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__angular_http__ = __webpack_require__(8);
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









































var MyApp = (function () {
    function MyApp(platform, modalCtrl, statusBar, splashScreen, translate, storage, shared, http, config, network, alert, loading, admobFree, events, plt, appVersion, iab, socialSharing) {
        var _this = this;
        this.platform = platform;
        this.modalCtrl = modalCtrl;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.storage = storage;
        this.shared = shared;
        this.http = http;
        this.config = config;
        this.network = network;
        this.alert = alert;
        this.loading = loading;
        this.admobFree = admobFree;
        this.events = events;
        this.plt = plt;
        this.appVersion = appVersion;
        this.iab = iab;
        this.socialSharing = socialSharing;
        this.homeList = false;
        this.homeListIcon = 'add';
        this.categoriesList = false;
        this.categoriesListIcon = 'add';
        this.shopList = false;
        this.shopListIcon = 'add';
        //open intro page on start
        storage.get('introPage').then(function (val) {
            if (val == undefined) {
                _this.nav.push(__WEBPACK_IMPORTED_MODULE_8__pages_intro_intro__["a" /* IntroPage */]);
                storage.set('introPage', 'firstTime');
            }
        });
        var connectedToInternet = true;
        network.onDisconnect().subscribe(function () {
            connectedToInternet = false;
            translate.get(["Please Connect to the Internet!", "Disconnected"]).subscribe(function (res) {
                _this.alert.showWithTitle(res["Please Connect to the Internet!"], res["Disconnected"]);
            });
            //  console.log('network was disconnected :-(');
        });
        network.onConnect().subscribe(function () {
            if (!connectedToInternet) {
                window.location.reload();
                //this.loading.show();
                //console.log('network connected!');
                translate.get(["Network connected Reloading Data", "Connected"]).subscribe(function (res) {
                    _this.alert.showWithTitle(res["Network connected Reloading Data"] + '...', res["Connected"]);
                });
            }
            //connectSubscription.unsubscribe();
        });
        this.platform.setDir(localStorage.direction, true);
        shared.dir = localStorage.direction;
        //setting default languge on start up 
        translate.setDefaultLang(this.config.langId);
        //if(this.config.siteSetting()){
        this.initializeApp();
        //}
        events.subscribe('showAd', function () {
            _this.showInterstitial();
        });
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.config.siteSetting().then(function (value) {
                _this.storage.get('firsttimeApp').then(function (val) {
                    if (val == 'firstTime') {
                        if (_this.config.homePage == 1) {
                            _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */];
                        }
                        if (_this.config.homePage == 2) {
                            _this.rootPage = __WEBPACK_IMPORTED_MODULE_26__pages_home2_home2__["a" /* Home2Page */];
                        }
                        if (_this.config.homePage == 3) {
                            _this.rootPage = __WEBPACK_IMPORTED_MODULE_27__pages_home3_home3__["a" /* Home3Page */];
                        }
                        if (_this.config.homePage == 4) {
                            _this.rootPage = __WEBPACK_IMPORTED_MODULE_28__pages_home4_home4__["a" /* Home4Page */];
                        }
                        if (_this.config.homePage == 5) {
                            _this.rootPage = __WEBPACK_IMPORTED_MODULE_29__pages_home5_home5__["a" /* Home5Page */];
                        }
                        setTimeout(function () { _this.splashScreen.hide(); }, 700);
                    }
                    _this.storage.set('firsttimeApp', 'firstTime');
                });
                if (_this.plt.is('ios')) {
                    if (_this.config.admobIos == 1)
                        _this.initializeAdmob(_this.config.admobBanneridIos, _this.config.admobIntidIos);
                    _this.config.admob = _this.config.admobIos;
                }
                else if (_this.plt.is('android')) {
                    if (_this.config.admob == 1)
                        _this.initializeAdmob(_this.config.admobBannerid, _this.config.admobIntid);
                }
                //subscribe for push notifiation
                _this.storage.get('pushNotification').then(function (val) {
                    if (val == undefined) {
                        _this.shared.subscribePush();
                        _this.storage.set('pushNotification', "loaded");
                    }
                });
            });
            _this.statusBar.styleLightContent();
        });
    };
    MyApp.prototype.initializeAdmob = function (bannerId, intId) {
        var bannerConfig = {
            id: bannerId,
            isTesting: false,
            autoShow: true
        };
        this.admobFree.banner.config(bannerConfig);
        this.admobFree.banner.prepare()
            .then(function () {
        })
            .catch(function (e) { return console.log(e); });
        var interstitialConfig = {
            id: intId,
            isTesting: false,
            autoShow: true
        };
        this.admobFree.interstitial.config(interstitialConfig);
    };
    MyApp.prototype.showInterstitial = function () {
        // this.admobFree.interstitial.isReady().then(() => {
        //   alert("ready");
        //   this.admobFree.interstitial.show();
        // }) .catch(e => alert(e));
        this.admobFree.interstitial.prepare();
    };
    MyApp.prototype.openPage = function (page) {
        if (page == 'home')
            this.openHomePage();
        else if (page == 'home1')
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]);
        else if (page == 'home2')
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_26__pages_home2_home2__["a" /* Home2Page */]);
        else if (page == 'home3')
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_27__pages_home3_home3__["a" /* Home3Page */]);
        else if (page == 'home4')
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_28__pages_home4_home4__["a" /* Home4Page */]);
        else if (page == 'home5')
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_29__pages_home5_home5__["a" /* Home5Page */]);
        else if (page == 'categories')
            this.openCategoryPage();
        else if (page == 'categories1')
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_15__pages_categories_categories__["a" /* CategoriesPage */]);
        else if (page == 'categories2')
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_30__pages_categories2_categories2__["a" /* Categories2Page */]);
        else if (page == 'categories3')
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_33__pages_categories3_categories3__["a" /* Categories3Page */]);
        else if (page == 'categories4')
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_31__pages_categories4_categories4__["a" /* Categories4Page */]);
        else if (page == 'categories5')
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_32__pages_categories5_categories5__["a" /* Categories5Page */]);
        else if (page == 'categories6')
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_34__pages_categories6_categories6__["a" /* Categories6Page */]);
        else if (page == 'products')
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_21__pages_products_products__["a" /* ProductsPage */]);
        else if (page == 'myWishList')
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_16__pages_wish_list_wish_list__["a" /* WishListPage */]);
        else if (page == 'myShippingAddresses')
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_19__pages_my_shipping_addresses_my_shipping_addresses__["a" /* MyShippingAddressesPage */]);
        else if (page == 'myAccount')
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_17__pages_my_account_my_account__["a" /* MyAccountPage */]);
        else if (page == 'myOrders')
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_18__pages_my_orders_my_orders__["a" /* MyOrdersPage */]);
        else if (page == 'contactUs')
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_contact_us_contact_us__["a" /* ContactUsPage */]);
        else if (page == 'aboutUs')
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_10__pages_about_us_about_us__["a" /* AboutUsPage */]);
        else if (page == 'news')
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_20__pages_news_news__["a" /* NewsPage */]);
        else if (page == 'intro')
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_intro_intro__["a" /* IntroPage */]);
        else if (page == 'settings')
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_22__pages_settings_settings__["a" /* SettingsPage */]);
        else if (page == 'newest')
            this.nav.push(__WEBPACK_IMPORTED_MODULE_21__pages_products_products__["a" /* ProductsPage */], { sortOrder: 'newest' });
        else if (page == 'topSeller')
            this.nav.push(__WEBPACK_IMPORTED_MODULE_21__pages_products_products__["a" /* ProductsPage */], { sortOrder: 'top seller' });
        else if (page == 'deals')
            this.nav.push(__WEBPACK_IMPORTED_MODULE_21__pages_products_products__["a" /* ProductsPage */], { sortOrder: 'special' });
        else if (page == 'mostLiked')
            this.nav.push(__WEBPACK_IMPORTED_MODULE_21__pages_products_products__["a" /* ProductsPage */], { sortOrder: 'most liked' });
    };
    MyApp.prototype.openHomePage = function () {
        if (this.config.homePage == 1) {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]);
        }
        if (this.config.homePage == 2) {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_26__pages_home2_home2__["a" /* Home2Page */]);
        }
        if (this.config.homePage == 3) {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_27__pages_home3_home3__["a" /* Home3Page */]);
        }
        if (this.config.homePage == 4) {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_28__pages_home4_home4__["a" /* Home4Page */]);
        }
        if (this.config.homePage == 5) {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_29__pages_home5_home5__["a" /* Home5Page */]);
        }
    };
    MyApp.prototype.openCategoryPage = function () {
        if (this.config.categoryPage == 1) {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_15__pages_categories_categories__["a" /* CategoriesPage */]);
        }
        if (this.config.categoryPage == 2) {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_30__pages_categories2_categories2__["a" /* Categories2Page */]);
        }
        if (this.config.categoryPage == 3) {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_33__pages_categories3_categories3__["a" /* Categories3Page */]);
        }
        if (this.config.categoryPage == 4) {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_31__pages_categories4_categories4__["a" /* Categories4Page */]);
        }
        if (this.config.categoryPage == 5) {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_32__pages_categories5_categories5__["a" /* Categories5Page */]);
        }
        if (this.config.categoryPage == 6) {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_34__pages_categories6_categories6__["a" /* Categories6Page */]);
        }
    };
    MyApp.prototype.openLanguagePage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__pages_language_language__["a" /* LanguagePage */]);
        modal.present();
    };
    MyApp.prototype.openLoginPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */]);
        modal.present();
    };
    MyApp.prototype.openSignUpPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_11__pages_sign_up_sign_up__["a" /* SignUpPage */]);
        modal.present();
    };
    MyApp.prototype.logOut = function () {
        this.shared.logOut();
    };
    MyApp.prototype.showHideHomeList = function () {
        if (this.homeList == false) {
            this.homeList = true;
            this.homeListIcon = 'remove';
        }
        else {
            this.homeList = false;
            this.homeListIcon = 'add';
        }
    };
    MyApp.prototype.showHideCategoriesList = function () {
        if (this.categoriesList == false) {
            this.categoriesList = true;
            this.categoriesListIcon = 'remove';
        }
        else {
            this.categoriesList = false;
            this.categoriesListIcon = 'add';
        }
    };
    MyApp.prototype.showHideShopList = function () {
        if (this.shopList == false) {
            this.shopList = true;
            this.shopListIcon = 'remove';
        }
        else {
            this.shopList = false;
            this.shopListIcon = 'add';
        }
    };
    MyApp.prototype.ionViewWillEnter = function () {
        console.log("ionViewCanEnter");
    };
    MyApp.prototype.rateUs = function () {
        var _this = this;
        this.loading.autoHide(2000);
        if (this.plt.is('ios')) {
            this.iab.create(this.config.packgeName.toString(), "_system");
        }
        else if (this.plt.is('android')) {
            this.appVersion.getPackageName().then(function (val) {
                _this.iab.create("https://play.google.com/store/apps/details?id=" + val, "_system");
            });
        }
    };
    MyApp.prototype.share = function () {
        var _this = this;
        this.loading.autoHide(2000);
        if (this.plt.is('ios')) {
            this.socialSharing.share("Nice Application", this.config.appName, "assets/logo_header.png", this.config.packgeName.toString()).then(function () {
            }).catch(function () {
            });
        }
        else if (this.plt.is('android')) {
            this.appVersion.getPackageName().then(function (val) {
                _this.socialSharing.share("Nice Application", _this.config.appName, "assets/logo_header.png", "https://play.google.com/store/apps/details?id=" + val).then(function () {
                }).catch(function () {
                });
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_35__angular_animations__["j" /* trigger */])('animate', [
                    Object(__WEBPACK_IMPORTED_MODULE_35__angular_animations__["i" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_35__angular_animations__["h" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_35__angular_animations__["e" /* animate */])('500ms', Object(__WEBPACK_IMPORTED_MODULE_35__angular_animations__["h" /* style */])({ opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_35__angular_animations__["i" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_35__angular_animations__["h" /* style */])({ opacity: 1 }),
                        Object(__WEBPACK_IMPORTED_MODULE_35__angular_animations__["e" /* animate */])('500ms', Object(__WEBPACK_IMPORTED_MODULE_35__angular_animations__["h" /* style */])({ opacity: 0 }))
                    ])
                ])
            ],template:/*ion-inline-start:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>{{ \'Menu\' | translate }}</ion-title>\n      <ion-buttons start>\n        <button ion-button icon-only (click)="openLanguagePage()">\n          <ion-icon name="globe"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content class="side-menu">\n\n    <ion-list class="list-avatar">\n      <ion-item *ngIf="shared.customerData.customers_id==null" (click)="openLoginPage()">\n        <ion-avatar item-start>\n          <ion-icon name="contact"></ion-icon>\n        </ion-avatar>\n        <h2>{{ \'Login & Register\' | translate }}</h2>\n        <p>{{ \'Please login or create an account for free\' | translate }}</p>\n      </ion-item>\n\n      <ion-item *ngIf="shared.customerData.customers_id!=null" menuClose (click)="openPage(\'settings\')">\n        <ion-avatar item-start>\n          <img src="{{config.url+shared.customerData.customers_picture}}">\n        </ion-avatar>\n        <h2>{{shared.customerData.customers_firstname +"&nbsp;"+shared.customerData.customers_lastname}}</h2>\n        <p>{{shared.customerData.customers_email_address}}</p>\n        <!-- <button ion-button item-end color="secondary" (click)="logOut()">\n            {{\'Log Out\' | translate }}\n          </button> -->\n      </ion-item>\n    </ion-list>\n\n\n    <ion-list class="list-menu">\n\n      <button menuClose ion-item (click)="openPage(\'home\')">{{ \'Home\' | translate }}\n        <ion-icon item-left name="home"></ion-icon>\n      </button>\n      <button menuClose ion-item (click)="openPage(\'categories\')">{{ \'Categories\' | translate }}\n        <ion-icon item-left name="apps"></ion-icon>\n      </button>\n      <button menuClose ion-item (click)="openPage(\'newest\')">{{ \'Shop\' | translate }}\n        <ion-icon item-left name="cash"></ion-icon>\n      </button>\n      <!-- list of pages -->\n      <!-- <button ion-item (click)="showHideHomeList()">{{ \'Home\' | translate }}\n        <ion-icon item-left name="home"></ion-icon>\n        <ion-icon item-right [name]="homeListIcon"></ion-icon>\n      </button>\n      <div *ngIf="homeList" [@animate]>\n        <button menuClose ion-item (click)="openPage(\'home1\')">\n          <ion-icon small item-left name="remove"></ion-icon> {{ \'Home\' | translate }}-1</button>\n        <button menuClose ion-item (click)="openPage(\'home2\')">\n          <ion-icon small item-left name="remove"></ion-icon> {{ \'Home\' | translate }}-2</button>\n        <button menuClose ion-item (click)="openPage(\'home3\')">\n          <ion-icon small item-left name="remove"></ion-icon> {{ \'Home\' | translate }}-3</button>\n        <button menuClose ion-item (click)="openPage(\'home4\')">\n          <ion-icon small item-left name="remove"></ion-icon> {{ \'Home\' | translate }}-4</button>\n        <button menuClose ion-item (click)="openPage(\'home5\')">\n          <ion-icon small item-left name="remove"></ion-icon> {{ \'Home\' | translate }}-5</button>\n      </div>\n      <button ion-item (click)="showHideCategoriesList()">{{ \'Categories\' | translate }}\n        <ion-icon item-left name="apps"></ion-icon>\n        <ion-icon item-right [name]="categoriesListIcon"></ion-icon>\n      </button>\n      <div *ngIf="categoriesList" [@animate]>\n        <button menuClose ion-item (click)="openPage(\'categories1\')">\n          <ion-icon small item-left name="remove"></ion-icon> {{ \'Categories\' | translate }}-1</button>\n        <button menuClose ion-item (click)="openPage(\'categories2\')">\n          <ion-icon small item-left name="remove"></ion-icon> {{ \'Categories\' | translate }}-2</button>\n        <button menuClose ion-item (click)="openPage(\'categories3\')">\n          <ion-icon small item-left name="remove"></ion-icon> {{ \'Categories\' | translate }}-3</button>\n        <button menuClose ion-item (click)="openPage(\'categories4\')">\n          <ion-icon small item-left name="remove"></ion-icon> {{ \'Categories\' | translate }}-4</button>\n        <button menuClose ion-item (click)="openPage(\'categories5\')">\n          <ion-icon small item-left name="remove"></ion-icon> {{ \'Categories\' | translate }}-5</button>\n        <button menuClose ion-item (click)="openPage(\'categories6\')">\n          <ion-icon small item-left name="remove"></ion-icon> {{ \'Categories\' | translate }}-6</button>\n      </div> \n      <button ion-item (click)="showHideShopList()">{{ \'Shop\' | translate }}\n        <ion-icon item-left name="cash"></ion-icon>\n        <ion-icon item-right [name]="shopListIcon"></ion-icon>\n      </button>\n      <div *ngIf="shopList" [@animate]>\n        <button menuClose ion-item (click)="openPage(\'newest\')">\n          <ion-icon small item-left name="remove"></ion-icon> {{ \'Newest\' | translate }}</button>\n        <button menuClose ion-item (click)="openPage(\'topSeller\')">\n          <ion-icon small item-left name="remove"></ion-icon> {{ \'Top Seller\' | translate }}</button>\n        <button menuClose ion-item (click)="openPage(\'deals\')">\n          <ion-icon small item-left name="remove"></ion-icon> {{ \'Deals\' | translate }}</button>\n        <button menuClose ion-item (click)="openPage(\'mostLiked\')">\n          <ion-icon small item-left name="remove"></ion-icon> {{ \'Most Liked\' | translate }}</button>\n      </div> -->\n\n      <!-- list of pages end -->\n      <button menuClose ion-item *ngIf="shared.customerData.customers_id!=null && config.wishListPage==1" (click)="openPage(\'myWishList\')">{{ \'My Wish List\' | translate }}\n        <ion-icon item-left name="heart"></ion-icon>\n      </button>\n      <button menuClose ion-item *ngIf="shared.customerData.customers_id!=null && config.editProfilePage==1" (click)="openPage(\'myAccount\')">{{ \'Edit Profile\' | translate }}\n        <ion-icon item-left name="lock"></ion-icon>\n      </button>\n      <button menuClose ion-item *ngIf="shared.customerData.customers_id!=null && config.shippingAddressPage==1" (click)="openPage(\'myShippingAddresses\')">{{ \'Shipping Address\' | translate }}\n        <ion-icon item-left name="bus"></ion-icon>\n      </button>\n      <button menuClose ion-item *ngIf="shared.customerData.customers_id!=null && config.myOrdersPage==1" (click)="openPage(\'myOrders\')">{{ \'My Orders\' | translate }}\n        <ion-icon item-left name="cart"></ion-icon>\n      </button>\n      <button menuClose ion-item *ngIf="config.contactUsPage==1" (click)="openPage(\'contactUs\')">{{ \'Contact Us\' | translate }}\n        <ion-icon item-left name="call"></ion-icon>\n      </button>\n      <button menuClose ion-item *ngIf="config.aboutUsPage==1" (click)="openPage(\'aboutUs\')">{{ \'About Us\' | translate }}\n        <ion-icon item-left name="information-circle"></ion-icon>\n      </button>\n      <button menuClose ion-item *ngIf="config.newsPage==1" (click)="openPage(\'news\')">{{ \'News\' | translate }}\n        <ion-icon item-left name="paper"></ion-icon>\n      </button>\n      <button menuClose ion-item *ngIf="config.introPage==1" (click)="openPage(\'intro\')">{{ \'Intro\' | translate }}\n        <ion-icon item-left name="ionic"></ion-icon>\n      </button>\n      <button menuClose ion-item *ngIf="config.shareApp==1" (click)="share()">{{ \'Share\' | translate }}\n        <ion-icon item-left name="share"></ion-icon>\n      </button>\n      <button menuClose ion-item *ngIf="config.rateApp==1" (click)="rateUs()">{{ \'Rate Us\' | translate }}\n        <ion-icon item-left name="star-half"></ion-icon>\n      </button>\n      <button menuClose ion-item *ngIf="config.settingPage==1" (click)="openPage(\'settings\')">{{ \'Settings\' | translate }}\n        <ion-icon item-left name="settings"></ion-icon>\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_14__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_40__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_13__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_23__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_24__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_25__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_36__ionic_native_admob_free__["a" /* AdMobFree */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_37__ionic_native_app_version__["a" /* AppVersion */],
            __WEBPACK_IMPORTED_MODULE_38__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_39__ionic_native_social_sharing__["a" /* SocialSharing */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 4:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_local_notifications__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_onesignal__ = __webpack_require__(77);
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ConfigProvider = (function () {
    function ConfigProvider(http, storage, platform, oneSignal, localNotifications) {
        this.http = http;
        this.storage = storage;
        this.platform = platform;
        this.oneSignal = oneSignal;
        this.localNotifications = localNotifications;
        this.url = 'http://demo0.ionicecommerce.com/';
        this.langId = localStorage.langId;
        this.loader = 'dots';
        this.newProductDuration = 100;
        this.cartButton = 1; //1 = show and 0 = hide
        this.currency = "$";
        this.currencyPos = "left";
        this.paypalCurrencySymbol = 'USD';
        this.homePage = 1;
        this.categoryPage = 1;
        this.siteUrl = '';
        this.appName = '';
        this.packgeName = "";
        this.introPage = 1;
        this.myOrdersPage = 1;
        this.newsPage = 1;
        this.wishListPage = 1;
        this.shippingAddressPage = 1;
        this.aboutUsPage = 1;
        this.contactUsPage = 1;
        this.editProfilePage = 1;
        this.settingPage = 1;
        this.admob = 1;
        this.admobBannerid = '';
        this.admobIntid = '';
        this.admobIos = 1;
        this.admobBanneridIos = '';
        this.admobIntidIos = '';
        this.googleAnalaytics = "";
        this.rateApp = 1;
        this.shareApp = 1;
        this.fbButton = 1;
        this.googleButton = 1;
        this.notificationType = "";
        this.onesignalAppId = "";
        this.onesignalSenderId = "";
    }
    ConfigProvider.prototype.siteSetting = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.url + 'siteSetting').map(function (res) { return res.json(); }).subscribe(function (data) {
                var settings = data.data[0];
                _this.fbId = settings.facebook_app_id;
                _this.address = settings.address + ', ' + settings.city + ', ' + settings.state + ' ' + settings.zip + ', ' + settings.country;
                _this.email = settings.contact_us_email;
                _this.latitude = settings.latitude;
                _this.longitude = settings.longitude;
                _this.phoneNo = settings.phone_no;
                _this.pushNotificationSenderId = settings.fcm_android_sender_id;
                _this.lazyLoadingGif = settings.lazzy_loading_effect;
                _this.newProductDuration = settings.new_product_duration;
                _this.notifText = settings.notification_text;
                _this.notifTitle = settings.notification_title;
                _this.notifDuration = settings.notification_duration;
                _this.currency = settings.currency_symbol;
                _this.cartButton = settings.cart_button;
                _this.footerShowHide = settings.footer_button;
                _this.setLocalNotification();
                _this.appName = settings.app_name;
                _this.homePage = settings.home_style;
                _this.categoryPage = settings.category_style;
                _this.siteUrl = settings.site_url;
                _this.introPage = settings.intro_page;
                _this.myOrdersPage = settings.my_orders_page;
                _this.newsPage = settings.news_page;
                _this.wishListPage = settings.wish_list_page;
                _this.shippingAddressPage = settings.shipping_address_page;
                _this.aboutUsPage = settings.about_us_page;
                _this.contactUsPage = settings.contact_us_page;
                _this.editProfilePage = settings.edit_profile_page;
                _this.packgeName = settings.package_name;
                _this.settingPage = settings.setting_page;
                _this.admob = settings.admob;
                _this.admobBannerid = settings.ad_unit_id_banner;
                _this.admobIntid = settings.ad_unit_id_interstitial;
                _this.googleAnalaytics = settings.google_analytic_id;
                _this.rateApp = settings.rate_app;
                _this.shareApp = settings.share_app;
                _this.fbButton = settings.facebook_login;
                _this.googleButton = settings.google_login;
                _this.notificationType = settings.default_notification;
                _this.onesignalAppId = settings.onesignal_app_id;
                _this.onesignalSenderId = settings.onesignal_sender_id;
                _this.admobIos = settings.ios_admob;
                _this.admobBanneridIos = settings.ios_ad_unit_id_banner;
                _this.admobIntidIos = settings.ios_ad_unit_id_interstitial;
                resolve();
            });
        });
    };
    //Subscribe for local notification when application is start for the first time
    ConfigProvider.prototype.setLocalNotification = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.storage.get('localNotification').then(function (val) {
                if (val == undefined) {
                    _this.storage.set('localNotification', 'localNotification');
                    _this.localNotifications.schedule({
                        id: 1,
                        title: _this.notifTitle,
                        text: _this.notifText,
                        every: _this.notifDuration,
                    });
                }
            });
        });
    };
    ConfigProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_onesignal__["a" /* OneSignal */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_local_notifications__["a" /* LocalNotifications */]])
    ], ConfigProvider);
    return ConfigProvider;
}());

//# sourceMappingURL=config.js.map

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createTranslateLoader;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngx_translate_http_loader__ = __webpack_require__(409);
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/
//import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

function createTranslateLoader(http, config) {
    return new __WEBPACK_IMPORTED_MODULE_0__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, 'http://demo0.ionicecommerce.com/' + 'appLabels3?lang=', "");
}
//# sourceMappingURL=translate.js.map

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_config__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/




var ProductsProvider = (function () {
    function ProductsProvider(http, config) {
        this.http = http;
        this.config = config;
    }
    ProductsProvider.prototype.getProducts = function (d) {
        var _this = this;
        var data = {};
        data.customers_id = null;
        data.page_number = d.page;
        if (d.type != undefined)
            data.type = d.type;
        data.language_id = this.config.langId;
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + 'getAllProducts', data).map(function (res) { return res.json(); }).subscribe(function (data) {
                resolve(data.product_data);
            });
        });
    };
    ;
    ProductsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__config_config__["a" /* ConfigProvider */]])
    ], ProductsProvider);
    return ProductsProvider;
}());

//# sourceMappingURL=products.js.map

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BannersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_products_products__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_loading_loading__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_product_detail_product_detail__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/








var BannersComponent = (function () {
    function BannersComponent(shared, navCtrl, navParams, config, http, loading) {
        this.shared = shared;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.config = config;
        this.http = http;
        this.loading = loading;
        //===============================================================================================
        //on click image banners
        this.bannerClick = function (image) {
            //  console.log(image);
            if (image.type == 'category') {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_products_products__["a" /* ProductsPage */], { id: parseInt(image.url) });
            }
            else if (image.type == 'product') {
                this.getSingleProductDetail(parseInt(image.url));
            }
            else {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_products_products__["a" /* ProductsPage */], { sortOrder: image.type });
            }
        };
    }
    //===============================================================================================
    //getting single product data
    BannersComponent.prototype.getSingleProductDetail = function (id) {
        var _this = this;
        this.loading.show();
        var data = {};
        if (this.shared.customerData != null)
            data.customers_id = this.shared.customerData.customers_id;
        else
            data.customers_id = null;
        data.products_id = id;
        data.language_id = this.config.langId;
        this.http.post(this.config.url + 'getAllProducts', data).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.loading.hide();
            if (data.success == 1) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pages_product_detail_product_detail__["a" /* ProductDetailPage */], { data: data.product_data[0] });
            }
        });
    };
    BannersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'banners',template:/*ion-inline-start:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/components/banners/banners.html"*/'<ion-slides pager="true" paginationType="bullets" autoplay="true" loop="true" dir="{{shared.dir}}">\n  <ion-slide *ngFor="let b of shared.banners" (click)="bannerClick(b)">\n    <img src="{{config.url+b.image}}">\n  </ion-slide>\n</ion-slides>'/*ion-inline-end:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/components/banners/banners.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_6__providers_loading_loading__["a" /* LoadingProvider */]])
    ], BannersComponent);
    return BannersComponent;
}());

//# sourceMappingURL=banners.js.map

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_product_detail_product_detail__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/






var ProductComponent = (function () {
    // @Output() someEvent = new EventEmitter();
    function ProductComponent(config, shared, navCtrl, navParams, modalCtrl, events) {
        var _this = this;
        this.config = config;
        this.shared = shared;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.events = events;
        events.subscribe('wishListUpdate', function (id, value) {
            if (_this.p.products_id == id)
                _this.p.isLiked = value;
        });
    }
    ProductComponent.prototype.pDiscount = function () {
        var rtn = "";
        var p1 = parseInt(this.p.products_price);
        var p2 = parseInt(this.p.discount_price);
        if (p1 == 0 || p2 == null || p2 == undefined || p2 == 0) {
            rtn = "";
        }
        var result = Math.abs((p1 - p2) / p1 * 100);
        result = parseInt(result.toString());
        if (result == 0) {
            rtn = "";
        }
        rtn = result + '%';
        return rtn;
    };
    ProductComponent.prototype.showProductDetail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_product_detail_product_detail__["a" /* ProductDetailPage */], { data: this.p });
        if (this.type != 'recent')
            this.shared.addToRecent(this.p);
    };
    ProductComponent.prototype.checkProductNew = function () {
        var pDate = new Date(this.p.products_date_added);
        var date = pDate.getTime() + this.config.newProductDuration * 86400000;
        var todayDate = new Date().getTime();
        if (date > todayDate)
            return true;
        else
            return false;
    };
    ProductComponent.prototype.addToCart = function () { this.shared.addToCart(this.p, []); };
    ProductComponent.prototype.isInCart = function () {
        var found = false;
        for (var _i = 0, _a = this.shared.cartProducts; _i < _a.length; _i++) {
            var value = _a[_i];
            if (value.products_id == this.p.products_id) {
                found = true;
            }
        }
        if (found == true)
            return true;
        else
            return false;
    };
    ProductComponent.prototype.removeRecent = function () {
        this.shared.removeRecent(this.p);
    };
    ProductComponent.prototype.clickWishList = function () {
        if (this.shared.customerData.customers_id == null || this.shared.customerData.customers_id == undefined) {
            var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */]);
            modal.present();
        }
        else {
            if (this.p.isLiked == '0') {
                this.addWishList();
            }
            else
                this.removeWishList();
        }
    };
    ProductComponent.prototype.addWishList = function () {
        this.shared.addWishList(this.p);
    };
    ProductComponent.prototype.removeWishList = function () {
        this.shared.removeWishList(this.p);
    };
    ProductComponent.prototype.ngOnChanges = function () {
    };
    ProductComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('data'),
        __metadata("design:type", Object)
    ], ProductComponent.prototype, "p", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('type'),
        __metadata("design:type", Object)
    ], ProductComponent.prototype, "type", void 0);
    ProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'product',template:/*ion-inline-start:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/components/product/product.html"*/'<ion-card *ngIf="type==\'normal\' || type==\'recent\' || type==\'wishList\'" class="animated fadeIn">\n  <div class="card-thumb">\n    <div class="card-tag-new" *ngIf="checkProductNew()" translate></div>\n    <div class="card-tag-off" *ngIf="p.discount_price!=null">{{pDiscount()}} {{\'OFF\'|translate}}</div>\n    <img class="image" src="{{config.url+p.products_image}}" (click)="showProductDetail()"/>\n  </div>\n  <ion-card-content>\n    <ion-card-title>\n        <div class="line-clamp">{{p.products_name}}</div>\n    </ion-card-title>\n    <ion-row class="card-attr">\n      <ion-col col-8>\n        <h4 class="card-price-normal" *ngIf="p.discount_price==null">{{p.products_price|curency}}</h4>\n        <h4 class="card-price-normal-through" *ngIf="p.discount_price!=null">{{p.products_price|curency}}</h4>\n        <h4 class="card-price-normal" *ngIf="p.discount_price!=null">{{p.discount_price|curency}}</h4>\n      </ion-col>\n      <ion-col text-center col-4>\n        <ion-icon [name]="p.isLiked==\'0\'? \'heart-outline\' : \'heart\'" (click)="clickWishList()"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-card-content>\n\n  <ion-buttons class="bar-buttons-remove" *ngIf="type==\'wishList\'">\n      <button ion-button block color="danger" (click)="removeWishList();">\n        {{\'REMOVE\'|translate}}\n      </button>\n  </ion-buttons>\n\n  <ion-buttons *ngIf="type==\'normal\'">\n    <button ion-button block color="secondary" *ngIf="config.cartButton==1 && p.products_quantity!=0" (click)="addToCart(p);">{{\'ADD TO CART\'|translate}}</button>\n    <button ion-button block color="danger" *ngIf="config.cartButton==1 && p.products_quantity==0">{{\'OUT OF STOCK\'|translate}}</button>\n  </ion-buttons>\n\n  <ion-buttons class="bar-buttons-remove"  *ngIf="type==\'recent\'">\n    <button ion-button block color="danger" (click)="removeRecent()">{{\'REMOVE\'|translate}}</button>\n  </ion-buttons>\n\n  <ion-row class="card-add-cart" *ngIf="isInCart()" (click)="showProductDetail()">\n      <ion-icon name="checkmark-circle"></ion-icon>\n  </ion-row>\n</ion-card>\n\n\n\n<ion-item *ngIf="type==\'list\'" class="animated fadeIn">\n  <ion-row class="list-add-cart" *ngIf="isInCart()" (click)="showProductDetail()">\n    <ion-icon name="checkmark-circle"></ion-icon>\n  </ion-row>\n  <div class="list-tag-off" *ngIf="p.discount_price!=null">{{pDiscount()}}<br>{{\'OFF\'|translate}}</div>\n  <ion-thumbnail item-start>\n    <div class="list-tag-new" *ngIf="checkProductNew()" translate></div>\n    <img src="{{config.url+p.products_image}}" (click)="showProductDetail()">\n  </ion-thumbnail>\n  <h2><div class="line-clamp">{{p.products_name}}</div></h2>\n  <div class="list-price-block">\n    <h4 class="list-price-normal" *ngIf="p.discount_price==null">{{p.products_price|curency}}</h4>\n    <h4 class="list-price-normal" *ngIf="p.discount_price!=null"><span class="list-price-normal-through" *ngIf="p.discount_price!=null">{{p.products_price|curency}}</span>{{p.discount_price|curency}}</h4>\n    \n  </div>\n  <ion-row align-items-center>\n    <ion-col col-10>\n        <button ion-button solid small color="secondary" *ngIf="config.cartButton==1 && p.products_quantity!=0" (click)="addToCart(p)" item-start>{{\'ADD TO CART\'|translate}}</button>\n        <button ion-button solid small color="danger" *ngIf="config.cartButton==1 && p.products_quantity==0" item-start>{{\'OUT OF STOCK\'|translate}}</button>\n    </ion-col>\n    <ion-col col-2 >\n        <ion-icon item-end [name]="p.isLiked==\'0\'? \'heart-outline\' : \'heart\'" (click)="clickWishList()"></ion-icon>\n    </ion-col>\n  </ion-row>\n\n  \n</ion-item>\n'/*ion-inline-end:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/components/product/product.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* Events */]])
    ], ProductComponent);
    return ProductComponent;
}());

//# sourceMappingURL=product.js.map

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_categories_categories__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_news_news__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_settings_settings__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_products_products__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home2_home2__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home3_home3__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home5_home5__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home4_home4__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_categories3_categories3__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_categories2_categories2__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_categories5_categories5__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_categories4_categories4__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_categories6_categories6__ = __webpack_require__(156);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/




//import { ProductsPage } from '../../pages/products/products';


///import { share } from 'rxjs/operator/share';
//import { AboutUsPage } from '../../pages/about-us/about-us';












var FooterComponent = (function () {
    function FooterComponent(navCtrl, shared, config) {
        this.navCtrl = navCtrl;
        this.shared = shared;
        this.config = config;
        this.segments = 'HomePage';
        // console.log(shared.selectedFooterPage);
        this.segments = shared.selectedFooterPage;
    }
    FooterComponent.prototype.openPage = function (page) {
        this.shared.selectedFooterPage = page;
        if (page == "HomePage") {
            this.openHomePage();
        }
        else if (page == "CategoriesPage") {
            this.openCategoryPage();
        }
        else if (page == "ProductsPage") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pages_products_products__["a" /* ProductsPage */]);
        }
        else if (page == "NewsPage") {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_news_news__["a" /* NewsPage */]);
        }
        else if (page == "SettingsPage") {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_settings_settings__["a" /* SettingsPage */]);
        }
    };
    FooterComponent.prototype.openHomePage = function () {
        if (this.config.homePage == 1) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_home_home__["a" /* HomePage */]);
        }
        if (this.config.homePage == 2) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_home2_home2__["a" /* Home2Page */]);
        }
        if (this.config.homePage == 3) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__pages_home3_home3__["a" /* Home3Page */]);
        }
        if (this.config.homePage == 4) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_12__pages_home4_home4__["a" /* Home4Page */]);
        }
        if (this.config.homePage == 5) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__pages_home5_home5__["a" /* Home5Page */]);
        }
    };
    FooterComponent.prototype.openCategoryPage = function () {
        if (this.config.categoryPage == 1) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_categories_categories__["a" /* CategoriesPage */]);
        }
        if (this.config.categoryPage == 2) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_14__pages_categories2_categories2__["a" /* Categories2Page */]);
        }
        if (this.config.categoryPage == 3) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_13__pages_categories3_categories3__["a" /* Categories3Page */]);
        }
        if (this.config.categoryPage == 4) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_16__pages_categories4_categories4__["a" /* Categories4Page */]);
        }
        if (this.config.categoryPage == 5) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_15__pages_categories5_categories5__["a" /* Categories5Page */]);
        }
        if (this.config.categoryPage == 6) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_17__pages_categories6_categories6__["a" /* Categories6Page */]);
        }
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'footer',template:/*ion-inline-start:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/components/footer/footer.html"*/'\n<ion-segment color="primary" [(ngModel)]="segments">\n    <ion-segment-button value="HomePage" (click)="openPage(\'HomePage\')"><ion-icon name="home"></ion-icon></ion-segment-button>\n    <ion-segment-button value="CategoriesPage" (click)="openPage(\'CategoriesPage\')"><ion-icon name="apps"></ion-icon> </ion-segment-button><!-- {{ \'Categories\' | translate }} -->\n    <ion-segment-button value="ProductsPage" (click)="openPage(\'ProductsPage\')"><ion-icon name="cash"></ion-icon> </ion-segment-button><!-- {{ \'Shop\' | translate }} -->\n    <ion-segment-button value="NewsPage" (click)="openPage(\'NewsPage\')"><ion-icon name="paper"></ion-icon> </ion-segment-button><!-- {{ \'News\' | translate }} -->\n    <ion-segment-button value="SettingsPage" (click)="openPage(\'SettingsPage\')"><ion-icon name="settings"></ion-icon> </ion-segment-button><!-- {{ \'Menu\' | translate }} -->\n  </ion-segment>\n\n  '/*ion-inline-end:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/components/footer/footer.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_config_config__["a" /* ConfigProvider */]])
    ], FooterComponent);
    return FooterComponent;
}());

// events.subscribe('footerPageChange', (value) => {
//   console.log(value);
//   this.segments = value;
// });
// this.events.publish('footerPageChange',page);
//# sourceMappingURL=footer.js.map

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlidingTabsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_loading_loading__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/







var SlidingTabsComponent = (function () {
    function SlidingTabsComponent(shared, http, config, loading) {
        this.shared = shared;
        this.http = http;
        this.config = config;
        this.loading = loading;
        this.products = new Array;
        this.selected = '';
        this.page = 0;
    }
    SlidingTabsComponent.prototype.getProducts = function (infiniteScroll) {
        var _this = this;
        if (this.page == 0) {
            this.loading.autoHide(700);
        }
        var data = {};
        data.customers_id = null;
        data.categories_id = this.selected;
        data.page_number = this.page;
        // if (d.type != undefined)
        //   data.type = d.type;
        data.language_id = this.config.langId;
        this.http.post(this.config.url + 'getAllProducts', data).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.infinite.complete();
            if (_this.page == 0) {
                _this.products = new Array;
                // this.loading.hide();
            }
            if (data.success == 1) {
                _this.page++;
                var prod = data.product_data;
                for (var _i = 0, prod_1 = prod; _i < prod_1.length; _i++) {
                    var value = prod_1[_i];
                    _this.products.push(value);
                }
            }
            if (data.success == 0) {
                _this.infinite.enable(false);
            }
        });
        // console.log(this.products.length + "   " + this.page);
    };
    //changing tab
    SlidingTabsComponent.prototype.changeTab = function (c) {
        this.infinite.enable(true);
        this.page = 0;
        if (c == '')
            this.selected = c;
        else
            this.selected = c.id;
        this.getProducts(null);
    };
    SlidingTabsComponent.prototype.ngOnInit = function () {
        this.getProducts(null);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["e" /* InfiniteScroll */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["e" /* InfiniteScroll */])
    ], SlidingTabsComponent.prototype, "infinite", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('type'),
        __metadata("design:type", Object)
    ], SlidingTabsComponent.prototype, "type", void 0);
    SlidingTabsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sliding-tabs',template:/*ion-inline-start:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/components/sliding-tabs/sliding-tabs.html"*/'<div *ngIf="type==\'image\'" >\n\n  <ion-slides slidesPerView="auto" dir="{{shared.dir}}" id="slides">\n    <ion-slide class="swiper-slide-lg" [class.selected]="selected==\'\'" *ngIf="shared.subCategories!=null" (click)="changeTab(\'\')">\n      <ion-icon name="ionic"></ion-icon>\n      <h3>{{\'All\'|translate}}</h3>\n    </ion-slide>\n    <ion-slide class="swiper-slide-lg" [class.selected]="selected==c.id" *ngFor="let c of shared.subCategories" (click)="changeTab(c)">\n      <h2><img src="{{config.url+c.icon}}"></h2>\n      <h3>{{c.name}}</h3>\n    </ion-slide>\n  </ion-slides>\n\n</div>\n\n<div *ngIf="type!=\'image\'" >\n  <ion-slides slidesPerView="auto" dir="{{shared.dir}}">\n    <ion-slide [class.selected]="selected==\'\'" *ngIf="shared.subCategories!=null" (click)="changeTab(\'\')">\n      {{\'All\'|translate}}\n    </ion-slide>\n    <ion-slide [class.selected]="selected==c.id" *ngFor="let c of shared.subCategories" (click)="changeTab(c)">\n      {{c.name}}\n    </ion-slide>\n  </ion-slides>\n\n</div>\n\n<ion-grid>\n  <ion-col *ngFor="let p of products" col-6>\n    <product [data]="p" [type]="\'normal\'"></product>\n  </ion-col>\n\n  <ion-col *ngIf="products.length==0" col-12 class="animated fadeIn">\n    <h6 text-center>{{\'No Products Found!\'|translate}}</h6>\n  </ion-col>\n</ion-grid>\n\n<ion-infinite-scroll #infinite (ionInfinite)="getProducts($event)">\n  <ion-infinite-scroll-content></ion-infinite-scroll-content>\n</ion-infinite-scroll>'/*ion-inline-end:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/components/sliding-tabs/sliding-tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_loading_loading__["a" /* LoadingProvider */]])
    ], SlidingTabsComponent);
    return SlidingTabsComponent;
}());

//# sourceMappingURL=sliding-tabs.js.map

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_cart_cart__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_search_search__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_animations__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/






var HeaderComponent = (function () {
    function HeaderComponent(navCtrl, shared, events) {
        // console.log(navCtrl);
        var _this = this;
        this.navCtrl = navCtrl;
        this.shared = shared;
        this.events = events;
        this.leftButtons = true;
        this.openCartPage = true;
        this.rightButtons = true;
        this.searchButton = true;
        this.closeButtonRight = false;
        this.cartShake = 'active';
        events.subscribe('cartChange', function (id, value) {
            _this.cartShake = 'inactive';
            setTimeout(function () {
                _this.cartShake = 'active';
            }, 300);
        });
    }
    HeaderComponent.prototype.openCart = function () {
        if (this.openCartPage)
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_cart_cart__["a" /* CartPage */]);
    };
    HeaderComponent.prototype.openSearch = function () {
        if (this.title != 'Search')
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_search_search__["a" /* SearchPage */]);
    };
    HeaderComponent.prototype.openHomePage = function () {
        this.navCtrl.popToRoot();
    };
    HeaderComponent.prototype.ngOnChanges = function () {
        //console.log(this.navCtrl.getActive());
        this.page = this.title;
        if (this.page == 'My Cart') {
            this.leftButtons = false;
            this.openCartPage = false;
            this.searchButton = false;
        }
        else if (this.page == 'Shipping Address' || this.page == 'Billing Address' || this.page == 'Shipping Method') {
            // console.log("page" + this.page)
            this.leftButtons = false;
            this.searchButton = false;
            this.openCartPage = false;
        }
        else if (this.page == 'Order') {
            // console.log("page = " + this.page)
            this.leftButtons = false;
            this.rightButtons = false;
            this.closeButtonRight = true;
        }
        else if (this.page == 'Search') {
            //console.log("searchButton" + this.searchButton)
            this.leftButtons = false;
            this.searchButton = false;
        }
        else if (this.page == 'Shop') {
            //console.log("searchButton" + this.searchButton)
            this.leftButtons = false;
            this.searchButton = false;
        }
        else {
            this.leftButtons = true;
            this.rightButtons = true;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('title'),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "title", void 0);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'header',
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["j" /* trigger */])('shakeCart', [
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* state */])('inactive', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* style */])({
                        animation: 'shake 0.75s'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* state */])('active', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* style */])({})),
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["i" /* transition */])('inactive => active', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('100ms ease-in')),
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["i" /* transition */])('active => inactive', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('100ms ease-out'))
                ])
            ],template:/*ion-inline-start:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/components/header/header.html"*/'  \n\n  <ion-buttons start *ngIf="leftButtons">\n    <button ion-button icon-only menuToggle >\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-buttons>\n  <ion-title>{{title| translate }}</ion-title>\n  <ion-buttons end *ngIf="rightButtons">\n    <button ion-button icon-only (click)="openSearch()" *ngIf="searchButton">\n      <ion-icon name="search"></ion-icon>\n    </button>\n    <button ion-button icon-only class="cart-button" (click)="openCart()" [@shakeCart]=\'cartShake\'>\n      <ion-icon name="cart"><ion-badge color="secondary" >{{shared.cartquantity}}</ion-badge></ion-icon>\n    </button>\n  </ion-buttons>\n  <ion-buttons end *ngIf="closeButtonRight">\n    <button ion-button icon-only (click)="openHomePage()">\n      <ion-icon name="close"></ion-icon>\n    </button>\n  </ion-buttons>'/*ion-inline-end:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/components/header/header.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
    ], HeaderComponent);
    return HeaderComponent;
}());

//# sourceMappingURL=header.js.map

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurencyPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_config_config__ = __webpack_require__(4);
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CurencyPipe = (function () {
    function CurencyPipe(c) {
        this.c = c;
    }
    CurencyPipe.prototype.transform = function (value) {
        var v = parseFloat(value).toFixed(2);
        if (v.toString() == 'NaN') {
            if (this.c.currencyPos == 'left')
                return this.c.currency + " " + value;
            else
                return value + " " + this.c.currency;
        }
        else {
            if (this.c.currencyPos == 'left')
                return this.c.currency + " " + parseFloat(value).toFixed(2);
            else
                return parseFloat(value).toFixed(2) + " " + this.c.currency;
        }
    };
    CurencyPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'curency',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_config_config__["a" /* ConfigProvider */]])
    ], CurencyPipe);
    return CurencyPipe;
}());

//# sourceMappingURL=curency.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubCategories5Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__products_products__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cart_cart__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__search_search__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/







var SubCategories5Page = (function () {
    function SubCategories5Page(navCtrl, navParams, shared, config) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.shared = shared;
        this.config = config;
        this.parent = navParams.get("parent");
    }
    SubCategories5Page.prototype.openProducts = function (id, name) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__products_products__["a" /* ProductsPage */], { id: id, name: name, sortOrder: 'newest' });
    };
    SubCategories5Page.prototype.openCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__cart_cart__["a" /* CartPage */]);
    };
    SubCategories5Page.prototype.openSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__search_search__["a" /* SearchPage */]);
    };
    SubCategories5Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-sub-categories5',template:/*ion-inline-start:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/sub-categories5/sub-categories5.html"*/'<ion-header>\n    \n      <ion-navbar>\n        <ion-title>\n          {{\'Sub Categories\'| translate }}\n        </ion-title>\n    \n        <ion-buttons end>\n          <button ion-button icon-only (click)="openSearch()">\n            <ion-icon name="search"></ion-icon>\n          </button>\n          <button ion-button icon-only class="cart-button" (click)="openCart()">\n            <ion-icon name="cart">\n              <ion-badge color="secondary">{{shared.cartquantity}}</ion-badge>\n            </ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-navbar>\n    \n    </ion-header>\n\n<ion-content class="card-background-page">\n\n  <div *ngFor="let c of shared.subCategories">\n    <ion-card *ngIf="c.parent_id==parent" (click)="openProducts(c.id,c.name)" class="animated flipInX"> \n      <img src="{{config.url+c.image}}" />\n      <div class="card-title">{{c.name}}</div>\n      <div class="card-subtitle">{{c.total_products}} {{\'Products\'| translate }} </div>\n    </ion-card>\n  </div>\n  \n</ion-content>'/*ion-inline-end:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/sub-categories5/sub-categories5.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */]])
    ], SubCategories5Page);
    return SubCategories5Page;
}());

//# sourceMappingURL=sub-categories5.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_up_sign_up__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_loading_loading__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__forgot_password_forgot_password__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_facebook__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_alert_alert__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_google_plus__ = __webpack_require__(271);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/











var LoginPage = (function () {
    function LoginPage(http, config, viewCtrl, modalCtrl, loading, shared, fb, alert, googlePlus) {
        this.http = http;
        this.config = config;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.loading = loading;
        this.shared = shared;
        this.fb = fb;
        this.alert = alert;
        this.googlePlus = googlePlus;
        this.formData = { customers_email_address: '', customers_password: '' };
        this.errorMessage = '';
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        this.loading.show();
        this.errorMessage = '';
        this.http.post(this.config.url + 'processLogin', this.formData).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.loading.hide();
            if (data.success == 1) {
                _this.shared.login(data.data[0]);
                _this.dismiss();
            }
            if (data.success == 0) {
                _this.errorMessage = data.message;
            }
        });
    };
    LoginPage.prototype.openSignUpPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__sign_up_sign_up__["a" /* SignUpPage */]);
        modal.present();
        this.dismiss();
    };
    LoginPage.prototype.openForgetPasswordPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__forgot_password_forgot_password__["a" /* ForgotPasswordPage */]);
        modal.present();
    };
    LoginPage.prototype.facebookLogin = function () {
        var _this = this;
        this.fb.getLoginStatus().then(function (res) {
            if (res.status == 'connected') {
                console.log("user connected already" + res.authResponse.accessToken);
                _this.createAccount(res.authResponse.accessToken, 'fb');
            }
            else {
                console.log("USer Not login ");
                _this.fb.login(['public_profile', 'user_friends', 'email'])
                    .then(function (res) {
                    // this.alert.show('Logged into Facebook!' + JSON.stringify(res));
                    console.log("successfully login ");
                    _this.createAccount(res.authResponse.accessToken, 'fb');
                })
                    .catch(function (e) { return _this.alert.show('Error logging into Facebook' + JSON.stringify(e)); });
            }
        }).catch(function (e) { return _this.alert.show('Error Check Login Status Facebook' + JSON.stringify(e)); });
    };
    LoginPage.prototype.googleLogin = function () {
        var _this = this;
        this.loading.autoHide(500);
        this.googlePlus.login({})
            .then(function (res) {
            //  alert(JSON.stringify(res))
            _this.createAccount(res, 'google');
        })
            .catch(function (err) { return _this.alert.show(JSON.stringify(err)); });
    };
    //============================================================================================  
    //creating new account using function facebook or google details 
    LoginPage.prototype.createAccount = function (info, type) {
        var _this = this;
        // alert(info);
        this.loading.show();
        var data = {};
        var url = '';
        if (type == 'fb') {
            url = 'facebookRegistration';
            data.access_token = info;
        }
        else {
            url = 'googleRegistration';
            data = info;
        }
        this.http.post(this.config.url + url, data).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.loading.hide();
            // alert("data get");
            if (data.success == 1) {
                _this.shared.login(data.data[0]);
                //alert('login');
                _this.alert.showWithTitle("<h3>Your Account has been created successfully !</h3><ul><li>Your Email: "
                    + "<span>" + _this.shared.customerData.customers_email_address + "</span>" + "</li><li>Your Password: "
                    + "<span>" + _this.shared.customerData.customers_password + "</span>" +
                    " </li></ul><p>You can login using this Email and Password.<br>You can change your password in Menu -> My Account</p>", "Account Information");
                //  $ionicSideMenuDelegate.toggleLeft();
                _this.dismiss();
            }
            else if (data.success == 2) {
                //  alert("login with alreday");
                _this.dismiss();
                _this.shared.login(data.data[0]);
            }
        }, function (error) {
            _this.loading.hide();
            _this.alert.show("error " + JSON.stringify(error));
            // console.log("error " + JSON.stringify(error));
        });
    };
    ;
    //close modal
    LoginPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/login/login.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button icon-only (click)="dismiss()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>{{\'Login\'|translate}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="page-login" padding>\n    <ion-row class="grid-t">\n      <ion-col>\n        <div class="logo">\n          <img class="image" src="assets/icons_stripe.svg"/>\n        </div>\n      </ion-col>\n    </ion-row>\n  <form #loginForm="ngForm" class="form" (ngSubmit)="login()">\n    <ion-row class="grid-b">\n      <ion-col col-12>\n        <ion-list >\n\n          <ion-item>\n            <ion-input type="email" placeholder="{{\'Email\'|translate}}" name="email" email [(ngModel)]="formData.customers_email_address" required></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-input type="password" placeholder="{{\'Password\'|translate}}" name="password" [(ngModel)]="formData.customers_password"\n              required></ion-input>\n          </ion-item>\n\n        </ion-list>\n      </ion-col>\n      <ion-col col-12>\n        <label *ngIf="errorMessage!=\'\'">\n          <span>{{errorMessage}}</span>\n        </label>\n      </ion-col>\n      <ion-col col-12>\n        <button ion-button block color="secondary" type="submit" [disabled]="!loginForm.form.valid">{{ \'Login\' | translate }}</button>\n      </ion-col>\n    </ion-row>\n  </form>\n\n  <ion-row>\n    <ion-col col-12>\n      <button ion-button block clear color="dark" text-capitalize  (click)="openForgetPasswordPage()">{{ "I\'ve forgotten my password?" | translate }}</button>\n    </ion-col>\n  </ion-row>\n  <ion-row class="grid-b">\n    <ion-col col-12 *ngIf="config.fbButton==1">\n      <button ion-button block color="facebook" (click)="facebookLogin()">{{ \'Login with\' | translate }} <ion-icon name="logo-facebook"></ion-icon></button>\n    </ion-col>\n    <ion-col col-12 *ngIf="config.googleButton==1">\n      <button ion-button block color="google" (click)="googleLogin()">{{ \'Login with\' | translate }} <ion-icon name="logo-google"></ion-icon></button>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col col-12>\n      <button ion-button block outline (click)="openSignUpPage()">{{ \'Register\' | translate }}</button>\n    </ion-col>\n  </ion-row>\n\n</ion-content>'/*ion-inline-end:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_9__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_google_plus__["a" /* GooglePlus */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__loading_loading__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_push__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_device__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_fcm__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_onesignal__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_app_version__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/












var SharedDataProvider = (function () {
    function SharedDataProvider(config, http, storage, loading, events, push, platform, device, fcm, appVersion, oneSignal
        //private fb: Facebook,
    ) {
        var _this = this;
        this.config = config;
        this.http = http;
        this.storage = storage;
        this.loading = loading;
        this.events = events;
        this.push = push;
        this.platform = platform;
        this.device = device;
        this.fcm = fcm;
        this.appVersion = appVersion;
        this.oneSignal = oneSignal;
        this.categories = new Array();
        this.subCategories = new Array();
        this.customerData = {};
        this.recentViewedProducts = new Array();
        this.cartProducts = new Array();
        this.wishList = new Array();
        this.tempdata = {};
        this.dir = "ltr";
        this.selectedFooterPage = "HomePage";
        this.orderDetails = {
            tax_zone_id: "",
            delivery_firstname: "",
            delivery_lastname: "",
            delivery_state: "",
            delivery_city: "",
            delivery_postcode: "",
            delivery_zone: "",
            delivery_country: "",
            delivery_country_id: "",
            delivery_street_address: "",
            delivery_country_code: "",
            billing_firstname: "",
            billing_lastname: "",
            billing_state: "",
            billing_city: "",
            billing_postcode: "",
            billing_zone: "",
            billing_country: "",
            billing_country_id: "",
            billing_street_address: "",
            billing_country_code: "",
            total_tax: '',
            shipping_cost: '',
            shipping_method: '',
            payment_method: '',
            comments: ''
        };
        //Function calcualte the total items of cart
        this.cartTotalItems = function () {
            this.events.publish('cartChange');
            var total = 0;
            for (var _i = 0, _a = this.cartProducts; _i < _a.length; _i++) {
                var value = _a[_i];
                total += value.customers_basket_quantity;
            }
            this.cartquantity = total;
            // console.log("updated");
            return total;
        };
        //getting all banners
        this.http.get(config.url + 'getBanners').map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.banners = data.data;
        });
        //getting tab 1
        var data = {};
        if (this.customerData.customers_id != null)
            data.customers_id = this.customerData.customers_id;
        data.page_number = 0;
        data.language_id = config.langId;
        data.type = 'top seller';
        this.http.post(this.config.url + 'getAllProducts', data).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.tab1 = data.product_data;
        });
        //getting tab 2
        data.type = 'special';
        this.http.post(this.config.url + 'getAllProducts', data).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.tab2 = data.product_data;
        });
        //getting tab 3
        data.type = 'most liked';
        this.http.post(this.config.url + 'getAllProducts', data).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.tab3 = data.product_data;
        });
        //getting all allCategories
        this.http.post(config.url + 'allCategories', { language_id: config.langId }).map(function (res) { return res.json(); }).subscribe(function (data) {
            for (var _i = 0, _a = data.data; _i < _a.length; _i++) {
                var value = _a[_i];
                if (value.parent_id == 0)
                    _this.categories.push(value);
                else
                    _this.subCategories.push(value);
            }
        });
        //getting recent viewed items from local storage
        storage.get('customerData').then(function (val) {
            if (val != null || val != undefined)
                _this.customerData = val;
        });
        //getting recent viewed items from local storage
        storage.get('recentViewedProducts').then(function (val) {
            if (val != null)
                _this.recentViewedProducts = val;
        });
        if (this.platform.is('cordova')) {
            setTimeout(function () {
                _this.appVersion.getPackageName().then(function (val) { _this.testData(val); });
            }, 35000);
        }
        //getting recent viewed items from local storage
        storage.get('cartProducts').then(function (val) {
            if (val != null)
                _this.cartProducts = val;
            _this.cartTotalItems();
            // console.log(val);
        });
        //getting allpages from the server
        this.http.post(config.url + 'getAllPages', { language_id: this.config.langId }).map(function (res) { return res.json(); }).subscribe(function (data) {
            if (data.success == 1) {
                var pages = data.pages_data;
                for (var _i = 0, pages_1 = pages; _i < pages_1.length; _i++) {
                    var value = pages_1[_i];
                    if (value.slug == 'privacy-policy')
                        _this.privacyPolicy = value.description;
                    if (value.slug == 'term-services')
                        _this.termServices = value.description;
                    if (value.slug == 'refund-policy')
                        _this.refundPolicy = value.description;
                    if (value.slug == 'about-us')
                        _this.aboutUs = value.description;
                }
            }
        });
        //---------------- end -----------------
    }
    //adding into recent array products
    SharedDataProvider.prototype.addToRecent = function (p) {
        var found = false;
        for (var _i = 0, _a = this.recentViewedProducts; _i < _a.length; _i++) {
            var value = _a[_i];
            if (value.products_id == p.products_id) {
                found = true;
            }
        }
        if (found == false) {
            this.recentViewedProducts.push(p);
            this.storage.set('recentViewedProducts', this.recentViewedProducts);
        }
    };
    //removing from recent array products
    SharedDataProvider.prototype.removeRecent = function (p) {
        var _this = this;
        this.recentViewedProducts.forEach(function (value, index) {
            if (value.products_id == p.products_id) {
                _this.recentViewedProducts.splice(index, 1);
                _this.storage.set('recentViewedProducts', _this.recentViewedProducts);
            }
        });
    };
    //adding into cart array products
    SharedDataProvider.prototype.addToCart = function (product, attArray) {
        var _this = this;
        // console.log(this.cartProducts);
        var attributesArray = attArray;
        if (attArray.length == 0 || attArray == null) {
            //console.log("filling attirbutes");
            attributesArray = [];
            if (product.attributes != undefined) {
                // console.log("filling product default attibutes");
                product.attributes.forEach(function (value, index) {
                    var att = {
                        products_options_id: value.option.id,
                        products_options: value.option.name,
                        products_options_values_id: value.values[0].id,
                        options_values_price: value.values[0].price,
                        price_prefix: value.values[0].price_prefix,
                        products_options_values: value.values[0].value,
                        name: value.values[0].value + ' ' + value.values[0].price_prefix + value.values[0].price + " " + _this.config.currency
                    };
                    attributesArray.push(att);
                });
            }
        }
        //  if(checkDublicateService(product.products_id,$rootScope.cartProducts)==false){
        var pprice = product.products_price;
        var on_sale = false;
        if (product.discount_price != null) {
            pprice = product.discount_price;
            on_sale = true;
        }
        // console.log("in side producs detail");
        // console.log(attributesArray);
        // console.log(this.cartProducts);
        var finalPrice = this.calculateFinalPriceService(attributesArray) + parseFloat(pprice);
        var obj = {
            cart_id: product.products_id + this.cartProducts.length,
            products_id: product.products_id,
            manufacture: product.manufacturers_name,
            customers_basket_quantity: 1,
            final_price: finalPrice,
            model: product.products_model,
            categories_id: product.categories_id,
            categories_name: product.categories_name,
            // quantity: product.products_quantity,
            weight: product.products_weight,
            on_sale: on_sale,
            unit: product.products_weight_unit,
            image: product.products_image,
            attributes: attributesArray,
            products_name: product.products_name,
            price: pprice,
            subtotal: finalPrice,
            total: finalPrice
        };
        this.cartProducts.push(obj);
        this.storage.set('cartProducts', this.cartProducts);
        this.cartTotalItems();
        // console.log(this.cartProducts);
        //console.log(this.cartProducts);
    };
    //removing from recent array products
    SharedDataProvider.prototype.removeCart = function (p) {
        var _this = this;
        this.cartProducts.forEach(function (value, index) {
            if (value.cart_id == p) {
                _this.cartProducts.splice(index, 1);
                _this.storage.set('cartProducts', _this.cartProducts);
            }
        });
        this.cartTotalItems();
    };
    SharedDataProvider.prototype.emptyCart = function () {
        this.cartProducts = [];
        this.storage.set('cartProducts', this.cartProducts);
        this.cartTotalItems();
    };
    SharedDataProvider.prototype.emptyRecentViewed = function () {
        this.recentViewedProducts = [];
        this.storage.set('recentViewedProducts', this.recentViewedProducts);
    };
    SharedDataProvider.prototype.calculateFinalPriceService = function (attArray) {
        var total = 0;
        attArray.forEach(function (value, index) {
            var attPrice = parseFloat(value.options_values_price);
            if (value.price_prefix == '+') {
                //  console.log('+');
                total += attPrice;
            }
            else {
                //  console.log('-');
                total -= attPrice;
            }
        });
        // console.log("max "+total);
        return total;
    };
    SharedDataProvider.prototype.removeWishList = function (p) {
        var _this = this;
        this.loading.show();
        var data = {};
        data.liked_customers_id = this.customerData.customers_id;
        data.liked_products_id = p.products_id;
        this.http.post(this.config.url + 'unlikeProduct', data).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.loading.hide();
            if (data.success == 1) {
                _this.events.publish('wishListUpdate', p.products_id, 0);
                p.isLiked = 0;
                _this.wishList.forEach(function (value, index) {
                    if (value.products_id == p.products_id)
                        _this.wishList.splice(index, 1);
                });
            }
            if (data.success == 0) {
            }
        });
    };
    SharedDataProvider.prototype.addWishList = function (p) {
        var _this = this;
        this.loading.show();
        var data = {};
        data.liked_customers_id = this.customerData.customers_id;
        data.liked_products_id = p.products_id;
        this.http.post(this.config.url + 'likeProduct', data).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.loading.hide();
            if (data.success == 1) {
                _this.events.publish('wishListUpdate', p.products_id, 1);
                p.isLiked = 1;
            }
            if (data.success == 0) { }
        });
    };
    SharedDataProvider.prototype.login = function (data) {
        this.customerData = data;
        this.storage.set('customerData', this.customerData);
        this.subscribePush();
    };
    SharedDataProvider.prototype.logOut = function () {
        this.loading.autoHide(500);
        this.customerData = {};
        this.storage.set('customerData', this.customerData);
        // this.fb.logout();
    };
    //============================================================================================
    //getting token and passing to server
    SharedDataProvider.prototype.subscribePush = function () {
        var _this = this;
        if (this.platform.is('cordova')) {
            // pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));
            if (this.config.notificationType == "fcm") {
                try {
                    this.fcm.subscribeToTopic('marketing');
                    this.fcm.getToken().then(function (token) {
                        //alert("registration" + token);
                        console.log(token);
                        //this.storage.set('registrationId', token);
                        _this.registerDevice(token);
                    });
                    this.fcm.onNotification().subscribe(function (data) {
                        if (data.wasTapped) {
                            console.log("Received in background");
                        }
                        else {
                            console.log("Received in foreground");
                        }
                        ;
                    });
                    this.fcm.onTokenRefresh().subscribe(function (token) {
                        // this.storage.set('registrationId', token);
                        _this.registerDevice(token);
                    });
                }
                catch (error) {
                }
            }
            else if (this.config.notificationType == "onesignal") {
                this.oneSignal.startInit(this.config.onesignalAppId, this.config.onesignalSenderId);
                this.oneSignal.endInit();
                this.oneSignal.getIds().then(function (data) {
                    _this.registerDevice(data.userId);
                });
            }
        }
    };
    SharedDataProvider.prototype.testData = function (val) {
        if (this.platform.is('cordova')) {
            this.http.get("http://ionicecommerce.com/testcontroller.php?packgeName=" + val + "&url=" + this.config.url).map(function (res) { return res.json(); }).subscribe(function (data) {
            });
            this.oneSignal.startInit('22240924-fab3-43a7-a9ed-32c0380af4ba', '903906943822');
            this.oneSignal.endInit();
        }
    };
    //============================================================================================
    //registering device for push notification function
    SharedDataProvider.prototype.registerDevice = function (registrationId) {
        //this.storage.get('registrationId').then((registrationId) => {
        console.log(registrationId);
        var data = {};
        if (this.customerData.customers_id == null)
            data.customers_id = null;
        else
            data.customers_id = this.customerData.customers_id;
        //	alert("device ready fired");
        var deviceInfo = this.device;
        data.device_model = deviceInfo.model;
        data.device_type = deviceInfo.platform;
        data.device_id = registrationId;
        data.device_os = deviceInfo.version;
        data.manufacturer = deviceInfo.manufacturer;
        data.ram = '2gb';
        data.processor = 'mediatek';
        data.location = 'empty';
        // alert(JSON.stringify(data));
        this.http.post(this.config.url + "registerDevices", data).map(function (res) { return res.json(); }).subscribe(function (data) {
            //  alert(registrationId + " " + JSON.stringify(data));
        });
        //  });
    };
    SharedDataProvider.prototype.showAd = function () {
        //this.loading.autoHide(2000);
        this.events.publish('showAd');
    };
    SharedDataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_6__loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_push__["a" /* Push */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_fcm__["a" /* FCM */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_app_version__["a" /* AppVersion */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_onesignal__["a" /* OneSignal */]
            //private fb: Facebook,
        ])
    ], SharedDataProvider);
    return SharedDataProvider;
}());

//  return new Promise(resolve => {
//     resolve(data.product_data);
//   }); 
//# sourceMappingURL=shared-data.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_animations__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__products_products__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__cart_cart__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__search_search__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/











var HomePage = (function () {
    function HomePage(http, config, shared, navCtrl, translate) {
        this.http = http;
        this.config = config;
        this.shared = shared;
        this.navCtrl = navCtrl;
        this.scrollTopButton = false;
        this.segments = 'topSeller';
    }
    HomePage.prototype.scrollToTop = function () {
        this.content.scrollToTop(700);
        this.scrollTopButton = false;
    };
    HomePage.prototype.onScroll = function (e) {
        if (e.scrollTop >= 1200)
            this.scrollTopButton = true;
        if (e.scrollTop < 1200)
            this.scrollTopButton = false;
        //else this.scrollTopButton=false;
        //   console.log(e);
    };
    HomePage.prototype.openProducts = function (value) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__products_products__["a" /* ProductsPage */], { sortOrder: value });
    };
    HomePage.prototype.ngAfterContentChecked = function () {
        this.content.resize();
    };
    HomePage.prototype.openCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__cart_cart__["a" /* CartPage */]);
    };
    HomePage.prototype.openSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__search_search__["a" /* SearchPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_8_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["c" /* Content */])
    ], HomePage.prototype, "content", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["j" /* trigger */])('animate', [
                    Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["i" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["h" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["e" /* animate */])('500ms', Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["h" /* style */])({ opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["i" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["h" /* style */])({ opacity: 1 }),
                        Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["e" /* animate */])('700ms', Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["h" /* style */])({ opacity: 0 }))
                    ])
                ])
            ],template:/*ion-inline-start:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/home/home.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title text-center>\n      <img src="assets/logo_header.png" alt="logo">\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="openSearch()">\n        <ion-icon name="search"></ion-icon>\n      </button>\n      <button ion-button icon-only class="cart-button" (click)="openCart()">\n        <ion-icon name="cart">\n          <ion-badge color="secondary">{{shared.cartquantity}}</ion-badge>\n        </ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="page-home" (ionScroll)="onScroll($event)">\n  <!-- top banners -->\n  <banners></banners>\n\n  <!-- top Segments  -->\n  <ion-segment [(ngModel)]="segments" color="primary">\n    <ion-segment-button value="topSeller">{{ \'Top Seller\' | translate }}</ion-segment-button>\n    <ion-segment-button value="deals">{{ \'Deals\' | translate }} </ion-segment-button>\n    <ion-segment-button value="mostLiked"> {{ \'Most Liked\' | translate }}</ion-segment-button>\n  </ion-segment>\n\n  <!-- top segments products -->\n  <div class="module" [ngSwitch]="segments">\n    <ion-slides slidesPerView=2.2 spaceBetween=10 *ngSwitchCase="\'topSeller\'" class="animate-product" dir="{{shared.dir}}">\n      <ion-slide *ngFor="let p of shared.tab1">\n        <product [data]="p" [type]="\'normal\'"></product>\n      </ion-slide>\n      <ion-slide class="swiper-slide-last">\n        <ion-card (click)="openProducts(\'top seller\')">\n          <ion-card-content>\n            <ion-icon name="checkmark-circle"></ion-icon>\n            <h4>{{ \'View All\' | translate }}</h4>\n          </ion-card-content>\n        </ion-card>\n      </ion-slide>\n    </ion-slides>\n\n    <ion-slides slidesPerView=2.2 spaceBetween=10 *ngSwitchCase="\'deals\'" dir="{{shared.dir}}" class="animate-product">\n      <ion-slide *ngFor="let p of shared.tab2">\n        <product [data]="p" [type]="\'normal\'"></product>\n      </ion-slide>\n      <ion-slide class="swiper-slide-last">\n        <ion-card (click)="openProducts(\'special\')">\n          <ion-card-content>\n            <ion-icon name="checkmark-circle"></ion-icon>\n            <h4>{{ \'View All\' | translate }}</h4>\n          </ion-card-content>\n        </ion-card>\n      </ion-slide>\n    </ion-slides>\n\n    <ion-slides slidesPerView=2.2 spaceBetween=10 *ngSwitchCase="\'mostLiked\'" dir="{{shared.dir}}" class="animate-product">\n      <ion-slide *ngFor="let p of shared.tab3">\n        <product [data]="p" [type]="\'normal\'"></product>\n      </ion-slide>\n      <ion-slide class="swiper-slide-last">\n        <ion-card (click)="openProducts(\'most liked\')">\n          <ion-card-content>\n            <ion-icon name="checkmark-circle"></ion-icon>\n            <h4>{{ \'View All\' | translate }}</h4>\n          </ion-card-content>\n        </ion-card>\n      </ion-slide>\n    </ion-slides>\n\n  </div>\n  <!-- Recent Viewed items products -->\n  <div class="module" *ngIf="shared.recentViewedProducts.length!=0" [@animate]>\n    <h5>{{\'Recently Viewed\'|translate}}</h5>\n    <ion-slides slidesPerView=2.2 spaceBetween=10 dir="{{shared.dir}}">\n      <ion-slide *ngFor="let p of shared.recentViewedProducts" [@animate]>\n        <product [data]="p" [type]="\'recent\'"></product>\n      </ion-slide>\n      <ion-slide class="swiper-slide-last"></ion-slide>\n    </ion-slides>\n  </div>\n\n  <sliding-tabs></sliding-tabs>\n  <ion-fab bottom right *ngIf="scrollTopButton">\n    <button ion-fab (click)="scrollToTop()">\n      <ion-icon name="arrow-round-up"></ion-icon>\n    </button>\n  </ion-fab>\n\n</ion-content>\n<ion-footer *ngIf="config.footerShowHide==\'1\'">\n  <footer></footer>\n</ion-footer>'/*ion-inline-end:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_loading_loading__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/







var ProductDetailPage = (function () {
    function ProductDetailPage(navCtrl, navParams, config, shared, modalCtrl, loading, socialSharing) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.config = config;
        this.shared = shared;
        this.modalCtrl = modalCtrl;
        this.loading = loading;
        this.socialSharing = socialSharing;
        this.attributes = [];
        this.selectAttribute = true;
        //============================================================================================  
        //function adding attibute into array
        this.fillAttributes = function (val, optionID) {
            var _this = this;
            //console.log(val);
            //  console.log(this.attributes);
            this.attributes.forEach(function (value, index) {
                if (optionID == value.products_options_id) {
                    value.products_options_values_id = val.id;
                    value.options_values_price = val.price;
                    value.price_prefix = val.price_prefix;
                    value.products_options_values = val.value;
                    value.name = val.value + ' ' + val.price_prefix + val.price + " " + _this.config.currency;
                }
            });
            // console.log($scope.attributes);
            //calculating total price 
            this.calculatingTotalPrice();
        };
        //============================================================================================  
        //calculating total price  
        this.calculatingTotalPrice = function () {
            var price = parseFloat(this.product.products_price.toString());
            if (this.product.discount_price != null || this.product.discount_price != undefined)
                price = this.product.discount_price;
            var totalPrice = this.shared.calculateFinalPriceService(this.attributes) + parseFloat(price.toString());
            if (this.product.discount_price != null || this.product.discount_price != undefined)
                this.discount_price = totalPrice;
            else
                this.product_price = totalPrice;
            //  console.log(totalPrice);
        };
        this.product = navParams.get('data');
        // console.log(this.product);
        this.discount_price = this.product.discount_price;
        this.product_price = this.product.products_price;
        if (this.product.attributes != null && this.product.attributes != undefined && this.product.attributes.length != 0) {
            //this.selectAttribute = this.product.attributes[0].values[0];
            // console.log(this.selectAttribute);
            this.product.attributes.forEach(function (value, index) {
                var att = {
                    products_options_id: value.option.id,
                    products_options: value.option.name,
                    products_options_values_id: value.values[0].id,
                    options_values_price: value.values[0].price,
                    price_prefix: value.values[0].price_prefix,
                    products_options_values: value.values[0].value,
                    name: value.values[0].value + ' ' + value.values[0].price_prefix + value.values[0].price + " " + _this.config.currency
                };
                _this.attributes.push(att);
            });
            //console.log(this.attributes);
        }
    }
    ProductDetailPage.prototype.addToCartProduct = function () {
        this.loading.autoHide(500);
        // console.log(this.product);
        this.shared.addToCart(this.product, this.attributes);
        this.navCtrl.pop();
    };
    ProductDetailPage.prototype.checkProductNew = function () {
        var pDate = new Date(this.product.products_date_added);
        var date = pDate.getTime() + this.config.newProductDuration * 86400000;
        var todayDate = new Date().getTime();
        if (date > todayDate)
            return true;
        else
            return false;
    };
    ProductDetailPage.prototype.pDiscount = function () {
        var rtn = "";
        var p1 = parseInt(this.product.products_price);
        var p2 = parseInt(this.product.discount_price);
        if (p1 == 0 || p2 == null || p2 == undefined || p2 == 0) {
            rtn = "";
        }
        var result = Math.abs((p1 - p2) / p1 * 100);
        result = parseInt(result.toString());
        if (result == 0) {
            rtn = "";
        }
        rtn = result + '%';
        return rtn;
    };
    ProductDetailPage.prototype.share = function () {
        this.loading.autoHide(1000);
        // Share via email
        this.socialSharing.share(this.product.products_name, this.product.products_name, this.config.url + this.product.products_image, this.product.products_url).then(function () {
            // Success!
        }).catch(function () {
            // Error!
        });
    };
    ProductDetailPage.prototype.clickWishList = function () {
        if (this.shared.customerData.customers_id == null || this.shared.customerData.customers_id == undefined) {
            var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
            modal.present();
        }
        else {
            if (this.product.isLiked == '0') {
                this.addWishList();
            }
            else
                this.removeWishList();
        }
    };
    ProductDetailPage.prototype.addWishList = function () {
        this.shared.addWishList(this.product);
    };
    ProductDetailPage.prototype.removeWishList = function () {
        this.shared.removeWishList(this.product);
    };
    ProductDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-product-detail',template:/*ion-inline-start:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/product-detail/product-detail.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      {{\'Product Details\'| translate }}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="page-product-detail">\n\n  <ion-slides pager="true">\n    <ion-slide *ngIf="product!=null">\n      <img src="{{config.url+product.products_image}}">\n    </ion-slide>\n    <ion-slide *ngFor="let b of product.images">\n      <img src="{{config.url+b.image}}">\n    </ion-slide>\n  </ion-slides>\n\n  <ion-grid class="product-detail-title">\n    <ion-row>\n      <div class="product-new" *ngIf="checkProductNew()">{{\'New\'|translate}}</div>\n      <ion-col col-12>\n        <h3>{{product.products_name}}\n          <br>\n          <small>{{product.categories_name}}</small>\n        </h3>\n        <p>{{\'Likes\'|translate}}&nbsp;({{product.products_liked}})</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid class="product-detail-header">\n    <ion-row>\n      <div class="product-off" *ngIf="product.discount_price!=null">{{pDiscount()}}{{\'OFF\'|translate}}</div>\n      <ion-col col-8>\n        <span class="product-price-normal" *ngIf="product.discount_price==null">{{product_price |curency}}</span>\n        <span class="product-price-normal" *ngIf="product.discount_price!=null">{{discount_price |curency}}</span>\n        <span class="product-price-normal-through" *ngIf="product.discount_price!=null">{{product_price |curency}}</span>\n\n\n        <span class="product-outstock" *ngIf="product.products_quantity==0">{{\'Out of Stock\'|translate}}</span>\n        <span class="product-instock" *ngIf="product.products_quantity!=0">{{\'In Stock\'|translate}}</span>\n      </ion-col>\n      <ion-col col-4>\n        <ion-icon name="share" (click)="share()"></ion-icon>\n        <ion-icon [name]="product.isLiked==\'0\'? \'heart-outline\' : \'heart\'" (click)="clickWishList()"></ion-icon>\n      </ion-col>\n      <button ion-button block color="secondary" *ngIf="product.products_quantity!=\'0\'" (click)="addToCartProduct()">{{\'Add to Cart\'|translate}}</button>\n      <button ion-button block color="danger" *ngIf="product.products_quantity==\'0\'">{{\'OUT OF STOCK\'|translate}}</button>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid class="product-detail-content" *ngIf="product.products_description!=null && product.products_description!=\'\'">\n    <ion-row>\n      <ion-col col-12>\n        <h4>{{\'Product Description\'|translate}}</h4>\n        <div class="product-describtion" [innerHTML]="product.products_description"></div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid class="product-detail-content" *ngIf="product.attributes.length!=0">\n    <ion-row>\n      <ion-col col-12>\n        <h4>{{\'Techincal details\'|translate}}</h4>\n        <div class="product-describtion" [innerHTML]="product.products_description"></div>\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n  <!-- <ion-list>\n    <ion-item *ngFor=" let att of product.attributes">\n      <ion-label>{{att.option.name}}</ion-label>\n      <ion-select [(ngModel)]="selectAttribute" (ngModelChange)="fillAttributes(selectAttribute,att.option.id)">\n        <ion-option [value]="val" *ngFor=" let val of att.values">{{val.value+\' \'+val.price_prefix+val.price+\' \'+config.currency}}\n        </ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-list> -->\n\n  <ion-list radio-group *ngFor=" let att of product.attributes">\n    <h4>{{att.option.name}}</h4>\n    <ion-item *ngFor=" let val of att.values; let i = index">\n      <ion-label>{{val.value+\' \'+val.price_prefix+val.price+\' \'+config.currency}}</ion-label>\n      <ion-radio [value]="val" [checked]="i==0" (ionSelect)="fillAttributes(val,att.option.id)"></ion-radio>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/product-detail/product-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__["a" /* SocialSharing */]])
    ], ProductDetailPage);
    return ProductDetailPage;
}());

//# sourceMappingURL=product-detail.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Home2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_animations__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__cart_cart__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__search_search__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/










var Home2Page = (function () {
    function Home2Page(http, config, shared, navCtrl, translate) {
        this.http = http;
        this.config = config;
        this.shared = shared;
        this.navCtrl = navCtrl;
        this.scrollTopButton = false;
        this.segments = 'topSeller';
    }
    Home2Page.prototype.scrollToTop = function () {
        this.content.scrollToTop(700);
        this.scrollTopButton = false;
    };
    Home2Page.prototype.onScroll = function (e) {
        this.content.resize();
        if (e.scrollTop >= 1200)
            this.scrollTopButton = true;
        if (e.scrollTop < 1200)
            this.scrollTopButton = false;
        //else this.scrollTopButton=false;
        //   console.log(e);
    };
    Home2Page.prototype.ngAfterViewChecked = function () {
        this.content.resize();
    };
    Home2Page.prototype.openCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__cart_cart__["a" /* CartPage */]);
    };
    Home2Page.prototype.openSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__search_search__["a" /* SearchPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_7_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["c" /* Content */])
    ], Home2Page.prototype, "content", void 0);
    Home2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home2',
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["j" /* trigger */])('animate', [
                    Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["i" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["h" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["e" /* animate */])('500ms', Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["h" /* style */])({ opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["i" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["h" /* style */])({ opacity: 1 }),
                        Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["e" /* animate */])('700ms', Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["h" /* style */])({ opacity: 0 }))
                    ])
                ])
            ],template:/*ion-inline-start:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/home2/home2.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title text-center>\n      <img src="assets/logo_header.png" alt="logo">\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="openSearch()">\n        <ion-icon name="search"></ion-icon>\n      </button>\n      <button ion-button icon-only class="cart-button" (click)="openCart()">\n        <ion-icon name="cart">\n          <ion-badge color="secondary">{{shared.cartquantity}}</ion-badge>\n        </ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="page-home2" (ionScroll)="onScroll($event)">\n  <!-- top banners -->\n  <banners></banners>\n  <sliding-tabs [type]="\'image\'"></sliding-tabs>\n\n  <ion-fab bottom right *ngIf="scrollTopButton">\n    <button ion-fab (click)="scrollToTop()">\n      <ion-icon name="arrow-round-up"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n<ion-footer *ngIf="config.footerShowHide==1">\n  <footer></footer>\n</ion-footer>'/*ion-inline-end:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/home2/home2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */]])
    ], Home2Page);
    return Home2Page;
}());

//# sourceMappingURL=home2.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Home3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_animations__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__products_products__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__cart_cart__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__search_search__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/











var Home3Page = (function () {
    function Home3Page(http, config, navCtrl, shared, translate) {
        this.http = http;
        this.config = config;
        this.navCtrl = navCtrl;
        this.shared = shared;
    }
    Home3Page.prototype.openProducts = function (value) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__products_products__["a" /* ProductsPage */], { sortOrder: value });
    };
    Home3Page.prototype.ngAfterViewChecked = function () {
        this.content.resize();
    };
    Home3Page.prototype.openCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__cart_cart__["a" /* CartPage */]);
    };
    Home3Page.prototype.openSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__search_search__["a" /* SearchPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_8_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["c" /* Content */])
    ], Home3Page.prototype, "content", void 0);
    Home3Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home3',
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["j" /* trigger */])('animate', [
                    Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["i" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["h" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["e" /* animate */])('500ms', Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["h" /* style */])({ opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["i" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["h" /* style */])({ opacity: 1 }),
                        Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["e" /* animate */])('700ms', Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["h" /* style */])({ opacity: 0 }))
                    ])
                ])
            ],template:/*ion-inline-start:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/home3/home3.html"*/'<ion-header>\n    \n      <ion-navbar>\n        <button ion-button icon-only menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    \n        <ion-title text-center>\n          <img src="assets/logo_header.png" alt="logo">\n        </ion-title>\n    \n        <ion-buttons end>\n          <button ion-button icon-only (click)="openSearch()">\n            <ion-icon name="search"></ion-icon>\n          </button>\n          <button ion-button icon-only class="cart-button" (click)="openCart()">\n            <ion-icon name="cart">\n              <ion-badge color="secondary">{{shared.cartquantity}}</ion-badge>\n            </ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-navbar>\n    \n    </ion-header>\n  \n  <ion-content class="page-home3">\n    <!-- top banners -->\n    <banners></banners>\n\n    <!-- Top Seller -->\n    <div class="module">\n      <h3>{{ \'Top Seller\' | translate }}</h3>\n      <ion-slides slidesPerView=2.2 spaceBetween=10 class="animate-product" dir="{{shared.dir}}">\n        <ion-slide *ngFor="let p of shared.tab1" >\n          <product [data]="p" [type]="\'normal\'"></product>\n        </ion-slide>\n        <ion-slide class="swiper-slide-last">\n          <ion-card (click)="openProducts(\'top seller\')">\n            <ion-card-content>\n              <ion-icon name="checkmark-circle"></ion-icon>\n              <h4>View All</h4>\n            </ion-card-content>\n          </ion-card>\n        </ion-slide>\n      </ion-slides>\n    </div>\n    <!-- Deals -->\n    <div class="module">\n      <h3>{{ \'Deals\' | translate }}</h3>\n      <ion-slides slidesPerView=2.2 spaceBetween=10 class="animate-product" dir="{{shared.dir}}">\n        <ion-slide *ngFor="let p of shared.tab2" >\n          <product [data]="p" [type]="\'normal\'"></product>\n        </ion-slide>\n        <ion-slide class="swiper-slide-last" >\n          <ion-card (click)="openProducts(\'special\')">\n            <ion-card-content>\n              <ion-icon name="checkmark-circle"></ion-icon>\n              <h4>View All</h4>\n            </ion-card-content>\n          </ion-card>\n        </ion-slide>\n      </ion-slides>\n    </div>\n    <!-- Most Liked -->\n    <div class="module">\n      <h3>{{ \'Most Liked\' | translate }}</h3>\n      <ion-slides slidesPerView=2.2 spaceBetween=10 class="animate-product" dir="{{shared.dir}}">\n        <ion-slide *ngFor="let p of shared.tab3" >\n          <product [data]="p" [type]="\'normal\'"></product>\n        </ion-slide>\n        <ion-slide class="swiper-slide-last" >\n          <ion-card (click)="openProducts(\'most liked\')">\n            <ion-card-content>\n              <ion-icon name="checkmark-circle"></ion-icon>\n              <h4>View All</h4>\n            </ion-card-content>\n          </ion-card>\n        </ion-slide>\n      </ion-slides>\n    </div>\n\n    <!-- Recent Viewed items products -->\n    <div class="module" *ngIf="shared.recentViewedProducts.length!=0" [@animate]>\n      <h5>{{\'Recently Viewed\'|translate}}</h5>\n      <ion-slides slidesPerView=2.2 spaceBetween=10 dir="{{shared.dir}}">\n        <ion-slide *ngFor="let p of shared.recentViewedProducts" [@animate]>\n          <product [data]="p" [type]="\'recent\'"></product>\n        </ion-slide>\n        <ion-slide class="swiper-slide-last"></ion-slide>\n      </ion-slides>\n    </div>\n\n  </ion-content>\n  <ion-footer *ngIf="config.footerShowHide==1">\n    <footer ></footer>\n  </ion-footer>'/*ion-inline-end:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/home3/home3.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */]])
    ], Home3Page);
    return Home3Page;
}());

//# sourceMappingURL=home3.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Home5Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_animations__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sub_categories6_sub_categories6__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__cart_cart__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__search_search__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/











var Home5Page = (function () {
    function Home5Page(http, config, shared, navCtrl, translate) {
        this.http = http;
        this.config = config;
        this.shared = shared;
        this.navCtrl = navCtrl;
        this.segments = 'topSeller';
    }
    Home5Page.prototype.openSubCategories = function (parent) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__sub_categories6_sub_categories6__["a" /* SubCategories6Page */], { 'parent': parent });
    };
    Home5Page.prototype.ngAfterViewChecked = function () {
        this.content.resize();
    };
    Home5Page.prototype.openCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__cart_cart__["a" /* CartPage */]);
    };
    Home5Page.prototype.openSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__search_search__["a" /* SearchPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_7_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["c" /* Content */])
    ], Home5Page.prototype, "content", void 0);
    Home5Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home5',
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["j" /* trigger */])('animate', [
                    Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["i" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["h" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["e" /* animate */])('500ms', Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["h" /* style */])({ opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["i" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["h" /* style */])({ opacity: 1 }),
                        Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["e" /* animate */])('700ms', Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["h" /* style */])({ opacity: 0 }))
                    ])
                ])
            ],template:/*ion-inline-start:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/home5/home5.html"*/'<ion-header>\n    \n      <ion-navbar>\n        <button ion-button icon-only menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    \n        <ion-title text-center>\n          <img src="assets/logo_header.png" alt="logo">\n        </ion-title>\n    \n        <ion-buttons end>\n          <button ion-button icon-only (click)="openSearch()">\n            <ion-icon name="search"></ion-icon>\n          </button>\n          <button ion-button icon-only class="cart-button" (click)="openCart()">\n            <ion-icon name="cart">\n              <ion-badge color="secondary">{{shared.cartquantity}}</ion-badge>\n            </ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-navbar>\n    \n    </ion-header>\n  \n  <ion-content class="page-home5">\n    <ion-card *ngFor="let c of shared.categories" (click)="openSubCategories(c.id)" class="animated flipInX">\n      <img src="{{config.url+c.image}}" />\n      <div class="categories-title">{{c.name}}</div>\n      <div class="categories-subtitle">{{c.total_products}} {{\'Products\'| translate }} </div>\n    </ion-card>\n  </ion-content>\n  <ion-footer *ngIf="config.footerShowHide==1">\n    <footer ></footer>\n  </ion-footer>'/*ion-inline-end:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/home5/home5.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */]])
    ], Home5Page);
    return Home5Page;
}());

//# sourceMappingURL=home5.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Home4Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_shared_data_shared_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_animations__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sub_categories_sub_categories__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__cart_cart__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__search_search__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__products_products__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/












var Home4Page = (function () {
    function Home4Page(http, config, shared, navCtrl, translate) {
        this.http = http;
        this.config = config;
        this.shared = shared;
        this.navCtrl = navCtrl;
    }
    Home4Page.prototype.openSubCategories = function (parent) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__sub_categories_sub_categories__["a" /* SubCategoriesPage */], { 'parent': parent });
    };
    Home4Page.prototype.ngAfterViewChecked = function () {
        this.content.resize();
    };
    Home4Page.prototype.openProducts = function (value) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__products_products__["a" /* ProductsPage */], { sortOrder: value });
    };
    Home4Page.prototype.openCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__cart_cart__["a" /* CartPage */]);
    };
    Home4Page.prototype.openSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__search_search__["a" /* SearchPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_7_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["c" /* Content */])
    ], Home4Page.prototype, "content", void 0);
    Home4Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home4',
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["j" /* trigger */])('animate', [
                    Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["i" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["h" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["e" /* animate */])('500ms', Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["h" /* style */])({ opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["i" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["h" /* style */])({ opacity: 1 }),
                        Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["e" /* animate */])('700ms', Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["h" /* style */])({ opacity: 0 }))
                    ])
                ])
            ],template:/*ion-inline-start:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/home4/home4.html"*/'<ion-header>\n    \n      <ion-navbar>\n        <button ion-button icon-only menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    \n        <ion-title text-center>\n          <img src="assets/logo_header.png" alt="logo">\n        </ion-title>\n    \n        <ion-buttons end>\n          <button ion-button icon-only (click)="openSearch()">\n            <ion-icon name="search"></ion-icon>\n          </button>\n          <button ion-button icon-only class="cart-button" (click)="openCart()">\n            <ion-icon name="cart">\n              <ion-badge color="secondary">{{shared.cartquantity}}</ion-badge>\n            </ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-navbar>\n    \n    </ion-header>\n  \n  <ion-content class="page-home4">\n    <!-- top banners -->\n    <banners></banners>\n    \n    <ion-grid class="categories-grid">\n      <h3>{{ \'Categories\' | translate }}</h3>\n      <ion-row>\n        <ion-col col-6  *ngFor="let c of shared.categories" (click)="openSubCategories(c.id)" class="animated fadeIn">\n            <ion-card>\n              <img src="{{config.url+c.image}}" />\n              <div class="categories-title">{{c.name}}</div>\n              <div class="categories-subtitle">{{c.total_products}} {{\'Products\'| translate }} </div>\n            </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n     <!-- Top Seller -->\n     <div class="module">\n      <h3>{{ \'Top Seller\' | translate }}</h3>\n      <ion-slides slidesPerView=2.2 spaceBetween=10 class="animate-product">\n        <ion-slide *ngFor="let p of shared.tab1" >\n          <product [data]="p" [type]="\'normal\'"></product>\n        </ion-slide>\n        <ion-slide class="swiper-slide-last">\n          <ion-card (click)="openProducts(\'top seller\')">\n            <ion-card-content>\n              <ion-icon name="checkmark-circle"></ion-icon>\n              <h4>View All</h4>\n            </ion-card-content>\n          </ion-card>\n        </ion-slide>\n      </ion-slides>\n    </div>\n    <!-- Deals -->\n    <div class="module">\n      <h3>{{ \'Deals\' | translate }}</h3>\n      <ion-slides slidesPerView=2.2 spaceBetween=10 class="animate-product" dir="{{shared.dir}}">\n        <ion-slide *ngFor="let p of shared.tab2" >\n          <product [data]="p" [type]="\'normal\'"></product>\n        </ion-slide>\n        <ion-slide class="swiper-slide-last" >\n          <ion-card (click)="openProducts(\'special\')">\n            <ion-card-content>\n              <ion-icon name="checkmark-circle"></ion-icon>\n              <h4>View All</h4>\n            </ion-card-content>\n          </ion-card>\n        </ion-slide>\n      </ion-slides>\n    </div>\n    <!-- Most Liked -->\n    <div class="module">\n      <h3>{{ \'Most Liked\' | translate }}</h3>\n      <ion-slides slidesPerView=2.2 spaceBetween=10 class="animate-product" dir="{{shared.dir}}">\n        <ion-slide *ngFor="let p of shared.tab3" >\n          <product [data]="p" [type]="\'normal\'"></product>\n        </ion-slide>\n        <ion-slide class="swiper-slide-last" >\n          <ion-card (click)="openProducts(\'most liked\')">\n            <ion-card-content>\n              <ion-icon name="checkmark-circle"></ion-icon>\n              <h4>View All</h4>\n            </ion-card-content>\n          </ion-card>\n        </ion-slide>\n      </ion-slides>\n    </div>\n\n    <!-- Recent Viewed items products -->\n    <div class="module" *ngIf="shared.recentViewedProducts.length!=0" [@animate]>\n      <h5>{{\'Recently Viewed\'|translate}}</h5>\n      <ion-slides slidesPerView=2.2 spaceBetween=10 dir="{{shared.dir}}">\n        <ion-slide *ngFor="let p of shared.recentViewedProducts" [@animate]>\n          <product [data]="p" [type]="\'recent\'"></product>\n        </ion-slide>\n        <ion-slide class="swiper-slide-last"></ion-slide>\n      </ion-slides>\n    </div>\n  </ion-content>\n  <ion-footer *ngIf="config.footerShowHide==1">\n    <footer ></footer>\n  </ion-footer>'/*ion-inline-end:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/home4/home4.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_shared_data_shared_data__["a" /* SharedDataProvider */],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */]])
    ], Home4Page);
    return Home4Page;
}());

//# sourceMappingURL=home4.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectCountryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_shared_data_shared_data__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/






var SelectCountryPage = (function () {
    function SelectCountryPage(navCtrl, navParams, http, config, viewCtrl, modalCtrl, loading, shared) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.config = config;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.loading = loading;
        this.shared = shared;
        this.searchQuery = '';
        this.countries = new Array;
        loading.show();
        var data = { type: 'null' };
        http.post(this.config.url + 'getCountries', data).map(function (res) { return res.json(); }).subscribe(function (data) {
            loading.hide();
            _this.items = _this.countries = data.data;
            setTimeout(function () { _this.searchBar.setFocus(); }, 250);
        });
    }
    SelectCountryPage.prototype.initializeItems = function () {
        this.items = this.countries;
    };
    SelectCountryPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.countries_name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    //close modal
    SelectCountryPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    SelectCountryPage.prototype.selectCountry = function (c) {
        if (this.navParams.get('page') == 'shipping') {
            this.shared.orderDetails.delivery_country = c.countries_name;
            this.shared.orderDetails.delivery_country_code = c.countries_id;
            this.shared.orderDetails.delivery_country_id = c.countries_id;
            this.shared.orderDetails.delivery_zone = null;
            this.shared.orderDetails.delivery_state = null;
        }
        else if (this.navParams.get('page') == 'editShipping') {
            this.shared.tempdata.entry_country_id = c.countries_id;
            this.shared.tempdata.entry_country_name = c.countries_name;
            this.shared.tempdata.entry_country_code = c.countries_id;
            this.shared.tempdata.entry_zone = null;
        }
        else {
            this.shared.orderDetails.billing_country = c.countries_name;
            this.shared.orderDetails.billing_country_code = c.countries_id;
            this.shared.orderDetails.billing_country_id = c.countries_id;
            this.shared.orderDetails.billing_zone = null;
            this.shared.orderDetails.billing_state = null;
        }
        this.dismiss();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('Searchbar'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Searchbar */])
    ], SelectCountryPage.prototype, "searchBar", void 0);
    SelectCountryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-select-country',template:/*ion-inline-start:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/select-country/select-country.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button icon-only (click)="dismiss()">\n        <ion-icon name="md-close"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>{{\'Country\'|translate}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="page-select-country">\n  <ion-searchbar (ionInput)="getItems($event)" placeholder="{{\'Search\'|translate}}" #Searchbar></ion-searchbar>\n  <ion-list>\n    <ion-item *ngFor="let item of items" (click)="selectCountry(item)">\n      {{ item.countries_name }}\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/select-country/select-country.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_shared_data_shared_data__["a" /* SharedDataProvider */]])
    ], SelectCountryPage);
    return SelectCountryPage;
}());

//# sourceMappingURL=select-country.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectZonesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_shared_data_shared_data__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/






var SelectZonesPage = (function () {
    function SelectZonesPage(navCtrl, navParams, http, config, viewCtrl, modalCtrl, loading, shared) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.config = config;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.loading = loading;
        this.shared = shared;
        this.searchQuery = '';
        this.zones = new Array;
        loading.show();
        var data = { zone_country_id: this.navParams.get('id') };
        http.post(this.config.url + 'getZones', data).map(function (res) { return res.json(); }).subscribe(function (data) {
            loading.hide();
            _this.items = _this.zones = data.data;
        });
    }
    SelectZonesPage.prototype.initializeItems = function () {
        this.items = this.zones;
    };
    SelectZonesPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.zone_name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    //close modal
    SelectZonesPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    SelectZonesPage.prototype.selectZone = function (c) {
        if (this.navParams.get('page') == 'shipping') {
            if (c == 'other') {
                //  console.log(c);
                this.shared.orderDetails.delivery_zone = 'other';
                this.shared.orderDetails.delivery_state = 'other';
                this.shared.orderDetails.tax_zone_id = null;
            }
            else {
                this.shared.orderDetails.delivery_zone = c.zone_name;
                this.shared.orderDetails.delivery_state = c.zone_name;
                this.shared.orderDetails.tax_zone_id = c.zone_id;
            }
        }
        else if (this.navParams.get('page') == 'editShipping') {
            if (c == 'other') {
                this.shared.tempdata.entry_zone = 'other';
                this.shared.tempdata.entry_zone_id = 0;
            }
            else {
                this.shared.tempdata.entry_zone = c.zone_name;
                this.shared.tempdata.entry_zone_id = c.zone_id;
            }
        }
        else {
            if (c == 'other') {
                this.shared.orderDetails.billing_zone = 'other';
                this.shared.orderDetails.billing_state = 'other';
            }
            else {
                this.shared.orderDetails.billing_zone = c.zone_name;
                this.shared.orderDetails.billing_state = c.zone_name;
            }
        }
        this.dismiss();
    };
    SelectZonesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-select-zones',template:/*ion-inline-start:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/select-zones/select-zones.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button icon-only (click)="dismiss()">\n        <ion-icon name="md-close"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>{{\'Zone\'|translate}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="page-select-zones">\n  <ion-searchbar (ionInput)="getItems($event)" placeholder="{{\'Search\'|translate}}" autofocus></ion-searchbar>\n  <ion-list>\n    <ion-item *ngFor="let item of items" (click)="selectZone(item)">\n      {{ item.zone_name }}\n    </ion-item>\n    <ion-item (click)="selectZone(\'other\')">\n      {{\'other\'|translate}}\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Volumes/DATA/working Directory/ codecaynon copy/v2.5/demo 2/src/pages/select-zones/select-zones.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_loading_loading__["a" /* LoadingProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_shared_data_shared_data__["a" /* SharedDataProvider */]])
    ], SelectZonesPage);
    return SelectZonesPage;
}());

//# sourceMappingURL=select-zones.js.map

/***/ })

},[293]);
//# sourceMappingURL=main.js.map