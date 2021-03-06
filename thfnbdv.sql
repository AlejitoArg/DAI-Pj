USE [master]
GO
/****** Object:  Database [Pj]    Script Date: 31/5/2022 09:08:04 ******/
CREATE DATABASE [Pj]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'Pj', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\Pj.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'Pj_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\Pj_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [Pj] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [Pj].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [Pj] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [Pj] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [Pj] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [Pj] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [Pj] SET ARITHABORT OFF 
GO
ALTER DATABASE [Pj] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [Pj] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [Pj] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [Pj] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [Pj] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [Pj] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [Pj] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [Pj] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [Pj] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [Pj] SET  DISABLE_BROKER 
GO
ALTER DATABASE [Pj] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [Pj] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [Pj] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [Pj] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [Pj] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [Pj] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [Pj] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [Pj] SET RECOVERY FULL 
GO
ALTER DATABASE [Pj] SET  MULTI_USER 
GO
ALTER DATABASE [Pj] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [Pj] SET DB_CHAINING OFF 
GO
ALTER DATABASE [Pj] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [Pj] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [Pj] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'Pj', N'ON'
GO
ALTER DATABASE [Pj] SET QUERY_STORE = OFF
GO
USE [Pj]
GO
/****** Object:  User [alumno]    Script Date: 31/5/2022 09:08:04 ******/
CREATE USER [alumno] FOR LOGIN [alumno] WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  Table [dbo].[PelOser]    Script Date: 31/5/2022 09:08:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PelOser](
	[IDpelOser] [int] IDENTITY(1,1) NOT NULL,
	[Imagen] [varchar](50) NULL,
	[Titulo] [varchar](50) NULL,
	[FechaCreacion] [varchar](50) NULL,
	[Calificacion] [varchar](50) NULL,
 CONSTRAINT [PK_PelOser] PRIMARY KEY CLUSTERED 
(
	[IDpelOser] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PerPelOser]    Script Date: 31/5/2022 09:08:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PerPelOser](
	[IDperPelOser] [int] IDENTITY(1,1) NOT NULL,
	[IDpelOser] [int] NOT NULL,
	[IDpersonaje] [int] NOT NULL,
 CONSTRAINT [PK_PerPelOser] PRIMARY KEY CLUSTERED 
(
	[IDperPelOser] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Personajes]    Script Date: 31/5/2022 09:08:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Personajes](
	[IDpersonaje] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](50) NULL,
	[Imagen] [varchar](50) NULL,
	[Edad] [varchar](50) NULL,
	[Peso] [varchar](50) NULL,
	[Historia] [varchar](50) NULL,
 CONSTRAINT [PK_Personajes] PRIMARY KEY CLUSTERED 
(
	[IDpersonaje] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[PelOser] ON 

INSERT [dbo].[PelOser] ([IDpelOser], [Imagen], [Titulo], [FechaCreacion], [Calificacion]) VALUES (1, N'a', N'a', N'aa', N'a')
INSERT [dbo].[PelOser] ([IDpelOser], [Imagen], [Titulo], [FechaCreacion], [Calificacion]) VALUES (2, N'b', N'b', N'b', N'b')
INSERT [dbo].[PelOser] ([IDpelOser], [Imagen], [Titulo], [FechaCreacion], [Calificacion]) VALUES (3, N'c', N'c', N'c', N'c')
SET IDENTITY_INSERT [dbo].[PelOser] OFF
GO
SET IDENTITY_INSERT [dbo].[PerPelOser] ON 

INSERT [dbo].[PerPelOser] ([IDperPelOser], [IDpelOser], [IDpersonaje]) VALUES (1, 1, 2)
INSERT [dbo].[PerPelOser] ([IDperPelOser], [IDpelOser], [IDpersonaje]) VALUES (2, 1, 3)
INSERT [dbo].[PerPelOser] ([IDperPelOser], [IDpelOser], [IDpersonaje]) VALUES (3, 2, 1)
INSERT [dbo].[PerPelOser] ([IDperPelOser], [IDpelOser], [IDpersonaje]) VALUES (4, 2, 3)
INSERT [dbo].[PerPelOser] ([IDperPelOser], [IDpelOser], [IDpersonaje]) VALUES (5, 3, 1)
INSERT [dbo].[PerPelOser] ([IDperPelOser], [IDpelOser], [IDpersonaje]) VALUES (6, 3, 2)
SET IDENTITY_INSERT [dbo].[PerPelOser] OFF
GO
SET IDENTITY_INSERT [dbo].[Personajes] ON 

INSERT [dbo].[Personajes] ([IDpersonaje], [Nombre], [Imagen], [Edad], [Peso], [Historia]) VALUES (1, N'd', N'd', N'd', N'dd', N'd')
INSERT [dbo].[Personajes] ([IDpersonaje], [Nombre], [Imagen], [Edad], [Peso], [Historia]) VALUES (2, N'e', N'e', N'ee', N'e', N'e')
INSERT [dbo].[Personajes] ([IDpersonaje], [Nombre], [Imagen], [Edad], [Peso], [Historia]) VALUES (3, N'f', N'f', N'f', N'f', N'f')
SET IDENTITY_INSERT [dbo].[Personajes] OFF
GO
USE [master]
GO
ALTER DATABASE [Pj] SET  READ_WRITE 
GO
