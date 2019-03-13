import * as React from 'react';
import { View, FlatList, Text, TouchableOpacity, Button, StyleSheet } from 'react-native';

export interface todo{
  id: number;
  title: string;
  isComplete: boolean;
}

export interface TodoProps {
  todoData?: todo[];
  changeTodoStatus?: (id: number)=>void;
  add?: (title: string) => void;
}

const todoScreen: React.SFC<TodoProps> = ({
  todoData = [],
  changeTodoStatus = (id: number) => {},
  add = (title: string) => {},
  }) => {
  return (
    <View style={{marginTop: 64}}>
      <Button title={'追加'} onPress={()=>add('タイトル')} />
      <FlatList
        data = { todoData }
        renderItem = {({item})=>(
          <TouchableOpacity style={styles.container} onPress={()=>{ changeTodoStatus(item.id) }}>
            <Text>{ item.title }</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default todoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});