import { hmac } from 'bibliotecaDeHmac';

function base64(string) {
  return Buffer.from(string).toString('base64');
}

const header = JSON.stringify({
  alg: 'HS256',
  type: 'JWT',
});

const payload = JSON.stringify({
  sub: '1234567890',
  name: 'John Doe',
  admin: true,
});

const secret = 'MinhaSenhaMuitoComplexa123';

const assinatura = hmac(secret, `${base64(header)}.${base64(payload)}`);

const token = `${base64(header)}.${base64(payload)}.${base64(assinatura)}`;