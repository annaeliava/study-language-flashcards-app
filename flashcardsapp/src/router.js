import React from 'react';
import {createBrowserRouter} from 'react-router-dom';
import {Root} from './components/common';
import {
    Flashcards,
    Dictionary,
    Main,
    Error,
    Basic,
    Verbs,
    Food,
    Clothes,
    BasicGame,
    ClothesGame,
    VerbsGame,
    FoodGame
} from './components/pages';

const router = createBrowserRouter([
    { path: "", 
    element: <Root />, 
    errorElement: <Error />, 
    children: [
            { path: "/study-language-flashcards-app", element: <Main /> },
            { path: "/dictionary", element: <Dictionary /> },
            { path: "/game", element: <Flashcards/>},
            { path: "/food_game", element: <FoodGame/>},
            { path: "/verbs_game", element: <VerbsGame/>},
            { path: "/clothes_game", element: <ClothesGame/>},
            { path: "/basic_game", element: <BasicGame/>},
            { path: "/clothes", element: <Clothes/>},
            { path: "/food", element: <Food/>},
            { path: "/verbs", element: <Verbs/>},
            { path: "/basic", element: <Basic/>},
        ]
    },
]);
export default router;