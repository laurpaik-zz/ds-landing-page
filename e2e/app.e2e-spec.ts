import { DsLandingPagePage } from './app.po';

describe('ds-landing-page App', () => {
  let page: DsLandingPagePage;

  beforeEach(() => {
    page = new DsLandingPagePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
