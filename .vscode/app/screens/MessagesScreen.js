import React, {userState, useState} from 'react';
import { FlatList, View } from 'react-native';
import Constants from 'expo-constants';
import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';

const initialMessages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/mosh.jpg')
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/mosh.jpg')
    }
]

function MessagesScreen(props) {
    const [ messages,setMessages ] = useState(initialMessages);
    const [ refreshing, setRefreshing ] = useState(false);

    const handleDelete = message => {
        setMessages(messages.filter(m => m.id !== message.id))
    }

    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem = {
                    ({item})=><ListItem 
                        title={item.title} 
                        subTitle={item.description} 
                        image={item.image}
                        onPress={
                            ()=>console.log("Message selected ", item)
                        }
                        renderRightActions={ ()=> 
                            <ListItemDeleteAction onPress={()=>handleDelete(item)} /> 
                        }
                    />
                }
                ItemSeparatorComponent = { ListItemSeparator }
                refreshing = {refreshing}
                onRefresh = { () => {
                    setMessages([
                        ...messages, {
                            id: 3,
                            title: 'T3',
                            description: 'D3',
                            image: require('../assets/mosh.jpg')
                        }
                    ])
                } }
            />
        </Screen>
    );
}


export default MessagesScreen;