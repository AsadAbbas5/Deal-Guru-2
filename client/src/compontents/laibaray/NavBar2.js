import { Box, Button, IconButton, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import style from "./navbar.module.css"
import SearchIcon from '@mui/icons-material/Search';
import { FaSearch } from 'react-icons/fa'; // Assuming you have the react-icons library installed
function NaveBar2() {
    const [selectedValue, setsecletedValue] = useState()
    const options = [
        { value: "Home1", label: "Home" },
        { value: "Home 2", label: "Home2" },
        { value: "Home3", label: "Home3" }
    ]

    return (

        <Box bgcolor={"#fff"} py={''} px={''} display={"flex"} alignItems={"center"}>
            <Box>
                <Typography fontSize={"2.6rem"} fontWeight={800} color={"#000080"}  fontFamily= 'YourSelectedFont' marginLeft={"3rem"}>
                    Deal Guru
                </Typography>
            </Box>

            <Box>
                <select
                    style={{ backgroundColor: "#fff", border: "none", fontSize: "1.2rem", marginLeft: "7rem", fontFamily: 'YourSelectedFont' }}
                    onChange={(event) => setsecletedValue(event.target.value)}
                    value={selectedValue}
                >
                    {
                        options.map((option) => {
                            return (
                                <option key={option} value={option.value}>
                                    <li>{option.label}</li>
                                </option>
                            )
                        })
                    }
                </select>
            </Box>
            <Box marginLeft={"2rem"}>
                <Link className={style.Link} style={{ fontSize: "1.2rem", fontFamily:'YourSelectedFont' }} >
                    Detials
                </Link>
            </Box>
            <Box marginLeft={"2rem"}>
                <Link className={style.LinkProduct} style={{fontFamily:'YourSelectedFont'}}>
                    products
                </Link>
            </Box>
            <Box marginLeft={"2rem"}>
                <Link className={style.LinkProduct} style={{fontFamily:'YourSelectedFont'}}> 
                    CheckOut
                </Link>
            </Box>
            <Box marginLeft={"2rem"}>
                <Link className={style.LinkProduct} style={{fontFamily:'YourSelectedFont'}}>
                    Shopping Cart
                </Link>
            </Box>
            <Box marginLeft={"2rem"}>
                <Link className={style.LinkProduct} style={{fontFamily:'YourSelectedFont'}}>
                    order Complete
                </Link>
            </Box>
            <Box>
                <input className={style.input} placeholder='Search...' type='name'/>
            </Box>
            <Box marginLeft={"1rem"} width={"4rem"} borderRadius={"0.1rem"}  backgroundColor="#f9429e">
                        <IconButton>
                        <SearchIcon  color='#fff' sx={{alignItems:"center" , color:"#fff" ,alignItems:"center" }} />
                        </IconButton> 
            </Box>
            
        </Box>
    )
}
export default NaveBar2