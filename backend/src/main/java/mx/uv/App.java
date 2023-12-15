package mx.uv;
import static spark.Spark.*;

import java.util.HashMap;

import  com.google.gson.*;

import mx.uv.Controller.DAO;
import mx.uv.Model.Usuario;

public class App 
{
    static Gson gson = new Gson();
    static HashMap<String, Usuario> usuarios = new HashMap<>();
    public static void main( String[] args )
    {
        //fuente:https://gist.github.com/saeidzebardast/e375b7d17be3e0f4dddf
        options("/*",(request,response)->{
            String accessControlRequestHeaders=request.headers("Access-Control-Request-Headers");
            if(accessControlRequestHeaders!=null){
                response.header("Access-Control-Allow-Headers",accessControlRequestHeaders);
            }
            String accessControlRequestMethod=request.headers("Access-Control-Request-Method");
            if(accessControlRequestMethod!=null){
                response.header("Access-Control-Allow-Methods",accessControlRequestMethod);
                }
            return "OK";
        });

before((request,response)->response.header("Access-Control-Allow-Origin","*"));
        post("/usuarioIniciado", (request, response) ->{
            response.type("application/json");
            String payload = request.body();
            Usuario u = gson.fromJson(payload, Usuario.class);
            return gson.toJson(DAO.UserE(u));
        });
        get("/usuarios", (request, response) ->{
            response.type("application/json");
            return gson.toJson(DAO.dameUsuarios());
        });
        post("/usuarios", (request, response) ->{
            String payload = request.body();
            Usuario u = gson.fromJson(payload, Usuario.class);
            boolean msj = DAO.crearUsuario(u);
            JsonObject respuesta = new JsonObject();
            respuesta.addProperty("msj", msj);
            return respuesta;
        });
        post("/usuarioValido", (request, response) ->{
            String payload = request.body();
            Usuario u = gson.fromJson(payload, Usuario.class);
            boolean verificado = DAO.validarUsuario(u);
            JsonObject respuesta = new JsonObject();
            respuesta.addProperty("existe", verificado);
            return respuesta;
        });


        get("/producto", (request, response) ->{
            response.type("application/json");
            return gson.toJson(DAO.dameProductos());
        });
        post("/productoUE", (request, response) ->{
            response.type("application/json");
            String payload = request.body();
            Usuario u = gson.fromJson(payload, Usuario.class);
            return gson.toJson(DAO.dameProductosporU(u));
        });

        post("/producto", (request, response) ->{
            String payload = request.body();
            Producto u = gson.fromJson(payload, Producto.class);
            boolean msj = DAO.crearProducto(u);
            JsonObject respuesta = new JsonObject();
            respuesta.addProperty("msj", msj);
            return respuesta;
        });
        get("/venta", (request, response) ->{
            response.type("application/json");
            return gson.toJson(DAO.dameVentas());
        });

        post("/editarProducto", (request, response) ->{
            String payload = request.body();
            Producto p = gson.fromJson(payload, Producto.class);
            boolean verificado = DAO.actualizarProducto(p);
            JsonObject respuesta = new JsonObject();
            respuesta.addProperty("existe", verificado);
            return respuesta;
        });
        
        post("/publicarProducto", (request, response) ->{
            String payload = request.body();
            Producto p = gson.fromJson(payload, Producto.class);
            boolean verificado = DAO.PublicarProducto(p);
            JsonObject respuesta = new JsonObject();
            respuesta.addProperty("existe", verificado);
            return respuesta;
        });

        post("/QpublicarProducto", (request, response) ->{
            String payload = request.body();
            Producto p = gson.fromJson(payload, Producto.class);
            boolean verificado = DAO.quitarPublicarProducto(p);
            JsonObject respuesta = new JsonObject();
            respuesta.addProperty("existe", verificado);
            return respuesta;
        });

        post("/eliminarProducto", (request, response) ->{
            String payload = request.body();
            Producto p = gson.fromJson(payload, Producto.class);
            boolean verificado = DAO.eliminarVende(p);
            JsonObject respuesta = new JsonObject();
            respuesta.addProperty("existe", verificado);
            return respuesta;
        });
    }
}
