

const Messages = () => {

    let currentUser = JSON.parse(localStorage.getItem('currentUser'))
                
                let messages = []
    
                 let newMessage= { id:crypto.randomUUID(),
                    senderID:currentUser.id,
                    receiverId:currentUser,
                    createdAt: new Date().toISOString()
                }


           messages.push(newMessage)

    return ( 
        <>
            { messages }
                
        </>
     );
}
 
export default Messages;