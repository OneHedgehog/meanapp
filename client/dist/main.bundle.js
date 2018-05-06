webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"container\">\r\n    <flash-messages></flash-messages>\r\n    <router-outlet></router-outlet>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("../../../../../src/app/app.routing-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__blog_blog_component__ = __webpack_require__("../../../../../src/app/blog/blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__blog_blogitem_blogitem_component__ = __webpack_require__("../../../../../src/app/blog/blogitem/blogitem.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__blog_blogitem_blog_item_component_blog_item_component_component__ = __webpack_require__("../../../../../src/app/blog/blogitem/blog-item-component/blog-item-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__blog_new_post_form_new_post_form_component__ = __webpack_require__("../../../../../src/app/blog/new-post-form/new-post-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_blog_service_service__ = __webpack_require__("../../../../../src/app/services/blog-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__blog_blogitem_comment_form_comment_form_component__ = __webpack_require__("../../../../../src/app/blog/blogitem/comment-form/comment-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_like_service__ = __webpack_require__("../../../../../src/app/services/like.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_10__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_12__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_13__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_15__blog_blog_component__["a" /* BlogComponent */],
                __WEBPACK_IMPORTED_MODULE_16__blog_blogitem_blogitem_component__["a" /* BlogitemComponent */],
                __WEBPACK_IMPORTED_MODULE_17__blog_blogitem_blog_item_component_blog_item_component_component__["a" /* BlogItemComponentComponent */],
                __WEBPACK_IMPORTED_MODULE_18__blog_new_post_form_new_post_form_component__["a" /* NewPostFormComponent */],
                __WEBPACK_IMPORTED_MODULE_20__blog_blogitem_comment_form_comment_form_component__["a" /* CommentFormComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesModule"].forRoot(),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_14__services_shared_service__["a" /* SharedService */], __WEBPACK_IMPORTED_MODULE_19__services_blog_service_service__["a" /* BlogServiceService */], __WEBPACK_IMPORTED_MODULE_21__services_like_service__["a" /* LikeService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing-module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__blog_blog_component__ = __webpack_require__("../../../../../src/app/blog/blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__blog_new_post_form_new_post_form_component__ = __webpack_require__("../../../../../src/app/blog/new-post-form/new-post-form.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__["a" /* DashboardComponent */]
    },
    {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_4__register_register_component__["a" /* RegisterComponent */]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'profile',
        component: __WEBPACK_IMPORTED_MODULE_6__profile_profile_component__["a" /* ProfileComponent */]
    },
    {
        path: 'blog',
        component: __WEBPACK_IMPORTED_MODULE_7__blog_blog_component__["a" /* BlogComponent */]
    },
    {
        path: 'blog/new-post/:id',
        component: __WEBPACK_IMPORTED_MODULE_8__blog_new_post_form_new_post_form_component__["a" /* NewPostFormComponent */]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                )
            ],
            providers: [],
            bootstrap: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/blog/blog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/blog/blog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"list-group\">\r\n    <br>\r\n    <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\r\n        <a routerLink=\"/blog/new-post/new\" class=\"btn btn-outline-secondary\">New Post</a>\r\n        <button type=\"button\" class=\"btn btn-outline-secondary\">Reload  <i class=\"fas fa-sync-alt\"></i>\r\n        </button>\r\n    </div>\r\n    <br>\r\n    <app-blogitem *ngFor=\"let post of posts\" [post]=\"post\" [user]=\"this.userObserve | async\"></app-blogitem>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/blog/blog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_blog_service_service__ = __webpack_require__("../../../../../src/app/services/blog-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BlogComponent = /** @class */ (function () {
    function BlogComponent(blogServiceService, authService, _flashMessagesService, router) {
        this.blogServiceService = blogServiceService;
        this.authService = authService;
        this._flashMessagesService = _flashMessagesService;
        this.router = router;
    }
    BlogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userObserve = this.authService.getProfile();
        this.userObserve
            .subscribe(function (user) {
            if (user.success === false) {
                localStorage.removeItem('user_id');
                _this._flashMessagesService.show('You are logged out', { cssClass: 'alert-info', timeout: 1000 });
                _this.router.navigate(['/login']);
            }
            _this.userId = user.user._id;
            _this.userName = user.user.username;
        });
        this.blogServiceService.getPosts()
            .subscribe(function (postsData) {
            console.log(postsData);
            if (postsData.success === false) {
                //redirect to errorPage
            }
            else {
                _this.posts = postsData.posts;
            }
        });
    };
    BlogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__("../../../../../src/app/blog/blog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/blog/blog.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_blog_service_service__["a" /* BlogServiceService */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/blog/blogitem/blog-item-component/blog-item-component.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/blog/blogitem/blog-item-component/blog-item-component.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!deleted\" class=\"list-group-item list-group-item-action flex-column align-items-start\">\r\n  <div class=\"d-flex w-100 justify-content-between\">\r\n    <small class=\"text-muted\">{{comment.date| date : format : short}}</small>\r\n  </div>\r\n  <p class=\"mb-1\">{{comment.body}}</p>\r\n  <p class=\"text-muted\"><b>Username</b> {{comment.authorName}}</p>\r\n\r\n  <hr>\r\n  <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\r\n    <button type=\"button\" class=\"btn btn-outline-secondary\"  (click)=\"addLike()\"><i class=\"fas fa-thumbs-up\"></i> {{comment.likes.length}} </button>\r\n\r\n    <div class=\"btn-group dropup\">\r\n      <button type=\"button\" class=\"btn btn-secondary dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n      </button>\r\n      <div class=\"dropdown-menu\">\r\n        <a *ngFor=\"let like of comment.likes\" class=\"dropdown-item\">{{like.likedBy}}</a>\r\n      </div>\r\n    </div>\r\n\r\n    <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"addDislike()\"><i class=\"fas fa-thumbs-down\"></i> {{comment.dislikes.length}} </button>\r\n\r\n    <div class=\"btn-group dropup\">\r\n      <button type=\"button\" class=\"btn btn-secondary dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n      </button>\r\n      <div class=\"dropdown-menu\">\r\n        <a *ngFor=\"let dislike of comment.dislikes\" class=\"dropdown-item\">{{dislike.dislikedBy}}</a>\r\n      </div>\r\n    </div>\r\n\r\n    <button *ngIf=\"user.user._id === comment.authorId\" type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"deleteComment()\"><i class=\"fas fa-trash-alt\"></i>\r\n    </button>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/blog/blogitem/blog-item-component/blog-item-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogItemComponentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_like_service__ = __webpack_require__("../../../../../src/app/services/like.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_blog_service_service__ = __webpack_require__("../../../../../src/app/services/blog-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BlogItemComponentComponent = /** @class */ (function () {
    function BlogItemComponentComponent(likeService, blogServiceService) {
        this.likeService = likeService;
        this.blogServiceService = blogServiceService;
        this.deleted = false;
    }
    BlogItemComponentComponent.prototype.ngOnInit = function () {
    };
    BlogItemComponentComponent.prototype.addLike = function () {
        var _this = this;
        var likeData = {
            authorname: this.user.user.username,
        };
        this.likeService.addLike(likeData, this.comment._id, 'comment').subscribe(function (likedData) {
            console.log(likedData);
            if (likedData.success === true) {
                if (likedData.like === null) {
                    _this.comment.likes.splice(-1, 1);
                }
                else {
                    _this.comment.likes.push(likedData.like);
                }
            }
        });
    };
    BlogItemComponentComponent.prototype.addDislike = function () {
        var _this = this;
        var dislikeData = {
            authorname: this.user.user.username,
        };
        this.likeService.addDislike(dislikeData, this.comment._id, 'comment').subscribe(function (dislikedData) {
            console.log(dislikedData);
            if (dislikedData.success === true) {
                if (dislikedData.dislike === null) {
                    _this.comment.dislikes.splice(-1, 1);
                }
                else {
                    _this.comment.dislikes.push(dislikedData.dislike);
                }
            }
        });
    };
    BlogItemComponentComponent.prototype.deleteComment = function () {
        var _this = this;
        this.blogServiceService.deletePostComments(this.comment.id)
            .subscribe(function (data) {
            if (data.success === true) {
                _this.deleted = true;
            }
            ;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], BlogItemComponentComponent.prototype, "comment", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], BlogItemComponentComponent.prototype, "user", void 0);
    BlogItemComponentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-blog-item-component',
            template: __webpack_require__("../../../../../src/app/blog/blogitem/blog-item-component/blog-item-component.component.html"),
            styles: [__webpack_require__("../../../../../src/app/blog/blogitem/blog-item-component/blog-item-component.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_like_service__["a" /* LikeService */],
            __WEBPACK_IMPORTED_MODULE_2__services_blog_service_service__["a" /* BlogServiceService */]])
    ], BlogItemComponentComponent);
    return BlogItemComponentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/blog/blogitem/blogitem.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*.alert-light{*/\r\n    /*border-bottom: 3px solid slategray;*/\r\n    /*}*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/blog/blogitem/blogitem.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"exist\" class=\"new-blog\">\r\n  <div class=\"alert alert-light\" role=\"alert\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-2\">\r\n        <img src=\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20200%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1616fd14b18%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1616fd14b18%22%3E%3Crect%20width%3D%22200%22%20height%3D%22200%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2273.640625%22%20y%3D%22104.5%22%3E200x200%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\" class=\"img-fluid img-thumbnail\" alt=\"...\">\r\n      </div>\r\n      <div class=\"col-lg-10\">\r\n        <h4 class=\"alert-heading\">{{post.title}}</h4>\r\n        <p>{{post.body}}</p>\r\n        <div *ngIf=\"user !== null && user.user._id == post.authorId\">\r\n          <button (click)=\"deleteBlog(post._id)\" type=\"button\" class=\"btn btn-outline-secondary\"><i class=\"fas fa-trash-alt\"></i>\r\n          </button>\r\n          <a routerLink=\"/blog/new-post/{{post._id}}\" class=\"btn btn-outline-secondary\"><i class=\"fas fa-pencil-alt\"></i>\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <hr>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <p><b>Username:</b> {{post.authorName}}</p>\r\n        <p><b>Date:</b> {{post.date | date : format : short}}</p>\r\n        <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\r\n          <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"addLike()\" ><i class=\"fas fa-thumbs-up\"></i>{{post.likes.length}}</button>\r\n\r\n          <div class=\"btn-group dropup\">\r\n            <button type=\"button\" class=\"btn btn-secondary dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n            </button>\r\n            <div class=\"dropdown-menu\">\r\n              <a class=\"dropdown-item\" *ngFor=\"let like_name of post.likes\">{{like_name.likedBy }}</a>\r\n            </div>\r\n          </div>\r\n\r\n          <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"addDislike()\"><i class=\"fas fa-thumbs-down\"></i> {{post.dislikes.length}} </button>\r\n\r\n          <div class=\"btn-group dropup\">\r\n            <button type=\"button\" class=\"btn btn-secondary dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n            </button>\r\n            <div class=\"dropdown-menu\">\r\n              <a class=\"dropdown-item\" *ngFor=\"let dislike_name of post.dislikes\">{{dislike_name.dislikedBy }}</a>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"list-group\">\r\n          <h4>Comment list</h4>\r\n          <app-comment-form [post_id]=\"post._id\" [isCommented]=\"isCommented\" [user]=\"user\"></app-comment-form>\r\n          <app-blog-item-component *ngFor=\"let comment of comments\" [comment]=\"comment\" [user]=\"user\"></app-blog-item-component>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/blog/blogitem/blogitem.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogitemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_blog_service_service__ = __webpack_require__("../../../../../src/app/services/blog-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_like_service__ = __webpack_require__("../../../../../src/app/services/like.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BlogitemComponent = /** @class */ (function () {
    function BlogitemComponent(blogServiceService, router, likeService) {
        this.blogServiceService = blogServiceService;
        this.router = router;
        this.likeService = likeService;
        this.isCommented = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](false);
        this.exist = true;
        this.comments = null;
    }
    BlogitemComponent.prototype.ngOnInit = function () {
        if (this.post.likes === null) {
            this.post.likes = [];
        }
        if (this.post.dislikes === null) {
            this.post.dislikes = [];
        }
        if (this.user !== null) {
            this.userId = this.user.user._id;
            this.userName = this.user.user.username;
        }
        this.getPostComments();
        this.updateComments();
    };
    BlogitemComponent.prototype.deleteBlog = function (id) {
        this.blogServiceService.deletePost(id)
            .subscribe(function (deletedData) {
        });
        this.exist = false;
    };
    BlogitemComponent.prototype.getPostComments = function () {
        var _this = this;
        this.blogServiceService.getPostComments(this.post._id)
            .subscribe(function (comments) {
            console.log(comments);
            _this.comments = comments;
        });
    };
    BlogitemComponent.prototype.updateComments = function () {
        var _this = this;
        this.isCommented.subscribe(function (data) {
            if (data) {
                _this.getPostComments();
            }
        });
    };
    BlogitemComponent.prototype.addLike = function () {
        var _this = this;
        var likeData = {
            authorname: this.user.user.username,
        };
        this.likeService.addLike(likeData, this.post._id, 'post').subscribe(function (likedData) {
            console.log(likedData);
            if (likedData.success === true) {
                if (likedData.like === null) {
                    _this.post.likes.splice(-1, 1);
                }
                else {
                    _this.post.likes.push(likedData.like);
                }
            }
        });
    };
    BlogitemComponent.prototype.addDislike = function () {
        var _this = this;
        console.log(this.post.dislikes);
        var dislikeData = {
            authorname: this.user.user.username,
        };
        this.likeService.addDislike(dislikeData, this.post._id, 'post').subscribe(function (dislikedData) {
            if (dislikedData.success === true) {
                console.log(dislikedData);
                if (dislikedData.dislike === null) {
                    _this.post.dislikes.splice(-1, 1);
                }
                else {
                    _this.post.dislikes.push(dislikedData.dislike);
                }
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], BlogitemComponent.prototype, "post", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], BlogitemComponent.prototype, "user", void 0);
    BlogitemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-blogitem',
            template: __webpack_require__("../../../../../src/app/blog/blogitem/blogitem.component.html"),
            styles: [__webpack_require__("../../../../../src/app/blog/blogitem/blogitem.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_blog_service_service__["a" /* BlogServiceService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_like_service__["a" /* LikeService */]])
    ], BlogitemComponent);
    return BlogitemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/blog/blogitem/comment-form/comment-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/blog/blogitem/comment-form/comment-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div *ngIf=\"alertErr\" class=\"alert alert-danger\" role=\"alert\">\r\n        {{alertErr}}\r\n    </div>\r\n    <form [formGroup] = \"commentForm\" (submit)=\"onFormSubmit()\">\r\n        <div class=\"form-group\">\r\n            <label for=\"content\">Comment content</label>\r\n            <textarea class=\"form-control\" [ngClass]=\"{'is-invalid': commentForm.controls.content.errors && commentForm.controls.content.dirty, 'is-valid': commentForm.controls.content.dirty && !commentForm.controls.content.errors}\" id=\"content\" rows=\"3\" formControlName=\"content\"></textarea>\r\n            <ul class=\"valid-feedback\">\r\n                <li>Look's good!</li>\r\n            </ul>\r\n            <ul *ngIf=\"commentForm.controls.content.errors\" class=\"invalid-feedback\">\r\n                <li *ngIf=\"commentForm.controls.content.errors.required\">Content is required</li>\r\n                <li *ngIf=\"commentForm.controls.content.errors.minlength\">Length should be more then 5 symbols</li>\r\n                <li *ngIf=\"commentForm.controls.content.errors.maxlength\">Invalid lenght</li>\r\n            </ul>\r\n        </div>\r\n        <button class=\"btn btn-outline-secondary\">Post a comment</button>\r\n    </form>\r\n</div>\r\n<hr>\r\n"

/***/ }),

/***/ "../../../../../src/app/blog/blogitem/comment-form/comment-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_blog_service_service__ = __webpack_require__("../../../../../src/app/services/blog-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CommentFormComponent = /** @class */ (function () {
    function CommentFormComponent(formBuilder, blogService) {
        this.formBuilder = formBuilder;
        this.blogService = blogService;
        this.alertErr = '';
    }
    CommentFormComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    CommentFormComponent.prototype.createForm = function () {
        this.commentForm = this.formBuilder.group({
            content: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(5),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(10000),
                ])]
        });
    };
    CommentFormComponent.prototype.onFormSubmit = function () {
        var _this = this;
        var postData = {
            content: this.commentForm.get('content').value,
            user_id: this.user.user._id,
            post_id: this.post_id,
            user_name: this.user.user.username
        };
        this.blogService.addPostComments(this.post_id, postData)
            .subscribe(function (data) {
            if (data.success === false) {
                _this.alertErr = data.mes;
            }
            else {
                _this.isCommented.next(true);
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CommentFormComponent.prototype, "user", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CommentFormComponent.prototype, "post_id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */])
    ], CommentFormComponent.prototype, "isCommented", void 0);
    CommentFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-comment-form',
            template: __webpack_require__("../../../../../src/app/blog/blogitem/comment-form/comment-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/blog/blogitem/comment-form/comment-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__services_blog_service_service__["a" /* BlogServiceService */]])
    ], CommentFormComponent);
    return CommentFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/blog/new-post-form/new-post-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/blog/new-post-form/new-post-form.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Create your awesome post</h1>\r\n<div class=\"alert alert-{{alertData.htmlClass}}\">{{alertData.mes}}</div>\r\n<form [formGroup]=\"newPostForm\" (submit)=\"onPostFormSubmit()\"  >\r\n  <div class=\"form-group\">\r\n    <label for=\"post-title\">Post title</label>\r\n    <input type=\"text\" class=\"form-control\" [ngClass]=\"{'is-invalid': newPostForm.controls.title.errors && newPostForm.controls.title.dirty, 'is-valid': newPostForm.controls.title.dirty && !newPostForm.controls.title.errors}\" id=\"post-title\" placeholder=\"title...\" value=\"{{postTitle}}\" formControlName=\"title\">\r\n    <ul class=\"valid-feedback\">\r\n      <li>Looks good!</li>\r\n    </ul>\r\n    <ul *ngIf=\"newPostForm.controls.title.errors\" class=\"invalid-feedback\">\r\n      <li *ngIf=\"newPostForm.controls.title.errors.required\">title is req. params</li>\r\n      <li *ngIf=\"newPostForm.controls.title.errors.minlength\">length should be more then 2 symbols</li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"textBody\">Example textarea</label>\r\n    <textarea value=\"{{this.postBody}}\" class=\"form-control\" [ngClass]=\"{'is-invalid': newPostForm.controls.body.errors && newPostForm.controls.body.dirty, 'is-valid': newPostForm.controls.body.dirty && !newPostForm.controls.body.errors}\" id=\"textBody\" rows=\"5\" formControlName=\"body\"></textarea>\r\n    <ul class=\"valid-feedback\">\r\n      <li>Looks good!</li>\r\n    </ul>\r\n    <ul *ngIf=\"newPostForm.status == 'INVALID' && newPostForm.controls.body.errors\" class=\"invalid-feedback\">\r\n      <li *ngIf=\"newPostForm.controls.body.errors.minlength\">Lenght should be more then 5 symbols</li>\r\n      <li *ngIf=\"newPostForm.controls.body.errors.required\">body is required</li>\r\n    </ul>\r\n  </div>\r\n  <button class=\"btn btn-success\" [disabled] = \"newPostForm.status == 'INVALID'\">Create Post</button>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/blog/new-post-form/new-post-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewPostFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_blog_service_service__ = __webpack_require__("../../../../../src/app/services/blog-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewPostFormComponent = /** @class */ (function () {
    function NewPostFormComponent(formBuilder, currentRoute, authService, blogServiceService, router) {
        this.formBuilder = formBuilder;
        this.currentRoute = currentRoute;
        this.authService = authService;
        this.blogServiceService = blogServiceService;
        this.router = router;
        this.postTitle = '';
        this.postBody = '';
        this.alertData = {
            mes: 'Edit in process',
            htmlClass: 'warning'
        };
    }
    NewPostFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentRoute.params.subscribe(function (params) {
            _this.urlId = params.id;
        });
        // set this.userData
        this.getProfile();
        if (this.urlId !== 'new') {
            this.setUpdatePostData();
        }
        this.createForm();
    };
    NewPostFormComponent.prototype.createForm = function () {
        this.newPostForm = this.formBuilder.group({
            title: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(2),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(40),
                ])],
            body: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(5),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(10000),
                ])]
        });
    };
    NewPostFormComponent.prototype.onPostFormSubmit = function () {
        var _this = this;
        var newPost = {
            title: this.newPostForm.get('title').value,
            body: this.newPostForm.get('body').value,
            action_id: this.urlId,
            author_name: this.userData.username,
            author_id: this.userData._id
        };
        if (this.urlId === 'new') {
            this.blogServiceService.createBlogPost(newPost)
                .subscribe(function (blogData) {
                if (blogData.error) {
                    _this.alertData.htmlClass = 'danger';
                    _this.alertData.mes = blogData.error;
                }
                else {
                    _this.alertData.htmlClass = 'success';
                    _this.alertData.mes = 'Post created';
                    _this.redirectToBlog();
                }
            });
        }
        else {
            this.blogServiceService.updateBlogPost(newPost, this.urlId)
                .subscribe(function (updatedPost) {
                if (updatedPost.success == false) {
                    _this.alertData.htmlClass = 'danger';
                    _this.alertData.mes = 'can\'t update post';
                    _this.redirectToBlog();
                }
                else {
                    _this.alertData.htmlClass = 'success';
                    _this.alertData.mes = 'post updated';
                    _this.redirectToBlog();
                }
            });
        }
    };
    NewPostFormComponent.prototype.getProfile = function () {
        var _this = this;
        this.authService.getProfile()
            .subscribe(function (data) {
            if (!data.user) {
                localStorage.removeItem('user_id');
                _this.redirectToBlog();
            }
            else {
                _this.userData = data.user;
            }
        });
    };
    NewPostFormComponent.prototype.setUpdatePostData = function () {
        var _this = this;
        this.blogServiceService.getPost(this.urlId)
            .subscribe(function (post) {
            if (post.success == false) {
                _this.alertData.htmlClass = 'danger';
                _this.alertData.mes = 'Post doesn\'t exist';
                _this.redirectToBlog();
            }
            else {
                _this.postTitle = post.post.title;
                _this.postBody = post.post.body;
            }
        });
    };
    NewPostFormComponent.prototype.redirectToBlog = function () {
        var _this = this;
        this.newPostForm.controls['title'].disable();
        this.newPostForm.controls['body'].disable();
        setTimeout(function () {
            _this.router.navigate(['/blog']);
        }, 2000);
    };
    NewPostFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-new-post-form',
            template: __webpack_require__("../../../../../src/app/blog/new-post-form/new-post-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/blog/new-post-form/new-post-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__services_blog_service_service__["a" /* BlogServiceService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], NewPostFormComponent);
    return NewPostFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/common/common.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".meanapp-center{\r\n    margin: 0 auto;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">Dashboard</h1>\r\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.ngAfterViewInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".inner{\r\n    padding-top: 60px;\r\n    text-align: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"inner cover\">\r\n    <h1 class=\"cover-heading\">Create your posts.</h1>\r\n    <p class=\"lead\">Create your posts, commet them, try like or dislike feature. You also can disilke comments. Check your popularity statistic in dashboard. Easy 2 min registration and the test it in.</p>\r\n    <p class=\"lead\">\r\n        <a routerLink=\"/login\" class=\"btn btn-lg btn-secondary\">Login</a>\r\n        <a routerLink=\"/register\" class=\"btn btn-lg btn-primary\">Register</a>\r\n    </p>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-signin{\r\n    padding-top: 40px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"submitted\" class=\"alert {{cssclass}}\" role=\"alert\">\r\n  {{ mes  }}\r\n</div>\r\n<form [formGroup]=\"form\" (ngSubmit)=\"onLoginSubmit()\" class=\"form-signin col-lg-10 meanapp-center\">\r\n  <div class=\"text-center mb-4\">\r\n    <h1 class=\"h3 mb-3 font-weight-normal\">Login form</h1>\r\n  </div>\r\n  <div class=\"form-row\">\r\n    <div class=\"col-md-12 mb-12\">\r\n      <label for=\"username\">Username</label>\r\n      <input type=\"text\" class=\"form-control\" [ngClass]=\"{ 'is-invalid' : form.controls.login.errors && form.controls.login.dirty, 'is-valid' : !form.controls.login.errors}\" id=\"username\" placeholder=\"username\" formControlName=\"login\" required>\r\n      <ul class=\"valid-feedback\">\r\n        <li>valid login</li>\r\n      </ul>\r\n      <ul *ngIf=\"form.controls.login.errors\" class=\"invalid-feedback\">\r\n        <li *ngIf=\"form.controls.login.errors.required\">empty login</li>\r\n        <li *ngIf=\"form.controls.login.errors.minlength\">login should be more, then 2 symbols</li>\r\n        <li *ngIf=\"form.controls.login.errors.maxlength\">to long login</li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"col-md-12 mb-12\">\r\n      <label for=\"password\">Password</label>\r\n      <input type=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid' : form.controls.password.errors && form.controls.password.dirty, 'is-valid' : !form.controls.password.errors}\" id=\"password\" placeholder=\"password\" formControlName=\"password\" required>\r\n      <ul class=\"valid-feedback\">\r\n        <li>valid password</li>\r\n      </ul>\r\n      <ul *ngIf=\"form.controls.password.errors\" class=\"invalid-feedback\">\r\n        <li *ngIf=\"form.controls.password.errors.required\">empty password</li>\r\n        <li *ngIf=\"form.controls.password.errors.minlength\">login should be more, then 4 symbols</li>\r\n        <li *ngIf=\"form.controls.password.errors.maxlength\">to long password</li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <p class=\"mt-3 mb-3 text-muted text-center\">developed by <a href=\"\">OneHedgehog</a></p>\r\n  <button class=\"btn btn-lg btn-success btn-block\" [disabled] = \"form.status == 'INVALID'\">Log in</button>\r\n  <p class=\"mt-5 mb-3 text-muted text-center\">© 2018-2019</p>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, authService, router, sharedService) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.sharedService = sharedService;
        this.submitted = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('user_id')) {
            this.router.navigate(['/dashboard']);
        }
        ;
        this.createForm();
    };
    LoginComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            login: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(2),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(40),
                ])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(5),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(200),
                ])]
        });
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            login: this.form.get('login').value,
            password: this.form.get('password').value
        };
        this.authService.login(user)
            .subscribe(function (userData) {
            var data = userData;
            _this.submitted = true;
            if (data['error']) {
                _this.mes = data.error.msg;
                _this.cssclass = 'alert-danger';
            }
            else {
                _this.mes = 'succefully login';
                _this.cssclass = 'alert-success';
                _this.form.controls['login'].disable();
                _this.form.controls['password'].disable();
                localStorage.setItem('user_id', data._id);
                _this.sharedService.IsUserLoggedIn.next(true);
                _this.router.navigate(['/dashboard']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css"), __webpack_require__("../../../../../src/app/common/common.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_shared_service__["a" /* SharedService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark  bg-dark\">\r\n  <button class=\"navbar-toggler collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"navbar-collapse collapse\" id=\"navbarsExampleDefault\" style=\"\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:\r\ntrue}\">\r\n        <a class=\"nav-link\" routerLink=\"/\"> <b>Meanapp</b> <span class=\"sr-only\">(current)</span></a>\r\n      </li>\r\n      <li  *ngIf=\"isUserLoggedIn\" class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n        <a class=\"nav-link\" routerLink=\"/dashboard\">Dashboard</a>\r\n      </li>\r\n    </ul>\r\n    <ul class=\"navbar-nav navbar-right\">\r\n      <li *ngIf=\"isUserLoggedIn\" class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n        <a class=\"nav-link\" routerLink=\"/profile\">Profile</a>\r\n      </li>\r\n      <li *ngIf=\"isUserLoggedIn\" class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n        <a class=\"nav-link\" routerLink=\"/blog\">Blog</a>\r\n      </li>\r\n      <li *ngIf=\"!isUserLoggedIn\" class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n        <a class=\"nav-link\" routerLink=\"/login\">Login</a>\r\n      </li>\r\n      <li *ngIf=\"isUserLoggedIn\" class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n        <a class=\"nav-link\" (click)=\"logout()\">Logout</a>\r\n      </li>\r\n      <li *ngIf=\"!isUserLoggedIn\" class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n        <a class=\"nav-link\" routerLink=\"/register\">Register</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, _flashMessagesService, sharedService) {
        this.authService = authService;
        this._flashMessagesService = _flashMessagesService;
        this.sharedService = sharedService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sharedService.IsUserLoggedIn.subscribe(function (value) {
            _this.isUserLoggedIn = value;
        });
        if (localStorage.getItem('user_id')) {
            this.isUserLoggedIn = true;
        }
        else {
            this.isUserLoggedIn = false;
        }
    };
    NavbarComponent.prototype.logout = function () {
        this._flashMessagesService.show('You are logged out', { cssClass: 'alert-info', timeout: 1000 });
        this.sharedService.IsUserLoggedIn.next(false);
        this.authService.logout();
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".user-detail{\r\n    margin-top: 40px;\r\n}\r\n.user-detail .img-thumbnail{\r\n    width: 200px;\r\n    height: 200px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-7\">\r\n    <div class=\"row\">\r\n        <div class=\"offset-lg-4 col-lg-4 col-sm-6 col-12 main-section text-center\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-12 col-sm-12 col-12 profile-header\"></div>\r\n            </div>\r\n            <div class=\"row user-detail mt-6\">\r\n                <div class=\"col-lg-12 col-sm-12 col-12\">\r\n                    <img src=\"/assets/img/ninja.jpg\" class=\"img-thumbnail mb-4\">\r\n                    <h5 *ngIf=\"user !== undefined\">{{user.username}}</h5>\r\n                    <p *ngIf=\"user !== undefined\"><i class=\"fas fa-at\"></i> {{user.email}}</p>\r\n\r\n                    <hr>\r\n                    <a href=\"#\" class=\"btn btn-primary btn-md\">Change photo</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService, router, _flashMessagesService) {
        this.authService = authService;
        this.router = router;
        this._flashMessagesService = _flashMessagesService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile()
            .subscribe(function (profileData) {
            var data = profileData;
            if (data.success == false) {
                _this._flashMessagesService.show('You are logged out', { cssClass: 'alert-info', timeout: 1000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.user = data.user;
            }
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-signin{\r\n    padding-top: 40px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"res\" class=\"alert {{cssclass}}\" role=\"alert\">\r\n  {{mes}}\r\n</div>\r\n<form [formGroup]=\"form\" (submit)=\"onRegisterSubmit()\" class=\"form-signin col-lg-10 meanapp-center align-middle\">\r\n  <div class=\"text-center mb-4\">\r\n    <h1 class=\"h3 mb-3 font-weight-normal\">Register form</h1>\r\n  </div>\r\n  <div class=\"form-row\">\r\n    <div class=\"col-md-12 mb-12\">\r\n      <label for=\"email\">Email</label>\r\n      <span *ngIf=\"!form.controls.email.errors\" class=\"badge badge{{email_cssclass}}\">{{email_mes}}</span>\r\n      <input type=\"text\"   class=\"form-control\" (keyup)=\"checkEmail()\"  [ngClass] = \"{'is-invalid':( (form.controls.email.errors || !email_exist) && form.controls.email.dirty), 'is-valid': !form.controls.email.errors && email_exist }\" id=\"email\" placeholder=\"Email\" formControlName=\"email\">\r\n      <ul class=\"valid-feedback\">\r\n        <li>email is valid</li>\r\n      </ul>\r\n      <ul *ngIf =\"form.controls.email.errors\" class=\"invalid-feedback\">\r\n        <li *ngIf = \"form.controls.email.errors.minlength\">\r\n          email length must be more, then 4 symbols\r\n        </li>\r\n        <li *ngIf = \"form.controls.email.errors.maxlength\">\r\n          email length must be less, then 40 symbols\r\n        </li>\r\n        <li *ngIf = \"form.controls.email.errors.email\">\r\n          email should be valid ( with '@' symbol)\r\n        </li>\r\n        <li *ngIf = \"form.controls.email.errors.pattern\">\r\n          non-valid email\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-row\">\r\n    <div class=\"col-md-12 mb-12\">\r\n      <label for=\"username\">Username</label>\r\n      <span *ngIf=\"form.controls.username.value\" class=\"badge badge{{user_cssclass}}\">{{user_mes}}</span>\r\n      <input type=\"text\" class=\"form-control\" (keyup)=\"checkUser()\" [ngClass] = \"{'is-invalid':( (form.controls.username.errors || !user_exist)  && form.controls.username.dirty), 'is-valid': (!form.controls.username.errors && user_exist)}\" id=\"username\" placeholder=\"Username\" formControlName=\"username\" required>\r\n      <ul class=\"valid-feedback\">\r\n        <li>username is valid</li>\r\n      </ul>\r\n      <ul *ngIf =\"form.controls.username.errors\" class=\"invalid-feedback\">\r\n        <li *ngIf = \"form.controls.username.errors.required\">\r\n          empty username\r\n        </li>\r\n        <li *ngIf = \"form.controls.username.errors.minlength\">\r\n          username length must be more, then 1 symbol\r\n        </li>\r\n        <li *ngIf = \"form.controls.username.errors.maxlength\">\r\n          username length must be less, then 40 symbols\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-row\">\r\n    <div class=\"col-md-12 mb-12\">\r\n      <label for=\"password\">Password</label>\r\n      <input type=\"password\" class=\"form-control\" [ngClass] = \"{'is-invalid':(form.controls.password.errors && form.controls.password.dirty), 'is-valid': !form.controls.password.errors}\" id=\"password\" placeholder=\"Password\" formControlName=\"password\" required>\r\n      <ul class=\"valid-feedback\">\r\n        <li>password is valid</li>\r\n      </ul>\r\n      <ul *ngIf =\"form.controls.password.errors\" class=\"invalid-feedback\">\r\n        <li *ngIf = \"form.controls.password.errors.required\">\r\n          password username\r\n        </li>\r\n        <li *ngIf = \"form.controls.password.errors.minlength\">\r\n          password length must be more, then 4 symbols\r\n        </li>\r\n        <li *ngIf = \"form.controls.password.errors.maxlength\">\r\n          password length must be less, then 200 symbols\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <p class=\"mt-3 mb-3 text-muted text-center\">developed by <a href=\"\">OneHedgehog</a></p>\r\n  <button class=\"btn btn-lg btn-success btn-block\" [disabled]=\"(form.status == 'INVALID' || !user_exist || !email_exist)\">Register</button>\r\n  <p class=\"mt-5 mb-3 text-muted text-center\">© 2018-2019</p>\r\n</form>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder, authService, router, sharedService) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.sharedService = sharedService;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    RegisterComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(5),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(40),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].email,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].pattern('\\S+@\\S+\\.\\S+')
                ])],
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(2),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(40),
                ])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(5),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(200),
                ])],
        });
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            email: this.form.get('email').value,
            username: this.form.get('username').value,
            password: this.form.get('password').value
        };
        this.authService.registerUser(user)
            .subscribe(function (userData) {
            var data = userData;
            _this.res = data;
            if (data.error) {
                _this.mes = data.error.msg;
                _this.cssclass = 'alert-danger';
            }
            else {
                _this.mes = data.dbmessage;
                _this.cssclass = 'alert-success';
                _this.form.controls['username'].disable();
                _this.form.controls['password'].disable();
                _this.form.controls['email'].disable();
                localStorage.setItem('user_id', data.user._id);
                _this.sharedService.IsUserLoggedIn.next(true);
                _this.router.navigate(['/dashboard']);
            }
        });
    };
    RegisterComponent.prototype.checkEmail = function () {
        var _this = this;
        var email = this.form.get('email').value;
        return this.authService.checkEmail(email)
            .subscribe(function (emailCheckData) {
            var data = emailCheckData;
            if (!data.error) {
                _this.email_mes = data.successmes;
                _this.email_exist = true;
                _this.email_cssclass = '-success';
            }
            else {
                _this.email_mes = data.error.msg;
                _this.email_exist = false;
                _this.email_cssclass = '-danger';
            }
        });
    };
    RegisterComponent.prototype.checkUser = function () {
        var _this = this;
        var username = this.form.get('username').value;
        return this.authService.checkUser(username)
            .subscribe(function (userCheckData) {
            var data = userCheckData;
            if (!data.error) {
                _this.user_mes = data.successmes;
                _this.user_exist = true;
                _this.user_cssclass = '-success';
            }
            else {
                _this.user_mes = data.error.msg;
                _this.user_exist = false;
                _this.user_cssclass = '-danger';
            }
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/register/register.component.css"), __webpack_require__("../../../../../src/app/common/common.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_shared_service__["a" /* SharedService */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.devHost = 'http://localhost:5000';
    }
    AuthService.prototype.registerUser = function (userData) {
        return this.http.post(this.devHost + '/auth/register', JSON.stringify(userData), httpOptions);
    };
    AuthService.prototype.checkUser = function (user) {
        return this.http.get(this.devHost + '/auth/usercheck/' + user);
    };
    AuthService.prototype.checkEmail = function (email) {
        return this.http.get(this.devHost + '/auth/emailcheck/' + email);
    };
    AuthService.prototype.login = function (userData) {
        return this.http.post(this.devHost + '/login', JSON.stringify(userData), httpOptions);
    };
    //if user login
    AuthService.prototype.createAuthHeaders = function () {
        var user_id = localStorage.getItem('user_id');
        if (!user_id) {
            this.router.navigate(['/login']);
        }
        this.authHeaders = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'authid': localStorage.getItem('user_id')
            })
        };
    };
    AuthService.prototype.getProfile = function () {
        this.createAuthHeaders();
        return this.http.get(this.devHost + '/profile/data', this.authHeaders);
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('user_id');
        this.router.navigate(['/login']);
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/blog-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BlogServiceService = /** @class */ (function () {
    function BlogServiceService(http, router) {
        this.http = http;
        this.router = router;
        this.devHost = 'http://localhost:5000';
    }
    BlogServiceService.prototype.createBlogPost = function (newBlogData) {
        return this.http.post(this.devHost + '/blog/create', newBlogData);
    };
    BlogServiceService.prototype.updateBlogPost = function (newBlogData, id) {
        return this.http.put(this.devHost + '/blog/post/update/' + id, newBlogData);
    };
    BlogServiceService.prototype.getPosts = function () {
        return this.http.get(this.devHost + '/blog/posts');
    };
    BlogServiceService.prototype.getPost = function (id) {
        return this.http.get(this.devHost + '/blog/post/' + id);
    };
    BlogServiceService.prototype.deletePost = function (id) {
        return this.http.delete(this.devHost + '/blog/post/delete/' + id);
    };
    BlogServiceService.prototype.addPostComments = function (id, post_data) {
        return this.http.post(this.devHost + '/blog/post/comments/' + id, post_data);
    };
    BlogServiceService.prototype.getPostComments = function (id) {
        return this.http.get(this.devHost + '/blog/post/comments/' + id);
    };
    BlogServiceService.prototype.deletePostComments = function (id) {
        return this.http.delete(this.devHost + '/blog/post/comments/' + id);
    };
    BlogServiceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], BlogServiceService);
    return BlogServiceService;
}());



/***/ }),

/***/ "../../../../../src/app/services/like.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LikeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var LikeService = /** @class */ (function () {
    function LikeService(http) {
        this.http = http;
        this.devHost = 'http://localhost:5000';
    }
    LikeService.prototype.addLike = function (likeData, id, mode) {
        return this.http.post(this.devHost + ("/blog/" + mode + "/like/" + id), likeData, httpOptions);
    };
    LikeService.prototype.addDislike = function (dislikeData, id, mode) {
        return this.http.post(this.devHost + ("/blog/" + mode + "/dislike/" + id), dislikeData, httpOptions);
    };
    LikeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], LikeService);
    return LikeService;
}());



/***/ }),

/***/ "../../../../../src/app/services/shared.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SharedService = /** @class */ (function () {
    function SharedService() {
        this.IsUserLoggedIn = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
        this.IsCommentCreated = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
    }
    SharedService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SharedService);
    return SharedService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map