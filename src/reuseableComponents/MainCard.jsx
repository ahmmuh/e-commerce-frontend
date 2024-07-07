import React  from "react";
import {Button} from "@mui/material";


 const MainCard = (props)=>{
    console.log(props)
    return (

                    <div className="card">
                        <img src={props.thumbnailImage} width={100} height={100} className="card-img-top" alt="Mobile"/>
                        <div className="card-body">
                            <h5 className="card-title">{props.name}</h5>
                            <p className="card-text">Beskrivning{props.description}</p>
                            <p>Battery Hälsa {props.batteryHealth}</p>
                            <p>Skärmstorlek {props.screenSize}</p>
                            <p>Färg: {props.colors}</p>
                            <p>Skick: {props.condition}</p>
                            <p>Receipt: {props.receipt}</p>
                            <p>Ägande längd: {props.ownershipDuration}</p>
                            <span><strong>Pris: {props.price} SEK</strong></span> <br/>
                            <Button fullWidth variant="contained">Köp</Button>

                        </div>
                </div>
    )
 }

export default MainCard;