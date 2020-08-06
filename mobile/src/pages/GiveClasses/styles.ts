import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    padding: 40,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontFamily: fonts.archivo_bold,
    color: colors.title_in_primary,
    fontSize: 32,
    lineHeight: 37,
    maxWidth: 180,
  },
  description: {
    marginTop: 24,
    color: colors.text_in_primary,
    fontSize: 16,
    lineHeight: 26,
    fontFamily: fonts.poppins_regular,
    maxWidth: 240,
  },
  button: {
    marginVertical: 40,
    backgroundColor: colors.secondary,
    height: 58,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: colors.button_text,
    fontSize: 16,
    fontFamily: fonts.archivo_bold,
  },
});

export default styles;