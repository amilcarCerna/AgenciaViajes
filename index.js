import express from 'express';
import router from './routes/routes.js'

const app = express();
const port = process.env.PORT || 5500;

//asignamos router a routes/routes.js
app.use('/', router);

//habilitamos el HTML engine
app.set('view engine', 'pug');



//middleware para llamar a recursos publicos
app.use(express.static('public'));

//middleware - valores actuales
app.use((req, res, next) => {
    const currentDate = new Date();
    res.locals.currentYear = currentDate.getFullYear();
    res.locals.siteName = 'Agencia de Viajes';
    return next();
});

app.listen(port, () => {
    console.log(`El servidor está funcionando en el puerto ${port}.`);
});

