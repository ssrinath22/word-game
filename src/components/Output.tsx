import { CircularProgress, Paper, TextField } from "@mui/material"
interface OutputProps {
    response: string;
    isLoading: boolean; // Assume this prop determines if the response is loading
}
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

const TextArea: React.FC<OutputProps> = ({ response, isLoading }) => {

    return (
        <div
            className='outputTextDiv'
            style={{
                width: '100%',
                backgroundColor: 'transparent',
                alignItems:'center',
                transition:'all 1s',
            }}>
            <div 
                className="outputText" 
                style={{
                    padding:'5% 0',
                    margin:'0 20%',
                    border: '1px solid black',
                }}
                >
                {isLoading ? <LoadingAnimation /> : response}
            </div>
        </div>
    )
}

export default TextArea;
