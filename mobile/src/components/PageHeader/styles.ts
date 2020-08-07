import { StyleSheet } from "react-native";
import { colors, fonts } from "../../utils";

const styles = StyleSheet.create({
  container: {
    padding: 40,
    backgroundColor: colors.primary,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: fonts.archivo_bold,
    color: colors.title_in_primary,
    fontSize: 24,
    lineHeight: 32,
    maxWidth: 160,
    marginVertical: 40,
  }
});

export default styles;