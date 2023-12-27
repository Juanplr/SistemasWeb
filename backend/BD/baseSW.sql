create database ejemplo;

use ejemplo;

drop table usuarios;

create table usuarios(
id integer auto_increment primary key,
nombreUsuario varchar(100),
nombre varchar(100),
password varchar(100),
telefono varchar(100)
); 

drop table producto;

create table  producto(
id integer primary key AUTO_INCREMENT,
nombreProducto varchar(30) not null,
precio double not null,
cantidad integer,
imagen varchar(300)
);

drop table vende;

create table vende(
idVende integer auto_increment,
idProducto integer,
idUsuario integer,
ubicacion varchar(200),
publicado integer,
primary key(idVende,idProducto, idUsuario),
foreign key(idUsuario) references usuarios(id),
foreign key(idProducto) references producto(id)
);

SELECT * FROM `vende`;
SELECT * FROM `usuarios`;
SELECT * FROM `producto`;


INSERT INTO `usuarios`(`nombreUsuario`,`nombre`,`password`,`telefono`)VALUES
('daniCrack', 'Danniel Jarcia Jacome', 'iowhebi', '228718753'),
('sirRobert', 'Roberto Viveros', 'ihvu2', '224715723'),
('Loco2', 'Ariel Garcia', 'QWERTY', '228983476'),
('XD', 'Prudencio', 'uqiwbq', '226983457'),
('spiderman', 'Rodrigo', '23g78b', '223836596'),
('Loco2', 'Ariel Garcia', 'QWERTY', '225863456');

INSERT INTO `producto`(`nombreProducto`,`precio`,`cantidad`,`imagen`)VALUES
('Chips',18,2,'https://acortar.link/sHYZCG'),
('chicles',15,4,'https://acortar.link/cXw7Qv'),
('Kinder Delice',20,6,'https://acortar.link/FFpxfv'),
('Carlos V',22,9,'https://acortar.link/QStzvp'),
('Mamut',10,1,'https://acortar.link/xbk6Gd'),
('Emperador',16,6,'https://acortar.link/i9dhH2'),
('Chokis',19,8,'https://acortar.link/egv2O2'),
('m&mS',15,3,'https://acortar.link/QVom5F'),
('Helados',20,8,'https://acortar.link/Cfu13E'),
('Paletas de hielo',21,4,'https://acortar.link/v8oY9K'),
('Pambasos',10,10,'https://acortar.link/7BJ3LC');

INSERT INTO `vende`(`idProducto`,`idUsuario`,`ubicacion`,`publicado`)VALUES
(2,2,'Alula 102',0),
(3,3,'Alula 103',1),
(4,4,'Alula 108',0),
(5,5,'Alula 106',0),
(6,6,'Alula 108',1),
(7,7,'Salon Cristal',1),
(8,8,'Aula 102',0),
(9,8,'Alula 104',1),
(10,1,'Salon TC',1),
(11,2,'Canchas',0),
(12,3,'Estacionamiento',0);






