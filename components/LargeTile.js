import { Text, TouchableOpacity, Image } from "react-native";
import { StarRatingDisplay } from "react-native-star-rating-widget";

import styles from "@styles";

export default function LargeTile({ name, rating, image }) {
  return (
    <TouchableOpacity style={styles.tile}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.locationName}>{name}</Text>
      <StarRatingDisplay
        rating={rating}
        color="#5928ED"
        emptyColor="#A489F5"
        starSize="18"
        style={styles.stars}
      />
    </TouchableOpacity>
  );
}
