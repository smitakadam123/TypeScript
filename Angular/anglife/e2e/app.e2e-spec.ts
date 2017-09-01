import { AnglifePage } from './app.po';

describe('anglife App', () => {
  let page: AnglifePage;

  beforeEach(() => {
    page = new AnglifePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
