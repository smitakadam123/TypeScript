import { CustomPage } from './app.po';

describe('custom App', () => {
  let page: CustomPage;

  beforeEach(() => {
    page = new CustomPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
