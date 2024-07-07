import React, {useEffect, useState} from "react";
import { Link, Outlet } from "react-router-dom";
import {getElectronics} from "../../../backend/api";

const MobileList = () => {
    const [mobiles, setMobiles] = useState([])


    const getMobiles = async ()=>{
        const response =  await getElectronics();
        console.log(response)
        setMobiles(response)
    }
    useEffect(() => {
        getMobiles()
    }, []);
    return (
        <div className="container">
            {
                mobiles.map((mobile) => <div className="col-4" key={mobile._id}>
                    <h3>{mobile.name}</h3>
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">batteryHealth</th>
                            <th scope="col">Colors</th>
                            <th scope="col">Condition</th>
                            <th scope="col">Description</th>
                            <th scope="col">Profile image</th>
                            <th scope="col">location</th>
                            <th scope="col">OwnershipDuration</th>
                            <th scope="col">Receipt</th>
                            <th scope="col">ScreenSize</th>


                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td colSpan="2">{mobile.batteryHealth}</td>
                            <td>{mobile.colors}</td>
                            <td>{mobile.condition}</td>
                            <td>{mobile.description}</td>
                            <td>Image</td>
                            <td></td>
                            <td>{mobile.colors}</td>
                            <td>{mobile.ownershipDuration}</td>
                            <td>{mobile.receipt}</td>
                            <td>{mobile.screenSize}</td>
                            <img src={mobile.thumbnailImage} alt="Mobile Bild"/>
                        </tr>
                        </tbody>
                    </table>

                </div>)
            }
        </div>
    );
};

export default MobileList;
