import { useState, useEffect } from 'react'
import { View, FlatList, ActivityIndicator } from 'react-native'
import UserCard from '../components/userCard/UserCard'
import { api } from '../utils/service'
import { styles } from './Styles'
import { usersTypes } from '../types'
import Header from '../components/header/Header'


const Home = () => {
    const [users, setUsers] = useState<usersTypes[] | any>([])
    const [page, setPage] = useState<number>(1)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    // Main API call with dynamic page value
    const getUsers = async () => {
        setIsLoading(true)
        await api.get(`?page=${page}&results=10&seed=abc`)
            .then((response) => {
                setUsers([...users, ...response.data.results])
                setIsLoading(false)
            })
            .catch((error) => {
                console.log(error)
                setIsLoading(false)
            })
    }

    // Increment page number function for more api call
    const loadMoreItem = () => {
        setPage(() => page + 1)
    };

    // Spinner before the extra api call
    const renderLoader = () => {
        return (
            isLoading ?
                <View style={styles.spinner}>
                    <ActivityIndicator />
                </View >
                : null
        )
    };

    // Run function before app page loading
    useEffect(() => {
        getUsers()
    }, [page]) // Run getUser() when change the page value, thanks to useEffect() hook

    return (
        <View>
            <Header />
            <FlatList
                data={users}
                keyExtractor={(item) => item.dob.date}
                renderItem={({ item }: { item: usersTypes | any }) => (
                    <UserCard
                        name={item.name.first}
                        last={item.name.last}
                        image={item.picture.medium}
                        city={item.location.city}
                        country={item.location.country}
                        email={item.email}
                    />
                )}
                ListFooterComponent={renderLoader} // I wanted to show a spinner to user when api call start
                onEndReached={loadMoreItem} // We want more loading with here
                onEndReachedThreshold={0} // It is calculate end of the list for start to lazy loading action with a new page number
                contentContainerStyle={{ paddingBottom: 140 }} // Basic padding value for the end of the flatList
            />
        </View>
    )
}

export default Home