import { RouterApp1Page } from './app.po';

describe('router-app1 App', () => {
  let page: RouterApp1Page;

  beforeEach(() => {
    page = new RouterApp1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
