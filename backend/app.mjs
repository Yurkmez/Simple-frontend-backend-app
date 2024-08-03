import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
// import qs from 'querystring';
const app = express();
const PORT = 5000;

// ________ MIDDLEWARE _________________________________
// log info about request
app.use(morgan('tiny'));
// convert JSON object to usually JS object in POST, PUT, PATCH request
app.use(express.json());
// convert form data to usually JS object in POST, PUT, PATCH request
app.use(express.urlencoded({ extended: true }));
// { extended: true } использовано qs, ктр есть в node_modules
app.use(cors());
// _________________________________________________________
app.use((req, res) => {
    const personData = {
        name: 'I am',
        exist: true,
    };
    // response JSON object
    return res.json(personData);
});

app.listen(PORT, () => console.log(`Server is launched on port ${PORT}`));
