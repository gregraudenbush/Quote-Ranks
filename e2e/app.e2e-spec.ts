import { QuoteappPage } from './app.po';

describe('quoteapp App', () => {
  let page: QuoteappPage;

  beforeEach(() => {
    page = new QuoteappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
