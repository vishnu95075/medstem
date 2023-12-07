import React, { useState } from 'react'
import { TextField, Button, Paper, Typography, Box } from '@mui/material';

const LogInSignUp = () => {
    const [email, setEmail] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();
        console.log('Logging in...', { email });
    };
    return (
        <Paper elevation={3} style={{ padding: 16, maxWidth: 300, margin: 'auto', marginTop: 150 }}>
            <Typography align='center' variant="h5" gutterBottom>
                Welcome Please... Login
            </Typography>
            <form onSubmit={handleLogin}>
                <TextField
                    required
                    label="Email"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    placeholder='Enter the valid email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <Box align='center'>
                    <Button type="submit" variant="contained" color="primary" >
                        Login
                    </Button>
                </Box>
            </form>
        </Paper>
    )
}

export default LogInSignUp