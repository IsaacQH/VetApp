

type PatientDetProps = {     //Tipo de dato para el componente y sus props
    label: string,
    data: string
}

export const PatientDet = ({label, data}: PatientDetProps) => { //Pasamos como prop el label y el dato
  return (
    <>
        <p className="font-bold mb-3 text-gray-700 uppercase"> {label}:
            <span className="font-normal normal-case"> {data}</span>
        </p>
    </>
  )
}
