const request = require('supertest');
const app = require('../src/app');

describe('Email API', () => {
  it('Deve criar um e-mail temporário', async () => {
    const res = await request(app).post('/api/emails/create');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('email');
  });

  it('Deve confirmar um e-mail', async () => {
    const email = 'test@example.com';
    const res = await request(app).post('/api/emails/confirm').send({ email });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'E-mail confirmado');
  });
});


// const request = require('supertest');
// const app = require('../src/app');

// describe('POST /api/emails/send', () => {
//   it('deve enviar um e-mail com sucesso', async () => {
//     const response = await request(app)
//       .post('/api/emails/send')
//       .send({
//         to: 'test@example.com',
//         subject: 'Teste',
//         text: 'Este é um e-mail de teste'
//       });

//     expect(response.status).toBe(200);
//     expect(response.body.message).toBe('E-mail enviado com sucesso!');
//   });
// });