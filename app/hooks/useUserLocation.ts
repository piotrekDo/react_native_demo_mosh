import * as Location from 'expo-location';
import { useEffect, useState } from 'react';

export interface LocationCoords {
  latitude: number;
  longitude: number;
}

const useUserLocation = () => {
      const [userLocation, setLocation] = useState<LocationCoords | null>(null);
    
      const getLocationOnLinePermission = async () => {
        try {
          const { granted } = await Location.requestForegroundPermissionsAsync();
          if (!granted) return;
    
          const result = await Location.getLastKnownPositionAsync();
          const coords = result?.coords;
    
          if (coords?.latitude !== undefined && coords?.longitude !== undefined) {
            setLocation({ latitude: coords.latitude, longitude: coords.longitude });
          } else {
            console.warn('Coordinates not available');
          }
        } catch (error) {
          alert('Error getting location');
        }
      };
    
      useEffect(() => {
        getLocationOnLinePermission();
      }, []);

      return {userLocation}
};

export default useUserLocation;
