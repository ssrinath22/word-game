import { Button, CircularProgress, Paper, TextField } from "@mui/material"

const innerColor = '#6B240C'
const outerColor = '#FFF8DC'
const innerHeavyContrastColor = '#FDAF7B'
const innerLightContrastColor = '#FFDD95'
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
                margin: '0 0 5px 0',
            }}>
            <div
                className="outputText"
                style={{
                    position: 'relative',
                    // backgroundColor: started ? innerHeavyContrastColor : 'transparent',
                    backgroundColor: innerHeavyContrastColor,
                    color: innerColor,
                    padding: '3% 3%',
                    margin: '0 20%',
                    border: started ? `1px solid ${innerColor}` : 'none',
                    borderRadius: '5px',
                    overflow: 'hidden',
                    minHeight: '100px',
                    fontSize: '28px'
                }}
            >
                {started ?
                    <>
                        {
                            isLoading
                                ?
                                // <LoadingAnimation /> 
                                <img
                                    onClick={() => setStarted(true)}
                                    style={{
                                        pointerEvents: 'none',
                                        cursor: 'pointer',
                                        top: '10%',
                                        left: '45%',
                                        position: 'absolute',
                                        height: '80%',
                                    }}
                                    src={require('..//assets/crystalball_fast.gif')}
                                />
                                :
                                response
                        }
                    </>
                    :
                    <>
                        <img
                            alt="dog gif"
                            onClick={() => setStarted(true)}
                            style={{
                                cursor: 'pointer',
                                top: '10%',
                                left: '40%',
                                position: 'absolute',
                                height: '80%',
                            }}
                            src={require('../assets/dog_scratching_butt.gif')}
                        />
                    </>
                }
            </div>
        </div >
    )
}

export default TextArea;
