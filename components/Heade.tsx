import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>앱 제목</Text>  
      {/* 필요 시 버튼 추가 예: */}
      <TouchableOpacity onPress={() => console.log('뒤로 가기')}>
        <Text style={styles.headerButton}>뒤로</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 60,  // 헤더 높이
    backgroundColor: '#007AFF',  // 배경색
    flexDirection: 'row',  // 가로 배치
    alignItems: 'center',  // 세로 중앙 정렬
    paddingHorizontal: 10,  // 좌우 패딩
    justifyContent: 'space-between',  // 제목과 버튼 간격 조정
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerButton: {
    color: 'white',
    fontSize: 16,
  },
});