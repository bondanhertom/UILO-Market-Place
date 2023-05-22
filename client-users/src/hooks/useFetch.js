import { useEffect } from "react";
import { useState } from "react";
import { BASE_URL } from '../config/api'

const useFetch = (entity = "") => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(BASE_URL + entity);
                if (!response.ok) {
                    throw await response.text();
                }

                const value = await response.json()
                setData(value)

            } catch (error) {
                console.log(error)
            }
            finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    return { data, loading }
}

export default useFetch;