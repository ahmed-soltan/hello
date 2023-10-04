import { useState, useEffect } from 'react'
import { db } from "./firebase";

const UseFireStore = () => {
  const [products, setProducts] = useState([])
  const [messages, setMessages] = useState([])


  useEffect(() => {
    const unsubscribed = db.collection("products").onSnapshot(snap => {
      let fetched = snap.docs.map(doc => {
        return { ...doc.data(), id: doc.id , url:doc.url }
      })
      setProducts(fetched)
    })
    return unsubscribed 
  }, [])

  useEffect(()=>{
    const subscribed = db.collection("Messages").onSnapshot(snap => {
      let fetched = snap.docs.map(doc => {
        return { ...doc.data(), id: doc.id }
      })
      setMessages(fetched)
    })
    return subscribed
  },[])


  const addProduct = async(product) =>{
     await db.collection('products').add({
       ...product
     })
  }
  
  const addMessage = async(message) =>{
     await db.collection('Messages').add({
       ...message
     })
  }

  const DeleteProduct = async(id) =>{
     await db.collection('products').doc(id).delete()
  }
  const DeleteMessage = async(id) =>{
     await db.collection('Messages').doc(id).delete()
  }
  const updateProduct = async (id , product) => {
    console.log(id , product)  
    await db.collection("products").doc(id).update({
      ...product
    })
}


  return { messages , products , addProduct , DeleteProduct , updateProduct , addMessage , DeleteMessage };
};

export default UseFireStore;