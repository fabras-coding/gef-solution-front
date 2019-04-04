CREATE DATABASE  IF NOT EXISTS `gef_db` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `gef_db`;
-- MySQL dump 10.13  Distrib 8.0.11, for Win64 (x86_64)
--
-- Host: localhost    Database: gef_db
-- ------------------------------------------------------
-- Server version	8.0.11

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `consulta`
--

DROP TABLE IF EXISTS `consulta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `consulta` (
  `id_consulta` int(11) NOT NULL AUTO_INCREMENT,
  `id_secretaria` int(11) NOT NULL,
  `id_paciente` int(11) NOT NULL,
  `id_medico` int(11) NOT NULL,
  `id_especialidade` int(11) NOT NULL,
  `data_agendamento` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `data_realizacao` datetime NOT NULL,
  `gera_receita` tinyint(1) NOT NULL DEFAULT '0',
  `gera_retorno` tinyint(1) NOT NULL DEFAULT '0',
  `retorno` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id_consulta`),
  KEY `fk_secretaria_consulta` (`id_secretaria`),
  KEY `fk_pacience_consulta` (`id_paciente`),
  KEY `fk_medico_consulta` (`id_medico`),
  KEY `fk_especialidade_consulta` (`id_especialidade`),
  CONSTRAINT `fk_especialidade_consulta` FOREIGN KEY (`id_especialidade`) REFERENCES `especialidade` (`id_especialidade`),
  CONSTRAINT `fk_medico_consulta` FOREIGN KEY (`id_medico`) REFERENCES `medico` (`id_pessoa`),
  CONSTRAINT `fk_pacience_consulta` FOREIGN KEY (`id_paciente`) REFERENCES `paciente` (`id_pessoa`),
  CONSTRAINT `fk_secretaria_consulta` FOREIGN KEY (`id_secretaria`) REFERENCES `pessoa` (`id_pessoa`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `consulta`
--

LOCK TABLES `consulta` WRITE;
/*!40000 ALTER TABLE `consulta` DISABLE KEYS */;
/*!40000 ALTER TABLE `consulta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `especialidade`
--

DROP TABLE IF EXISTS `especialidade`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `especialidade` (
  `id_especialidade` int(11) NOT NULL AUTO_INCREMENT,
  `nome_especialidade` varchar(30) NOT NULL,
  `descricao_especialidade` varchar(100) DEFAULT NULL,
  `ativo` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id_especialidade`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `especialidade`
--

LOCK TABLES `especialidade` WRITE;
/*!40000 ALTER TABLE `especialidade` DISABLE KEYS */;
/*!40000 ALTER TABLE `especialidade` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estoque_medicamento`
--

DROP TABLE IF EXISTS `estoque_medicamento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `estoque_medicamento` (
  `id_estoque_medicamento` int(11) NOT NULL AUTO_INCREMENT,
  `id_medicamento` int(11) NOT NULL,
  `quantidade` int(11) NOT NULL,
  `vencimento` datetime NOT NULL,
  `procedencia` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id_estoque_medicamento`),
  KEY `fk_medicamento_estoque` (`id_medicamento`),
  CONSTRAINT `fk_medicamento_estoque` FOREIGN KEY (`id_medicamento`) REFERENCES `medicamento` (`id_medicamento`)
) ENGINE=InnoDB AUTO_INCREMENT=71 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estoque_medicamento`
--

LOCK TABLES `estoque_medicamento` WRITE;
/*!40000 ALTER TABLE `estoque_medicamento` DISABLE KEYS */;
INSERT INTO `estoque_medicamento` VALUES (59,68,12,'2019-12-11 00:00:00','a'),(60,69,200,'2019-03-02 00:00:00','doado do cento de Jundiaí'),(61,70,5,'2019-02-28 00:00:00','Uberaba'),(62,70,200,'2019-03-29 00:00:00','Doação.'),(63,70,50,'2019-04-24 00:00:00','Compra.'),(64,71,300,'2019-05-31 00:00:00','Doação do Centro Espírita de Jundiaí.'),(65,69,50,'2019-02-22 00:00:00','Teste'),(66,71,500,'2019-02-21 00:00:00','Teste 2'),(67,68,10,'2019-03-17 00:00:00','teste'),(68,72,100,'2019-03-31 00:00:00','teste'),(69,69,600,'2019-04-12 00:00:00','Doado pelo Fabrício'),(70,73,257,'2019-04-18 00:00:00','TEste');
/*!40000 ALTER TABLE `estoque_medicamento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `horario`
--

DROP TABLE IF EXISTS `horario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `horario` (
  `id_horario` int(11) NOT NULL AUTO_INCREMENT,
  `descricao_horario` int(11) NOT NULL,
  PRIMARY KEY (`id_horario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `horario`
--

LOCK TABLES `horario` WRITE;
/*!40000 ALTER TABLE `horario` DISABLE KEYS */;
/*!40000 ALTER TABLE `horario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `item_receita`
--

DROP TABLE IF EXISTS `item_receita`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `item_receita` (
  `id_item_receita` int(11) NOT NULL AUTO_INCREMENT,
  `id_receita` int(11) NOT NULL,
  `id_estoque_medicamento` int(11) NOT NULL,
  PRIMARY KEY (`id_item_receita`),
  KEY `fk_receita_item_receita` (`id_receita`),
  KEY `fk_estoque_item_receita` (`id_estoque_medicamento`),
  CONSTRAINT `fk_estoque_item_receita` FOREIGN KEY (`id_estoque_medicamento`) REFERENCES `estoque_medicamento` (`id_estoque_medicamento`),
  CONSTRAINT `fk_receita_item_receita` FOREIGN KEY (`id_receita`) REFERENCES `receita` (`id_receita`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item_receita`
--

LOCK TABLES `item_receita` WRITE;
/*!40000 ALTER TABLE `item_receita` DISABLE KEYS */;
/*!40000 ALTER TABLE `item_receita` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `medicamento`
--

DROP TABLE IF EXISTS `medicamento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `medicamento` (
  `id_medicamento` int(11) NOT NULL AUTO_INCREMENT,
  `guid` varchar(36) DEFAULT NULL,
  `nome_medicamento` varchar(150) NOT NULL,
  `id_tipo_medicamento` int(11) NOT NULL,
  `data_cadastro` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `observacao` varchar(300) DEFAULT NULL,
  `cadastro_completo` tinyint(1) NOT NULL DEFAULT '0',
  `ativo` tinyint(1) NOT NULL DEFAULT '0',
  `estoque_critico` int(11) NOT NULL,
  `nome_anvisa` varchar(150) NOT NULL,
  `id_principio_ativo` int(11) NOT NULL,
  `id_unidade_medida` int(11) NOT NULL,
  `id_via_administracao` int(11) NOT NULL,
  PRIMARY KEY (`id_medicamento`),
  KEY `fk_medicamento_tipo` (`id_tipo_medicamento`),
  KEY `fk_medicamento_principio_ativo` (`id_principio_ativo`),
  KEY `fk_medicamento_unidade_medida_idx` (`id_unidade_medida`),
  KEY `fk_medicamento_via_adm_idx` (`id_via_administracao`),
  CONSTRAINT `fk_medicamento_principio_ativo` FOREIGN KEY (`id_principio_ativo`) REFERENCES `principio_ativo` (`id_principio_ativo`),
  CONSTRAINT `fk_medicamento_tipo` FOREIGN KEY (`id_tipo_medicamento`) REFERENCES `tipo_medicamento` (`id_tipo_medicamento`),
  CONSTRAINT `fk_medicamento_unidade_medida` FOREIGN KEY (`id_unidade_medida`) REFERENCES `unidade_medida` (`id_unidade_medida`),
  CONSTRAINT `fk_medicamento_via_administracao` FOREIGN KEY (`id_via_administracao`) REFERENCES `via_administracao` (`id_via_administracao`)
) ENGINE=InnoDB AUTO_INCREMENT=74 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `medicamento`
--

LOCK TABLES `medicamento` WRITE;
/*!40000 ALTER TABLE `medicamento` DISABLE KEYS */;
INSERT INTO `medicamento` VALUES (68,'5318ba1e-4805-1052-3874-acfeb2104e7c','DIPIRONA',3,'0001-01-01 00:00:00','YELL',1,1,10,'DIPIRONA _manual_',1,3,10),(69,'f35c034a-a13d-a5e3-c228-7403b3f5c744','Passiflora',1,'0001-01-01 00:00:00','Teste',1,1,10,'Passiflora _manual_',1,1,10),(70,'6e60cc52-160f-f1bd-5899-2c1b57e43b01','Espinheira Santa',1,'0001-01-01 00:00:00','',1,1,10,'Espinheira Santa _manual_',1,2,10),(71,'1d01ce5e-6d1c-2507-f34d-e613aa6ab1aa','Quebra Pedra',1,'0001-01-01 00:00:00','Para problemas no rim.',1,1,20,'Quebra Pedra _manual_',1,2,10),(72,'d59adc8d-3350-ac01-ef67-11c6808c6e2c','Vovo Pedro',1,'0001-01-01 00:00:00','este',1,1,10,'Vovo Pedro _manual_',1,1,10),(73,'10f2d74d-c978-c89f-f48c-c1fea1c3b602','Teste',1,'0001-01-01 00:00:00','Teste',1,1,600,'Teste _manual_',1,1,11);
/*!40000 ALTER TABLE `medicamento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `medico`
--

DROP TABLE IF EXISTS `medico`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `medico` (
  `id_pessoa` int(11) NOT NULL AUTO_INCREMENT,
  `crm` varchar(15) NOT NULL,
  `id_horario` int(11) NOT NULL,
  PRIMARY KEY (`id_pessoa`),
  KEY `fk_medico_horario` (`id_horario`),
  CONSTRAINT `fk_medico_horario` FOREIGN KEY (`id_horario`) REFERENCES `horario` (`id_horario`),
  CONSTRAINT `fk_medico_pessoa` FOREIGN KEY (`id_pessoa`) REFERENCES `pessoa` (`id_pessoa`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `medico`
--

LOCK TABLES `medico` WRITE;
/*!40000 ALTER TABLE `medico` DISABLE KEYS */;
/*!40000 ALTER TABLE `medico` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notificacao`
--

DROP TABLE IF EXISTS `notificacao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `notificacao` (
  `id_notificacao` int(11) NOT NULL AUTO_INCREMENT,
  `id_tipo_notificacao` int(11) NOT NULL,
  `texto_notificacao` varchar(30) NOT NULL,
  `id_item_notificacao` int(11) NOT NULL,
  `objeto_notificacao` varchar(40) NOT NULL,
  PRIMARY KEY (`id_notificacao`),
  KEY `fk_tipo_pessoa_notificacao` (`id_tipo_notificacao`),
  CONSTRAINT `fk_tipo_pessoa_notificacao` FOREIGN KEY (`id_tipo_notificacao`) REFERENCES `tipo_pessoa` (`id_tipo_pessoa`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notificacao`
--

LOCK TABLES `notificacao` WRITE;
/*!40000 ALTER TABLE `notificacao` DISABLE KEYS */;
/*!40000 ALTER TABLE `notificacao` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `paciente`
--

DROP TABLE IF EXISTS `paciente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `paciente` (
  `id_pessoa` int(11) NOT NULL AUTO_INCREMENT,
  `data_expiracao` datetime NOT NULL,
  PRIMARY KEY (`id_pessoa`),
  CONSTRAINT `fk_paciente_pessoa` FOREIGN KEY (`id_pessoa`) REFERENCES `pessoa` (`id_pessoa`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `paciente`
--

LOCK TABLES `paciente` WRITE;
/*!40000 ALTER TABLE `paciente` DISABLE KEYS */;
/*!40000 ALTER TABLE `paciente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `parametro`
--

DROP TABLE IF EXISTS `parametro`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `parametro` (
  `id_parametro` int(11) NOT NULL AUTO_INCREMENT,
  `descricao_parametro` varchar(50) DEFAULT NULL,
  `valor` varchar(100) DEFAULT NULL,
  `tipo` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id_parametro`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `parametro`
--

LOCK TABLES `parametro` WRITE;
/*!40000 ALTER TABLE `parametro` DISABLE KEYS */;
INSERT INTO `parametro` VALUES (1,'dias_vencimento','20','int'),(2,'percentual_estoque','10','int');
/*!40000 ALTER TABLE `parametro` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pessoa`
--

DROP TABLE IF EXISTS `pessoa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `pessoa` (
  `id_pessoa` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(75) NOT NULL,
  `data_nascimento` datetime NOT NULL,
  `ativo` tinyint(4) NOT NULL DEFAULT '1',
  `cpf` varchar(15) NOT NULL,
  `tipo_pessoa` int(11) NOT NULL,
  PRIMARY KEY (`id_pessoa`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pessoa`
--

LOCK TABLES `pessoa` WRITE;
/*!40000 ALTER TABLE `pessoa` DISABLE KEYS */;
/*!40000 ALTER TABLE `pessoa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `principio_ativo`
--

DROP TABLE IF EXISTS `principio_ativo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `principio_ativo` (
  `id_principio_ativo` int(11) NOT NULL AUTO_INCREMENT,
  `nome_principio_ativo` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_principio_ativo`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `principio_ativo`
--

LOCK TABLES `principio_ativo` WRITE;
/*!40000 ALTER TABLE `principio_ativo` DISABLE KEYS */;
INSERT INTO `principio_ativo` VALUES (1,'TESTE'),(2,'Teste Post');
/*!40000 ALTER TABLE `principio_ativo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `receita`
--

DROP TABLE IF EXISTS `receita`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `receita` (
  `id_receita` int(11) NOT NULL AUTO_INCREMENT,
  `id_consulta` int(11) NOT NULL,
  `data_emissao` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_receita`),
  KEY `fk_consulta_receita` (`id_consulta`),
  CONSTRAINT `fk_consulta_receita` FOREIGN KEY (`id_consulta`) REFERENCES `consulta` (`id_consulta`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `receita`
--

LOCK TABLES `receita` WRITE;
/*!40000 ALTER TABLE `receita` DISABLE KEYS */;
/*!40000 ALTER TABLE `receita` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rel_medico_especialidade`
--

DROP TABLE IF EXISTS `rel_medico_especialidade`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `rel_medico_especialidade` (
  `id_rel_medico_especialidade` int(11) NOT NULL AUTO_INCREMENT,
  `id_medico` int(11) NOT NULL,
  `id_especialidade` int(11) NOT NULL,
  PRIMARY KEY (`id_rel_medico_especialidade`),
  KEY `fk_medico_especialidade` (`id_medico`),
  KEY `fk_especialidade_medico` (`id_especialidade`),
  CONSTRAINT `fk_especialidade_medico` FOREIGN KEY (`id_especialidade`) REFERENCES `especialidade` (`id_especialidade`),
  CONSTRAINT `fk_medico_especialidade` FOREIGN KEY (`id_medico`) REFERENCES `medico` (`id_pessoa`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rel_medico_especialidade`
--

LOCK TABLES `rel_medico_especialidade` WRITE;
/*!40000 ALTER TABLE `rel_medico_especialidade` DISABLE KEYS */;
/*!40000 ALTER TABLE `rel_medico_especialidade` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rel_pessoa_tipo_pessoa`
--

DROP TABLE IF EXISTS `rel_pessoa_tipo_pessoa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `rel_pessoa_tipo_pessoa` (
  `id_rel_pessoa_tipo_pessoa` int(11) NOT NULL AUTO_INCREMENT,
  `id_pessoa` int(11) NOT NULL,
  `id_tipo_pessoa` int(11) NOT NULL,
  PRIMARY KEY (`id_rel_pessoa_tipo_pessoa`),
  KEY `FK_rel_pessoa_tipo_pessoa` (`id_pessoa`),
  KEY `FK_rel_tipo_pessoa_pessoa` (`id_tipo_pessoa`),
  CONSTRAINT `FK_rel_pessoa_tipo_pessoa` FOREIGN KEY (`id_pessoa`) REFERENCES `pessoa` (`id_pessoa`),
  CONSTRAINT `FK_rel_tipo_pessoa_pessoa` FOREIGN KEY (`id_tipo_pessoa`) REFERENCES `tipo_pessoa` (`id_tipo_pessoa`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rel_pessoa_tipo_pessoa`
--

LOCK TABLES `rel_pessoa_tipo_pessoa` WRITE;
/*!40000 ALTER TABLE `rel_pessoa_tipo_pessoa` DISABLE KEYS */;
/*!40000 ALTER TABLE `rel_pessoa_tipo_pessoa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo_medicamento`
--

DROP TABLE IF EXISTS `tipo_medicamento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `tipo_medicamento` (
  `id_tipo_medicamento` int(11) NOT NULL AUTO_INCREMENT,
  `nome_tipo` varchar(30) NOT NULL,
  `ativo` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id_tipo_medicamento`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_medicamento`
--

LOCK TABLES `tipo_medicamento` WRITE;
/*!40000 ALTER TABLE `tipo_medicamento` DISABLE KEYS */;
INSERT INTO `tipo_medicamento` VALUES (1,'Fitoterapico',1),(2,'Homeopatico',1),(3,'Alopatico',1);
/*!40000 ALTER TABLE `tipo_medicamento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo_pessoa`
--

DROP TABLE IF EXISTS `tipo_pessoa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `tipo_pessoa` (
  `id_tipo_pessoa` int(11) NOT NULL AUTO_INCREMENT,
  `nome_tipo` varchar(20) NOT NULL,
  `ativo` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id_tipo_pessoa`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_pessoa`
--

LOCK TABLES `tipo_pessoa` WRITE;
/*!40000 ALTER TABLE `tipo_pessoa` DISABLE KEYS */;
/*!40000 ALTER TABLE `tipo_pessoa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo_transacao`
--

DROP TABLE IF EXISTS `tipo_transacao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `tipo_transacao` (
  `id_tipo_transacao` int(11) NOT NULL AUTO_INCREMENT,
  `descricao_tipo_transacao` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_tipo_transacao`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_transacao`
--

LOCK TABLES `tipo_transacao` WRITE;
/*!40000 ALTER TABLE `tipo_transacao` DISABLE KEYS */;
INSERT INTO `tipo_transacao` VALUES (1,'Saida'),(2,'Estorno');
/*!40000 ALTER TABLE `tipo_transacao` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transacao`
--

DROP TABLE IF EXISTS `transacao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `transacao` (
  `id_transacao` int(11) NOT NULL AUTO_INCREMENT,
  `id_medicamento` int(11) DEFAULT NULL,
  `id_receita` int(11) DEFAULT NULL,
  `id_estoque_medicamento` int(11) DEFAULT NULL,
  `id_tipo_transacao` int(11) DEFAULT NULL,
  `data_transacao` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `quantidade` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_transacao`),
  KEY `id_medicamento` (`id_medicamento`),
  KEY `id_tipo_transacao` (`id_tipo_transacao`),
  KEY `id_estoque_medicamento` (`id_estoque_medicamento`),
  CONSTRAINT `transacao_ibfk_1` FOREIGN KEY (`id_medicamento`) REFERENCES `medicamento` (`id_medicamento`),
  CONSTRAINT `transacao_ibfk_2` FOREIGN KEY (`id_tipo_transacao`) REFERENCES `tipo_transacao` (`id_tipo_transacao`),
  CONSTRAINT `transacao_ibfk_3` FOREIGN KEY (`id_estoque_medicamento`) REFERENCES `estoque_medicamento` (`id_estoque_medicamento`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transacao`
--

LOCK TABLES `transacao` WRITE;
/*!40000 ALTER TABLE `transacao` DISABLE KEYS */;
INSERT INTO `transacao` VALUES (1,73,1,70,1,'2019-04-04 01:46:18',20),(2,73,1,70,1,'2019-04-04 02:17:12',20),(3,73,1,70,1,'2019-04-04 02:23:06',-123),(4,73,1,70,1,'2019-04-04 02:23:47',-120);
/*!40000 ALTER TABLE `transacao` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `unidade_medida`
--

DROP TABLE IF EXISTS `unidade_medida`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `unidade_medida` (
  `id_unidade_medida` int(11) NOT NULL AUTO_INCREMENT,
  `descricao_unidade_medida` varchar(45) NOT NULL,
  PRIMARY KEY (`id_unidade_medida`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `unidade_medida`
--

LOCK TABLES `unidade_medida` WRITE;
/*!40000 ALTER TABLE `unidade_medida` DISABLE KEYS */;
INSERT INTO `unidade_medida` VALUES (1,'Miligramas'),(2,'Mililitros'),(3,'Comprimidos'),(4,'Teste Post');
/*!40000 ALTER TABLE `unidade_medida` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `usuario` (
  `id_usuario` int(11) NOT NULL AUTO_INCREMENT,
  `id_pessoa` int(11) NOT NULL,
  `login` varchar(25) NOT NULL,
  `senha` varchar(25) NOT NULL,
  `root_user` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id_usuario`),
  UNIQUE KEY `login` (`login`),
  KEY `fk_pessoa_usuario` (`id_pessoa`),
  CONSTRAINT `fk_pessoa_usuario` FOREIGN KEY (`id_pessoa`) REFERENCES `pessoa` (`id_pessoa`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `via_administracao`
--

DROP TABLE IF EXISTS `via_administracao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `via_administracao` (
  `id_via_administracao` int(11) NOT NULL AUTO_INCREMENT,
  `descricao_via_administracao` varchar(45) NOT NULL,
  PRIMARY KEY (`id_via_administracao`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `via_administracao`
--

LOCK TABLES `via_administracao` WRITE;
/*!40000 ALTER TABLE `via_administracao` DISABLE KEYS */;
INSERT INTO `via_administracao` VALUES (10,'ORAL'),(11,'SUBLINGUAL'),(12,'RETAL'),(13,'INTRADÉRMICA'),(14,'SUBCUTÂNEA'),(15,'INTRAMUSCULAR'),(16,'ENDOVENOSA'),(17,'RESPIRATÓRIA'),(18,'OCULAR'),(19,'INTRANASAL'),(20,'AURICULAR'),(21,'VAGINAL');
/*!40000 ALTER TABLE `via_administracao` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'gef_db'
--

--
-- Dumping routines for database 'gef_db'
--
/*!50003 DROP PROCEDURE IF EXISTS `alterMedicamento` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `alterMedicamento`(
IN idMedicamento INT,
 IN nomeMedicamento VARCHAR(150)
, IN observacao VARCHAR(300)
, IN ativo TINYINT
, IN estoqueCritico INT
, IN nomeAnvisa VARCHAR(150)
, IN idPrincipioAtivo INT
, IN idUnidadeMedida INT
, IN idViaAdministracao INT
)
BEGIN
UPDATE  `gef_db`.`medicamento`
SET `nome_medicamento` = nomeMedicamento
, `observacao` = observacao
, `ativo` = ativo
, `estoque_critico` = estoqueCritico
, `nome_anvisa` = nomeAnvisa
, `id_principio_ativo` = idPrincipioAtivo
, `id_unidade_medida` = idUnidadeMedida
, `id_via_administracao` = idViaAdministracao
 WHERE `id_medicamento` =  idMedicamento;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `alterParametro` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `alterParametro`(IN valor VARCHAR(100), IN id INT)
BEGIN
UPDATE `gef_db`.`parametro`
SET
`valor` = valor
WHERE `id_parametro` =id;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getEstoque` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getEstoque`(IN idMedicamento INT)
BEGIN
SELECT 
	 E.id_estoque_medicamento AS 'idEstoque'
	, E.quantidade as 'quantidadeEstoque'
	, E.vencimento as 'vencimento'
    , E.procedencia AS 'procedencia'
	, M.id_medicamento as 'id'
    , M.nome_medicamento AS 'nomeMedicamento'
    , M.guid AS 'guid'
	, M.data_cadastro  AS 'dataCadastro'
	, M.observacao AS 'observacao'
	, M.cadastro_completo AS 'cadastroCompleto'
	, M.ativo AS 'ativo'
	, M.estoque_critico as 'quantidadeEstoqueCritico'
	, M.nome_anvisa as 'nomeAnvisa'
    , TM.id_tipo_medicamento AS 'idTipoMedicamento'
	, TM.nome_tipo 'nomeTipoMedicamento'
	, P.id_principio_ativo as 'idPrincipioAtivo'
	, P.nome_principio_ativo as 'nomePrincipioAtivo'
	, UM.id_unidade_medida as 'idUnidadeMedida'
	, UM.descricao_unidade_medida AS 'descricaoUnidadeMedida'
	, VA.id_via_administracao AS 'idViaAdministracao'
	, VA.descricao_via_administracao AS 'descricaoViaAdministracao'
 FROM gef_db.estoque_medicamento AS E
 INNER JOIN gef_db.medicamento AS M ON E.id_medicamento = M.id_medicamento
 INNER JOIN gef_db.principio_ativo AS P ON M.id_principio_ativo = P.id_principio_ativo
 INNER JOIN gef_db.tipo_medicamento AS TM ON M.id_tipo_medicamento = TM.id_tipo_medicamento
 INNER JOIN gef_db.unidade_medida AS UM ON M.id_unidade_medida = UM.id_unidade_medida
 INNER JOIN gef_db.via_administracao AS VA ON M.id_via_administracao = VA.id_via_administracao
 WHERE (idMedicamento is NULL OR E.id_medicamento = idMedicamento)
 ;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getMedicamento` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getMedicamento`(IN idMedicamento INT)
BEGIN

SELECT  
M.id_medicamento AS 'id'
,M.guid AS 'guid'
, M.nome_medicamento AS 'nomeMedicamento'
, M.data_cadastro  AS 'dataCadastro'

, M.observacao AS 'observacao'
, M.cadastro_completo AS 'cadastroCompleto'
, M.ativo AS 'ativo'
, M.estoque_critico as 'quantidadeEstoqueCritico'
, M.nome_anvisa as 'nomeAnvisa'
, TM.id_tipo_medicamento AS 'idTipoMedicamento'
, TM.nome_tipo 'nomeTipoMedicamento'
, P.id_principio_ativo as 'idPrincipioAtivo'
, P.nome_principio_ativo as 'nomePrincipioAtivo'
, UM.id_unidade_medida as 'idUnidadeMedida'
, UM.descricao_unidade_medida AS 'descricaoUnidadeMedida'
, VA.id_via_administracao AS 'idViaAdministracao'
, VA.descricao_via_administracao AS 'descricaoViaAdministracao'
FROM gef_db.medicamento AS M
INNER JOIN gef_db.principio_ativo AS P ON M.id_principio_ativo = P.id_principio_ativo
INNER JOIN gef_db.tipo_medicamento AS TM ON M.id_tipo_medicamento = TM.id_tipo_medicamento
INNER JOIN gef_db.unidade_medida AS UM ON M.id_unidade_medida = UM.id_unidade_medida
INNER JOIN gef_db.via_administracao AS VA ON M.id_via_administracao = VA.id_via_administracao
WHERE (idMedicamento IS NULL OR idMedicamento = M.id_medicamento) 
;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getParametro` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getParametro`(IN idParametro INT)
BEGIN
SELECT P.id_parametro as 'idParametro',
   P.descricao_parametro as 'descricao',
    P.valor as 'valor',
     P.tipo as 'tipo'
FROM `gef_db`.`parametro` AS P
WHERE (idParametro is NULL OR P.id_parametro = idParametro)
;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getPrincipioAtivo` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getPrincipioAtivo`()
BEGIN
SELECT id_principio_ativo as 'idPrincipioAtivo', nome_principio_ativo as 'nomePrincipioAtivo'
FROM `gef_db`.`principio_ativo`;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getTipoMedicamento` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getTipoMedicamento`()
BEGIN

SELECT id_tipo_medicamento AS 'idTipoMedicamento', nome_tipo AS 'nomeTipoMedicamento', ativo
FROM `gef_db`.`tipo_medicamento`;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getUnidadeMedida` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getUnidadeMedida`()
BEGIN
SELECT id_unidade_medida as 'idUnidadeMedida', descricao_unidade_medida as 'descricaoUnidadeMedida'
FROM `gef_db`.`unidade_medida`;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getViaAdministracao` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getViaAdministracao`()
BEGIN
SELECT id_via_administracao AS 'idViaAdministracao', descricao_via_administracao AS 'descricaoViaAdministracao'
FROM `gef_db`.`via_administracao`;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `setEstoque` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `setEstoque`(
IN idMedicamento int
,IN quantidade int
,IN vencimento dateTime
,IN procedencia VARCHAR(200)
)
BEGIN
INSERT INTO `gef_db`.`estoque_medicamento`
(
`id_medicamento`,
`quantidade`,
`vencimento`,
`procedencia`)
VALUES
(idMedicamento,
quantidade,
vencimento,
procedencia);

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `setMedicamento` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `setMedicamento`(
 IN nomeMedicamento VARCHAR(150)
, IN idTipoMedicamento INT
, IN dataCadastro DATETIME
, IN observacao VARCHAR(300)
, IN cadastroCompleto TINYINT
, IN ativo TINYINT
, IN estoqueCritico INT
, IN nomeAnvisa VARCHAR(150)
, IN idPrincipioAtivo INT
, IN idUnidadeMedida INT
, IN idViaAdministracao INT
, IN guid varchar(36)
)
BEGIN
INSERT INTO `gef_db`.`medicamento`
(
`nome_medicamento`,
`id_tipo_medicamento`,
`data_cadastro`,
`observacao`,
`cadastro_completo`,
`ativo`,
`estoque_critico`,
`nome_anvisa`,
`id_principio_ativo`,
`id_unidade_medida`,
`id_via_administracao`,
`guid` )
VALUES
(
nomeMedicamento,
idTipoMedicamento,
dataCadastro,
observacao,
cadastroCompleto,
ativo,
estoqueCritico,
nomeAnvisa,
idPrincipioAtivo,
idUnidadeMedida,
idViaAdministracao,
guid);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `setPrincipioAtivo` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `setPrincipioAtivo`(IN nomePrincipioAtivo VARCHAR(100))
BEGIN
INSERT INTO `gef_db`.`principio_ativo`
(`nome_principio_ativo`)
VALUES
(nomePrincipioAtivo);

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `setTransacao` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `setTransacao`(
IN idMedicamento INT
,IN idEstoque INT
,IN idTipoTransacao INT
,IN idReceita INT
,IN dataTransacao DATETIME
,IN quantidadeTransacao INT

)
BEGIN

UPDATE `gef_db`.`estoque_medicamento`
SET `quantidade` = `quantidade`+ quantidadeTransacao
WHERE `id_estoque_medicamento` = idEstoque AND `id_medicamento` = idMedicamento;

INSERT INTO `gef_db`.`transacao`
(
`id_medicamento`,
`id_receita`,
`id_tipo_transacao`,
`quantidade`,
`id_estoque_medicamento`)
VALUES
(
idMedicamento,
idReceita,
idTipoTransacao,
quantidadeTransacao,
idEstoque);

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `setUnidadeMedida` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `setUnidadeMedida`(IN descricaoUnidadeMedida VARCHAR(45))
BEGIN
INSERT INTO `gef_db`.`unidade_medida`
(
`descricao_unidade_medida`)
VALUES
(descricaoUnidadeMedida);

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `setViaAdministracao` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `setViaAdministracao`(IN descricaoViaAdministracao VARCHAR(45) )
BEGIN
	INSERT INTO `gef_db`.`via_administracao`
	(`descricao_via_administracao`)
	VALUES
	(descricaoViaAdministracao);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-04-03 23:27:49
