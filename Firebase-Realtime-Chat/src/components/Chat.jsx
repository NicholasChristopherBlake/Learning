import { Container, Button, Grid, TextField, Avatar } from "@mui/material";
import React, {useContext, useEffect, useState} from "react"
import {useAuthState} from 'react-firebase-hooks/auth';
import {useCollectionData} from 'react-firebase-hooks/firestore'
import { Context } from "../main";
import {
  collection, addDoc, Timestamp, getDocs, doc,query,onSnapshot,orderBy, QuerySnapshot,
} from "firebase/firestore";
import Loader from "./Loader";

const Chat = () => {
  const {auth, firestore} = useContext(Context)
  const [user] = useAuthState(auth);
  const [value, setValue] = useState('')
  const [messages, loading] = useCollectionData(
    query(collection(firestore, 'messages'))
  );
  const [messagesData, setMessagesData] = useState([]);

  const sendMessage = async () => {
      const docRef = await addDoc(collection(firestore, "messages"), {
        uid: user.uid,
        displayName: user.displayName,
        photoURL: user.photoURL,
        text: value,
        createdAt: Timestamp.fromDate(new Date()),
      });
    console.log("Document written with ID: ", docRef.id);
    setValue("");
  };
  const getMessages = async () => {
    const q = query(collection(firestore, 'messages'), orderBy('createdAt', 'asc'))

    onSnapshot(q, (QuerySnapshot) => {
      setMessagesData([])
      QuerySnapshot.docs.map((doc) => {
        setMessagesData((prevState) => {
        return [...prevState, doc.data()]
      })
      })
    })
  }

  useEffect(() => {
    getMessages()
  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <Container>
      <Grid container style={{height: window.innerHeight - 50, marginTop: '20px'}}
      justifyContent={'center'}>
        <div style={{width: '80%', height: '60vh', border: '1px solid gray', overflowY: 'auto'}}>
          {messagesData.map(message =>
            <div key={message.createdAt} style={{margin: '10px', border: user.uid === message.uid ? '2px solid teal' : '2px dashed red', 
            marginLeft: user.uid === message.uid ? 'auto' : '10px',
            width: 'fit-content',
            padding: 5}}>
              <Grid container>
                <Avatar src={message.photoURL} />
                <div>{message.displayName}</div>
              </Grid>
              <div>{message.text}</div>
            </div>
          )}
        </div>
        <Grid container direction={'column'} alignItems={'flex-end'} style={{width: '80%'}}>
            <TextField 
            variant={'outlined'}
            fullWidth
            maxRows={2}
            value={value}
            onChange={e => setValue(e.target.value)} />
            <Button onClick={sendMessage} variant={'outlined'}>Send</Button>
        </Grid>
      </Grid>
    </Container>
  )
};

export default Chat;
