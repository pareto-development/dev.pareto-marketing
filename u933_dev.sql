-- phpMyAdmin SQL Dump
-- version 4.2.12deb2+deb8u1
-- http://www.phpmyadmin.net
--
-- Хост: localhost
-- Время создания: Мар 21 2016 г., 22:19
-- Версия сервера: 10.0.23-MariaDB-1~jessie
-- Версия PHP: 5.6.17-0+deb8u1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- База данных: `u933_dev`
--

-- --------------------------------------------------------

--
-- Структура таблицы `client`
--

CREATE TABLE IF NOT EXISTS `client` (
`id` int(2) NOT NULL,
  `name` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `url` text NOT NULL,
  `email` text NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `client`
--

INSERT INTO `client` (`id`, `name`, `phone`, `url`, `email`) VALUES
(1, 'first', '', '', ''),
(2, 'second', '', '', '');

-- --------------------------------------------------------

--
-- Структура таблицы `clients`
--

CREATE TABLE IF NOT EXISTS `clients` (
`id` int(2) NOT NULL,
  `name` text NOT NULL,
  `adress` text NOT NULL,
  `login` text NOT NULL,
  `password` text NOT NULL,
  `info` text NOT NULL,
  `client` int(2) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `clients`
--

INSERT INTO `clients` (`id`, `name`, `adress`, `login`, `password`, `info`, `client`) VALUES
(1, ' Админка', 'http://dfg.ru/manager/', 'admin', 'asdgdasg', '', 1),
(2, 'Хостинг', 'https://cp.beget.ru', 'dfgdsfg', 'asdg', '', 2),
(4, 'FTP', '000.000.000.000', 'sdgdsg', '0r5%g#dsfg6^', '', 2),
(6, 'FTP', '000.000.000.000', 'dasgdasg', '4IBq5#Im', '', 1),
(12, 'админка', 'http://www.asdgasdg.com/bitrix', 'content', 'rjyntyn;ehyfk', '', 2),
(13, 'Хостинг', 'http://www.nic.ru', '562364', 'adsgdasg', '', 7),
(14, 'FTP сервер', 'ftp.asdgdasg.ru', 'asdgdgas_ftp', '1dfgdfsg', 'Port 	  21', 7),
(15, 'СУБД MySQL', '', 'asdgdsg_mysql', 'sadgdasg', '', 7),
(16, 'Админка', 'http://www.asdgdasg.ru/admin', 'admin', 'bn9zlJEPs3Dl1sAn', '', 7);

-- --------------------------------------------------------

--
-- Структура таблицы `dostup`
--

CREATE TABLE IF NOT EXISTS `dostup` (
`id` int(2) NOT NULL,
  `name` text NOT NULL,
  `adress` text NOT NULL,
  `login` text NOT NULL,
  `password` text NOT NULL,
  `info` text NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `dostup`
--

INSERT INTO `dostup` (`id`, `name`, `adress`, `login`, `password`, `info`) VALUES
(1, 'Наш хостинг', 'http://elasticweb.org/ru', 'asdgdasg@gmail.com', 'asdgdasgasdg', ''),
(2, 'Почта', 'http://mail.sadgdasg.org/', 'info@sadgdasg.ru', 'asdgdsg', ''),
(4, 'asdgdsg@yandex.ru', 'http://yandex.ru', 'sdgdasg', 'asdgdasgasdg', ''),
(11, 'FTP для разработки', 'indigo.elastictech.org', 'u933_dev', 'lZ32p237HWAWJCh', ''),
(12, 'БД для разработки', 'http://indigo.elastictech.org/phpmyadmin/', 'u933_dev', 'lZ32p237HWAWJCh', ''),
(13, 'Почта github', 'pareto.development@gmail.com', 'pareto.development@gmail.com', 'lZ32p237HWAWJCh', ''),
(14, 'Аккаунт github', 'pareto.development@gmail.com', 'pareto-development', 'lZ32p237HWAWJCh', '');

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE IF NOT EXISTS `users` (
`user_id` int(11) unsigned NOT NULL,
  `user_login` varchar(30) NOT NULL,
  `user_password` varchar(32) NOT NULL,
  `user_hash` varchar(32) NOT NULL,
  `user_ip` int(10) unsigned NOT NULL DEFAULT '0'
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`user_id`, `user_login`, `user_password`, `user_hash`, `user_ip`) VALUES
(3, '1', '1', '', 0);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `client`
--
ALTER TABLE `client`
 ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `clients`
--
ALTER TABLE `clients`
 ADD UNIQUE KEY `id` (`id`);

--
-- Индексы таблицы `dostup`
--
ALTER TABLE `dostup`
 ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
 ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `client`
--
ALTER TABLE `client`
MODIFY `id` int(2) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT для таблицы `clients`
--
ALTER TABLE `clients`
MODIFY `id` int(2) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=17;
--
-- AUTO_INCREMENT для таблицы `dostup`
--
ALTER TABLE `dostup`
MODIFY `id` int(2) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
MODIFY `user_id` int(11) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
