import React, { useEffect, useState } from "react";
import { Card } from "@mui/material";
import { retrieveAllInteractionsFromLocalStorage } from '../utils/UpdateLocalStorage';
import { ArrowBack, Close, Expand, ExpandCircleDown, ExpandLessOutlined, ExpandMoreOutlined } from "@mui/icons-material";

type Interaction = {
    userQuery: string;
    llmResponse: string;
}

type SingleInteractionProps = {
    index: number
    interaction: Interaction
}

const SingleInteraction: React.FC<SingleInteractionProps> = ({ index, interaction }) => {
    const [expanded, setExpanded] = useState<boolean>(false)

    return (
        <div
            // variant="outlined"
            style={{
                backgroundColor: '#FDAF7B',
                margin: '10px 10px',
                border: '1px solid black',
                borderRadius: '10px',
                padding: expanded ? '10px 10px 25px 10px' : '10px 10px 10px 10px',
                position: 'relative',
                maxHeight: expanded ? '100%' : '100px',
                overflow: 'hidden',
            }}
        >
            <div
                style={{
                    backgroundColor: '#FFDD95',
                    borderRadius: '100%',
                    width: '20px',
                    height: '20px',
                    margin: '0 0 10px 0',
                    textAlign: 'center',
                    fontSize: '15px',
                }}
            >
                {index}
            </div>
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    position: 'relative'
                }}
            >
                <b> {index === 1 ? 'HINT' : interaction.userQuery} </b>
                <br />
                {interaction.llmResponse}


            </div>
            <div
                style={{
                    cursor: 'pointer',
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    width: '100%',
                    textAlign: 'center',
                    paddingBottom: '0px',
                    background: 'linear-gradient(to bottom, transparent, #FDAF7B 55%)',
                }}
            >
                <div
                    onClick={() => {
                        setExpanded(!expanded)
                    }}
                >
                    {expanded ? <ExpandLessOutlined /> : <ExpandMoreOutlined />}

                </div>
            </div>
        </div>
    );
};

type historyAreaProps = {
    isActive: boolean
    setIsActive: (arg0: boolean) => void
}
const HistoryArea: React.FC<historyAreaProps> = ({ isActive, setIsActive }: historyAreaProps) => {
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
            color: '#3E3232',
            backgroundColor: '#FFF8DC',
            zIndex: 100,
            position: 'absolute',
            margin: '0 0',
            width: isActive ? '18%' : '0%',
            minWidth: isActive ? '200px' : 0,
            height: '100%',
            overflowY: 'scroll',
            boxShadow: '0 0 3px black',
        }}
        >
            <div
                style={{
                    marginTop: '10px',
                }}
            >
                <div
                    onClick={() => setIsActive(false)}
                    style={{
                        border: '1px solid black',
                        borderRadius: '100%',
                        cursor: 'pointer',
                        marginLeft: '45%',
                        width: '25px',
                        height: '25px',
                        backgroundColor: '#FDAF7B',
                    }}
                >
                    <Close />
                </div>
            </div>
            <h1>Previous Guesses</h1>
            {interactions && interactions.length > 0 ? (
                [...interactions].reverse()?.map((interaction, index) => (
                    <SingleInteraction
                        index={interactions.length - index}
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

