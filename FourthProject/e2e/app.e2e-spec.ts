import { FourthProjectPage } from './app.po';

describe('fourth-project App', () => {
  let page: FourthProjectPage;

  beforeEach(() => {
    page = new FourthProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
