//Obtener el API

var xhr = new XMLHttpRequest();
    xhr.open('GET',"https://examen-laboratoria-sprint-5.herokuapp.com/topics", false);
//    xhr.onreadystatechange = function () {
//      if (this.readyState === 4) {
//        console.log('Status:', this.status);
//        console.log('Headers:', this.getAllResponseHeaders());
//        console.log('Body:', this.responseText);
//      }
//    };
    xhr.send();

console.log(xhr.status);
console.log(xhr.statusText);


'use strict';

const Header = (data) =>{
    
//    console.log(data);
    const header = $('<header class="container" ></header>');    
    const h2 = $('<h2>Foro Cool</h2>');
    const btn = $('<a href="#" id="openModal" >Crear tema</a>');
    const div = $('<div id="myModal" class="modal"></div>');
    const modalContent = $('<div class ="modal-content"></div>');
    const span = $('<span class="close" >&times;</span>');
    const content = $('<p>Nuevo tema</p>');
    const form =$('<input type="text" id="newTopic" placeholder="Ingrese nuevo tema">');
    const row = $('<div class="row" ></div>');
    const col1 = $('<div class="col-6"></div>');
    const col1_1 = $('<div class="col-6" id="temas">Temas</div>');
    
    const col1_2 = $('<div class="col-6" id="autor">Autor</div>');    
    const col2 = $('<div class="col-6"></div>');
    const col2_2 = $('<div class="col-6" id="respuestas" >Respuestas</div>');
    
    row.append(col1);
    col1.append(col1_1);
    col1.append(col1_2);
    row.append(col2);
    col2.append(col2_2);
        
    modalContent.append(span); 
    modalContent.append(content);
    modalContent.append(form);    
    div.append(modalContent);
    header.append(h2,btn, div, row);
    
    //iterar
    $.each(data, function(index, value){
        var tema = data[index];
//        console.log(tema);        
        let topic = $('<div class="topic" >'+tema.content+'</div>');
        $('#temas').append(topic);
        let author = $('<div class="topic" >'+tema.author_name+'</div>');
        $('#autor').append(author);
        let responses = $('<div class="topic" >'+tema.responses_count+'</div>');
        $('#respuestas').append(responses);
    });
//    $.each(data, function(index, value){console.log(data[index])});
    
    //MODAL
    
    btn.on('click', function(){
        div.show();
//        
    });
        
    form.on('keypress', function (e){
        if((e.which == '13')&&($('input').val() !== "")){
            var confi = confirm("¿Confirma crear nuevo tema?");
                if(confi == true){
                       div.hide();
                    
                    var body = {
                                'author_name': 'Nocturno',
                                'content': "",
                                'responses_count':"" 
                            };
//                    location.href ="index.html";
                 
                    body.content = $('input').val();
                    
                    xhr.send(JSON.stringify(body));

                    console.log(body);
                }
        }
    });    
    
    span.on('click', function(){
       div.hide();       
    });
    
    $(window).on('click', function() {
        if (event.target == div) {
           div.hide();
        }
    });
    
     

    return header;
}


'use strict';


const render = (root) => {
    root.empty();
    const wrapper = $('<div class="wrapper" ></div>');
    wrapper.append(Header());
    root.append(wrapper);
    
}

const state = {
    data: {},
    nextPage: null,
    temas: null,
    id: null 
    
}
  
    


$( _ =>{
        $.ajax({
        // la URL para la petición
        url : "https://examen-laboratoria-sprint-5.herokuapp.com/topics",

        // especifica si será una petición POST o GET
        type : 'GET',

        // el tipo de información que se espera de respuesta
        dataType : 'json',

        // código a ejecutar si la petición es satisfactoria;
        // la respuesta es pasada como argumento a la función
        success : function(json) {
            state.data = json;
            Header(state.data);    
            
        },

        // código a ejecutar si la petición falla;
        // son pasados como argumentos a la función
        // el objeto de la petición en crudo y código de estatus de la petición
        error : function(xhr, status) {
            console.log('Disculpe, existió un problema');
        },

        // código a ejecutar sin importar si la petición falló o no
        complete : function(xhr, status) {
            console.log('Petición realizada');
        }
            
            
    });
    
    const PostJ = () => {

    };
        xhr.open('POST', 'http://examen-laboratoria-sprint-5.herokuapp.com/topics');
        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.onreadystatechange = function () {
          if (this.readyState === 4) {
         //   console.log('Status:', this.status);
           // console.log('Headers:', this.getAllResponseHeaders());
            console.log('Body:', this.responseText);
          }

          $.getJSON("https://examen-laboratoria-sprint-5.herokuapp.com/topics", function(info){
                       
                        reRender();

                    });
        };          

//         
        const root = $('#root');
        render(root);
    
});







