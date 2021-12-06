-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-12-2021 a las 21:29:45
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `muebleria`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_acabado`
--

CREATE TABLE `tbl_acabado` (
  `id` int(11) NOT NULL,
  `nombre` text NOT NULL,
  `precio` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tbl_acabado`
--

INSERT INTO `tbl_acabado` (`id`, `nombre`, `precio`) VALUES
(5, 'Pintura Basica', 20),
(6, 'Barniz Premium', 50),
(7, 'Tallado ornamental pequeño', 100),
(8, 'Protectores para patas', 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_catalogo`
--

CREATE TABLE `tbl_catalogo` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `precio` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tbl_catalogo`
--

INSERT INTO `tbl_catalogo` (`id`, `nombre`, `precio`) VALUES
(1, 'Silla de Madera', 150),
(2, 'Mesa para comedor', 560),
(3, 'Mesa de te', 100);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_compra`
--

CREATE TABLE `tbl_compra` (
  `id` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `precioTotal` double NOT NULL,
  `catalogoId` int(11) NOT NULL,
  `usuarioId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tbl_compra`
--

INSERT INTO `tbl_compra` (`id`, `fecha`, `precioTotal`, `catalogoId`, `usuarioId`) VALUES
(4, '2021-12-04', 220, 1, 4),
(5, '2021-12-04', 660, 2, 4),
(7, '2021-12-04', 100, 3, 4),
(8, '2021-12-05', 250, 1, 4),
(9, '2021-12-05', 305, 1, 4),
(10, '2021-12-05', 660, 2, 4),
(11, '2021-12-05', 300, 1, 8);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_compra_acabado`
--

CREATE TABLE `tbl_compra_acabado` (
  `id` int(11) NOT NULL,
  `compraId` int(11) NOT NULL,
  `acabadoId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tbl_compra_acabado`
--

INSERT INTO `tbl_compra_acabado` (`id`, `compraId`, `acabadoId`) VALUES
(2, 4, 5),
(3, 4, 6),
(4, 5, 7),
(7, 8, 7),
(8, 9, 6),
(9, 9, 8),
(10, 9, 7),
(11, 10, 7),
(12, 11, 6),
(13, 11, 7);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_usuario`
--

CREATE TABLE `tbl_usuario` (
  `id` int(11) NOT NULL,
  `nombreCompleto` varchar(80) NOT NULL,
  `correo` varchar(60) NOT NULL,
  `password` varchar(40) NOT NULL,
  `tipo` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tbl_usuario`
--

INSERT INTO `tbl_usuario` (`id`, `nombreCompleto`, `correo`, `password`, `tipo`) VALUES
(4, 'luis', 'solaresluis@gmail.com', '68f42de4f50ee3633995ddedaa5e3ab3fe1d92bc', 'user'),
(8, 'luis ', 'solares@gmail.com', '68f42de4f50ee3633995ddedaa5e3ab3fe1d92bc', 'user');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tbl_acabado`
--
ALTER TABLE `tbl_acabado`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tbl_catalogo`
--
ALTER TABLE `tbl_catalogo`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tbl_compra`
--
ALTER TABLE `tbl_compra`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tbl_compra_ibfk_1` (`catalogoId`),
  ADD KEY `tbl_compra_ibfk_2` (`usuarioId`);

--
-- Indices de la tabla `tbl_compra_acabado`
--
ALTER TABLE `tbl_compra_acabado`
  ADD PRIMARY KEY (`id`),
  ADD KEY `compraId` (`compraId`),
  ADD KEY `acabadoId` (`acabadoId`);

--
-- Indices de la tabla `tbl_usuario`
--
ALTER TABLE `tbl_usuario`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `correo` (`correo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tbl_acabado`
--
ALTER TABLE `tbl_acabado`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `tbl_catalogo`
--
ALTER TABLE `tbl_catalogo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `tbl_compra`
--
ALTER TABLE `tbl_compra`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `tbl_compra_acabado`
--
ALTER TABLE `tbl_compra_acabado`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `tbl_usuario`
--
ALTER TABLE `tbl_usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `tbl_compra`
--
ALTER TABLE `tbl_compra`
  ADD CONSTRAINT `tbl_compra_ibfk_1` FOREIGN KEY (`catalogoId`) REFERENCES `tbl_catalogo` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  ADD CONSTRAINT `tbl_compra_ibfk_2` FOREIGN KEY (`usuarioId`) REFERENCES `tbl_usuario` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Filtros para la tabla `tbl_compra_acabado`
--
ALTER TABLE `tbl_compra_acabado`
  ADD CONSTRAINT `tbl_compra_acabado_ibfk_1` FOREIGN KEY (`compraId`) REFERENCES `tbl_compra` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `tbl_compra_acabado_ibfk_2` FOREIGN KEY (`acabadoId`) REFERENCES `tbl_acabado` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
