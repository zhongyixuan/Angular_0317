import { NtubPage } from './app.po';

describe('ntub App', function() {
  let page: NtubPage;

  beforeEach(() => {
    page = new NtubPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
