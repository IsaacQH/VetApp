
//componente del error

const Error = ({children}:{children:React.ReactNode}) => {
  return (
    <p className="text-center my-3 bg-red-600 text-white font-bold py-2 uppercase text-xs">{children}</p>
  )
}

export default Error