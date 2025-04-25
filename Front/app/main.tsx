"use client" // this tells Next to make it a client component
import { Button, TextField } from '@mui/material';
import { useEffect, useState } from 'react';

export default function MainPage() {
    const [mailValue, setMailValue] = useState<string>() // initial mail value is an empty string
    const [passwordValue, setPasswordValue] = useState<string>()
    const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true) // initially the button should be disabled
    const [submitted, setSubmitted] = useState<boolean>(false)

    const onChangeMail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMailValue(event.target.value)
    }
    const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordValue(event.target.value)
    }

    const re = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    useEffect(() => {
        if (mailValue != "") {
            setIsButtonDisabled(true)
        } else { setIsButtonDisabled(false) }
    }, [mailValue]); // useEffect is a react function that executes everytime a value is changed, in this case we check every time mailValue changes

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                paddingTop: 20
            }}>
            <h1 style={{ marginBottom: '30px', fontSize: '30px' }}>
                Submit your data
            </h1>
            <TextField
                style={{ height: '30px', width: '300px', marginBottom: '50px' }}
                onChange={onChangeMail}
                helperText="email"
            />
            <TextField
                style={{ height: '30px', width: '300px', marginBottom: '50px' }}
                helperText="password"
                type="password"
                onChange={onChangePassword}
            />
            <Button
                disabled={passwordValue === "" || !re.test(String(mailValue)?.toLowerCase())}
                variant='contained'
                color="primary"
                style={{ color: isButtonDisabled ? 'black' : 'white', 
                backgroundColor: isButtonDisabled ? 'grey' : 'blue',
                marginBottom: '30px' }}
                onClick={() => setSubmitted(true)}
                >
                Submit
            </Button>
            {submitted && <p>Succesfully submitted!</p>}
        </div>
    );
}