import React, { createContext, useContext, useState, useEffect } from "react";

const FavoritesContext = createContext();

const getInitialFavorites = () => {
  try {
    const favorites = localStorage.getItem("quizFavorites");
    return favorites ? JSON.parse(favorites) : [];
  } catch (e) {
    console.error("Erro ao carregar favoritos do localStorage:", e);
    return [];
  }
};

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(getInitialFavorites);

  useEffect(() => {
    localStorage.setItem("quizFavorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (quizData) => {
    setFavorites((prevFavorites) => {
      const isFavorite = prevFavorites.some((fav) => fav.id === quizData.id);

      if (isFavorite) {
        return prevFavorites.filter((fav) => fav.id !== quizData.id);
      } else {
        return [...prevFavorites, quizData];
      }
    });
  };

  const isQuizFavorite = (quizId) => {
    return favorites.some((fav) => fav.id === quizId);
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, toggleFavorite, isQuizFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  return useContext(FavoritesContext);
};
