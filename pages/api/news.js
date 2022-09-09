import pool from '../../backend/server'

export default function handler(req, res, next) {
    if(req.method === 'GET'){
        pool.query('SELECT * FROM news').then((data) =>{
            res.send(data.rows);
        })
        .catch(next);
    }
  }
  