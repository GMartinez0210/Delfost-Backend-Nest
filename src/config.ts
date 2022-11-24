import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    MONGO_URI: process.env.MONGO_URI,
    MONGO_DB: process.env.MONGO_DB,
  };
});
