const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const db = require('./utils/database');
const userRouter = require('./routes/users.routes');
const initModels = require('./models/init.models');
const messageRouter = require('./routes/message.routes');
const typeRouter = require('./routes/type.router');
const conversationRouter = require('./routes/conversation.routes');
const app = express();

const PORT = 1603;

initModels();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

db.authenticate()
    .then(() => {
        console.log('Base de Datos conectada');
    })
    .catch((error) => console.log(error));

db.sync({ alter: true }) // ? alter, permite alterar los atributos
    .then(() => {
        console.log('Base de datos sincronizada')
    })
    .catch((error) => console.log(error));

app.use(userRouter);
app.use(messageRouter);
app.use(typeRouter);
app.use(conversationRouter);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
