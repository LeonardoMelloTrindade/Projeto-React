import { CarrinhoContext } from "./CarrinhoContext"

export default function CarrinhoProvider([ children ]) {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        endereco: '',
        cidade: '',
        estado: '',
        cep: ''
      });

    return(
        <CarrinhoContext.Provider value={{formData, setFormData}}>
             {children}
        </CarrinhoContext.Provider>
    )
}