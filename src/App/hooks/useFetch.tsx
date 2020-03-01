import { useState, useEffect } from 'react';
import axios from 'axios';


const useFetch = (url: string, options: any) => {
   const [data, setData] = useState<any>([])
   const [error, setError] = useState<boolean>(false)
   const [loading, setLoading] = useState<boolean>(false)

   useEffect(() => {
      setLoading(true)
      const controller = new AbortController()
      const signal = controller.signal
      const fetchData = async () => {
         try {
            const fetchedData: any = await axios.get(url, options)
            if (!signal.aborted) {
               setData(fetchedData.data);
               setLoading(false)
            }
         } catch (e) {
            if (!signal.aborted) {
               setError(true)
            }

         }
      }
      fetchData()

      return () => {
         controller.abort();
      };
   }, [])

   return {
      data,
      loading,
      error
   }
}

export default useFetch;
