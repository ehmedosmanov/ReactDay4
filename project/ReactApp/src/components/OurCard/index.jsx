import {useState,useEffect} from 'react'
import axios from 'axios'
import Card from '../Card'

const OurCard = () => {
    const [data, setData] = useState([])
    const [value, setValue] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const fetchData = async () => {
        const response = await axios.get('http://localhost:3000/products')
        setIsLoading(false)     
        setData(response.data)

    }

    const handleChange = (e) => {
        setValue(e.target.value)
        console.log(e.target.value);
    }
    useEffect(() => {       
        fetchData()
    }, [])
  return (
    <>
    <label htmlFor="" >Product</label>
    <input type="text" value={value} onChange={handleChange} />

     <div className='cards'>
        {isLoading ? 
        <div>...loading</div> 
        : data.map((item) => (
        <Card key={item.id} {...item}/>
        ))}
    </div>  
    </>
   
  )
}

export default OurCard