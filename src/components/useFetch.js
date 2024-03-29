import { useState, useEffect } from 'react'

export const useFetch = (url, page) => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [data, setData] = useState(null)

    useEffect(() => {
      setLoading(true)
        fetch(url)
        .then(res => {
            if(res.ok) return res.json();
            throw new Error('Something went wrong');
            
        })
        .then(data => {
           setData(data.results)
           setLoading(false)
           setError(false)
          
            window.scrollTo(0,0);
        
        })
        .catch(err => {
            console.log(err)
            setError(true)
            setLoading(false)
        })
      }, [url,page])


  return {loading, error, data}
}
