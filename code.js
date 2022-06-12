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
}

let usuario1 = new Usuario('Cosme', 'Fulanito', [], ['Black', 'Rokcy']);

usuario1.addBook('Hábitos Atómicos', 'James Clear');
usuario1.addBook('De qué hablo cuando hablo de Escribir', 'Haruki Murakami');

let usuario2 = new Usuario('Juan', 'Perez', [{nombre:'100 Años de Soledad', autor:'Gabriel Garcia Marquez'}, {nombre:'Yo, Mi, Me... contigo', autor:'David Safier'}]);

usuario2.addMascota('Inoue');
usuario2.addMascota('Demian');
usuario2.addMascota('Selina');

let usuario3 = new Usuario('Jazmin', 'Gutierrez');

procesarUsuarios(usuario1);
procesarUsuarios(usuario2);
procesarUsuarios(usuario3);