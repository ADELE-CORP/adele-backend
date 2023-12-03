import express from 'express';
import FeatureModel, { dbConnect } from './db';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());

(async () => {
    await dbConnect();
})();

app.get('/data', async (req, res) => {
    try {
        const data = await FeatureModel.find();
        console.log(data);
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send('Error fetching data from MongoDB');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
