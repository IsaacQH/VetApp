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

    </div>
  )
}

export default PatientDetails