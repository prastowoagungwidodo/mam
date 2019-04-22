import { StyleSheet } from 'react-native';
import { Colors, DefaultTheme } from 'react-native-paper';

const imgWidth = 100;
const imgHeight = (imgWidth / 240) * 346;
const styles = StyleSheet.create({
    shadow: {
        shadowOffset: { width: 4, height: 4 },
        shadowColor: Colors.BLACK,
        shadowOpacity: 0.15,
        shadowRadius: 4
    },
    container: {
        backgroundColor: Colors.WHITE,
        borderRadius: 4,
        paddingBottom: 5
    },
    title: {
        paddingHorizontal: 16,
        paddingTop: 8,
        fontSize: 12,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    moreText: {
        color: DefaultTheme.colors.primary
    },
    grid: {
        width: imgWidth + 20,
        // marginHorizontal: 4,
        display: 'flex',
        flexDirection: 'column'
    },
    gridImage: {
        margin: 10,
        width: imgWidth,
        height: imgHeight,
        borderRadius: 4,
        elevation: 8
    },
    gridTitle: {
        display: 'flex',
        paddingHorizontal: 12,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    menuTitle: {
        fontFamily: 'ProductSans-Medium'
    },
    subtitle: {
        color: Colors.grey700
    }
});

export default styles;
