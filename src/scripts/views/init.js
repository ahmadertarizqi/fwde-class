import UrlParser from '../routes/url-parser';
import Routes from '../routes/routes';

class App {
  constructor({ body, content }) {
    this._body = body;
    this._content = content;
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = Routes[url];
    const bodyClasses = 'has-header-light';

    if ((url !== '/') && (url !== '/homepage')) {
      this._body.classList.add(bodyClasses);
    } else {
      this._body.classList.remove(bodyClasses);
    }

    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
