import React, {useEffect, useState} from "react";
import { Link, Outlet } from "react-router-dom";
import {getElectronics} from "../../../backend/api";
import MainCard from "../../../reuseableComponents/MainCard";
import {Grid, imageListClasses} from "@mui/material";
import Dashboard from "../../dashboard/Dashboard";
import {decodeBase64Image} from "../../../helperFunctions/decodeImage";

const MobileList = () => {
    const [mobiles, setMobiles] = useState([])


    const getMobiles = async ()=>{
        const response =  await getElectronics();
        console.log("Alla elektronics",response)
        response.map((electronic) =>{
            console.log("AHmed söker image ", electronic.thumbnailImage)
            decodeBase64Image(electronic.thumbnailImage)
            console.log("After decoded image ", electronic.thumbnailImage)

        })
        setMobiles(response)
    }
    useEffect(() => {
        getMobiles().then(res => console.log(res))
    }, []);



// Anropa funktionen med din Base64-sträng

    return (
        <Grid container >
            <Grid item xs={4}>
                <Dashboard />
            </Grid>
            <Grid item xs={8}>
                {mobiles.map((mobile) =>(
                    <MainCard
                        image={mobile.thumbnailImage}
                        name={mobile.name}
                        description={mobile.description}
                        batteryHealth={mobile.batteryHealth}
                        screenSize={mobile.screenSize}
                        colors={mobile.colors}
                        condition={mobile.condition}
                        receipt={mobile.receipt}
                        ownershipDuration={mobile.ownershipDuration}
                        price={mobile.price}
                    />
                ))}
            </Grid>
        </Grid>
    );
};

export default MobileList;
