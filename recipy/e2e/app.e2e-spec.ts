import { RecipyPage } from './app.po';

describe('recipy App', function() {
  let page: RecipyPage;

  beforeEach(() => {
    page = new RecipyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
