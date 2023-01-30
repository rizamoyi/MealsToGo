import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styled from "styled-components/native";

import { FavouritesContext } from "../../services/favourites/favourites.context";

const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 9;
`;

export const Favourite = () => {
  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(FavouritesContext);

  console.log(favourites);
  return (
    <FavouriteButton>
      <AntDesign name="heart" size={24} color="red" />
    </FavouriteButton>
  );
};
