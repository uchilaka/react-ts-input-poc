import * as jquery from "jquery";

// Import jQuery
declare global {
  // tslint:disable interface-name
  interface Window {
    jQuery: JQueryStatic;
    $: JQueryStatic;
  }
  // tslint:enable interface-name
}
window.jQuery = jquery;
window.$ = window.jQuery;

export const jQuery = jquery;

export default jquery;
