"use strict";
(self["webpackChunkportofolio"] = self["webpackChunkportofolio"] || []).push([["main"],{

/***/ 6881:
/*!********************************************************!*\
  !*** ./src/app/about/education/education.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EducationComponent": () => (/* binding */ EducationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


class EducationComponent {
    constructor() { }
    ngOnInit() {
    }
    toggle(element) {
        element.classList.toggle('hidden');
        // Change the toggle icon
        const button = element.previousElementSibling;
        const icon = button.querySelector('.toggle-icon');
        if (icon) {
            if (element.classList.contains('hidden')) {
                icon.textContent = '+';
            }
            else {
                icon.textContent = '-';
            }
        }
    }
}
EducationComponent.ɵfac = function EducationComponent_Factory(t) { return new (t || EducationComponent)(); };
EducationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EducationComponent, selectors: [["app-education"]], decls: 156, vars: 0, consts: [[1, "container"], [1, "education-header"], [1, "timeline"], [1, "timeline-item"], [1, "timeline-dot"], [1, "timeline-content"], [1, "education-card"], [1, "education-year"], [1, "education-details"], [1, "education-links"], ["routerLink", "/projects/games/procedural-village-generation", 1, "btn", "btn-link"], ["href", "https://www.gamedeveloper.com/blogs/human-ai-interaction-improves-the-design-process", 1, "btn", "btn-link"], ["href", "http://dx.doi.org/10.13140/RG.2.2.23595.92966/1", 1, "btn", "btn-link"], [1, "collapsible"], [1, "collapsible-btn", 3, "click"], [1, "toggle-icon"], [1, "collapsible-content", "hidden"], ["ContentElement1", ""], ["ContentElement2", ""], ["ContentElement3", ""], ["ContentElement4", ""], [1, "disclaimer"]], template: function EducationComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section")(1, "div", 0)(2, "div", 1)(3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "My Education Journey");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2)(6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5)(9, "div", 6)(10, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Master of Science in Game Technology ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "2021-2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h6")(15, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Breda University of Applied Sciences, Netherlands");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8)(18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " A one year programme focused on game technology research. I developed skills in: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul")(21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Academic research methodologies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Procedural content generation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Human-AI interaction systems");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Game development tools creation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " During my study I developed a prototype tool for procedural village generation, making use of AI-assisted design techniques. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 9)(32, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "View Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Read Article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Full Thesis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 5)(41, "div", 6)(42, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Bachelor's Degree in Computer Science ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "2018-2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h6")(47, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Babe\u0219 Bolyai University, Romania");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 8)(50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " A four year programme where I received a scholarship for academic performance. I also completed a C2 level English course. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 13)(53, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EducationComponent_Template_button_click_53_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](58); return ctx.toggle(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Software Development Skills ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "ul", 16, 17)(59, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Software Engineering");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Design Patterns");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Software Systems Verification and Validation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Data Structures and Algorithms");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 13)(68, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EducationComponent_Template_button_click_68_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](73); return ctx.toggle(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " Mathematics & Theory ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "ul", 16, 18)(74, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Algebra");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Mathematical Analysis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Geometry");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Dynamical Systems");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Graph Algorithms");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Probability Theory and Statistics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "MATLAB and Maple programming");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 13)(89, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EducationComponent_Template_button_click_89_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](94); return ctx.toggle(_r2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " Programming Languages ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "ul", 16, 19)(95, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Python - Fundamentals of Programming");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "C++ - Object Oriented Programming");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "C, Shell - Operating Systems");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Java - Advanced Programming Methods & Systems");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "SQL - Databases & Database Management Systems");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Web Development - HTML, CSS, JavaScript, PHP, ASP.NET");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Assembly - Computer System Architecture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Lisp, Prolog - Functional and Logic Programming");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 13)(112, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EducationComponent_Template_button_click_112_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](117); return ctx.toggle(_r3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, " Specialized Domains ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "ul", 16, 20)(118, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Computer Networks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Artificial Intelligence");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Parallel and Distributed Programming");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Formal Languages and Compiler Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 5)(129, "div", 6)(130, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Mathematics and Informatics ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "2014-2018");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "h6")(135, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "National High School, Romania");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 8)(138, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, " Specialized in mathematics and computer science, where I was introduced to: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "ul")(141, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "C++ fundamentals and algorithms");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "C# programming");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "SQL database basics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Web development with HTML & CSS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, " Graduated with perfect scores (10/10) in both mathematics and programming in the national exam. Achieved the maximum B2 level in English. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 21)(152, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Continuous Learning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, " While I've listed my formal education, I believe in lifelong learning. I regularly update my skills through online courses, documentation, and hands-on projects. When needed, I can quickly refresh knowledge in areas I've previously studied. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: ["@media (min-width: 992px) {\r\n    .container[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        max-width: 1200px;\r\n        padding: 0 40px;\r\n        margin: 0 auto;\r\n    }\r\n}\r\n\r\n@media (max-width: 992px) {\r\n    .container[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        padding: 0 20px;\r\n        margin: 0 auto;\r\n        font-size: small;\r\n    }\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n    margin-bottom: 10vh;\r\n}\r\n\r\n.education-header[_ngcontent-%COMP%] {\r\n    margin-bottom: 2rem;\r\n    text-align: center;\r\n}\r\n\r\n.education-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: inline-block;\r\n    padding-bottom: 10px;\r\n}\r\n\r\n.education-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:after {\r\n    content: '';\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 25%;\r\n    width: 50%;\r\n    height: 3px;\r\n    background: #f9b205;\r\n}\r\n\r\n\r\n\r\n.timeline[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    padding: 30px 0;\r\n}\r\n\r\n.timeline[_ngcontent-%COMP%]:before {\r\n    content: '';\r\n    position: absolute;\r\n    height: 100%;\r\n    width: 4px;\r\n    background: #f9b205;\r\n    left: 0;\r\n    top: 0;\r\n}\r\n\r\n.timeline-item[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    margin-bottom: 45px;\r\n}\r\n\r\n.timeline-dot[_ngcontent-%COMP%] {\r\n    width: 16px;\r\n    height: 16px;\r\n    background-color: #f9b205;\r\n    border-radius: 50%;\r\n    position: absolute;\r\n    left: -6px;\r\n    top: 10px;\r\n    border: 3px solid #fff;\r\n}\r\n\r\n.timeline-content[_ngcontent-%COMP%] {\r\n    margin-left: 30px;\r\n    background: white;\r\n    border-radius: 8px;\r\n    padding: 5px;\r\n}\r\n\r\n\r\n\r\n.education-card[_ngcontent-%COMP%] {\r\n    padding: 20px;\r\n    border-radius: 8px;\r\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\r\n    background: white;\r\n    border-left: 5px solid #f9b205;\r\n    transition: transform 0.3s ease;\r\n}\r\n\r\n.education-card[_ngcontent-%COMP%]:hover {\r\n    transform: translateY(-5px);\r\n}\r\n\r\n.education-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n    margin-bottom: 10px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.education-year[_ngcontent-%COMP%] {\r\n    font-size: 0.8em;\r\n    color: #666;\r\n    font-weight: normal;\r\n    background: #f0f0f0;\r\n    padding: 3px 10px;\r\n    border-radius: 15px;\r\n}\r\n\r\n.education-details[_ngcontent-%COMP%] {\r\n    margin-top: 15px;\r\n}\r\n\r\n.education-links[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    gap: 10px;\r\n    margin-top: 15px;\r\n}\r\n\r\n.btn-link[_ngcontent-%COMP%] {\r\n    background: #f0f0f0;\r\n    padding: 5px 15px;\r\n    border-radius: 20px;\r\n    color: #333;\r\n    text-decoration: none;\r\n    font-size: 0.9em;\r\n    transition: background-color 0.3s;\r\n}\r\n\r\n.btn-link[_ngcontent-%COMP%]:hover {\r\n    background: #f9b205;\r\n    color: white;\r\n}\r\n\r\n\r\n\r\n.collapsible[_ngcontent-%COMP%] {\r\n    margin-bottom: 10px;\r\n    border: 1px solid #eee;\r\n    border-radius: 5px;\r\n    overflow: hidden;\r\n}\r\n\r\n.collapsible-btn[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    background: #f5f5f5;\r\n    border: none;\r\n    padding: 10px 15px;\r\n    text-align: left;\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.collapsible-btn[_ngcontent-%COMP%]:hover {\r\n    background: #e9e9e9;\r\n}\r\n\r\n.toggle-icon[_ngcontent-%COMP%] {\r\n    font-size: 1.2em;\r\n    margin-right: 10px;\r\n    transition: transform 0.3s;\r\n}\r\n\r\n.hidden[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n.collapsible-content[_ngcontent-%COMP%] {\r\n    background: #fafafa;\r\n    padding: 10px 15px;\r\n    margin: 0;\r\n    border-top: 1px solid #eee;\r\n}\r\n\r\n\r\n\r\n.disclaimer[_ngcontent-%COMP%] {\r\n    margin-top: 30px;\r\n    padding: 20px;\r\n    background: #f9f9f9;\r\n    border-radius: 8px;\r\n    border-left: 5px solid #989898;\r\n}\r\n\r\n.disclaimer[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n    color: #555;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n\r\n\r\nul[_ngcontent-%COMP%] {\r\n    margin-left: 20px;\r\n    padding-left: 15px;\r\n    list-style-type: disc;\r\n}\r\n\r\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    margin-bottom: 5px;\r\n}\r\n\r\n\r\n\r\na[_ngcontent-%COMP%] {\r\n    color: #0066cc;\r\n    text-decoration: none;\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover {\r\n    text-decoration: underline;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkdWNhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7UUFDSSxXQUFXO1FBQ1gsaUJBQWlCO1FBQ2pCLGVBQWU7UUFDZixjQUFjO0lBQ2xCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFdBQVc7UUFDWCxlQUFlO1FBQ2YsY0FBYztRQUNkLGdCQUFnQjtJQUNwQjtBQUNKOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsU0FBUztJQUNULFVBQVU7SUFDVixXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCOztBQUVBLHFCQUFxQjs7QUFDckI7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsT0FBTztJQUNQLE1BQU07QUFDVjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixTQUFTO0lBQ1Qsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQSxvQkFBb0I7O0FBQ3BCO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQix3Q0FBd0M7SUFDeEMsaUJBQWlCO0lBQ2pCLDhCQUE4QjtJQUM5QiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsU0FBUztJQUNULGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBLHlCQUF5Qjs7QUFDekI7SUFDSSxtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCwwQkFBMEI7QUFDOUI7O0FBRUEsZUFBZTs7QUFDZjtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCOztBQUVBLFVBQVU7O0FBQ1Y7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQSxVQUFVOztBQUNWO0lBQ0ksY0FBYztJQUNkLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5QiIsImZpbGUiOiJlZHVjYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMCA0MHB4O1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwdmg7XHJcbn1cclxuXHJcbi5lZHVjYXRpb24taGVhZGVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5lZHVjYXRpb24taGVhZGVyIGgzIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uZWR1Y2F0aW9uLWhlYWRlciBoMzphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDI1JTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDNweDtcclxuICAgIGJhY2tncm91bmQ6ICNmOWIyMDU7XHJcbn1cclxuXHJcbi8qIFRpbWVsaW5lIHN0eWxpbmcgKi9cclxuLnRpbWVsaW5lIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDMwcHggMDtcclxufVxyXG5cclxuLnRpbWVsaW5lOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjliMjA1O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxufVxyXG5cclxuLnRpbWVsaW5lLWl0ZW0ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDVweDtcclxufVxyXG5cclxuLnRpbWVsaW5lLWRvdCB7XHJcbiAgICB3aWR0aDogMTZweDtcclxuICAgIGhlaWdodDogMTZweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWIyMDU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAtNnB4O1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgI2ZmZjtcclxufVxyXG5cclxuLnRpbWVsaW5lLWNvbnRlbnQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLyogRWR1Y2F0aW9uIENhcmRzICovXHJcbi5lZHVjYXRpb24tY2FyZCB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjZjliMjA1O1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcclxufVxyXG5cclxuLmVkdWNhdGlvbi1jYXJkOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcclxufVxyXG5cclxuLmVkdWNhdGlvbi1jYXJkIGg0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmVkdWNhdGlvbi15ZWFyIHtcclxuICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICBjb2xvcjogIzY2NjtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xyXG4gICAgcGFkZGluZzogM3B4IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcblxyXG4uZWR1Y2F0aW9uLWRldGFpbHMge1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxuLmVkdWNhdGlvbi1saW5rcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgZ2FwOiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxuLmJ0bi1saW5rIHtcclxuICAgIGJhY2tncm91bmQ6ICNmMGYwZjA7XHJcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XHJcbn1cclxuXHJcbi5idG4tbGluazpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjliMjA1O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4vKiBDb2xsYXBzaWJsZSBzZWN0aW9ucyAqL1xyXG4uY29sbGFwc2libGUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uY29sbGFwc2libGUtYnRuIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb2xsYXBzaWJsZS1idG46aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2U5ZTllOTtcclxufVxyXG5cclxuLnRvZ2dsZS1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcclxufVxyXG5cclxuLmhpZGRlbiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uY29sbGFwc2libGUtY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xyXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7XHJcbn1cclxuXHJcbi8qIERpc2NsYWltZXIgKi9cclxuLmRpc2NsYWltZXIge1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjOTg5ODk4O1xyXG59XHJcblxyXG4uZGlzY2xhaW1lciBoNSB7XHJcbiAgICBjb2xvcjogIzU1NTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi8qIExpc3RzICovXHJcbnVsIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBkaXNjO1xyXG59XHJcblxyXG51bCBsaSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi8qIExpbmtzICovXHJcbmEge1xyXG4gICAgY29sb3I6ICMwMDY2Y2M7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmE6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 2869:
/*!****************************************************!*\
  !*** ./src/app/about/hobbies/hobbies.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HobbiesComponent": () => (/* binding */ HobbiesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class HobbiesComponent {
    constructor() { }
    ngOnInit() {
    }
    toggle(element) {
        element.classList.toggle('hidden');
        // Change the toggle icon
        const button = element.previousElementSibling;
        const icon = button.querySelector('.toggle-icon');
        if (icon) {
            if (element.classList.contains('hidden')) {
                icon.textContent = '+';
            }
            else {
                icon.textContent = '-';
            }
        }
    }
}
HobbiesComponent.ɵfac = function HobbiesComponent_Factory(t) { return new (t || HobbiesComponent)(); };
HobbiesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HobbiesComponent, selectors: [["app-hobbies"]], decls: 183, vars: 0, consts: [[1, "container"], [1, "hobbies-header"], [1, "hobbies-grid"], [1, "hobby-card"], [1, "hobby-icon"], [1, "hobby-content"], [1, "hobby-description"], [1, "tag-container"], [1, "hobby-tag"], [1, "collapsible"], [1, "collapsible-btn", 3, "click"], [1, "toggle-icon"], [1, "collapsible-content", "hidden"], ["countriesElement", ""], ["activitiesElement", ""], ["readingElement", ""], ["watchingElement", ""], [1, "volunteer-list"], [1, "volunteer-event"], [1, "hobbies-footer"]], template: function HobbiesComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section")(1, "div", 0)(2, "div", 1)(3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "My Hobbies & Interests");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2)(6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5)(9, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Sports & Physical Activities");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6)(12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Staying active is an important part of my life. I enjoy various physical activities:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7)(15, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Basketball");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Gym");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Tennis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Calisthenics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Swimming");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Kickboxing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Volleyball");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Football");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 5)(34, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Traveling");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 6)(37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "I love exploring new places and cultures. So far, I've visited:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 9)(40, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HobbiesComponent_Template_button_click_40_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](45); return ctx.toggle(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Countries Visited ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "ul", 12, 13)(46, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Netherlands (extensively)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Belgium");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Greece");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Spain");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Sweden");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Bulgaria");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Hungary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Romania (my home country)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 9)(63, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HobbiesComponent_Template_button_click_63_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](68); return ctx.toggle(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " Travel Activities ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "ul", 12, 14)(69, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Hiking in mountain regions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Backpacking in cities");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Beach vacations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Academic travel for competitions (won medals)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 5)(80, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Arts & Creativity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 6)(83, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Expressing creativity through various mediums:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 7)(86, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Drawing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Piano");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Game Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Painting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Journaling");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Whittling");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Origami");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 5)(103, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Reading & Media");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 6)(106, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "I enjoy consuming various types of media:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 9)(109, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HobbiesComponent_Template_button_click_109_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](114); return ctx.toggle(_r2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " Reading Materials ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "ul", 12, 15)(115, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Fiction novels and short stories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Non-fiction books on technology and science");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Manga and graphic novels");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Technical documentation (yes, for fun sometimes!)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 9)(124, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HobbiesComponent_Template_button_click_124_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](129); return ctx.toggle(_r3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, " Watching ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "ul", 12, 16)(130, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "TV shows (especially sci-fi and comedies)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Movies (from blockbusters to indie films)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Anime (both classic and recent series)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Educational content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 5)(141, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Gaming & Puzzles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 6)(144, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "I enjoy challenging my mind with games and puzzles:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 7)(147, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Chess");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Video Games");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Board Games");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "D&D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "Light Up Puzzles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "Rubik's Cube");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "Logic Puzzles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 5)(164, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Volunteer Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 6)(167, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "Giving back to the community through volunteering:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "ul", 17)(170, "li")(171, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "Bike Fest");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "Helped organize and run a community cycling event");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "li")(176, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "Mountain Camp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "Assisted with organizing outdoor activities for youth");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 19)(181, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "I believe that maintaining a diverse set of interests helps me stay creative and brings balance to my life. I'm always open to trying new activities and expanding my horizons!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } }, styles: ["@media (min-width: 992px) {\r\n    .container[_ngcontent-%COMP%] {\r\n        padding: 0 40px;\r\n        width: 100%;\r\n        max-width: 1200px;\r\n        margin: 0 auto;\r\n    }\r\n}\r\n\r\n@media (max-width: 992px) {\r\n    .container[_ngcontent-%COMP%] {\r\n        padding: 0 20px;\r\n        width: 100%;\r\n        margin: 0 auto;\r\n        font-size: small;\r\n    }\r\n    \r\n    .hobbies-grid[_ngcontent-%COMP%] {\r\n        grid-template-columns: 1fr;\r\n    }\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n    margin-bottom: 10vh;\r\n}\r\n\r\n.hobbies-header[_ngcontent-%COMP%] {\r\n    margin-bottom: 2rem;\r\n    text-align: center;\r\n}\r\n\r\n.hobbies-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: inline-block;\r\n    padding-bottom: 10px;\r\n}\r\n\r\n.hobbies-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:after {\r\n    content: '';\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 25%;\r\n    width: 50%;\r\n    height: 3px;\r\n    background: #f9b205;\r\n}\r\n\r\n\r\n\r\n.hobbies-grid[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));\r\n    grid-gap: 30px;\r\n    gap: 30px;\r\n    margin-top: 30px;\r\n}\r\n\r\n\r\n\r\n.hobby-card[_ngcontent-%COMP%] {\r\n    background: white;\r\n    border-radius: 12px;\r\n    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);\r\n    display: flex;\r\n    padding: 20px;\r\n    transition: transform 0.3s ease, box-shadow 0.3s ease;\r\n    border-left: 5px solid #f9b205;\r\n}\r\n\r\n.hobby-card[_ngcontent-%COMP%]:hover {\r\n    transform: translateY(-5px);\r\n    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);\r\n}\r\n\r\n.hobby-icon[_ngcontent-%COMP%] {\r\n    flex: 0 0 60px;\r\n    margin-right: 20px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.hobby-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 40px;\r\n    height: 40px;\r\n    opacity: 0.8;\r\n}\r\n\r\n.hobby-content[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n}\r\n\r\n.hobby-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n    margin-bottom: 15px;\r\n    color: #333;\r\n    font-size: 1.2rem;\r\n    font-weight: 600;\r\n}\r\n\r\n.hobby-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin-bottom: 15px;\r\n    color: #555;\r\n}\r\n\r\n\r\n\r\n.tag-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    gap: 10px;\r\n    margin-top: 10px;\r\n}\r\n\r\n.hobby-tag[_ngcontent-%COMP%] {\r\n    background-color: #f0f0f0;\r\n    color: #333;\r\n    padding: 5px 12px;\r\n    border-radius: 20px;\r\n    font-size: 0.9em;\r\n    transition: background-color 0.2s;\r\n}\r\n\r\n.hobby-tag[_ngcontent-%COMP%]:hover {\r\n    background-color: #f9b205;\r\n    color: white;\r\n}\r\n\r\n\r\n\r\n.volunteer-list[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.volunteer-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    margin-bottom: 15px;\r\n    padding-bottom: 15px;\r\n    border-bottom: 1px dashed #eee;\r\n}\r\n\r\n.volunteer-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\r\n    border-bottom: none;\r\n    margin-bottom: 0;\r\n    padding-bottom: 0;\r\n}\r\n\r\n.volunteer-event[_ngcontent-%COMP%] {\r\n    font-weight: 600;\r\n    color: #333;\r\n    display: block;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n\r\n\r\n.collapsible[_ngcontent-%COMP%] {\r\n    margin-bottom: 10px;\r\n    border: 1px solid #eee;\r\n    border-radius: 5px;\r\n    overflow: hidden;\r\n}\r\n\r\n.collapsible-btn[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    background: #f5f5f5;\r\n    border: none;\r\n    padding: 10px 15px;\r\n    text-align: left;\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.collapsible-btn[_ngcontent-%COMP%]:hover {\r\n    background: #e9e9e9;\r\n}\r\n\r\n.toggle-icon[_ngcontent-%COMP%] {\r\n    font-size: 1.2em;\r\n    margin-right: 10px;\r\n    transition: transform 0.3s;\r\n}\r\n\r\n.hidden[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n.collapsible-content[_ngcontent-%COMP%] {\r\n    background: #fafafa;\r\n    padding: 10px 15px;\r\n    margin: 0;\r\n    border-top: 1px solid #eee;\r\n}\r\n\r\n\r\n\r\n.hobbies-footer[_ngcontent-%COMP%] {\r\n    margin-top: 40px;\r\n    padding: 20px;\r\n    background: #f9f9f9;\r\n    border-radius: 8px;\r\n    text-align: center;\r\n    border-left: 5px solid #989898;\r\n}\r\n\r\n\r\n\r\nul[_ngcontent-%COMP%] {\r\n    margin-left: 20px;\r\n    padding-left: 15px;\r\n    list-style-type: disc;\r\n}\r\n\r\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    margin-bottom: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvYmJpZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO1FBQ0ksZUFBZTtRQUNmLFdBQVc7UUFDWCxpQkFBaUI7UUFDakIsY0FBYztJQUNsQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxlQUFlO1FBQ2YsV0FBVztRQUNYLGNBQWM7UUFDZCxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSwwQkFBMEI7SUFDOUI7QUFDSjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFNBQVM7SUFDVCxVQUFVO0lBQ1YsV0FBVztJQUNYLG1CQUFtQjtBQUN2Qjs7QUFFQSxnQ0FBZ0M7O0FBQ2hDO0lBQ0ksYUFBYTtJQUNiLDREQUE0RDtJQUM1RCxjQUFTO0lBQVQsU0FBUztJQUNULGdCQUFnQjtBQUNwQjs7QUFFQSx1QkFBdUI7O0FBQ3ZCO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQix5Q0FBeUM7SUFDekMsYUFBYTtJQUNiLGFBQWE7SUFDYixxREFBcUQ7SUFDckQsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxPQUFPO0FBQ1g7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztBQUNmOztBQUVBLHFCQUFxQjs7QUFDckI7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLFNBQVM7SUFDVCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBLDJCQUEyQjs7QUFDM0I7SUFDSSxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLFNBQVM7QUFDYjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUEseUJBQXlCOztBQUN6QjtJQUNJLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsU0FBUztJQUNULDBCQUEwQjtBQUM5Qjs7QUFFQSxXQUFXOztBQUNYO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQiw4QkFBOEI7QUFDbEM7O0FBRUEsVUFBVTs7QUFDVjtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6ImhvYmJpZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgcGFkZGluZzogMCA0MHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1heC13aWR0aDogMTIwMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuaG9iYmllcy1ncmlkIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIH1cclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHZoO1xyXG59XHJcblxyXG4uaG9iYmllcy1oZWFkZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmhvYmJpZXMtaGVhZGVyIGgzIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uaG9iYmllcy1oZWFkZXIgaDM6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAyNSU7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjliMjA1O1xyXG59XHJcblxyXG4vKiBHcmlkIGxheW91dCBmb3IgaG9iYnkgY2FyZHMgKi9cclxuLmhvYmJpZXMtZ3JpZCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoNDAwcHgsIDFmcikpO1xyXG4gICAgZ2FwOiAzMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuLyogSG9iYnkgQ2FyZCBTdHlsaW5nICovXHJcbi5ob2JieS1jYXJkIHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLCBib3gtc2hhZG93IDAuM3MgZWFzZTtcclxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2Y5YjIwNTtcclxufVxyXG5cclxuLmhvYmJ5LWNhcmQ6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG59XHJcblxyXG4uaG9iYnktaWNvbiB7XHJcbiAgICBmbGV4OiAwIDAgNjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ob2JieS1pY29uIGltZyB7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIG9wYWNpdHk6IDAuODtcclxufVxyXG5cclxuLmhvYmJ5LWNvbnRlbnQge1xyXG4gICAgZmxleDogMTtcclxufVxyXG5cclxuLmhvYmJ5LWNvbnRlbnQgaDQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uaG9iYnktZGVzY3JpcHRpb24gcCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgY29sb3I6ICM1NTU7XHJcbn1cclxuXHJcbi8qIFRhZ3MgZm9yIGhvYmJpZXMgKi9cclxuLnRhZy1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGdhcDogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5ob2JieS10YWcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgcGFkZGluZzogNXB4IDEycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcclxufVxyXG5cclxuLmhvYmJ5LXRhZzpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjliMjA1O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4vKiBWb2x1bnRlZXIgbGlzdCBzdHlsaW5nICovXHJcbi52b2x1bnRlZXItbGlzdCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLnZvbHVudGVlci1saXN0IGxpIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2VlZTtcclxufVxyXG5cclxuLnZvbHVudGVlci1saXN0IGxpOmxhc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxufVxyXG5cclxuLnZvbHVudGVlci1ldmVudCB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuLyogQ29sbGFwc2libGUgc2VjdGlvbnMgKi9cclxuLmNvbGxhcHNpYmxlIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmNvbGxhcHNpYmxlLWJ0biB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY29sbGFwc2libGUtYnRuOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNlOWU5ZTk7XHJcbn1cclxuXHJcbi50b2dnbGUtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XHJcbn1cclxuXHJcbi5oaWRkZW4ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmNvbGxhcHNpYmxlLWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcclxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xyXG59XHJcblxyXG4vKiBGb290ZXIgKi9cclxuLmhvYmJpZXMtZm9vdGVyIHtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzk4OTg5ODtcclxufVxyXG5cclxuLyogTGlzdHMgKi9cclxudWwge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IGRpc2M7XHJcbn1cclxuXHJcbnVsIGxpIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufSJdfQ== */"] });


/***/ }),

/***/ 27:
/*!**********************************************!*\
  !*** ./src/app/about/main/main.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainComponent": () => (/* binding */ MainComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class MainComponent {
    constructor() { }
    ngOnInit() {
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(); };
MainComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 143, vars: 0, consts: [[1, "container"], [1, "profile-section"], [1, "profile-image"], ["src", "assets/img/Bogdan Dumbravean.jpg", "alt", "Profile Photo"], [1, "profile-content"], [1, "about-grid"], [1, "about-card"], [1, "about-card-header"], [1, "about-icon"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M22 10v6M2 10l10-5 10 5-10 5z"], ["d", "M6 12v5c3 3 9 3 12 0v-5"], [1, "mb-2"], ["href", "education", 1, "p-readmore"], ["src", "assets/img/rm_arw_rgt.png", "alt", "The icon for readmore arrow"], ["cx", "12", "cy", "12", "r", "10"], ["d", "M9 12h6"], ["d", "M12 9v6"], ["href", "hobbies", 1, "p-readmore"], [1, "skills-section"], [1, "section-title"], [1, "skills-container"], [1, "tags-container"], [1, "skill-tag"], [1, "languages-section"], [1, "language-grid"], [1, "language-item"], [1, "language-name"], [1, "language-level"], [1, "progress-bar"], [1, "progress-fill", 2, "width", "100%"], [1, "level-label"], [1, "progress-fill", 2, "width", "40%"], [1, "progress-fill", 2, "width", "20%"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section")(1, "div", 0)(2, "div", 1)(3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4)(6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "About Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "I'm a software engineer with a passion for game development. With experience in both programming and game design, I've built a diverse set of skills that allow me to create innovative software solutions.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Originally from Romania, I've expanded my horizons through education and work in the Netherlands, gaining international experience in software development.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5)(13, "div", 6)(14, "div", 7)(15, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "path", 10)(20, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "I had most of my education in Romania. My highschool and bachelor's were in the domain of computer science. Currently doing a MASc in the Netherlands on Game Technology.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Read More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 6)(27, "div", 7)(28, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Hobbies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "circle", 15)(33, "path", 16)(34, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "The activity I appreciate the most is doing sports. Other than that, I also occupy my time with reading, doing something artistic, watching shows, playing games, and travelling.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Read More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 19)(41, "h4", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Professional Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 21)(44, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Technical Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 22)(47, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "OOP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "REST API");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Unity Game Engine");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Procedural Generation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Game Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "AI Systems");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Web Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Database Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 21)(64, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Programming Languages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 22)(67, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "C#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Java");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "C++");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Python");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "JavaScript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "SQL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "HTML/CSS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "TypeScript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 21)(84, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Soft Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 22)(87, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Project Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Teamwork");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Leadership");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Problem Solving");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Communication");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Time Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 24)(100, "h4", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Languages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 25)(103, "div", 26)(104, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Romanian");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 28)(107, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Native");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 26)(112, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "English");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 28)(115, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "C2 - Proficient");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 26)(120, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "German");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 28)(123, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "A2 - Basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 26)(128, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "French");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 28)(131, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "A1 - Beginner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 26)(136, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Dutch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 28)(139, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "A1 - Beginner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
    } }, styles: ["@media (min-width: 992px) {\r\n    .container[_ngcontent-%COMP%] {\r\n        padding: 0 40px;\r\n        width: 100%;\r\n        max-width: 1200px;\r\n        margin: 0 auto;\r\n    }\r\n}\r\n\r\n@media (max-width: 992px) {\r\n    .container[_ngcontent-%COMP%] {\r\n        padding: 0 20px;\r\n        width: 100%;\r\n        margin: 0 auto;\r\n        font-size: small;\r\n    }\r\n    \r\n    .profile-section[_ngcontent-%COMP%] {\r\n        flex-direction: column;\r\n    }\r\n    \r\n    .profile-image[_ngcontent-%COMP%] {\r\n        width: 180px;\r\n        height: 180px;\r\n        margin: 0 auto 20px auto;\r\n    }\r\n    \r\n    .about-grid[_ngcontent-%COMP%] {\r\n        grid-template-columns: 1fr;\r\n    }\r\n    \r\n    .language-grid[_ngcontent-%COMP%] {\r\n        grid-template-columns: 1fr;\r\n    }\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n    margin-bottom: 10vh;\r\n    padding-bottom: 30px;\r\n}\r\n\r\n\r\n\r\n.profile-section[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-bottom: 40px;\r\n    background: white;\r\n    border-radius: 12px;\r\n    padding: 25px;\r\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.profile-image[_ngcontent-%COMP%] {\r\n    width: 200px;\r\n    height: 200px;\r\n    border-radius: 50%;\r\n    overflow: hidden;\r\n    border: 5px solid #f9b205;\r\n    flex-shrink: 0;\r\n    margin-right: 30px;\r\n}\r\n\r\n.profile-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: cover;\r\n}\r\n\r\n.profile-content[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n}\r\n\r\n.profile-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    margin-bottom: 15px;\r\n    position: relative;\r\n    display: inline-block;\r\n    padding-bottom: 10px;\r\n}\r\n\r\n.profile-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:after {\r\n    content: '';\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 80px;\r\n    height: 3px;\r\n    background: #f9b205;\r\n}\r\n\r\n.profile-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin-bottom: 10px;\r\n    color: #555;\r\n    line-height: 1.6;\r\n}\r\n\r\n\r\n\r\n.about-grid[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    grid-gap: 25px;\r\n    gap: 25px;\r\n    margin-bottom: 40px;\r\n}\r\n\r\n.about-card[_ngcontent-%COMP%] {\r\n    background: white;\r\n    padding: 25px;\r\n    border-radius: 10px;\r\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\r\n    border-left: 5px solid #f9b205;\r\n    transition: transform 0.3s ease;\r\n}\r\n\r\n.about-card[_ngcontent-%COMP%]:hover {\r\n    transform: translateY(-5px);\r\n}\r\n\r\n.about-card-header[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.about-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    color: #333;\r\n}\r\n\r\n.about-icon[_ngcontent-%COMP%] {\r\n    width: 40px;\r\n    height: 40px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background: #f8f8f8;\r\n    border-radius: 50%;\r\n    color: #f9b205;\r\n}\r\n\r\n.about-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    color: #555;\r\n    margin-bottom: 20px;\r\n    line-height: 1.5;\r\n}\r\n\r\n\r\n\r\n.skills-section[_ngcontent-%COMP%] {\r\n    background: white;\r\n    padding: 25px;\r\n    border-radius: 10px;\r\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\r\n    margin-bottom: 40px;\r\n}\r\n\r\n.section-title[_ngcontent-%COMP%] {\r\n    margin-bottom: 20px;\r\n    position: relative;\r\n    display: inline-block;\r\n    padding-bottom: 10px;\r\n}\r\n\r\n.section-title[_ngcontent-%COMP%]:after {\r\n    content: '';\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 60px;\r\n    height: 3px;\r\n    background: #f9b205;\r\n}\r\n\r\n.skills-container[_ngcontent-%COMP%] {\r\n    margin-bottom: 25px;\r\n}\r\n\r\n.skills-container[_ngcontent-%COMP%]:last-child {\r\n    margin-bottom: 0;\r\n}\r\n\r\n.skills-container[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n    margin-bottom: 15px;\r\n    color: #444;\r\n}\r\n\r\n.tags-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    gap: 10px;\r\n}\r\n\r\n.skill-tag[_ngcontent-%COMP%] {\r\n    background: #f5f5f5;\r\n    padding: 6px 15px;\r\n    border-radius: 20px;\r\n    font-size: 0.9em;\r\n    color: #333;\r\n    transition: all 0.2s ease;\r\n    border: 1px solid #e0e0e0;\r\n}\r\n\r\n.skill-tag[_ngcontent-%COMP%]:hover {\r\n    background: #f9b205;\r\n    color: white;\r\n    border-color: #f9b205;\r\n    transform: translateY(-2px);\r\n}\r\n\r\n\r\n\r\n.languages-section[_ngcontent-%COMP%] {\r\n    background: white;\r\n    padding: 25px;\r\n    border-radius: 10px;\r\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.language-grid[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    grid-gap: 25px;\r\n    gap: 25px;\r\n}\r\n\r\n.language-item[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.language-name[_ngcontent-%COMP%] {\r\n    font-weight: 600;\r\n    margin-bottom: 10px;\r\n    color: #333;\r\n}\r\n\r\n.language-level[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.progress-bar[_ngcontent-%COMP%] {\r\n    width: 70%;\r\n    height: 12px;\r\n    background: #eee;\r\n    border-radius: 10px;\r\n    overflow: hidden;\r\n    margin-right: 15px;\r\n}\r\n\r\n.progress-fill[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    background: #f9b205;\r\n    border-radius: 10px;\r\n    transition: width 1s ease;\r\n}\r\n\r\n.level-label[_ngcontent-%COMP%] {\r\n    font-size: 0.85em;\r\n    color: #666;\r\n}\r\n\r\n\r\n\r\n.p-readmore[_ngcontent-%COMP%] {\r\n    color: #000;\r\n    font-size: 18px;\r\n    font-weight: 600;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.p-readmore[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    transition: all .5s;\r\n    transform: translateX(0);\r\n    width: 1em;\r\n    height: 1em;\r\n    margin-left: .7em;\r\n}\r\n\r\n.p-readmore[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\r\n    transform: translateX(5px);\r\n}\n/*# sourceMappingURL=data:application/json;base64,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QUNqQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsY0FBUztJQUFULFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7QUFDZjs7QUFFQSxnQ0FBZ0M7O0FBQ2hDO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4QixVQUFVO0lBQ1YsV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5QiIsImZpbGUiOiJtYWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgNDBweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnByb2ZpbGUtc2VjdGlvbiB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnByb2ZpbGUtaW1hZ2Uge1xyXG4gICAgICAgIHdpZHRoOiAxODBweDtcclxuICAgICAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvIDIwcHggYXV0bztcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmFib3V0LWdyaWQge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubGFuZ3VhZ2UtZ3JpZCB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTB2aDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4vKiBQcm9maWxlIFNlY3Rpb24gKi9cclxuLnByb2ZpbGUtc2VjdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbi5wcm9maWxlLWltYWdlIHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYm9yZGVyOiA1cHggc29saWQgI2Y5YjIwNTtcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4ucHJvZmlsZS1pbWFnZSBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuLnByb2ZpbGUtY29udGVudCB7XHJcbiAgICBmbGV4OiAxO1xyXG59XHJcblxyXG4ucHJvZmlsZS1jb250ZW50IGgzIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLnByb2ZpbGUtY29udGVudCBoMzphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogM3B4O1xyXG4gICAgYmFja2dyb3VuZDogI2Y5YjIwNTtcclxufVxyXG5cclxuLnByb2ZpbGUtY29udGVudCBwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBjb2xvcjogIzU1NTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbn1cclxuXHJcbi8qIEFib3V0IENhcmRzIEdyaWQgKi9cclxuLmFib3V0LWdyaWQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbiAgICBnYXA6IDI1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG59XHJcblxyXG4uYWJvdXQtY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNmOWIyMDU7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xyXG59XHJcblxyXG4uYWJvdXQtY2FyZDpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XHJcbn1cclxuXHJcbi5hYm91dC1jYXJkLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5hYm91dC1jYXJkIGg0IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG59XHJcblxyXG4uYWJvdXQtaWNvbiB7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgY29sb3I6ICNmOWIyMDU7XHJcbn1cclxuXHJcbi5hYm91dC1jYXJkIHAge1xyXG4gICAgY29sb3I6ICM1NTU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxufVxyXG5cclxuLyogU2tpbGxzIFNlY3Rpb24gKi9cclxuLnNraWxscy1zZWN0aW9uIHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbn1cclxuXHJcbi5zZWN0aW9uLXRpdGxlIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLnNlY3Rpb24tdGl0bGU6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDNweDtcclxuICAgIGJhY2tncm91bmQ6ICNmOWIyMDU7XHJcbn1cclxuXHJcbi5za2lsbHMtY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuXHJcbi5za2lsbHMtY29udGFpbmVyOmxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLnNraWxscy1jb250YWluZXIgaDUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIGNvbG9yOiAjNDQ0O1xyXG59XHJcblxyXG4udGFncy1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGdhcDogMTBweDtcclxufVxyXG5cclxuLnNraWxsLXRhZyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xyXG4gICAgcGFkZGluZzogNnB4IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XHJcbn1cclxuXHJcbi5za2lsbC10YWc6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2Y5YjIwNTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1jb2xvcjogI2Y5YjIwNTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxufVxyXG5cclxuLyogTGFuZ3VhZ2VzIFNlY3Rpb24gKi9cclxuLmxhbmd1YWdlcy1zZWN0aW9uIHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuLmxhbmd1YWdlLWdyaWQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbiAgICBnYXA6IDI1cHg7XHJcbn1cclxuXHJcbi5sYW5ndWFnZS1pdGVtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4ubGFuZ3VhZ2UtbmFtZSB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG59XHJcblxyXG4ubGFuZ3VhZ2UtbGV2ZWwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5wcm9ncmVzcy1iYXIge1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIGhlaWdodDogMTJweDtcclxuICAgIGJhY2tncm91bmQ6ICNlZWU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxufVxyXG5cclxuLnByb2dyZXNzLWZpbGwge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogI2Y5YjIwNTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAxcyBlYXNlO1xyXG59XHJcblxyXG4ubGV2ZWwtbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAwLjg1ZW07XHJcbiAgICBjb2xvcjogIzY2NjtcclxufVxyXG5cclxuLyogRml4IGZvciB0aGUgcmVhZCBtb3JlIGxpbmtzICovXHJcbi5wLXJlYWRtb3JlIHtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5wLXJlYWRtb3JlIGltZyB7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgd2lkdGg6IDFlbTtcclxuICAgIGhlaWdodDogMWVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC43ZW07XHJcbn1cclxuXHJcbi5wLXJlYWRtb3JlOmhvdmVyIGltZyB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KTtcclxufSJdfQ== */"] });


/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _about_main_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about/main/main.component */ 27);
/* harmony import */ var _portofolio_main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./portofolio/main/main.component */ 5194);
/* harmony import */ var _portofolio_programming_programming_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./portofolio/programming/programming.component */ 8890);
/* harmony import */ var _portofolio_games_games_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./portofolio/games/games.component */ 988);
/* harmony import */ var _about_education_education_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about/education/education.component */ 6881);
/* harmony import */ var _about_hobbies_hobbies_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about/hobbies/hobbies.component */ 2869);
/* harmony import */ var _portofolio_project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./portofolio/project-detail/project-detail.component */ 7682);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);











const routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
    },
    {
        path: 'about',
        component: _about_main_main_component__WEBPACK_IMPORTED_MODULE_1__.MainComponent
    },
    {
        path: 'portofolio',
        component: _portofolio_main_main_component__WEBPACK_IMPORTED_MODULE_2__.MainComponent
    },
    {
        path: 'programming',
        component: _portofolio_programming_programming_component__WEBPACK_IMPORTED_MODULE_3__.ProgrammingComponent
    },
    {
        path: 'games',
        component: _portofolio_games_games_component__WEBPACK_IMPORTED_MODULE_4__.GamesComponent
    },
    {
        path: 'education',
        component: _about_education_education_component__WEBPACK_IMPORTED_MODULE_5__.EducationComponent
    },
    {
        path: 'hobbies',
        component: _about_hobbies_hobbies_component__WEBPACK_IMPORTED_MODULE_6__.HobbiesComponent
    },
    {
        path: 'projects/:list/:id',
        component: _portofolio_project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_7__.ProjectDetailComponent
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })], _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule] }); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);



const _c0 = function () { return { exact: true }; };
class AppComponent {
    constructor(titleService) {
        this.titleService = titleService;
        this.title = 'portofolio';
        this.gmail = "dumbraveanb@gmail.com";
        this.instagramLink = "https://www.instagram.com/bogdan_dumbra/";
        this.facebookLink = "https://www.facebook.com/bogdan.dumbravean";
        this.linkedinLink = "https://www.linkedin.com/in/bogdan-dumbravean/";
        this.isSidebarOpen = false;
        this.currentYear = new Date().getFullYear();
        this.titleService.setTitle("Bogdan Dumbrăvean");
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
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.Title)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function AppComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("keydown", function AppComponent_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 54, vars: 15, consts: [[1, "main-container"], [1, "sidebar-overlay", 3, "click"], [1, "sidebar"], [1, "sidebar-content"], [1, "profile"], [1, "profile-name"], [1, "profile-title"], [1, "nav-menu"], ["routerLink", "/", "routerLinkActive", "active", 3, "routerLinkActiveOptions", "click"], ["routerLink", "/about", "routerLinkActive", "active", 3, "click"], ["routerLink", "/portofolio", "routerLinkActive", "active", 3, "click"], [1, "contact-section"], [1, "social-links"], ["target", "_blank", "title", "LinkedIn", 3, "href"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"], ["x", "2", "y", "9", "width", "4", "height", "12"], ["cx", "4", "cy", "4", "r", "2"], ["target", "_blank", "title", "Instagram", 3, "href"], ["x", "2", "y", "2", "width", "20", "height", "20", "rx", "5", "ry", "5"], ["d", "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"], ["x1", "17.5", "y1", "6.5", "x2", "17.51", "y2", "6.5"], ["target", "_blank", "title", "Facebook", 3, "href"], ["d", "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"], ["title", "Email", 3, "href"], ["d", "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"], ["points", "22,6 12,13 2,6"], [1, "email-address"], [3, "href"], [1, "sidebar-footer"], [1, "sidebar-toggle", 3, "click"], [1, "toggle-line"], [1, "main-content"], [1, "page-content"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_1_listener() { return ctx.closeSidebarOnMobile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "aside", 2)(3, "div", 3)(4, "div", 4)(5, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Bogdan Dumbr\u0103vean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Software Engineer & Game Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nav", 7)(10, "ul")(11, "li")(12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_12_listener() { return ctx.closeSidebarOnMobile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li")(15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_15_listener() { return ctx.closeSidebarOnMobile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li")(18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_18_listener() { return ctx.closeSidebarOnMobile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11)(21, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Get In Touch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12)(24, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "svg", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "path", 15)(27, "rect", 16)(28, "circle", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "svg", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "rect", 19)(32, "path", 20)(33, "line", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "svg", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "path", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "svg", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "path", 25)(40, "polyline", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 27)(42, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 29)(45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_47_listener() { return ctx.toggleSidebar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "span", 31)(49, "span", 31)(50, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "main", 32)(52, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("open", ctx.isSidebarOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("open", ctx.isSidebarOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.linkedinLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.instagramLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.facebookLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", "mailto: " + ctx.gmail, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", "mailto: " + ctx.gmail, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.gmail);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A9 ", ctx.currentYear, " Bogdan Dumbr\u0103vean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("open", ctx.isSidebarOpen);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: [".main-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    min-height: 100vh;\r\n}\r\n\r\n.sidebar[_ngcontent-%COMP%] {\r\n    width: 280px;\r\n    background: linear-gradient(to bottom, #333333, #444444);\r\n    color: #fff;\r\n    position: fixed;\r\n    left: 0;\r\n    top: 0;\r\n    height: 100%;\r\n    overflow-y: auto;\r\n    box-shadow: 3px 0 10px rgba(0,0,0,0.2);\r\n    z-index: 1000;\r\n    transition: transform 0.3s ease;\r\n}\r\n.sidebar-content[_ngcontent-%COMP%] {\r\n    padding: 40px 25px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 100%;\r\n}\r\n\r\n.profile[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin-bottom: 30px;\r\n    border-bottom: 1px solid rgba(255,255,255,0.1);\r\n    padding-bottom: 20px;\r\n}\r\n.profile-name[_ngcontent-%COMP%] {\r\n    font-size: 1.8rem;\r\n    font-weight: 600;\r\n    margin: 0 0 8px;\r\n    color: #fff;\r\n}\r\n.profile-title[_ngcontent-%COMP%] {\r\n    color: rgba(255,255,255,0.9);\r\n    font-size: 1.1rem;\r\n    margin: 0;\r\n}\r\n\r\n.nav-menu[_ngcontent-%COMP%] {\r\n    margin-bottom: 40px;\r\n}\r\n.nav-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n.nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    margin-bottom: 12px;\r\n}\r\n.nav-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: block;\r\n    padding: 12px 15px;\r\n    color: #fff;\r\n    text-decoration: none;\r\n    border-radius: 6px;\r\n    font-weight: 500;\r\n    transition: all 0.3s;\r\n    border-left: 3px solid transparent;\r\n}\r\n.nav-menu[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\r\n    background: rgba(255,255,255,0.15);\r\n    border-left: 3px solid #f9b205;\r\n}\r\n.nav-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    background: rgba(255,255,255,0.1);\r\n    transform: translateX(5px);\r\n}\r\n\r\n.contact-section[_ngcontent-%COMP%] {\r\n    margin-top: auto;\r\n    margin-bottom: 30px;\r\n}\r\n.contact-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n    font-size: 1.1rem;\r\n    margin-bottom: 15px;\r\n    position: relative;\r\n    display: inline-block;\r\n    color: #f9b205;\r\n}\r\n.contact-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]:after {\r\n    content: '';\r\n    position: absolute;\r\n    height: 2px;\r\n    width: 50px;\r\n    background: #f9b205;\r\n    bottom: -6px;\r\n    left: 0;\r\n}\r\n.social-links[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    gap: 12px;\r\n    margin-bottom: 15px;\r\n}\r\n.social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 36px;\r\n    height: 36px;\r\n    border-radius: 50%;\r\n    background: rgba(255,255,255,0.2);\r\n    color: #fff;\r\n    transition: all 0.3s;\r\n}\r\n.social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    background: rgba(255,255,255,0.4);\r\n    transform: translateY(-3px);\r\n}\r\n.email-address[_ngcontent-%COMP%] {\r\n    margin-top: 15px;\r\n    font-size: 0.9rem;\r\n}\r\n.email-address[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    text-decoration: none;\r\n    opacity: 0.9;\r\n}\r\n.email-address[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    opacity: 1;\r\n    text-decoration: underline;\r\n}\r\n\r\n.sidebar-footer[_ngcontent-%COMP%] {\r\n    padding-top: 20px;\r\n    font-size: 0.8rem;\r\n    color: rgba(255,255,255,0.5);\r\n    border-top: 1px solid rgba(255,255,255,0.1);\r\n    text-align: center;\r\n}\r\n\r\n.main-content[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n    margin-left: 280px;\r\n    background-image: url('/assets/img/triangle-mosaic.png');\r\n    background-size: cover;\r\n    background-blend-mode: overlay;\r\n    background-attachment: fixed;\r\n    min-height: 100vh;\r\n    position: relative;\r\n    background-color: rgba(255,255,255,0.9);\r\n    width: calc(100% - 280px);\r\n}\r\n.page-content[_ngcontent-%COMP%] {\r\n    min-height: 100vh; \r\n    padding-top: 30px; \r\n    padding-bottom: 30px; \r\n}\r\n\r\n.sidebar-toggle[_ngcontent-%COMP%] {\r\n    display: none;\r\n    position: fixed;\r\n    top: 15px;\r\n    right: 15px;\r\n    width: 45px;\r\n    height: 45px;\r\n    border-radius: 50%;\r\n    background: #fff;\r\n    box-shadow: 0 2px 10px rgba(0,0,0,0.1);\r\n    border: none;\r\n    z-index: 1100;\r\n    cursor: pointer;\r\n    transition: background 0.3s;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n.sidebar-toggle[_ngcontent-%COMP%]:hover {\r\n    background: #f9b205;\r\n}\r\n.toggle-line[_ngcontent-%COMP%] {\r\n    display: block;\r\n    width: 24px;\r\n    height: 2px;\r\n    background: #333;\r\n    margin: 3px 0;\r\n    transition: all 0.3s;\r\n}\r\n.sidebar-toggle[_ngcontent-%COMP%]:hover   .toggle-line[_ngcontent-%COMP%] {\r\n    background: #fff;\r\n}\r\n.sidebar-toggle.open[_ngcontent-%COMP%]   .toggle-line[_ngcontent-%COMP%]:nth-child(1) {\r\n    transform: rotate(45deg) translate(4px, 4px);\r\n}\r\n.sidebar-toggle.open[_ngcontent-%COMP%]   .toggle-line[_ngcontent-%COMP%]:nth-child(2) {\r\n    opacity: 0;\r\n}\r\n.sidebar-toggle.open[_ngcontent-%COMP%]   .toggle-line[_ngcontent-%COMP%]:nth-child(3) {\r\n    transform: rotate(-45deg) translate(4px, -4px);\r\n}\r\n\r\n.sidebar-overlay[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: rgba(0, 0, 0, 0.5);\r\n    z-index: 999;\r\n    opacity: 0;\r\n    pointer-events: none;\r\n    transition: opacity 0.3s ease;\r\n    display: none;\r\n}\r\n\r\n@media (max-width: 992px) {\r\n    .sidebar[_ngcontent-%COMP%] {\r\n        transform: translateX(-100%);\r\n    }\r\n    \r\n    .sidebar.open[_ngcontent-%COMP%] {\r\n        transform: translateX(0);\r\n    }\r\n    \r\n    .sidebar-toggle[_ngcontent-%COMP%] {\r\n        display: flex;\r\n    }\r\n    \r\n    .main-content[_ngcontent-%COMP%] {\r\n        margin-left: 0;\r\n        width: 100%; \r\n    }\r\n    \r\n    .sidebar-overlay[_ngcontent-%COMP%] {\r\n        display: block;\r\n    }\r\n    \r\n    .sidebar-overlay.open[_ngcontent-%COMP%] {\r\n        opacity: 1;\r\n        pointer-events: auto;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,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LG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG9CQUFvQjtBQUN4QjtBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSw0Q0FBNEM7QUFDaEQ7QUFFQTtJQUNJLFVBQVU7QUFDZDtBQUVBO0lBQ0ksOENBQThDO0FBQ2xEO0FBRUEsb0JBQW9CO0FBQ3BCO0lBQ0ksZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLFVBQVU7SUFDVixvQkFBb0I7SUFDcEIsNkJBQTZCO0lBQzdCLGFBQWE7QUFDakI7QUFFQSxzQkFBc0I7QUFDdEI7SUFDSTtRQUNJLDRCQUE0QjtJQUNoQzs7SUFFQTtRQUNJLHdCQUF3QjtJQUM1Qjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxjQUFjO1FBQ2QsV0FBVyxFQUFFLHlCQUF5QjtJQUMxQzs7SUFFQTtRQUNJLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxVQUFVO1FBQ1Ysb0JBQW9CO0lBQ3hCO0FBQ0oiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBNYWluIExheW91dCAqL1xyXG4ubWFpbi1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4vKiBTaWRlYmFyICovXHJcbi5zaWRlYmFyIHtcclxuICAgIHdpZHRoOiAyODBweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMzMzMzMzMsICM0NDQ0NDQpO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIGJveC1zaGFkb3c6IDNweCAwIDEwcHggcmdiYSgwLDAsMCwwLjIpO1xyXG4gICAgei1pbmRleDogMTAwMDtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi5zaWRlYmFyLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogNDBweCAyNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi8qIFByb2ZpbGUgLSBtb2RpZmllZCB0byByZW1vdmUgaW1hZ2UgKi9cclxuLnByb2ZpbGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMSk7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLnByb2ZpbGUtbmFtZSB7XHJcbiAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW46IDAgMCA4cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLnByb2ZpbGUtdGl0bGUge1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC45KTtcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4vKiBOYXZpZ2F0aW9uIC0gaW1wcm92ZWQgdmlzaWJpbGl0eSAqL1xyXG4ubmF2LW1lbnUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG5cclxuLm5hdi1tZW51IHVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4ubmF2LW1lbnUgbGkge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxufVxyXG5cclxuLm5hdi1tZW51IGEge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDE1cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5uYXYtbWVudSBhLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMTUpO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjZjliMjA1O1xyXG59XHJcblxyXG4ubmF2LW1lbnUgYTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KTtcclxufVxyXG5cclxuLyogQ29udGFjdCBTZWN0aW9uIC0gaW1wcm92ZWQgc3BhY2luZyAqL1xyXG4uY29udGFjdC1zZWN0aW9uIHtcclxuICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4uY29udGFjdC1zZWN0aW9uIGg0IHtcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGNvbG9yOiAjZjliMjA1O1xyXG59XHJcblxyXG4uY29udGFjdC1zZWN0aW9uIGg0OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmOWIyMDU7XHJcbiAgICBib3R0b206IC02cHg7XHJcbiAgICBsZWZ0OiAwO1xyXG59XHJcblxyXG4uc29jaWFsLWxpbmtzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDEycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4uc29jaWFsLWxpbmtzIGEge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAzNnB4O1xyXG4gICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjIpO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxufVxyXG5cclxuLnNvY2lhbC1saW5rcyBhOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC40KTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxufVxyXG5cclxuLmVtYWlsLWFkZHJlc3Mge1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG59XHJcblxyXG4uZW1haWwtYWRkcmVzcyBhIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgb3BhY2l0eTogMC45O1xyXG59XHJcblxyXG4uZW1haWwtYWRkcmVzcyBhOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLyogU2lkZWJhciBGb290ZXIgKi9cclxuLnNpZGViYXItZm9vdGVyIHtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjUpO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4xKTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLyogTWFpbiBDb250ZW50IEFyZWEgKi9cclxuLm1haW4tY29udGVudCB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI4MHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltZy90cmlhbmdsZS1tb3NhaWMucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBvdmVybGF5O1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjkpO1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDI4MHB4KTtcclxufVxyXG5cclxuLnBhZ2UtY29udGVudCB7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDsgLyogQWRqdXN0ZWQgLSB3YXMgY2FsYygxMDB2aCAtIDYwcHgpICovXHJcbiAgICBwYWRkaW5nLXRvcDogMzBweDsgLyogQWRkIHBhZGRpbmcgYXQgdGhlIHRvcCBmb3IgYmV0dGVyIHNwYWNpbmcgKi9cclxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4OyAvKiBBZGQgcGFkZGluZyBhdCB0aGUgYm90dG9tIGZvciBiZXR0ZXIgc3BhY2luZyAqL1xyXG59XHJcblxyXG4vKiBNb2JpbGUgU2lkZWJhciBUb2dnbGUgKi9cclxuLnNpZGViYXItdG9nZ2xlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDE1cHg7XHJcbiAgICByaWdodDogMTVweDtcclxuICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgei1pbmRleDogMTEwMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcztcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zaWRlYmFyLXRvZ2dsZTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjliMjA1O1xyXG59XHJcblxyXG4udG9nZ2xlLWxpbmUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMjRweDtcclxuICAgIGhlaWdodDogMnB4O1xyXG4gICAgYmFja2dyb3VuZDogIzMzMztcclxuICAgIG1hcmdpbjogM3B4IDA7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxufVxyXG5cclxuLnNpZGViYXItdG9nZ2xlOmhvdmVyIC50b2dnbGUtbGluZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcblxyXG4uc2lkZWJhci10b2dnbGUub3BlbiAudG9nZ2xlLWxpbmU6bnRoLWNoaWxkKDEpIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGUoNHB4LCA0cHgpO1xyXG59XHJcblxyXG4uc2lkZWJhci10b2dnbGUub3BlbiAudG9nZ2xlLWxpbmU6bnRoLWNoaWxkKDIpIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5zaWRlYmFyLXRvZ2dsZS5vcGVuIC50b2dnbGUtbGluZTpudGgtY2hpbGQoMykge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGUoNHB4LCAtNHB4KTtcclxufVxyXG5cclxuLyogU2lkZWJhciBPdmVybGF5ICovXHJcbi5zaWRlYmFyLW92ZXJsYXkge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgei1pbmRleDogOTk5O1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4vKiBSZXNwb25zaXZlIFN0eWxlcyAqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgIC5zaWRlYmFyIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuc2lkZWJhci5vcGVuIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zaWRlYmFyLXRvZ2dsZSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLm1haW4tY29udGVudCB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggb24gbW9iaWxlICovXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zaWRlYmFyLW92ZXJsYXkge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuc2lkZWJhci1vdmVybGF5Lm9wZW4ge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG87XHJcbiAgICB9XHJcbn0iXX0= */"] });


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _portofolio_main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./portofolio/main/main.component */ 5194);
/* harmony import */ var _about_education_education_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/education/education.component */ 6881);
/* harmony import */ var _about_hobbies_hobbies_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about/hobbies/hobbies.component */ 2869);
/* harmony import */ var _portofolio_programming_programming_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./portofolio/programming/programming.component */ 8890);
/* harmony import */ var _portofolio_games_games_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./portofolio/games/games.component */ 988);
/* harmony import */ var _portofolio_project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./portofolio/project-detail/project-detail.component */ 7682);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);













class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent,
        _portofolio_main_main_component__WEBPACK_IMPORTED_MODULE_3__.MainComponent,
        _about_education_education_component__WEBPACK_IMPORTED_MODULE_4__.EducationComponent,
        _about_hobbies_hobbies_component__WEBPACK_IMPORTED_MODULE_5__.HobbiesComponent,
        _portofolio_programming_programming_component__WEBPACK_IMPORTED_MODULE_6__.ProgrammingComponent,
        _portofolio_games_games_component__WEBPACK_IMPORTED_MODULE_7__.GamesComponent,
        _portofolio_project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_8__.ProjectDetailComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbModule] }); })();


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
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 58, vars: 0, consts: [[1, "home-section"], [1, "container"], [1, "hero-section"], [1, "profile-container"], [1, "profile-image"], ["src", "assets/img/Bogdan Dumbravean.jpg", "alt", "Bogdan Dumbravean", 1, "avatar"], [1, "profile-badges"], [1, "badge", "primary-badge"], [1, "badge", "secondary-badge"], [1, "intro-content"], [1, "name-heading"], [1, "typing-container"], [1, "typing-text"], [1, "intro-text"], [1, "cta-buttons"], ["routerLink", "/about", 1, "btn", "primary-btn"], ["routerLink", "/portofolio", 1, "btn", "secondary-btn"], [1, "skills-overview"], [1, "section-title"], [1, "skills-grid"], [1, "skill-card"], [1, "skill-icon"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["points", "16 18 22 12 16 6"], ["points", "8 6 2 12 8 18"], ["points", "5 3 19 12 5 21 5 3"], ["d", "M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6)(7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Software Engineer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Game Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9)(12, "h1", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Bogdan Dumbr\u0103vean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11)(15, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Developer. Designer. Creator.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13)(18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Hello, glad to see you here!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "I'm a software engineer from Romania with a passion for game development. My expertise spans from web applications to procedural content generation and AI systems.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "This portfolio showcases my projects and professional journey. Feel free to explore and get in touch if you'd like to collaborate or chat about technology.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14)(25, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "About Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "View My Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 17)(30, "h3", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Core Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 19)(33, "div", 20)(34, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "svg", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "polyline", 23)(37, "polyline", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Software Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Building robust and scalable applications using modern technologies and best practices.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 20)(43, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "svg", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "polygon", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Game Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Creating immersive game experiences with Unity and custom game engines.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 20)(51, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "svg", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "path", 26);
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

/***/ 988:
/*!*****************************************************!*\
  !*** ./src/app/portofolio/games/games.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GamesComponent": () => (/* binding */ GamesComponent)
/* harmony export */ });
/* harmony import */ var src_app_project_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/project.list */ 2555);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/projects/games/", idx_r3, "");
} }
function GamesComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "No games match your search criteria.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
class GamesComponent {
    constructor() {
        this.searchTerm = '';
        this.games = src_app_project_list__WEBPACK_IMPORTED_MODULE_0__.GAMES;
        this.filteredGames = [...this.games];
    }
    ngOnInit() {
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
GamesComponent.ɵfac = function GamesComponent_Factory(t) { return new (t || GamesComponent)(); };
GamesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GamesComponent, selectors: [["app-games"]], decls: 19, vars: 2, consts: [[1, "project-list-section"], [1, "container"], [1, "list-header"], [1, "back-link"], ["routerLink", "/portofolio"], [1, "list-intro"], [1, "search-filter"], [1, "search-box"], ["type", "text", "placeholder", "Search games...", 3, "input"], [1, "search-icon"], [1, "project-list"], ["class", "project-item game-item", 4, "ngFor", "ngForOf"], ["class", "no-results", 4, "ngIf"], [1, "project-item", "game-item"], [1, "project-image"], [3, "src", "alt", "error"], [1, "project-details"], [1, "project-actions"], [1, "view-project-btn", 3, "routerLink"], [1, "arrow"], [1, "no-results"]], template: function GamesComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf], styles: [".project-list-section[_ngcontent-%COMP%] {\r\n    padding: 30px 0 60px 0;\r\n    background-color: #f9f9f9;\r\n    min-height: calc(100vh - 60px);\r\n    margin: -30px 0;\r\n}\r\n.container[_ngcontent-%COMP%] {\r\n    max-width: 1200px;\r\n    margin: 0 auto;\r\n    padding: 0 20px;\r\n}\r\n\r\n.list-header[_ngcontent-%COMP%] {\r\n    margin-bottom: 50px;\r\n    position: relative;\r\n    background: #ffffff;\r\n    border-radius: 12px;\r\n    padding: 30px;\r\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\r\n    border-left: 5px solid #f9b205;\r\n}\r\n.list-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-size: 2.5rem;\r\n    color: #232323;\r\n    margin-bottom: 15px;\r\n    font-weight: 700;\r\n    position: relative;\r\n    display: inline-block;\r\n    padding-bottom: 15px;\r\n}\r\n.list-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:after {\r\n    content: '';\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 120px;\r\n    height: 4px;\r\n    background: #f9b205;\r\n    border-radius: 2px;\r\n}\r\n.back-link[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 30px;\r\n    right: 30px;\r\n}\r\n.back-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: #f9b205;\r\n    text-decoration: none;\r\n    font-weight: 600;\r\n    transition: all 0.3s ease;\r\n    padding: 8px 16px;\r\n    border: 2px solid #f9b205;\r\n    border-radius: 25px;\r\n    background: rgba(249, 178, 5, 0.1);\r\n}\r\n.back-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    background: #f9b205;\r\n    color: #ffffff;\r\n}\r\n.list-intro[_ngcontent-%COMP%] {\r\n    max-width: 800px;\r\n    margin: 20px 0 0 0;\r\n    line-height: 1.8;\r\n    color: #555;\r\n    font-size: 1.1rem;\r\n}\r\n\r\n.search-filter[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    margin-bottom: 40px;\r\n}\r\n.search-box[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 100%;\r\n    max-width: 400px;\r\n}\r\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    padding: 15px 50px 15px 25px;\r\n    border: 2px solid #e0e0e0;\r\n    border-radius: 30px;\r\n    font-size: 16px;\r\n    background: #ffffff;\r\n    color: #333;\r\n    transition: all 0.3s ease;\r\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\r\n}\r\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\r\n    color: #999;\r\n}\r\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\r\n    border-color: #f9b205;\r\n    outline: none;\r\n    box-shadow: 0 0 0 3px rgba(249, 178, 5, 0.2);\r\n}\r\n.search-icon[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    right: 20px;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n    color: #f9b205;\r\n    pointer-events: none;\r\n    font-size: 1.2rem;\r\n}\r\n\r\n.project-list[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 30px;\r\n}\r\n.project-item[_ngcontent-%COMP%] {\r\n    background: #ffffff;\r\n    border-radius: 12px;\r\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\r\n    overflow: hidden;\r\n    display: flex;\r\n    transition: all 0.4s ease;\r\n    border: 2px solid transparent;\r\n    position: relative;\r\n}\r\n.project-item[_ngcontent-%COMP%]:hover {\r\n    transform: translateY(-8px);\r\n    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);\r\n    border-color: #f9b205;\r\n}\r\n.project-image[_ngcontent-%COMP%] {\r\n    flex: 0 0 280px;\r\n    overflow: hidden;\r\n    position: relative;\r\n}\r\n.project-image[_ngcontent-%COMP%]::before {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background: linear-gradient(45deg, rgba(249, 178, 5, 0.1), transparent);\r\n    z-index: 1;\r\n    opacity: 0;\r\n    transition: opacity 0.3s ease;\r\n}\r\n.project-item[_ngcontent-%COMP%]:hover   .project-image[_ngcontent-%COMP%]::before {\r\n    opacity: 1;\r\n}\r\n.project-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: cover;\r\n    transition: transform 0.5s ease;\r\n}\r\n.project-item[_ngcontent-%COMP%]:hover   .project-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    transform: scale(1.1);\r\n}\r\n.project-details[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n    padding: 30px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    background: #ffffff;\r\n}\r\n.project-details[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    margin-bottom: 20px;\r\n    color: #232323;\r\n    font-size: 1.8rem;\r\n    font-weight: 700;\r\n}\r\n.project-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin-bottom: 25px;\r\n    flex-grow: 1;\r\n    color: #555555;\r\n    line-height: 1.7;\r\n    font-size: 1.1rem;\r\n}\r\n.project-actions[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    margin-top: auto;\r\n}\r\n.view-project-btn[_ngcontent-%COMP%] {\r\n    display: inline-flex;\r\n    align-items: center;\r\n    padding: 15px 30px;\r\n    color: #ffffff;\r\n    background-color: #f9b205;\r\n    border-radius: 30px;\r\n    text-decoration: none;\r\n    font-weight: 600;\r\n    transition: all 0.3s ease;\r\n}\r\n.view-project-btn[_ngcontent-%COMP%]:hover {\r\n    background-color: #232323;\r\n    color: #ffffff;\r\n    transform: translateY(-2px);\r\n    box-shadow: 0 8px 20px rgba(35, 35, 35, 0.3);\r\n}\r\n.view-project-btn[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\r\n    margin-left: 10px;\r\n    transition: transform 0.3s ease;\r\n    font-size: 1.2rem;\r\n}\r\n.view-project-btn[_ngcontent-%COMP%]:hover   .arrow[_ngcontent-%COMP%] {\r\n    transform: translateX(5px);\r\n}\r\n\r\n.game-item[_ngcontent-%COMP%] {\r\n    border-left: 5px solid #f9b205;\r\n}\r\n\r\n.game-badge[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 15px;\r\n    right: 15px;\r\n    background: rgba(249, 178, 5, 0.9);\r\n    color: #ffffff;\r\n    padding: 8px 15px;\r\n    border-radius: 20px;\r\n    font-size: 0.8rem;\r\n    font-weight: bold;\r\n    z-index: 2;\r\n    text-transform: uppercase;\r\n    letter-spacing: 1px;\r\n}\r\n\r\n.platform-tags[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    gap: 10px;\r\n    margin-top: 15px;\r\n    margin-bottom: 20px;\r\n}\r\n.platform-tag[_ngcontent-%COMP%] {\r\n    background: rgba(249, 178, 5, 0.1);\r\n    border: 1px solid #f9b205;\r\n    color: #f9b205;\r\n    padding: 5px 12px;\r\n    border-radius: 20px;\r\n    font-size: 0.8rem;\r\n    font-weight: 500;\r\n    text-transform: uppercase;\r\n    letter-spacing: 0.5px;\r\n}\r\n\r\n.no-results[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    padding: 50px;\r\n    background: #ffffff;\r\n    border-radius: 12px;\r\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\r\n    border-left: 5px solid #f9b205;\r\n}\r\n.no-results[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    color: #555;\r\n    font-size: 1.3rem;\r\n    font-weight: 500;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .project-item[_ngcontent-%COMP%] {\r\n        flex-direction: column;\r\n    }\r\n\r\n    .project-image[_ngcontent-%COMP%] {\r\n        height: 200px;\r\n    }\r\n    \r\n    .back-link[_ngcontent-%COMP%] {\r\n        position: static;\r\n        margin-top: 15px;\r\n        text-align: center;\r\n    }\r\n    \r\n    .list-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n        font-size: 2rem;\r\n    }\r\n    \r\n    .search-box[_ngcontent-%COMP%] {\r\n        max-width: 100%;\r\n    }\r\n    \r\n    .project-list-section[_ngcontent-%COMP%] {\r\n        padding: 20px 0 40px 0;\r\n    }\r\n    \r\n    .list-header[_ngcontent-%COMP%] {\r\n        padding: 20px;\r\n    }\r\n    \r\n    .back-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        font-size: 0.9rem;\r\n        padding: 6px 12px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,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Q0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGdCQUFnQjtRQUNoQixnQkFBZ0I7UUFDaEIsa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxzQkFBc0I7SUFDMUI7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLGlCQUFpQjtJQUNyQjtBQUNKIiwiZmlsZSI6ImdhbWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBHYW1lcyBMaXN0IFNlY3Rpb24gLSBDb25zaXN0ZW50IHdpdGggcHJvZ3JhbW1pbmcgY29tcG9uZW50ICovXHJcbi5wcm9qZWN0LWxpc3Qtc2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDAgNjBweCAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcclxuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA2MHB4KTtcclxuICAgIG1hcmdpbjogLTMwcHggMDtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMCAyMHB4O1xyXG59XHJcblxyXG4vKiBMaXN0IEhlYWRlciAqL1xyXG4ubGlzdC1oZWFkZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjZjliMjA1O1xyXG59XHJcblxyXG4ubGlzdC1oZWFkZXIgaDIge1xyXG4gICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICBjb2xvcjogIzIzMjMyMztcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5saXN0LWhlYWRlciBoMjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBoZWlnaHQ6IDRweDtcclxuICAgIGJhY2tncm91bmQ6ICNmOWIyMDU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbn1cclxuXHJcbi5iYWNrLWxpbmsge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAzMHB4O1xyXG4gICAgcmlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi5iYWNrLWxpbmsgYSB7XHJcbiAgICBjb2xvcjogI2Y5YjIwNTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZjliMjA1O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQ5LCAxNzgsIDUsIDAuMSk7XHJcbn1cclxuXHJcbi5iYWNrLWxpbmsgYTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjliMjA1O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5saXN0LWludHJvIHtcclxuICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICBtYXJnaW46IDIwcHggMCAwIDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS44O1xyXG4gICAgY29sb3I6ICM1NTU7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxufVxyXG5cclxuLyogU2VhcmNoIGFuZCBGaWx0ZXIgKi9cclxuLnNlYXJjaC1maWx0ZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG5cclxuLnNlYXJjaC1ib3gge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG59XHJcblxyXG4uc2VhcmNoLWJveCBpbnB1dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDE1cHggNTBweCAxNXB4IDI1cHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZTBlMGUwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuLnNlYXJjaC1ib3ggaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjOTk5O1xyXG59XHJcblxyXG4uc2VhcmNoLWJveCBpbnB1dDpmb2N1cyB7XHJcbiAgICBib3JkZXItY29sb3I6ICNmOWIyMDU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoMjQ5LCAxNzgsIDUsIDAuMik7XHJcbn1cclxuXHJcbi5zZWFyY2gtaWNvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMjBweDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgY29sb3I6ICNmOWIyMDU7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG59XHJcblxyXG4vKiBQcm9qZWN0IExpc3QgKi9cclxuLnByb2plY3QtbGlzdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMzBweDtcclxufVxyXG5cclxuLnByb2plY3QtaXRlbSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWl0ZW06aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC04cHgpO1xyXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgIGJvcmRlci1jb2xvcjogI2Y5YjIwNTtcclxufVxyXG5cclxuLnByb2plY3QtaW1hZ2Uge1xyXG4gICAgZmxleDogMCAwIDI4MHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnByb2plY3QtaW1hZ2U6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiYSgyNDksIDE3OCwgNSwgMC4xKSwgdHJhbnNwYXJlbnQpO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcclxufVxyXG5cclxuLnByb2plY3QtaXRlbTpob3ZlciAucHJvamVjdC1pbWFnZTo6YmVmb3JlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWltYWdlIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZTtcclxufVxyXG5cclxuLnByb2plY3QtaXRlbTpob3ZlciAucHJvamVjdC1pbWFnZSBpbWcge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG59XHJcblxyXG4ucHJvamVjdC1kZXRhaWxzIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG59XHJcblxyXG4ucHJvamVjdC1kZXRhaWxzIGgzIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBjb2xvcjogIzIzMjMyMztcclxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLnByb2plY3QtZGV0YWlscyBwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBjb2xvcjogIzU1NTU1NTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjc7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxufVxyXG5cclxuLnByb2plY3QtYWN0aW9ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbn1cclxuXHJcbi52aWV3LXByb2plY3QtYnRuIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE1cHggMzBweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5YjIwNTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxufVxyXG5cclxuLnZpZXctcHJvamVjdC1idG46aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIzMjMyMztcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gICAgYm94LXNoYWRvdzogMCA4cHggMjBweCByZ2JhKDM1LCAzNSwgMzUsIDAuMyk7XHJcbn1cclxuXHJcbi52aWV3LXByb2plY3QtYnRuIC5hcnJvdyB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxufVxyXG5cclxuLnZpZXctcHJvamVjdC1idG46aG92ZXIgLmFycm93IHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpO1xyXG59XHJcblxyXG4vKiBHYW1lLXNwZWNpZmljIGVuaGFuY2VtZW50cyAqL1xyXG4uZ2FtZS1pdGVtIHtcclxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2Y5YjIwNTtcclxufVxyXG5cclxuLyogR2FtZSBiYWRnZXMgKi9cclxuLmdhbWUtYmFkZ2Uge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxNXB4O1xyXG4gICAgcmlnaHQ6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0OSwgMTc4LCA1LCAwLjkpO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBwYWRkaW5nOiA4cHggMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59XHJcblxyXG4vKiBQbGF0Zm9ybSB0YWdzICovXHJcbi5wbGF0Zm9ybS10YWdzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLnBsYXRmb3JtLXRhZyB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0OSwgMTc4LCA1LCAwLjEpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Y5YjIwNTtcclxuICAgIGNvbG9yOiAjZjliMjA1O1xyXG4gICAgcGFkZGluZzogNXB4IDEycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxufVxyXG5cclxuLyogTm8gUmVzdWx0cyBNZXNzYWdlICovXHJcbi5uby1yZXN1bHRzIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjZjliMjA1O1xyXG59XHJcblxyXG4ubm8tcmVzdWx0cyBwIHtcclxuICAgIGNvbG9yOiAjNTU1O1xyXG4gICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4vKiBSZXNwb25zaXZlIFN0eWxlcyAqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5wcm9qZWN0LWl0ZW0ge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2plY3QtaW1hZ2Uge1xyXG4gICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5iYWNrLWxpbmsge1xyXG4gICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5saXN0LWhlYWRlciBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuc2VhcmNoLWJveCB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucHJvamVjdC1saXN0LXNlY3Rpb24ge1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHggMCA0MHB4IDA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5saXN0LWhlYWRlciB7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmJhY2stbGluayBhIHtcclxuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICBwYWRkaW5nOiA2cHggMTJweDtcclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ 5194:
/*!***************************************************!*\
  !*** ./src/app/portofolio/main/main.component.ts ***!
  \***************************************************/
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/projects/programming/", idx_r3, "");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/projects/games/", idx_r7, "");
} }
const _c0 = function () { return ["/programming"]; };
const _c1 = function () { return ["/games"]; };
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref], styles: [".portfolio-section[_ngcontent-%COMP%] {\r\n    padding: 30px 0 60px 0;\r\n    background-color: #f9f9f9;\r\n    min-height: calc(100vh - 60px);\r\n    margin: -30px 0;\r\n}\r\n.container[_ngcontent-%COMP%] {\r\n    max-width: 1200px;\r\n    margin: 0 auto;\r\n    padding: 0 20px;\r\n}\r\n\r\n.portfolio-header[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin-bottom: 50px;\r\n}\r\n.portfolio-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-size: 3rem;\r\n    color: #232323;\r\n    position: relative;\r\n    display: inline-block;\r\n    margin-bottom: 20px;\r\n    padding-bottom: 15px;\r\n    font-weight: 700;\r\n}\r\n.portfolio-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:after {\r\n    content: '';\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    width: 120px;\r\n    height: 4px;\r\n    background: #f9b205;\r\n    border-radius: 2px;\r\n}\r\n.intro-text[_ngcontent-%COMP%] {\r\n    max-width: 800px;\r\n    margin: 0 auto;\r\n    line-height: 1.8;\r\n    color: #555;\r\n    font-size: 1.1rem;\r\n}\r\n\r\n.portfolio-category[_ngcontent-%COMP%] {\r\n    margin-bottom: 60px;\r\n}\r\n.section-header[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    margin-bottom: 30px;\r\n    padding: 20px 30px;\r\n    background: #ffffff;\r\n    border-radius: 12px;\r\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\r\n    border-left: 5px solid #f9b205;\r\n}\r\n.section-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    font-size: 2rem;\r\n    color: #232323;\r\n    font-weight: 700;\r\n    margin: 0;\r\n}\r\n.view-all[_ngcontent-%COMP%] {\r\n    color: #f9b205;\r\n    text-decoration: none;\r\n    font-weight: 600;\r\n    display: flex;\r\n    align-items: center;\r\n    transition: all 0.3s ease;\r\n    padding: 10px 20px;\r\n    background: rgba(249, 178, 5, 0.1);\r\n    border-radius: 25px;\r\n    border: 2px solid #f9b205;\r\n}\r\n.view-all[_ngcontent-%COMP%]:hover {\r\n    color: #ffffff;\r\n    background: #f9b205;\r\n    transform: translateY(-2px);\r\n    box-shadow: 0 4px 12px rgba(249, 178, 5, 0.3);\r\n}\r\n.arrow-icon[_ngcontent-%COMP%] {\r\n    margin-left: 8px;\r\n    transition: transform 0.3s ease;\r\n    font-size: 1.2rem;\r\n}\r\n.view-all[_ngcontent-%COMP%]:hover   .arrow-icon[_ngcontent-%COMP%] {\r\n    transform: translateX(3px);\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .section-header[_ngcontent-%COMP%] {\r\n        flex-direction: column;\r\n        gap: 15px;\r\n        text-align: center;\r\n        padding: 20px;\r\n    }\r\n    \r\n    .section-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n        font-size: 1.5rem;\r\n    }\r\n    \r\n    .view-all[_ngcontent-%COMP%] {\r\n        padding: 8px 16px;\r\n        font-size: 0.9rem;\r\n    }\r\n}\r\n\r\n.project-grid[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));\r\n    grid-gap: 30px;\r\n    gap: 30px;\r\n}\r\n\r\n.project-card[_ngcontent-%COMP%] {\r\n    background: #ffffff;\r\n    border-radius: 12px;\r\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\r\n    overflow: hidden;\r\n    transition: all 0.4s ease;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    border: 2px solid transparent;\r\n}\r\n.project-card[_ngcontent-%COMP%]:hover {\r\n    transform: translateY(-10px);\r\n    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);\r\n    border-color: #f9b205;\r\n}\r\n.project-image[_ngcontent-%COMP%] {\r\n    height: 200px;\r\n    overflow: hidden;\r\n    position: relative;\r\n}\r\n.project-image[_ngcontent-%COMP%]::before {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background: linear-gradient(45deg, rgba(249, 178, 5, 0.1), transparent);\r\n    z-index: 1;\r\n    opacity: 0;\r\n    transition: opacity 0.3s ease;\r\n}\r\n.project-card[_ngcontent-%COMP%]:hover   .project-image[_ngcontent-%COMP%]::before {\r\n    opacity: 1;\r\n}\r\n.project-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: cover;\r\n    transition: transform 0.5s ease, opacity 0.3s ease;\r\n    background: #f0f0f0;\r\n}\r\n.project-image[_ngcontent-%COMP%]   img[data-fallback-tried][_ngcontent-%COMP%] {\r\n    opacity: 0.8;\r\n}\r\n.project-image[_ngcontent-%COMP%]   img[data-fallback-tried-2][_ngcontent-%COMP%] {\r\n    opacity: 0.6;\r\n    filter: grayscale(20%);\r\n}\r\n.project-card[_ngcontent-%COMP%]:hover   .project-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    transform: scale(1.1);\r\n}\r\n.project-content[_ngcontent-%COMP%] {\r\n    padding: 25px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex-grow: 1;\r\n    background: #ffffff;\r\n}\r\n.project-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n    font-size: 1.4rem;\r\n    margin-bottom: 15px;\r\n    color: #232323;\r\n    font-weight: 700;\r\n}\r\n.project-summary[_ngcontent-%COMP%] {\r\n    flex-grow: 1;\r\n    color: #555555;\r\n    line-height: 1.6;\r\n    margin-bottom: 20px;\r\n}\r\n.project-footer[_ngcontent-%COMP%] {\r\n    margin-top: auto;\r\n    padding-top: 20px;\r\n    border-top: 2px solid #f0f0f0;\r\n    display: flex;\r\n    justify-content: flex-end;\r\n}\r\n.view-details-btn[_ngcontent-%COMP%] {\r\n    display: inline-flex;\r\n    align-items: center;\r\n    padding: 12px 24px;\r\n    background: #f9b205;\r\n    color: #ffffff;\r\n    font-weight: 600;\r\n    text-decoration: none;\r\n    border-radius: 25px;\r\n    transition: all 0.3s ease;\r\n}\r\n.view-details-btn[_ngcontent-%COMP%]:hover {\r\n    background: #232323;\r\n    color: #ffffff;\r\n    transform: translateY(-2px);\r\n    box-shadow: 0 8px 20px rgba(35, 35, 35, 0.3);\r\n}\r\n.view-details-btn[_ngcontent-%COMP%]   .arrow-icon[_ngcontent-%COMP%] {\r\n    width: 16px;\r\n    height: auto;\r\n    margin-left: 8px;\r\n    transition: transform 0.3s ease;\r\n    filter: brightness(0) invert(1);\r\n}\r\n.view-details-btn[_ngcontent-%COMP%]:hover   .arrow-icon[_ngcontent-%COMP%] {\r\n    transform: translateX(5px);\r\n}\r\n\r\n.view-more-section[_ngcontent-%COMP%] {\r\n    margin-top: 40px;\r\n    text-align: center;\r\n    padding: 30px;\r\n    background: linear-gradient(135deg, rgba(249, 178, 5, 0.05), rgba(249, 178, 5, 0.1));\r\n    border-radius: 12px;\r\n    border: 2px dashed #f9b205;\r\n}\r\n.view-more-text[_ngcontent-%COMP%] {\r\n    font-size: 1.1rem;\r\n    color: #555;\r\n    margin-bottom: 20px;\r\n    font-weight: 500;\r\n}\r\n.view-more-btn[_ngcontent-%COMP%] {\r\n    display: inline-flex;\r\n    align-items: center;\r\n    padding: 15px 30px;\r\n    background: #f9b205;\r\n    color: #ffffff;\r\n    text-decoration: none;\r\n    border-radius: 30px;\r\n    font-weight: 700;\r\n    font-size: 1.1rem;\r\n    transition: all 0.3s ease;\r\n    box-shadow: 0 4px 15px rgba(249, 178, 5, 0.3);\r\n}\r\n.view-more-btn[_ngcontent-%COMP%]:hover {\r\n    background: #232323;\r\n    color: #ffffff;\r\n    transform: translateY(-3px);\r\n    box-shadow: 0 8px 25px rgba(35, 35, 35, 0.3);\r\n}\r\n.view-more-btn[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\r\n    margin-left: 10px;\r\n    font-size: 1.2rem;\r\n    transition: transform 0.3s ease;\r\n}\r\n.view-more-btn[_ngcontent-%COMP%]:hover   .arrow[_ngcontent-%COMP%] {\r\n    transform: translateX(5px);\r\n}\r\n\r\n@media (max-width: 992px) {\r\n    .project-grid[_ngcontent-%COMP%] {\r\n        grid-template-columns: repeat(2, 1fr);\r\n        gap: 20px;\r\n    }\r\n    \r\n    .portfolio-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n        font-size: 2.5rem;\r\n    }\r\n    \r\n    .section-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n        font-size: 1.5rem;\r\n    }\r\n}\r\n@media (max-width: 768px) {\r\n    .project-grid[_ngcontent-%COMP%] {\r\n        grid-template-columns: 1fr;\r\n    }\r\n    \r\n    .portfolio-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n        font-size: 2rem;\r\n    }\r\n    \r\n    .section-header[_ngcontent-%COMP%] {\r\n        flex-direction: column;\r\n        gap: 10px;\r\n        text-align: center;\r\n    }\r\n    \r\n    .filter-buttons[_ngcontent-%COMP%] {\r\n        flex-wrap: wrap;\r\n        gap: 10px;\r\n    }\r\n      .portfolio-section[_ngcontent-%COMP%] {\r\n        padding: 40px 0;\r\n    }\r\n    \r\n    .view-more-section[_ngcontent-%COMP%] {\r\n        margin-top: 30px;\r\n        padding: 20px;\r\n    }\r\n    \r\n    .view-more-text[_ngcontent-%COMP%] {\r\n        font-size: 1rem;\r\n    }\r\n    \r\n    .view-more-btn[_ngcontent-%COMP%] {\r\n        padding: 12px 24px;\r\n        font-size: 1rem;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtQkFBbUI7QUFDbkI7SUFDSSxzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLDhCQUE4QjtJQUM5QixlQUFlO0FBQ25CO0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLGVBQWU7QUFDbkI7QUFFQSxxQkFBcUI7QUFDckI7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFNBQVM7SUFDVCwyQkFBMkI7SUFDM0IsWUFBWTtJQUNaLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCO0FBRUEsZ0NBQWdDO0FBQ2hDO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIseUNBQXlDO0lBQ3pDLDhCQUE4QjtBQUNsQztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsU0FBUztBQUNiO0FBRUE7SUFDSSxjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsa0NBQWtDO0lBQ2xDLG1CQUFtQjtJQUNuQix5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLDZDQUE2QztBQUNqRDtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLCtCQUErQjtJQUMvQixpQkFBaUI7QUFDckI7QUFFQTtJQUNJLDBCQUEwQjtBQUM5QjtBQUVBLCtDQUErQztBQUMvQztJQUNJO1FBQ0ksc0JBQXNCO1FBQ3RCLFNBQVM7UUFDVCxrQkFBa0I7UUFDbEIsYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQixpQkFBaUI7SUFDckI7QUFDSjtBQUVBLGlCQUFpQjtBQUNqQjtJQUNJLGFBQWE7SUFDYiw0REFBNEQ7SUFDNUQsY0FBUztJQUFULFNBQVM7QUFDYjtBQUVBLGtCQUFrQjtBQUNsQjtJQUNJLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIseUNBQXlDO0lBQ3pDLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNkJBQTZCO0FBQ2pDO0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsMkNBQTJDO0lBQzNDLHFCQUFxQjtBQUN6QjtBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztJQUNULHVFQUF1RTtJQUN2RSxVQUFVO0lBQ1YsVUFBVTtJQUNWLDZCQUE2QjtBQUNqQztBQUVBO0lBQ0ksVUFBVTtBQUNkO0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrREFBa0Q7SUFDbEQsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxZQUFZO0FBQ2hCO0FBRUE7SUFDSSxZQUFZO0lBQ1osc0JBQXNCO0FBQzFCO0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2IseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCwyQkFBMkI7SUFDM0IsNENBQTRDO0FBQ2hEO0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQiwrQkFBK0I7SUFDL0IsK0JBQStCO0FBQ25DO0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7QUFFQSxzQkFBc0I7QUFDdEI7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixvRkFBb0Y7SUFDcEYsbUJBQW1CO0lBQ25CLDBCQUEwQjtBQUM5QjtBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsNkNBQTZDO0FBQ2pEO0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsY0FBYztJQUNkLDJCQUEyQjtJQUMzQiw0Q0FBNEM7QUFDaEQ7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsK0JBQStCO0FBQ25DO0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7QUFFQSxzQkFBc0I7QUFDdEI7SUFDSTtRQUNJLHFDQUFxQztRQUNyQyxTQUFTO0lBQ2I7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7QUFDSjtBQUVBO0lBQ0k7UUFDSSwwQkFBMEI7SUFDOUI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksc0JBQXNCO1FBQ3RCLFNBQVM7UUFDVCxrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsU0FBUztJQUNiO01BQ0U7UUFDRSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZ0JBQWdCO1FBQ2hCLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLGVBQWU7SUFDbkI7QUFDSiIsImZpbGUiOiJtYWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBHZW5lcmFsIExheW91dCAqL1xyXG4ucG9ydGZvbGlvLXNlY3Rpb24ge1xyXG4gICAgcGFkZGluZzogMzBweCAwIDYwcHggMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XHJcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjBweCk7XHJcbiAgICBtYXJnaW46IC0zMHB4IDA7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDAgMjBweDtcclxufVxyXG5cclxuLyogUG9ydGZvbGlvIEhlYWRlciAqL1xyXG4ucG9ydGZvbGlvLWhlYWRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG4ucG9ydGZvbGlvLWhlYWRlciBoMiB7XHJcbiAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICBjb2xvcjogIzIzMjMyMztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5wb3J0Zm9saW8taGVhZGVyIGgyOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgaGVpZ2h0OiA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjliMjA1O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG59XHJcblxyXG4uaW50cm8tdGV4dCB7XHJcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBsaW5lLWhlaWdodDogMS44O1xyXG4gICAgY29sb3I6ICM1NTU7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxufVxyXG5cclxuLyogUG9ydGZvbGlvIENhdGVnb3J5IFNlY3Rpb25zICovXHJcbi5wb3J0Zm9saW8tY2F0ZWdvcnkge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDtcclxufVxyXG5cclxuLnNlY3Rpb24taGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIHBhZGRpbmc6IDIwcHggMzBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNmOWIyMDU7XHJcbn1cclxuXHJcbi5zZWN0aW9uLWhlYWRlciBoMyB7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBjb2xvcjogIzIzMjMyMztcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi52aWV3LWFsbCB7XHJcbiAgICBjb2xvcjogI2Y5YjIwNTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0OSwgMTc4LCA1LCAwLjEpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmOWIyMDU7XHJcbn1cclxuXHJcbi52aWV3LWFsbDpob3ZlciB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJhY2tncm91bmQ6ICNmOWIyMDU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMjQ5LCAxNzgsIDUsIDAuMyk7XHJcbn1cclxuXHJcbi5hcnJvdy1pY29uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbn1cclxuXHJcbi52aWV3LWFsbDpob3ZlciAuYXJyb3ctaWNvbiB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoM3B4KTtcclxufVxyXG5cclxuLyogUmVzcG9uc2l2ZSBhZGp1c3RtZW50cyBmb3Igc2VjdGlvbiBoZWFkZXJzICovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLnNlY3Rpb24taGVhZGVyIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGdhcDogMTVweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnNlY3Rpb24taGVhZGVyIGgzIHtcclxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnZpZXctYWxsIHtcclxuICAgICAgICBwYWRkaW5nOiA4cHggMTZweDtcclxuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIH1cclxufVxyXG5cclxuLyogUHJvamVjdCBHcmlkICovXHJcbi5wcm9qZWN0LWdyaWQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDM1MHB4LCAxZnIpKTtcclxuICAgIGdhcDogMzBweDtcclxufVxyXG5cclxuLyogUHJvamVjdCBDYXJkcyAqL1xyXG4ucHJvamVjdC1jYXJkIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWNhcmQ6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICBib3JkZXItY29sb3I6ICNmOWIyMDU7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWltYWdlIHtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ucHJvamVjdC1pbWFnZTo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDI0OSwgMTc4LCA1LCAwLjEpLCB0cmFuc3BhcmVudCk7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xyXG59XHJcblxyXG4ucHJvamVjdC1jYXJkOmhvdmVyIC5wcm9qZWN0LWltYWdlOjpiZWZvcmUge1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLnByb2plY3QtaW1hZ2UgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlLCBvcGFjaXR5IDAuM3MgZWFzZTtcclxuICAgIGJhY2tncm91bmQ6ICNmMGYwZjA7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWltYWdlIGltZ1tkYXRhLWZhbGxiYWNrLXRyaWVkXSB7XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWltYWdlIGltZ1tkYXRhLWZhbGxiYWNrLXRyaWVkLTJdIHtcclxuICAgIG9wYWNpdHk6IDAuNjtcclxuICAgIGZpbHRlcjogZ3JheXNjYWxlKDIwJSk7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWNhcmQ6aG92ZXIgLnByb2plY3QtaW1hZ2UgaW1nIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxufVxyXG5cclxuLnByb2plY3QtY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG59XHJcblxyXG4ucHJvamVjdC1jb250ZW50IGg0IHtcclxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIGNvbG9yOiAjMjMyMzIzO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLnByb2plY3Qtc3VtbWFyeSB7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBjb2xvcjogIzU1NTU1NTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4ucHJvamVjdC1mb290ZXIge1xyXG4gICAgbWFyZ2luLXRvcDogYXV0bztcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNmMGYwZjA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5cclxuLnZpZXctZGV0YWlscy1idG4ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTJweCAyNHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2Y5YjIwNTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG59XHJcblxyXG4udmlldy1kZXRhaWxzLWJ0bjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjMyMzIzO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDhweCAyMHB4IHJnYmEoMzUsIDM1LCAzNSwgMC4zKTtcclxufVxyXG5cclxuLnZpZXctZGV0YWlscy1idG4gLmFycm93LWljb24ge1xyXG4gICAgd2lkdGg6IDE2cHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcclxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwKSBpbnZlcnQoMSk7XHJcbn1cclxuXHJcbi52aWV3LWRldGFpbHMtYnRuOmhvdmVyIC5hcnJvdy1pY29uIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpO1xyXG59XHJcblxyXG4vKiBWaWV3IE1vcmUgU2VjdGlvbiAqL1xyXG4udmlldy1tb3JlLXNlY3Rpb24ge1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDI0OSwgMTc4LCA1LCAwLjA1KSwgcmdiYSgyNDksIDE3OCwgNSwgMC4xKSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgYm9yZGVyOiAycHggZGFzaGVkICNmOWIyMDU7XHJcbn1cclxuXHJcbi52aWV3LW1vcmUtdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIGNvbG9yOiAjNTU1O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi52aWV3LW1vcmUtYnRuIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE1cHggMzBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmOWIyMDU7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMTVweCByZ2JhKDI0OSwgMTc4LCA1LCAwLjMpO1xyXG59XHJcblxyXG4udmlldy1tb3JlLWJ0bjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjMyMzIzO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDhweCAyNXB4IHJnYmEoMzUsIDM1LCAzNSwgMC4zKTtcclxufVxyXG5cclxuLnZpZXctbW9yZS1idG4gLmFycm93IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xyXG59XHJcblxyXG4udmlldy1tb3JlLWJ0bjpob3ZlciAuYXJyb3cge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCk7XHJcbn1cclxuXHJcbi8qIFJlc3BvbnNpdmUgU3R5bGVzICovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgLnByb2plY3QtZ3JpZCB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcclxuICAgICAgICBnYXA6IDIwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5wb3J0Zm9saW8taGVhZGVyIGgyIHtcclxuICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnNlY3Rpb24taGVhZGVyIGgzIHtcclxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAucHJvamVjdC1ncmlkIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnBvcnRmb2xpby1oZWFkZXIgaDIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnNlY3Rpb24taGVhZGVyIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGdhcDogMTBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5maWx0ZXItYnV0dG9ucyB7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIGdhcDogMTBweDtcclxuICAgIH1cclxuICAgICAgLnBvcnRmb2xpby1zZWN0aW9uIHtcclxuICAgICAgICBwYWRkaW5nOiA0MHB4IDA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC52aWV3LW1vcmUtc2VjdGlvbiB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAudmlldy1tb3JlLXRleHQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnZpZXctbW9yZS1idG4ge1xyXG4gICAgICAgIHBhZGRpbmc6IDEycHggMjRweDtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ 8890:
/*!*****************************************************************!*\
  !*** ./src/app/portofolio/programming/programming.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgrammingComponent": () => (/* binding */ ProgrammingComponent)
/* harmony export */ });
/* harmony import */ var src_app_project_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/project.list */ 2555);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/projects/programming/", idx_r3, "");
} }
function ProgrammingComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "No projects match your search criteria.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
class ProgrammingComponent {
    constructor() {
        this.searchTerm = '';
        this.programming = src_app_project_list__WEBPACK_IMPORTED_MODULE_0__.PROGRAMMING;
        this.filteredProjects = [...this.programming];
    }
    ngOnInit() {
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
ProgrammingComponent.ɵfac = function ProgrammingComponent_Factory(t) { return new (t || ProgrammingComponent)(); };
ProgrammingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProgrammingComponent, selectors: [["app-programming"]], decls: 19, vars: 2, consts: [[1, "project-list-section"], [1, "container"], [1, "list-header"], [1, "back-link"], ["routerLink", "/portofolio"], [1, "list-intro"], [1, "search-filter"], [1, "search-box"], ["type", "text", "placeholder", "Search projects...", 3, "input"], [1, "search-icon"], [1, "project-list"], ["class", "project-item", 4, "ngFor", "ngForOf"], ["class", "no-results", 4, "ngIf"], [1, "project-item"], [1, "project-image"], [3, "src", "alt", "error"], [1, "project-details"], [1, "project-actions"], [1, "view-project-btn", 3, "routerLink"], [1, "arrow"], [1, "no-results"]], template: function ProgrammingComponent_Template(rf, ctx) { if (rf & 1) {
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

/***/ 7682:
/*!***********************************************************************!*\
  !*** ./src/app/portofolio/project-detail/project-detail.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectDetailComponent": () => (/* binding */ ProjectDetailComponent)
/* harmony export */ });
/* harmony import */ var src_app_project_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/project.list */ 2555);
/* harmony import */ var src_app_project_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/project.model */ 8946);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);





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
const _c0 = function (a1, a2) { return ["/projects", a1, a2]; };
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
const _c1 = function (a0) { return [a0]; };
class ProjectDetailComponent {
    constructor(route, location) {
        this.route = route;
        this.location = location;
        this.hasPrevious = false;
        this.hasNext = false;
        this.projectsList = [];
        this.videoError = false;
    }
    ngOnInit() {
        // Subscribe to route parameter changes to handle navigation between projects
        this.route.params.subscribe(params => {
            this.loadProject();
        });
    }
    loadProject() {
        this.currentIndex = Number(this.route.snapshot.paramMap.get('id'));
        this.projectType = String(this.route.snapshot.paramMap.get('list'));
        // Reset video error state
        this.videoError = false;
        console.log('Loading project:', this.projectType, this.currentIndex);
        if (this.projectType === "programming") {
            this.projectsList = src_app_project_list__WEBPACK_IMPORTED_MODULE_0__.PROGRAMMING;
            if (this.currentIndex >= 0 && this.currentIndex < src_app_project_list__WEBPACK_IMPORTED_MODULE_0__.PROGRAMMING.length) {
                this.project = src_app_project_list__WEBPACK_IMPORTED_MODULE_0__.PROGRAMMING[this.currentIndex];
            }
            else {
                console.error('Invalid programming project index:', this.currentIndex);
                this.project = new src_app_project_model__WEBPACK_IMPORTED_MODULE_1__.Project("Project Not Found", "", "The requested project could not be found.", []);
            }
        }
        else if (this.projectType === "games") {
            this.projectsList = src_app_project_list__WEBPACK_IMPORTED_MODULE_0__.GAMES;
            if (this.currentIndex >= 0 && this.currentIndex < src_app_project_list__WEBPACK_IMPORTED_MODULE_0__.GAMES.length) {
                this.project = src_app_project_list__WEBPACK_IMPORTED_MODULE_0__.GAMES[this.currentIndex];
            }
            else {
                console.error('Invalid games project index:', this.currentIndex);
                this.project = new src_app_project_model__WEBPACK_IMPORTED_MODULE_1__.Project("Project Not Found", "", "The requested project could not be found.", []);
            }
        }
        else {
            console.error('Invalid project type:', this.projectType);
            this.project = new src_app_project_model__WEBPACK_IMPORTED_MODULE_1__.Project("", "", "", []);
            this.projectsList = [];
        }
        // Set navigation availability
        this.hasPrevious = this.currentIndex > 0;
        this.hasNext = this.currentIndex < this.projectsList.length - 1;
        console.log('Navigation state:', { hasPrevious: this.hasPrevious, hasNext: this.hasNext, total: this.projectsList.length });
    }
    goBack() {
        this.location.back();
    }
    isLink(val) {
        return val.isLink;
    }
    isVideo(val) {
        return val.isVideo;
    }
    isPath(val) {
        return val instanceof src_app_project_model__WEBPACK_IMPORTED_MODULE_1__.ImgPath;
    }
    getPath(val) {
        return val.path;
    }
    getMaxWidth(val) {
        return val.maxWidth;
    }
    getMaxHeight(val) {
        return val.maxHeight;
    }
    getText(val) {
        return val.text;
    }
    isRichText(val) {
        return val.isRichText === true;
    }
    getRichContent(val) {
        return val.richContent || [];
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
ProjectDetailComponent.ɵfac = function ProjectDetailComponent_Factory(t) { return new (t || ProjectDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.Location)); };
ProjectDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ProjectDetailComponent, selectors: [["app-project-detail"]], decls: 36, vars: 22, consts: [[1, "project-detail"], [1, "container"], [1, "project-header"], [1, "breadcrumbs"], ["routerLink", "/portofolio"], [3, "routerLink"], [1, "featured-image"], [3, "src", "alt", "error"], [1, "project-summary"], [1, "summary-content"], [1, "project-content"], ["class", "content-item", 4, "ngFor", "ngForOf"], [1, "project-navigation"], [1, "prev-project"], [3, "routerLink", 4, "ngIf"], ["class", "nav-disabled", 4, "ngIf"], [1, "back-to-list"], [1, "next-project"], [1, "content-item"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["mediaBlock", ""], ["textBlock", ""], ["videoBlock", ""], ["imageBlock", ""], [1, "media-container", "video-container"], ["controls", "", "preload", "metadata", 3, "error", "loadstart", 4, "ngIf"], ["class", "video-fallback", 4, "ngIf"], ["controls", "", "preload", "metadata", 3, "error", "loadstart"], ["type", "video/mp4", 3, "src"], [1, "video-fallback"], ["target", "_blank", 1, "download-video", 3, "href"], [1, "media-container"], ["alt", "Project image", 3, "src", "error"], ["richTextBlock", ""], ["simpleTextBlock", ""], [1, "rich-text-content"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["target", "_blank", "class", "project-link", 3, "href", 4, "ngIf"], ["target", "_blank", 1, "project-link", 3, "href"], [1, "external-link-icon"], ["linkBlock", ""], ["textContent", ""], [1, "link-container"], [1, "text-content"], [1, "nav-arrow"], [1, "nav-disabled"]], template: function ProjectDetailComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](18, _c1, "/" + ctx.projectType));
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](20, _c1, "/" + ctx.projectType));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("All ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](32, 16, ctx.projectType), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.hasNext);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.hasNext);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.TitleCasePipe], styles: [".project-detail[_ngcontent-%COMP%] {\r\n    padding: 30px 0 60px 0;\r\n    background-color: #f9f9f9;\r\n    min-height: calc(100vh - 60px);\r\n    margin: -30px 0;\r\n}\r\n.container[_ngcontent-%COMP%] {\r\n    max-width: 1200px;\r\n    margin: 0 auto;\r\n    padding: 0 20px;\r\n}\r\n\r\n.project-header[_ngcontent-%COMP%] {\r\n    margin-bottom: 40px;\r\n    background: #ffffff;\r\n    border-radius: 12px;\r\n    padding: 30px;\r\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\r\n    border-left: 5px solid #f9b205;\r\n}\r\n.breadcrumbs[_ngcontent-%COMP%] {\r\n    margin-bottom: 25px;\r\n    color: #555;\r\n    font-size: 1rem;\r\n}\r\n.breadcrumbs[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: #f9b205;\r\n    text-decoration: none;\r\n    transition: color 0.2s ease;\r\n    font-weight: 500;\r\n}\r\n.breadcrumbs[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    color: #232323;\r\n    text-decoration: underline;\r\n}\r\n.breadcrumbs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    color: #232323;\r\n    font-weight: 600;\r\n}\r\n.project-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    font-size: 3rem;\r\n    color: #232323;\r\n    margin-bottom: 5px;\r\n    position: relative;\r\n    padding-bottom: 20px;\r\n    font-weight: 700;\r\n}\r\n.project-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]:after {\r\n    content: '';\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 150px;\r\n    height: 4px;\r\n    background: #f9b205;\r\n    border-radius: 2px;\r\n}\r\n\r\n.featured-image[_ngcontent-%COMP%] {\r\n    margin-bottom: 50px;\r\n    border-radius: 12px;\r\n    overflow: hidden;\r\n    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.15);\r\n    max-height: 500px;\r\n    border: 3px solid #f9b205;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background-color: #f8f8f8;\r\n}\r\n.featured-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: auto;\r\n    max-height: 100%;\r\n    object-fit: contain;\r\n    object-position: center;\r\n    display: block;\r\n}\r\n\r\n.project-summary[_ngcontent-%COMP%] {\r\n    background: #ffffff;\r\n    border-radius: 12px;\r\n    padding: 40px;\r\n    margin-bottom: 50px;\r\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\r\n    border-left: 5px solid #f9b205;\r\n}\r\n.summary-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    font-size: 2rem;\r\n    margin-bottom: 20px;\r\n    color: #232323;\r\n    font-weight: 700;\r\n    position: relative;\r\n    display: inline-block;\r\n    padding-bottom: 10px;\r\n}\r\n.summary-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:after {\r\n    content: '';\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 80px;\r\n    height: 3px;\r\n    background: #f9b205;\r\n}\r\n.summary-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    color: #555;\r\n    line-height: 1.8;\r\n    font-size: 1.2rem;\r\n}\r\n\r\n.project-content[_ngcontent-%COMP%] {\r\n    margin-bottom: 60px;\r\n}\r\n.content-item[_ngcontent-%COMP%] {\r\n    margin-bottom: 40px;\r\n}\r\n\r\n.media-container[_ngcontent-%COMP%] {\r\n    border-radius: 12px;\r\n    overflow: hidden;\r\n    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.15);\r\n    border: 2px solid #f9b205;\r\n}\r\n\r\n.responsive-media[_ngcontent-%COMP%] {\r\n    margin: 0 auto;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n}\r\n.media-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .media-container[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    display: block;\r\n}\r\n.video-container[_ngcontent-%COMP%] {\r\n    background: #000000;\r\n}\r\n.video-fallback[_ngcontent-%COMP%] {\r\n    background: #ffffff;\r\n    padding: 30px;\r\n    border-radius: 12px;\r\n    text-align: center;\r\n    color: #555;\r\n    border: 2px dashed #f9b205;\r\n    margin-top: 10px;\r\n}\r\n.video-fallback[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin-bottom: 15px;\r\n    font-size: 1.1rem;\r\n}\r\n.download-video[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    background: #f9b205;\r\n    color: #ffffff;\r\n    padding: 12px 24px;\r\n    border-radius: 6px;\r\n    text-decoration: none;\r\n    font-weight: 600;\r\n    transition: background-color 0.3s ease;\r\n}\r\n.download-video[_ngcontent-%COMP%]:hover {\r\n    background: #e6a004;\r\n    text-decoration: none;\r\n}\r\n\r\n.text-content[_ngcontent-%COMP%] {\r\n    background: #ffffff;\r\n    padding: 30px;\r\n    border-radius: 12px;\r\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\r\n    border-left: 5px solid #f9b205;\r\n}\r\n.text-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    line-height: 1.8;\r\n    color: #555;\r\n    font-size: 1.1rem;\r\n}\r\n\r\n.link-container[_ngcontent-%COMP%] {\r\n    padding: 25px;\r\n    background: rgba(249, 178, 5, 0.1);\r\n    border-radius: 12px;\r\n    border: 2px solid #f9b205;\r\n}\r\n.project-link[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    color: #f9b205;\r\n    text-decoration: none;\r\n    font-weight: 600;\r\n    transition: color 0.3s ease;\r\n    font-size: 1.1rem;\r\n}\r\n.project-link[_ngcontent-%COMP%]:hover {\r\n    color: #232323;\r\n}\r\n.external-link-icon[_ngcontent-%COMP%] {\r\n    margin-left: 10px;\r\n    font-size: 1.2rem;\r\n}\r\n\r\n.project-navigation[_ngcontent-%COMP%] {\r\n    margin-top: 60px;\r\n    padding: 30px;\r\n    background: #ffffff;\r\n    border-radius: 12px;\r\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\r\n    border-left: 5px solid #f9b205;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n.prev-project[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .next-project[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .back-to-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: inline-flex;\r\n    align-items: center;\r\n    padding: 15px 25px;\r\n    background: #f9b205;\r\n    border-radius: 30px;\r\n    text-decoration: none;\r\n    font-weight: 600;\r\n    color: #ffffff;\r\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\r\n    transition: all 0.3s ease;\r\n    border: 2px solid transparent;\r\n}\r\n.prev-project[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .next-project[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    background: #232323;\r\n    color: #ffffff;\r\n    border-color: #232323;\r\n    transform: translateY(-3px);\r\n    box-shadow: 0 8px 20px rgba(35, 35, 35, 0.3);\r\n}\r\n.back-to-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    background: rgba(249, 178, 5, 0.1);\r\n    color: #f9b205;\r\n    border: 2px solid #f9b205;\r\n}\r\n.back-to-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    background: #f9b205;\r\n    color: #ffffff;\r\n    transform: translateY(-3px);\r\n    box-shadow: 0 8px 20px rgba(249, 178, 5, 0.3);\r\n}\r\n.nav-arrow[_ngcontent-%COMP%] {\r\n    margin: 0 8px;\r\n    transition: transform 0.3s ease;\r\n    font-size: 1.2rem;\r\n}\r\n.prev-project[_ngcontent-%COMP%]:hover   .nav-arrow[_ngcontent-%COMP%] {\r\n    transform: translateX(-5px);\r\n}\r\n.next-project[_ngcontent-%COMP%]:hover   .nav-arrow[_ngcontent-%COMP%] {\r\n    transform: translateX(5px);\r\n}\r\n.nav-disabled[_ngcontent-%COMP%] {\r\n    display: inline-flex;\r\n    align-items: center;\r\n    padding: 15px 25px;\r\n    background: #e0e0e0;\r\n    border-radius: 30px;\r\n    text-decoration: none;\r\n    font-weight: 600;\r\n    color: #999;\r\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);\r\n    border: 2px solid transparent;\r\n    cursor: not-allowed;\r\n    opacity: 0.6;\r\n}\r\n.nav-disabled[_ngcontent-%COMP%]   .nav-arrow[_ngcontent-%COMP%] {\r\n    margin: 0 8px;\r\n    font-size: 1.2rem;\r\n}\r\n\r\n.wip[_ngcontent-%COMP%] {\r\n    background: rgba(249, 178, 5, 0.2);\r\n    border: 2px solid #f9b205;\r\n    padding: 15px 20px;\r\n    border-radius: 8px;\r\n    color: #f9b205;\r\n    margin-bottom: 30px;\r\n    font-weight: bold;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    letter-spacing: 1px;\r\n}\r\n\r\n.rich-text-content[_ngcontent-%COMP%] {\r\n    background: #ffffff;\r\n    padding: 30px;\r\n    border-radius: 12px;\r\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\r\n    border-left: 5px solid #f9b205;\r\n    line-height: 1.8;\r\n    color: #555;\r\n    font-size: 1.1rem;\r\n}\r\n.rich-text-content[_ngcontent-%COMP%]   .project-link[_ngcontent-%COMP%] {\r\n    color: #f9b205;\r\n    text-decoration: none;\r\n    font-weight: 600;\r\n    transition: color 0.3s ease;\r\n    margin: 0 2px;\r\n}\r\n.rich-text-content[_ngcontent-%COMP%]   .project-link[_ngcontent-%COMP%]:hover {\r\n    color: #232323;\r\n}\r\n.rich-text-content[_ngcontent-%COMP%]   .external-link-icon[_ngcontent-%COMP%] {\r\n    margin-left: 5px;\r\n    font-size: 0.9rem;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .project-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n        font-size: 2.5rem;\r\n    }\r\n    \r\n    .project-navigation[_ngcontent-%COMP%] {\r\n        flex-direction: column;\r\n        gap: 20px;\r\n    }\r\n    \r\n    .prev-project[_ngcontent-%COMP%], .next-project[_ngcontent-%COMP%], .back-to-list[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n    }\r\n    \r\n    .prev-project[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .next-project[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .back-to-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        justify-content: center;\r\n    }\r\n    \r\n    .project-detail[_ngcontent-%COMP%] {\r\n        padding: 40px 0;\r\n    }\r\n    \r\n    .summary-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n        font-size: 1.5rem;\r\n    }\r\n    \r\n    \r\n    .media-container[_ngcontent-%COMP%] {\r\n        border-radius: 12px;\r\n        overflow: hidden;\r\n        box-shadow: 0 2px 15px rgba(0, 0, 0, 0.15);\r\n        border: 2px solid #f9b205;\r\n    }\r\n    \r\n    \r\n    .responsive-media[_ngcontent-%COMP%] {\r\n        margin: 0 auto;\r\n        width: -moz-fit-content;\r\n        width: fit-content;\r\n    }\r\n    \r\n    .media-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .media-container[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        display: block;\r\n    }\r\n    \r\n    .video-container[_ngcontent-%COMP%] {\r\n        background: #000000;\r\n    }\r\n    \r\n    .video-fallback[_ngcontent-%COMP%] {\r\n        background: #ffffff;\r\n        padding: 30px;\r\n        border-radius: 12px;\r\n        text-align: center;\r\n        color: #555;\r\n        border: 2px dashed #f9b205;\r\n        margin-top: 10px;\r\n    }\r\n    \r\n    .video-fallback[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n        margin-bottom: 15px;\r\n        font-size: 1.1rem;\r\n    }\r\n    \r\n    .download-video[_ngcontent-%COMP%] {\r\n        display: inline-block;\r\n        background: #f9b205;\r\n        color: #ffffff;\r\n        padding: 12px 24px;\r\n        border-radius: 6px;\r\n        text-decoration: none;\r\n        font-weight: 600;\r\n        transition: background-color 0.3s ease;\r\n    }\r\n    \r\n    .download-video[_ngcontent-%COMP%]:hover {\r\n        background: #e6a004;\r\n        text-decoration: none;\r\n    }\r\n    \r\n    \r\n    .text-content[_ngcontent-%COMP%] {\r\n        background: #ffffff;\r\n        padding: 30px;\r\n        border-radius: 12px;\r\n        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\r\n        border-left: 5px solid #f9b205;\r\n    }\r\n    \r\n    .text-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n        margin: 0;\r\n        line-height: 1.8;\r\n        color: #555;\r\n        font-size: 1.1rem;\r\n    }\r\n    \r\n    \r\n    .link-container[_ngcontent-%COMP%] {\r\n        padding: 25px;\r\n        background: rgba(249, 178, 5, 0.1);\r\n        border-radius: 12px;\r\n        border: 2px solid #f9b205;\r\n    }\r\n    \r\n    .project-link[_ngcontent-%COMP%] {\r\n        display: flex;\r\n        align-items: center;\r\n        color: #f9b205;\r\n        text-decoration: none;\r\n        font-weight: 600;\r\n        transition: color 0.3s ease;\r\n        font-size: 1.1rem;\r\n    }\r\n    \r\n    .project-link[_ngcontent-%COMP%]:hover {\r\n        color: #232323;\r\n    }\r\n    \r\n    .external-link-icon[_ngcontent-%COMP%] {\r\n        margin-left: 10px;\r\n        font-size: 1.2rem;\r\n    }\r\n    \r\n    \r\n    .project-navigation[_ngcontent-%COMP%] {\r\n        flex-direction: column;\r\n        gap: 20px;\r\n    }\r\n    \r\n    .prev-project[_ngcontent-%COMP%], .next-project[_ngcontent-%COMP%], .back-to-list[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n    }\r\n    \r\n    .prev-project[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .next-project[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .back-to-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        justify-content: center;\r\n    }\r\n    \r\n    .nav-arrow[_ngcontent-%COMP%] {\r\n        margin: 0 8px;\r\n        transition: transform 0.3s ease;\r\n        font-size: 1.2rem;\r\n    }\r\n    \r\n    .prev-project[_ngcontent-%COMP%]:hover   .nav-arrow[_ngcontent-%COMP%] {\r\n        transform: translateX(-5px);\r\n    }\r\n    \r\n    .next-project[_ngcontent-%COMP%]:hover   .nav-arrow[_ngcontent-%COMP%] {\r\n        transform: translateX(5px);\r\n    }\r\n    \r\n    .nav-disabled[_ngcontent-%COMP%] {\r\n        display: inline-flex;\r\n        align-items: center;\r\n        padding: 15px 25px;\r\n        background: #e0e0e0;\r\n        border-radius: 30px;\r\n        text-decoration: none;\r\n        font-weight: 600;\r\n        color: #999;\r\n        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);\r\n        border: 2px solid transparent;\r\n        cursor: not-allowed;\r\n        opacity: 0.6;\r\n    }\r\n    \r\n    .nav-disabled[_ngcontent-%COMP%]   .nav-arrow[_ngcontent-%COMP%] {\r\n        margin: 0 8px;\r\n        font-size: 1.2rem;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QtZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUJBQW1CO0FBQ25CO0lBQ0ksc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6Qiw4QkFBOEI7SUFDOUIsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxlQUFlO0FBQ25CO0FBRUEsbUJBQW1CO0FBQ25CO0lBQ0ksbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHlDQUF5QztJQUN6Qyw4QkFBOEI7QUFDbEM7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksY0FBYztJQUNkLHFCQUFxQjtJQUNyQiwyQkFBMkI7SUFDM0IsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxjQUFjO0lBQ2QsMEJBQTBCO0FBQzlCO0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsT0FBTztJQUNQLFlBQVk7SUFDWixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0QjtBQUVBLG1CQUFtQjtBQUNuQjtJQUNJLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLDBDQUEwQztJQUMxQyxpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixjQUFjO0FBQ2xCO0FBRUEsb0JBQW9CO0FBQ3BCO0lBQ0ksbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHlDQUF5QztJQUN6Qyw4QkFBOEI7QUFDbEM7QUFFQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLG9CQUFvQjtBQUN4QjtBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsT0FBTztJQUNQLFdBQVc7SUFDWCxXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjtBQUVBLG9CQUFvQjtBQUNwQjtJQUNJLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBRUEscUJBQXFCO0FBQ3JCO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQiwwQ0FBMEM7SUFDMUMseUJBQXlCO0FBQzdCO0FBRUEsK0JBQStCO0FBQy9CO0lBQ0ksY0FBYztJQUNkLHVCQUFrQjtJQUFsQixrQkFBa0I7QUFDdEI7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsY0FBYztBQUNsQjtBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLDBCQUEwQjtJQUMxQixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixzQ0FBc0M7QUFDMUM7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7QUFFQSxpQkFBaUI7QUFDakI7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix5Q0FBeUM7SUFDekMsOEJBQThCO0FBQ2xDO0FBRUE7SUFDSSxTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7QUFFQSxtQkFBbUI7QUFDbkI7SUFDSSxhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLG1CQUFtQjtJQUNuQix5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsMkJBQTJCO0lBQzNCLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksY0FBYztBQUNsQjtBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjtBQUVBLHVCQUF1QjtBQUN2QjtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQix5Q0FBeUM7SUFDekMsOEJBQThCO0lBQzlCLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCO0FBRUE7OztJQUdJLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QseUNBQXlDO0lBQ3pDLHlCQUF5QjtJQUN6Qiw2QkFBNkI7QUFDakM7QUFFQTs7SUFFSSxtQkFBbUI7SUFDbkIsY0FBYztJQUNkLHFCQUFxQjtJQUNyQiwyQkFBMkI7SUFDM0IsNENBQTRDO0FBQ2hEO0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsY0FBYztJQUNkLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCwyQkFBMkI7SUFDM0IsNkNBQTZDO0FBQ2pEO0FBRUE7SUFDSSxhQUFhO0lBQ2IsK0JBQStCO0lBQy9CLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksMkJBQTJCO0FBQy9CO0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsMENBQTBDO0lBQzFDLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjtBQUVBLDRCQUE0QjtBQUM1QjtJQUNJLGtDQUFrQztJQUNsQyx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLG1CQUFtQjtBQUN2QjtBQUVBLHNCQUFzQjtBQUN0QjtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHlDQUF5QztJQUN6Qyw4QkFBOEI7SUFDOUIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7QUFFQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLDJCQUEyQjtJQUMzQixhQUFhO0FBQ2pCO0FBRUE7SUFDSSxjQUFjO0FBQ2xCO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCO0FBRUEsMkJBQTJCO0FBQzNCO0lBQ0k7UUFDSSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxzQkFBc0I7UUFDdEIsU0FBUztJQUNiOztJQUVBOzs7UUFHSSxXQUFXO0lBQ2Y7O0lBRUE7OztRQUdJLFdBQVc7UUFDWCx1QkFBdUI7SUFDM0I7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCOztJQUVBLHFCQUFxQjtJQUNyQjtRQUNJLG1CQUFtQjtRQUNuQixnQkFBZ0I7UUFDaEIsMENBQTBDO1FBQzFDLHlCQUF5QjtJQUM3Qjs7SUFFQSwrQkFBK0I7SUFDL0I7UUFDSSxjQUFjO1FBQ2QsdUJBQWtCO1FBQWxCLGtCQUFrQjtJQUN0Qjs7SUFFQTs7UUFFSSxXQUFXO1FBQ1gsY0FBYztJQUNsQjs7SUFFQTtRQUNJLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLG1CQUFtQjtRQUNuQixhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gsMEJBQTBCO1FBQzFCLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLG1CQUFtQjtRQUNuQixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxxQkFBcUI7UUFDckIsbUJBQW1CO1FBQ25CLGNBQWM7UUFDZCxrQkFBa0I7UUFDbEIsa0JBQWtCO1FBQ2xCLHFCQUFxQjtRQUNyQixnQkFBZ0I7UUFDaEIsc0NBQXNDO0lBQzFDOztJQUVBO1FBQ0ksbUJBQW1CO1FBQ25CLHFCQUFxQjtJQUN6Qjs7SUFFQSxpQkFBaUI7SUFDakI7UUFDSSxtQkFBbUI7UUFDbkIsYUFBYTtRQUNiLG1CQUFtQjtRQUNuQix5Q0FBeUM7UUFDekMsOEJBQThCO0lBQ2xDOztJQUVBO1FBQ0ksU0FBUztRQUNULGdCQUFnQjtRQUNoQixXQUFXO1FBQ1gsaUJBQWlCO0lBQ3JCOztJQUVBLG1CQUFtQjtJQUNuQjtRQUNJLGFBQWE7UUFDYixrQ0FBa0M7UUFDbEMsbUJBQW1CO1FBQ25CLHlCQUF5QjtJQUM3Qjs7SUFFQTtRQUNJLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsY0FBYztRQUNkLHFCQUFxQjtRQUNyQixnQkFBZ0I7UUFDaEIsMkJBQTJCO1FBQzNCLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxpQkFBaUI7UUFDakIsaUJBQWlCO0lBQ3JCOztJQUVBLHVCQUF1QjtJQUN2QjtRQUNJLHNCQUFzQjtRQUN0QixTQUFTO0lBQ2I7O0lBRUE7OztRQUdJLFdBQVc7SUFDZjs7SUFFQTs7O1FBR0ksV0FBVztRQUNYLHVCQUF1QjtJQUMzQjs7SUFFQTtRQUNJLGFBQWE7UUFDYiwrQkFBK0I7UUFDL0IsaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksMkJBQTJCO0lBQy9COztJQUVBO1FBQ0ksMEJBQTBCO0lBQzlCOztJQUVBO1FBQ0ksb0JBQW9CO1FBQ3BCLG1CQUFtQjtRQUNuQixrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLG1CQUFtQjtRQUNuQixxQkFBcUI7UUFDckIsZ0JBQWdCO1FBQ2hCLFdBQVc7UUFDWCwwQ0FBMEM7UUFDMUMsNkJBQTZCO1FBQzdCLG1CQUFtQjtRQUNuQixZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksYUFBYTtRQUNiLGlCQUFpQjtJQUNyQjtBQUNKIiwiZmlsZSI6InByb2plY3QtZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBHZW5lcmFsIExheW91dCAqL1xyXG4ucHJvamVjdC1kZXRhaWwge1xyXG4gICAgcGFkZGluZzogMzBweCAwIDYwcHggMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XHJcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjBweCk7XHJcbiAgICBtYXJnaW46IC0zMHB4IDA7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDAgMjBweDtcclxufVxyXG5cclxuLyogUHJvamVjdCBIZWFkZXIgKi9cclxuLnByb2plY3QtaGVhZGVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2Y5YjIwNTtcclxufVxyXG5cclxuLmJyZWFkY3J1bWJzIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICBjb2xvcjogIzU1NTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuLmJyZWFkY3J1bWJzIGEge1xyXG4gICAgY29sb3I6ICNmOWIyMDU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2U7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uYnJlYWRjcnVtYnMgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzIzMjMyMztcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4uYnJlYWRjcnVtYnMgc3BhbiB7XHJcbiAgICBjb2xvcjogIzIzMjMyMztcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWhlYWRlciBoMSB7XHJcbiAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICBjb2xvcjogIzIzMjMyMztcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLnByb2plY3QtaGVhZGVyIGgxOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGhlaWdodDogNHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2Y5YjIwNTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxufVxyXG5cclxuLyogRmVhdHVyZWQgSW1hZ2UgKi9cclxuLmZlYXR1cmVkLWltYWdlIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgI2Y5YjIwNTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xyXG59XHJcblxyXG4uZmVhdHVyZWQtaW1hZ2UgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4vKiBQcm9qZWN0IFN1bW1hcnkgKi9cclxuLnByb2plY3Qtc3VtbWFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIHBhZGRpbmc6IDQwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNmOWIyMDU7XHJcbn1cclxuXHJcbi5zdW1tYXJ5LWNvbnRlbnQgaDMge1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGNvbG9yOiAjMjMyMzIzO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uc3VtbWFyeS1jb250ZW50IGgzOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjliMjA1O1xyXG59XHJcblxyXG4uc3VtbWFyeS1jb250ZW50IHAge1xyXG4gICAgY29sb3I6ICM1NTU7XHJcbiAgICBsaW5lLWhlaWdodDogMS44O1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbn1cclxuXHJcbi8qIFByb2plY3QgQ29udGVudCAqL1xyXG4ucHJvamVjdC1jb250ZW50IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XHJcbn1cclxuXHJcbi5jb250ZW50LWl0ZW0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG5cclxuLyogTWVkaWEgQ29udGFpbmVycyAqL1xyXG4ubWVkaWEtY29udGFpbmVyIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2Y5YjIwNTtcclxufVxyXG5cclxuLyogUmVzcG9uc2l2ZSBNZWRpYSBDb250YWluZXIgKi9cclxuLnJlc3BvbnNpdmUtbWVkaWEge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbn1cclxuXHJcbi5tZWRpYS1jb250YWluZXIgaW1nLFxyXG4ubWVkaWEtY29udGFpbmVyIHZpZGVvIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi52aWRlby1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDtcclxufVxyXG5cclxuLnZpZGVvLWZhbGxiYWNrIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjNTU1O1xyXG4gICAgYm9yZGVyOiAycHggZGFzaGVkICNmOWIyMDU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4udmlkZW8tZmFsbGJhY2sgcCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW07XHJcbn1cclxuXHJcbi5kb3dubG9hZC12aWRlbyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjliMjA1O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDI0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi5kb3dubG9hZC12aWRlbzpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTZhMDA0O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4vKiBUZXh0IENvbnRlbnQgKi9cclxuLnRleHQtY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2Y5YjIwNTtcclxufVxyXG5cclxuLnRleHQtY29udGVudCBwIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjg7XHJcbiAgICBjb2xvcjogIzU1NTtcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG59XHJcblxyXG4vKiBMaW5rIENvbnRhaW5lciAqL1xyXG4ubGluay1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMjVweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQ5LCAxNzgsIDUsIDAuMSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2Y5YjIwNTtcclxufVxyXG5cclxuLnByb2plY3QtbGluayB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZjliMjA1O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTtcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG59XHJcblxyXG4ucHJvamVjdC1saW5rOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMjMyMzIzO1xyXG59XHJcblxyXG4uZXh0ZXJuYWwtbGluay1pY29uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbn1cclxuXHJcbi8qIFByb2plY3QgTmF2aWdhdGlvbiAqL1xyXG4ucHJvamVjdC1uYXZpZ2F0aW9uIHtcclxuICAgIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2Y5YjIwNTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ucHJldi1wcm9qZWN0IGEsXHJcbi5uZXh0LXByb2plY3QgYSxcclxuLmJhY2stdG8tbGlzdCBhIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE1cHggMjVweDtcclxuICAgIGJhY2tncm91bmQ6ICNmOWIyMDU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5wcmV2LXByb2plY3QgYTpob3ZlcixcclxuLm5leHQtcHJvamVjdCBhOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMyMzIzMjM7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJvcmRlci1jb2xvcjogIzIzMjMyMztcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDIwcHggcmdiYSgzNSwgMzUsIDM1LCAwLjMpO1xyXG59XHJcblxyXG4uYmFjay10by1saXN0IGEge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDksIDE3OCwgNSwgMC4xKTtcclxuICAgIGNvbG9yOiAjZjliMjA1O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2Y5YjIwNTtcclxufVxyXG5cclxuLmJhY2stdG8tbGlzdCBhOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNmOWIyMDU7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDIwcHggcmdiYSgyNDksIDE3OCwgNSwgMC4zKTtcclxufVxyXG5cclxuLm5hdi1hcnJvdyB7XHJcbiAgICBtYXJnaW46IDAgOHB4O1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG59XHJcblxyXG4ucHJldi1wcm9qZWN0OmhvdmVyIC5uYXYtYXJyb3cge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01cHgpO1xyXG59XHJcblxyXG4ubmV4dC1wcm9qZWN0OmhvdmVyIC5uYXYtYXJyb3cge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCk7XHJcbn1cclxuXHJcbi5uYXYtZGlzYWJsZWQge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTVweCAyNXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2UwZTBlMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICM5OTk7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICBvcGFjaXR5OiAwLjY7XHJcbn1cclxuXHJcbi5uYXYtZGlzYWJsZWQgLm5hdi1hcnJvdyB7XHJcbiAgICBtYXJnaW46IDAgOHB4O1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbn1cclxuXHJcbi8qIFdvcmsgSW4gUHJvZ3Jlc3MgQmFubmVyICovXHJcbi53aXAge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDksIDE3OCwgNSwgMC4yKTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmOWIyMDU7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBjb2xvcjogI2Y5YjIwNTtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59XHJcblxyXG4vKiBSaWNoIFRleHQgQ29udGVudCAqL1xyXG4ucmljaC10ZXh0LWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNmOWIyMDU7XHJcbiAgICBsaW5lLWhlaWdodDogMS44O1xyXG4gICAgY29sb3I6ICM1NTU7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxufVxyXG5cclxuLnJpY2gtdGV4dC1jb250ZW50IC5wcm9qZWN0LWxpbmsge1xyXG4gICAgY29sb3I6ICNmOWIyMDU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlO1xyXG4gICAgbWFyZ2luOiAwIDJweDtcclxufVxyXG5cclxuLnJpY2gtdGV4dC1jb250ZW50IC5wcm9qZWN0LWxpbms6aG92ZXIge1xyXG4gICAgY29sb3I6ICMyMzIzMjM7XHJcbn1cclxuXHJcbi5yaWNoLXRleHQtY29udGVudCAuZXh0ZXJuYWwtbGluay1pY29uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxufVxyXG5cclxuLyogUmVzcG9uc2l2ZSBBZGp1c3RtZW50cyAqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5wcm9qZWN0LWhlYWRlciBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5wcm9qZWN0LW5hdmlnYXRpb24ge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgZ2FwOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucHJldi1wcm9qZWN0LFxyXG4gICAgLm5leHQtcHJvamVjdCxcclxuICAgIC5iYWNrLXRvLWxpc3Qge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucHJldi1wcm9qZWN0IGEsXHJcbiAgICAubmV4dC1wcm9qZWN0IGEsXHJcbiAgICAuYmFjay10by1saXN0IGEge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucHJvamVjdC1kZXRhaWwge1xyXG4gICAgICAgIHBhZGRpbmc6IDQwcHggMDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnN1bW1hcnktY29udGVudCBoMyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qIE1lZGlhIENvbnRhaW5lcnMgKi9cclxuICAgIC5tZWRpYS1jb250YWluZXIge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDJweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2Y5YjIwNTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLyogUmVzcG9uc2l2ZSBNZWRpYSBDb250YWluZXIgKi9cclxuICAgIC5yZXNwb25zaXZlLW1lZGlhIHtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5tZWRpYS1jb250YWluZXIgaW1nLFxyXG4gICAgLm1lZGlhLWNvbnRhaW5lciB2aWRlbyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC52aWRlby1jb250YWluZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMwMDAwMDA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC52aWRlby1mYWxsYmFjayB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiAjNTU1O1xyXG4gICAgICAgIGJvcmRlcjogMnB4IGRhc2hlZCAjZjliMjA1O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC52aWRlby1mYWxsYmFjayBwIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZG93bmxvYWQtdmlkZW8ge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjliMjA1O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIHBhZGRpbmc6IDEycHggMjRweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5kb3dubG9hZC12aWRlbzpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2U2YTAwNDtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qIFRleHQgQ29udGVudCAqL1xyXG4gICAgLnRleHQtY29udGVudCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjZjliMjA1O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAudGV4dC1jb250ZW50IHAge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS44O1xyXG4gICAgICAgIGNvbG9yOiAjNTU1O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKiBMaW5rIENvbnRhaW5lciAqL1xyXG4gICAgLmxpbmstY29udGFpbmVyIHtcclxuICAgICAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjQ5LCAxNzgsIDUsIDAuMSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZjliMjA1O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucHJvamVjdC1saW5rIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6ICNmOWIyMDU7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucHJvamVjdC1saW5rOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogIzIzMjMyMztcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmV4dGVybmFsLWxpbmstaWNvbiB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qIFByb2plY3QgTmF2aWdhdGlvbiAqL1xyXG4gICAgLnByb2plY3QtbmF2aWdhdGlvbiB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBnYXA6IDIwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5wcmV2LXByb2plY3QsXHJcbiAgICAubmV4dC1wcm9qZWN0LFxyXG4gICAgLmJhY2stdG8tbGlzdCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5wcmV2LXByb2plY3QgYSxcclxuICAgIC5uZXh0LXByb2plY3QgYSxcclxuICAgIC5iYWNrLXRvLWxpc3QgYSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5uYXYtYXJyb3cge1xyXG4gICAgICAgIG1hcmdpbjogMCA4cHg7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcclxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnByZXYtcHJvamVjdDpob3ZlciAubmF2LWFycm93IHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTVweCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5uZXh0LXByb2plY3Q6aG92ZXIgLm5hdi1hcnJvdyB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5uYXYtZGlzYWJsZWQge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMTVweCAyNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNlMGUwZTA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBjb2xvcjogIzk5OTtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICAgICAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5uYXYtZGlzYWJsZWQgLm5hdi1hcnJvdyB7XHJcbiAgICAgICAgbWFyZ2luOiAwIDhweDtcclxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIH1cclxufSJdfQ== */"] });


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
    new _project_model__WEBPACK_IMPORTED_MODULE_0__.Project("Personal Portfolio Website", "assets/img/Portofolio/portfolio-screenshot.png", "A modern, responsive portfolio website built with Angular and TypeScript. Features a clean design with a sidebar navigation, project showcases, detailed project views, and an about section. Deployed on GitHub Pages with proper routing and fallback handling.", [
        new _project_model__WEBPACK_IMPORTED_MODULE_0__.Text("", false, [
            { text: "Technologies used:" },
            { text: "", isNewline: true },
            { text: "• Built with Angular 12+ and TypeScript" },
            { text: "", isNewline: true },
            { text: "• Responsive design with mobile-first approach" },
            { text: "", isNewline: true },
            { text: "• Clean, modern UI with smooth animations" },
            { text: "", isNewline: true },
            { text: "• GitHub Pages deployment with proper routing" },
            { text: "", isNewline: true },
            { text: "", isNewline: true },
            { text: "Source code available at: " },
            { text: "GitHub Repository", isLink: true, url: "https://github.com/BogdanDumbravean/portofolio" }
        ])
    ]),
    new _project_model__WEBPACK_IMPORTED_MODULE_0__.Project("Conference Management", "assets/img/Faculta/ISS/Login.png", "Application for managing the stages of a conference, made in a team. I was chosen as team leader, so I had knowledge of the whole application, but my main tasks were in the back-end and the database.", []),
    new _project_model__WEBPACK_IMPORTED_MODULE_0__.Project("Bolts and Gears", "assets/img/Liceu/FTC.png", "First season of FTC in Romania. The contest starts from gathering funds and resources, to building the robot, and ends with a competition between the robots of the qualified teams. We qualified to the national phase. My main task was programming, but I contributed a lot to building the physical part too.", [
        new _project_model__WEBPACK_IMPORTED_MODULE_0__.Text("", false, [
            { text: "You can see the current state of the team at: " },
            { text: "Bolts and Gears", isLink: true, url: "https://www.facebook.com/boltsngears" }
        ])
    ]),
    new _project_model__WEBPACK_IMPORTED_MODULE_0__.Project("Automated Stock Information", "assets/img/Faculta/RPA/Screenshot 2022-03-01 222341.png", "Team project done in UiPath for automated screen capture from stock information websites. The application can recieve emails with the stocks' identifiers, after which it calculates if the stock is on an upward trend, and it sends a reply with the result, as well as other important information.", []),
    new _project_model__WEBPACK_IMPORTED_MODULE_0__.Project("Intelligent Crowd Behaviour", "assets/img/Faculta/Licenta/Screenshot 2022-05-28 121938.png", "A 3D simulation of a stadium evacuation done in Unity. The scenarios are done following real life planning, with a combination of behaviours for the AI agents.", []),
    new _project_model__WEBPACK_IMPORTED_MODULE_0__.Project("University Job Formular", "assets/img/Practica/Screenshot 2022-03-01 221720.png", "As practical work, we had to develop websites for the university. Our team had the task of creating a website for teachers that apply to the university to complete a formular and upload their documents. Worked in the front-end, back-end, and database, however I was the representative of the backend team.", []),
    new _project_model__WEBPACK_IMPORTED_MODULE_0__.Project("Activities Management", "assets/img/Faculta/MA/Images/Looks/Preview.png", "Mobile application done individually for a course. Used for organising daily activities quickly. Realised in both flutter and kotlin. Works with a server database when connected to the internet, and saves data locally for offline interaction.", [
        new _project_model__WEBPACK_IMPORTED_MODULE_0__.ImgPath("assets/img/Faculta/MA/Images/Looks/Update.png", false, "400px"),
        new _project_model__WEBPACK_IMPORTED_MODULE_0__.ImgPath("assets/img/Faculta/MA/Images/Looks/OfflineWarning.png", false, "400px")
    ]),
    new _project_model__WEBPACK_IMPORTED_MODULE_0__.Project("Movie Rental", "assets/img/Faculta/MPP/MPP.png", "Web application for managing the rental of movies realised in a two-man team. Front-end done in Angular, back-end in Java, and different versions for different databases.", []),
    new _project_model__WEBPACK_IMPORTED_MODULE_0__.Project("Raytracer", "assets/img/Faculta/VR/Screenshot 2022-03-01 222923.png", "A physics application of rays and reflections for rendering a simple 3D scene. Multiple images are created from different angles of the scene. Project realised in C#.", []),
    new _project_model__WEBPACK_IMPORTED_MODULE_0__.Project("Acrophobia Helper", "assets/img/Faculta/VR/Screenshot 2022-03-01 225758.png", "Unity project with the purpose of helping people suffering from fear of heights. The user can use the virtual environment to gradually ascend on a board, at their own pace.", []),
    new _project_model__WEBPACK_IMPORTED_MODULE_0__.Project("Slideshow", "assets/img/Faculta/Web/Screenshot 2022-03-01 214921.png", "Simple web application displaying a slideshow. Small project made for further stabilising my basics of web development.", []),
    new _project_model__WEBPACK_IMPORTED_MODULE_0__.Project("Informative Fill and Lee Algorithms", "assets/img/Liceu/Atestat/Screenshot 2022-03-01 225303.png", "Visual C# application made in highschool explaining two algorithms: the Fill and the Lee. Apart from theory that explains how and when to use the algorithm, specific problems are presented with a step by step animation for each algorithm.", []),
    new _project_model__WEBPACK_IMPORTED_MODULE_0__.Project("Biology Quiz", "assets/img/Liceu/appbio.png", "Helpful quiz for students that want to test their biology skills, done in highschool. The questions are imported from previous years of the \"Bacalaureat\" exam from Romania. Presents a test with multiple-choice questions.", []),
    new _project_model__WEBPACK_IMPORTED_MODULE_0__.Project("Mini Paint", "assets/img/Liceu/paint.png", "A basic recreation of paint from my highschool days. Has a number of features of the paint application, including undo and redo.", [])
];
const GAMES = [
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
    new _project_model__WEBPACK_IMPORTED_MODULE_0__.Project("Carl", "assets/img/Games/Carl.png", "Winner of the GetCrEAtive hackathon, this game was done in a three-man team in 24h. It's a side-view 2D racing game, but with a twist. This is better to show, not tell 😉", [
        new _project_model__WEBPACK_IMPORTED_MODULE_0__.ImgPath("assets/img/Games/Carl.mp4", true)
    ]),
    new _project_model__WEBPACK_IMPORTED_MODULE_0__.Project("Procedural Village Generation", "assets/img/Faculta/Master/unnamed.png", "Although not a game by itself, this project was intended for game development. It's a gamified approach on village procedural generation, making use of suggestions to let the designer maintain more control over the creation process.", [
        new _project_model__WEBPACK_IMPORTED_MODULE_0__.Text("", false, [
            { text: "You can read more about the research at:" },
            { text: "", isNewline: true },
            { text: "Game Developer Article", isLink: true, url: "https://www.gamedeveloper.com/blogs/human-ai-interaction-improves-the-design-process" },
            { text: "Research Paper", isLink: true, url: "http://dx.doi.org/10.13140/RG.2.2.23595.92966/1" }
        ])
    ]),
    new _project_model__WEBPACK_IMPORTED_MODULE_0__.Project("Little Knight", "assets/img/Games/LK/Screenshot_20190701-213821.png", "My first released game, for android devices. Side-view 2D fantasy game with a knight stranded on a flying island. The game is not on Google Play anymore because I haven't updated it after new rules have been enforced regarding ads", []),
    new _project_model__WEBPACK_IMPORTED_MODULE_0__.Project("Book of Heroes", "assets/img/Games/BookOfHeroes/Book of Heroes.png", "Team-made game in 3D, featuring the jourey of a mage that fights to save his city from monsters. With this game, we won an award at a national competition.", []),
    new _project_model__WEBPACK_IMPORTED_MODULE_0__.Project("Board of Heroes", "assets/img/Games/IMG-20200308-WA0000.jpg", "A game started with a team, that has sadly been left unfinished. It's a different take on auto-chess games, realised in 3D.", []),
    new _project_model__WEBPACK_IMPORTED_MODULE_0__.Project("Flying Jousting", "assets/img/Games/Flying Jousting/Screenshot 2022-05-28 124705.png", "Imagine jousting, but in 3D. A multiplayer game where you fly on your horse to defeat your opponents, the arena being the inside of a cube. First multiplayer project I made, implementing rooms for players, a scoreboard, and a lot of fun.", []),
    new _project_model__WEBPACK_IMPORTED_MODULE_0__.Project("Friends", "assets/img/Games/FriendsGame/Screenshot 2022-05-28 130558.png", "A fun little project that has as main characters me and my friends. The time is set during our high school days, and has us fighting with all the disciplines.", [])
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