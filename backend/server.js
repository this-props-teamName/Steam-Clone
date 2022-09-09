// import express from 'express';
import pg from 'pg';
// import cors from 'cors';



//configuration
// const app = express();
const PORT = process.env.PORT || 4000;
const pool = new pg.Pool({
    user: '1002c',
    password: 'Zelda@1002',
    connectionString: process.env.DATABASE_URL,
    ...(process.env.NODE_ENV === "production" 
    ? {
        ssl: {
            rejectUnauthorized: false
        }
    }
    : {}),
});

console.log(process.env.DATABASE_URL)
// //middleware for json data, cors, and static file
// app.use(express.static("static")); // No static file - this might cause issues
// app.use(express.json());
// app.use(cors());

// //middleware for code 404 errors
// const unknownHTTP = (req, res, next) => {
//     res.sendStatus(404);
//     next();
// };

// //////////////////////////////////////////////////////////////////////////////////
// //Get requests for all 7 of our tables
// //////////////////////////////////////////////////////////////////////////////////
// app.get('/api/game', (req, res, next) =>{
//     pool.query('SELECT * FROM game').then((data) =>{
//         res.send(data.rows);
//     })
//     .catch(next);
// })

// app.get('/api/gameInfo', (req, res, next) =>{
//     pool.query('SELECT * FROM gameInfo').then((data) =>{
//         res.send(data.rows);
//     })
//     .catch(next);
// })

// app.get('/api/carousel', (req, res, next) =>{
//     pool.query('SELECT * FROM carousel').then((data) =>{
//         res.send(data.rows);
//     })
//     .catch(next);
// })

// app.get('/api/min', (req, res, next) =>{
//     pool.query('SELECT * FROM min').then((data) =>{
//         res.send(data.rows);
//     })
//     .catch(next);
// })

// app.get('/api/req', (req, res, next) =>{
//     pool.query('SELECT * FROM req').then((data) =>{
//         res.send(data.rows);
//     })
//     .catch(next);
// })

// app.get('/api/comments', (req, res, next) =>{
//     pool.query('SELECT * FROM comments').then((data) =>{
//         res.send(data.rows);
//     })
//     .catch(next);
// })

// app.get('/api/logIn', (req, res, next) =>{
//     pool.query('SELECT * FROM logIn').then((data) =>{
//         res.send(data.rows);
//     })
//     .catch(next);
// })










// //middleware for code 404 errors
// app.use(unknownHTTP);

// //defines port
// app.listen(PORT, () => {
//     console.log(`Listening on port ${PORT}`)
// });

// //middleware for code 500 errors
// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.sendStatus(500)
// })

export default pool