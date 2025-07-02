// TermsPagePL.jsx
import React from "react";
import { DARK_PURPLE, ORANGE, PURPLE } from "settings/colors";
import { gap } from "settings/sizing";
import styled from "styled-components";

const Polish = () => {
  return (
    <Wrapper>
      <Container>
        <Heading>Warunki korzystania</Heading>
        <Section>
          <p>
            ADMITGO LTD („my”, „nas”, „nasz” lub „Spółka”), spółka
            zarejestrowana i działająca zgodnie z prawem Wielkiej Brytanii pod
            adresem 20 Wenlock Road, Londyn, N1 7GU, Anglia, udostępnia
            niniejsze Warunki korzystania w celu uregulowania zasad korzystania
            z naszej strony internetowej i usług.
          </p>

          <Subheading>1. Wprowadzenie</Subheading>
          <ul>
            <li>
              1.1 Zobowiązujemy się do świadczenia wysokiej jakości,
              profesjonalnego wsparcia osobom, które chcą podnieść swoje
              kwalifikacje poprzez studia w Wielkiej Brytanii.
            </li>
            <li>
              1.2 Choć wiele z naszych usług jest oferowanych bezpłatnie, we
              wszystkich działaniach przestrzegamy najwyższych standardów
              profesjonalizmu i uczciwości.
            </li>
            <li>
              1.3 Niniejsze Warunki korzystania, wraz z naszą Polityką
              prywatności oraz Polityką cookies, stanowią integralną część
              relacji pomiędzy nami a użytkownikami strony internetowej.
            </li>
          </ul>

          <Subheading>2. Definicje</Subheading>
          <ul>
            <li>
              2.1 „Aplikant” – zarejestrowany użytkownik korzystający z usługi
              Apply with Edu4u oraz posiadający konto w systemie UCAS...
            </li>
            <li>
              2.2 „Osoba niebędąca Aplikantem” – osoba, która nie posiada konta
              w systemie UCAS...
            </li>
            <li>2.3 „Dostawca usługi” – ADMITGO LTD.</li>
            <li>
              2.4 „Użytkownik” – każda osoba fizyczna korzystająca lub
              uzyskująca dostęp do naszej strony internetowej i usług.
            </li>
            <li>2.5 „Strona internetowa” – platforma ADMITGO LTD.</li>
          </ul>

          <Subheading>3. Usługi</Subheading>
          <ul>
            <li>
              3.1 Platforma oferuje: a) Informacje o studiach b) Wsparcie w
              aplikowaniu
            </li>
            <li>
              3.2 Szczegóły usług przekazują nasi konsultanci indywidualnie.
            </li>
          </ul>

          <Subheading>4. Uprawnienia i rejestracja konta</Subheading>
          <ul>
            <li>
              4.1 Użytkownicy muszą być pełnoletni lub posiadać zgodę opiekuna.
            </li>
            <li>4.2 Strona nie dla osób poniżej 16 roku życia.</li>
            <li>
              4.3 Może być wymagane konto — użytkownik odpowiada za jego
              bezpieczeństwo.
            </li>
          </ul>

          <Subheading>5. Opłaty i koszty</Subheading>
          <ul>
            <li>5.1 Korzystanie ze strony jest bezpłatne.</li>
            <li>5.2 Usługi bezpłatne dla Aplikantów.</li>
            <li>
              5.3 Opłaty mogą być naliczane dla Osób niebędących Aplikantami.
            </li>
          </ul>

          <Subheading>6. Obowiązki Użytkowników</Subheading>
          <ul>
            <li>6.1 Podawanie rzetelnych informacji.</li>
            <li>6.2 Przestrzeganie prawa.</li>
            <li>6.3 Terminowe składanie aplikacji.</li>
          </ul>

          <Subheading>7. Prawa własności intelektualnej</Subheading>
          <ul>
            <li>7.1 Treści chronione prawem autorskim.</li>
            <li>7.2 Brak udzielanych licencji na materiały.</li>
            <li>
              7.3 Użytkownik otrzymuje ograniczoną licencję do użytku
              niekomercyjnego.
            </li>
            <li>7.4 Kopiowanie i inżynieria wsteczna zabronione.</li>
            <li>7.5 Użycie w celach konkurencyjnych — zakazane.</li>
          </ul>

          <Subheading>8. Prywatność i ochrona danych</Subheading>
          <ul>
            <li>
              8.1 Obowiązuje Polityka prywatności (część niniejszych Warunków).
            </li>
            <li>8.2 Dane przetwarzane zgodnie z UK GDPR.</li>
          </ul>

          <Subheading>9. Reklamacje</Subheading>
          <ul>
            <li>9.1 Skargi należy kierować na office@edu-4u.uk</li>
            <li>9.2 Podaj dane kontaktowe, opis sytuacji oraz adres e-mail.</li>
            <li>9.3 Odpowiedź w ciągu 14 dni.</li>
          </ul>

          <Subheading>10. Ograniczenie odpowiedzialności</Subheading>
          <ul>
            <li>10.1 Nie ponosimy odpowiedzialności za szkody pośrednie.</li>
            <li>10.2 Odpowiedzialność ograniczona zgodnie z prawem.</li>
          </ul>

          <Subheading>11. Zmiany</Subheading>
          <ul>
            <li>11.1 Możliwość zmian z powodu usług/prawa.</li>
            <li>
              11.2 O istotnych zmianach informujemy e-mailowo z datą wejścia.
            </li>
            <li>
              11.4 W razie braku zgody – poinformuj nas i zaprzestań korzystania
              z serwisu.
            </li>
          </ul>

          <Subheading>12. Rozwiązanie umowy</Subheading>
          <ul>
            <li>12.1 Możemy zawiesić/rozwiązać umowę bez powiadomienia.</li>
            <li>12.2 Twoje prawa wygasają natychmiast.</li>
          </ul>

          <Subheading>13. Prawo właściwe</Subheading>
          <ul>
            <li>13.1 Obowiązuje prawo Anglii i Walii.</li>
            <li>13.2 Spory rozstrzyga sąd w Anglii i Walii.</li>
          </ul>

          <Subheading>14. Kontakt</Subheading>
          <p>
            W przypadku pytań dotyczących niniejszych Warunków:
            <br />
            ADMITGO LTD <br />
            20 Wenlock Road, Londyn, N1 7GU, Anglia <br />
            Email: office@edu-4u.uk
          </p>
          <br />
          <p>
            <strong>Ostatnia aktualizacja: 06/2025</strong>
          </p>
        </Section>
      </Container>
    </Wrapper>
  );
};

export default Polish;

// STYLES
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: ${gap * 3}px ${gap}px;
`;

const Container = styled.div`
  max-width: 900px;
  width: 100%;
`;

const Heading = styled.h1`
  color: ${PURPLE};
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: ${gap}px;
`;

const Subheading = styled.h2`
  font-size: 1.5rem;
  color: ${ORANGE};
  font-weight: 700;
  margin: 1.5rem 0 0.5rem;
`;

const Section = styled.div`
  color: ${DARK_PURPLE};
  font-size: 1.05rem;

  ul {
    margin-bottom: 1.5rem;
    padding-left: 1.25rem;
  }

  li {
    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: 1rem;
  }
`;
