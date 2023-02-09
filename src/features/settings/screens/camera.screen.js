import React, { useContext, useRef } from "react";
import styled from "styled-components/native";
import { Camera, CameraType } from "expo-camera";
import { Button } from "react-native-paper";
import { Text, View, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
  flex: 1;
`;

const InnerSnap = styled.View`
  width: 100%;
  height: 100%;
  z-index: 999;
`;

export const CameraScreen = ({ navigation }) => {
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const cameraRef = useRef();
  const { user } = useContext(AuthenticationContext);

  const onSnap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      AsyncStorage.setItem(`${user.uid}`, photo.uri);
      navigation.goBack();
    }
  };

  if (!permission) {
    return (
      <View>
        <Text>No access to camera</Text>
        <Button title="Grant camera permission" onPress={requestPermission}>
          Grant Camera Permission
        </Button>
      </View>
    );
  }

  if (!permission.granted) {
    return (
      <View>
        <Text>No access to camera</Text>
        <Button title="Grant camera permission" onPress={requestPermission}>
          Grant Camera Permission
        </Button>
      </View>
    );
  }

  return (
    <ProfileCamera
      ref={(camera) => (cameraRef.current = camera)}
      type={CameraType.front}
      ratio={"16:9"}
    >
      <TouchableOpacity onPress={onSnap}>
        <InnerSnap />
      </TouchableOpacity>
    </ProfileCamera>
  );
};
