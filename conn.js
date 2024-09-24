import mysql from 'mysql2'
const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "fatec123",
    database: "escola"
})

conn.connect()

export default conn;