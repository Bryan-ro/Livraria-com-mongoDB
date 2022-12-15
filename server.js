import app from './src/app.js'
const port = process.env.PORT || 5500

app.listen(port, () => {
    console.log(`Serividor rodando em http://localhost/${port}`);
});