package mx.proyectoFinal;

import static spark.Spark.*;

public class App 
{
    public static void main( String[] args )
    {
        System.out.println( "Hola mundo" );
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
        get("/", (request, response) -> {
            return "<h1>Hola mundo</h1>";
        });
         get("/ruta1", (request, response) -> {
            return "<h1>Hola mundo XD</h1>";
        });
         get("/ruta2", (request, response) -> {
            return "{\"alumno\":\"Juan\"}";
        });
         get("/ruta3", (request, response) -> {
            return "<h1>Byeee</h1>";
        });
    }
}