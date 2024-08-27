import './polyfills.server.mjs';
import{E as n}from"./chunk-H5S6FPU3.mjs";import{p as i}from"./chunk-7XJUWC2E.mjs";import{Z as e}from"./chunk-3NEGXMRX.mjs";var u=()=>{let r=e(n),t=e(i);if(r.isAuthenticated()){let o=r.getUserRole();return o==="ADMIN"||o==="SERVICEADVISOR"?!0:(t.navigate(["/login"]),!1)}else return t.navigate(["/login"]),!1};export{u as a};
