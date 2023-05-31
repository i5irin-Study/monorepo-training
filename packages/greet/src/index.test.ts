import { greet, greetInJapanese } from './index';

describe('greet', () => {
  it('should return greetings to the given name', () => {
    expect.assertions(1);
    expect(greet({ name: 'i5irin' })).toBe('Hey i5irin !!');
  });
  it('should return greetings to the given name in Japanese', () => {
    expect.assertions(1);
    expect(greetInJapanese({ name: 'i5irin' })).toBe('こんにちは! i5irin');
  });
});
