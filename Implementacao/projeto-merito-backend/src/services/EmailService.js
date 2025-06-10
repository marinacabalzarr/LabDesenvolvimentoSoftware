const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'joaop25042005@gmail.com', 
    pass: 'wqfg lavv bsqv vkwu'  
  }
});

async function enviarEmail(destinatario, assunto, corpo) {
  const mailOptions = {
    from: 'joaop25042005@gmail.com', 
    to: destinatario,
    subject: assunto,
    text: corpo
  };

  await transporter.sendMail(mailOptions);
}

module.exports = { enviarEmail };