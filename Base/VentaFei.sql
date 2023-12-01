create database VentaFei;
use VentaFei;

drop table producto;
create table  producto(
matricula varchar(30),
nombre_vendedor varchar(30) not null,
nombre_producto varchar(30) not null,
id integer primary key AUTO_INCREMENT,
precio double not null,
cantidad integer,
ubicacion varchar(200),
 imagen BLOB
);

insert into producto values("s21016383","Daniel","Brownies",1,20.0,4,"En el teatro de la cancha",NULL);
insert into producto values("s21021683","Aldo","Dulces",2,10.0,20,"Afuera del salon 106",NULL);
insert into producto values("s21016335","Roberto","Cafe",3,20.0,10,"Afuera del salon 112",NULL);
insert into producto values("s21016351","Francisco","Tortas",4,15,.020,"Afuera del salon 112",NULL);
insert into producto values("s21016335","Juan","Pan",5,3.0,20,"En las escaleras de la entrada",NULL);

select * from producto;

