const counter = (state = 0, action) => {
    switch(action.type){
        case "SETCART":
            return action.payload
        default: 
            return state
    }
}

export default counter