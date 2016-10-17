import { TieappPage } from './app.po';

describe('tieapp App', function() {
  let page: TieappPage;

  beforeEach(() => {
    page = new TieappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
