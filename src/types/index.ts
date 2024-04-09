
//ARCHIVO PARA LOS TIPOS DE DATOS

//Tipo de dato para pacientes
export type Patient = {
    id: string,
    name: string,
    caretaker: string,
    email: string,
    date: Date,         //Objeto fecha
    symptoms: string
}