import { useState, useEffect } from "react"
import { io } from 'socket.io-client'
const socket = io("http://localhost:3000")
function Chat(props) {
  const [messages, setMessages] = useState([])
  const [inputValue,setinputValue]=useState("")
  const {username,room}=props
  
  const onSubmitForm =(e)=>{
    e.preventDefault()
    socket.emit("chat message", {from : username,room:room, message:inputValue})
    setinputValue("")
  }

  socket.on("welcome room", data => {
    setMessages(messages => [...messages, {message:data,from:username,room:room,date:Date().toString(),className:"bg-yellow-200"}])
})

  useEffect(() => {

    socket.on("newConnection", () => {
      setMessages(messages => [...messages, {message:'new user',date:Date().toString(),className:"bg-green-200"}])
    })
    socket.on("newDeconnection", () => {
      setMessages(messages => [...messages, {message:'user leave',date:Date().toString(),className:"bg-red-200"}])
    })//  si tu lis ce message c'est à dire que ça marché
// test de modification pour push sur github