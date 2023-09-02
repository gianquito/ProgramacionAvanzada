var nombres = new Array();

nombres[0] = "Nacho";
nombres[1] = "Arek";
nombres[2] = "Laura";
nombres[3] = "Sonia";
nombres[4] = "Gonzalo";
nombres[5] = "Eva";
nombres[6] = "Pedro";

try {
	document.write(nombres[0] + "<br>");
	document.write(nombres[1] + "<br>");
	document.write(nombres[2] + "<br>");
	document.write(nombres[3] + "<br>");
	document.write(nombres[4] + "<br>");
	document.write(nombres[5] + "<br>");
	document.write(nombres[6] + "<br>");
} catch {
	alert("Nombre no existe en la lista");
}

nombres[7] = "Manuel";
document.write(nombres[7] + "<br>");
