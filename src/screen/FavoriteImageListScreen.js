import React from 'react';
import { View } from 'react-native';
import { Typography } from '../components/Typography';

export const FavoriteImageListScreen = (props)=>{

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Typography fontSize={ 20 }>Favorite IMAGE</Typography>
        </View>
    )
}