import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import ScoreCard from './components/ScoreCard';

const App = () => {
  const [teamA, setTeamA] = useState('Tim A');
  const [teamB, setTeamB] = useState('Tim B');
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);

  // Reset skor
  const resetScore = () => {
    setScoreA(0);
    setScoreB(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pertandingan Futsal</Text>
      <ScoreCard
        teamName={teamA}
        score={scoreA}
        onIncrease={() => setScoreA(scoreA + 1)}
        onDecrease={() => setScoreA(scoreA > 0 ? scoreA - 1 : 0)}
      />
      <ScoreCard
        teamName={teamB}
        score={scoreB}
        onIncrease={() => setScoreB(scoreB + 1)}
        onDecrease={() => setScoreB(scoreB > 0 ? scoreB - 1 : 0)}
      />
      {scoreA === 10 && <Text style={styles.winner}>Pemenang: {teamA}</Text>}
      {scoreB === 10 && <Text style={styles.winner}>Pemenang: {teamB}</Text>}
      <Button title="Reset Pertandingan" onPress={resetScore} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  winner: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
    marginTop: 20,
  }
});

export default App;
