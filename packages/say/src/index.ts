// eslint-disable-next-line import/no-extraneous-dependencies
import { greet, greetInJapanese } from '@i5irin-monorepo-training/greet';

const message = greet({
  name: 'i5irinさん',
});

export const messageAppendText = `${greet({
  name: 'i5irinさん',
})} 後ろに追加された文字だよ!`;

export const yoroshiku = `${greetInJapanese({
  name: 'i5irinさん',
})} よろしくねー`;

export default message;
