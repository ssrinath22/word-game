import { History, Refresh } from "@mui/icons-material"
import { Button } from "@mui/material"

type GameMenuProps = {
    clearHistory: () => void
    historyActive: boolean
    setHistoryActive:(arg0: boolean) => void
}

const GameMenu:React.FC<GameMenuProps> = ({clearHistory, historyActive, setHistoryActive}: GameMenuProps) => {
    return(
        <div
                style={{
                    margin: '0 20%',
                    display:'flex',
                    flexDirection:'row',
                }}
                >
                    <Button
                        disabled={true} /** NOT READY */
                        onClick={() => clearHistory()}
                    >
                        <Refresh />
                    </Button>
                    <Button
                        onClick={() => setHistoryActive(!historyActive)}
                    >
                        <History />
                    </Button>

                </div>
    )
}

export default GameMenu