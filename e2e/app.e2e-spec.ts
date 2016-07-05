import { JsGameTimerAngular2Page } from './app.po';

describe('js-game-timer-angular2 App', function() {
  let page: JsGameTimerAngular2Page;

  beforeEach(() => {
    page = new JsGameTimerAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
