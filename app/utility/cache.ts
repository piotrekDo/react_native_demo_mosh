import AsyncStorage from '@react-native-async-storage/async-storage';
import dayjs from 'dayjs'; // npm install dayjs

const prefix = 'cache_';
const expiryInMinutes = 5;

const store = async (key: string, value: any) => {
  try {
    const item = {
      value,
      timestamp: Date.now(),
    };
    await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
  } catch (error) {
    console.log('Error storing cache:', error);
  }
};

const isExpired = (item: { timestamp: number }) => {
  const now = dayjs();
  const storedTime = dayjs(item.timestamp);
  return now.diff(storedTime, 'minute') > expiryInMinutes;
};

const get = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(prefix + key);
    if (!value) return null;

    const item = JSON.parse(value);
    if (!item) return null;

    if (isExpired(item)) {
      await AsyncStorage.removeItem(prefix + key);
      return null;
    }

    return item.value;
  } catch (error) {
    console.log('Error reading cache:', error);
    return null;
  }
};

export default { store, get };
