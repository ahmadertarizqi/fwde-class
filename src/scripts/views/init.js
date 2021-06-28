import UrlParser from '../routes/url-parser';
import Routes from '../routes/routes';

class App {
  constructor({ content }) {
    this._content = content;
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = Routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
