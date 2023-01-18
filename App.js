import { useState } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import GoalItem from './components/goal-Item'
import GoalInput from './components/goal-Input'

export default function App() {
  const [goals, setGoals] = useState([])

  function addGoalHandler(text) {
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: text, id: Math.random().toString() },
    ])
  }

  function deleteGoalHandler(id) {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id)
    })
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />

      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler}
              />
            )
          }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
})
