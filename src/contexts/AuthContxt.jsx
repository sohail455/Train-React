import { createContext, useContext, useReducer } from "react";


const AuthContext = createContext()

let initalState = {
    user: null,
    isAuthenticated: false
}

function reducer(state, action) {
    switch (action.type) {
        case "login":
            return { ...state, user: action.payload, isAuthenticated: true }
        case "logout":
            return { ...state, user: null, isAuthenticated: false }
        default:
            alert("undefiend action")
            return initalState
    }

}



function Authprovider({ children }) {
    let [{ user, isAuthenticated }, dispatch] = useReducer(reducer, initalState)

    async function login(email, password) {
        const res = await fetch("http://localhost:800/api/v1/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });
        if (!res.ok) {
            const errorData = await res.json();
            throw errorData;
        }
        const data = await res.json();
        console.log(data)
        dispatch({ type: "login", payload: data.data.user })
    }

    function logout() {
        dispatch({ type: "logout" })
    }

    return <AuthContext.Provider value={{
        login,
        logout,
        user,
        isAuthenticated
    }}>
        {children}
    </AuthContext.Provider>

}

function useAuth() {
    const context = useContext(AuthContext)
    if (context === undefined)
        return alert("data is used outside the context")
    return context;
}

export { Authprovider, useAuth }