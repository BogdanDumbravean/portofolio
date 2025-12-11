"use strict";
(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([["src_app_portfolio_portfolio_module_ts"],{

/***/ 6689:
/*!****************************************************!*\
  !*** ./src/app/portfolio/games/games.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GamesComponent": () => (/* binding */ GamesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/project.service */ 354);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);




function GamesComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13)(1, "div", 14)(2, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("error", function GamesComponent_div_17_Template_img_error_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.onImageError($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 16)(4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 17)(9, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " View Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\u2192");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const game_r2 = ctx.$implicit;
    const idx_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", game_r2.profile, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", game_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](game_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](game_r2.summary);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/portfolio/projects/games/", idx_r3, "");
} }
function GamesComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "No games match your search criteria.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
class GamesComponent {
    constructor(projectService) {
        this.projectService = projectService;
        this.games = [];
        this.filteredGames = [];
        this.searchTerm = '';
    }
    ngOnInit() {
        this.projectService.getGamesProjects().subscribe(games => {
            this.games = games;
            this.filteredGames = [...this.games];
        });
    }
    searchGames(event) {
        const input = event.target;
        this.searchTerm = input.value.toLowerCase();
        if (this.searchTerm) {
            this.filteredGames = this.games.filter(game => game.title.toLowerCase().includes(this.searchTerm) ||
                game.summary.toLowerCase().includes(this.searchTerm));
        }
        else {
            this.filteredGames = [...this.games];
        }
    }
    onImageError(event) {
        console.log('Image failed to load:', event.target.src);
        // Try different fallback images in order of preference
        const fallbackImages = [
            'assets/img/favicon.png',
            'assets/img/triangle-mosaic.png',
            'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjlmOWY5Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk5vIEltYWdlPC90ZXh0Pjwvc3ZnPg=='
        ];
        // Try the first fallback image if it's not already being used
        if (!event.target.hasAttribute('data-fallback-tried')) {
            event.target.setAttribute('data-fallback-tried', 'true');
            event.target.src = fallbackImages[0];
        }
        else if (!event.target.hasAttribute('data-fallback-tried-2')) {
            event.target.setAttribute('data-fallback-tried-2', 'true');
            event.target.src = fallbackImages[1];
        }
        else {
            // Use SVG placeholder as last resort
            event.target.src = fallbackImages[2];
        }
    }
}
GamesComponent.ɵfac = function GamesComponent_Factory(t) { return new (t || GamesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_project_service__WEBPACK_IMPORTED_MODULE_0__.ProjectService)); };
GamesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GamesComponent, selectors: [["app-games"]], decls: 19, vars: 2, consts: [[1, "project-list-section"], [1, "container"], [1, "list-header"], [1, "back-link"], ["routerLink", "/portfolio"], [1, "list-intro"], [1, "search-filter"], [1, "search-box"], ["type", "text", "placeholder", "Search games...", 3, "input"], [1, "search-icon"], [1, "project-list"], ["class", "project-item game-item", 4, "ngFor", "ngForOf"], ["class", "no-results", 4, "ngIf"], [1, "project-item", "game-item"], [1, "project-image"], [3, "src", "alt", "error"], [1, "project-details"], [1, "project-actions"], [1, "view-project-btn", 3, "routerLink"], [1, "arrow"], [1, "no-results"]], template: function GamesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Games Developed");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 3)(6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u2190 Back to Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5)(9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "A showcase of games I've developed, primarily built with Unity. These projects demonstrate my game design and development skills across various genres and platforms.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 6)(12, "div", 7)(13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function GamesComponent_Template_input_input_13_listener($event) { return ctx.searchGames($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\uD83D\uDD0D");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, GamesComponent_div_17_Template, 13, 5, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, GamesComponent_div_18_Template, 3, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.filteredGames);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.filteredGames.length === 0);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf], styles: [".project-list-section[_ngcontent-%COMP%] {\r\n    padding: 30px 0 60px 0;\r\n    background-color: #f9f9f9;\r\n    min-height: calc(100vh - 60px);\r\n    margin: -30px 0;\r\n}\r\n.container[_ngcontent-%COMP%] {\r\n    max-width: 1200px;\r\n    margin: 0 auto;\r\n    padding: 0 20px;\r\n}\r\n\r\n.list-header[_ngcontent-%COMP%] {\r\n    margin-bottom: 50px;\r\n    position: relative;\r\n    background: #ffffff;\r\n    border-radius: 12px;\r\n    padding: 30px;\r\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\r\n    border-left: 5px solid #f9b205;\r\n}\r\n.list-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-size: 2.5rem;\r\n    color: #232323;\r\n    margin-bottom: 15px;\r\n    font-weight: 700;\r\n    position: relative;\r\n    display: inline-block;\r\n    padding-bottom: 15px;\r\n}\r\n.list-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:after {\r\n    content: '';\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 120px;\r\n    height: 4px;\r\n    background: #f9b205;\r\n    border-radius: 2px;\r\n}\r\n.back-link[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 30px;\r\n    right: 30px;\r\n}\r\n.back-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: #f9b205;\r\n    text-decoration: none;\r\n    font-weight: 600;\r\n    transition: all 0.3s ease;\r\n    padding: 8px 16px;\r\n    border: 2px solid #f9b205;\r\n    border-radius: 25px;\r\n    background: rgba(249, 178, 5, 0.1);\r\n}\r\n.back-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    background: #f9b205;\r\n    color: #ffffff;\r\n}\r\n.list-intro[_ngcontent-%COMP%] {\r\n    max-width: 800px;\r\n    margin: 20px 0 0 0;\r\n    line-height: 1.8;\r\n    color: #555;\r\n    font-size: 1.1rem;\r\n}\r\n\r\n.search-filter[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    margin-bottom: 40px;\r\n}\r\n.search-box[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 100%;\r\n    max-width: 400px;\r\n}\r\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    padding: 15px 50px 15px 25px;\r\n    border: 2px solid #e0e0e0;\r\n    border-radius: 30px;\r\n    font-size: 16px;\r\n    background: #ffffff;\r\n    color: #333;\r\n    transition: all 0.3s ease;\r\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\r\n}\r\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\r\n    color: #999;\r\n}\r\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\r\n    border-color: #f9b205;\r\n    outline: none;\r\n    box-shadow: 0 0 0 3px rgba(249, 178, 5, 0.2);\r\n}\r\n.search-icon[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    right: 20px;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n    color: #f9b205;\r\n    pointer-events: none;\r\n    font-size: 1.2rem;\r\n}\r\n\r\n.project-list[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 30px;\r\n}\r\n.project-item[_ngcontent-%COMP%] {\r\n    background: #ffffff;\r\n    border-radius: 12px;\r\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\r\n    overflow: hidden;\r\n    display: flex;\r\n    transition: all 0.4s ease;\r\n    border: 2px solid transparent;\r\n    position: relative;\r\n}\r\n.project-item[_ngcontent-%COMP%]:hover {\r\n    transform: translateY(-8px);\r\n    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);\r\n    border-color: #f9b205;\r\n}\r\n.project-image[_ngcontent-%COMP%] {\r\n    flex: 0 0 280px;\r\n    overflow: hidden;\r\n    position: relative;\r\n}\r\n.project-image[_ngcontent-%COMP%]::before {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background: linear-gradient(45deg, rgba(249, 178, 5, 0.1), transparent);\r\n    z-index: 1;\r\n    opacity: 0;\r\n    transition: opacity 0.3s ease;\r\n}\r\n.project-item[_ngcontent-%COMP%]:hover   .project-image[_ngcontent-%COMP%]::before {\r\n    opacity: 1;\r\n}\r\n.project-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: cover;\r\n    transition: transform 0.5s ease;\r\n}\r\n.project-item[_ngcontent-%COMP%]:hover   .project-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    transform: scale(1.1);\r\n}\r\n.project-details[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n    padding: 30px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    background: #ffffff;\r\n}\r\n.project-details[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    margin-bottom: 20px;\r\n    color: #232323;\r\n    font-size: 1.8rem;\r\n    font-weight: 700;\r\n}\r\n.project-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin-bottom: 25px;\r\n    flex-grow: 1;\r\n    color: #555555;\r\n    line-height: 1.7;\r\n    font-size: 1.1rem;\r\n}\r\n.project-actions[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    margin-top: auto;\r\n}\r\n.view-project-btn[_ngcontent-%COMP%] {\r\n    display: inline-flex;\r\n    align-items: center;\r\n    padding: 15px 30px;\r\n    color: #ffffff;\r\n    background-color: #f9b205;\r\n    border-radius: 30px;\r\n    text-decoration: none;\r\n    font-weight: 600;\r\n    transition: all 0.3s ease;\r\n}\r\n.view-project-btn[_ngcontent-%COMP%]:hover {\r\n    background-color: #232323;\r\n    color: #ffffff;\r\n    transform: translateY(-2px);\r\n    box-shadow: 0 8px 20px rgba(35, 35, 35, 0.3);\r\n}\r\n.view-project-btn[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\r\n    margin-left: 10px;\r\n    transition: transform 0.3s ease;\r\n    font-size: 1.2rem;\r\n}\r\n.view-project-btn[_ngcontent-%COMP%]:hover   .arrow[_ngcontent-%COMP%] {\r\n    transform: translateX(5px);\r\n}\r\n\r\n.game-item[_ngcontent-%COMP%] {\r\n    border-left: 5px solid #f9b205;\r\n}\r\n\r\n.game-badge[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 15px;\r\n    right: 15px;\r\n    background: rgba(249, 178, 5, 0.9);\r\n    color: #ffffff;\r\n    padding: 8px 15px;\r\n    border-radius: 20px;\r\n    font-size: 0.8rem;\r\n    font-weight: bold;\r\n    z-index: 2;\r\n    text-transform: uppercase;\r\n    letter-spacing: 1px;\r\n}\r\n\r\n.platform-tags[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    gap: 10px;\r\n    margin-top: 15px;\r\n    margin-bottom: 20px;\r\n}\r\n.platform-tag[_ngcontent-%COMP%] {\r\n    background: rgba(249, 178, 5, 0.1);\r\n    border: 1px solid #f9b205;\r\n    color: #f9b205;\r\n    padding: 5px 12px;\r\n    border-radius: 20px;\r\n    font-size: 0.8rem;\r\n    font-weight: 500;\r\n    text-transform: uppercase;\r\n    letter-spacing: 0.5px;\r\n}\r\n\r\n.no-results[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    padding: 50px;\r\n    background: #ffffff;\r\n    border-radius: 12px;\r\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\r\n    border-left: 5px solid #f9b205;\r\n}\r\n.no-results[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    color: #555;\r\n    font-size: 1.3rem;\r\n    font-weight: 500;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .project-item[_ngcontent-%COMP%] {\r\n        flex-direction: column;\r\n    }\r\n\r\n    .project-image[_ngcontent-%COMP%] {\r\n        height: 200px;\r\n    }\r\n    \r\n    .back-link[_ngcontent-%COMP%] {\r\n        position: static;\r\n        margin-top: 15px;\r\n        text-align: center;\r\n    }\r\n    \r\n    .list-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n        font-size: 2rem;\r\n    }\r\n    \r\n    .search-box[_ngcontent-%COMP%] {\r\n        max-width: 100%;\r\n    }\r\n    \r\n    .project-list-section[_ngcontent-%COMP%] {\r\n        padding: 20px 0 40px 0;\r\n    }\r\n    \r\n    .list-header[_ngcontent-%COMP%] {\r\n        padding: 20px;\r\n    }\r\n    \r\n    .back-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        font-size: 0.9rem;\r\n        padding: 6px 12px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0RBQStEO0FBQy9EO0lBQ0ksc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6Qiw4QkFBOEI7SUFDOUIsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxlQUFlO0FBQ25CO0FBRUEsZ0JBQWdCO0FBQ2hCO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYix5Q0FBeUM7SUFDekMsOEJBQThCO0FBQ2xDO0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixvQkFBb0I7QUFDeEI7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsU0FBUztJQUNULE9BQU87SUFDUCxZQUFZO0lBQ1osV0FBVztJQUNYLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztBQUNmO0FBRUE7SUFDSSxjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsa0NBQWtDO0FBQ3RDO0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGlCQUFpQjtBQUNyQjtBQUVBLHNCQUFzQjtBQUN0QjtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksV0FBVztJQUNYLDRCQUE0QjtJQUM1Qix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLHlCQUF5QjtJQUN6Qix5Q0FBeUM7QUFDN0M7QUFFQTtJQUNJLFdBQVc7QUFDZjtBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYiw0Q0FBNEM7QUFDaEQ7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsUUFBUTtJQUNSLDJCQUEyQjtJQUMzQixjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLGlCQUFpQjtBQUNyQjtBQUVBLGlCQUFpQjtBQUNqQjtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiO0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHlDQUF5QztJQUN6QyxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHlCQUF5QjtJQUN6Qiw2QkFBNkI7SUFDN0Isa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsMkNBQTJDO0lBQzNDLHFCQUFxQjtBQUN6QjtBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztJQUNULHVFQUF1RTtJQUN2RSxVQUFVO0lBQ1YsVUFBVTtJQUNWLDZCQUE2QjtBQUNqQztBQUVBO0lBQ0ksVUFBVTtBQUNkO0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQiwrQkFBK0I7QUFDbkM7QUFFQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUVBO0lBQ0ksT0FBTztJQUNQLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQix5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsMkJBQTJCO0lBQzNCLDRDQUE0QztBQUNoRDtBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLCtCQUErQjtJQUMvQixpQkFBaUI7QUFDckI7QUFFQTtJQUNJLDBCQUEwQjtBQUM5QjtBQUVBLCtCQUErQjtBQUMvQjtJQUNJLDhCQUE4QjtBQUNsQztBQUVBLGdCQUFnQjtBQUNoQjtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLGtDQUFrQztJQUNsQyxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVix5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCO0FBRUEsa0JBQWtCO0FBQ2xCO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLHFCQUFxQjtBQUN6QjtBQUVBLHVCQUF1QjtBQUN2QjtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQix5Q0FBeUM7SUFDekMsOEJBQThCO0FBQ2xDO0FBRUE7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjtBQUVBLHNCQUFzQjtBQUN0QjtJQUNJO1FBQ0ksc0JBQXNCO0lBQzFCOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGdCQUFnQjtRQUNoQixnQkFBZ0I7UUFDaEIsa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxzQkFBc0I7SUFDMUI7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLGlCQUFpQjtJQUNyQjtBQUNKIiwiZmlsZSI6ImdhbWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBHYW1lcyBMaXN0IFNlY3Rpb24gLSBDb25zaXN0ZW50IHdpdGggcHJvZ3JhbW1pbmcgY29tcG9uZW50ICovXHJcbi5wcm9qZWN0LWxpc3Qtc2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDAgNjBweCAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcclxuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA2MHB4KTtcclxuICAgIG1hcmdpbjogLTMwcHggMDtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMCAyMHB4O1xyXG59XHJcblxyXG4vKiBMaXN0IEhlYWRlciAqL1xyXG4ubGlzdC1oZWFkZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjZjliMjA1O1xyXG59XHJcblxyXG4ubGlzdC1oZWFkZXIgaDIge1xyXG4gICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICBjb2xvcjogIzIzMjMyMztcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5saXN0LWhlYWRlciBoMjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBoZWlnaHQ6IDRweDtcclxuICAgIGJhY2tncm91bmQ6ICNmOWIyMDU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbn1cclxuXHJcbi5iYWNrLWxpbmsge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAzMHB4O1xyXG4gICAgcmlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi5iYWNrLWxpbmsgYSB7XHJcbiAgICBjb2xvcjogI2Y5YjIwNTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZjliMjA1O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQ5LCAxNzgsIDUsIDAuMSk7XHJcbn1cclxuXHJcbi5iYWNrLWxpbmsgYTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjliMjA1O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5saXN0LWludHJvIHtcclxuICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICBtYXJnaW46IDIwcHggMCAwIDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS44O1xyXG4gICAgY29sb3I6ICM1NTU7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxufVxyXG5cclxuLyogU2VhcmNoIGFuZCBGaWx0ZXIgKi9cclxuLnNlYXJjaC1maWx0ZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG5cclxuLnNlYXJjaC1ib3gge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG59XHJcblxyXG4uc2VhcmNoLWJveCBpbnB1dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDE1cHggNTBweCAxNXB4IDI1cHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZTBlMGUwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuLnNlYXJjaC1ib3ggaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjOTk5O1xyXG59XHJcblxyXG4uc2VhcmNoLWJveCBpbnB1dDpmb2N1cyB7XHJcbiAgICBib3JkZXItY29sb3I6ICNmOWIyMDU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoMjQ5LCAxNzgsIDUsIDAuMik7XHJcbn1cclxuXHJcbi5zZWFyY2gtaWNvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMjBweDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgY29sb3I6ICNmOWIyMDU7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG59XHJcblxyXG4vKiBQcm9qZWN0IExpc3QgKi9cclxuLnByb2plY3QtbGlzdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMzBweDtcclxufVxyXG5cclxuLnByb2plY3QtaXRlbSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWl0ZW06aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC04cHgpO1xyXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgIGJvcmRlci1jb2xvcjogI2Y5YjIwNTtcclxufVxyXG5cclxuLnByb2plY3QtaW1hZ2Uge1xyXG4gICAgZmxleDogMCAwIDI4MHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnByb2plY3QtaW1hZ2U6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiYSgyNDksIDE3OCwgNSwgMC4xKSwgdHJhbnNwYXJlbnQpO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcclxufVxyXG5cclxuLnByb2plY3QtaXRlbTpob3ZlciAucHJvamVjdC1pbWFnZTo6YmVmb3JlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWltYWdlIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZTtcclxufVxyXG5cclxuLnByb2plY3QtaXRlbTpob3ZlciAucHJvamVjdC1pbWFnZSBpbWcge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG59XHJcblxyXG4ucHJvamVjdC1kZXRhaWxzIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG59XHJcblxyXG4ucHJvamVjdC1kZXRhaWxzIGgzIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBjb2xvcjogIzIzMjMyMztcclxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLnByb2plY3QtZGV0YWlscyBwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBjb2xvcjogIzU1NTU1NTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjc7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxufVxyXG5cclxuLnByb2plY3QtYWN0aW9ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbn1cclxuXHJcbi52aWV3LXByb2plY3QtYnRuIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE1cHggMzBweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5YjIwNTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxufVxyXG5cclxuLnZpZXctcHJvamVjdC1idG46aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIzMjMyMztcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gICAgYm94LXNoYWRvdzogMCA4cHggMjBweCByZ2JhKDM1LCAzNSwgMzUsIDAuMyk7XHJcbn1cclxuXHJcbi52aWV3LXByb2plY3QtYnRuIC5hcnJvdyB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxufVxyXG5cclxuLnZpZXctcHJvamVjdC1idG46aG92ZXIgLmFycm93IHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpO1xyXG59XHJcblxyXG4vKiBHYW1lLXNwZWNpZmljIGVuaGFuY2VtZW50cyAqL1xyXG4uZ2FtZS1pdGVtIHtcclxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2Y5YjIwNTtcclxufVxyXG5cclxuLyogR2FtZSBiYWRnZXMgKi9cclxuLmdhbWUtYmFkZ2Uge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxNXB4O1xyXG4gICAgcmlnaHQ6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0OSwgMTc4LCA1LCAwLjkpO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBwYWRkaW5nOiA4cHggMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59XHJcblxyXG4vKiBQbGF0Zm9ybSB0YWdzICovXHJcbi5wbGF0Zm9ybS10YWdzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLnBsYXRmb3JtLXRhZyB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0OSwgMTc4LCA1LCAwLjEpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Y5YjIwNTtcclxuICAgIGNvbG9yOiAjZjliMjA1O1xyXG4gICAgcGFkZGluZzogNXB4IDEycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxufVxyXG5cclxuLyogTm8gUmVzdWx0cyBNZXNzYWdlICovXHJcbi5uby1yZXN1bHRzIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjZjliMjA1O1xyXG59XHJcblxyXG4ubm8tcmVzdWx0cyBwIHtcclxuICAgIGNvbG9yOiAjNTU1O1xyXG4gICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4vKiBSZXNwb25zaXZlIFN0eWxlcyAqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5wcm9qZWN0LWl0ZW0ge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2plY3QtaW1hZ2Uge1xyXG4gICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5iYWNrLWxpbmsge1xyXG4gICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5saXN0LWhlYWRlciBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuc2VhcmNoLWJveCB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucHJvamVjdC1saXN0LXNlY3Rpb24ge1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHggMCA0MHB4IDA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5saXN0LWhlYWRlciB7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmJhY2stbGluayBhIHtcclxuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICBwYWRkaW5nOiA2cHggMTJweDtcclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ 2064:
/*!**************************************************!*\
  !*** ./src/app/portfolio/main/main.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainComponent": () => (/* binding */ MainComponent)
/* harmony export */ });
/* harmony import */ var src_app_project_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/project.list */ 2555);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);




function MainComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12)(1, "div", 13)(2, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("error", function MainComponent_div_12_Template_img_error_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.onImageError($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 15)(4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 17)(9, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " View Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const project_r2 = ctx.$implicit;
    const idx_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", project_r2.profile, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", project_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r2.summary);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/portfolio/projects/programming/", idx_r3, "");
} }
function MainComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12)(1, "div", 13)(2, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("error", function MainComponent_div_25_Template_img_error_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.onImageError($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 15)(4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 17)(9, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " View Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const project_r6 = ctx.$implicit;
    const idx_r7 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", project_r6.profile, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", project_r6.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r6.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r6.summary);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/portfolio/projects/games/", idx_r7, "");
} }
const _c0 = function () { return ["/portfolio/programming"]; };
const _c1 = function () { return ["/portfolio/games"]; };
class MainComponent {
    constructor() {
        this.programming = src_app_project_list__WEBPACK_IMPORTED_MODULE_0__.PROGRAMMING.slice(0, 3);
        this.games = src_app_project_list__WEBPACK_IMPORTED_MODULE_0__.GAMES.slice(0, 3);
    }
    ngOnInit() {
    }
    onImageError(event) {
        console.log('Image failed to load:', event.target.src);
        // Try different fallback images in order of preference
        const fallbackImages = [
            'assets/img/favicon.png',
            'assets/img/triangle-mosaic.png',
            'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjlmOWY5Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk5vIEltYWdlPC90ZXh0Pjwvc3ZnPg=='
        ];
        // Try the first fallback image if it's not already being used
        if (!event.target.hasAttribute('data-fallback-tried')) {
            event.target.setAttribute('data-fallback-tried', 'true');
            event.target.src = fallbackImages[0];
        }
        else if (!event.target.hasAttribute('data-fallback-tried-2')) {
            event.target.setAttribute('data-fallback-tried-2', 'true');
            event.target.src = fallbackImages[1];
        }
        else {
            // Use SVG placeholder as last resort
            event.target.src = fallbackImages[2];
        }
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(); };
MainComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 33, vars: 6, consts: [[1, "portfolio-section"], [1, "container"], [1, "portfolio-header"], [1, "intro-text"], [1, "portfolio-category"], [1, "section-header"], [1, "project-grid"], ["class", "project-card", 4, "ngFor", "ngForOf"], [1, "view-more-section"], [1, "view-more-text"], [1, "view-more-btn", 3, "routerLink"], [1, "arrow"], [1, "project-card"], [1, "project-image"], [3, "src", "alt", "error"], [1, "project-content"], [1, "project-summary"], [1, "project-footer"], [1, "view-details-btn", 3, "routerLink"], ["src", "assets/img/rm_arw_rgt.png", "alt", "Arrow icon", 1, "arrow-icon"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "My Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Welcome to my portfolio showcasing my programming projects and games. I develop both software applications and games (primarily using Unity). Below are some highlights of my work. Feel free to explore the complete collections by category.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4)(8, "div", 5)(9, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Programming Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, MainComponent_div_12_Template, 12, 5, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 8)(14, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Want to see more programming projects?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Browse All Programming Projects ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "\u2192");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 4)(21, "div", 5)(22, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Games Developed");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, MainComponent_div_25_Template, 12, 5, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 8)(27, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Interested in my game development work?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, " Explore All Games ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "\u2192");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.programming);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.games);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c1));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref], styles: [".portfolio-section[_ngcontent-%COMP%] {\r\n    padding: 30px 0 60px 0;\r\n    background-color: #f9f9f9;\r\n    min-height: calc(100vh - 60px);\r\n    margin: -30px 0;\r\n}\r\n.container[_ngcontent-%COMP%] {\r\n    max-width: 1200px;\r\n    margin: 0 auto;\r\n    padding: 0 20px;\r\n}\r\n\r\n.portfolio-header[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin-bottom: 50px;\r\n}\r\n.portfolio-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-size: 3rem;\r\n    color: #232323;\r\n    position: relative;\r\n    display: inline-block;\r\n    margin-bottom: 20px;\r\n    padding-bottom: 15px;\r\n    font-weight: 700;\r\n}\r\n.portfolio-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:after {\r\n    content: '';\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    width: 120px;\r\n    height: 4px;\r\n    background: #f9b205;\r\n    border-radius: 2px;\r\n}\r\n.intro-text[_ngcontent-%COMP%] {\r\n    max-width: 800px;\r\n    margin: 0 auto;\r\n    line-height: 1.8;\r\n    color: #555;\r\n    font-size: 1.1rem;\r\n}\r\n\r\n.portfolio-category[_ngcontent-%COMP%] {\r\n    margin-bottom: 60px;\r\n}\r\n.section-header[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    margin-bottom: 30px;\r\n    padding: 20px 30px;\r\n    background: #ffffff;\r\n    border-radius: 12px;\r\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\r\n    border-left: 5px solid #f9b205;\r\n}\r\n.section-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    font-size: 2rem;\r\n    color: #232323;\r\n    font-weight: 700;\r\n    margin: 0;\r\n}\r\n.view-all[_ngcontent-%COMP%] {\r\n    color: #f9b205;\r\n    text-decoration: none;\r\n    font-weight: 600;\r\n    display: flex;\r\n    align-items: center;\r\n    transition: all 0.3s ease;\r\n    padding: 10px 20px;\r\n    background: rgba(249, 178, 5, 0.1);\r\n    border-radius: 25px;\r\n    border: 2px solid #f9b205;\r\n}\r\n.view-all[_ngcontent-%COMP%]:hover {\r\n    color: #ffffff;\r\n    background: #f9b205;\r\n    transform: translateY(-2px);\r\n    box-shadow: 0 4px 12px rgba(249, 178, 5, 0.3);\r\n}\r\n.arrow-icon[_ngcontent-%COMP%] {\r\n    margin-left: 8px;\r\n    transition: transform 0.3s ease;\r\n    font-size: 1.2rem;\r\n}\r\n.view-all[_ngcontent-%COMP%]:hover   .arrow-icon[_ngcontent-%COMP%] {\r\n    transform: translateX(3px);\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .section-header[_ngcontent-%COMP%] {\r\n        flex-direction: column;\r\n        gap: 15px;\r\n        text-align: center;\r\n        padding: 20px;\r\n    }\r\n    \r\n    .section-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n        font-size: 1.5rem;\r\n    }\r\n    \r\n    .view-all[_ngcontent-%COMP%] {\r\n        padding: 8px 16px;\r\n        font-size: 0.9rem;\r\n    }\r\n}\r\n\r\n.project-grid[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));\r\n    grid-gap: 30px;\r\n    gap: 30px;\r\n}\r\n\r\n.project-card[_ngcontent-%COMP%] {\r\n    background: #ffffff;\r\n    border-radius: 12px;\r\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\r\n    overflow: hidden;\r\n    transition: all 0.4s ease;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    border: 2px solid transparent;\r\n}\r\n.project-card[_ngcontent-%COMP%]:hover {\r\n    transform: translateY(-10px);\r\n    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);\r\n    border-color: #f9b205;\r\n}\r\n.project-image[_ngcontent-%COMP%] {\r\n    height: 200px;\r\n    overflow: hidden;\r\n    position: relative;\r\n}\r\n.project-image[_ngcontent-%COMP%]::before {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background: linear-gradient(45deg, rgba(249, 178, 5, 0.1), transparent);\r\n    z-index: 1;\r\n    opacity: 0;\r\n    transition: opacity 0.3s ease;\r\n}\r\n.project-card[_ngcontent-%COMP%]:hover   .project-image[_ngcontent-%COMP%]::before {\r\n    opacity: 1;\r\n}\r\n.project-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: cover;\r\n    transition: transform 0.5s ease, opacity 0.3s ease;\r\n    background: #f0f0f0;\r\n}\r\n.project-image[_ngcontent-%COMP%]   img[data-fallback-tried][_ngcontent-%COMP%] {\r\n    opacity: 0.8;\r\n}\r\n.project-image[_ngcontent-%COMP%]   img[data-fallback-tried-2][_ngcontent-%COMP%] {\r\n    opacity: 0.6;\r\n    filter: grayscale(20%);\r\n}\r\n.project-card[_ngcontent-%COMP%]:hover   .project-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    transform: scale(1.1);\r\n}\r\n.project-content[_ngcontent-%COMP%] {\r\n    padding: 25px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex-grow: 1;\r\n    background: #ffffff;\r\n}\r\n.project-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n    font-size: 1.4rem;\r\n    margin-bottom: 15px;\r\n    color: #232323;\r\n    font-weight: 700;\r\n}\r\n.project-summary[_ngcontent-%COMP%] {\r\n    flex-grow: 1;\r\n    color: #555555;\r\n    line-height: 1.6;\r\n    margin-bottom: 20px;\r\n}\r\n.project-footer[_ngcontent-%COMP%] {\r\n    margin-top: auto;\r\n    padding-top: 20px;\r\n    border-top: 2px solid #f0f0f0;\r\n    display: flex;\r\n    justify-content: flex-end;\r\n}\r\n.view-details-btn[_ngcontent-%COMP%] {\r\n    display: inline-flex;\r\n    align-items: center;\r\n    padding: 12px 24px;\r\n    background: #f9b205;\r\n    color: #ffffff;\r\n    font-weight: 600;\r\n    text-decoration: none;\r\n    border-radius: 25px;\r\n    transition: all 0.3s ease;\r\n}\r\n.view-details-btn[_ngcontent-%COMP%]:hover {\r\n    background: #232323;\r\n    color: #ffffff;\r\n    transform: translateY(-2px);\r\n    box-shadow: 0 8px 20px rgba(35, 35, 35, 0.3);\r\n}\r\n.view-details-btn[_ngcontent-%COMP%]   .arrow-icon[_ngcontent-%COMP%] {\r\n    width: 16px;\r\n    height: auto;\r\n    margin-left: 8px;\r\n    transition: transform 0.3s ease;\r\n    filter: brightness(0) invert(1);\r\n}\r\n.view-details-btn[_ngcontent-%COMP%]:hover   .arrow-icon[_ngcontent-%COMP%] {\r\n    transform: translateX(5px);\r\n}\r\n\r\n.view-more-section[_ngcontent-%COMP%] {\r\n    margin-top: 40px;\r\n    text-align: center;\r\n    padding: 30px;\r\n    background: linear-gradient(135deg, rgba(249, 178, 5, 0.05), rgba(249, 178, 5, 0.1));\r\n    border-radius: 12px;\r\n    border: 2px dashed #f9b205;\r\n}\r\n.view-more-text[_ngcontent-%COMP%] {\r\n    font-size: 1.1rem;\r\n    color: #555;\r\n    margin-bottom: 20px;\r\n    font-weight: 500;\r\n}\r\n.view-more-btn[_ngcontent-%COMP%] {\r\n    display: inline-flex;\r\n    align-items: center;\r\n    padding: 15px 30px;\r\n    background: #f9b205;\r\n    color: #ffffff;\r\n    text-decoration: none;\r\n    border-radius: 30px;\r\n    font-weight: 700;\r\n    font-size: 1.1rem;\r\n    transition: all 0.3s ease;\r\n    box-shadow: 0 4px 15px rgba(249, 178, 5, 0.3);\r\n}\r\n.view-more-btn[_ngcontent-%COMP%]:hover {\r\n    background: #232323;\r\n    color: #ffffff;\r\n    transform: translateY(-3px);\r\n    box-shadow: 0 8px 25px rgba(35, 35, 35, 0.3);\r\n}\r\n.view-more-btn[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\r\n    margin-left: 10px;\r\n    font-size: 1.2rem;\r\n    transition: transform 0.3s ease;\r\n}\r\n.view-more-btn[_ngcontent-%COMP%]:hover   .arrow[_ngcontent-%COMP%] {\r\n    transform: translateX(5px);\r\n}\r\n\r\n@media (max-width: 992px) {\r\n    .project-grid[_ngcontent-%COMP%] {\r\n        grid-template-columns: repeat(2, 1fr);\r\n        gap: 20px;\r\n    }\r\n    \r\n    .portfolio-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n        font-size: 2.5rem;\r\n    }\r\n    \r\n    .section-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n        font-size: 1.5rem;\r\n    }\r\n}\r\n@media (max-width: 768px) {\r\n    .project-grid[_ngcontent-%COMP%] {\r\n        grid-template-columns: 1fr;\r\n    }\r\n    \r\n    .portfolio-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n        font-size: 2rem;\r\n    }\r\n    \r\n    .section-header[_ngcontent-%COMP%] {\r\n        flex-direction: column;\r\n        gap: 10px;\r\n        text-align: center;\r\n    }\r\n    \r\n    .filter-buttons[_ngcontent-%COMP%] {\r\n        flex-wrap: wrap;\r\n        gap: 10px;\r\n    }\r\n      .portfolio-section[_ngcontent-%COMP%] {\r\n        padding: 40px 0;\r\n    }\r\n    \r\n    .view-more-section[_ngcontent-%COMP%] {\r\n        margin-top: 30px;\r\n        padding: 20px;\r\n    }\r\n    \r\n    .view-more-text[_ngcontent-%COMP%] {\r\n        font-size: 1rem;\r\n    }\r\n    \r\n    .view-more-btn[_ngcontent-%COMP%] {\r\n        padding: 12px 24px;\r\n        font-size: 1rem;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,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QUNJLHFDQUFxQztRQUNyQyxTQUFTO0lBQ2I7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7QUFDSjtBQUVBO0lBQ0k7UUFDSSwwQkFBMEI7SUFDOUI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksc0JBQXNCO1FBQ3RCLFNBQVM7UUFDVCxrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsU0FBUztJQUNiO01BQ0U7UUFDRSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZ0JBQWdCO1FBQ2hCLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLGVBQWU7SUFDbkI7QUFDSiIsImZpbGUiOiJtYWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBHZW5lcmFsIExheW91dCAqL1xyXG4ucG9ydGZvbGlvLXNlY3Rpb24ge1xyXG4gICAgcGFkZGluZzogMzBweCAwIDYwcHggMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XHJcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjBweCk7XHJcbiAgICBtYXJnaW46IC0zMHB4IDA7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDAgMjBweDtcclxufVxyXG5cclxuLyogUG9ydGZvbGlvIEhlYWRlciAqL1xyXG4ucG9ydGZvbGlvLWhlYWRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG4ucG9ydGZvbGlvLWhlYWRlciBoMiB7XHJcbiAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICBjb2xvcjogIzIzMjMyMztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5wb3J0Zm9saW8taGVhZGVyIGgyOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgaGVpZ2h0OiA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjliMjA1O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG59XHJcblxyXG4uaW50cm8tdGV4dCB7XHJcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBsaW5lLWhlaWdodDogMS44O1xyXG4gICAgY29sb3I6ICM1NTU7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxufVxyXG5cclxuLyogUG9ydGZvbGlvIENhdGVnb3J5IFNlY3Rpb25zICovXHJcbi5wb3J0Zm9saW8tY2F0ZWdvcnkge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDtcclxufVxyXG5cclxuLnNlY3Rpb24taGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIHBhZGRpbmc6IDIwcHggMzBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNmOWIyMDU7XHJcbn1cclxuXHJcbi5zZWN0aW9uLWhlYWRlciBoMyB7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBjb2xvcjogIzIzMjMyMztcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi52aWV3LWFsbCB7XHJcbiAgICBjb2xvcjogI2Y5YjIwNTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0OSwgMTc4LCA1LCAwLjEpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmOWIyMDU7XHJcbn1cclxuXHJcbi52aWV3LWFsbDpob3ZlciB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJhY2tncm91bmQ6ICNmOWIyMDU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMjQ5LCAxNzgsIDUsIDAuMyk7XHJcbn1cclxuXHJcbi5hcnJvdy1pY29uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbn1cclxuXHJcbi52aWV3LWFsbDpob3ZlciAuYXJyb3ctaWNvbiB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoM3B4KTtcclxufVxyXG5cclxuLyogUmVzcG9uc2l2ZSBhZGp1c3RtZW50cyBmb3Igc2VjdGlvbiBoZWFkZXJzICovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLnNlY3Rpb24taGVhZGVyIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGdhcDogMTVweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnNlY3Rpb24taGVhZGVyIGgzIHtcclxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnZpZXctYWxsIHtcclxuICAgICAgICBwYWRkaW5nOiA4cHggMTZweDtcclxuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIH1cclxufVxyXG5cclxuLyogUHJvamVjdCBHcmlkICovXHJcbi5wcm9qZWN0LWdyaWQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDM1MHB4LCAxZnIpKTtcclxuICAgIGdhcDogMzBweDtcclxufVxyXG5cclxuLyogUHJvamVjdCBDYXJkcyAqL1xyXG4ucHJvamVjdC1jYXJkIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWNhcmQ6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICBib3JkZXItY29sb3I6ICNmOWIyMDU7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWltYWdlIHtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ucHJvamVjdC1pbWFnZTo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDI0OSwgMTc4LCA1LCAwLjEpLCB0cmFuc3BhcmVudCk7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xyXG59XHJcblxyXG4ucHJvamVjdC1jYXJkOmhvdmVyIC5wcm9qZWN0LWltYWdlOjpiZWZvcmUge1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLnByb2plY3QtaW1hZ2UgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlLCBvcGFjaXR5IDAuM3MgZWFzZTtcclxuICAgIGJhY2tncm91bmQ6ICNmMGYwZjA7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWltYWdlIGltZ1tkYXRhLWZhbGxiYWNrLXRyaWVkXSB7XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWltYWdlIGltZ1tkYXRhLWZhbGxiYWNrLXRyaWVkLTJdIHtcclxuICAgIG9wYWNpdHk6IDAuNjtcclxuICAgIGZpbHRlcjogZ3JheXNjYWxlKDIwJSk7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWNhcmQ6aG92ZXIgLnByb2plY3QtaW1hZ2UgaW1nIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxufVxyXG5cclxuLnByb2plY3QtY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG59XHJcblxyXG4ucHJvamVjdC1jb250ZW50IGg0IHtcclxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIGNvbG9yOiAjMjMyMzIzO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLnByb2plY3Qtc3VtbWFyeSB7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBjb2xvcjogIzU1NTU1NTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4ucHJvamVjdC1mb290ZXIge1xyXG4gICAgbWFyZ2luLXRvcDogYXV0bztcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNmMGYwZjA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5cclxuLnZpZXctZGV0YWlscy1idG4ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTJweCAyNHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2Y5YjIwNTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG59XHJcblxyXG4udmlldy1kZXRhaWxzLWJ0bjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjMyMzIzO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDhweCAyMHB4IHJnYmEoMzUsIDM1LCAzNSwgMC4zKTtcclxufVxyXG5cclxuLnZpZXctZGV0YWlscy1idG4gLmFycm93LWljb24ge1xyXG4gICAgd2lkdGg6IDE2cHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcclxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwKSBpbnZlcnQoMSk7XHJcbn1cclxuXHJcbi52aWV3LWRldGFpbHMtYnRuOmhvdmVyIC5hcnJvdy1pY29uIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpO1xyXG59XHJcblxyXG4vKiBWaWV3IE1vcmUgU2VjdGlvbiAqL1xyXG4udmlldy1tb3JlLXNlY3Rpb24ge1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDI0OSwgMTc4LCA1LCAwLjA1KSwgcmdiYSgyNDksIDE3OCwgNSwgMC4xKSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgYm9yZGVyOiAycHggZGFzaGVkICNmOWIyMDU7XHJcbn1cclxuXHJcbi52aWV3LW1vcmUtdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIGNvbG9yOiAjNTU1O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi52aWV3LW1vcmUtYnRuIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE1cHggMzBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmOWIyMDU7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMTVweCByZ2JhKDI0OSwgMTc4LCA1LCAwLjMpO1xyXG59XHJcblxyXG4udmlldy1tb3JlLWJ0bjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjMyMzIzO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDhweCAyNXB4IHJnYmEoMzUsIDM1LCAzNSwgMC4zKTtcclxufVxyXG5cclxuLnZpZXctbW9yZS1idG4gLmFycm93IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xyXG59XHJcblxyXG4udmlldy1tb3JlLWJ0bjpob3ZlciAuYXJyb3cge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCk7XHJcbn1cclxuXHJcbi8qIFJlc3BvbnNpdmUgU3R5bGVzICovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgLnByb2plY3QtZ3JpZCB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcclxuICAgICAgICBnYXA6IDIwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5wb3J0Zm9saW8taGVhZGVyIGgyIHtcclxuICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnNlY3Rpb24taGVhZGVyIGgzIHtcclxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAucHJvamVjdC1ncmlkIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnBvcnRmb2xpby1oZWFkZXIgaDIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnNlY3Rpb24taGVhZGVyIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGdhcDogMTBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5maWx0ZXItYnV0dG9ucyB7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIGdhcDogMTBweDtcclxuICAgIH1cclxuICAgICAgLnBvcnRmb2xpby1zZWN0aW9uIHtcclxuICAgICAgICBwYWRkaW5nOiA0MHB4IDA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC52aWV3LW1vcmUtc2VjdGlvbiB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAudmlldy1tb3JlLXRleHQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnZpZXctbW9yZS1idG4ge1xyXG4gICAgICAgIHBhZGRpbmc6IDEycHggMjRweDtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ 5124:
/*!*******************************************************!*\
  !*** ./src/app/portfolio/portfolio-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortfolioRoutingModule": () => (/* binding */ PortfolioRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main/main.component */ 2064);
/* harmony import */ var _programming_programming_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./programming/programming.component */ 752);
/* harmony import */ var _games_games_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./games/games.component */ 6689);
/* harmony import */ var _project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-detail/project-detail.component */ 6939);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);







const routes = [
    {
        path: '',
        component: _main_main_component__WEBPACK_IMPORTED_MODULE_0__.MainComponent,
        data: { title: 'Portfolio - Bogdan Dumbrăvean' }
    },
    {
        path: 'programming',
        component: _programming_programming_component__WEBPACK_IMPORTED_MODULE_1__.ProgrammingComponent,
        data: { title: 'Programming Projects - Bogdan Dumbrăvean' }
    },
    {
        path: 'games',
        component: _games_games_component__WEBPACK_IMPORTED_MODULE_2__.GamesComponent,
        data: { title: 'Games Developed - Bogdan Dumbrăvean' }
    },
    {
        path: 'projects/:list/:id',
        component: _project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_3__.ProjectDetailComponent,
        data: { title: 'Project Details - Bogdan Dumbrăvean' }
    }
];
class PortfolioRoutingModule {
}
PortfolioRoutingModule.ɵfac = function PortfolioRoutingModule_Factory(t) { return new (t || PortfolioRoutingModule)(); };
PortfolioRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: PortfolioRoutingModule });
PortfolioRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](PortfolioRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 8423:
/*!***********************************************!*\
  !*** ./src/app/portfolio/portfolio.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortfolioModule": () => (/* binding */ PortfolioModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _portfolio_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./portfolio-routing.module */ 5124);
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main/main.component */ 2064);
/* harmony import */ var _programming_programming_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./programming/programming.component */ 752);
/* harmony import */ var _games_games_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./games/games.component */ 6689);
/* harmony import */ var _project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project-detail/project-detail.component */ 6939);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);







class PortfolioModule {
}
PortfolioModule.ɵfac = function PortfolioModule_Factory(t) { return new (t || PortfolioModule)(); };
PortfolioModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: PortfolioModule });
PortfolioModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _portfolio_routing_module__WEBPACK_IMPORTED_MODULE_0__.PortfolioRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](PortfolioModule, { declarations: [_main_main_component__WEBPACK_IMPORTED_MODULE_1__.MainComponent,
        _programming_programming_component__WEBPACK_IMPORTED_MODULE_2__.ProgrammingComponent,
        _games_games_component__WEBPACK_IMPORTED_MODULE_3__.GamesComponent,
        _project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_4__.ProjectDetailComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _portfolio_routing_module__WEBPACK_IMPORTED_MODULE_0__.PortfolioRoutingModule] }); })();


/***/ }),

/***/ 752:
/*!****************************************************************!*\
  !*** ./src/app/portfolio/programming/programming.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgrammingComponent": () => (/* binding */ ProgrammingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/project.service */ 354);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);




function ProgrammingComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13)(1, "div", 14)(2, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("error", function ProgrammingComponent_div_17_Template_img_error_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.onImageError($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 16)(4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 17)(9, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " View Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\u2192");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const project_r2 = ctx.$implicit;
    const idx_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", project_r2.profile, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", project_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r2.summary);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/portfolio/projects/programming/", idx_r3, "");
} }
function ProgrammingComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "No projects match your search criteria.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
class ProgrammingComponent {
    constructor(projectService) {
        this.projectService = projectService;
        this.programming = [];
        this.filteredProjects = [];
        this.searchTerm = '';
    }
    ngOnInit() {
        this.projectService.getProgrammingProjects().subscribe(projects => {
            this.programming = projects;
            this.filteredProjects = [...this.programming];
        });
    }
    searchProjects(event) {
        const input = event.target;
        this.searchTerm = input.value.toLowerCase();
        if (this.searchTerm) {
            this.filteredProjects = this.programming.filter(project => project.title.toLowerCase().includes(this.searchTerm) ||
                project.summary.toLowerCase().includes(this.searchTerm));
        }
        else {
            this.filteredProjects = [...this.programming];
        }
    }
    onImageError(event) {
        console.log('Image failed to load:', event.target.src);
        // Try different fallback images in order of preference
        const fallbackImages = [
            'assets/img/favicon.png',
            'assets/img/triangle-mosaic.png',
            'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjlmOWY5Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk5vIEltYWdlPC90ZXh0Pjwvc3ZnPg=='
        ];
        // Try the first fallback image if it's not already being used
        if (!event.target.hasAttribute('data-fallback-tried')) {
            event.target.setAttribute('data-fallback-tried', 'true');
            event.target.src = fallbackImages[0];
        }
        else if (!event.target.hasAttribute('data-fallback-tried-2')) {
            event.target.setAttribute('data-fallback-tried-2', 'true');
            event.target.src = fallbackImages[1];
        }
        else {
            // Use SVG placeholder as last resort
            event.target.src = fallbackImages[2];
        }
    }
}
ProgrammingComponent.ɵfac = function ProgrammingComponent_Factory(t) { return new (t || ProgrammingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_project_service__WEBPACK_IMPORTED_MODULE_0__.ProjectService)); };
ProgrammingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProgrammingComponent, selectors: [["app-programming"]], decls: 19, vars: 2, consts: [[1, "project-list-section"], [1, "container"], [1, "list-header"], [1, "back-link"], ["routerLink", "/portfolio"], [1, "list-intro"], [1, "search-filter"], [1, "search-box"], ["type", "text", "placeholder", "Search projects...", 3, "input"], [1, "search-icon"], [1, "project-list"], ["class", "project-item", 4, "ngFor", "ngForOf"], ["class", "no-results", 4, "ngIf"], [1, "project-item"], [1, "project-image"], [3, "src", "alt", "error"], [1, "project-details"], [1, "project-actions"], [1, "view-project-btn", 3, "routerLink"], [1, "arrow"], [1, "no-results"]], template: function ProgrammingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Programming Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 3)(6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u2190 Back to Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5)(9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "A collection of programming projects I've worked on throughout my career. These range from academic projects to professional applications and personal endeavors.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 6)(12, "div", 7)(13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function ProgrammingComponent_Template_input_input_13_listener($event) { return ctx.searchProjects($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\uD83D\uDD0D");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, ProgrammingComponent_div_17_Template, 13, 5, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, ProgrammingComponent_div_18_Template, 3, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.filteredProjects);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.filteredProjects.length === 0);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf], styles: [".project-list-section[_ngcontent-%COMP%] {\r\n    padding: 30px 0 60px 0;\r\n    background-color: #f9f9f9;\r\n    min-height: calc(100vh - 60px);\r\n    margin: -30px 0;\r\n}\r\n.container[_ngcontent-%COMP%] {\r\n    max-width: 1200px;\r\n    margin: 0 auto;\r\n    padding: 0 20px;\r\n}\r\n\r\n.list-header[_ngcontent-%COMP%] {\r\n    margin-bottom: 50px;\r\n    position: relative;\r\n    background: #ffffff;\r\n    border-radius: 12px;\r\n    padding: 30px;\r\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\r\n    border-left: 5px solid #f9b205;\r\n}\r\n.list-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-size: 2.5rem;\r\n    color: #232323;\r\n    margin-bottom: 15px;\r\n    font-weight: 700;\r\n    position: relative;\r\n    display: inline-block;\r\n    padding-bottom: 15px;\r\n}\r\n.list-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:after {\r\n    content: '';\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 120px;\r\n    height: 4px;\r\n    background: #f9b205;\r\n    border-radius: 2px;\r\n}\r\n.back-link[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 30px;\r\n    right: 30px;\r\n}\r\n.back-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: #f9b205;\r\n    text-decoration: none;\r\n    font-weight: 600;\r\n    transition: all 0.3s ease;\r\n    padding: 8px 16px;\r\n    border: 2px solid #f9b205;\r\n    border-radius: 25px;\r\n    background: rgba(249, 178, 5, 0.1);\r\n}\r\n.back-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    background: #f9b205;\r\n    color: #ffffff;\r\n}\r\n.list-intro[_ngcontent-%COMP%] {\r\n    max-width: 800px;\r\n    margin: 20px 0 0 0;\r\n    line-height: 1.8;\r\n    color: #555;\r\n    font-size: 1.1rem;\r\n}\r\n\r\n.search-filter[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    margin-bottom: 40px;\r\n}\r\n.search-box[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 100%;\r\n    max-width: 400px;\r\n}\r\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    padding: 15px 50px 15px 25px;\r\n    border: 2px solid #e0e0e0;\r\n    border-radius: 30px;\r\n    font-size: 16px;\r\n    background: #ffffff;\r\n    color: #333;\r\n    transition: all 0.3s ease;\r\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\r\n}\r\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\r\n    color: #999;\r\n}\r\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\r\n    border-color: #f9b205;\r\n    outline: none;\r\n    box-shadow: 0 0 0 3px rgba(249, 178, 5, 0.2);\r\n}\r\n.search-icon[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    right: 20px;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n    color: #f9b205;\r\n    pointer-events: none;\r\n    font-size: 1.2rem;\r\n}\r\n\r\n.project-list[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 30px;\r\n}\r\n.project-item[_ngcontent-%COMP%] {\r\n    background: #ffffff;\r\n    border-radius: 12px;\r\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\r\n    overflow: hidden;\r\n    display: flex;\r\n    transition: all 0.4s ease;\r\n    border: 2px solid transparent;\r\n}\r\n.project-item[_ngcontent-%COMP%]:hover {\r\n    transform: translateY(-8px);\r\n    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);\r\n    border-color: #f9b205;\r\n}\r\n.project-image[_ngcontent-%COMP%] {\r\n    flex: 0 0 280px;\r\n    overflow: hidden;\r\n    position: relative;\r\n}\r\n.project-image[_ngcontent-%COMP%]::before {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background: linear-gradient(45deg, rgba(249, 178, 5, 0.1), transparent);\r\n    z-index: 1;\r\n    opacity: 0;\r\n    transition: opacity 0.3s ease;\r\n}\r\n.project-item[_ngcontent-%COMP%]:hover   .project-image[_ngcontent-%COMP%]::before {\r\n    opacity: 1;\r\n}\r\n.project-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: cover;\r\n    transition: transform 0.5s ease, opacity 0.3s ease;\r\n    background: #f0f0f0;\r\n}\r\n.project-image[_ngcontent-%COMP%]   img[data-fallback-tried][_ngcontent-%COMP%] {\r\n    opacity: 0.8;\r\n}\r\n.project-image[_ngcontent-%COMP%]   img[data-fallback-tried-2][_ngcontent-%COMP%] {\r\n    opacity: 0.6;\r\n    filter: grayscale(20%);\r\n}\r\n.project-item[_ngcontent-%COMP%]:hover   .project-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    transform: scale(1.1);\r\n}\r\n.project-details[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n    padding: 30px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    background: #ffffff;\r\n}\r\n.project-details[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    margin-bottom: 20px;\r\n    color: #232323;\r\n    font-size: 1.8rem;\r\n    font-weight: 700;\r\n}\r\n.project-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin-bottom: 25px;\r\n    flex-grow: 1;\r\n    color: #555555;\r\n    line-height: 1.7;\r\n    font-size: 1.1rem;\r\n}\r\n.project-actions[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    margin-top: auto;\r\n}\r\n.view-project-btn[_ngcontent-%COMP%] {\r\n    display: inline-flex;\r\n    align-items: center;\r\n    padding: 15px 30px;\r\n    color: #ffffff;\r\n    background-color: #f9b205;\r\n    border-radius: 30px;\r\n    text-decoration: none;\r\n    font-weight: 600;\r\n    transition: all 0.3s ease;\r\n}\r\n.view-project-btn[_ngcontent-%COMP%]:hover {\r\n    background-color: #232323;\r\n    color: #ffffff;\r\n    transform: translateY(-2px);\r\n    box-shadow: 0 8px 20px rgba(35, 35, 35, 0.3);\r\n}\r\n.view-project-btn[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\r\n    margin-left: 10px;\r\n    transition: transform 0.3s ease;\r\n    font-size: 1.2rem;\r\n}\r\n.view-project-btn[_ngcontent-%COMP%]:hover   .arrow[_ngcontent-%COMP%] {\r\n    transform: translateX(5px);\r\n}\r\n\r\n.no-results[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    padding: 50px;\r\n    background: #ffffff;\r\n    border-radius: 12px;\r\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\r\n    border-left: 5px solid #f9b205;\r\n}\r\n.no-results[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    color: #555;\r\n    font-size: 1.3rem;\r\n    font-weight: 500;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .project-item[_ngcontent-%COMP%] {\r\n        flex-direction: column;\r\n    }\r\n\r\n    .project-image[_ngcontent-%COMP%] {\r\n        height: 200px;\r\n    }\r\n    \r\n    .back-link[_ngcontent-%COMP%] {\r\n        position: static;\r\n        margin-top: 15px;\r\n        text-align: center;\r\n    }\r\n    \r\n    .list-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n        font-size: 2rem;\r\n    }\r\n    \r\n    .search-box[_ngcontent-%COMP%] {\r\n        max-width: 100%;\r\n    }\r\n    \r\n    .project-list-section[_ngcontent-%COMP%] {\r\n        padding: 20px 0 40px 0;\r\n    }\r\n    \r\n    .list-header[_ngcontent-%COMP%] {\r\n        padding: 20px;\r\n    }\r\n    \r\n    .back-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        font-size: 0.9rem;\r\n        padding: 6px 12px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2dyYW1taW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseUJBQXlCO0FBQ3pCO0lBQ0ksc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6Qiw4QkFBOEI7SUFDOUIsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxlQUFlO0FBQ25CO0FBRUEsZ0JBQWdCO0FBQ2hCO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYix5Q0FBeUM7SUFDekMsOEJBQThCO0FBQ2xDO0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixvQkFBb0I7QUFDeEI7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsU0FBUztJQUNULE9BQU87SUFDUCxZQUFZO0lBQ1osV0FBVztJQUNYLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztBQUNmO0FBRUE7SUFDSSxjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsa0NBQWtDO0FBQ3RDO0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGlCQUFpQjtBQUNyQjtBQUVBLHNCQUFzQjtBQUN0QjtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksV0FBVztJQUNYLDRCQUE0QjtJQUM1Qix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLHlCQUF5QjtJQUN6Qix5Q0FBeUM7QUFDN0M7QUFFQTtJQUNJLFdBQVc7QUFDZjtBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYiw0Q0FBNEM7QUFDaEQ7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsUUFBUTtJQUNSLDJCQUEyQjtJQUMzQixjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLGlCQUFpQjtBQUNyQjtBQUVBLGlCQUFpQjtBQUNqQjtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiO0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHlDQUF5QztJQUN6QyxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHlCQUF5QjtJQUN6Qiw2QkFBNkI7QUFDakM7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQiwyQ0FBMkM7SUFDM0MscUJBQXFCO0FBQ3pCO0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1QsdUVBQXVFO0lBQ3ZFLFVBQVU7SUFDVixVQUFVO0lBQ1YsNkJBQTZCO0FBQ2pDO0FBRUE7SUFDSSxVQUFVO0FBQ2Q7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtEQUFrRDtJQUNsRCxtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLFlBQVk7QUFDaEI7QUFFQTtJQUNJLFlBQVk7SUFDWixzQkFBc0I7QUFDMUI7QUFFQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUVBO0lBQ0ksT0FBTztJQUNQLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQix5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsMkJBQTJCO0lBQzNCLDRDQUE0QztBQUNoRDtBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLCtCQUErQjtJQUMvQixpQkFBaUI7QUFDckI7QUFFQTtJQUNJLDBCQUEwQjtBQUM5QjtBQUVBLHVCQUF1QjtBQUN2QjtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQix5Q0FBeUM7SUFDekMsOEJBQThCO0FBQ2xDO0FBRUE7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjtBQUVBLHNCQUFzQjtBQUN0QjtJQUNJO1FBQ0ksc0JBQXNCO0lBQzFCOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGdCQUFnQjtRQUNoQixnQkFBZ0I7UUFDaEIsa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxzQkFBc0I7SUFDMUI7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLGlCQUFpQjtJQUNyQjtBQUNKIiwiZmlsZSI6InByb2dyYW1taW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBQcm9qZWN0IExpc3QgU2VjdGlvbiAqL1xyXG4ucHJvamVjdC1saXN0LXNlY3Rpb24ge1xyXG4gICAgcGFkZGluZzogMzBweCAwIDYwcHggMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XHJcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjBweCk7XHJcbiAgICBtYXJnaW46IC0zMHB4IDA7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDAgMjBweDtcclxufVxyXG5cclxuLyogTGlzdCBIZWFkZXIgKi9cclxuLmxpc3QtaGVhZGVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2Y5YjIwNTtcclxufVxyXG5cclxuLmxpc3QtaGVhZGVyIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgY29sb3I6ICMyMzIzMjM7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4ubGlzdC1oZWFkZXIgaDI6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgaGVpZ2h0OiA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjliMjA1O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG59XHJcblxyXG4uYmFjay1saW5rIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMzBweDtcclxuICAgIHJpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4uYmFjay1saW5rIGEge1xyXG4gICAgY29sb3I6ICNmOWIyMDU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2Y5YjIwNTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0OSwgMTc4LCA1LCAwLjEpO1xyXG59XHJcblxyXG4uYmFjay1saW5rIGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2Y5YjIwNTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4ubGlzdC1pbnRybyB7XHJcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgbWFyZ2luOiAyMHB4IDAgMCAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuODtcclxuICAgIGNvbG9yOiAjNTU1O1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW07XHJcbn1cclxuXHJcbi8qIFNlYXJjaCBhbmQgRmlsdGVyICovXHJcbi5zZWFyY2gtZmlsdGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbn1cclxuXHJcbi5zZWFyY2gtYm94IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxufVxyXG5cclxuLnNlYXJjaC1ib3ggaW5wdXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDUwcHggMTVweCAyNXB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2UwZTBlMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbi5zZWFyY2gtYm94IGlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogIzk5OTtcclxufVxyXG5cclxuLnNlYXJjaC1ib3ggaW5wdXQ6Zm9jdXMge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZjliMjA1O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDI0OSwgMTc4LCA1LCAwLjIpO1xyXG59XHJcblxyXG4uc2VhcmNoLWljb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDIwcHg7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIGNvbG9yOiAjZjliMjA1O1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxufVxyXG5cclxuLyogUHJvamVjdCBMaXN0ICovXHJcbi5wcm9qZWN0LWxpc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDMwcHg7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWl0ZW0ge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4ucHJvamVjdC1pdGVtOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtOHB4KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICBib3JkZXItY29sb3I6ICNmOWIyMDU7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWltYWdlIHtcclxuICAgIGZsZXg6IDAgMCAyODBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWltYWdlOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoMjQ5LCAxNzgsIDUsIDAuMSksIHRyYW5zcGFyZW50KTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWl0ZW06aG92ZXIgLnByb2plY3QtaW1hZ2U6OmJlZm9yZSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4ucHJvamVjdC1pbWFnZSBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2UsIG9wYWNpdHkgMC4zcyBlYXNlO1xyXG4gICAgYmFja2dyb3VuZDogI2YwZjBmMDtcclxufVxyXG5cclxuLnByb2plY3QtaW1hZ2UgaW1nW2RhdGEtZmFsbGJhY2stdHJpZWRdIHtcclxuICAgIG9wYWNpdHk6IDAuODtcclxufVxyXG5cclxuLnByb2plY3QtaW1hZ2UgaW1nW2RhdGEtZmFsbGJhY2stdHJpZWQtMl0ge1xyXG4gICAgb3BhY2l0eTogMC42O1xyXG4gICAgZmlsdGVyOiBncmF5c2NhbGUoMjAlKTtcclxufVxyXG5cclxuLnByb2plY3QtaXRlbTpob3ZlciAucHJvamVjdC1pbWFnZSBpbWcge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG59XHJcblxyXG4ucHJvamVjdC1kZXRhaWxzIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG59XHJcblxyXG4ucHJvamVjdC1kZXRhaWxzIGgzIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBjb2xvcjogIzIzMjMyMztcclxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLnByb2plY3QtZGV0YWlscyBwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBjb2xvcjogIzU1NTU1NTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjc7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxufVxyXG5cclxuLnByb2plY3QtYWN0aW9ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbn1cclxuXHJcbi52aWV3LXByb2plY3QtYnRuIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE1cHggMzBweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5YjIwNTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxufVxyXG5cclxuLnZpZXctcHJvamVjdC1idG46aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIzMjMyMztcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gICAgYm94LXNoYWRvdzogMCA4cHggMjBweCByZ2JhKDM1LCAzNSwgMzUsIDAuMyk7XHJcbn1cclxuXHJcbi52aWV3LXByb2plY3QtYnRuIC5hcnJvdyB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxufVxyXG5cclxuLnZpZXctcHJvamVjdC1idG46aG92ZXIgLmFycm93IHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpO1xyXG59XHJcblxyXG4vKiBObyBSZXN1bHRzIE1lc3NhZ2UgKi9cclxuLm5vLXJlc3VsdHMge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogNTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNmOWIyMDU7XHJcbn1cclxuXHJcbi5uby1yZXN1bHRzIHAge1xyXG4gICAgY29sb3I6ICM1NTU7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi8qIFJlc3BvbnNpdmUgU3R5bGVzICovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLnByb2plY3QtaXRlbSB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuXHJcbiAgICAucHJvamVjdC1pbWFnZSB7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmJhY2stbGluayB7XHJcbiAgICAgICAgcG9zaXRpb246IHN0YXRpYztcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmxpc3QtaGVhZGVyIGgyIHtcclxuICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zZWFyY2gtYm94IHtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5wcm9qZWN0LWxpc3Qtc2VjdGlvbiB7XHJcbiAgICAgICAgcGFkZGluZzogMjBweCAwIDQwcHggMDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmxpc3QtaGVhZGVyIHtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYmFjay1saW5rIGEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDZweCAxMnB4O1xyXG4gICAgfVxyXG59Il19 */"] });


/***/ }),

/***/ 6939:
/*!**********************************************************************!*\
  !*** ./src/app/portfolio/project-detail/project-detail.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectDetailComponent": () => (/* binding */ ProjectDetailComponent)
/* harmony export */ });
/* harmony import */ var src_app_project_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/project.model */ 8946);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/project.service */ 354);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 318);






function ProjectDetailComponent_div_24_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div");
} }
function ProjectDetailComponent_div_24_ng_template_2_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div");
} }
function ProjectDetailComponent_div_24_ng_template_2_ng_template_1_video_1_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "video", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("error", function ProjectDetailComponent_div_24_ng_template_2_ng_template_1_video_1_Template_video_error_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4); return ctx_r19.onVideoError($event); })("loadstart", function ProjectDetailComponent_div_24_ng_template_2_ng_template_1_video_1_Template_video_loadstart_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4); return ctx_r21.onVideoLoadStart($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "source", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Your browser does not support the video tag.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const idx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3).index;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r17.getPath(ctx_r17.project.content[idx_r6]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function ProjectDetailComponent_div_24_ng_template_2_ng_template_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 29)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\uD83D\uDCF9 Video could not be loaded.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Download Video ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const idx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3).index;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx_r18.getPath(ctx_r18.project.content[idx_r6]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function ProjectDetailComponent_div_24_ng_template_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ProjectDetailComponent_div_24_ng_template_2_ng_template_1_video_1_Template, 4, 1, "video", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ProjectDetailComponent_div_24_ng_template_2_ng_template_1_div_2_Template, 5, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const idx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).index;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("max-width", ctx_r14.getMaxWidth(ctx_r14.project.content[idx_r6]))("max-height", ctx_r14.getMaxHeight(ctx_r14.project.content[idx_r6]));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("responsive-media", ctx_r14.getMaxWidth(ctx_r14.project.content[idx_r6]) || ctx_r14.getMaxHeight(ctx_r14.project.content[idx_r6]));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r14.videoError);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r14.videoError);
} }
function ProjectDetailComponent_div_24_ng_template_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 31)(1, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("error", function ProjectDetailComponent_div_24_ng_template_2_ng_template_3_Template_img_error_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r25.onImageError($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const idx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).index;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("max-width", ctx_r16.getMaxWidth(ctx_r16.project.content[idx_r6]))("max-height", ctx_r16.getMaxHeight(ctx_r16.project.content[idx_r6]));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("responsive-media", ctx_r16.getMaxWidth(ctx_r16.project.content[idx_r6]) || ctx_r16.getMaxHeight(ctx_r16.project.content[idx_r6]));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r16.getPath(ctx_r16.project.content[idx_r6]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function ProjectDetailComponent_div_24_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ProjectDetailComponent_div_24_ng_template_2_div_0_Template, 1, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ProjectDetailComponent_div_24_ng_template_2_ng_template_1_Template, 3, 8, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ProjectDetailComponent_div_24_ng_template_2_ng_template_3_Template, 2, 7, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);
    const idx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r9.isVideo(ctx_r9.project.content[idx_r6]))("ngIfThen", _r13)("ngIfElse", _r15);
} }
function ProjectDetailComponent_div_24_ng_template_4_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div");
} }
function ProjectDetailComponent_div_24_ng_template_4_ng_template_1_ng_container_1_br_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "br");
} }
function ProjectDetailComponent_div_24_ng_template_4_ng_template_1_ng_container_1_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 39)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\u2197");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const segment_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", segment_r35.url || segment_r35.text, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](segment_r35.text);
} }
function ProjectDetailComponent_div_24_ng_template_4_ng_template_1_ng_container_1_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const segment_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](segment_r35.text);
} }
function ProjectDetailComponent_div_24_ng_template_4_ng_template_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ProjectDetailComponent_div_24_ng_template_4_ng_template_1_ng_container_1_br_1_Template, 1, 0, "br", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ProjectDetailComponent_div_24_ng_template_4_ng_template_1_ng_container_1_a_2_Template, 5, 2, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ProjectDetailComponent_div_24_ng_template_4_ng_template_1_ng_container_1_span_3_Template, 2, 1, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const segment_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", segment_r35.isNewline);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", segment_r35.isLink && !segment_r35.isNewline);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !segment_r35.isLink && !segment_r35.isNewline);
} }
function ProjectDetailComponent_div_24_ng_template_4_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ProjectDetailComponent_div_24_ng_template_4_ng_template_1_ng_container_1_Template, 4, 3, "ng-container", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const idx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).index;
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r31.getRichContent(ctx_r31.project.content[idx_r6]));
} }
function ProjectDetailComponent_div_24_ng_template_4_ng_template_3_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div");
} }
function ProjectDetailComponent_div_24_ng_template_4_ng_template_3_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 43)(1, "a", 39)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\u2197");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const idx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3).index;
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", ctx_r44.getText(ctx_r44.project.content[idx_r6]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r44.getText(ctx_r44.project.content[idx_r6]));
} }
function ProjectDetailComponent_div_24_ng_template_4_ng_template_3_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 44)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const idx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3).index;
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r46.getText(ctx_r46.project.content[idx_r6]));
} }
function ProjectDetailComponent_div_24_ng_template_4_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ProjectDetailComponent_div_24_ng_template_4_ng_template_3_div_0_Template, 1, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ProjectDetailComponent_div_24_ng_template_4_ng_template_3_ng_template_1_Template, 6, 2, "ng-template", null, 41, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ProjectDetailComponent_div_24_ng_template_4_ng_template_3_ng_template_3_Template, 3, 1, "ng-template", null, 42, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);
    const idx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).index;
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r33.isLink(ctx_r33.project.content[idx_r6]))("ngIfThen", _r43)("ngIfElse", _r45);
} }
function ProjectDetailComponent_div_24_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ProjectDetailComponent_div_24_ng_template_4_div_0_Template, 1, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ProjectDetailComponent_div_24_ng_template_4_ng_template_1_Template, 2, 1, "ng-template", null, 33, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ProjectDetailComponent_div_24_ng_template_4_ng_template_3_Template, 5, 3, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);
    const idx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r11.isRichText(ctx_r11.project.content[idx_r6]))("ngIfThen", _r30)("ngIfElse", _r32);
} }
function ProjectDetailComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ProjectDetailComponent_div_24_div_1_Template, 1, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ProjectDetailComponent_div_24_ng_template_2_Template, 5, 3, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ProjectDetailComponent_div_24_ng_template_4_Template, 5, 3, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const idx_r6 = ctx.index;
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.isPath(ctx_r0.project.content[idx_r6]))("ngIfThen", _r8)("ngIfElse", _r10);
} }
const _c0 = function (a1, a2) { return ["/portfolio/projects", a1, a2]; };
function ProjectDetailComponent_a_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 5)(1, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u2190");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Previous Project ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](1, _c0, ctx_r1.projectType, ctx_r1.currentIndex - 1));
} }
function ProjectDetailComponent_span_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 46)(1, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u2190");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Previous Project ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ProjectDetailComponent_a_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Next Project ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u2192");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](1, _c0, ctx_r3.projectType, ctx_r3.currentIndex + 1));
} }
function ProjectDetailComponent_span_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Next Project ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u2192");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
const _c1 = function (a1) { return ["/portfolio", a1]; };
class ProjectDetailComponent {
    constructor(route, router, location, projectService, titleService) {
        this.route = route;
        this.router = router;
        this.location = location;
        this.projectService = projectService;
        this.titleService = titleService;
        this.hasPrevious = false;
        this.hasNext = false;
        this.projectsList = [];
        this.videoError = false;
    }
    ngOnInit() {
        // Subscribe to route parameter changes to handle navigation between projects
        this.route.params.subscribe(params => {
            const list = params['list'];
            const id = +params['id'];
            this.loadProject(list, id);
        });
    }
    loadProject(list, id) {
        this.currentIndex = id;
        this.projectType = list;
        // Reset video error state
        this.videoError = false;
        console.log('Loading project:', this.projectType, this.currentIndex);
        this.projectService.getProject(this.projectType, this.currentIndex).subscribe(project => {
            if (project) {
                this.project = project;
                this.titleService.setTitle(`${project.title} - Bogdan Dumbrăvean`);
            }
            else {
                this.project = new src_app_project_model__WEBPACK_IMPORTED_MODULE_0__.Project("Project Not Found", "", "The requested project could not be found.", []);
                this.titleService.setTitle("Project Not Found - Bogdan Dumbrăvean");
            }
        });
        let listObservable;
        if (this.projectType === "programming") {
            listObservable = this.projectService.getProgrammingProjects();
        }
        else if (this.projectType === "games") {
            listObservable = this.projectService.getGamesProjects();
        }
        if (listObservable) {
            listObservable.subscribe(list => {
                this.projectsList = list;
                this.hasPrevious = this.currentIndex > 0;
                this.hasNext = this.currentIndex < this.projectsList.length - 1;
            });
        }
        else {
            this.projectsList = [];
            this.hasPrevious = false;
            this.hasNext = false;
        }
    }
    isLink(val) {
        return (val instanceof src_app_project_model__WEBPACK_IMPORTED_MODULE_0__.Text) && val.isLink;
    }
    isVideo(val) {
        return (val instanceof src_app_project_model__WEBPACK_IMPORTED_MODULE_0__.ImgPath) && val.isVideo;
    }
    isPath(val) {
        return val instanceof src_app_project_model__WEBPACK_IMPORTED_MODULE_0__.ImgPath;
    }
    getPath(val) {
        return (val instanceof src_app_project_model__WEBPACK_IMPORTED_MODULE_0__.ImgPath) ? val.path : '';
    }
    getMaxWidth(val) {
        return (val instanceof src_app_project_model__WEBPACK_IMPORTED_MODULE_0__.ImgPath) ? val.maxWidth : undefined;
    }
    getMaxHeight(val) {
        return (val instanceof src_app_project_model__WEBPACK_IMPORTED_MODULE_0__.ImgPath) ? val.maxHeight : undefined;
    }
    getText(val) {
        return (val instanceof src_app_project_model__WEBPACK_IMPORTED_MODULE_0__.Text) ? val.text : '';
    }
    isRichText(val) {
        return (val instanceof src_app_project_model__WEBPACK_IMPORTED_MODULE_0__.Text) && (val.isRichText === true);
    }
    getRichContent(val) {
        return (val instanceof src_app_project_model__WEBPACK_IMPORTED_MODULE_0__.Text && val.richContent) ? val.richContent : [];
    }
    onImageError(event) {
        console.log('Image failed to load:', event.target.src);
        // Try different fallback images in order of preference
        const fallbackImages = [
            'assets/img/favicon.png',
            'assets/img/triangle-mosaic.png',
            'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjlmOWY5Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk5vIEltYWdlPC90ZXh0Pjwvc3ZnPg=='
        ];
        // Try the first fallback image if it's not already being used
        if (!event.target.hasAttribute('data-fallback-tried')) {
            event.target.setAttribute('data-fallback-tried', 'true');
            event.target.src = fallbackImages[0];
        }
        else if (!event.target.hasAttribute('data-fallback-tried-2')) {
            event.target.setAttribute('data-fallback-tried-2', 'true');
            event.target.src = fallbackImages[1];
        }
        else {
            // Use SVG placeholder as last resort
            event.target.src = fallbackImages[2];
        }
    }
    onVideoError(event) {
        console.log('Video failed to load:', event.target.src);
        this.videoError = true;
    }
    onVideoLoadStart(event) {
        console.log('Video loading started:', event.target.src);
        this.videoError = false;
    }
}
ProjectDetailComponent.ɵfac = function ProjectDetailComponent_Factory(t) { return new (t || ProjectDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_project_service__WEBPACK_IMPORTED_MODULE_1__.ProjectService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.Title)); };
ProjectDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ProjectDetailComponent, selectors: [["app-project-detail"]], decls: 36, vars: 22, consts: [[1, "project-detail"], [1, "container"], [1, "project-header"], [1, "breadcrumbs"], ["routerLink", "/portfolio"], [3, "routerLink"], [1, "featured-image"], [3, "src", "alt", "error"], [1, "project-summary"], [1, "summary-content"], [1, "project-content"], ["class", "content-item", 4, "ngFor", "ngForOf"], [1, "project-navigation"], [1, "prev-project"], [3, "routerLink", 4, "ngIf"], ["class", "nav-disabled", 4, "ngIf"], [1, "back-to-list"], [1, "next-project"], [1, "content-item"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["mediaBlock", ""], ["textBlock", ""], ["videoBlock", ""], ["imageBlock", ""], [1, "media-container", "video-container"], ["controls", "", "preload", "metadata", 3, "error", "loadstart", 4, "ngIf"], ["class", "video-fallback", 4, "ngIf"], ["controls", "", "preload", "metadata", 3, "error", "loadstart"], ["type", "video/mp4", 3, "src"], [1, "video-fallback"], ["target", "_blank", 1, "download-video", 3, "href"], [1, "media-container"], ["alt", "Project image", 3, "src", "error"], ["richTextBlock", ""], ["simpleTextBlock", ""], [1, "rich-text-content"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["target", "_blank", "class", "project-link", 3, "href", 4, "ngIf"], ["target", "_blank", 1, "project-link", 3, "href"], [1, "external-link-icon"], ["linkBlock", ""], ["textContent", ""], [1, "link-container"], [1, "text-content"], [1, "nav-arrow"], [1, "nav-disabled"]], template: function ProjectDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " / ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " / ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 6)(16, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("error", function ProjectDetailComponent_Template_img_error_16_listener($event) { return ctx.onImageError($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 8)(18, "div", 9)(19, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Project Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, ProjectDetailComponent_div_24_Template, 6, 3, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 12)(26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, ProjectDetailComponent_a_27_Template, 4, 4, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, ProjectDetailComponent_span_28_Template, 4, 0, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 16)(30, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](32, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, ProjectDetailComponent_a_34_Template, 4, 4, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, ProjectDetailComponent_span_35_Template, 4, 0, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](18, _c1, ctx.projectType));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 14, ctx.projectType));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.project.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.project.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.project.profile, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", ctx.project.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.project.summary);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.project.content);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.hasPrevious);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.hasPrevious);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](20, _c1, ctx.projectType));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("All ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](32, 16, ctx.projectType), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.hasNext);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.hasNext);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.TitleCasePipe], styles: [".project-detail[_ngcontent-%COMP%] {\r\n    padding: 30px 0 60px 0;\r\n    background-color: #f9f9f9;\r\n    min-height: calc(100vh - 60px);\r\n    margin: -30px 0;\r\n}\r\n.container[_ngcontent-%COMP%] {\r\n    max-width: 1200px;\r\n    margin: 0 auto;\r\n    padding: 0 20px;\r\n}\r\n\r\n.project-header[_ngcontent-%COMP%] {\r\n    margin-bottom: 40px;\r\n    background: #ffffff;\r\n    border-radius: 12px;\r\n    padding: 30px;\r\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\r\n    border-left: 5px solid #f9b205;\r\n}\r\n.breadcrumbs[_ngcontent-%COMP%] {\r\n    margin-bottom: 25px;\r\n    color: #555;\r\n    font-size: 1rem;\r\n}\r\n.breadcrumbs[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: #f9b205;\r\n    text-decoration: none;\r\n    transition: color 0.2s ease;\r\n    font-weight: 500;\r\n}\r\n.breadcrumbs[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    color: #232323;\r\n    text-decoration: underline;\r\n}\r\n.breadcrumbs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    color: #232323;\r\n    font-weight: 600;\r\n}\r\n.project-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    font-size: 3rem;\r\n    color: #232323;\r\n    margin-bottom: 5px;\r\n    position: relative;\r\n    padding-bottom: 20px;\r\n    font-weight: 700;\r\n}\r\n.project-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]:after {\r\n    content: '';\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 150px;\r\n    height: 4px;\r\n    background: #f9b205;\r\n    border-radius: 2px;\r\n}\r\n\r\n.featured-image[_ngcontent-%COMP%] {\r\n    margin-bottom: 50px;\r\n    border-radius: 12px;\r\n    overflow: hidden;\r\n    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.15);\r\n    max-height: 500px;\r\n    border: 3px solid #f9b205;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background-color: #f8f8f8;\r\n}\r\n.featured-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: auto;\r\n    max-height: 100%;\r\n    object-fit: contain;\r\n    object-position: center;\r\n    display: block;\r\n}\r\n\r\n.project-summary[_ngcontent-%COMP%] {\r\n    background: #ffffff;\r\n    border-radius: 12px;\r\n    padding: 40px;\r\n    margin-bottom: 50px;\r\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\r\n    border-left: 5px solid #f9b205;\r\n}\r\n.summary-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    font-size: 2rem;\r\n    margin-bottom: 20px;\r\n    color: #232323;\r\n    font-weight: 700;\r\n    position: relative;\r\n    display: inline-block;\r\n    padding-bottom: 10px;\r\n}\r\n.summary-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:after {\r\n    content: '';\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 80px;\r\n    height: 3px;\r\n    background: #f9b205;\r\n}\r\n.summary-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    color: #555;\r\n    line-height: 1.8;\r\n    font-size: 1.2rem;\r\n}\r\n\r\n.project-content[_ngcontent-%COMP%] {\r\n    margin-bottom: 60px;\r\n}\r\n.content-item[_ngcontent-%COMP%] {\r\n    margin-bottom: 40px;\r\n}\r\n\r\n.media-container[_ngcontent-%COMP%] {\r\n    border-radius: 12px;\r\n    overflow: hidden;\r\n    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.15);\r\n    border: 2px solid #f9b205;\r\n}\r\n\r\n.responsive-media[_ngcontent-%COMP%] {\r\n    margin: 0 auto;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n}\r\n.media-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .media-container[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    display: block;\r\n}\r\n.video-container[_ngcontent-%COMP%] {\r\n    background: #000000;\r\n}\r\n.video-fallback[_ngcontent-%COMP%] {\r\n    background: #ffffff;\r\n    padding: 30px;\r\n    border-radius: 12px;\r\n    text-align: center;\r\n    color: #555;\r\n    border: 2px dashed #f9b205;\r\n    margin-top: 10px;\r\n}\r\n.video-fallback[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin-bottom: 15px;\r\n    font-size: 1.1rem;\r\n}\r\n.download-video[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    background: #f9b205;\r\n    color: #ffffff;\r\n    padding: 12px 24px;\r\n    border-radius: 6px;\r\n    text-decoration: none;\r\n    font-weight: 600;\r\n    transition: background-color 0.3s ease;\r\n}\r\n.download-video[_ngcontent-%COMP%]:hover {\r\n    background: #e6a004;\r\n    text-decoration: none;\r\n}\r\n\r\n.text-content[_ngcontent-%COMP%] {\r\n    background: #ffffff;\r\n    padding: 30px;\r\n    border-radius: 12px;\r\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\r\n    border-left: 5px solid #f9b205;\r\n}\r\n.text-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    line-height: 1.8;\r\n    color: #555;\r\n    font-size: 1.1rem;\r\n}\r\n\r\n.link-container[_ngcontent-%COMP%] {\r\n    padding: 25px;\r\n    background: rgba(249, 178, 5, 0.1);\r\n    border-radius: 12px;\r\n    border: 2px solid #f9b205;\r\n}\r\n.project-link[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    color: #f9b205;\r\n    text-decoration: none;\r\n    font-weight: 600;\r\n    transition: color 0.3s ease;\r\n    font-size: 1.1rem;\r\n}\r\n.project-link[_ngcontent-%COMP%]:hover {\r\n    color: #232323;\r\n}\r\n.external-link-icon[_ngcontent-%COMP%] {\r\n    margin-left: 10px;\r\n    font-size: 1.2rem;\r\n}\r\n\r\n.project-navigation[_ngcontent-%COMP%] {\r\n    margin-top: 60px;\r\n    padding: 30px;\r\n    background: #ffffff;\r\n    border-radius: 12px;\r\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\r\n    border-left: 5px solid #f9b205;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n.prev-project[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .next-project[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .back-to-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: inline-flex;\r\n    align-items: center;\r\n    padding: 15px 25px;\r\n    background: #f9b205;\r\n    border-radius: 30px;\r\n    text-decoration: none;\r\n    font-weight: 600;\r\n    color: #ffffff;\r\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\r\n    transition: all 0.3s ease;\r\n    border: 2px solid transparent;\r\n}\r\n.prev-project[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .next-project[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    background: #232323;\r\n    color: #ffffff;\r\n    border-color: #232323;\r\n    transform: translateY(-3px);\r\n    box-shadow: 0 8px 20px rgba(35, 35, 35, 0.3);\r\n}\r\n.back-to-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    background: rgba(249, 178, 5, 0.1);\r\n    color: #f9b205;\r\n    border: 2px solid #f9b205;\r\n}\r\n.back-to-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    background: #f9b205;\r\n    color: #ffffff;\r\n    transform: translateY(-3px);\r\n    box-shadow: 0 8px 20px rgba(249, 178, 5, 0.3);\r\n}\r\n.nav-arrow[_ngcontent-%COMP%] {\r\n    margin: 0 8px;\r\n    transition: transform 0.3s ease;\r\n    font-size: 1.2rem;\r\n}\r\n.prev-project[_ngcontent-%COMP%]:hover   .nav-arrow[_ngcontent-%COMP%] {\r\n    transform: translateX(-5px);\r\n}\r\n.next-project[_ngcontent-%COMP%]:hover   .nav-arrow[_ngcontent-%COMP%] {\r\n    transform: translateX(5px);\r\n}\r\n.nav-disabled[_ngcontent-%COMP%] {\r\n    display: inline-flex;\r\n    align-items: center;\r\n    padding: 15px 25px;\r\n    background: #e0e0e0;\r\n    border-radius: 30px;\r\n    text-decoration: none;\r\n    font-weight: 600;\r\n    color: #999;\r\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);\r\n    border: 2px solid transparent;\r\n    cursor: not-allowed;\r\n    opacity: 0.6;\r\n}\r\n.nav-disabled[_ngcontent-%COMP%]   .nav-arrow[_ngcontent-%COMP%] {\r\n    margin: 0 8px;\r\n    font-size: 1.2rem;\r\n}\r\n\r\n.wip[_ngcontent-%COMP%] {\r\n    background: rgba(249, 178, 5, 0.2);\r\n    border: 2px solid #f9b205;\r\n    padding: 15px 20px;\r\n    border-radius: 8px;\r\n    color: #f9b205;\r\n    margin-bottom: 30px;\r\n    font-weight: bold;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    letter-spacing: 1px;\r\n}\r\n\r\n.rich-text-content[_ngcontent-%COMP%] {\r\n    background: #ffffff;\r\n    padding: 30px;\r\n    border-radius: 12px;\r\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\r\n    border-left: 5px solid #f9b205;\r\n    line-height: 1.8;\r\n    color: #555;\r\n    font-size: 1.1rem;\r\n}\r\n.rich-text-content[_ngcontent-%COMP%]   .project-link[_ngcontent-%COMP%] {\r\n    color: #f9b205;\r\n    text-decoration: none;\r\n    font-weight: 600;\r\n    transition: color 0.3s ease;\r\n    margin: 0 2px;\r\n}\r\n.rich-text-content[_ngcontent-%COMP%]   .project-link[_ngcontent-%COMP%]:hover {\r\n    color: #232323;\r\n}\r\n.rich-text-content[_ngcontent-%COMP%]   .external-link-icon[_ngcontent-%COMP%] {\r\n    margin-left: 5px;\r\n    font-size: 0.9rem;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .project-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n        font-size: 2.5rem;\r\n    }\r\n    \r\n    .project-navigation[_ngcontent-%COMP%] {\r\n        flex-direction: column;\r\n        gap: 20px;\r\n    }\r\n    \r\n    .prev-project[_ngcontent-%COMP%], .next-project[_ngcontent-%COMP%], .back-to-list[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n    }\r\n    \r\n    .prev-project[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .next-project[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .back-to-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        justify-content: center;\r\n    }\r\n    \r\n    .project-detail[_ngcontent-%COMP%] {\r\n        padding: 40px 0;\r\n    }\r\n    \r\n    .summary-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n        font-size: 1.5rem;\r\n    }\r\n    \r\n    \r\n    .media-container[_ngcontent-%COMP%] {\r\n        border-radius: 12px;\r\n        overflow: hidden;\r\n        box-shadow: 0 2px 15px rgba(0, 0, 0, 0.15);\r\n        border: 2px solid #f9b205;\r\n    }\r\n    \r\n    \r\n    .responsive-media[_ngcontent-%COMP%] {\r\n        margin: 0 auto;\r\n        width: -moz-fit-content;\r\n        width: fit-content;\r\n    }\r\n    \r\n    .media-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .media-container[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        display: block;\r\n    }\r\n    \r\n    .video-container[_ngcontent-%COMP%] {\r\n        background: #000000;\r\n    }\r\n    \r\n    .video-fallback[_ngcontent-%COMP%] {\r\n        background: #ffffff;\r\n        padding: 30px;\r\n        border-radius: 12px;\r\n        text-align: center;\r\n        color: #555;\r\n        border: 2px dashed #f9b205;\r\n        margin-top: 10px;\r\n    }\r\n    \r\n    .video-fallback[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n        margin-bottom: 15px;\r\n        font-size: 1.1rem;\r\n    }\r\n    \r\n    .download-video[_ngcontent-%COMP%] {\r\n        display: inline-block;\r\n        background: #f9b205;\r\n        color: #ffffff;\r\n        padding: 12px 24px;\r\n        border-radius: 6px;\r\n        text-decoration: none;\r\n        font-weight: 600;\r\n        transition: background-color 0.3s ease;\r\n    }\r\n    \r\n    .download-video[_ngcontent-%COMP%]:hover {\r\n        background: #e6a004;\r\n        text-decoration: none;\r\n    }\r\n    \r\n    \r\n    .text-content[_ngcontent-%COMP%] {\r\n        background: #ffffff;\r\n        padding: 30px;\r\n        border-radius: 12px;\r\n        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\r\n        border-left: 5px solid #f9b205;\r\n    }\r\n    \r\n    .text-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n        margin: 0;\r\n        line-height: 1.8;\r\n        color: #555;\r\n        font-size: 1.1rem;\r\n    }\r\n    \r\n    \r\n    .link-container[_ngcontent-%COMP%] {\r\n        padding: 25px;\r\n        background: rgba(249, 178, 5, 0.1);\r\n        border-radius: 12px;\r\n        border: 2px solid #f9b205;\r\n    }\r\n    \r\n    .project-link[_ngcontent-%COMP%] {\r\n        display: flex;\r\n        align-items: center;\r\n        color: #f9b205;\r\n        text-decoration: none;\r\n        font-weight: 600;\r\n        transition: color 0.3s ease;\r\n        font-size: 1.1rem;\r\n    }\r\n    \r\n    .project-link[_ngcontent-%COMP%]:hover {\r\n        color: #232323;\r\n    }\r\n    \r\n    .external-link-icon[_ngcontent-%COMP%] {\r\n        margin-left: 10px;\r\n        font-size: 1.2rem;\r\n    }\r\n    \r\n    \r\n    .project-navigation[_ngcontent-%COMP%] {\r\n        flex-direction: column;\r\n        gap: 20px;\r\n    }\r\n    \r\n    .prev-project[_ngcontent-%COMP%], .next-project[_ngcontent-%COMP%], .back-to-list[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n    }\r\n    \r\n    .prev-project[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .next-project[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .back-to-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        justify-content: center;\r\n    }\r\n    \r\n    .nav-arrow[_ngcontent-%COMP%] {\r\n        margin: 0 8px;\r\n        transition: transform 0.3s ease;\r\n        font-size: 1.2rem;\r\n    }\r\n    \r\n    .prev-project[_ngcontent-%COMP%]:hover   .nav-arrow[_ngcontent-%COMP%] {\r\n        transform: translateX(-5px);\r\n    }\r\n    \r\n    .next-project[_ngcontent-%COMP%]:hover   .nav-arrow[_ngcontent-%COMP%] {\r\n        transform: translateX(5px);\r\n    }\r\n    \r\n    .nav-disabled[_ngcontent-%COMP%] {\r\n        display: inline-flex;\r\n        align-items: center;\r\n        padding: 15px 25px;\r\n        background: #e0e0e0;\r\n        border-radius: 30px;\r\n        text-decoration: none;\r\n        font-weight: 600;\r\n        color: #999;\r\n        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);\r\n        border: 2px solid transparent;\r\n        cursor: not-allowed;\r\n        opacity: 0.6;\r\n    }\r\n    \r\n    .nav-disabled[_ngcontent-%COMP%]   .nav-arrow[_ngcontent-%COMP%] {\r\n        margin: 0 8px;\r\n        font-size: 1.2rem;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QtZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUJBQW1CO0FBQ25CO0lBQ0ksc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6Qiw4QkFBOEI7SUFDOUIsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxlQUFlO0FBQ25CO0FBRUEsbUJBQW1CO0FBQ25CO0lBQ0ksbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHlDQUF5QztJQUN6Qyw4QkFBOEI7QUFDbEM7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksY0FBYztJQUNkLHFCQUFxQjtJQUNyQiwyQkFBMkI7SUFDM0IsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxjQUFjO0lBQ2QsMEJBQTBCO0FBQzlCO0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsT0FBTztJQUNQLFlBQVk7SUFDWixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0QjtBQUVBLG1CQUFtQjtBQUNuQjtJQUNJLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLDBDQUEwQztJQUMxQyxpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixjQUFjO0FBQ2xCO0FBRUEsb0JBQW9CO0FBQ3BCO0lBQ0ksbUJB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QixrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLG1CQUFtQjtRQUNuQixxQkFBcUI7UUFDckIsZ0JBQWdCO1FBQ2hCLFdBQVc7UUFDWCwwQ0FBMEM7UUFDMUMsNkJBQTZCO1FBQzdCLG1CQUFtQjtRQUNuQixZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksYUFBYTtRQUNiLGlCQUFpQjtJQUNyQjtBQUNKIiwiZmlsZSI6InByb2plY3QtZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBHZW5lcmFsIExheW91dCAqL1xyXG4ucHJvamVjdC1kZXRhaWwge1xyXG4gICAgcGFkZGluZzogMzBweCAwIDYwcHggMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XHJcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjBweCk7XHJcbiAgICBtYXJnaW46IC0zMHB4IDA7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDAgMjBweDtcclxufVxyXG5cclxuLyogUHJvamVjdCBIZWFkZXIgKi9cclxuLnByb2plY3QtaGVhZGVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2Y5YjIwNTtcclxufVxyXG5cclxuLmJyZWFkY3J1bWJzIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICBjb2xvcjogIzU1NTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuLmJyZWFkY3J1bWJzIGEge1xyXG4gICAgY29sb3I6ICNmOWIyMDU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2U7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uYnJlYWRjcnVtYnMgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzIzMjMyMztcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4uYnJlYWRjcnVtYnMgc3BhbiB7XHJcbiAgICBjb2xvcjogIzIzMjMyMztcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWhlYWRlciBoMSB7XHJcbiAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICBjb2xvcjogIzIzMjMyMztcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLnByb2plY3QtaGVhZGVyIGgxOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGhlaWdodDogNHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2Y5YjIwNTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxufVxyXG5cclxuLyogRmVhdHVyZWQgSW1hZ2UgKi9cclxuLmZlYXR1cmVkLWltYWdlIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgI2Y5YjIwNTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xyXG59XHJcblxyXG4uZmVhdHVyZWQtaW1hZ2UgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4vKiBQcm9qZWN0IFN1bW1hcnkgKi9cclxuLnByb2plY3Qtc3VtbWFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIHBhZGRpbmc6IDQwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNmOWIyMDU7XHJcbn1cclxuXHJcbi5zdW1tYXJ5LWNvbnRlbnQgaDMge1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGNvbG9yOiAjMjMyMzIzO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uc3VtbWFyeS1jb250ZW50IGgzOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjliMjA1O1xyXG59XHJcblxyXG4uc3VtbWFyeS1jb250ZW50IHAge1xyXG4gICAgY29sb3I6ICM1NTU7XHJcbiAgICBsaW5lLWhlaWdodDogMS44O1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbn1cclxuXHJcbi8qIFByb2plY3QgQ29udGVudCAqL1xyXG4ucHJvamVjdC1jb250ZW50IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XHJcbn1cclxuXHJcbi5jb250ZW50LWl0ZW0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG5cclxuLyogTWVkaWEgQ29udGFpbmVycyAqL1xyXG4ubWVkaWEtY29udGFpbmVyIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2Y5YjIwNTtcclxufVxyXG5cclxuLyogUmVzcG9uc2l2ZSBNZWRpYSBDb250YWluZXIgKi9cclxuLnJlc3BvbnNpdmUtbWVkaWEge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbn1cclxuXHJcbi5tZWRpYS1jb250YWluZXIgaW1nLFxyXG4ubWVkaWEtY29udGFpbmVyIHZpZGVvIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi52aWRlby1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDtcclxufVxyXG5cclxuLnZpZGVvLWZhbGxiYWNrIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjNTU1O1xyXG4gICAgYm9yZGVyOiAycHggZGFzaGVkICNmOWIyMDU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4udmlkZW8tZmFsbGJhY2sgcCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW07XHJcbn1cclxuXHJcbi5kb3dubG9hZC12aWRlbyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjliMjA1O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDI0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi5kb3dubG9hZC12aWRlbzpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTZhMDA0O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4vKiBUZXh0IENvbnRlbnQgKi9cclxuLnRleHQtY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2Y5YjIwNTtcclxufVxyXG5cclxuLnRleHQtY29udGVudCBwIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjg7XHJcbiAgICBjb2xvcjogIzU1NTtcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG59XHJcblxyXG4vKiBMaW5rIENvbnRhaW5lciAqL1xyXG4ubGluay1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMjVweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQ5LCAxNzgsIDUsIDAuMSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2Y5YjIwNTtcclxufVxyXG5cclxuLnByb2plY3QtbGluayB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZjliMjA1O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTtcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG59XHJcblxyXG4ucHJvamVjdC1saW5rOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMjMyMzIzO1xyXG59XHJcblxyXG4uZXh0ZXJuYWwtbGluay1pY29uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbn1cclxuXHJcbi8qIFByb2plY3QgTmF2aWdhdGlvbiAqL1xyXG4ucHJvamVjdC1uYXZpZ2F0aW9uIHtcclxuICAgIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2Y5YjIwNTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ucHJldi1wcm9qZWN0IGEsXHJcbi5uZXh0LXByb2plY3QgYSxcclxuLmJhY2stdG8tbGlzdCBhIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE1cHggMjVweDtcclxuICAgIGJhY2tncm91bmQ6ICNmOWIyMDU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5wcmV2LXByb2plY3QgYTpob3ZlcixcclxuLm5leHQtcHJvamVjdCBhOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMyMzIzMjM7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJvcmRlci1jb2xvcjogIzIzMjMyMztcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDIwcHggcmdiYSgzNSwgMzUsIDM1LCAwLjMpO1xyXG59XHJcblxyXG4uYmFjay10by1saXN0IGEge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDksIDE3OCwgNSwgMC4xKTtcclxuICAgIGNvbG9yOiAjZjliMjA1O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2Y5YjIwNTtcclxufVxyXG5cclxuLmJhY2stdG8tbGlzdCBhOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNmOWIyMDU7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDIwcHggcmdiYSgyNDksIDE3OCwgNSwgMC4zKTtcclxufVxyXG5cclxuLm5hdi1hcnJvdyB7XHJcbiAgICBtYXJnaW46IDAgOHB4O1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG59XHJcblxyXG4ucHJldi1wcm9qZWN0OmhvdmVyIC5uYXYtYXJyb3cge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01cHgpO1xyXG59XHJcblxyXG4ubmV4dC1wcm9qZWN0OmhvdmVyIC5uYXYtYXJyb3cge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCk7XHJcbn1cclxuXHJcbi5uYXYtZGlzYWJsZWQge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTVweCAyNXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2UwZTBlMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICM5OTk7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICBvcGFjaXR5OiAwLjY7XHJcbn1cclxuXHJcbi5uYXYtZGlzYWJsZWQgLm5hdi1hcnJvdyB7XHJcbiAgICBtYXJnaW46IDAgOHB4O1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbn1cclxuXHJcbi8qIFdvcmsgSW4gUHJvZ3Jlc3MgQmFubmVyICovXHJcbi53aXAge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDksIDE3OCwgNSwgMC4yKTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmOWIyMDU7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBjb2xvcjogI2Y5YjIwNTtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59XHJcblxyXG4vKiBSaWNoIFRleHQgQ29udGVudCAqL1xyXG4ucmljaC10ZXh0LWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNmOWIyMDU7XHJcbiAgICBsaW5lLWhlaWdodDogMS44O1xyXG4gICAgY29sb3I6ICM1NTU7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxufVxyXG5cclxuLnJpY2gtdGV4dC1jb250ZW50IC5wcm9qZWN0LWxpbmsge1xyXG4gICAgY29sb3I6ICNmOWIyMDU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlO1xyXG4gICAgbWFyZ2luOiAwIDJweDtcclxufVxyXG5cclxuLnJpY2gtdGV4dC1jb250ZW50IC5wcm9qZWN0LWxpbms6aG92ZXIge1xyXG4gICAgY29sb3I6ICMyMzIzMjM7XHJcbn1cclxuXHJcbi5yaWNoLXRleHQtY29udGVudCAuZXh0ZXJuYWwtbGluay1pY29uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxufVxyXG5cclxuLyogUmVzcG9uc2l2ZSBBZGp1c3RtZW50cyAqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5wcm9qZWN0LWhlYWRlciBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5wcm9qZWN0LW5hdmlnYXRpb24ge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgZ2FwOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucHJldi1wcm9qZWN0LFxyXG4gICAgLm5leHQtcHJvamVjdCxcclxuICAgIC5iYWNrLXRvLWxpc3Qge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucHJldi1wcm9qZWN0IGEsXHJcbiAgICAubmV4dC1wcm9qZWN0IGEsXHJcbiAgICAuYmFjay10by1saXN0IGEge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucHJvamVjdC1kZXRhaWwge1xyXG4gICAgICAgIHBhZGRpbmc6IDQwcHggMDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnN1bW1hcnktY29udGVudCBoMyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qIE1lZGlhIENvbnRhaW5lcnMgKi9cclxuICAgIC5tZWRpYS1jb250YWluZXIge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDJweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2Y5YjIwNTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLyogUmVzcG9uc2l2ZSBNZWRpYSBDb250YWluZXIgKi9cclxuICAgIC5yZXNwb25zaXZlLW1lZGlhIHtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5tZWRpYS1jb250YWluZXIgaW1nLFxyXG4gICAgLm1lZGlhLWNvbnRhaW5lciB2aWRlbyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC52aWRlby1jb250YWluZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMwMDAwMDA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC52aWRlby1mYWxsYmFjayB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiAjNTU1O1xyXG4gICAgICAgIGJvcmRlcjogMnB4IGRhc2hlZCAjZjliMjA1O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC52aWRlby1mYWxsYmFjayBwIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZG93bmxvYWQtdmlkZW8ge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjliMjA1O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIHBhZGRpbmc6IDEycHggMjRweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5kb3dubG9hZC12aWRlbzpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2U2YTAwNDtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qIFRleHQgQ29udGVudCAqL1xyXG4gICAgLnRleHQtY29udGVudCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjZjliMjA1O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAudGV4dC1jb250ZW50IHAge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS44O1xyXG4gICAgICAgIGNvbG9yOiAjNTU1O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKiBMaW5rIENvbnRhaW5lciAqL1xyXG4gICAgLmxpbmstY29udGFpbmVyIHtcclxuICAgICAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjQ5LCAxNzgsIDUsIDAuMSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZjliMjA1O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucHJvamVjdC1saW5rIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6ICNmOWIyMDU7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucHJvamVjdC1saW5rOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogIzIzMjMyMztcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmV4dGVybmFsLWxpbmstaWNvbiB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qIFByb2plY3QgTmF2aWdhdGlvbiAqL1xyXG4gICAgLnByb2plY3QtbmF2aWdhdGlvbiB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBnYXA6IDIwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5wcmV2LXByb2plY3QsXHJcbiAgICAubmV4dC1wcm9qZWN0LFxyXG4gICAgLmJhY2stdG8tbGlzdCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5wcmV2LXByb2plY3QgYSxcclxuICAgIC5uZXh0LXByb2plY3QgYSxcclxuICAgIC5iYWNrLXRvLWxpc3QgYSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5uYXYtYXJyb3cge1xyXG4gICAgICAgIG1hcmdpbjogMCA4cHg7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcclxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnByZXYtcHJvamVjdDpob3ZlciAubmF2LWFycm93IHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTVweCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5uZXh0LXByb2plY3Q6aG92ZXIgLm5hdi1hcnJvdyB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5uYXYtZGlzYWJsZWQge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMTVweCAyNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNlMGUwZTA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBjb2xvcjogIzk5OTtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICAgICAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5uYXYtZGlzYWJsZWQgLm5hdi1hcnJvdyB7XHJcbiAgICAgICAgbWFyZ2luOiAwIDhweDtcclxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ 2555:
/*!*********************************!*\
  !*** ./src/app/project.list.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PROGRAMMING": () => (/* binding */ PROGRAMMING),
/* harmony export */   "GAMES": () => (/* binding */ GAMES)
/* harmony export */ });
/* harmony import */ var _project_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.model */ 8946);

const PROGRAMMING = [
    new _project_model__WEBPACK_IMPORTED_MODULE_0__.Project("KinderCheck", "assets/img/KinderCheck/Index.png", "A full-stack kindergarten attendance management system built with React 19 and Node.js, featuring role-based access and automated locking rules.", [
        new _project_model__WEBPACK_IMPORTED_MODULE_0__.Text("", false, [
            { text: "KinderCheck is a comprehensive attendance management solution designed to streamline communication between kindergarten teachers and parents. It replaces manual tracking with a digital, automated system." },
            { text: "", isNewline: true },
            { text: "Tech Stack:" },
            { text: "", isNewline: true },
            { text: "• Frontend: React 19, Vite, TypeScript, Tailwind CSS" },
            { text: "", isNewline: true },
            { text: "• Backend: Node.js, Express, MongoDB" },
            { text: "", isNewline: true },
            { text: "• Features: JWT Authentication, Automated Locking Logic, Responsive Design" }
        ]),
        new _project_model__WEBPACK_IMPORTED_MODULE_0__.ImgPath("assets/img/KinderCheck/Teacher.png", false, "100%"),
        new _project_model__WEBPACK_IMPORTED_MODULE_0__.Text("", false, [
            { text: "Teacher Dashboard:" },
            { text: "", isNewline: true },
            { text: "The secure dashboard allows educators to manage daily attendance via an interactive grid. Teachers can manually lock/unlock specific days and configure the active week for parents. Visual feedback (Green for saved, Blue for unsaved) ensures data accuracy." }
        ]),
        new _project_model__WEBPACK_IMPORTED_MODULE_0__.ImgPath("assets/img/KinderCheck/Parent.png", false, "100%"),
        new _project_model__WEBPACK_IMPORTED_MODULE_0__.Text("", false, [
            { text: "Parent Interface:" },
            { text: "", isNewline: true },
            { text: "A public, intuitive interface for parents to mark attendance. It enforces strict locking rules (e.g., auto-lock after 7 PM the previous day) to prevent unauthorized retroactive changes." }
        ])
    ]),
    new _project_model__WEBPACK_IMPORTED_MODULE_0__.Project("Metacognis Research Assistant", "assets/img/Metacognis/Metacognis.png", "A React-based web application for AI-driven research paper analysis, developed as a freelance front-end developer in a two-man team.", [
        new _project_model__WEBPACK_IMPORTED_MODULE_0__.Text("", false, [
            { text: "Developed as a freelance front-end developer, the application uses AI to search and analyze research papers based on user-defined criteria, providing tailored results to assist users in their research." },
            { text: "", isNewline: true },
            { text: "Key Features:" },
            { text: "", isNewline: true },
            { text: "• AI-driven search and analysis of research papers" },
            { text: "", isNewline: true },
            { text: "• User-friendly React-based front-end for seamless interaction" },
            { text: "", isNewline: true },
            { text: "• Collaboration with a back-end developer for integration" },
            { text: "", isNewline: true },
            { text: "• Responsive design for accessibility across devices" }
        ]),
        new _project_model__WEBPACK_IMPORTED_MODULE_0__.ImgPath("assets/img/Metacognis/Metacognis.png", false, "100%"),
        new _project_model__WEBPACK_IMPORTED_MODULE_0__.Text("", false, [
            { text: "This project highlights my ability to work as a freelance front-end developer and collaborate effectively in a team." }
        ])
    ]),
    new _project_model__WEBPACK_IMPORTED_MODULE_0__.Project("AI-Powered Teacher Assistant", "assets/img/PopTechSmartGrades/ClassView.png", "A React and Node.js application developed in a 4-man team for a hackathon, winning second place in its category.", [
        new _project_model__WEBPACK_IMPORTED_MODULE_0__.Text("", false, [
            { text: "This project was developed during a 3-day hackathon in a 4-man team. The application uses AI to assist teachers in managing their classes, analyzing student performance, and generating actionable insights for improvement." },
            { text: "", isNewline: true },
            { text: "Key Features:" },
            { text: "", isNewline: true },
            { text: "• AI-driven analysis of student performance and class trends" },
            { text: "", isNewline: true },
            { text: "• Suggestions for improvement based on test results" },
            { text: "", isNewline: true },
            { text: "• Automatic generation of new tests targeting weak points" },
            { text: "", isNewline: true },
            { text: "• React-based front-end for intuitive user interaction" },
            { text: "", isNewline: true },
            { text: "• Node.js back-end for robust data handling and AI integration" }
        ]),
        new _project_model__WEBPACK_IMPORTED_MODULE_0__.ImgPath("assets/img/PopTechSmartGrades/StudentView.png", false, "100%"),
        new _project_model__WEBPACK_IMPORTED_MODULE_0__.ImgPath("assets/img/PopTechSmartGrades/GeneratedTest.png", false, "400px"),
        new _project_model__WEBPACK_IMPORTED_MODULE_0__.Text("", false, [
            { text: "Winning second place in its category, this project demonstrates my ability to work under pressure, collaborate in a team, and deliver innovative solutions using AI." }
        ])
    ]),
    new _project_model__WEBPACK_IMPORTED_MODULE_0__.Project("Conference Management", "assets/img/Faculta/ISS/Login.png", "Application for managing the stages of a conference, made in a team. I was chosen as team leader, so I had knowledge of the whole application, but my main tasks were in the back-end and the database.", [
        new _project_model__WEBPACK_IMPORTED_MODULE_0__.Text("", false, [
            { text: "This project was developed as part of a team effort to manage the stages of a conference. The application includes features for user authentication, session management, and database integration." },
            { text: "", isNewline: true },
            { text: "As the team leader, I oversaw the entire development process, ensuring smooth collaboration and task distribution. My primary focus was on back-end development and database design." },
            { text: "", isNewline: true },
            { text: "Key Features:" },
            { text: "", isNewline: true },
            { text: "• User authentication and role-based access control" },
            { text: "", isNewline: true },
            { text: "• Session scheduling and management" },
            { text: "", isNewline: true },
            { text: "• Database integration for storing conference data" },
            { text: "", isNewline: true },
            { text: "• Responsive design for web accessibility" }
        ]),
        new _project_model__WEBPACK_IMPORTED_MODULE_0__.ImgPath("assets/img/Faculta/ISS/Login.png", false, "100%"),
        new _project_model__WEBPACK_IMPORTED_MODULE_0__.ImgPath("assets/img/Faculta/ISS/Dashboard.png", false, "100%"),
        new _project_model__WEBPACK_IMPORTED_MODULE_0__.ImgPath("assets/img/Faculta/ISS/SessionManagement.png", false, "100%"),
        new _project_model__WEBPACK_IMPORTED_MODULE_0__.Text("", false, [
            { text: "The application was built using React, .NET Core and an SQL Server database and follows best practices for software development. It was a valuable learning experience in team collaboration and project management." }
        ])
    ]),
    new _project_model__WEBPACK_IMPORTED_MODULE_0__.Project("Bolts and Gears", "assets/img/Liceu/FTC.png", "Participated in the inaugural season of FTC in Romania, where our team designed, built, and programmed a robot, qualifying for the national phase.", [
        new _project_model__WEBPACK_IMPORTED_MODULE_0__.Text("", false, [
            { text: "Bolts and Gears was part of the inaugural season of the FIRST Tech Challenge (FTC) in Romania. The competition involved multiple stages, starting with gathering funds and resources, followed by designing and building the robot, and culminating in a national-level contest between teams." },
            { text: "", isNewline: true },
            { text: "Our team successfully qualified for the national phase, showcasing our robot's capabilities and teamwork. My primary responsibility was programming the robot's software, but I also contributed significantly to the physical construction of the robot." },
            { text: "", isNewline: true },
            { text: "Key Highlights:" },
            { text: "", isNewline: true },
            { text: "• Programming the robot's autonomous and manual control systems" },
            { text: "", isNewline: true },
            { text: "• Collaborating with teammates to design and build the robot" },
            { text: "", isNewline: true },
            { text: "• Participating in fundraising and resource management" },
            { text: "", isNewline: true },
            { text: "• Competing at the national level and gaining valuable experience" },
            { text: "", isNewline: true },
            { text: "You can see the current state of the team at: " },
            { text: "Bolts and Gears", isLink: true, url: "https://www.facebook.com/boltsngears" }
        ])
    ]),
    new _project_model__WEBPACK_IMPORTED_MODULE_0__.Project("Personal Portfolio Website", "assets/img/Portfolio/portfolio-screenshot.png", "A modern, responsive portfolio website showcasing my projects and professional journey, built with Angular and TypeScript.", [
        new _project_model__WEBPACK_IMPORTED_MODULE_0__.Text("", false, [
            { text: "This portfolio website is designed to showcase my programming projects, games, and professional journey. It features a clean, modern UI with smooth animations and responsive design." },
            { text: "", isNewline: true },
            { text: "Key Features:" },
            { text: "", isNewline: true },
            { text: "• Built with Angular 12+ and TypeScript for dynamic and modular development" },
            { text: "", isNewline: true },
            { text: "• Responsive design with a mobile-first approach" },
            { text: "", isNewline: true },
            { text: "• Sidebar navigation for easy access to different sections" },
            { text: "", isNewline: true },
            { text: "• Project showcases with detailed views" },
            { text: "", isNewline: true },
            { text: "• About section highlighting my skills and education" },
            { text: "", isNewline: true },
            { text: "• Deployed on GitHub Pages with proper routing and fallback handling" },
            { text: "", isNewline: true },
            { text: "• SEO optimization for better visibility" },
            { text: "", isNewline: true },
            { text: "• Structured data (JSON-LD) for enhanced search engine indexing" }
        ]),
        new _project_model__WEBPACK_IMPORTED_MODULE_0__.ImgPath("assets/img/Portfolio/portfolio-screenshot.png", false, "100%"),
        new _project_model__WEBPACK_IMPORTED_MODULE_0__.ImgPath("assets/img/Portfolio/portfolio-about.png", false, "400px"),
        new _project_model__WEBPACK_IMPORTED_MODULE_0__.ImgPath("assets/img/Portfolio/portfolio-projects.png", false, "100%"),
        new _project_model__WEBPACK_IMPORTED_MODULE_0__.Text("", false, [
            { text: "The website is a reflection of my skills in front-end development, UI/UX design, and full-stack integration. It serves as a platform to connect with potential collaborators and showcase my work." },
            { text: "", isNewline: true },
            { text: "Source code available at: " },
            { text: "GitHub Repository", isLink: true, url: "https://github.com/BogdanDumbravean/portfolio" }
        ])
    ]),
    new _project_model__WEBPACK_IMPORTED_MODULE_0__.Project("Automated Stock Information", "assets/img/Faculta/RPA/Screenshot 2022-03-01 222341.png", "A UiPath-based automation project for analyzing stock trends and responding to email queries.", [
        new _project_model__WEBPACK_IMPORTED_MODULE_0__.Text("", false, [
            { text: "This project was developed as part of a team effort to automate stock information analysis using UiPath. The application receives emails containing stock identifiers, analyzes the stock trends, and sends a reply with the results and additional insights." },
            { text: "", isNewline: true },
            { text: "Key Features:" },
            { text: "", isNewline: true },
            { text: "• Automated email processing to extract stock identifiers" },
            { text: "", isNewline: true },
            { text: "• Trend analysis to determine upward or downward movement" },
            { text: "", isNewline: true },
            { text: "• Email replies with detailed stock information and insights" },
            { text: "", isNewline: true },
            { text: "• UiPath workflows for seamless automation" }
        ]),
        new _project_model__WEBPACK_IMPORTED_MODULE_0__.ImgPath("assets/img/Faculta/RPA/Screenshot 2022-03-01 222002.png", false, "100%"),
        new _project_model__WEBPACK_IMPORTED_MODULE_0__.Text("", false, [
            { text: "This project highlights the power of RPA (Robotic Process Automation) in streamlining repetitive tasks and improving efficiency in data analysis workflows." }
        ])
    ]),
    new _project_model__WEBPACK_IMPORTED_MODULE_0__.Project("Intelligent Crowd Behaviour", "assets/img/Faculta/Licenta/Screenshot 2022-05-28 121938.png", "A Unity-based 3D simulation of stadium evacuation scenarios, combining real-life planning and AI agent behaviors.", [
        new _project_model__WEBPACK_IMPORTED_MODULE_0__.Text("", false, [
            { text: "This project simulates stadium evacuation scenarios in a 3D environment using Unity. The evacuation plans are based on real-life planning, and the AI agents exhibit a combination of behaviors to navigate the environment effectively." },
            { text: "", isNewline: true },
            { text: "Key Features:" },
            { text: "", isNewline: true },
            { text: "• Realistic stadium layouts and evacuation routes" },
            { text: "", isNewline: true },
            { text: "• AI agents with diverse behaviors, including crowd dynamics and individual decision-making" },
            { text: "", isNewline: true },
            { text: "• Unity-based implementation for immersive 3D visualization" },
            { text: "", isNewline: true },
            { text: "• Analysis of evacuation efficiency under different scenarios" }
        ]),
        new _project_model__WEBPACK_IMPORTED_MODULE_0__.ImgPath("assets/img/Faculta/Licenta/Screenshot 2022-05-28 121938.png", false, "100%"),
    ]),
    new _project_model__WEBPACK_IMPORTED_MODULE_0__.Project("University Job Formular", "assets/img/Practica/Screenshot 2022-03-01 221720.png", "A prototype web application for teachers applying to the university, featuring document uploads and form submissions.", [
        new _project_model__WEBPACK_IMPORTED_MODULE_0__.Text("", false, [
            { text: "This project was developed as part of practical work for the university. Our team created a prototype web application for teachers applying to the university, allowing them to complete a form and upload necessary documents." },
            { text: "", isNewline: true },
            { text: "Key Features:" },
            { text: "", isNewline: true },
            { text: "• User-friendly interface for form completion and document uploads" },
            { text: "", isNewline: true },
            { text: "• Back-end integration for secure data storage and retrieval" },
            { text: "", isNewline: true },
            { text: "• Database design for efficient handling of application data" },
            { text: "", isNewline: true },
            { text: "• Responsive design for accessibility across devices" }
        ]),
        new _project_model__WEBPACK_IMPORTED_MODULE_0__.Text("", false, [
            { text: "As the representative of the back-end team, I contributed to the development of the server-side logic and database integration, ensuring smooth functionality and data security. This prototype served as a foundation for further development and refinement." }
        ])
    ]),
    new _project_model__WEBPACK_IMPORTED_MODULE_0__.Project("Activities Management", "assets/img/Faculta/MA/Images/Looks/Preview.png", "A mobile application for quick daily activity organization, developed individually using Flutter and Kotlin.", [
        new _project_model__WEBPACK_IMPORTED_MODULE_0__.Text("", false, [
            { text: "This project is a mobile application designed to help users organize their daily activities quickly and efficiently. It was developed individually as part of a course project." },
            { text: "", isNewline: true },
            { text: "Key Features:" },
            { text: "", isNewline: true },
            { text: "• Developed in both Flutter and Kotlin for cross-platform compatibility" },
            { text: "", isNewline: true },
            { text: "• Server database integration for online data synchronization" },
            { text: "", isNewline: true },
            { text: "• Local data storage for offline interaction" },
            { text: "", isNewline: true },
            { text: "• User-friendly interface for quick activity management" }
        ]),
        new _project_model__WEBPACK_IMPORTED_MODULE_0__.ImgPath("assets/img/Faculta/MA/Images/Looks/Update.png", false, "400px"),
        new _project_model__WEBPACK_IMPORTED_MODULE_0__.ImgPath("assets/img/Faculta/MA/Images/Looks/List.png", false, "400px"),
        new _project_model__WEBPACK_IMPORTED_MODULE_0__.ImgPath("assets/img/Faculta/MA/Images/Looks/Create.png", false, "400px"),
        new _project_model__WEBPACK_IMPORTED_MODULE_0__.ImgPath("assets/img/Faculta/MA/Images/Looks/OfflineWarning.png", false, "400px")
    ]),
    new _project_model__WEBPACK_IMPORTED_MODULE_0__.Project("Movie Rental", "assets/img/Faculta/MPP/MPP.png", "A web application for managing movie rentals, developed in a two-person team using Angular and Java.", [
        new _project_model__WEBPACK_IMPORTED_MODULE_0__.Text("", false, [
            { text: "This project is a web application designed to manage movie rentals efficiently. It was developed in collaboration with another team member, showcasing our ability to work together on a full-stack solution." },
            { text: "", isNewline: true },
            { text: "Key Features:" },
            { text: "", isNewline: true },
            { text: "• Front-end developed in Angular for a dynamic and responsive user interface" },
            { text: "", isNewline: true },
            { text: "• Back-end implemented in Java for robust server-side logic" },
            { text: "", isNewline: true },
            { text: "• Support for multiple database versions to ensure flexibility" },
            { text: "", isNewline: true },
            { text: "• User-friendly design for managing rentals, returns, and inventory" }
        ]),
        new _project_model__WEBPACK_IMPORTED_MODULE_0__.ImgPath("assets/img/Faculta/MPP/MPP.png", false, "400px"),
        new _project_model__WEBPACK_IMPORTED_MODULE_0__.ImgPath("assets/img/Faculta/MPP/MPP2.png", false, "400px"),
        new _project_model__WEBPACK_IMPORTED_MODULE_0__.ImgPath("assets/img/Faculta/MPP/MPP3.png", false, "400px")
    ]),
    new _project_model__WEBPACK_IMPORTED_MODULE_0__.Project("Raytracer", "assets/img/Faculta/VR/Screenshot 2022-03-01 222923.png", "A physics-based application for rendering a simple 3D scene using ray tracing techniques, developed in C#.", [
        new _project_model__WEBPACK_IMPORTED_MODULE_0__.Text("", false, [
            { text: "This project demonstrates the application of ray tracing techniques to render a simple 3D scene. Multiple images are generated from different angles, showcasing the physics of rays and reflections." },
            { text: "", isNewline: true },
            { text: "Key Features:" },
            { text: "", isNewline: true },
            { text: "• Implementation of ray tracing algorithms for realistic rendering" },
            { text: "", isNewline: true },
            { text: "• Support for multiple camera angles to capture the scene" },
            { text: "", isNewline: true },
            { text: "• Developed in C# for efficient computation and visualization" }
        ]),
        new _project_model__WEBPACK_IMPORTED_MODULE_0__.ImgPath("assets/img/Faculta/VR/Screenshot 2022-03-01 223705.png", false, "400px"),
        new _project_model__WEBPACK_IMPORTED_MODULE_0__.Text("", false, [
            { text: "This project highlights my understanding of physics-based rendering and algorithm implementation." }
        ])
    ]),
    new _project_model__WEBPACK_IMPORTED_MODULE_0__.Project("Acrophobia Helper", "assets/img/Faculta/VR/Screenshot 2022-03-01 225758.png", "A Unity-based virtual reality project designed to help individuals overcome their fear of heights.", [
        new _project_model__WEBPACK_IMPORTED_MODULE_0__.Text("", false, [
            { text: "This project uses virtual reality to create a safe environment for individuals suffering from acrophobia (fear of heights). Users can gradually ascend on a virtual board at their own pace, helping them build confidence and overcome their fear." },
            { text: "", isNewline: true },
            { text: "Key Features:" },
            { text: "", isNewline: true },
            { text: "• Gradual elevation in a virtual environment to reduce anxiety" },
            { text: "", isNewline: true },
            { text: "• Immersive Unity-based design for realistic experiences" },
            { text: "", isNewline: true },
            { text: "• User-controlled pace to ensure comfort and safety" }
        ]),
        new _project_model__WEBPACK_IMPORTED_MODULE_0__.ImgPath("assets/img/Faculta/VR/Screenshot 2022-03-01 225916.png", false, "400px")
    ]),
    new _project_model__WEBPACK_IMPORTED_MODULE_0__.Project("Slideshow", "assets/img/Faculta/Web/Screenshot 2022-03-01 214921.png", "A simple web application for displaying a slideshow, developed to strengthen web development basics.", [
        new _project_model__WEBPACK_IMPORTED_MODULE_0__.Text("", false, [
            { text: "This project is a basic web application designed to display a slideshow of images. It was created to reinforce my understanding of fundamental web development concepts." },
            { text: "", isNewline: true },
            { text: "Key Features:" },
            { text: "", isNewline: true },
            { text: "• Simple and clean design for image transitions" },
            { text: "", isNewline: true },
            { text: "• Lightweight implementation for fast loading" },
            { text: "", isNewline: true },
            { text: "• Developed using HTML, CSS, and JavaScript" }
        ]),
        new _project_model__WEBPACK_IMPORTED_MODULE_0__.Text("", false, [
            { text: "This project helped me start on my basics in web development." }
        ])
    ]),
    new _project_model__WEBPACK_IMPORTED_MODULE_0__.Project("Informative Fill and Lee Algorithms", "assets/img/Liceu/Atestat/Screenshot 2022-03-01 225303.png", "A Visual C# application explaining the Fill and Lee algorithms with step-by-step animations.", [
        new _project_model__WEBPACK_IMPORTED_MODULE_0__.Text("", false, [
            { text: "This project is a Visual C# application created to explain the Fill and Lee algorithms. It includes theoretical explanations and step-by-step animations for specific problems, making it an educational tool." },
            { text: "", isNewline: true },
            { text: "Key Features:" },
            { text: "", isNewline: true },
            { text: "• Detailed theory explaining the algorithms and their applications" },
            { text: "", isNewline: true },
            { text: "• Step-by-step animations for problem-solving" },
            { text: "", isNewline: true },
            { text: "• Interactive interface for better understanding" }
        ]),
        new _project_model__WEBPACK_IMPORTED_MODULE_0__.Text("", false, [
            { text: "This is one of the projects that showcase my ability to create educational tools using programming." }
        ])
    ]),
    new _project_model__WEBPACK_IMPORTED_MODULE_0__.Project("Biology Quiz", "assets/img/Liceu/appbio.png", "A high school project featuring a quiz application for testing biology knowledge.", [
        new _project_model__WEBPACK_IMPORTED_MODULE_0__.Text("", false, [
            { text: "This project is a quiz application designed to help students test their biology knowledge. The questions are sourced from previous years of the \"Bacalaureat\" exam in Romania, providing a realistic testing experience." },
            { text: "", isNewline: true },
            { text: "Key Features:" },
            { text: "", isNewline: true },
            { text: "• Multiple-choice questions sourced from real exams" },
            { text: "", isNewline: true },
            { text: "• User-friendly interface for easy navigation" },
            { text: "", isNewline: true },
            { text: "• Scoring system to track performance" }
        ])
    ]),
    new _project_model__WEBPACK_IMPORTED_MODULE_0__.Project("Mini Paint", "assets/img/Liceu/paint.png", "A high school project recreating basic features of the Paint application, including undo and redo.", [
        new _project_model__WEBPACK_IMPORTED_MODULE_0__.Text("", false, [
            { text: "This project is a recreation of the Paint application, developed during high school. It includes several basic features of Paint, such as drawing tools, undo, and redo functionality." },
            { text: "", isNewline: true },
            { text: "Key Features:" },
            { text: "", isNewline: true },
            { text: "• Drawing tools for creating shapes and lines" },
            { text: "", isNewline: true },
            { text: "• Undo and redo functionality for editing" },
            { text: "", isNewline: true },
            { text: "• Simple and intuitive interface" }
        ])
    ])
];
const GAMES = [
    new _project_model__WEBPACK_IMPORTED_MODULE_0__.Project("Vandals", "assets/img/triangle-mosaic.png", "The project I spent my last years developing full-time and is still being developed. Includes custom shaders, Photon Fusion multiplayer, designed and optimised for mobile. Still a work in progress and under NDA until we publish it.", []),
    new _project_model__WEBPACK_IMPORTED_MODULE_0__.Project("Fish Fantasy", "assets/img/Games/FishFantasy/FishFantasy.jpg", "A mobile fishing game featuring intuitive touch controls and progression mechanics. Players can explore different fishing locations, catch various fish species, and upgrade their equipment. Built with a focus on relaxing gameplay and beautiful visuals.", [
        new _project_model__WEBPACK_IMPORTED_MODULE_0__.Text("", false, [
            { text: "Game Features:" },
            { text: "", isNewline: true },
            { text: "• Intuitive touch-based fishing mechanics" },
            { text: "", isNewline: true },
            { text: "• Multiple fishing locations to explore" },
            { text: "", isNewline: true },
            { text: "• Equipment upgrade system" },
            { text: "", isNewline: true },
            { text: "• Variety of fish species to catch" },
            { text: "", isNewline: true },
            { text: "• Relaxing gameplay experience" },
            { text: "", isNewline: true },
            { text: "", isNewline: true },
            { text: "Platform: Mobile (Android)" }
        ])
    ]),
    new _project_model__WEBPACK_IMPORTED_MODULE_0__.Project("Carl", "assets/img/Games/Carl.png", "A side-view 2D racing game with a unique twist, developed in a three-man team during a 24-hour hackathon.", [
        new _project_model__WEBPACK_IMPORTED_MODULE_0__.Text("", false, [
            { text: "This project was developed during the GetCrEAtive hackathon in a three-man team within 24 hours. Carl is a side-view 2D racing game with a unique twist that makes it engaging and fun." },
            { text: "", isNewline: true },
            { text: "Key Features:" },
            { text: "", isNewline: true },
            { text: "• Innovative gameplay mechanics that set it apart from traditional racing games" },
            { text: "", isNewline: true },
            { text: "• Fast-paced development under hackathon constraints" },
            { text: "", isNewline: true },
            { text: "• Collaborative teamwork to deliver a polished product" }
        ]),
        new _project_model__WEBPACK_IMPORTED_MODULE_0__.ImgPath("assets/img/Games/Carl.mp4", true, "100%"),
        new _project_model__WEBPACK_IMPORTED_MODULE_0__.Text("", false, [
            { text: "This project showcases my ability to work under pressure and deliver creative solutions in a team environment." }
        ])
    ]),
    new _project_model__WEBPACK_IMPORTED_MODULE_0__.Project("Procedural Village Generation", "assets/img/Faculta/Master/unnamed.png", "A gamified approach to procedural village generation, designed to give game developers more control over the creation process.", [
        new _project_model__WEBPACK_IMPORTED_MODULE_0__.Text("", false, [
            { text: "This project focuses on procedural village generation for game development. It uses a gamified approach to allow designers to maintain more control over the creation process while leveraging AI suggestions." },
            { text: "", isNewline: true },
            { text: "Key Features:" },
            { text: "", isNewline: true },
            { text: "• AI-driven suggestions for village layouts" },
            { text: "", isNewline: true },
            { text: "• Designer-friendly interface for manual adjustments" },
            { text: "", isNewline: true },
            { text: "• Research-backed implementation for practical use in game development" }
        ]),
        new _project_model__WEBPACK_IMPORTED_MODULE_0__.ImgPath("assets/img/Faculta/Master/unnamed.png", false, "100%"),
        new _project_model__WEBPACK_IMPORTED_MODULE_0__.Text("", false, [
            { text: "You can read more about the research at:" },
            { text: "Game Developer Article", isLink: true, url: "https://www.gamedeveloper.com/blogs/human-ai-interaction-improves-the-design-process" },
            { text: "Research Paper", isLink: true, url: "http://dx.doi.org/10.13140/RG.2.2.23595.92966/1" }
        ])
    ]),
    new _project_model__WEBPACK_IMPORTED_MODULE_0__.Project("Little Knight", "assets/img/Games/LK/Screenshot_20190701-213821.png", "A side-view 2D fantasy game featuring a knight stranded on a flying island, developed for Android devices.", [
        new _project_model__WEBPACK_IMPORTED_MODULE_0__.Text("", false, [
            { text: "Little Knight is my first released game for Android devices. It is a side-view 2D fantasy game where players control a knight stranded on a flying island, battling enemies and exploring the environment." },
            { text: "", isNewline: true },
            { text: "Key Features:" },
            { text: "", isNewline: true },
            { text: "• Engaging gameplay with exploration and combat mechanics" },
            { text: "", isNewline: true },
            { text: "• Designed for Android devices with intuitive controls" },
            { text: "", isNewline: true },
            { text: "• Fantasy-themed visuals and immersive sound effects" }
        ]),
        new _project_model__WEBPACK_IMPORTED_MODULE_0__.ImgPath("assets/img/Games/LK/Screenshot_20190707-085943.png", false, "100%"),
        new _project_model__WEBPACK_IMPORTED_MODULE_0__.ImgPath("assets/img/Games/LK/Screenshot_20190707-090155.png", false, "100%"),
        new _project_model__WEBPACK_IMPORTED_MODULE_0__.Text("", false, [
            { text: "Although the game is no longer available on Google Play due to ad policy changes, it remains a milestone in my game development journey." }
        ])
    ]),
    new _project_model__WEBPACK_IMPORTED_MODULE_0__.Project("Book of Heroes", "assets/img/Games/BookOfHeroes/Book of Heroes.png", "A 3D fantasy game developed in a team, featuring the journey of a mage fighting to save his city from monsters.", [
        new _project_model__WEBPACK_IMPORTED_MODULE_0__.Text("", false, [
            { text: "Book of Heroes is a 3D fantasy game developed in a team. Players follow the journey of a mage as he battles monsters to save his city. The game won an award at a national competition, showcasing its quality and creativity." },
            { text: "", isNewline: true },
            { text: "Key Features:" },
            { text: "", isNewline: true },
            { text: "• Immersive 3D visuals and engaging storyline" },
            { text: "", isNewline: true },
            { text: "• Team collaboration to deliver a polished product" },
            { text: "", isNewline: true },
            { text: "• Award-winning design and gameplay mechanics" }
        ]),
        new _project_model__WEBPACK_IMPORTED_MODULE_0__.ImgPath("assets/img/Games/BookOfHeroes/Book of Heroes 2.png", false, "100%"),
        new _project_model__WEBPACK_IMPORTED_MODULE_0__.ImgPath("assets/img/Games/BookOfHeroes/Book of Heroes 3.png", false, "100%")
    ]),
    new _project_model__WEBPACK_IMPORTED_MODULE_0__.Project("Board of Heroes", "assets/img/Games/IMG-20200308-WA0000.jpg", "A 3D auto-chess game with a unique twist, developed as part of a team but left unfinished.", [
        new _project_model__WEBPACK_IMPORTED_MODULE_0__.Text("", false, [
            { text: "Board of Heroes is a 3D auto-chess game with a unique twist. Although the project was left unfinished, it showcases innovative ideas and teamwork in game development." },
            { text: "", isNewline: true },
            { text: "Key Features:" },
            { text: "", isNewline: true },
            { text: "• Unique take on auto-chess mechanics" },
            { text: "", isNewline: true },
            { text: "• Collaborative development with a team" },
            { text: "", isNewline: true },
            { text: "• 3D visuals and strategic gameplay elements" }
        ])
    ]),
    new _project_model__WEBPACK_IMPORTED_MODULE_0__.Project("Flying Jousting", "assets/img/Games/Flying Jousting/Screenshot 2022-05-28 124705.png", "A multiplayer 3D jousting game where players fly on horses inside a cube-shaped arena realised with Unity and Photon Pun.", [
        new _project_model__WEBPACK_IMPORTED_MODULE_0__.Text("", false, [
            { text: "Flying Jousting is a multiplayer 3D game where players fly on horses and compete in jousting matches inside a cube-shaped arena. It was my first multiplayer project, implementing rooms for players and a scoreboard." },
            { text: "", isNewline: true },
            { text: "Key Features:" },
            { text: "", isNewline: true },
            { text: "• Multiplayer functionality with player rooms and matchmaking" },
            { text: "", isNewline: true },
            { text: "• Unique cube-shaped arena for dynamic gameplay" },
            { text: "", isNewline: true },
            { text: "• Scoreboard and competitive mechanics for engaging matches" }
        ]),
        new _project_model__WEBPACK_IMPORTED_MODULE_0__.ImgPath("assets/img/Games/Flying Jousting/Screenshot 2022-05-28 124705.png", false, "100%"),
        new _project_model__WEBPACK_IMPORTED_MODULE_0__.Text("", false, [
            { text: "This project highlights my ability to develop multiplayer games and implement innovative gameplay mechanics." }
        ])
    ]),
    new _project_model__WEBPACK_IMPORTED_MODULE_0__.Project("Friends", "assets/img/Games/FriendsGame/Screenshot 2022-05-28 130558.png", "A fun 2D game featuring me and my friends as characters, set during our high school days.", [
        new _project_model__WEBPACK_IMPORTED_MODULE_0__.Text("", false, [
            { text: "Friends is a fun 2D game where the main characters are me and my friends. Set during our high school days, the game features us battling various disciplines in a humorous and engaging way." },
            { text: "", isNewline: true },
            { text: "Key Features:" },
            { text: "", isNewline: true },
            { text: "• Personalized characters based on real-life friends" },
            { text: "", isNewline: true },
            { text: "• Humorous gameplay with unique challenges" },
            { text: "", isNewline: true },
            { text: "• Nostalgic setting inspired by high school experiences" }
        ]),
        new _project_model__WEBPACK_IMPORTED_MODULE_0__.ImgPath("assets/img/Games/FriendsGame/Screenshot 2022-05-28 130558.png", false, "100%")
    ])
];


/***/ }),

/***/ 8946:
/*!**********************************!*\
  !*** ./src/app/project.model.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project),
/* harmony export */   "ImgPath": () => (/* binding */ ImgPath),
/* harmony export */   "Text": () => (/* binding */ Text)
/* harmony export */ });
class Project {
    constructor(title, profile, summary, content) {
        this.title = title;
        this.profile = profile;
        this.summary = summary;
        this.content = content;
    }
}
class ImgPath {
    constructor(path, isVideo = false, maxWidth, maxHeight) {
        this.isVideo = false;
        this.isVideo = isVideo;
        this.path = path;
        this.maxWidth = maxWidth;
        this.maxHeight = maxHeight;
    }
}
class Text {
    constructor(text, isLink = false, richContent) {
        this.isLink = false;
        this.isRichText = false;
        this.isLink = isLink;
        this.text = text;
        if (richContent) {
            this.isRichText = true;
            this.richContent = richContent;
        }
    }
}


/***/ }),

/***/ 354:
/*!*********************************************!*\
  !*** ./src/app/services/project.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectService": () => (/* binding */ ProjectService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var _project_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../project.list */ 2555);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



class ProjectService {
    constructor() { }
    getProgrammingProjects() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(_project_list__WEBPACK_IMPORTED_MODULE_0__.PROGRAMMING);
    }
    getGamesProjects() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(_project_list__WEBPACK_IMPORTED_MODULE_0__.GAMES);
    }
    getProject(type, index) {
        if (type === 'programming') {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(_project_list__WEBPACK_IMPORTED_MODULE_0__.PROGRAMMING[index]);
        }
        else if (type === 'games') {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(_project_list__WEBPACK_IMPORTED_MODULE_0__.GAMES[index]);
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(undefined);
    }
}
ProjectService.ɵfac = function ProjectService_Factory(t) { return new (t || ProjectService)(); };
ProjectService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ProjectService, factory: ProjectService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_portfolio_portfolio_module_ts.js.map