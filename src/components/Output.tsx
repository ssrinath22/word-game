import { Button, CircularProgress, Paper, TextField } from "@mui/material"

const LoadingAnimation: React.FC = () => {
    return (
        <CircularProgress
            size={24}
            style={{
                top: '50%', // Center vertically in the parent
                left: '50%', // Center horizontally in the parent
                transform: 'translate(-50%, -50%)',
            }}
        />
    )
}

interface OutputProps {
    started: boolean
    setStarted: (arg0: boolean) => void
    response: string
    isLoading: boolean // Assume this prop determines if the response is loading
}

const TextArea: React.FC<OutputProps> = ({ started, setStarted, response, isLoading }) => {

    return (
        <div
            className='outputTextDiv'
            style={{
                width: '100%',
                backgroundColor: 'transparent',
                alignItems: 'center',
                transition: 'all 1s',
            }}>
            <div
                className="outputText"
                style={{
                    position: 'relative',
                    backgroundColor: started ? '#F8FAE5' : 'transparent',
                    padding: '5% 0',
                    margin: '0 20%',
                    border: started ? '1px solid lightgrey' : 'none',
                    borderRadius: '5px',
                    overflow: 'hidden',
                    minHeight:'100px',
                }}
            >
                {started ?
                    <>
                        {isLoading ? <LoadingAnimation /> : response}
                    </>
                    :
                    <>
                        <img
                            onClick={() => setStarted(true)}
                            style={{
                                cursor:'pointer',
                                top: '10%',
                                left: '35%',
                                position: 'absolute',
                                height: '80%',
                            }}
                            src={require('/Users/sidharthsrinath/Documents/projects/word/word_ts/src/assets/dog_scratching_butt.gif')}
                        />
                    </>
                }
            </div>
        </div>
    )
}

export default TextArea;
