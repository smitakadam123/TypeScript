import { SixthProjectPage } from './app.po';

describe('sixth-project App', () => {
  let page: SixthProjectPage;

  beforeEach(() => {
    page = new SixthProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
