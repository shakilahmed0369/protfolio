import React from 'react'
import { Container, Title } from '../components/common'
import { portfolios } from "../data"
import "../components/lovetodo.css"
function Show({location}) {
 const newData = portfolios.Web.filter((value, index, arr) => {
    return arr.indexOf(value) === location.state.index;
  })


  return (
    <div>
      <Container >
        <Title side="left" title="Project view" />
        {
          newData ?
          (<div style={{ paddingLeft:"50px", paddingRight: "0" }} className="love-to-do">
          <div className="stickpad">
            <h4>{newData[0].name}</h4>
            <p style={{ marginTop: "5px" }}>{newData[0].description}</p>

            {
              newData[0].allImage.map((image) => {
               return <img key={image} style={{ width: "100%", marginTop: "20px", borderRadius: "5px" }} src="https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536_960_720.jpg" alt="dsa" />
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
