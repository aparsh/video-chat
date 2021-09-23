import React, { useContext } from 'react'
import { Button } from '@material-ui/core'
import { SocketContext } from '../SocketContext'
const Notifications = () => {
    const {answerCall, call, callAccepted} = useContext(SocketContext)
    return (
        <>
            {call && call.isReceivedCall && !callAccepted && (
                <div styles={{display:"flex", justifyContent:"center"}}>
                    {console.log(call)}
                    <h1>{call.name} is calling!!</h1>
                    <Button variant="contained" color="primary" onClick={answerCall}>
                        Answer call
                    </Button>
                </div>
            )}
        </>
    )
}

export default Notifications
