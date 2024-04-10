import { Patient } from "../types"
import { PatientDet } from "./PatientDet"

type PatientDetailsProps ={
    patient: Patient
}

const PatientDetails = ({patient}:PatientDetailsProps) => {
  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">

        <PatientDet label = "ID" data = {patient.id} />
        <PatientDet label = "Nombre" data = {patient.name} />
        <PatientDet label = "Propietario" data = {patient.caretaker} />
        <PatientDet label = "Email" data = {patient.email} />
        <PatientDet label = "Día de registro" data = {patient.date.toString()} />
        <PatientDet label = "Síntomas" data = {patient.symptoms} />

        <div className="flex justify-end gap-3 mt-10">
            <button
                type="button"
                className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
            >Editar</button>

            <button
                type="button"
                className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
            >Eliminar</button>

        </div>

    </div>
  )
}

export default PatientDetails