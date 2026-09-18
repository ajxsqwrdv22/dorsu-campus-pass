import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBadgeProps } from '../types/student';

export const StatusBadge: React.FC<StatusBadgeProps> = ({ isActive }) => {
  return (
    <View style={[styles.badge, isActive ? styles.activeBadge : styles.suspendedBadge]}>
      <View style={[styles.dot, isActive ? styles.activeDot : styles.suspendedDot]} />
      <Text style={[styles.text, isActive ? styles.activeText : styles.suspendedText]}>
        {isActive ? 'STATUS: VERIFIED ACTIVE PASS' : 'STATUS: ACCESS TEMPORARILY SUSPENDED'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    padding: 6,
    borderRadius: 6,
    marginVertical: 8,
    borderWidth: 1,
  },
  activeBadge: {
    backgroundColor: '#DCFCE7',
    borderColor: '#86EFAC',
  },
  suspendedBadge: {
    backgroundColor: '#FEE2E2',
    borderColor: '#FCA5A5',
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  activeDot: {
    backgroundColor: '#16A34A',
  },
  suspendedDot: {
    backgroundColor: '#DC2626',
  },
  text: {
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  activeText: {
    color: '#166534',
  },
  suspendedText: {
    color: '#991B1B',
  }
});