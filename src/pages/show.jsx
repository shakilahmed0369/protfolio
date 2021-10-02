import React from 'react'
import { Container, Title } from '../components/common'
import { portfolios } from "../data"
import "../components/lovetodo.css"
function Show({location}) {
  console.log(location.state);
 const newData = portfolios.Web.filter((value, index, arr) => {
    if(location.state != null){
     return arr.indexOf(value) === location.state.index;
    }
  })


  return (
    <div>
      <Container >
        <Title side="left" title="Project view" />
        {
          location.state != null ?
          (<div style={{ paddingLeft:"50px", paddingRight: "0" }} className="love-to-do">
          <div className="stickpad">
            <h4>{newData[0].name}</h4>
            <p style={{ marginTop: "5px" }}>{newData[0].description}</p>

            {
              newData[0].allImage.map((image) => {
               return <img key={image} style={{ width: "100%", marginTop: "20px", borderRadius: "5px" }} src={"../../" + image} alt={image} />
              })
            }

          </div>
        </div>) : ''
        }
        
      </Container>
    </div>
  )
}

export default Show
