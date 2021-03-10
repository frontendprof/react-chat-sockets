
import React from 'react';
import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";

const ChatFeed = (props) => {

    const {chats,activeChat,userName,messages}=props;

    const chat=chats&&chats[activeChat]

    const renderMessages=()=>{
        const keys=Object.keys(messages)
        console.log(keys)

        return keys.map((key,index)=>{
            const message=messages[key];
            const lastMessageKey=index===0?null:keys[index-1]
            const isMyMessage=username===message.sender.username;

            return(
                <div key={`msg_${index}`} style={{ width="100%" }}>
                    <div className="message-block">
                        {
                            isMyMessage
                            ? <MyMessage />
                            : <TheirMessage />
                        }
                    </div>
                </div>
            )
        })
    }

    renderMessages();

    return (
        <div>
            <h2>Chat Feed</h2>
        </div>
    )
}

export default ChatFeed
