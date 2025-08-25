import { Calendar as RNCalendar } from 'react-native-calendars';
import { format } from 'date-fns';
import { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function MyCalendar() {
  const currentDate = format(new Date(), 'yyyy-MM-dd');
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const [completedDates, setCompletedDates] = useState<Record<string, { selected: boolean; marked: boolean; selectedColor: string }>>({});

  useEffect(() => {
    loadCompletedDates();
  }, []);

  const loadCompletedDates = async () => {
    try {
      const storedDates = await AsyncStorage.getItem('completedDates');
      if (storedDates) {
        setCompletedDates(JSON.parse(storedDates));
      }
    } catch (error) {
      console.error('완료된 날짜 로드 오류:', error);
    }
  };

  const saveCompletedDate = async (updatedDates: Record<string, { selected: boolean; marked: boolean; selectedColor: string }>) => {
    try {
      await AsyncStorage.setItem('completedDates', JSON.stringify(updatedDates));
    } catch (error) {
      console.error('날짜 저장 오류:', error);
    }
  };

  const onDayPress = (day: { dateString: string }) => {
    console.log('onDayPress 호출됨:', day.dateString);  // 디버그 로그 추가
    setSelectedDate(day.dateString);
    const date = day.dateString;
    const newCompletedDates = { ...completedDates };

    if (!newCompletedDates[date]) {
      newCompletedDates[date] = { selected: true, marked: true, selectedColor: '#6a0dad' };
      setCompletedDates(newCompletedDates);
      saveCompletedDate(newCompletedDates);
      console.log('Alert 호출 전:', newCompletedDates);  // Alert 전 로그
      Alert.alert(
        '🔔 알림',
        '훈련 세션을 확인하세요: ' + day.dateString,
        [
          { text: '확인', onPress: () => console.log('알림 확인됨') }
        ]
      );
      console.log('Alert 호출 후');  // Alert 후 로그
    } else {
      Alert.alert(
        '🔔 알림',
        '이 날짜는 이미 훈련 완료 상태입니다. (재선택 불가)',
        [
          { text: '확인', onPress: () => console.log('알림 확인됨') }
        ]
      );
    }
  };

  return (
    <RNCalendar
      current={currentDate}
      onDayPress={onDayPress}
      markedDates={completedDates}
     
      style={{
        borderWidth: 1,
        borderColor: 'gray',
        height: 350,
      }}
      theme={{
        backgroundColor: '#ffffff',
        calendarBackground: '#ffffff',
        textSectionTitleColor: '#b6c1cd',
        selectedDayBackgroundColor: '#00adf5',
        selectedDayTextColor: '#ffffff',
        todayTextColor: '#00adf5',
        dayTextColor: '#2d4150',
        textDisabledColor: '#dd99ee'
      }}
    />
  );
}