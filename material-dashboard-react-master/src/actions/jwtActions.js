export default function setToken (token, jwtToken){
    return {
        type: 'setToken',
        jwt: jwtToken,
        token
    }
}