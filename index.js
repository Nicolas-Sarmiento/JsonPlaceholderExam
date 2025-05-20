import express from 'express';
import router from './routes/album_router.mjs';

const PORT = 3000;
const app = new express();

app.set("view engine", 'ejs')

app.use(express.json());
app.use('/album', router);

app.listen(PORT, () => {console.log(`Server running on port : ${PORT}`);});