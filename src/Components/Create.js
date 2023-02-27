import React, { useState } from 'react'
import {FormControlLabel, Typography,FormControl, FormLabel}  from '@mui/material'
import { Button } from '@mui/material'
import { Container } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import { TextField } from '@mui/material';
import { Radio } from '@mui/material';
import { RadioGroup } from '@mui/material';
import { useNavigate } from 'react-router-dom';



export default function Create() {
  const field={
    marginTop: 20,
    marginBottom: 20,
    display: 'block',
}
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [titleError, setTitleError] = useState(false)
  const [detailsError, setDetailsError] = useState(false)
  const [category, setCategory] = useState('money')
  const navigate = useNavigate()

  const handleSubmit = (e) =>{
    e.preventDefault();
    setTitleError(false)
    setDetailsError(false)

    if(title === ""){
      setTitleError(true)
    }

    if(details === ""){
      setDetailsError(true)
    }

    if(title && details){
      fetch('http://localhost:8000/notes', {
        method: 'POST',
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({title, details, category})
      }).then(() => navigate('/'))
      
    }
  }

  return (
    <Container>
      <Typography 
         variant='h6' 
         component="h2"
         color="textSecondary" 
         gutterBottom>
        Create a New Note
      </Typography>
      
      <form noValidate autoComplete='off' onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          error={titleError}
          style={field}
          label="Note Title"
          variant='outlined'
          color='secondary'
          fullWidth
          required
          
        />

        <TextField
          onChange={(e) => setDetails(e.target.value)}
          error ={detailsError}
          style={field}
          label="Details"
          variant='outlined'
          color='secondary'
          multiline
          rows={4}
          fullWidth
          required 
        />

       <FormControl style={field}>
          <FormLabel>Note Category</FormLabel>
          <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
            <FormControlLabel value="money" control={<Radio />} label="Money" />
            <FormControlLabel value="todos" control={<Radio />} label="Todos" />
            <FormControlLabel value="reminders" control={<Radio />} label="Reminders" />
            <FormControlLabel value="work" control={<Radio />} label="Work" />
          </RadioGroup>
        </FormControl>
        
        <Button 
          variant="contained" 
          color="secondary" 
          type="submit" 
          endIcon={<SendIcon />}>
          submit
        </Button> 
      </form>

     
    </Container>
  )
}
