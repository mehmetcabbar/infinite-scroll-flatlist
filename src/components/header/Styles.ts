import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        height: 40,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 6,
        borderBottomColor: colors.BORDER_COLOR,
        borderBottomWidth: 1,
    },
    text: {
        fontWeight: '500'
    }
})