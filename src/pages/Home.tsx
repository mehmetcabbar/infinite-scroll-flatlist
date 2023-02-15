import { View, Text } from 'react-native'
import Header from '../components/header/Header'
import Spacer from '../components/spacer/Spacer'
import UserCard from '../components/userCard/UserCard'

const Home = () => {
    return (
        <View>
            <Header />
            <Spacer />
            <UserCard />
        </View>
    )
}

export default Home