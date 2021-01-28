const initToken = {
    isAuth : false,
    _id : 0
}

export default function login (token = initToken, action = {}){
    switch(action.type){
        case 'setToken':
            return ({
                isAuth : true,
                _id : action.token._id,
                jwtToken: action.jwt
            })
    }
}