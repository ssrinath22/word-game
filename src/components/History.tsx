import React, { useEffect, useState } from "react";
import { Card } from "@mui/material";
import { retrieveAllInteractionsFromLocalStorage } from '../utils/UpdateLocalStorage';

type Interaction = {
    userQuery: string;
    llmResponse: string;
}

type SingleInteractionProps = {
    interaction: Interaction;
}

const SingleInteraction: React.FC<SingleInteractionProps> = ({ interaction }) => {
    return (
        <div
            // variant="outlined"
            style={{
                // margin: '10px 20%',
                padding: '10px',
                display: 'flex',
                flexDirection: 'row',
            }}
        >
            <div
                style={{
                    border:'1px dashed black',
                    width: '20%',
                    textAlign:'center',
                }}
            >
                Hello World
            </div>
            <div
                style={{
                    border: '1px solid black',
                    width: '80%',
                }}
            >
                <b>User Query:</b> {interaction.userQuery}
                <br />
                <b>Response:</b> {interaction.llmResponse}
            </div>

        </div>
    );
};

type historyAreaProps ={
    isActive:boolean
}
const HistoryArea: React.FC<historyAreaProps> = ({isActive}: historyAreaProps) => {
    const [interactions, setInteractions] = useState<Interaction[] | undefined>([]);

    useEffect(() => {
        const updateInteractions = () => {
            const allInteractions = retrieveAllInteractionsFromLocalStorage();
            setInteractions(allInteractions);
        };

        updateInteractions();

        window.addEventListener('localStorageInteractionsUpdated', updateInteractions);

        return () => {
            window.removeEventListener('localStorageInteractionsUpdated', updateInteractions);
        };
    }, []);

    return (
        <div style={{
            zIndex: 100,
            position:'absolute',
            margin: '0 0',
            width:isActive ? '30%' : '0%',
            maxWidth: '20%',
            overflowY: 'scroll',
            transition:'all 1s',
        }}
        >
            <h1>Interaction History</h1>
            {interactions && interactions.length > 0 ? (
                [...interactions].reverse()?.map((interaction, index) => (
                    <SingleInteraction
                        key={index}
                        interaction={interaction}
                    />
                ))
            ) : (
                <div
                    style={{
                        textAlign: 'center',
                    }}
                >
                    No interactions found.
                </div>
            )}
        </div>
    );
};

export default HistoryArea;

