import conn from './conn.js';

class Crud{
    inserirAluno(aluno, callback){
        let sql = "insert into aluno set ?"
        conn.query(sql, aluno, function(error, results, fields){
            if(error) throw error;
            callback(results);
        })
    }

    selecionarAluno(id, callback){
        let sql = "select * from aluno where id_aluno = ?";
        conn.query(sql, id, function(error, results, fields){
            if(error) throw error;
            callback(results);
        })
    }
}

export default Crud;