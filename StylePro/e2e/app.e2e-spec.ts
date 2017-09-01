import { StyleProPage } from './app.po';

describe('style-pro App', () => {
  let page: StyleProPage;

  beforeEach(() => {
    page = new StyleProPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
