// eslint-disable-next-line import/no-extraneous-dependencies
import { greet } from '@i5irin-monorepo-training/greet';

const message = greet({
  name: 'i5irin',
});

// eslint-disable-next-line no-console
console.log(message);

export default message;
