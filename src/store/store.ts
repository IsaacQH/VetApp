
//ARCHIVO STORE QUE ALBERGA LOS STATES Y LAS FUCNIONES QUE MODIFICAN EL STATE. REMPLAZO DEL REDUCER

import {v4 as uuidv4} from 'uuid'
import { create } from "zustand"
import { DraftPatient, Patient } from "../types"

//Tipo de dato delos states que tendrá 
type PatientState = {
    patients: Patient[]
    addPatient: (data: DraftPatient) => void  //Fcunción que recibe un dato con DraftPatient y regresa un void
    deletePatient: (id: Patient['id']) => void  //Funcion delete que recibe id y regresa void
}

//Función para crear objeto Patient con id
const createPatient = (patient:DraftPatient):Patient => {
    return{...patient, id:uuidv4()}        //Toma la copia del objeto y añade el id con la libreia uuid
}


//Definiendo Store                           REVISAR DOBLE () *******
export const usePatientStorage = create<PatientState>((set) => ({   //Set y get para accionar en los states
    patients:[],                //State para arreglo de pacientes
    addPatient: (data) => {     //Función para añadir un paciente
        const newPatient = createPatient(data)
        set((state) => ({
            patients: [...state.patients, newPatient]  //Registra el estado pasado como copia y añade un nuevo paciente
        }))
    },
    deletePatient: (id) => { //Pasamos id
        set((state) => ({  
            patients: state.patients.filter((patient) => id !== patient.id) //Crea un filter y regresa todos menos el valor eliminado
        }))
    }
}))