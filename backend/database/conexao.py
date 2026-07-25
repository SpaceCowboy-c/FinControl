import os   ## utilizado para ler as variáveis de ambiente

from dotenv import load_dotenv  ## carrega o conteudo do .env
from sqlalchemy import create_engine  ## cria a conexão entre sua aplicação e o banco de dados
from sqlalchemy.orm import declarative_base, sessionmaker  ## ferramentas

load_dotenv()  # Carrega as variáveis do arquivo .env


DB_HOST = os.getenv("DB_HOST")
DB_PORT = os.getenv("DB_PORT")
DB_NAME = os.getenv("DB_NAME")
DB_USER = os.getenv("DB_USER")
DB_PASSWORD = os.getenv("DB_PASSWORD")


DATABASE_URL = (
     f"postgresql+psycopg2://{DB_USER}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}" # String de conexão com o PostgreSQL
)

engine = create_engine(DATABASE_URL)  # Cria a conexão com o banco

SessionLocal = sessionmaker(  # Cria as sessões de conexão
    autocommit=False,
    autoflush=False,
    bind=engine
)

Base = declarative_base() # Classe base para os modelos