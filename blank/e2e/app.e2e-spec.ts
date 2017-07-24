import { BlankPage } from './app.po';

describe('blank App', () => {
  let page: BlankPage;

  beforeEach(() => {
    page = new BlankPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
