const nodemailer = require('nodemailer');

// Criação do transporte com o servidor SMTP
const transporter = nodemailer.createTransport({
  host: 'mail.vantechdobrasil.com.br', // Servidor SMTP
  port: 587, // Porta de envio
  secure: false, // Usar TLS (true para SSL, false para TLS)
  auth: {
    user: 'matheus.silva@vantechdobrasil.com.br', // Seu e-mail
    pass: 'Mat10.10', // Sua senha de e-mail
  },
});

// Função que será chamada pelo front-end
module.exports = async (req, res) => {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    const mailOptions = {
      from: `"${name}" <${email}>`, // Remetente
      to: 'orca01.vantech@gmail.com', // Destinatário
      subject: `Mensagem de Contato - ${name}`, // Assunto
      text: message, // Corpo do e-mail
    };

    try {
      // Enviar e-mail
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Mensagem enviada com sucesso!' });
    } catch (error) {
      console.error('Erro ao enviar e-mail:', error);
      res.status(500).json({ message: 'Erro ao enviar a mensagem.' });
    }
  } else {
    res.status(405).json({ message: 'Método não permitido.' });
  }
};
