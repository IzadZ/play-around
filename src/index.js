/**
Main file
Take the event load on window to watch when window has loaded.
Then generate the table with the url params and display it in the DOM
*/

import datas from "./datas.json";
import { generateBody, generateTable, generateHeader } from "./modules/";
import filters from "./utils/generateFilter";
const app = document.getElementById("app");
window.addEventListener("load", () => {
  app.innerHTML = generateTable(generateHeader, generateBody(datas, filters));
});
