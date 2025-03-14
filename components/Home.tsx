import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';
import {Button} from '@react-navigation/elements';

export function Home(): React.JSX.Element {
  const navigation = useNavigation();

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
      <Button onPress={() => navigation.navigate('other')}>Go to Other</Button>
      <Button
        onPress={() =>
          navigation.navigate('params', {foo: 'string', bar: 123})
        }>
        Go to Params
      </Button>
      <Button
        onPress={() =>
          navigation.navigate('tabs', {
            screen: 'two',
          })
        }>
        Go to Tabs ono tab two
      </Button>
      <Button onPress={() => navigation.navigate('fetcher')}>
        Go to fetcher
      </Button>
    </View>
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
