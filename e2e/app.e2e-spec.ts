import { GetLabPage } from './app.po';

describe('get-lab App', function() {
  let page: GetLabPage;

  beforeEach(() => {
    page = new GetLabPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
