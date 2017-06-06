import { FaceTestPage } from './app.po';

describe('face-test App', () => {
  let page: FaceTestPage;

  beforeEach(() => {
    page = new FaceTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
