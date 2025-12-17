var btn_agregar=document.getElementById('btn_agregar_edo');
var ul_lista_notas_edo=document.getElementById('lista_notas_edo');
var ul_lista_ap_ds_sp=document.getElementById('lista_notas_edo');
var txt_estado_estudiantes=document.getElementById('txt_estado_estudiantes');
var txt_curso_promedio=document.getElementById('txt_curso_promedio')
var txt_estado_curso=document.getElementById('txt_estado_curso')
var lista_notas_edo=[];
var lista_estudiantes_edo=[];
btn_agregar.addEventListener('click',function(event){
    var nota_edo=document.getElementById('txt_notas_edo');
    var nombre_estudiante_edo=document.getElementById('txt_estudiantes_edo');
    if (nota_edo.value !=''&& nombre_estudiante_edo.value !=''){

        //para ser tood el mayuscullas se pune
        lista_estudiantes_edo.push(nombre_estudiante_edo.value)
        lista_notas_edo.push(nota_edo.value);

        // mostrarListado();
        mostrarListado_con_For();
        verificar_aprobados();
        let promedio_curso_general=promedio_curso();
        txt_curso_promedio.innerHTML=`Promedio del curso : ${promedio_curso_general}`;
        estado_curso(promedio_curso_general);
        //limpia el imput
        nota_edo.value='';
        nombre_estudiante_edo.value='';
    }else{
        console.log("INGRESE EL NOMBRE DEL PRODUCTO")
    }
})

function mostrarListado_con_For(){
ul_lista_notas_edo.innerHTML='';
        for (let i = 0; i < lista_notas_edo.length; i++) {
            let li_item=document.createElement('li');
            li_item.classList.add('list-group-item');
            li_item.classList.add(
            'list-group-item',
            'bg-secondary',
            'text-white',
            'border-0'
            );
            li_item.textContent=lista_estudiantes_edo[i] + "  -  "+lista_notas_edo[i];
            ul_lista_notas_edo.appendChild(li_item);
        }

}
function verificar_aprobados(){
    var n_estudiantes_aprobados = 0;
    var n_estudiantes_supletorio = 0;
    var n_estudiantes_reprobados = 0;

    for (let i = 0; i < lista_notas_edo.length; i++) {
        let nota = parseInt(lista_notas_edo[i]);

        if (nota >= 7 && nota <= 10) {
            n_estudiantes_aprobados++;
        }
        else if (nota >= 5 && nota <= 6) {
            n_estudiantes_supletorio++;
        }
        else if (nota >= 0 && nota <= 4) {
            n_estudiantes_reprobados++;
        }
    }

    txt_estado_estudiantes.innerHTML =
        `Estudiantes aprobados: ${n_estudiantes_aprobados}<br>
         Estudiantes a supletorio: ${n_estudiantes_supletorio}<br>
         Estudiantes reprobados: ${n_estudiantes_reprobados}`;
}
function promedio_curso(){
    let sumatoria_notas=0;
    for (let i = 0; i < lista_notas_edo.length; i++) {
        let nota = parseInt(lista_notas_edo[i]);
        sumatoria_notas += nota;
    }
    return sumatoria_notas/lista_notas_edo.length
}
function estado_curso(promedio){
    if(promedio>=7){
        txt_estado_curso.innerHTML=`Curso Aprobado`
    }else if(promedio<7&&promedio>0){
        txt_estado_curso.innerHTML=`Curso en Riesgo`

    }

}