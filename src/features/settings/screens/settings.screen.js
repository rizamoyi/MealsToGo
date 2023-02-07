import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import { List, Avatar } from "react-native-paper";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;

const AvatarContainer = styled.View`
  align-items: center;
  margin-top: ${(props) => props.theme.space[5]};
`;

const FavouritesIcon = (props) => (
  <List.Icon {...props} color="black" icon="heart" />
);
const LogoutIcon = (props) => (
  <List.Icon {...props} color="black" icon="door" />
);

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <AvatarContainer>
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />
        </TouchableOpacity>
        <Spacer position="top" size="large">
          <Text variant="label">{user.email}</Text>
        </Spacer>
      </AvatarContainer>
      <List.Section>
        <SettingsItem
          title="Favourites"
          description="View your favourites"
          left={FavouritesIcon}
          onPress={() => navigation.navigate("Favourites")}
        />
        <SettingsItem
          title="Logout"
          left={LogoutIcon}
          onPress={() => onLogout()}
        />
      </List.Section>
    </SafeArea>
  );
};
