import React, {useState} from "react";
import {Container, FormControl, Grid, InputLabel, MenuItem, Select} from "@mui/material";
import {MyButton} from "../../../common/MyButton";
import './fifthStep.scss'

export const FifthStep = () => {

    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <Container className='fifthStep' sx={{mb: '50px', minHeight: '500px'}}>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <div>
                        <h2 style={{lineHeight: '1.5'}}>Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod</h2>
                    </div>

                    <div className='selectInputs'>
                        <FormControl fullWidth variant="standard" sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-standard-label">label</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={age}
                                onChange={handleChange}
                                label="label"
                            >
                                <MenuItem value=""><em>None</em></MenuItem>
                                <MenuItem value='10'>Ten</MenuItem>
                                <MenuItem value='20'>Twenty</MenuItem>
                                <MenuItem value='30'>Thirty</MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl fullWidth variant="standard" sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-standard-label1">label</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label1"
                                id="demo-simple-select-standard1"
                                value={age}
                                onChange={handleChange}
                                label="label"
                            >
                                <MenuItem value=""><em>None</em></MenuItem>
                                <MenuItem value='10'>Ten</MenuItem>
                                <MenuItem value='20'>Twenty</MenuItem>
                                <MenuItem value='30'>Thirty</MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl fullWidth variant="standard" sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-standard-label2">label</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label2"
                                id="demo-simple-select-standard2"
                                value={age}
                                onChange={handleChange}
                                label="label"
                            >
                                <MenuItem value=""><em>None</em></MenuItem>
                                <MenuItem value='10'>Ten</MenuItem>
                                <MenuItem value='20'>Twenty</MenuItem>
                                <MenuItem value='30'>Thirty</MenuItem>
                            </Select>
                        </FormControl>



                        {/*<Grid container className='selectInputs'>*/}
                        {/*    <Grid item xs={12} md={6}>*/}
                        {/*        <FormControl fullWidth variant="standard" sx={{ m: 1, minWidth: 120 }}>*/}
                        {/*            <InputLabel id="demo-simple-select-standard-label">label</InputLabel>*/}
                        {/*            <Select*/}
                        {/*                labelId="demo-simple-select-standard-label"*/}
                        {/*                id="demo-simple-select-standard"*/}
                        {/*                // value={age}*/}
                        {/*                // onChange={handleChange}*/}
                        {/*                label="label"*/}
                        {/*            >*/}
                        {/*                <MenuItem value=""><em>None</em></MenuItem>*/}
                        {/*                <MenuItem value={10}>Ten</MenuItem>*/}
                        {/*                <MenuItem value={20}>Twenty</MenuItem>*/}
                        {/*                <MenuItem value={30}>Thirty</MenuItem>*/}
                        {/*            </Select>*/}
                        {/*        </FormControl>*/}
                        {/*    </Grid>*/}
                        {/*    <Grid item xs={12} md={6}>*/}
                        {/*        <FormControl fullWidth variant="standard" sx={{ m: 1, minWidth: 120 }}>*/}
                        {/*            <InputLabel id="demo-simple-select-standard-label1">label</InputLabel>*/}
                        {/*            <Select*/}
                        {/*                labelId="demo-simple-select-standard-label1"*/}
                        {/*                id="demo-simple-select-standard"*/}
                        {/*                // value={age}*/}
                        {/*                // onChange={handleChange}*/}
                        {/*                label="label"*/}
                        {/*            >*/}
                        {/*                <MenuItem value=""><em>None</em></MenuItem>*/}
                        {/*                <MenuItem value={10}>Ten</MenuItem>*/}
                        {/*                <MenuItem value={20}>Twenty</MenuItem>*/}
                        {/*                <MenuItem value={30}>Thirty</MenuItem>*/}
                        {/*            </Select>*/}
                        {/*        </FormControl>*/}
                        {/*    </Grid>*/}
                        {/*    <Grid item xs={12} md={6}>*/}
                        {/*        <FormControl fullWidth variant="standard" sx={{ m: 1, minWidth: 120 }}>*/}
                        {/*            <InputLabel id="demo-simple-select-standard-label2">label</InputLabel>*/}
                        {/*            <Select*/}
                        {/*                labelId="demo-simple-select-standard-label2"*/}
                        {/*                id="demo-simple-select-standard"*/}
                        {/*                // value={age}*/}
                        {/*                // onChange={handleChange}*/}
                        {/*                label="label"*/}
                        {/*            >*/}
                        {/*                <MenuItem value=""><em>None</em></MenuItem>*/}
                        {/*                <MenuItem value={10}>Ten</MenuItem>*/}
                        {/*                <MenuItem value={20}>Twenty</MenuItem>*/}
                        {/*                <MenuItem value={30}>Thirty</MenuItem>*/}
                        {/*            </Select>*/}
                        {/*        </FormControl>*/}
                        {/*    </Grid>*/}
                        {/*</Grid>*/}
                    </div>

                    <MyButton buttonText='DALEJ'/>
                </Grid>
            </Grid>
        </Container>
    )
}