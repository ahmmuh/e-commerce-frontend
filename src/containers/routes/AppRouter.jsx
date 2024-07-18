import React,{lazy, Suspense} from "react";
import {
    BrowserRouter,
    BrowserRouter as Router,
    RouterProvider,
    createBrowserRouter,
} from "react-router-dom";
const NotFound = lazy(() => import('../error/NotFound.jsx'));
const Dashboard = lazy(() => import('../dashboard/Dashboard'));
const HobbyList = lazy(() => import ("../hobbies/HobbyList"));
const BookPage = lazy(() => import ("../hobbies/books/BookPage"));
const AddGirl = lazy(() => import ("../clothes/children/girls/AddGirl"));
const AddBook = lazy(() => import ("../hobbies/books/AddBook"));
const BoatPage =  lazy(() => import ("../hobbies/boats/BoatPage"));
const AddBoat = lazy(() => import ("../hobbies/boats/AddBoat"));
const ElectronicList = lazy(() => import ("../electronics/ElectronicList"));
const LaptopPage = lazy(() => import ("../electronics/laptops/LaptopPage"));
const AddLaptop = lazy(() => import ("../electronics/laptops/AddLaptop"));
const MobilePage = lazy(() => import ("../electronics/mobiles/MobilePage"));
const AddMobile = lazy(() => import ("../electronics/mobiles/AddMobile"));
const MobileList = lazy(() => import ("../electronics/mobiles/MobileList"));
const IpadPage = lazy(() => import ("../electronics/ipads/IpadPage"));
const AddIpad =  lazy(() => import ("../electronics/ipads/AddIpad"));
const DesktopPage = lazy(() => import ("../electronics/desktops/DesktopPage"));
const AddDesktop = lazy(() => import ("../electronics/desktops/AddDesktop"));
const AllHouses = lazy(() => import ("../houses/AllHouses"));
const HouseRentList = lazy(() => import ("../houses/rent/HouseRentList"));
const AddRentHouse = lazy(() => import ("../houses/rent/AddRentHouse"));
const AppartmentRentPage = lazy(() => import ("../houses/rent/AppartmentRentPage"));
const HouseRentPage = lazy(() => import ("../houses/rent/HusRentPage"));
const VilaRentPage = lazy(() => import ("../houses/rent/VilaRentPage"));
const HouseSellList = lazy(() => import ("../houses/sell/HouseSellList"));
const AddSellHouse = lazy(() => import ("../houses/sell/AddSellHouse"));
const AppartmentSellPage = lazy(() => import ("../houses/sell/AppartmentSellPage"));
const HouseSellPage = lazy(() => import ("../houses/sell/HusSellPage"));
const VillaSellPage = lazy(() => import ("../houses/sell/VillaSellPage"));
const VehicleList = lazy(() => import ("../vehicles/VehicleList"));
const CarPage = lazy(() => import ("../vehicles/CarPage"));
const AddCar =  lazy(() => import ("../vehicles/AddCar"));
const BusPage = lazy(() => import ("../vehicles/BusPage"));
const AddBus = lazy(() => import ("../vehicles/AddBus"));
const TrackPage = lazy(() => import ("../vehicles/TrackPage"));
const AddTrack = lazy(() => import ("../vehicles/AddTrack"));
const MopedPage = lazy(() => import ("../vehicles/MopedPage"));
const AddMoped = lazy(() => import ("../vehicles/AddMoped"));
const MotorCyclePage = lazy(() => import ("../vehicles/MotorCyclePage"));
const AddMotorCycle = lazy(() => import ("../vehicles/AddMotorCycle"));
const Clothes = lazy(() => import ("../clothes/Clothes"));
const Adults = lazy(() => import ("../clothes/adults/Adults"));
const MenPage = lazy(() => import ("../clothes/adults/MenPage"));
const AddMan = lazy(() => import ("../clothes/adults/AddMan"));
const WomenPage = lazy(() => import ( "../clothes/adults/WomenPage"));
const AddWoman = lazy(() => import ("../clothes/adults/AddWoman"));
const ChildrenList = lazy(() => import ("../clothes/children/ChildrenList"));
const BoysPage = lazy(() => import ("../clothes/children/boys/BoysPage"));
const AddBoy = lazy(() => import ("../clothes/children/boys/AddBoy"));
const GirlsPage = lazy(() => import ("../clothes/children/girls/GirlsPage"));
const App = lazy(() => import ("../../App"));

export const AppRouter = () =>{
    //return
}
const AppRoutes = createBrowserRouter([
    {
        path: "/",
        element: (
            <Suspense fallback={<div>Loading...</div>}> <App />,
            </Suspense>
        ),
        errorElement: <NotFound />,
    },
    {
        path: "/start",
        element: (
            <Suspense fallback={<div>Loading...</div>}>
        element: <Dashboard />
            </Suspense>
        )
    },

    {
        path: "hobbies",
        element: (
            <Suspense fallback={<div>Loading...</div>}>

            <HobbyList />
            </Suspense>
        ),
        children: [
            {
                path: "books",

                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <BookPage />
                    </Suspense>
                ),
                children: [
                    {
                        path: "addbook",
                        element: (
                            <Suspense fallback={<div>Loading...</div>}>
                                <AddBook />
                            </Suspense>
                        )
                    },
                ],
            },
            {
                path: "boats",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <BoatPage />
                    </Suspense>
                ),
                children: [
                    {
                        path: "addboat",
                        element: (
                            <Suspense fallback={<div>Loading...</div>}>
                                <AddBoat />
                            </Suspense>
                        )
                    },
                ],
            },
        ],
    },

    {
        path: "electronics",
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <ElectronicList />
            </Suspense>
        ),
        children: [
            {
                path: "laptops",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <LaptopPage />

                    </Suspense>
                ),
                children: [
                    {
                        path: "addlaptop",
                        element: (
                            <Suspense fallback={<div>Loading...</div>}>
                                <AddLaptop />

                            </Suspense>
                        ),
                    },
                ],
            },
            {
                path: "mobiles",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>

                        <MobilePage />

                    </Suspense>
                ),
                children: [
                    {
                        path: "addmobile",
                        element: (
                            <Suspense fallback={<div>Loading...</div>}>

                                <AddMobile />
                            </Suspense>
                        )
                    },
                    {
                        path: "mobileList",
                        element: (
                            <Suspense fallback={<div>Loading...</div>}>
                                <MobileList />
                            </Suspense>
                        )
                    }
                ],
            },
            {
                path: "ipads",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>

                        <IpadPage />
                    </Suspense>
                ),
                children: [
                    {
                        path: "addipad",
                        element: (
                            <Suspense fallback={<div>Loading...</div>}>
                                <AddIpad />

                            </Suspense>),
                    },
                ],
            },
            {
                path: "desktops",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <DesktopPage />
                    </Suspense>)
                        ,
                children: [
                    {
                        path: "adddesktop",
                        element: (
                            <Suspense fallback={<div>Loading...</div>}>
                                <AddDesktop />

                            </Suspense> ),
                    },
                ],
            },
        ],
    },
    {
        path: "/houses",
        element: <AllHouses />,
        children: [
            {
                path: "rents",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <HouseRentList /> </Suspense>),
                children: [
                    {
                        path: "addrenthouse",
                        element: (
                            <Suspense fallback={<div>Loading...</div>}>

                                <AddRentHouse />

                            </Suspense>),
                    },
                    {
                        path: "appartmentrent",
                        element: (
                            <Suspense fallback={<div>Loading...</div>}>

                                <AppartmentRentPage /> </Suspense>),
                    },
                    {
                        path: "houserent",
                        element: (
                            <Suspense fallback={<div>Loading...</div>}>
                                <HouseRentPage /> </Suspense>),
                    },
                    {
                        path: "villarent",
                        element: (
                            <Suspense fallback={<div>Loading...</div>}>
                                <VilaRentPage /> </Suspense>),
                    },
                ],
            },
            {
                path: "sells",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>

                        <HouseSellList />

                    </Suspense>),
                children: [
                    {
                        path: "addsellhouse",
                        element: (
                            <Suspense fallback={<div>Loading...</div>}>
                                <AddSellHouse /> </Suspense>),
                    },
                    {
                        path: "appartmentsell",
                        element: (
                            <Suspense fallback={<div>Loading...</div>}>
                                <AppartmentSellPage /> </Suspense>),
                    },
                    {
                        path: "housesell",
                        element: (
                            <Suspense fallback={<div>Loading...</div>}>  <HouseSellPage /> </Suspense>
                        ),
                    },
                    {
                        path: "villasell",
                        element: (
                            <Suspense fallback={<div>Loading...</div>}>
                                <VillaSellPage /> </Suspense>),
                    },
                ],
            },
        ],
    },

    {
        path: "/vehicles",
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <VehicleList /> </Suspense>),

        children: [
            {
                path: "cars",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <CarPage /> </Suspense>
                ),
                children: [
                    {
                        path: "addcar",
                        element: (
                            <Suspense fallback={<div>Loading...</div>}>
                                <AddCar /> </Suspense>
                        ),
                    },
                ],
            },

            {
                path: "buses",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <BusPage /> </Suspense>),
                children: [
                    {
                        path: "addbus",
                        element: (
                            <Suspense fallback={<div>Loading...</div>}>  <AddBus /> </Suspense>
                        ),
                    },
                ],
            },
            {
                path: "tracks",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <TrackPage /> </Suspense>),
                children: [
                    {
                        path: "addtrack",
                        element: (
                            <Suspense fallback={<div>Loading...</div>}>
                                <AddTrack /> </Suspense>),
                    },
                ],
            },
            {
                path: "mopeds",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <MopedPage /> </Suspense>),
                children: [
                    {
                        path: "addmoped",
                        element: (
                            <Suspense fallback={<div>Loading...</div>}>
                                <AddMoped /> </Suspense>),
                    },
                ],
            },
            {
                path: "motorcycles",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <MotorCyclePage /> </Suspense> ),
                children: [
                    {
                        path: "addmotorcycle",
                        element: (
                            <Suspense fallback={<div>Loading...</div>}>
                                <AddMotorCycle /> </Suspense>),
                    },
                ],
            },
        ],
    },
    {
        path: "clothes",
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <Clothes /> </Suspense>),
        children: [
            {
                path: "adults",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <Adults /> </Suspense>),
                children: [
                    {
                        path: "men",
                        element: (
                            <Suspense fallback={<div>Loading...</div>}>
                                <MenPage /> </Suspense>),
                        children: [
                            {
                                path: "addman",
                                element: (
                                    <Suspense fallback={<div>Loading...</div>}>
                                        <AddMan /> </Suspense>),
                            },
                        ],
                    },
                    {
                        path: "women",
                        element: (
                            <Suspense fallback={<div>Loading...</div>}>
                                <WomenPage /> </Suspense>),
                        children: [
                            {
                                path: "addwoman",
                                element: (
                                    <Suspense fallback={<div>Loading...</div>}>  <AddWoman /> </Suspense>),
                            },
                        ],
                    },
                ],
            },

            {
                path: "children",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <ChildrenList /> </Suspense>
                ),
                children: [
                    {
                        path: "boys",
                        element: (
                            <Suspense fallback={<div>Loading...</div>}>  <BoysPage /> </Suspense>),
                        children: [
                            {
                                path: "addboy",
                                element: (
                                    <Suspense fallback={<div>Loading...</div>}>  <AddBoy /> </Suspense>),
                            },
                        ],
                    },
                    {
                        path: "girls",
                        element: (
                            <Suspense fallback={<div>Loading...</div>}>  <GirlsPage /> </Suspense>),
                        children: [{ path: "addgirl", element: <AddGirl /> }],
                    },
                ],
            },
        ],
    },
]);




 export default AppRoutes;