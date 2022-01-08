import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Container, Paper, Button} from '@material-ui/core';
import { useState, useEffect } from 'react';
//import { Button } from '@mui/material';

export default function Student() {
    const paperStyle = {padding:'50px 20px', width: 600, margin:"20px auto"}
    const[name,setName]=useState('')
    const[address,setAddress]=useState('')
    const[students,setStudents]=useState([]) //initilize empty array to be filled later

    const handleClick=(e)=>{
        window.location.reload();
        e.preventDefault();
        const student={name,address}
        console.log(student)
        //fetch API call using route *MOST IMPORTANT PART*
        fetch("http://localhost:8080/student/add",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(student)
        
    }).then(()=>{
        console.log("New Student Added")
    })
    }

    //grab info from database and display it using react hook
    useEffect(()=>{
        fetch("http://localhost:8080/student/getAll")
        .then(res=>res.json())
        .then((result)=>{
            setStudents(result);
        }
    )
    },[])
  return (
    <Container>
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color:"blue"}}><u>Add Student</u></h1>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Student Name" variant="outlined" fullWidth
      value={name}
      onChange={(e)=>setName(e.target.value)}
      />
      <TextField id="outlined-basic" label="Student Address" variant="outlined" fullWidth
      value={address}
      onChange={(e)=>setAddress(e.target.value)}/>
      <Button variant='contained' color='secondary' onClick={handleClick}>Submit</Button>
    </Box>
    </Paper>
    <Paper elevation={3} style={paperStyle}>
        {students.map(student=>(
            <Paper elevation={6} style={{margin:"10px", padding:"15px", textAlign:"left"}} key={student.id}>
                ID: {student.id}<br/>
                Name: {student.name}<br/>
                Address: {student.address}

            </Paper>
                
                ))
                }
    </Paper>
    </Container>
  );
}
