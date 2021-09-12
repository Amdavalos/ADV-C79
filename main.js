
	array_nombre_del_alumno = [];
	
	function submit()
	{
        
        var nombre_1 = document.getElementById("nombre_del_alumno_1").value;
        var nombre_2 = document.getElementById("nombre_del_alumno_2").value;
        var nombre_3 = document.getElementById("nombre_del_alumno_3").value;
        var nombre_4 = document.getElementById("nombre_del_alumno_4").value;

        nombre_del_alumno.push(nombre_1);
        nombre_del_alumno.push(nombre_2);
        nombre_del_alumno.push(nombre_3);
        nombre_del_alumno.push(nombre_4);

		console.log(array_nombre_del_alumno);
		
        document.getElementById("display_name").innerHTML = array_nombre_del_alumno;
        document.getElementById("submit_button").style.display = "none";
        document.getElementById("sort_button").style.display = "inline-block";

	}

function sorting()
{
	array_nombre_del_alumno.sort();
    console.log(narray_nombre_del_alumno);
	document.getElementById("display_name").innerHTML = array_nombre_del_alumno;
}
