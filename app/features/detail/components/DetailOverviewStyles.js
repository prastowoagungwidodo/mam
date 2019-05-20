import { StyleSheet } from 'react-native';
import theme from 'app/config/themes';

export default StyleSheet.create({
    top: {
        display: 'flex',
        flexDirection: 'row',
        padding: 16,
    },
    coverContainer: {
        width: 115,
        textAlign: 'center',
        borderRadius: 4,
        paddingTop: 8
    },
    coverShadow: {
        shadowOffset: { width: 0, height: 5 },
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowRadius: 8
    },
    coverImage: {
        width: 100,
        height: 145,
        elevation: 10,
        borderRadius: 4,
        backgroundColor: '#fff',
    },
    descriptionContainer: {
        flex: 1
    },
    metaDescription: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    metaDescriptionIcon: {
        marginRight: 4
    },
    subjectContainer: {
        marginTop: 8,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    chip: {
        marginRight: 4,
        paddingVertical: 0,
        paddingHorizontal: 8,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: theme.colors.disabled,
    }
});

