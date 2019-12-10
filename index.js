import express from 'express';
import expressHttp from 'express-graphql';
import {schema} from './connection/schema';

const app = express();
app.get('/', (req, res) => {
    res.send('Graphql is good!!!');
});

app.use('/graphql', expressHttp({
    schema,
    graphiql: true
}));

app.listen(8080, () => console.log('Server running on port 8080'));