import { Capacitacion } from "./capacitacion";
import { Curso } from "./curso";
import { CursoEspecial } from "./CursoEspecial";
import { Instructor } from "./instructor";

let instructor1 : Instructor  = new Instructor (38261313, "Emiliano", "Gonzalez",10);
let instructor2 : Instructor  = new Instructor (34328318,"Javier", "Chavarria",11);
let instructor3 : Instructor  = new Instructor (30587496,"Jorge", "Sanchez",5);
let instructor4 : Instructor  = new Instructor (37245676, "Guido","Simoneti", 45);
let instructor5 : Instructor  = new Instructor (25499472,"Sergio","Sanchez",120);

let curso1 : Curso = new Curso ("Front End","Online",7);
let curso2 : Curso = new Curso ("Base de Datos", "Presencial",9);
let curso3 : Curso = new Curso ("Intro  a la programacion", "Presencial",8);

let CursoEspecial1 : CursoEspecial = new CursoEspecial ("AWS","Online",7,7);
let CursoEspecial2 : CursoEspecial = new CursoEspecial ("POO","presencial", 8 , 8);

let capacitacion1 : Capacitacion = new Capacitacion (curso1);
let capacitacion2 : Capacitacion = new Capacitacion (curso2);

if(instructor1.inscribirACurso(capacitacion1)){
    console.log(instructor1.getNombre() + " " + instructor1.getApellido() +" se inscribio al curso: " + capacitacion1.getCurso().getNombre());
}else{console.log(instructor1.getNombre() + " " + instructor1.getApellido() +"no se puede inscribir al curso: " + capacitacion1.getCurso().getNombre() + " porque ya esta inscripto")}


console.log(instructor1.inscribirACurso(capacitacion1));
console.log(instructor1.inscribirACurso(capacitacion2));
console.log(instructor1.inscribirACurso(capacitacion1));

capacitacion1.agregarNota(10);
capacitacion1.agregarNota(5);
capacitacion1.agregarNota(7);
capacitacion1.agregarNota(3);
capacitacion1.agregarNota(10);
capacitacion2.agregarNota(3);
capacitacion2.agregarNota(2);
capacitacion2.agregarNota(1);
capacitacion2.agregarNota(7);
capacitacion2.agregarNota(10);

console.log(capacitacion1.getNotasCurso());
console.log(capacitacion2.getNotasCurso());
