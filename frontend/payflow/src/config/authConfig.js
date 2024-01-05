import {decodeToken, isExpired} from "react-jwt";

export const config = {
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }
}
export const isLogged = !isExpired(localStorage.getItem('token'))
export const user = decodeToken(localStorage.getItem('token'))
