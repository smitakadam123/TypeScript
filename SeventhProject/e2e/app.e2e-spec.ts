import { SeventhProjectPage } from './app.po';

describe('seventh-project App', () => {
  let page: SeventhProjectPage;

  beforeEach(() => {
    page = new SeventhProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
