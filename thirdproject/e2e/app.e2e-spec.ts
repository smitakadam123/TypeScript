import { ThirdprojectPage } from './app.po';

describe('thirdproject App', () => {
  let page: ThirdprojectPage;

  beforeEach(() => {
    page = new ThirdprojectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
