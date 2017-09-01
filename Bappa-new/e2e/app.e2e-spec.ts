import { BappaNewPage } from './app.po';

describe('bappa-new App', () => {
  let page: BappaNewPage;

  beforeEach(() => {
    page = new BappaNewPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
