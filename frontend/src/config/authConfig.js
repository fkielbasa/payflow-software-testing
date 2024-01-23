import {decodeToken, isExpired} from "react-jwt";

export const TOKEN_KEY = "token-payflow"
export const config = {
    headers: {
        Authorization: `Bearer ${localStorage.getItem(TOKEN_KEY)}`
    }
}
export const isLogged = !isExpired(localStorage.getItem(TOKEN_KEY))
export const user = decodeToken(localStorage.getItem(TOKEN_KEY))
