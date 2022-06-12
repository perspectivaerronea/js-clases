class Usuario{
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros || [];
        this.mascotas = mascotas || [];
        
    }

    getFullName(){
        return `${this.nombre} ${this.apellido}`;
    }

    addMascota(mascota){
        this.mascotas.push(mascota);
    }

    countMascotas(){
        return this.mascotas.length > 0 ? this.mascotas.length : 'No tiene mascotas registradas';
    }

    addBook(nombre, autor){
        this.libros.push({nombre, autor});
    }

    getBooksNames(){
        return this.libros.length > 0 ? this.libros.map( libro => libro.nombre) : 'No hay libros cargados.' ;
    }
}

function procesarUsuarios(usuario){
    console.log(usuario.getFullName());        
    console.log(usuario.countMascotas());
    console.log(usuario.getBooksNames());
    console.log(" ");
}

let usuario1 = new Usuario('Cosme', 'Fulanito', [], ['Black', 'Rokcy']);

usuario1.addBook('Hábitos Atómicos', 'James Clear');
usuario1.addBook('De qué hablo cuando hablo de Escribir', 'Haruki Murakami');


let usuario2 = new Usuario('Juan', 'Perez', [{nombre:'100 Años de Soledad', autor:'Gabriel Garcia Marquez'}, {nombre:'Yo, Mi, Me... contigo', autor:'David Safier'}]);

usuario2.addMascota('Inoue');
usuario2.addMascota('Demian');
usuario2.addMascota('Selina');

let usuario3 = new Usuario('Jazmin', 'Gutierrez');

let usuario4 = new Usuario('Margarita', 'Padin');

usuario4.addBook('Hábitos Atómicos', 'James Clear');
usuario4.addBook('De qué hablo cuando hablo de Escribir', 'Haruki Murakami');
usuario4.addBook('100 Años de Soledad', 'Gabriel Garcia Marquez');
usuario4.addBook('Yo, Mi, Me... contigo', 'David Safier');
usuario4.addBook('Así se escribe un cuento', 'Mempo Gardinelli');
usuario4.addMascota('Black');
usuario4.addMascota('Rokcy');
usuario2.addMascota('Inoue');
usuario2.addMascota('Demian');
usuario2.addMascota('Selina');

procesarUsuarios(usuario1);
procesarUsuarios(usuario2);
procesarUsuarios(usuario3);
procesarUsuarios(usuario4);