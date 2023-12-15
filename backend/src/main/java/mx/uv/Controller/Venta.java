package mx.uv.Controller;

public class Venta {
   private int inVende;
   private int idProducto;
   private int idUsuario;
   private String ubicacion;
   private int publicado;

   
    public Venta(int inVende, int idProducto, int idUsuario, String ubicacion, int publicado) {
        this.inVende = inVende;
        this.idProducto = idProducto;
        this.idUsuario = idUsuario;
        this.ubicacion = ubicacion;
        this.publicado = publicado;
    }
    public Venta( int idProducto, int idUsuario, String ubicacion, int publicado) {
        this.idProducto = idProducto;
        this.idUsuario = idUsuario;
        this.ubicacion = ubicacion;
        this.publicado = publicado;
    }
    public int getInVende() {
        return inVende;
    }
    public int getIdProducto() {
        return idProducto;
    }
    public int getIdUsuario() {
        return idUsuario;
    }
    public String getUbicacion() {
        return ubicacion;
    }
    public int getPublicado() {
        return publicado;
    }
    public void setInVende(int inVende) {
        this.inVende = inVende;
    }
    public void setIdProducto(int idProducto) {
        this.idProducto = idProducto;
    }
    public void setIdUsuario(int idUsuario) {
        this.idUsuario = idUsuario;
    }
    public void setUbicacion(String ubicacion) {
        this.ubicacion = ubicacion;
    }
    public void setPublicado(int publicado) {
        this.publicado = publicado;
    }

   
}
