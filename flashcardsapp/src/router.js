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
            { path: "/study-language-flashcards-app/dictionary", element: <Dictionary /> },
            { path: "/study-language-flashcards-app/game", element: <Flashcards/>},
            { path: "/study-language-flashcards-app/food_game", element: <FoodGame/>},
            { path: "/study-language-flashcards-app/verbs_game", element: <VerbsGame/>},
            { path: "/study-language-flashcards-app/clothes_game", element: <ClothesGame/>},
            { path: "/study-language-flashcards-app/basic_game", element: <BasicGame/>},
            { path: "/study-language-flashcards-app/clothes", element: <Clothes/>},
            { path: "/study-language-flashcards-app/food", element: <Food/>},
            { path: "/study-language-flashcards-app/verbs", element: <Verbs/>},
            { path: "/study-language-flashcards-app/basic", element: <Basic/>},
        ]
    },
]);
export default router;