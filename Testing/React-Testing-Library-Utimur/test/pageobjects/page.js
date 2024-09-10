import { browser } from "@wdio/globals";

export default class Page {
  open(path) {
    return browser.url(`http://localhost:5173${path}`);
  }
}

