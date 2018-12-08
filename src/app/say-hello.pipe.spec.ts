import { SayHelloPipe } from './demo-pipes.pipe';

describe('SayHelloPipe', () => {
  it('create an instance', () => {
    const pipe = new SayHelloPipe();
    expect(pipe).toBeTruthy();
  });
});
