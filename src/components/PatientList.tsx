import { usePatientStorage } from "../store/store"
import PatientDetails from "./PatientDetails"


export const PatientList = () => {

  const patients = usePatientStorage((state) => state.patients)  //Trae el state pacientes[] del storage

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {patients.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado de pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus
            <span className="text-indigo-600 font-bold"> pacientes</span>
          </p>

          {patients.map((patient)=>(
            <PatientDetails
              key={patient.id}
              patient={patient}
            />
          ))}

        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando pacientes y se mostrarán
            <span className="text-indigo-600 font-bold"> aquí</span>
          </p>
        </>
      )}

    </div>
  )
}
