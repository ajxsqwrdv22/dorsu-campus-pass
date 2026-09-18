import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Pressable } from 'react-native';
import { StudentProfile } from './src/types/student';
import { Header } from './src/components/Header';
import { StudentCard } from './src/components/StudentCard';
import { ScanCounter } from './src/components/ScanCounter';

const initialStudent: StudentProfile = {
  name: 'Juan Carlos D. Dela Cruz',
  idNumber: '2024-008492-MT',
  program: 'BS in Information Technology (BSIT)',
  yearLevel: '3rd Year — Section A',
  avatarUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200',
  campus: 'Main Campus (Guang-guang, Mati City)',
};

const peerStudent: StudentProfile = {
  name: 'Maria Clara S. Santos',
  idNumber: '2024-009183-MT',
  program: 'BS in Information Technology (BSIT)',
  yearLevel: '2nd Year — Section B',
  avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
  campus: 'Main Campus (Guang-guang, Mati City)',
};

export default function App() {
  const [student, setStudent] = useState<StudentProfile>(initialStudent);
  const [isActive, setIsActive] = useState<boolean>(true);
  const [gateScans, setGateScans] = useState<number>(3);
  const [showPeer, setShowPeer] = useState<boolean>(false);

  const handleScan = () => setGateScans(prev => prev + 1);
  const handleReset = () => setGateScans(0);
  const togglePassStatus = () => setIsActive(prev => !prev);
  const togglePeerDemo = () => setShowPeer(prev => !prev);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Header />
        
        {/* Main Student Pass */}
        <StudentCard student={student} isActive={isActive} />

        {/* Gate Scan Counter */}
        <ScanCounter count={gateScans} onScan={handleScan} onReset={handleReset} />

        {/* Additional Controls for Suspension & Peer Demo */}
        <View style={styles.controlsContainer}>
          <Pressable 
            style={[styles.toggleBtn, isActive ? styles.suspendBtn : styles.activateBtn]} 
            onPress={togglePassStatus}
          >
            <Text style={[styles.toggleBtnText, isActive ? styles.suspendText : styles.activateText]}>
              {isActive ? '⚠️ Simulate Pass Suspension' : '✅ Reactivate Student Pass'}
            </Text>
          </Pressable>

          <Pressable style={styles.peerBtn} onPress={togglePeerDemo}>
            <Text style={styles.peerBtnText}>
              {showPeer ? 'Hide Peer Component Demo' : 'Show Peer Component Demo'}
            </Text>
          </Pressable>
        </View>

        {/* Conditional Peer Component Demo Card */}
        {showPeer && (
          <View style={styles.peerSection}>
            <Text style={styles.peerTitle}>PEER PROPS DEMO:</Text>
            <StudentCard student={peerStudent} isActive={true} />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  container: {
    padding: 16,
    gap: 16,
  },
  controlsContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    gap: 10,
  },
  toggleBtn: {
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
  },
  suspendBtn: {
    backgroundColor: '#FEE2E2',
    borderColor: '#FCA5A5',
  },
  activateBtn: {
    backgroundColor: '#DCFCE7',
    borderColor: '#86EFAC',
  },
  toggleBtnText: {
    fontSize: 12,
    fontWeight: '800',
  },
  suspendText: {
    color: '#991B1B',
  },
  activateText: {
    color: '#166534',
  },
  peerBtn: {
    backgroundColor: '#F8FAFC',
    borderWidth: 1,
    borderColor: '#CBD5E1',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  peerBtnText: {
    color: '#00758F',
    fontWeight: '700',
    fontSize: 12,
  },
  peerSection: {
    marginTop: 4,
    gap: 8,
  },
  peerTitle: {
    fontSize: 11,
    fontWeight: '800',
    color: '#00758F',
    marginLeft: 4,
  }
});