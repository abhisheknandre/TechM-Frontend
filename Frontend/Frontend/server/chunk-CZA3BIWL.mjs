import './polyfills.server.mjs';
import{a as ut}from"./chunk-Y3D5EZST.mjs";import{A as mt,B as lt,C as dt,D as pt,E as k,F as I,a as G,b as Y,c as z,d as H,e as J,f as K,g as X,h as Z,i as tt,k as et,l as it,m as nt,n as rt,o as ot,q as st,y as at,z as ct}from"./chunk-H5S6FPU3.mjs";import{m as Q,n as U,p as C,q as T,r as W,s as F}from"./chunk-7XJUWC2E.mjs";import{Ab as N,Bb as s,Cb as p,Eb as R,Fb as P,Gb as q,Pa as m,Qa as u,T as L,U as V,ca as x,da as w,db as _,fb as d,ka as v,kb as r,la as h,lb as o,mb as S,pb as b,rb as f,rc as M,sc as A,tb as l,ub as O,uc as B,vb as $}from"./chunk-3NEGXMRX.mjs";import"./chunk-VVCT4QZE.mjs";var gt=["*"],ht=(()=>{let t=class t{constructor(n,i){this.router=n,this.toastr=i}logout(){this.toastr.success("","Logout successfully"),console.log("Destroy"),localStorage.clear(),this.router.navigate(["/login"],{replaceUrl:!0})}};t.\u0275fac=function(i){return new(i||t)(u(C),u(I))},t.\u0275cmp=x({type:t,selectors:[["app-advisordashboard"]],ngContentSelectors:gt,decls:18,vars:0,consts:[["sidenav",""],["color","primary"],["type","button","mat-icon-button","",3,"click"],[3,"click"],["opened","true","mode","side"],["mat-list-item","","routerLink","/advisor-dashboard/advisorDashboard/advisorvehicle"],["mat-list-item","",3,"click"],[2,"height","88vh"]],template:function(i,c){if(i&1){let g=b();O(),r(0,"mat-toolbar",1)(1,"mat-toolbar-row")(2,"button",2),f("click",function(){v(g);let D=N(9);return h(D.toggle())}),r(3,"mat-icon",3),f("click",function(){v(g);let D=N(9);return h(D.toggle())}),s(4,"menu"),o()(),r(5,"h1"),s(6,"Vehicle Service Management"),o()()(),r(7,"mat-sidenav-container")(8,"mat-sidenav",4,0)(10,"mat-nav-list")(11,"a",5),s(12,"Vehicle List"),o(),r(13,"a",6),f("click",function(){return v(g),h(c.logout())}),s(14,"Logout"),o()()(),r(15,"mat-sidenav-content")(16,"div",7),$(17),o()()()}},dependencies:[T,Y,G,J,K,H,mt,ct,Z,dt]});let e=t;return e})();var ft=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=x({type:t,selectors:[["app-dashboard"]],decls:2,vars:0,template:function(i,c){i&1&&(r(0,"app-advisordashboard"),S(1,"router-outlet"),o())},dependencies:[U,ht]});let e=t;return e})();var _t=(()=>{let t=class t{constructor(){this.items=[]}addToCart(n){this.items.some(c=>c.id===n.id)||(n.quantity=1,this.items.push(n))}decreaseItemQuantity(n){this.clearCart();let i=this.items.find(c=>c.id===n);i&&i.quantity>1&&i.quantity--}increaseItemQuantity(n){let i=this.items.find(c=>c.id===n);i&&i.quantity++}removeItem(n){let i=this.items.findIndex(c=>c.id===n);i!==-1&&this.items.splice(i,1)}getItems(){return this.items}clearCart(){this.items=[]}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=L({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();function Vt(e,t){if(e&1){let a=b();r(0,"tr")(1,"td"),s(2),o(),r(3,"td"),s(4),o(),r(5,"td"),s(6),o(),r(7,"td")(8,"button",9),f("click",function(){let i=v(a).$implicit,c=l();return h(c.addToCart(i))}),s(9,"Add to Cart"),o()()()}if(e&2){let a=t.$implicit;m(2),p(a.itemName),m(2),p(a.itemDescription),m(2),p(a.itemCost)}}function wt(e,t){if(e&1){let a=b();r(0,"tr")(1,"td"),s(2),o(),r(3,"td"),s(4),o(),r(5,"td"),s(6),o(),r(7,"td")(8,"div",10)(9,"div",11)(10,"div",12)(11,"button",13),f("click",function(){let i=v(a).$implicit,c=l(2);return h(c.decrement(i.id))}),s(12,"-"),o(),r(13,"span"),s(14),o(),r(15,"button",13),f("click",function(){let i=v(a).$implicit,c=l(2);return h(c.increment(i.id))}),s(16,"+"),o()()(),r(17,"div",14)(18,"button",15),f("click",function(){let i=v(a).$implicit,c=l(2);return h(c.removeItem(i.id))}),s(19,"Delete"),o()()()()()}if(e&2){let a=t.$implicit;m(2),p(a.itemName),m(2),p(a.itemDescription),m(2),p(a.itemCost),m(8),p(a.quantity)}}function Mt(e,t){if(e&1&&(r(0,"table",2)(1,"thead")(2,"tr")(3,"th"),s(4,"Item Name"),o(),r(5,"th"),s(6,"Description"),o(),r(7,"th"),s(8,"Cost"),o(),r(9,"th"),s(10,"Actions"),o()()(),r(11,"tbody"),_(12,wt,20,4,"tr",3),o()()),e&2){let a=l();m(12),d("ngForOf",a.items1)}}function At(e,t){e&1&&(r(0,"button",20),s(1,"Submit"),o())}function Tt(e,t){if(e&1){let a=b();r(0,"div")(1,"div",16)(2,"div",17)(3,"select",18),q("ngModelChange",function(i){v(a);let c=l();return P(c.vehicle.serviceStatus,i)||(c.vehicle.serviceStatus=i),h(i)}),o()()(),S(4,"br"),_(5,At,2,0,"button",19),o()}if(e&2){let a=l();m(3),R("ngModel",a.vehicle.serviceStatus),m(2),d("ngIf",a.items1.length>0)}}var xt=(()=>{let t=class t{constructor(n,i,c,g,E){this.Service=n,this.cartService=i,this.router=c,this.toastr=g,this.route=E}ngOnInit(){this.getItem(),this.DisplayCartItem(),this.id=this.route.snapshot.params.id,this.Service.getVehicleById(this.id).subscribe(n=>{this.vehicle=n,console.log(n)})}addToCart(n){this.cartService.addToCart(n)}DisplayCartItem(){this.items1=this.cartService.getItems()}removeItem(n){this.cartService.removeItem(n)}onSubmit(){let n=this.items1,i=this.id=this.route.snapshot.params.id;this.vehicle.serviceStatus="Completed",this.Service.updateVehicleStatusAdv(this.id,this.vehicle).subscribe(c=>{this.toastr.success("","Updated successfully")});for(let c of n)console.log(i),this.Service.addServiceRecord(c.id,c.itemName,c.itemCost,c.quantity,this.id).subscribe(g=>{});this.cartService.clearCart(),this.router.navigate(["/advisor-dashboard/advisorDashboard/advisorvehicle"])}DeleteItemFromCart(n){}getItem(){this.Service.getItemList().subscribe(n=>{this.items=n})}increment(n){this.cartService.increaseItemQuantity(n)}decrement(n){this.cartService.decreaseItemQuantity(n)}};t.\u0275fac=function(i){return new(i||t)(u(k),u(_t),u(C),u(I),u(Q))},t.\u0275cmp=x({type:t,selectors:[["app-advisor-itemlist"]],decls:25,vars:3,consts:[[1,"col-md-8","offset-md-2"],[1,"text-center"],[1,"table","table-striped"],[4,"ngFor","ngForOf"],["class","table table-striped",4,"ngIf"],[3,"ngSubmit"],[4,"ngIf"],[1,"button-container"],["routerLink","/advisor-dashboard/advisorDashboard/advisorvehicle","routerLinkActive","active",1,"text-center","btn","btn-primary",2,"background-color","#673ab7"],[3,"click"],[1,"row"],[1,"col-4"],[1,""],[1,"btn","btn-primary","m-1",3,"click"],[1,"col","m-1"],[1,"btn","btn-danger",3,"click"],["hidden",""],[1,"col-md-10"],["name","Status",1,"form-control",3,"ngModelChange","ngModel"],["class","btn btn-success","type","submit",4,"ngIf"],["type","submit",1,"btn","btn-success"]],template:function(i,c){i&1&&(r(0,"div",0)(1,"h2",1),s(2,"Item List"),o(),S(3,"br"),r(4,"table",2)(5,"thead")(6,"tr")(7,"th"),s(8,"Item Name"),o(),r(9,"th"),s(10,"Description"),o(),r(11,"th"),s(12,"Cost"),o(),r(13,"th"),s(14,"Actions"),o()()(),r(15,"tbody"),_(16,Vt,10,3,"tr",3),o()(),S(17,"br")(18,"br"),_(19,Mt,13,1,"table",4),r(20,"form",5),f("ngSubmit",function(){return c.onSubmit()}),_(21,Tt,6,2,"div",6),o(),r(22,"div",7)(23,"button",8),s(24,"Back"),o()()()),i&2&&(m(16),d("ngForOf",c.items),m(3),d("ngIf",c.items1.length>0),m(2),d("ngIf",c.vehicle))},dependencies:[M,A,T,W,ot,st,et,it,rt,nt],styles:[".button-container[_ngcontent-%COMP%]{position:absolute;top:20px;left:20px}h2[_ngcontent-%COMP%]{padding-top:20px}"]});let e=t;return e})();function kt(e,t){if(e&1&&(r(0,"td"),s(1),o()),e&2){let a=l().$implicit;m(),p(a.name)}}function Dt(e,t){if(e&1&&(r(0,"td"),s(1),o()),e&2){let a=l().$implicit;m(),p(a.ownerName)}}function Nt(e,t){if(e&1&&(r(0,"td"),s(1),o()),e&2){let a=l().$implicit;m(),p(a.year)}}function Ft(e,t){if(e&1&&(r(0,"td"),s(1),o()),e&2){let a=l().$implicit;m(),p(a.licensePlate)}}function jt(e,t){if(e&1&&(r(0,"td"),s(1),o()),e&2){let a=l().$implicit;m(),p(a.serviceStatus)}}function Lt(e,t){if(e&1){let a=b();r(0,"td")(1,"button",5),f("click",function(){v(a);let i=l().$implicit,c=l();return h(c.updateCart(i.id))}),s(2,"Update"),o()()}}function Ot(e,t){if(e&1&&(r(0,"tr"),_(1,kt,2,1,"td",4)(2,Dt,2,1,"td",4)(3,Nt,2,1,"td",4)(4,Ft,2,1,"td",4)(5,jt,2,1,"td",4)(6,Lt,3,0,"td",4),o()),e&2){let a=t.$implicit;m(),d("ngIf",a.serviceStatus==="Scheduled"),m(),d("ngIf",a.serviceStatus==="Scheduled"),m(),d("ngIf",a.serviceStatus==="Scheduled"),m(),d("ngIf",a.serviceStatus==="Scheduled"),m(),d("ngIf",a.serviceStatus==="Scheduled"),m(),d("ngIf",a.serviceStatus==="Scheduled")}}var St=(()=>{let t=class t{constructor(n,i,c){this.vehicleservice=n,this.router=i,this.toastr=c}ngOnInit(){this.getVehicle()}getVehicle(){typeof window<"u"&&window.localStorage&&(this.email=localStorage.getItem("userEmail")),this.vehicleservice.getVehicleListAsvisor(this.email).subscribe(n=>{this.vehicles=n})}updateCart(n){this.router.navigate(["/advisor-dashboard/advisorDashboard/advisoritems",n])}};t.\u0275fac=function(i){return new(i||t)(u(k),u(C),u(I))},t.\u0275cmp=x({type:t,selectors:[["app-advisor-vehiclelist"]],decls:21,vars:1,consts:[[1,"col-md-8","offset-md-2"],[1,"text-center"],[1,"table","table-striped"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"btn","btn-info",3,"click"]],template:function(i,c){i&1&&(r(0,"div",0)(1,"h2",1),s(2,"Vehicle List"),o(),S(3,"br"),r(4,"table",2)(5,"thead")(6,"tr")(7,"th"),s(8,"Vehicle Name"),o(),r(9,"th"),s(10,"Owner Name"),o(),r(11,"th"),s(12,"Year"),o(),r(13,"th"),s(14,"License Plate"),o(),r(15,"th"),s(16,"Service Status"),o(),r(17,"th"),s(18,"Actions"),o()()(),r(19,"tbody"),_(20,Ot,7,6,"tr",3),o()()()),i&2&&(m(20),d("ngForOf",c.vehicles))},dependencies:[M,A]});let e=t;return e})();var $t=[{path:"advisorDashboard",component:ft,canActivate:[ut],children:[{path:"advisoritems/:id",component:xt},{path:"advisorvehicle",component:St}]}],bt=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=w({type:t}),t.\u0275inj=V({imports:[F.forChild($t),F]});let e=t;return e})();var fe=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=w({type:t}),t.\u0275inj=V({imports:[B,bt,z,X,lt,tt,pt,at]});let e=t;return e})();export{fe as AdvisorModule};
