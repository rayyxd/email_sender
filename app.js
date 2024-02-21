const nodemailer = require('nodemailer');

//Создание транспорта для отправки
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'killme.rayyxd@gmail.com', // Логин отправителя
        pass: 'qrwp eumg rdic tghe' // Пароль отправителя
    }
});

// Настройки письма
let mailOptions = {
    from: 'killme.rayyxd@gmail.com', // Отправитель
    to: 'sybbka.of@mail.ru', // Получатель
    subject: 'Тест', // Тема письма
    text: 'Привет, это тестовое письмо!' // Текст письма
};

// Отправляем письмо
transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email отправлен: ' + info.response);
    }
});
