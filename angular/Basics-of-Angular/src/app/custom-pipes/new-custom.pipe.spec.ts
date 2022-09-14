import { NewCustomPipe } from './new-custom.pipe';

describe('NewCustomPipe', () => {
  it('create an instance', () => {
    const pipe = new NewCustomPipe();
    expect(pipe).toBeTruthy();
  });
});
