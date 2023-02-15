import { View, Text, Image } from 'react-native'
import { styles } from './Styles'

const UserCard = () => {
    return (
        <View style={styles.container}>
            <View style={styles.imageWrapper}>
                <Image
                    style={styles.image}
                    source={{ uri: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-733872.jpg&fm=jpg' }}
                />
            </View>
            <View style={styles.contentWrapper}>
                <Text style={styles.title}>Content is here</Text>
                <View style={styles.locationWrapper}>
                    <Image style={styles.icon} source={{ uri: "https://cdn-icons-png.flaticon.com/512/9101/9101314.png" }} />
                    <Text style={styles.text}>Location info</Text>
                </View>
                <View style={styles.emailWrapper}>
                    <Image style={styles.icon} source={{ uri: "https://cdn-icons-png.flaticon.com/512/3059/3059989.png" }} />
                    <Text style={styles.text}>Email info</Text>
                </View>
            </View>
        </View>
    )
}

export default UserCard