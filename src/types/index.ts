
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

//Tipo de dato para pacientes pero sin ID, para el primer registro
export type DraftPatient = Omit<Patient, 'id'>  //Todo Patient menos id