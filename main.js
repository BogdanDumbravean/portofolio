"use strict";
(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent,
        data: { title: 'Home - Bogdan Dumbrăvean' }
    },
    {
        path: 'portfolio',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_portfolio_portfolio_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./portfolio/portfolio.module */ 8423)).then(m => m.PortfolioModule)
    },
    {
        path: 'about',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_about_about_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./about/about.module */ 6985)).then(m => m.AboutModule)
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 9151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 522);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 318);





const _c0 = function () { return { exact: true }; };
class AppComponent {
    constructor(titleService, router, activatedRoute) {
        this.titleService = titleService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.title = 'portfolio';
        this.gmail = "dumbraveanb@gmail.com";
        this.instagramLink = "https://www.instagram.com/bogdan_dumbra/";
        this.facebookLink = "https://www.facebook.com/bogdan.dumbravean";
        this.linkedinLink = "https://www.linkedin.com/in/bogdan-dumbravean/";
        this.isSidebarOpen = false;
        this.currentYear = new Date().getFullYear();
    }
    ngOnInit() {
        this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(() => this.activatedRoute), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(route => {
            while (route.firstChild)
                route = route.firstChild;
            return route;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.filter)(route => route.outlet === 'primary'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(route => route.data)).subscribe(event => {
            if (event['title']) {
                this.titleService.setTitle(event['title']);
            }
            else {
                this.titleService.setTitle("Bogdan Dumbrăvean");
            }
        });
    }
    toggleSidebar() {
        this.isSidebarOpen = !this.isSidebarOpen;
    }
    closeSidebarOnMobile() {
        // Only close sidebar on mobile/tablet screens, or if explicitly requested
        if (window.innerWidth <= 992 || this.isSidebarOpen) {
            this.isSidebarOpen = false;
        }
    }
    onResize(event) {
        if (event.target.innerWidth > 992) {
            this.isSidebarOpen = false;
        }
    }
    onKeyDown(event) {
        // Close sidebar when Escape key is pressed
        if (event.key === 'Escape' && this.isSidebarOpen && window.innerWidth <= 992) {
            this.isSidebarOpen = false;
            event.preventDefault();
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.ActivatedRoute)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("resize", function AppComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveWindow"])("keydown", function AppComponent_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveWindow"]);
    } }, decls: 54, vars: 15, consts: [[1, "main-container"], [1, "sidebar-overlay", 3, "click"], [1, "sidebar"], [1, "sidebar-content"], [1, "profile"], [1, "profile-name"], [1, "profile-title"], [1, "nav-menu"], ["routerLink", "/", "routerLinkActive", "active", 3, "routerLinkActiveOptions", "click"], ["routerLink", "/about", "routerLinkActive", "active", 3, "click"], ["routerLink", "/portfolio", "routerLinkActive", "active", 3, "click"], [1, "contact-section"], [1, "social-links"], ["target", "_blank", "title", "LinkedIn", 3, "href"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"], ["x", "2", "y", "9", "width", "4", "height", "12"], ["cx", "4", "cy", "4", "r", "2"], ["target", "_blank", "title", "Instagram", 3, "href"], ["x", "2", "y", "2", "width", "20", "height", "20", "rx", "5", "ry", "5"], ["d", "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"], ["x1", "17.5", "y1", "6.5", "x2", "17.51", "y2", "6.5"], ["target", "_blank", "title", "Facebook", 3, "href"], ["d", "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"], ["title", "Email", 3, "href"], ["d", "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"], ["points", "22,6 12,13 2,6"], [1, "email-address"], [3, "href"], [1, "sidebar-footer"], [1, "sidebar-toggle", 3, "click"], [1, "toggle-line"], [1, "main-content"], [1, "page-content"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppComponent_Template_div_click_1_listener() { return ctx.closeSidebarOnMobile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "aside", 2)(3, "div", 3)(4, "div", 4)(5, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Bogdan Dumbr\u0103vean");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Software Engineer & Game Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "nav", 7)(10, "ul")(11, "li")(12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppComponent_Template_a_click_12_listener() { return ctx.closeSidebarOnMobile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "li")(15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppComponent_Template_a_click_15_listener() { return ctx.closeSidebarOnMobile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "li")(18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppComponent_Template_a_click_18_listener() { return ctx.closeSidebarOnMobile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 11)(21, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Get In Touch");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 12)(24, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "svg", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "path", 15)(27, "rect", 16)(28, "circle", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "svg", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "rect", 19)(32, "path", 20)(33, "line", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "svg", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](36, "path", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "svg", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](39, "path", 25)(40, "polyline", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 27)(42, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "div", 29)(45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppComponent_Template_button_click_47_listener() { return ctx.toggleSidebar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](48, "span", 31)(49, "span", 31)(50, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "main", 32)(52, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](53, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("open", ctx.isSidebarOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("open", ctx.isSidebarOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](14, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", ctx.linkedinLink, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", ctx.instagramLink, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", ctx.facebookLink, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("href", "mailto: " + ctx.gmail, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("href", "mailto: " + ctx.gmail, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.gmail);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("\u00A9 ", ctx.currentYear, " Bogdan Dumbr\u0103vean");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("open", ctx.isSidebarOpen);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: [".main-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    min-height: 100vh;\r\n}\r\n\r\n.sidebar[_ngcontent-%COMP%] {\r\n    width: 280px;\r\n    background: linear-gradient(to bottom, #333333, #444444);\r\n    color: #fff;\r\n    position: fixed;\r\n    left: 0;\r\n    top: 0;\r\n    height: 100%;\r\n    overflow-y: auto;\r\n    box-shadow: 3px 0 10px rgba(0,0,0,0.2);\r\n    z-index: 1000;\r\n    transition: transform 0.3s ease;\r\n}\r\n.sidebar-content[_ngcontent-%COMP%] {\r\n    padding: 40px 25px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 100%;\r\n}\r\n\r\n.profile[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin-bottom: 30px;\r\n    border-bottom: 1px solid rgba(255,255,255,0.1);\r\n    padding-bottom: 20px;\r\n}\r\n.profile-name[_ngcontent-%COMP%] {\r\n    font-size: 1.8rem;\r\n    font-weight: 600;\r\n    margin: 0 0 8px;\r\n    color: #fff;\r\n}\r\n.profile-title[_ngcontent-%COMP%] {\r\n    color: rgba(255,255,255,0.9);\r\n    font-size: 1.1rem;\r\n    margin: 0;\r\n}\r\n\r\n.nav-menu[_ngcontent-%COMP%] {\r\n    margin-bottom: 40px;\r\n}\r\n.nav-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n.nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    margin-bottom: 12px;\r\n}\r\n.nav-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: block;\r\n    padding: 12px 15px;\r\n    color: #fff;\r\n    text-decoration: none;\r\n    border-radius: 6px;\r\n    font-weight: 500;\r\n    transition: all 0.3s;\r\n    border-left: 3px solid transparent;\r\n}\r\n.nav-menu[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\r\n    background: rgba(255,255,255,0.15);\r\n    border-left: 3px solid #f9b205;\r\n}\r\n.nav-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    background: rgba(255,255,255,0.1);\r\n    transform: translateX(5px);\r\n}\r\n\r\n.contact-section[_ngcontent-%COMP%] {\r\n    margin-top: auto;\r\n    margin-bottom: 30px;\r\n}\r\n.contact-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n    font-size: 1.1rem;\r\n    margin-bottom: 15px;\r\n    position: relative;\r\n    display: inline-block;\r\n    color: #f9b205;\r\n}\r\n.contact-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]:after {\r\n    content: '';\r\n    position: absolute;\r\n    height: 2px;\r\n    width: 50px;\r\n    background: #f9b205;\r\n    bottom: -6px;\r\n    left: 0;\r\n}\r\n.social-links[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    gap: 12px;\r\n    margin-bottom: 15px;\r\n}\r\n.social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 36px;\r\n    height: 36px;\r\n    border-radius: 50%;\r\n    background: rgba(255,255,255,0.2);\r\n    color: #fff;\r\n    transition: all 0.3s;\r\n}\r\n.social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    background: rgba(255,255,255,0.4);\r\n    transform: translateY(-3px);\r\n}\r\n.email-address[_ngcontent-%COMP%] {\r\n    margin-top: 15px;\r\n    font-size: 0.9rem;\r\n}\r\n.email-address[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    text-decoration: none;\r\n    opacity: 0.9;\r\n}\r\n.email-address[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    opacity: 1;\r\n    text-decoration: underline;\r\n}\r\n\r\n.sidebar-footer[_ngcontent-%COMP%] {\r\n    padding-top: 20px;\r\n    font-size: 0.8rem;\r\n    color: rgba(255,255,255,0.5);\r\n    border-top: 1px solid rgba(255,255,255,0.1);\r\n    text-align: center;\r\n}\r\n\r\n.main-content[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n    margin-left: 280px;\r\n    background-image: url('/assets/img/triangle-mosaic.png');\r\n    background-size: cover;\r\n    background-blend-mode: overlay;\r\n    background-attachment: fixed;\r\n    min-height: 100vh;\r\n    position: relative;\r\n    background-color: rgba(255,255,255,0.9);\r\n    width: calc(100% - 280px);\r\n}\r\n.page-content[_ngcontent-%COMP%] {\r\n    min-height: 100vh; \r\n    padding-top: 30px; \r\n    padding-bottom: 30px; \r\n}\r\n\r\n.sidebar-toggle[_ngcontent-%COMP%] {\r\n    display: none;\r\n    position: fixed;\r\n    top: 15px;\r\n    right: 15px;\r\n    width: 45px;\r\n    height: 45px;\r\n    border-radius: 50%;\r\n    background: #fff;\r\n    box-shadow: 0 2px 10px rgba(0,0,0,0.1);\r\n    border: none;\r\n    z-index: 1100;\r\n    cursor: pointer;\r\n    transition: background 0.3s;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n.sidebar-toggle[_ngcontent-%COMP%]:hover {\r\n    background: #f9b205;\r\n}\r\n.toggle-line[_ngcontent-%COMP%] {\r\n    display: block;\r\n    width: 24px;\r\n    height: 2px;\r\n    background: #333;\r\n    margin: 3px 0;\r\n    transition: all 0.3s;\r\n}\r\n.sidebar-toggle[_ngcontent-%COMP%]:hover   .toggle-line[_ngcontent-%COMP%] {\r\n    background: #fff;\r\n}\r\n.sidebar-toggle.open[_ngcontent-%COMP%]   .toggle-line[_ngcontent-%COMP%]:nth-child(1) {\r\n    transform: rotate(45deg) translate(4px, 4px);\r\n}\r\n.sidebar-toggle.open[_ngcontent-%COMP%]   .toggle-line[_ngcontent-%COMP%]:nth-child(2) {\r\n    opacity: 0;\r\n}\r\n.sidebar-toggle.open[_ngcontent-%COMP%]   .toggle-line[_ngcontent-%COMP%]:nth-child(3) {\r\n    transform: rotate(-45deg) translate(4px, -4px);\r\n}\r\n\r\n.sidebar-overlay[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: rgba(0, 0, 0, 0.5);\r\n    z-index: 999;\r\n    opacity: 0;\r\n    pointer-events: none;\r\n    transition: opacity 0.3s ease;\r\n    display: none;\r\n}\r\n\r\n@media (max-width: 992px) {\r\n    .sidebar[_ngcontent-%COMP%] {\r\n        transform: translateX(-100%);\r\n    }\r\n    \r\n    .sidebar.open[_ngcontent-%COMP%] {\r\n        transform: translateX(0);\r\n    }\r\n    \r\n    .sidebar-toggle[_ngcontent-%COMP%] {\r\n        display: flex;\r\n    }\r\n    \r\n    .main-content[_ngcontent-%COMP%] {\r\n        margin-left: 0;\r\n        width: 100%; \r\n    }\r\n    \r\n    .sidebar-overlay[_ngcontent-%COMP%] {\r\n        display: block;\r\n    }\r\n    \r\n    .sidebar-overlay.open[_ngcontent-%COMP%] {\r\n        opacity: 1;\r\n        pointer-events: auto;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,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LG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG9CQUFvQjtBQUN4QjtBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSw0Q0FBNEM7QUFDaEQ7QUFFQTtJQUNJLFVBQVU7QUFDZDtBQUVBO0lBQ0ksOENBQThDO0FBQ2xEO0FBRUEsb0JBQW9CO0FBQ3BCO0lBQ0ksZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLFVBQVU7SUFDVixvQkFBb0I7SUFDcEIsNkJBQTZCO0lBQzdCLGFBQWE7QUFDakI7QUFFQSxzQkFBc0I7QUFDdEI7SUFDSTtRQUNJLDRCQUE0QjtJQUNoQzs7SUFFQTtRQUNJLHdCQUF3QjtJQUM1Qjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxjQUFjO1FBQ2QsV0FBVyxFQUFFLHlCQUF5QjtJQUMxQzs7SUFFQTtRQUNJLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxVQUFVO1FBQ1Ysb0JBQW9CO0lBQ3hCO0FBQ0oiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBNYWluIExheW91dCAqL1xyXG4ubWFpbi1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4vKiBTaWRlYmFyICovXHJcbi5zaWRlYmFyIHtcclxuICAgIHdpZHRoOiAyODBweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMzMzMzMzMsICM0NDQ0NDQpO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIGJveC1zaGFkb3c6IDNweCAwIDEwcHggcmdiYSgwLDAsMCwwLjIpO1xyXG4gICAgei1pbmRleDogMTAwMDtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi5zaWRlYmFyLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogNDBweCAyNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi8qIFByb2ZpbGUgLSBtb2RpZmllZCB0byByZW1vdmUgaW1hZ2UgKi9cclxuLnByb2ZpbGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMSk7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLnByb2ZpbGUtbmFtZSB7XHJcbiAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW46IDAgMCA4cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLnByb2ZpbGUtdGl0bGUge1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC45KTtcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4vKiBOYXZpZ2F0aW9uIC0gaW1wcm92ZWQgdmlzaWJpbGl0eSAqL1xyXG4ubmF2LW1lbnUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG5cclxuLm5hdi1tZW51IHVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4ubmF2LW1lbnUgbGkge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxufVxyXG5cclxuLm5hdi1tZW51IGEge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDE1cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5uYXYtbWVudSBhLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMTUpO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjZjliMjA1O1xyXG59XHJcblxyXG4ubmF2LW1lbnUgYTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KTtcclxufVxyXG5cclxuLyogQ29udGFjdCBTZWN0aW9uIC0gaW1wcm92ZWQgc3BhY2luZyAqL1xyXG4uY29udGFjdC1zZWN0aW9uIHtcclxuICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4uY29udGFjdC1zZWN0aW9uIGg0IHtcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGNvbG9yOiAjZjliMjA1O1xyXG59XHJcblxyXG4uY29udGFjdC1zZWN0aW9uIGg0OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmOWIyMDU7XHJcbiAgICBib3R0b206IC02cHg7XHJcbiAgICBsZWZ0OiAwO1xyXG59XHJcblxyXG4uc29jaWFsLWxpbmtzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDEycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4uc29jaWFsLWxpbmtzIGEge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAzNnB4O1xyXG4gICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjIpO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxufVxyXG5cclxuLnNvY2lhbC1saW5rcyBhOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC40KTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxufVxyXG5cclxuLmVtYWlsLWFkZHJlc3Mge1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG59XHJcblxyXG4uZW1haWwtYWRkcmVzcyBhIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgb3BhY2l0eTogMC45O1xyXG59XHJcblxyXG4uZW1haWwtYWRkcmVzcyBhOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLyogU2lkZWJhciBGb290ZXIgKi9cclxuLnNpZGViYXItZm9vdGVyIHtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjUpO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4xKTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLyogTWFpbiBDb250ZW50IEFyZWEgKi9cclxuLm1haW4tY29udGVudCB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI4MHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltZy90cmlhbmdsZS1tb3NhaWMucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBvdmVybGF5O1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjkpO1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDI4MHB4KTtcclxufVxyXG5cclxuLnBhZ2UtY29udGVudCB7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDsgLyogQWRqdXN0ZWQgLSB3YXMgY2FsYygxMDB2aCAtIDYwcHgpICovXHJcbiAgICBwYWRkaW5nLXRvcDogMzBweDsgLyogQWRkIHBhZGRpbmcgYXQgdGhlIHRvcCBmb3IgYmV0dGVyIHNwYWNpbmcgKi9cclxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4OyAvKiBBZGQgcGFkZGluZyBhdCB0aGUgYm90dG9tIGZvciBiZXR0ZXIgc3BhY2luZyAqL1xyXG59XHJcblxyXG4vKiBNb2JpbGUgU2lkZWJhciBUb2dnbGUgKi9cclxuLnNpZGViYXItdG9nZ2xlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDE1cHg7XHJcbiAgICByaWdodDogMTVweDtcclxuICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgei1pbmRleDogMTEwMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcztcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zaWRlYmFyLXRvZ2dsZTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjliMjA1O1xyXG59XHJcblxyXG4udG9nZ2xlLWxpbmUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMjRweDtcclxuICAgIGhlaWdodDogMnB4O1xyXG4gICAgYmFja2dyb3VuZDogIzMzMztcclxuICAgIG1hcmdpbjogM3B4IDA7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxufVxyXG5cclxuLnNpZGViYXItdG9nZ2xlOmhvdmVyIC50b2dnbGUtbGluZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcblxyXG4uc2lkZWJhci10b2dnbGUub3BlbiAudG9nZ2xlLWxpbmU6bnRoLWNoaWxkKDEpIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGUoNHB4LCA0cHgpO1xyXG59XHJcblxyXG4uc2lkZWJhci10b2dnbGUub3BlbiAudG9nZ2xlLWxpbmU6bnRoLWNoaWxkKDIpIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5zaWRlYmFyLXRvZ2dsZS5vcGVuIC50b2dnbGUtbGluZTpudGgtY2hpbGQoMykge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGUoNHB4LCAtNHB4KTtcclxufVxyXG5cclxuLyogU2lkZWJhciBPdmVybGF5ICovXHJcbi5zaWRlYmFyLW92ZXJsYXkge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgei1pbmRleDogOTk5O1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4vKiBSZXNwb25zaXZlIFN0eWxlcyAqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgIC5zaWRlYmFyIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuc2lkZWJhci5vcGVuIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zaWRlYmFyLXRvZ2dsZSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLm1haW4tY29udGVudCB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggb24gbW9iaWxlICovXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zaWRlYmFyLW92ZXJsYXkge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuc2lkZWJhci1vdmVybGF5Lm9wZW4ge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG87XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);







class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule] }); })();


/***/ }),

/***/ 5067:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 58, vars: 0, consts: [[1, "home-section"], [1, "container"], [1, "hero-section"], [1, "profile-container"], [1, "profile-image"], ["src", "assets/img/BogdanDumbravean.webp", "alt", "Bogdan Dumbravean", 1, "avatar"], [1, "profile-badges"], [1, "badge", "secondary-badge"], [1, "intro-content"], [1, "name-heading"], [1, "typing-container"], [1, "typing-text"], [1, "intro-text"], [1, "cta-buttons"], ["routerLink", "/about", 1, "btn", "primary-btn"], ["routerLink", "/portfolio", 1, "btn", "secondary-btn"], [1, "skills-overview"], [1, "section-title"], [1, "skills-grid"], [1, "skill-card"], [1, "skill-icon"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["points", "16 18 22 12 16 6"], ["points", "8 6 2 12 8 18"], ["points", "5 3 19 12 5 21 5 3"], ["d", "M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6)(7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Software Engineer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Game Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8)(12, "h1", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Bogdan Dumbr\u0103vean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10)(15, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Developer. Designer. Creator.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12)(18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Hello, glad to see you here!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "I'm a software engineer from Romania with a passion for game development. My expertise spans from web applications to procedural content generation and AI systems.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "This portfolio showcases my projects and professional journey. Feel free to explore and get in touch if you'd like to collaborate or chat about technology.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13)(25, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "About Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "View My Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16)(30, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Core Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 18)(33, "div", 19)(34, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "svg", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "polyline", 22)(37, "polyline", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Software Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Building robust and scalable applications using modern technologies and best practices.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 19)(43, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "svg", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "polygon", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Game Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Creating immersive game experiences with Unity and custom game engines.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 19)(51, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "svg", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Full-Stack Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "End-to-end application development with expertise in both front-end and back-end technologies.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: [".home-section[_ngcontent-%COMP%] {\r\n    min-height: calc(100vh - 100px);\r\n    width: 100%;\r\n}\r\n.container[_ngcontent-%COMP%] {\r\n    margin-bottom: 60px;\r\n}\r\n\r\n.hero-section[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-bottom: 60px;\r\n}\r\n\r\n.profile-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n.profile-image[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    margin-bottom: 20px;\r\n}\r\n.avatar[_ngcontent-%COMP%] {\r\n    width: 280px;\r\n    height: 280px;\r\n    border-radius: 20px;\r\n    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);\r\n    object-fit: cover;\r\n    border: 5px solid white;\r\n    transition: transform 0.3s ease, box-shadow 0.3s ease;\r\n}\r\n.avatar[_ngcontent-%COMP%]:hover {\r\n    transform: translateY(-10px);\r\n    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);\r\n}\r\n.profile-badges[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    gap: 10px;\r\n    justify-content: center;\r\n}\r\n.badge[_ngcontent-%COMP%] {\r\n    padding: 6px 16px;\r\n    border-radius: 20px;\r\n    font-size: 14px;\r\n    font-weight: 600;\r\n}\r\n.primary-badge[_ngcontent-%COMP%] {\r\n    background-color: #f9b205;\r\n    color: #fff;\r\n}\r\n.secondary-badge[_ngcontent-%COMP%] {\r\n    background-color: #f0f0f0;\r\n    color: #333;\r\n}\r\n\r\n.intro-content[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n    padding-left: 50px;\r\n}\r\n.name-heading[_ngcontent-%COMP%] {\r\n    font-size: 3rem;\r\n    margin-bottom: 10px;\r\n    color: #232323;\r\n}\r\n\r\n.typing-container[_ngcontent-%COMP%] {\r\n    height: 30px;\r\n    margin-bottom: 30px;\r\n}\r\n.typing-text[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    font-size: 1.2rem;\r\n    color: #555;\r\n    font-weight: 500;\r\n}\r\n.typing-text[_ngcontent-%COMP%]::after {\r\n    content: '|';\r\n    animation: blink 0.7s infinite;\r\n    margin-left: 5px;\r\n}\r\n@keyframes blink {\r\n    0%, 100% { opacity: 1; }\r\n    50% { opacity: 0; }\r\n}\r\n.intro-text[_ngcontent-%COMP%] {\r\n    color: #555;\r\n    margin-bottom: 30px;\r\n}\r\n.intro-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin-bottom: 15px;\r\n    line-height: 1.6;\r\n}\r\n\r\n.cta-buttons[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    gap: 15px;\r\n    margin-top: 20px;\r\n}\r\n.btn[_ngcontent-%COMP%] {\r\n    padding: 12px 30px;\r\n    border-radius: 30px;\r\n    font-weight: 600;\r\n    font-size: 16px;\r\n    transition: all 0.3s ease;\r\n    text-align: center;\r\n}\r\n.primary-btn[_ngcontent-%COMP%] {\r\n    background: #f9b205;\r\n    color: white;\r\n    box-shadow: 0 4px 15px rgba(249, 178, 5, 0.3);\r\n}\r\n.primary-btn[_ngcontent-%COMP%]:hover {\r\n    background: #e9a400;\r\n    transform: translateY(-3px);\r\n    box-shadow: 0 8px 20px rgba(249, 178, 5, 0.4);\r\n}\r\n.secondary-btn[_ngcontent-%COMP%] {\r\n    background: white;\r\n    color: #333;\r\n    border: 2px solid #eee;\r\n}\r\n.secondary-btn[_ngcontent-%COMP%]:hover {\r\n    background: #f8f8f8;\r\n    transform: translateY(-3px);\r\n    border-color: #ddd;\r\n}\r\n\r\n.skills-overview[_ngcontent-%COMP%] {\r\n    padding: 40px;\r\n    background: white;\r\n    border-radius: 20px;\r\n    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);\r\n}\r\n.section-title[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: inline-block;\r\n    margin-bottom: 30px;\r\n    padding-bottom: 10px;\r\n}\r\n.section-title[_ngcontent-%COMP%]::after {\r\n    content: '';\r\n    position: absolute;\r\n    left: 0;\r\n    bottom: 0;\r\n    width: 60px;\r\n    height: 3px;\r\n    background: #f9b205;\r\n}\r\n.skills-grid[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\r\n    grid-gap: 30px;\r\n    gap: 30px;\r\n}\r\n.skill-card[_ngcontent-%COMP%] {\r\n    padding: 25px;\r\n    border-radius: 15px;\r\n    background: #f9f9f9;\r\n    transition: transform 0.3s ease, box-shadow 0.3s ease;\r\n    border-left: 4px solid #f9b205;\r\n}\r\n.skill-card[_ngcontent-%COMP%]:hover {\r\n    transform: translateY(-5px);\r\n    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);\r\n}\r\n.skill-icon[_ngcontent-%COMP%] {\r\n    width: 50px;\r\n    height: 50px;\r\n    background: #f0f0f0;\r\n    border-radius: 50%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-bottom: 20px;\r\n    color: #f9b205;\r\n}\r\n.skill-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n    margin-bottom: 15px;\r\n    color: #333;\r\n}\r\n.skill-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    color: #666;\r\n    line-height: 1.5;\r\n}\r\n\r\n@media (min-width: 992px) {\r\n    .container[_ngcontent-%COMP%] {\r\n        padding: 0 40px;\r\n        width: 100%;\r\n        max-width: 1200px;\r\n        margin: 0 auto;\r\n    }\r\n}\r\n@media (max-width: 991px) {\r\n    .hero-section[_ngcontent-%COMP%] {\r\n        flex-direction: column;\r\n        text-align: center;\r\n    }\r\n    \r\n    .intro-content[_ngcontent-%COMP%] {\r\n        padding-left: 0;\r\n        padding-top: 40px;\r\n    }\r\n    \r\n    .cta-buttons[_ngcontent-%COMP%] {\r\n        justify-content: center;\r\n    }\r\n    \r\n    .name-heading[_ngcontent-%COMP%] {\r\n        font-size: 2.5rem;\r\n    }\r\n    \r\n    .container[_ngcontent-%COMP%] {\r\n        padding: 0 20px;\r\n        width: 100%;\r\n        margin: 0 auto;\r\n    }\r\n}\r\n@media (max-width: 767px) {\r\n    .avatar[_ngcontent-%COMP%] {\r\n        width: 200px;\r\n        height: 200px;\r\n    }\r\n    \r\n    .skills-grid[_ngcontent-%COMP%] {\r\n        grid-template-columns: 1fr;\r\n    }\r\n    \r\n    .name-heading[_ngcontent-%COMP%] {\r\n        font-size: 2rem;\r\n    }\r\n    \r\n    .typing-text[_ngcontent-%COMP%] {\r\n        font-size: 1rem;\r\n    }\r\n    \r\n    .cta-buttons[_ngcontent-%COMP%] {\r\n        flex-direction: column;\r\n    }\r\n    \r\n    .btn[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        margin-bottom: 10px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,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LG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7QUFFQSxzQkFBc0I7QUFDdEI7SUFDSTtRQUNJLGVBQWU7UUFDZixXQUFXO1FBQ1gsaUJBQWlCO1FBQ2pCLGNBQWM7SUFDbEI7QUFDSjtBQUVBO0lBQ0k7UUFDSSxzQkFBc0I7UUFDdEIsa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLHVCQUF1QjtJQUMzQjs7SUFFQTtRQUNJLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGVBQWU7UUFDZixXQUFXO1FBQ1gsY0FBYztJQUNsQjtBQUNKO0FBRUE7SUFDSTtRQUNJLFlBQVk7UUFDWixhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksMEJBQTBCO0lBQzlCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxzQkFBc0I7SUFDMUI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsbUJBQW1CO0lBQ3ZCO0FBQ0oiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQmFzZSBzdHlsZXMgKi9cclxuLmhvbWUtc2VjdGlvbiB7XHJcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTAwcHgpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDtcclxufVxyXG5cclxuLyogSGVybyBzZWN0aW9uICovXHJcbi5oZXJvLXNlY3Rpb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xyXG59XHJcblxyXG4vKiBQcm9maWxlIGFyZWEgKi9cclxuLnByb2ZpbGUtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnByb2ZpbGUtaW1hZ2Uge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmF2YXRhciB7XHJcbiAgICB3aWR0aDogMjgwcHg7XHJcbiAgICBoZWlnaHQ6IDI4MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZSwgYm94LXNoYWRvdyAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi5hdmF0YXI6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMTVweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxufVxyXG5cclxuLnByb2ZpbGUtYmFkZ2VzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBnYXA6IDEwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmJhZGdlIHtcclxuICAgIHBhZGRpbmc6IDZweCAxNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5wcmltYXJ5LWJhZGdlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWIyMDU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLnNlY29uZGFyeS1iYWRnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbn1cclxuXHJcbi8qIEludHJvIGNvbnRlbnQgKi9cclxuLmludHJvLWNvbnRlbnQge1xyXG4gICAgZmxleDogMTtcclxuICAgIHBhZGRpbmctbGVmdDogNTBweDtcclxufVxyXG5cclxuLm5hbWUtaGVhZGluZyB7XHJcbiAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgY29sb3I6ICMyMzIzMjM7XHJcbn1cclxuXHJcbi8qIFR5cGluZyBlZmZlY3QgKi9cclxuLnR5cGluZy1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLnR5cGluZy10ZXh0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgY29sb3I6ICM1NTU7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4udHlwaW5nLXRleHQ6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICd8JztcclxuICAgIGFuaW1hdGlvbjogYmxpbmsgMC43cyBpbmZpbml0ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYmxpbmsge1xyXG4gICAgMCUsIDEwMCUgeyBvcGFjaXR5OiAxOyB9XHJcbiAgICA1MCUgeyBvcGFjaXR5OiAwOyB9XHJcbn1cclxuXHJcbi5pbnRyby10ZXh0IHtcclxuICAgIGNvbG9yOiAjNTU1O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLmludHJvLXRleHQgcCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcclxufVxyXG5cclxuLyogQ1RBIGJ1dHRvbnMgKi9cclxuLmN0YS1idXR0b25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIHBhZGRpbmc6IDEycHggMzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnByaW1hcnktYnRuIHtcclxuICAgIGJhY2tncm91bmQ6ICNmOWIyMDU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCAxNXB4IHJnYmEoMjQ5LCAxNzgsIDUsIDAuMyk7XHJcbn1cclxuXHJcbi5wcmltYXJ5LWJ0bjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTlhNDAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gICAgYm94LXNoYWRvdzogMCA4cHggMjBweCByZ2JhKDI0OSwgMTc4LCA1LCAwLjQpO1xyXG59XHJcblxyXG4uc2Vjb25kYXJ5LWJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2VlZTtcclxufVxyXG5cclxuLnNlY29uZGFyeS1idG46aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2Y4ZjhmODtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgIGJvcmRlci1jb2xvcjogI2RkZDtcclxufVxyXG5cclxuLyogU2tpbGxzIHNlY3Rpb24gKi9cclxuLnNraWxscy1vdmVydmlldyB7XHJcbiAgICBwYWRkaW5nOiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxufVxyXG5cclxuLnNlY3Rpb24tdGl0bGUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uc2VjdGlvbi10aXRsZTo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDNweDtcclxuICAgIGJhY2tncm91bmQ6ICNmOWIyMDU7XHJcbn1cclxuXHJcbi5za2lsbHMtZ3JpZCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzAwcHgsIDFmcikpO1xyXG4gICAgZ2FwOiAzMHB4O1xyXG59XHJcblxyXG4uc2tpbGwtY2FyZCB7XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGJhY2tncm91bmQ6ICNmOWY5Zjk7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLCBib3gtc2hhZG93IDAuM3MgZWFzZTtcclxuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgI2Y5YjIwNTtcclxufVxyXG5cclxuLnNraWxsLWNhcmQ6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xyXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxufVxyXG5cclxuLnNraWxsLWljb24ge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBjb2xvcjogI2Y5YjIwNTtcclxufVxyXG5cclxuLnNraWxsLWNhcmQgaDQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG59XHJcblxyXG4uc2tpbGwtY2FyZCBwIHtcclxuICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxufVxyXG5cclxuLyogUmVzcG9uc2l2ZSBzdHlsZXMgKi9cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgICBwYWRkaW5nOiAwIDQwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICAgLmhlcm8tc2VjdGlvbiB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5pbnRyby1jb250ZW50IHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDQwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jdGEtYnV0dG9ucyB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5uYW1lLWhlYWRpbmcge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgLmF2YXRhciB7XHJcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5za2lsbHMtZ3JpZCB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5uYW1lLWhlYWRpbmcge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnR5cGluZy10ZXh0IHtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jdGEtYnV0dG9ucyB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmJ0biB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map