import { greet } from './index';

describe('greet', () => {
  it('should return greetings to the given name', () => {
    expect.assertions(1);
    expect(greet({ name: 'i5irin' })).toBe('Hey i5irin !');
  });
});
