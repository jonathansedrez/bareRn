import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

function Home(): React.JSX.Element {
  const [taskInput, setTaskInput] = useState('');
  const [tasks, setTasks] = useState<{id: string; text: string}[]>([]);

  const handleAddTask = () => {
    setTasks([
      ...tasks,
      {
        id: `${Date.now()}-${Math.floor(Math.random() * 100000)}`,
        text: taskInput,
      },
    ]);
    setTaskInput('');
  };

  const handleRemoveTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="New task"
        returnKeyType="done"
        value={taskInput}
        onChangeText={setTaskInput}
        onSubmitEditing={handleAddTask}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
        <Text style={styles.addButtonText}>Add</Text>
      </TouchableOpacity>
      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.taskItem}>
            <Text>{item.text}</Text>
            <TouchableOpacity onPress={() => handleRemoveTask(item.id)}>
              <Text style={styles.removeText}>X</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();
function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="home" component={Home} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    marginTop: 64,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 8,
    borderRadius: 5,
  },
  addButton: {
    backgroundColor: 'blue',
    padding: 8,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 16,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  removeText: {
    color: 'red',
    fontWeight: 'bold',
  },
});
