"use strict";
exports.__esModule = true;
var capacitacion_1 = require("./capacitacion");
var curso_1 = require("./curso");
var CursoEspecial_1 = require("./CursoEspecial");
var instructor_1 = require("./instructor");
var instructor1 = new instructor_1.Instructor(38261313, "Emiliano", "Gonzalez", 10);
var instructor2 = new instructor_1.Instructor(34328318, "Javier", "Chavarria", 11);
var instructor3 = new instructor_1.Instructor(30587496, "Jorge", "Sanchez", 5);
var instructor4 = new instructor_1.Instructor(37245676, "Guido", "Simoneti", 45);
var instructor5 = new instructor_1.Instructor(25499472, "Sergio", "Sanchez", 120);
var curso1 = new curso_1.Curso("Front End", "Online", 7);
var curso2 = new curso_1.Curso("Base de Datos", "Presencial", 9);
var curso3 = new curso_1.Curso("Intro  a la programacion", "Presencial", 8);
var CursoEspecial1 = new CursoEspecial_1.CursoEspecial("AWS", "Online", 7, 7);
var CursoEspecial2 = new CursoEspecial_1.CursoEspecial("POO", "presencial", 8, 8);
var capacitacion1 = new capacitacion_1.Capacitacion(curso1);
var capacitacion2 = new capacitacion_1.Capacitacion(curso2);
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