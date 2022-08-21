import message from './index';

describe('say', () => {
  it('should equal Hello name message', () => {
    expect.assertions(1);
    expect(message).toBe('Hello i5irin');
  });
});
