from fastapi import FastAPI  ##importa o framework

from database.conexao import Base, engine ##importamos o engine que é a conexão com o bd
from models import classes  ##importa as classes

Base.metadata.create_all(bind=engine)  
# Base é onde estão registradas todas as tabelas
# O metadata contém todas as informações sobre essas tabelas
# Creat_all le as informações e transforma em SQL

app = FastAPI() ##objeto que será utilizado pelo Uvicorn