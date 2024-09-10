import { $ } from "@wdio/globals";
import Page from "./page.js";

class HelloPage extends Page {
  get toggleBtn() {
    return $(`#toggle`);
  }
  get searchInput() {
    return $(`#search`);
  }
  get helloTitle() {
    return $(`#hello`);
  }

  async toggleTitleWithInput(text) {
    await this.searchInput.setValue(text);
    await this.toggleBtn.click();
  }

  open() {
    return super.open("/hello");
  }
}

export default new HelloPage();
