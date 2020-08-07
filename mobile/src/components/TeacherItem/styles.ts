import { StyleSheet } from "react-native";
import { colors, fonts } from "../../utils";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.card_background,
    borderWidth: 1,
    borderColor: colors.line_in_white,
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden',
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 24,
  },

  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: colors.image_background,
  },

  profileInfo: {
    marginLeft: 16,
  },

  name: {
    fontFamily: fonts.archivo_bold,
    color: colors.active_text_tab,
    fontSize: 20
  },

  subject: {
    fontFamily: fonts.poppins_regular,
    color: colors.text_base,
    fontSize: 12,
    marginTop: 4,
  },

  bio: {
    marginHorizontal: 24,
    fontFamily: fonts.poppins_regular,
    fontSize: 14,
    lineHeight: 24,
    color: colors.text_base,
  },

  footer: {
    backgroundColor: colors.inactive_tab,
    padding: 24,
    alignItems: 'center',
    marginTop: 24,
  },

  price: {
    fontFamily: fonts.poppins_regular,
    color: colors.text_base,
    fontSize: 14,
  },

  priceValue: {
    fontFamily: fonts.archivo_bold,
    color: colors.primary,
    fontSize: 16,
  },

  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },

  favoriteButton: {
    backgroundColor: colors.primary,
    width: 56,
    height: 56,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },

  favorited: {
    backgroundColor: colors.favorited_background,
  },

  contactButton: {
    backgroundColor: colors.secondary,
    flex: 1,
    height: 56,
    flexDirection: 'row',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },

  contactButtonText: {
    color: colors.title_in_primary,
    fontFamily: fonts.archivo_bold,
    fontSize: 16,
    marginLeft: 16,
  },
});

export default styles;