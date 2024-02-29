// import React from 'react'
// import { createContext, useContext, useState, useEffect } from 'react'
// import { Auth, auth, db } from '../firebase'
// import {
//     createUserWithEmailAndPassword,
//     signInWithEmailAndPassword,
//     signOut,
//     onAuthStateChanged,
//     updateCurrentUser
// } from 'firebase/auth'
// import { setDoc } from 'firebase/firestore'
// const UserContext = createContext()

// export const AuthContextProvider = ({children}) => {
//     const[user, setUser] = useState({})
//     const signUp = (email, password) => {
//         createUserWithEmailAndPassword(auth, email, password);
//         return setDoc(doc(db, 'user', email ), {
//            watchList: []
//         });
//     };
//     const signIn = (email, password) => {
//         return signInWithEmailAndPassword(auth, email, password)
//     }
//     const logout = () => {
//         return signOut(auth)
//     }

//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, (updateCurrentUser) => {
//             setUser(updateCurrentUser)
//         })
//         return () => {
//             unsubscribe()
//         }
//     },[])

//     return <UserContext.Provider value={{signUp, signIn, logout, user}}>
//         {children}
//     </UserContext.Provider>

// }
// export const userAuth = () => {
//     return useContext(UserContext)
// }