import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>DAVAO ORIENTAL STATE UNIVERSITY</Text>
      <Text style={styles.subtitle}>FACULTY OF COMPUTING, ENGINEERING, AND TECHNOLOGY</Text>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>OFFICIAL STUDENT DIGITAL PASS • AY 2026–2027</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00758F',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 12,
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#F29111',
    marginBottom: 12,
  },
  title: {
    color: '#ffffff',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.6,
    textAlign: 'center',
  },
  subtitle: {
    color: '#ffffff',
    fontSize: 8,
    fontWeight: '600',
    opacity: 0.9,
    marginTop: 2,
    marginBottom: 6,
    textAlign: 'center',
  },
  badge: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 4,
  },
  badgeText: {
    color: '#ffffff',
    fontSize: 8,
    fontWeight: '700',
  }
});