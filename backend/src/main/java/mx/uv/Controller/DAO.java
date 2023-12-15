package mx.uv.Controller;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

import mx.uv.Producto;
import mx.uv.Model.Usuario;



// Data Access Object
public class DAO {
    // este metodo regresa un conjunto de usuarios que cumpla un criterio
    public static List<Usuario> dameUsuarios() {
        Statement stm = null;
        ResultSet rs = null;
        Connection conn = null;
        List<Usuario> resultado = new ArrayList<>();

        conn = Conexion.getConnection();

        try {
            String sql = "SELECT * from usuarios";
            stm = (Statement) conn.createStatement();
            rs = stm.executeQuery(sql);
            while (rs.next()) {
                Usuario u = new Usuario(rs.getInt(1), rs.getString(2), rs.getString(3),rs.getString(4),rs.getString(5));
                resultado.add(u);
            }
        } catch (Exception e) {
            System.out.println(e);
        } finally {
            if (rs != null)
                try {
                    rs.close();
                } catch (SQLException e) {
                    System.out.println(e);
                }
            rs = null;
            if (stm != null) {
                try {
                    stm.close();
                } catch (Exception e) {
                    System.out.println(e);
                }
                stm = null;
            }
            try {
                conn.close();
            } catch (Exception e) {
                System.out.println(e);
            }
        }
        return resultado;
    }

    public static boolean crearUsuario(Usuario u) {
        PreparedStatement stm = null;
        Connection conn = null;
        boolean msj= false;

        conn = Conexion.getConnection();
        try {
            String sql = "INSERT INTO `usuarios`(`nombreUsuario`,`nombre`,`password`,`telefono`)VALUES(?,?,?,?);";
            stm = (PreparedStatement) conn.prepareStatement(sql);
            stm.setString(1, u.getNombreUsuario());
            stm.setString(2, u.getNombre());
            stm.setString(3, u.getPassword());
            stm.setString(4, u.getTelefono());
            if (stm.executeUpdate() > 0)
                msj = true;
            else
                msj = false;

        } catch (Exception e) {
            System.out.println(e);
        } finally {
            if (stm != null) {
                try {
                    stm.close();
                } catch (Exception e) {
                    System.out.println(e);
                }
                stm = null;
            }
            try {
                conn.close();
            } catch (Exception e) {
                System.out.println(e);
            }
        }
        return msj;
    }

    public static boolean validarUsuario(Usuario u) {
        Statement stm = null;
        Connection conn = null;
        boolean verificacion =false;
        ResultSet rs = null;
        conn = Conexion.getConnection();
        try {
                String sql ="select * from usuarios " 
                        + "where nombreUsuario= '"+u.getNombreUsuario()+"' and password='"+u.getPassword()+"'";
                stm = (Statement) conn.createStatement();
                rs = stm.executeQuery(sql);
                if(rs.next()){
                    verificacion = true;
                }else{
                   verificacion = false;
                }
                conn.close();
            } catch (SQLException ex) {
                System.err.println(ex);
            }
        return verificacion;
    }

    public static Usuario UserE(Usuario user) {
        Statement stm = null;
        ResultSet rs = null;
        Connection conn = null;
        Usuario resultado = new Usuario("", "");

        conn = Conexion.getConnection();

        try {
            String sql ="select * from usuarios " 
                        + "where nombreUsuario= '"+user.getNombreUsuario()+"' and password='"+user.getPassword()+"'";
            stm = (Statement) conn.createStatement();
            rs = stm.executeQuery(sql);
            while (rs.next()) {
                resultado.setId(rs.getInt(1));
                resultado.setNombreUsuario(rs.getString(2));
                resultado.setNombre(rs.getString(3));
                resultado.setPassword(rs.getString(4));
                resultado.setTelefono(rs.getString(5));
            }
        } catch (Exception e) {
            System.out.println(e);
        } finally {
            if (rs != null)
                try {
                    rs.close();
                } catch (SQLException e) {
                    System.out.println(e);
                }
            rs = null;
            if (stm != null) {
                try {
                    stm.close();
                } catch (Exception e) {
                    System.out.println(e);
                }
                stm = null;
            }
            try {
                conn.close();
            } catch (Exception e) {
                System.out.println(e);
            }
        }
        return resultado;
    }

    public static boolean crearProducto(Producto u) {
        PreparedStatement stm = null;
        Connection conn = null;
        boolean msj= false;
        ResultSet resultado = null;
        conn = Conexion.getConnection();
        try {
            String sql = "INSERT INTO `producto`(`nombreProducto`,`precio`,`cantidad`,`imagen`)VALUES(?,?,?,?);";
            stm = (PreparedStatement) conn.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            stm.setString(1, u.getNombreProducto());
            stm.setFloat(2, u.getPrecio());
            stm.setInt(3, u.getCantidad());
            stm.setString(4, u.getImagen());
            stm.execute();

            resultado = (ResultSet) stm.getGeneratedKeys();
            if (resultado.next()){
                u.setId(resultado.getInt(1));
                msj = true;
            }      
            else
                msj = false;
        } catch (Exception e) {
            System.out.println(e);
        } finally {
            System.out.println("Id del Producto: " + u.getId());
            crearVenta(u);
            if (stm != null) {
                try {
                    stm.close();
                } catch (Exception e) {
                    System.out.println(e);
                }
                stm = null;
            }
            try {
                conn.close();
            } catch (Exception e) {
                System.out.println(e);
            }
        }
        return msj;
    }

    public static List<Producto> dameProductos() {
       Statement stm = null;
        ResultSet rs = null;
        Connection conn = null;
        List<Producto> resultado = new ArrayList<>();

        conn = Conexion.getConnection();

        try {
            String sql = "select P.id, P.nombreProducto, P.precio, P.cantidad, P.imagen, V.ubicacion from producto P, usuarios U, vende V where idProducto = P.id and idUsuario = U.id and publicado =1;";
            stm = (Statement) conn.createStatement();
            rs = stm.executeQuery(sql);
            while (rs.next()) {
                Producto u = new Producto(rs.getInt(1), rs.getString(2), rs.getFloat(3),rs.getInt(4), rs.getString(5),rs.getString(6));
                resultado.add(u);
            }
        } catch (Exception e) {
            System.out.println(e);
        } finally {
            if (rs != null)
                try {
                    rs.close();
                } catch (SQLException e) {
                    System.out.println(e);
                }
            rs = null;
            if (stm != null) {
                try {
                    stm.close();
                } catch (Exception e) {
                    System.out.println(e);
                }
                stm = null;
            }
            try {
                conn.close();
            } catch (Exception e) {
                System.out.println(e);
            }
        }
        return resultado;
    }

     public static boolean crearVenta(Producto u) {
        PreparedStatement stm = null;
        Connection conn = null;
        boolean msj= false;

        conn = Conexion.getConnection();
        try {
            String sql = "INSERT INTO `vende`(`idProducto`,`idUsuario`,`ubicacion`,`publicado`)VALUES(?,?,?,?);";
            stm = (PreparedStatement) conn.prepareStatement(sql);
            stm.setInt(1, u.getId());
            stm.setFloat(2, u.getIdUsuario());
            stm.setString(3, "");
            stm.setInt(4, 0);
            if (stm.executeUpdate() > 0)
                msj = true;
            else
                msj = false;
        } catch (Exception e) {
            System.out.println(e);
        } finally {
            if (stm != null) {
                try {
                    stm.close();
                } catch (Exception e) {
                    System.out.println(e);
                }
                stm = null;
            }
            try {
                conn.close();
            } catch (Exception e) {
                System.out.println(e);
            }
        }
        return msj;
    }

    public static List<Venta> dameVentas() {
        Statement stm = null;
        ResultSet rs = null;
        Connection conn = null;
        List<Venta> resultado = new ArrayList<>();

        conn = Conexion.getConnection();

        try {
            String sql = "SELECT * from vende";
            stm = (Statement) conn.createStatement();
            rs = stm.executeQuery(sql);
            while (rs.next()) {
                Venta v = new Venta(rs.getInt(1), rs.getInt(2), rs.getInt(3),rs.getString(4), rs.getInt(5));
                resultado.add(v);
            }
        } catch (Exception e) {
            System.out.println(e);
        } finally {
            if (rs != null)
                try {
                    rs.close();
                } catch (SQLException e) {
                    System.out.println(e);
                }
            rs = null;
            if (stm != null) {
                try {
                    stm.close();
                } catch (Exception e) {
                    System.out.println(e);
                }
                stm = null;
            }
            try {
                conn.close();
            } catch (Exception e) {
                System.out.println(e);
            }
        }
        return resultado;
    }

    public static List<Producto> dameProductosporU(Usuario user) {
       Statement stm = null;
        ResultSet rs = null;
        Connection conn = null;
        List<Producto> resultado = new ArrayList<>();

        conn = Conexion.getConnection();

        try {
            String sql = "select P.id, P.nombreProducto, P.precio, P.cantidad, P.imagen, V.ubicacion from producto P, vende V where V.idProducto = P.id and V.idUsuario = '"+user.getId()+"';";
            stm = (Statement) conn.createStatement();
            rs = stm.executeQuery(sql);
            while (rs.next()) {
                Producto u = new Producto(rs.getInt(1), rs.getString(2), rs.getFloat(3),rs.getInt(4), rs.getString(5),rs.getString(6));
                resultado.add(u);
            }
        } catch (Exception e) {
            System.out.println(e);
        } finally {
            if (rs != null)
                try {
                    rs.close();
                } catch (SQLException e) {
                    System.out.println(e);
                }
            rs = null;
            if (stm != null) {
                try {
                    stm.close();
                } catch (Exception e) {
                    System.out.println(e);
                }
                stm = null;
            }
            try {
                conn.close();
            } catch (Exception e) {
                System.out.println(e);
            }
        }
        return resultado;
    }

    public static boolean actualizarProducto(Producto p) {
        PreparedStatement stm = null;
        Connection conn = null;
        boolean verificacion =false;
        conn = Conexion.getConnection();
        try {
                String sql ="UPDATE `producto` SET `nombreProducto` = '"+p.getNombreProducto()+"',`precio` = '"+p.getPrecio()+"',`cantidad` = '"+p.getCantidad()+"',`imagen` = '"+p.getImagen()+"'WHERE `id` = '"+p.getId()+"';";
                stm = conn.prepareStatement(sql);
                stm.executeUpdate();
                verificacion = true;
                conn.close();
            } catch (SQLException ex) {
                System.err.println(ex);
            }finally{
                actualizarVenta(p);
            }
        return verificacion;
    }

    public static boolean PublicarProducto(Producto p) {
        PreparedStatement stm = null;
        Connection conn = null;
        boolean verificacion =false;
        conn = Conexion.getConnection();
        try {
                String sql ="UPDATE `vende` SET `publicado` = '"+1+"' WHERE  `idProducto`  =  '"+p.getId()+"' AND `idUsuario` = '"+p.getIdUsuario()+"';";
                stm = conn.prepareStatement(sql);
                stm.executeUpdate();
                verificacion = true;
                conn.close();
            } catch (SQLException ex) {
                System.err.println(ex);
            }
        return verificacion;
    }
    public static boolean actualizarVenta(Producto p) {
        PreparedStatement stm = null;
        Connection conn = null;
        boolean verificacion =false;
        conn = Conexion.getConnection();
        try {
                String sql ="UPDATE `vende` SET `ubicacion` = '"+p.getUbicacion()+"' WHERE  `idProducto`  =  '"+p.getId()+"' AND `idUsuario` = '"+p.getIdUsuario()+"';";
                stm = conn.prepareStatement(sql);
                stm.executeUpdate();
                verificacion = true;
                conn.close();
            } catch (SQLException ex) {
                System.err.println(ex);
            }
        return verificacion;
    }

    public static boolean quitarPublicarProducto(Producto p) {
        PreparedStatement stm = null;
        Connection conn = null;
        boolean verificacion =false;
        conn = Conexion.getConnection();
        try {
                String sql ="UPDATE `vende` SET `publicado` = '"+0+"' WHERE  `idProducto`  =  '"+p.getId()+"' AND `idUsuario` = '"+p.getIdUsuario()+"';";
                stm = conn.prepareStatement(sql);
                stm.executeUpdate();
                verificacion = true;
                conn.close();
            } catch (SQLException ex) {
                System.err.println(ex);
            }
        return verificacion;
    }
    public static boolean eliminarVende(Producto p) {
        PreparedStatement stm = null;
        Connection conn = null;
        boolean verificacion =false;
        conn = Conexion.getConnection();
        try {
                String sql ="DELETE FROM `vende` WHERE idProducto= '"+p.getId()+"' and  idUsuario= '"+p.getIdUsuario()+"';";
                stm = conn.prepareStatement(sql);
                stm.executeUpdate();
                eliminarProducto(p);
                verificacion = true;
                conn.close();
            } catch (SQLException ex) {
                System.err.println(ex);
            }
        return verificacion;
    }
    public static boolean eliminarProducto(Producto p) {
        PreparedStatement stm = null;
        Connection conn = null;
        boolean verificacion =false;
        conn = Conexion.getConnection();
        try {
                String sql ="DELETE FROM `producto` WHERE id = '"+p.getId()+"';";
                stm = conn.prepareStatement(sql);
                stm.executeUpdate();
                
                verificacion = true;
                conn.close();
            } catch (SQLException ex) {
                System.err.println(ex);
            }
        return verificacion;
    }
}
