import { FifthProjectPage } from './app.po';

describe('fifth-project App', () => {
  let page: FifthProjectPage;

  beforeEach(() => {
    page = new FifthProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
