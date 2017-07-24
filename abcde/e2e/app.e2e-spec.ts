import { AbcdePage } from './app.po';

describe('abcde App', () => {
  let page: AbcdePage;

  beforeEach(() => {
    page = new AbcdePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
