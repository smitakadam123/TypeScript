import { CustomIOPage } from './app.po';

describe('custom-io App', () => {
  let page: CustomIOPage;

  beforeEach(() => {
    page = new CustomIOPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
