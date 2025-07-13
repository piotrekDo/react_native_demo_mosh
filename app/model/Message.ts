import { ImageSourcePropType } from "react-native";

export interface Message {
    id: number;
    title: string;
    description: string;
    image: ImageSourcePropType
}