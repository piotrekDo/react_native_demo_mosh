import React, { useRef } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { ImageInput } from './ImageInput';

interface Props {
  imageUris?: string[];
  onAddImage: (uri: string) => void;
  onRemoveImage: (uri: string) => void;
}

export const ImageInputList = ({ imageUris = [], onAddImage, onRemoveImage }: Props) => {
  const scrollView = useRef<ScrollView>(null);

  // Domyslnie, ScrollView zajmie caly ekran, owrapowanie go wewnatrz View powoduje ze komponent zajmuje jedynie
  // tyle miejsca ile potrzebuje. Dzieki temu nie bedzie nam scrollowac calego ekranu
  return (
    <View>
      <ScrollView ref={scrollView} horizontal={true} onContentSizeChange={() => scrollView.current?.scrollToEnd()}>
        <View style={styles.container}>
          {imageUris.map((uri, index) => (
            <View key={index} style={{ marginRight: 10 }}>
              <ImageInput
                imageUri={uri}
                onChangeImage={uri => {
                  console.log(uri);
                  uri && onRemoveImage(uri);
                }}
              />
            </View>
          ))}

          <ImageInput onChangeImage={uri => uri && onAddImage(uri)} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
