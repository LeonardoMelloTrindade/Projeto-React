const setCart = (qtd) => {
    return {
        type: "SETCART", 
        payload: qtd
    }
}

export default {
   setCart
}