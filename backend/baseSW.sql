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
select * from producto;

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




INSERT INTO `vende`(`idProducto`,`idUsuario`,`ubicacion`,`publicado`)VALUES(1,1,"",0);
SELECT LAST_INSERT_ID();
select * from producto;

INSERT INTO `usuarios`(`nombreUsuario`,`nombre`,`password`,`telefono`)VALUES(?,?,?,?);

INSERT INTO `producto`(`nombreProducto`,`precio`,`cantidad`,`imagen`)VALUES(?,?,?,?);

INSERT INTO `vende`(`idProducto`,`idUsuario`,`ubicacion`,`publicado`)VALUES(?,?,?,?);

select P.id, P.nombreProducto, P.precio, P.cantidad, P.imagen, V.ubicacion from producto P, vende V where V.idProducto = P.id and V.idUsuario = 1;
DELETE FROM `vende` WHERE idProducto=1 and  idUsuario= 2;
DELETE FROM `producto` WHERE id = 1;





