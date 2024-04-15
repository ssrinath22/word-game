import React, { useState } from 'react';
import InputArea from '../components/Input';
import TextArea from '../components/Output';
import axios, { AxiosResponse } from 'axios';
import { clearHistory, addInteractionToLocalStorage } from '../utils/UpdateLocalStorage';

import '../App.css';
import { sendUserQuery } from '../apis/game-api';
import HistoryArea from '../components/History';
import GameMenu from '../components/GameMenu';


function GamePage() {
    const [response, setResponse] = useState<string>('')
    const [started, setStarted] = useState<boolean>(false)
    const [query, setQuery] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [historyActive, setHistoryActive] = useState<boolean>(false)

    const handleSubmit = async () => {
        setIsLoading(true)

        const res: AxiosResponse<any, any> = await sendUserQuery(query)
        addInteractionToLocalStorage({ userQuery: query, llmResponse: res.data })

        setIsLoading(false)

        setQuery('')
        setResponse(res.data)
        if (!started) setStarted(true);
    };


    return (
        <div
            className="App"
            style={{
                backgroundColor: '#FFF7D4',
            }}
        >
            <HistoryArea isActive={historyActive} setIsActive={setHistoryActive} />

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',

                }}
            >
                <GameMenu
                    clearHistory={clearHistory}
                    setHistoryActive={setHistoryActive}
                    historyActive={historyActive} />
                <TextArea
                    started={started}
                    setStarted={setStarted}
                    response={response}
                    isLoading={isLoading}
                />
                <InputArea
                    started={started}
                    setQuery={setQuery}
                    query={query}
                    handleSubmit={handleSubmit}
                />
            </div>
        </div>
    );
}

export default GamePage;
