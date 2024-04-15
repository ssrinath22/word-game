import React, { useState } from 'react'
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { Send } from '@mui/icons-material';

interface InputProps {
    started: boolean
    handleSubmit: () => void;
    setQuery: (newQuery: string) => void;
    query: string;
}

const InputArea: React.FC<InputProps> = ({ started, setQuery, query, handleSubmit }) => {
    const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>): void => {
        if (event.key === 'Enter') {
            handleSubmit();
        }
    };

    return (
        <div
            className='inputTextDiv'
            style={{
                width: '100%',
            }}>
            <TextField
                disabled={!started}
                className="inputText"
                variant="outlined"
                value={started ? query : 'Click the dog to begin the game'}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                InputProps={{
                    endAdornment: (
                        <InputAdornment
                            position='end'>
                            <IconButton
                                disabled={!started}
                                onClick={handleSubmit}>
                                <Send />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
                style={{
                    backgroundColor: started ? '#F8FAE5' : 'transparent',
                    width: '60%',
                }}
            />
        </div>
    );
}

export default InputArea;
