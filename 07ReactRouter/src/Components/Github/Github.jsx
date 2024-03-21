import React, { useEffect } from 'react'

function Github() {

    const [data, setData]= React.useState(null)
    useEffect(() => {
        fetch ('https://api.github.com/users/Arun-cloud-dev')
        .then((response) => response.json())
        .then(data => {
            console.log(data)
            setData(data)
        })
    } ,[])

  return (
  
  <img src={data.img} width={100} ></img>
    )
}

export default Github