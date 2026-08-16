

const Messages = ({newMss}) => {

    console.log(newMss)

    let currentUser = JSON.parse(localStorage.getItem('currentUser'))
                
                let messages = []
    
                 let newMessage= { id:crypto.randomUUID(),
                    senderID:currentUser.id,
                    receiverId:currentUser,
                    createdAt: new Date().toISOString(),
                    text: newMss
                }


           messages.push(newMessage)

           console.log(messages)

    return ( 
        <>
            { messages }
                
        </>
     );
}
 
export default Messages;