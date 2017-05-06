import { ChecklistPage } from './app.po';

describe('checklist App', function() {
  let page: ChecklistPage;

  beforeEach(() => {
    page = new ChecklistPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
