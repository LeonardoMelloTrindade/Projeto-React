import { useContext } from "react";
import { CarrinhoContext } from "../context/CarrinhoContext";

export default function UseCarrinhoContext() {
    const context = useContext(CarrinhoContext);

    if (context === undefined) {
        throw new Error('Não está dentro do Contexto')
    }

    return context
}