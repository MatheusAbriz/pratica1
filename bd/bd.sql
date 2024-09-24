create DATABASE escola;
use escola;

create table aluno(
  id_aluno int not null AUTO_INCREMENT,
  nome_aluno varchar(100) not null,
  email_aluno varchar(100) not null,
  PRIMARY KEY(id_aluno)
)
