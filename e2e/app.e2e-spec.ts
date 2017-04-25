import { AwesomeAngularPage } from './app.po';

describe('awesome-angular App', () => {
  let page: AwesomeAngularPage;

  beforeEach(() => {
    page = new AwesomeAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
