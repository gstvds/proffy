import { StyleSheet } from "react-native";
import { fonts, colors } from "../../utils";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  teacherList: {
    marginTop: -40,
  },

  searchForm: {
    marginBottom: 24,
  },

  label: {
    color: colors.text_in_primary,
    fontFamily: fonts.poppins_regular,
  }, 

  inputGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  inputBlock: {
    width: '48%'
  },

  input: {
    height: 54,
    backgroundColor: colors.input_background,
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 16,
  },

  submitButton: {
    backgroundColor: colors.secondary,
    height: 56,
    flexDirection: 'row',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  submitButtonText: {
    color: colors.title_in_primary,
    fontFamily: fonts.archivo_bold,
    fontSize: 16,
  },
});

export default styles;