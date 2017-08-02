import { SampleProPage } from './app.po';

describe('sample-pro App', () => {
  let page: SampleProPage;

  beforeEach(() => {
    page = new SampleProPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
