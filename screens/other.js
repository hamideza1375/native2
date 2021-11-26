

navigation.navigate('Details', {
    itemId: 86,
    otherParam: 'anything you want here',
});



function DetailsScreen({ route, navigation }) {

    const { itemId, otherParam } = route.params;

}


navigation.setParams({
    query: 'someText',
});


<Button
    title="Update the title"
    onPress={() => navigation.setOptions({ title: 'Updated!' })}


options = {{
    title: 'My home',
        headerStyle: {
        backgroundColor: '#f4511e',
          },
    headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold',
          },
}}
    options={{ headerTitle: (props) => <LogoTitle {...props} />,
        headerRight: () => (
            <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                color="#fff"
            />
        ),
}}

/>



React.useLayoutEffect(() => {
    navigation.setOptions({
        headerRight: () => (
            <Button onPress={() => setCount(c => c + 1)} title="Update count" />
        ),
    });
}, [navigation]);



navigation.dispatch(DrawerActions.toggleDrawer());



const unsubscribe = navigation.getParent().addListener('tabPress', (e) => {
    // Do something
});