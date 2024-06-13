-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jun 13, 2024 at 06:49 AM
-- Server version: 8.0.30
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `games_players`
--

-- --------------------------------------------------------

--
-- Table structure for table `hanged`
--

CREATE TABLE `hanged` (
  `id` int NOT NULL,
  `name` varchar(100) NOT NULL,
  `score` int NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `hanged`
--

INSERT INTO `hanged` (`id`, `name`, `score`) VALUES
(6, 'ale', 0);

-- --------------------------------------------------------

--
-- Table structure for table `pandemic`
--

CREATE TABLE `pandemic` (
  `id` int NOT NULL,
  `name` varchar(100) NOT NULL,
  `score` int NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `pandemic`
--

INSERT INTO `pandemic` (`id`, `name`, `score`) VALUES
(7, 'ale', 3707);

-- --------------------------------------------------------

--
-- Table structure for table `player`
--

CREATE TABLE `player` (
  `id_player` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `lastname` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `stage_1` int DEFAULT '0',
  `stage_2` int DEFAULT '0',
  `stage_3` int DEFAULT '0',
  `stage_4` int DEFAULT '0',
  `stage_5` int DEFAULT '0',
  `stage_6` int DEFAULT '0',
  `stage_7` int DEFAULT '0',
  `stage_8` int DEFAULT '0',
  `stage_9` int DEFAULT '0',
  `stage_10` int DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `player`
--

INSERT INTO `player` (`id_player`, `name`, `lastname`, `stage_1`, `stage_2`, `stage_3`, `stage_4`, `stage_5`, `stage_6`, `stage_7`, `stage_8`, `stage_9`, `stage_10`) VALUES
(10, 'ale', NULL, 15, 9, 49, 4, 0, 3, 8, 0, 31, 0);

-- --------------------------------------------------------

--
-- Table structure for table `puzzle`
--

CREATE TABLE `puzzle` (
  `id` int NOT NULL,
  `name` varchar(100) NOT NULL,
  `score` int NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `puzzle`
--

INSERT INTO `puzzle` (`id`, `name`, `score`) VALUES
(8, 'ale', 374);

-- --------------------------------------------------------

--
-- Table structure for table `question`
--

CREATE TABLE `question` (
  `id` int NOT NULL,
  `name` varchar(100) NOT NULL,
  `lvl` int NOT NULL DEFAULT '0',
  `min` int NOT NULL DEFAULT '99',
  `sec` int NOT NULL DEFAULT '60'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `question`
--

INSERT INTO `question` (`id`, `name`, `lvl`, `min`, `sec`) VALUES
(8, 'ale', 4, 1, 59);

-- --------------------------------------------------------

--
-- Table structure for table `running`
--

CREATE TABLE `running` (
  `id` int NOT NULL,
  `name` varchar(50) NOT NULL,
  `score` int NOT NULL DEFAULT '0',
  `gold` int NOT NULL DEFAULT '0',
  `Iupgrade` text CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `running`
--

INSERT INTO `running` (`id`, `name`, `score`, `gold`, `Iupgrade`) VALUES
(6, 'ale', 1036, 373, '1,0,0,0,0');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `username` varchar(20) NOT NULL,
  `pass` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `pass`) VALUES
(19, 'ale', '$2y$10$MNUR4ZSjUrEYNv8AVwKXDOV7dZ9PS9YcX2XzU2GCcPvHZwr8OXx1W');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `hanged`
--
ALTER TABLE `hanged`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pandemic`
--
ALTER TABLE `pandemic`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `player`
--
ALTER TABLE `player`
  ADD PRIMARY KEY (`id_player`);

--
-- Indexes for table `puzzle`
--
ALTER TABLE `puzzle`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `question`
--
ALTER TABLE `question`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `running`
--
ALTER TABLE `running`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `hanged`
--
ALTER TABLE `hanged`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `pandemic`
--
ALTER TABLE `pandemic`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `player`
--
ALTER TABLE `player`
  MODIFY `id_player` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `puzzle`
--
ALTER TABLE `puzzle`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `question`
--
ALTER TABLE `question`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `running`
--
ALTER TABLE `running`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
