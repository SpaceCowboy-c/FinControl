from sqlalchemy import Column, Integer, String, Numeric, DateTime, ForeignKey, Float
from app.database import Base

class Users(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    nome = Column(String(100), nullable=False)
    cpf = Column(String(11), nullable=False)
    email = Column(String(100), nullable=True)


class Categoria(Base):
    __tablename__ = "categoria"

    id = Column(Integer, primary_key=True, index=True)
    nome = Column(String(100), nullable=False)


class Transacao(Base):
    __tablename__ = "transacao"

    id = Column(Integer, primary_key=True, index=True)
    nome = Column(String(100), nullable=False)
    descricao = Column(String(500), nullable=False)
    data = Column(DateTime, nullable=False)
    valor = Column(Float, nullable=False)
    tipo = Column(String(50), nullable=False)
    
    # Chaves Estrangeiras (relacionando com as tabelas acima)
    categoria_id = Column(Integer, ForeignKey("categoria.id"), nullable=True)
    usuario_id = Column(Integer, ForeignKey("users.id"), nullable=True)