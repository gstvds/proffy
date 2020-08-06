import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    padding: 40,
  },
  banner: {
    width: '100%',
    resizeMode: 'contain'
  },
  title: {
    fontSize: 20,
    color: colors.title_in_primary,
    lineHeight: 30,
    marginTop: 80,
    fontFamily: fonts.poppins_regular
  },
  titleBold: {
    fontFamily: fonts.poppins_semibold,
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'space-between',
  },
  button: {
    height: 150,
    width: '48%',
    backgroundColor: '#333',
    borderRadius: 8,
    padding: 24,
    justifyContent: 'space-between',
  },
  buttonPrimary: {
    backgroundColor: colors.primary_lighter,
  },
  buttonSecondary: {
    backgroundColor: colors.secondary,
  },
  buttonText: {
    fontFamily: fonts.archivo_bold,
    color: colors.button_text,
    fontSize: 20,
  },
  totalConnections: {
    fontFamily: fonts.poppins_regular,
    marginTop: 40,
    fontSize: 12,
    lineHeight: 20,
    maxWidth: 140,
    color: colors.text_in_primary,
  },
});

export default styles;