import message from './index';

describe('say', () => {
  it('should equal Hey name message', () => {
    expect.assertions(1);
    expect(message).toBe('Hey i5irinさん');
  });
});
