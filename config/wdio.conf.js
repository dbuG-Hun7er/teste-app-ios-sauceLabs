import 'dotenv/config';
import { sauceConf } from './sauce.conf.js';

if (!process.env.SAUCE_USERNAME || !process.env.SAUCE_ACCESS_KEY) {
  throw new Error('Configure SAUCE_USERNAME e SAUCE_ACCESS_KEY antes de executar os testes.');
}

export const config = sauceConf;
