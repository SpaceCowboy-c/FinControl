from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, Float   ##importa os tipos de dados para o SQLalchemy
from database.conexao import Base  ##importa a base para 

class Users(Base):
    __tablename__ = "users"   ##nome da tabela no banco

    id = Column(Integer, primary_key=True, index=True)  ##construção da tabela
    nome = Column(String(100), nullable=False)
    cpf = Column(String(11), nullable=False)
    email = Column(String(100), nullable=True)


class Categoria(Base):
    __tablename__ = "categoria"  ##nome da tabela no banco

    id = Column(Integer, primary_key=True, index=True)
    nome = Column(String(100), nullable=False)


class Transacao(Base):
    __tablename__ = "transacao"  ##nome da tabela no banco

    id = Column(Integer, primary_key=True, index=True)
    nome = Column(String(100), nullable=False)
    descricao = Column(String(500), nullable=False)
    data = Column(DateTime, nullable=False)
    valor = Column(Float, nullable=False)
    tipo = Column(String(50), nullable=False)
    

    categoria_id = Column(Integer, ForeignKey("categoria.id"), nullable=True)   # Relaciona a transação com uma categoria.