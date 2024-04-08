import React, { useState } from 'react'
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { Send } from '@mui/icons-material';

interface InputProps {
    handleSubmit: () => void;
    setQuery: (newQuery: string) => void;
    query: string;
}

const InputArea: React.FC<InputProps> = ({ setQuery, query, handleSubmit }) => {
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
                className="inputText"
                variant="outlined"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position='end'>
                            <IconButton onClick={handleSubmit}>
                                <Send />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
                style={{
                    width: '60%',
                }}
            />
        </div>
    );
}

export default InputArea;
