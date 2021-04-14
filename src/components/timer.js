import { useState , useEffect } from 'react'

const DisplayDateTime = () => {

    const [date,setDate] = useState(new Date());
    
    useEffect(() => {
        let timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    return(
        <div>
            It's currently
            <h1> Time : {date.toLocaleTimeString()}</h1>
            <h1> Date : {date.toLocaleDateString()}</h1>

        </div>
    )
}

export default DisplayDateTime
