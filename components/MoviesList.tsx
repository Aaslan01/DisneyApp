import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { Movie as MovieTypes, } from '../data'
import StyleGuide from '../constants/StyleGuide';
import Movies from './Movies';

interface Props {
    movies: MovieTypes[];
    title?: string;
}

const MoviesList: React.FC<Props> = ({ movies, title }) => {
    return (
        <View>
            {title && (
                <Text style={[StyleGuide.semiText, { marginTop: 10, fontSize: 16 }]}>{title}</Text>)}
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    marginTop: title ? 10 : 0
                }}
            >
                {
                    movies.map((movie: MovieTypes) => (
                        <Movies
                            onPress={() => console.log(movie.id)}
                            key={movie.id}
                            movie={movie} />
                    ))
                }
            </ScrollView>
        </View>
    )
}

export default MoviesList