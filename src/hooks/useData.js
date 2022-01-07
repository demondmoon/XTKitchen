import {useEffect, useState} from 'react'
import {db} from '../firebase/config'

export const useData = (collection) => {
  const [documents, setDocuments] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)

  useEffect(()=> {
    setIsPending(true) 
    db.collection(collection).get().then((snapshot)=> {
      if(snapshot.empty) {
        setError("No meals to load")
        setIsPending(false);
      } else {
        let results = [] 
        snapshot.docs.forEach(doc=> {
          results.push({id: doc.id, ...doc.data()})
        })
        setDocuments(results)
        setIsPending(false)
      }
    }).catch(err => {
      setError(err.message)
      setIsPending(false)
    }) },[collection])
 

  return { documents, error, isPending}
}