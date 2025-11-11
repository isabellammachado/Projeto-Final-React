import { Star, Zap } from "lucide-react";
import { useFavorites } from "../../hooks/FavoritesContext.jsx";
import { SideBarComponent } from "../../components/Sidebar";
import {
  PageContainer,
  Content,
  SectionTitle,
  CategoryGrid,
  CategoryCard,
  CardHeader,
  CardTitle,
  EmptyState,
  Header,
} from "../Home/style.jsx";

export function Favorito() {
  const { favorites, toggleFavorite } = useFavorites();

  return (
    <PageContainer>
      <SideBarComponent />
      <Content>
        <Header>
          <SectionTitle>
            <Star size={24} fill="#ffc720" color="#ffc720" /> Meu Quiz Favorito
          </SectionTitle>
        </Header>

        {favorites.length === 0 ? (
          <EmptyState style={{ marginTop: "50px" }}>
            Você ainda não favoritou nenhum quiz.
          </EmptyState>
        ) : (
          <CategoryGrid>
            {favorites.map((area) => {
              const IconComponent = area.icone || Zap;

              return (
                <CategoryCard key={area.id}>
                  <CardHeader>
                    <IconComponent size={20} />

                    <Star
                      size={24}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(area);
                      }}
                      fill="#ffc720"
                      color="#ffc720"
                      style={{ cursor: "pointer", marginLeft: "auto" }}
                    />
                  </CardHeader>

                  <CardTitle>{area.nome}</CardTitle>
                </CategoryCard>
              );
            })}
          </CategoryGrid>
        )}
      </Content>
    </PageContainer>
  );
}
