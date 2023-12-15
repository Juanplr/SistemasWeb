package mx.uv;

public class Producto {
    private int id;
    private String nombreProducto;
    private float precio;
    private int cantidad;
    private String imagen;
    private String ubicacion;
    private int idUsuario;

    public Producto(int id, String nombreProducto, float precio, int cantidad, String imagen, int idUsuario) {
        this.id = id;
        this.nombreProducto = nombreProducto;
        this.precio = precio;
        this.cantidad = cantidad;
        this.imagen = imagen;
        this.idUsuario = idUsuario;
    }
    public Producto(int id, String nombreProducto, float precio, int cantidad, String imagen, String ubicacion) {
        this.id = id;
        this.nombreProducto = nombreProducto;
        this.precio = precio;
        this.cantidad = cantidad;
        this.imagen = imagen;
        this.ubicacion = ubicacion;
    }
    public Producto(int id, String nombreProducto, float precio, int cantidad, String imagen, String ubicacion, int idUsuario) {
        this.id = id;
        this.nombreProducto = nombreProducto;
        this.precio = precio;
        this.cantidad = cantidad;
        this.imagen = imagen;
        this.ubicacion = ubicacion;
        this.idUsuario = idUsuario;
    }

    public void setUbicacion(String ubicacion) {
        this.ubicacion = ubicacion;
    }
    public String getUbicacion() {
        return ubicacion;
    }
    public void setId(int id) {
        this.id = id;
    }

    public void setNombreProducto(String nombreProducto) {
        this.nombreProducto = nombreProducto;
    }

    public void setPrecio(float precio) {
        this.precio = precio;
    }

    public void setCantidad(int cantidad) {
        this.cantidad = cantidad;
    }

    public int getId() {
        return id;
    }

    public String getNombreProducto() {
        return nombreProducto;
    }

    public float getPrecio() {
        return precio;
    }

    public int getCantidad() {
        return cantidad;
    }


    public String getImagen() {
        return imagen;
    }


    public void setImagen(String imagen) {
        this.imagen = imagen;
    }


    public int getIdUsuario() {
        return idUsuario;
    }


    public void setIdUsuario(int idUsuario) {
        this.idUsuario = idUsuario;
    }

    
}
