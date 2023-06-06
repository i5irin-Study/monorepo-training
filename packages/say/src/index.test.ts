import message, { messageAppendText, yoroshiku } from './index';

describe('say', () => {
  it('should equal Hey name message', () => {
    expect.assertions(1);
    expect(message).toBe('Hey i5irinさん !!');
  });
  it('should equal append text message', () => {
    expect.assertions(1);
    expect(messageAppendText).toBe(
      'Hey i5irinさん !! 後ろに追加された文字だよ!',
    );
  });
  it('should equal yoroshiku message', () => {
    expect.assertions(1);
    expect(yoroshiku).toBe('こんにちは! i5irinさん ! よろしくねー');
  });
});
