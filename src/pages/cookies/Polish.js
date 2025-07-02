// CookiePolicyPage.pl.jsx
import React from "react";
import { DARK_PURPLE, ORANGE, PURPLE } from "settings/colors";
import { gap } from "settings/sizing";
import styled from "styled-components";

const Polish = () => {
  return (
    <Wrapper>
      <Container>
        <Heading>Polityka Cookies</Heading>
        <Section>
          <p>
            Strona internetowa nie gromadzi automatycznie żadnych informacji, z
            wyjątkiem informacji zawartych w plikach cookies.
          </p>

          <Subheading>Czym są pliki cookies?</Subheading>
          <p>
            Cookies to małe pliki danych, które są umieszczane na Twoim
            komputerze lub urządzeniu mobilnym podczas odwiedzania strony
            internetowej. Pliki cookies są powszechnie stosowane przez
            właścicieli stron internetowych w celu zapewnienia prawidłowego lub
            bardziej efektywnego działania ich stron, a także w celu
            dostarczania informacji sprawozdawczych.
          </p>
          <p>
            Pliki cookies umieszczane przez właściciela strony, czyli AdmitGO
            Ltd, nazywane są „cookies własnymi” (ang. first-party cookies).
            Pliki cookies umieszczane przez inne podmioty niż właściciel strony
            internetowej nazywane są „cookies podmiotów trzecich” (ang.
            third-party cookies). Cookies podmiotów trzecich umożliwiają
            udostępnianie funkcji podmiotów trzecich na stronie internetowej lub
            za jej pośrednictwem (np. reklamy, treści interaktywne, analityka).
            Strony internetowe, które umieszczają takie cookies podmiotów
            trzecich, mogą rozpoznawać Twój komputer zarówno podczas odwiedzin
            konkretnej strony internetowej, jak i podczas odwiedzin innych stron
            internetowych.
          </p>

          <Subheading>Jak możesz kontrolować pliki cookies?</Subheading>
          <p>
            Masz prawo decydować, czy chcesz akceptować, czy odrzucać pliki
            cookies. Możesz wyrazić swoje preferencje dotyczące plików cookies,
            ustawiając je w Menadżerze Zgody na Cookies. Menadżer ten umożliwia
            wybór kategorii plików cookies, które chcesz zaakceptować lub
            odrzucić.
          </p>
          <p>
            Menadżer Zgody na Cookies znajdziesz w banerze informacyjnym o
            cookies wyświetlanym podczas wizyty na naszej stronie internetowej.
            Jeśli zdecydujesz się odrzucić pliki cookies, nadal będziesz mógł
            korzystać z naszej strony internetowej, choć dostęp do niektórych
            funkcji i obszarów naszej strony może być ograniczony.
          </p>
          <p>
            Możesz także skonfigurować lub zmienić ustawienia swojej
            przeglądarki internetowej, aby akceptować lub odrzucać pliki
            cookies. Ponieważ sposób odrzucania cookies poprzez ustawienia
            przeglądarki internetowej różni się w zależności od przeglądarki,
            powinieneś skorzystać z menu pomocy przeglądarki, aby uzyskać więcej
            informacji.
          </p>
          <p>
            Dodatkowo możesz włączyć lub wyłączyć obsługę cookies w swojej
            przeglądarce internetowej. Większość przeglądarek internetowych
            pozwala również wybrać, czy chcesz wyłączyć wszystkie pliki cookies,
            czy tylko cookies podmiotów trzecich.
          </p>
          <p>
            Domyślnie większość przeglądarek internetowych akceptuje pliki
            cookies, ale można to zmienić. Więcej informacji znajdziesz w menu
            pomocy przeglądarki internetowej lub w dokumentacji dołączonej do
            urządzenia. Możesz w dowolnym momencie usunąć pliki cookies ze
            swojego komputera lub urządzenia, jednak może to spowodować utratę
            informacji umożliwiających szybszy i bardziej efektywny dostęp do
            naszej strony internetowej.
          </p>

          <Subheading>Dlaczego używamy plików cookies?</Subheading>
          <p>
            Używamy własnych plików cookies oraz cookies podmiotów trzecich z
            kilku powodów. Niektóre pliki cookies są niezbędne ze względów
            technicznych do prawidłowego działania naszych stron internetowych —
            nazywamy je „niezbędnymi” plikami cookies. Inne pliki cookies
            umożliwiają nam śledzenie i analizowanie zainteresowań użytkowników
            w celu poprawy wygody korzystania z naszych usług online.
          </p>
          <p>
            Podmioty trzecie umieszczają również pliki cookies na naszych
            stronach w celach reklamowych, analitycznych i innych.
          </p>
          <p>
            Poniżej opisujemy konkretne typy własnych oraz cookies podmiotów
            trzecich stosowanych na naszych stronach internetowych oraz cele,
            jakim służą:
          </p>

          <ul>
            <li>
              <strong>Niezbędne pliki cookies dla strony internetowej:</strong>{" "}
              Te pliki cookies wspomagają korzystanie ze strony internetowej,
              umożliwiając podstawowe funkcje, takie jak nawigacja po stronach
              oraz dostęp do bezpiecznych obszarów witryny. Bez tych plików
              cookies strona internetowa nie może działać prawidłowo.
            </li>
            <li>
              <strong>Cookies statystyczne:</strong> Te pliki cookies gromadzą
              informacje wykorzystywane w formie zbiorczej, pomagając nam
              zrozumieć, jak użytkownicy korzystają z naszych stron
              internetowych lub jak skuteczne są nasze kampanie marketingowe, a
              także pomagają nam dostosować nasze strony do Twoich potrzeb.
            </li>
            <li>
              <strong>Cookies marketingowe:</strong> Te pliki cookies służą do
              personalizacji przekazów reklamowych dla użytkownika. Realizują
              funkcje takie jak zapobieganie wyświetlaniu ciągle tych samych
              reklam, zapewnienie prawidłowego wyświetlania reklam
              reklamodawcom, a w niektórych przypadkach dobór reklam na
              podstawie Twoich zainteresowań.
            </li>
            <li>
              <strong>Cookies wydajnościowe i funkcjonalne:</strong> Te pliki
              cookies są wykorzystywane do identyfikacji i rozwiązywania
              problemów technicznych, optymalizacji szybkości ładowania stron,
              poprawy ogólnej wydajności strony oraz zapewnienia użytkownikom
              bardziej spersonalizowanego doświadczenia.
            </li>
          </ul>

          <Subheading>
            Jak często aktualizujemy niniejszą Politykę Cookies?
          </Subheading>
          <p>
            Możemy aktualizować niniejszą Politykę Cookies od czasu do czasu,
            aby odzwierciedlić zmiany w stosowanych przez nas plikach cookies
            lub z innych przyczyn operacyjnych, prawnych bądź regulacyjnych.
            Dlatego prosimy o regularne przeglądanie niniejszej Polityki
            Cookies, aby być na bieżąco z informacjami o tym, w jaki sposób
            wykorzystujemy pliki cookies i powiązane technologie.
          </p>

          <Subheading>Pytania i wyjaśnienia</Subheading>
          <p>
            Jeśli masz jakiekolwiek pytania lub potrzebujesz wyjaśnień
            dotyczących któregokolwiek z zapisów, nie wahaj się z nami
            skontaktować:{" "}
            <a href="mailto:director@admitgo.co.uk">director@admitgo.co.uk</a>
          </p>

          <p>
            <strong>Data publikacji: 06/2025</strong>
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
    margin-bottom: 0.75rem;
  }

  p {
    margin-bottom: 1rem;
  }

  a {
    color: ${PURPLE};
    text-decoration: underline;
  }
`;
