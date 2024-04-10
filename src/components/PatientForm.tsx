
import {useForm} from 'react-hook-form'
import Error from './Error'
import { usePatientStorage } from '../store/store'
import type { DraftPatient } from '../types'
import { useEffect } from 'react'

export default function PatientForm() {

    const {register, handleSubmit, setValue, formState:{errors}, reset} = useForm<DraftPatient>() //Extraemos metodos necesarios del useForm

    const addPatient = usePatientStorage((state) => state.addPatient) //Extraemos el addPatient del store
    const activeId = usePatientStorage((state) => state.activeId) //Extraemos activeId del store
    const patients = usePatientStorage((state) => state.patients)

    useEffect(()=>{
        if(activeId){
            const activePatient = patients.filter((patient) => activeId === patient.id)[0] //Regresa el objeto que tenga el unico id igual, solo el el objeto sin arreglo [0]
            //Se setean los valores del formulario al indicado para la edición
            setValue('name', activePatient.name)
            setValue('caretaker', activePatient.email)
            setValue('email', activePatient.name)
            setValue('date', activePatient.date)
            setValue('symptoms', activePatient.symptoms)
        }
    },[activeId]) //Cada que el activeId cambie

    const registerPatient = (data:DraftPatient) => {  //Función que procesa handleSubmit
        console.log('ADDING PATIENT')
        addPatient(data)   //Llama a la función y añade un paciente
        reset() //Resetea el form
    }
  
    return (
      <div className="md:w-1/2 lg:w-2/5 mx-5">
          <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
  
          <p className="text-lg mt-5 text-center mb-10">
              Añade Pacientes y {''}
              <span className="text-indigo-600 font-bold">Administralos</span>
          </p>
  
          <form 
              className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
              noValidate
              onSubmit={handleSubmit(registerPatient)}
          >
                <div className="mb-5">
                    <label htmlFor="name" className="text-sm uppercase font-bold">
                        Paciente 
                    </label>
                    <input  
                        id="name"
                        className="w-full p-3  border border-gray-100"  
                        type="text" 
                        placeholder="Nombre del Paciente" 
                        {...register('name',{
                            required: 'El nombre del paciente es oligatorio',
                        })}
                    />
                    {errors.name && (
                        <Error>{errors.name?.message}</Error>
                    )}
                    
                </div>
  
                <div className="mb-5">
                  <label htmlFor="caretaker" className="text-sm uppercase font-bold">
                      Propietario 
                  </label>
                  <input  
                      id="caretaker"
                      className="w-full p-3  border border-gray-100"  
                      type="text" 
                      placeholder="Nombre del Propietario" 
                      {...register('caretaker',{
                        required: 'El nombre del propietario es oligatorio',
                       })}
                  />
                    {errors.caretaker && (
                        <Error>{errors.caretaker?.message}</Error>
                    )}
                </div>
  
              <div className="mb-5">
                <label htmlFor="email" className="text-sm uppercase font-bold">
                    Email 
                </label>
                <input  
                    id="email"
                    className="w-full p-3  border border-gray-100"  
                    type="email" 
                    placeholder="Email de Registro" 
                    {...register("email", {
                        required: "El Email es Obligatorio",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Email No Válido'
                        }
                    })} 
                />
                {errors.email && (
                    <Error>{errors.email?.message}</Error>
                )}
              </div>
  
              <div className="mb-5">
                  <label htmlFor="date" className="text-sm uppercase font-bold">
                      Fecha Alta 
                  </label>
                  <input  
                      id="date"
                      className="w-full p-3  border border-gray-100"  
                      type="date" 
                      {...register('date',{
                        required: 'La fecha de alta obligatoria',
                       })}
                  />
                {errors.date && (
                    <Error>{errors.date?.message}</Error>
                )}
              </div>
              
              <div className="mb-5">
                  <label htmlFor="symptoms" className="text-sm uppercase font-bold">
                  Síntomas 
                  </label>
                  <textarea  
                      id="symptoms"
                      className="w-full p-3  border border-gray-100"  
                      placeholder="Síntomas del paciente"
                      {...register('symptoms',{
                        required: 'Describir los sintomas es obligatorio',
                       })} 
                  />
                {errors.symptoms && (
                    <Error>{errors.symptoms?.message}</Error>
                )}
              </div>
  
              <input
                  type="submit"
                  className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                  value='Guardar Paciente'
              />
          </form> 
      </div>
    )
  }
  