import { StyleSheet, View, TextInput, Button } from 'react-native'
import { useState } from 'react'

export default function GoalInput(props) {
  const [text, setText] = useState('')

  function goalInputHandler(enteredText) {
    setText(enteredText)
  }

  function addGoalHandler() {
    props.onAddGoal(text)
    setText('')
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Your 2023 goals!"
        style={styles.textInput}
        onChangeText={goalInputHandler}
        value={text}
      />
      <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
})
