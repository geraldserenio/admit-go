// pages/PrivacyPage.js
import React from "react";
import { DARK_PURPLE, ORANGE, PURPLE } from "settings/colors";
import { gap } from "settings/sizing";
import styled from "styled-components";

const Polish = () => {
  return (
    <Wrapper>
      <Title>Polityka Prywatności</Title>
      <Paragraph>
        W AdmitGO Ltd rozumiemy, że Twoja prywatność jest dla Ciebie ważna i że
        zależy Ci na tym, w jaki sposób Twoje dane osobowe są wykorzystywane i
        udostępniane w Internecie. Szanujemy i cenimy prywatność każdego, kto
        odwiedza naszą stronę internetową i będziemy zbierać i wykorzystywać
        dane osobowe wyłącznie w sposób opisany w niniejszym dokumencie oraz
        zgodny z naszymi obowiązkami i Twoimi prawami wynikającymi z przepisów
        prawa. <br></br>
        <br></br>Prosimy o uważne zapoznanie się z niniejszą Polityką
        Prywatności i upewnienie się, że ją rozumiesz. Przyjmuje się, że
        akceptujesz naszą Politykę Prywatności z chwilą pierwszego skorzystania
        z naszej strony internetowej. Jeśli nie akceptujesz niniejszej Polityki
        Prywatności, musisz natychmiast zaprzestać korzystania z naszej strony
        internetowej.
      </Paragraph>

      <Section>
        <Subheading>1. Definicje i interpretacja</Subheading>
        <Paragraph>
          W niniejszej Polityce poniższe terminy mają następujące znaczenie:
          „Cookie” oznacza mały plik tekstowy umieszczany na Twoim komputerze
          lub urządzeniu przez naszą Stronę podczas odwiedzania określonych
          części naszej Strony i/lub podczas korzystania z określonych funkcji
          naszej Strony.
        </Paragraph>
        <Paragraph>
          „Dane osobowe” oznaczają wszelkie dane dotyczące osoby możliwej do
          zidentyfikowania, bezpośrednio lub pośrednio, na podstawie tych
          danych. W tym przypadku oznacza to dane osobowe, które przekazujesz
          nam za pośrednictwem naszej Strony. Definicja ta obejmuje, tam gdzie
          ma to zastosowanie, definicje zawarte w unijnym i brytyjskim Ogólnym
          Rozporządzeniu o Ochronie Danych Osobowych („UK GDPR/GDPR”) oraz w
          Data Protection Act 2018.
        </Paragraph>
        <Paragraph>
          „Administrator Twoich danych – My/Nas/Nasze” oznacza: AdmitGO Ltd,
          spółkę z ograniczoną odpowiedzialnością zarejestrowaną w Companies
          House w Wielkiej Brytanii. Nasza siedziba: 20 Wenlock Road, Londyn, N1
          7GU, Anglia.
        </Paragraph>
      </Section>

      <Section>
        <Subheading>2. Zakres niniejszej Polityki</Subheading>
        <Paragraph>
          Niniejsza Polityka Prywatności dotyczy wyłącznie korzystania z naszej
          strony internetowej i naszych usług. Nasza strona internetowa może
          zawierać odnośniki do innych stron internetowych. Prosimy pamiętać, że
          odnośniki te zamieszczamy wyłącznie dla Twojej wygody i w celach
          informacyjnych. Nie popieramy ani nie zatwierdzamy żadnych produktów,
          usług ani opinii prezentowanych na takich stronach. Nie mamy kontroli
          nad sposobem gromadzenia, przechowywania ani wykorzystywania Twoich
          danych przez inne strony internetowe i zalecamy zapoznanie się z
          polityką prywatności tych stron przed udostępnieniem im jakichkolwiek
          danych.
        </Paragraph>
      </Section>

      <Section>
        <Subheading>3. Data Protection Officer / EU Representative</Subheading>
        <Paragraph>
          Spółka nie jest zobowiązana do wyznaczenia Inspektora Ochrony Danych
          ani Przedstawiciela w UE; jednakże, w przypadku potrzeby kontaktu z
          nami w sprawie ochrony Twoich danych osobowych, prosimy o wysłanie
          wiadomości e-mail na następujący adres: director@admitgo.co.uk
        </Paragraph>
      </Section>

      <Section>
        <Subheading>4. What Data Do We Collect?</Subheading>
        <Paragraph>
          4.1 Zbieramy dane osobowe (imię i nazwisko, adres zamieszkania, adres
          e-mail, numer telefonu, adres IP, dane dowodu osobistego/paszportu,
          informacje o wykształceniu, historii zatrudnienia oraz osoby
          udzielające referencji) w jednym lub kilku następujących celach:
          <br></br>
          <li>
            W celu dostarczenia informacji, o które prosiłeś lub które naszym
            zdaniem mogą być dla Ciebie istotne w związku z wykazanym
            zainteresowaniem (podstawa prawna: art. 6 ust. 1 lit. f UK GDPR)
          </li>
          <li>
            W celu identyfikacji i przedstawienia Ci odpowiedniej oferty
            edukacyjnej, np. kursu na uczelniach w Wielkiej Brytanii lub za
            pośrednictwem naszych partnerów edukacyjnych, a w przypadku
            wyrażenia zainteresowania, także w celu złożenia odpowiedniej
            aplikacji o udział w wybranym kursie lub o jego dofinansowanie
            (podstawa prawna: art. 6 ust. 1 lit. f UK GDPR)
          </li>
          <li>
            W celu realizacji umowy zawartej z Tobą lub podmiotem, który
            reprezentujesz (podstawa prawna: art. 6 ust. 1 lit. b UK GDPR)
          </li>
          <li>
            {" "}
            To ensure the security and safe operation of our websites and
            underlying business infrastructure (legal basis: Article 6 (1) (f)
            of the UK GDPR){" "}
          </li>
          <li>
            W celu zapewnienia bezpieczeństwa i prawidłowego działania naszych
            stron internetowych oraz infrastruktury technicznej (podstawa
            prawna: art. 6 ust. 1 lit. f UK GDPR)
          </li>
          <li>
            W celu zarządzania komunikacją pomiędzy Tobą a nami (podstawa
            prawna: art. 6 ust. 1 lit. f UK GDPR)
          </li>
        </Paragraph>
        <Paragraph>
          <b>4.2</b> Informacje techniczne Aby umożliwić skuteczne korzystanie z
          naszej strony internetowej, zbieramy również:
          <li>
            informacje techniczne, w tym adres IP (Internet Protocol)
            wykorzystywany do połączenia urządzenia z Internetem
          </li>
          <li>
            dane logowania, typ i wersja przeglądarki, ustawienia strefy
            czasowej, typy i wersje wtyczek do przeglądarki
          </li>
          <li>system operacyjny i platformę</li>
          <li>
            informacje o Twojej wizycie, w tym ścieżkę URL (Uniform Resource
            Locators) do, przez i z naszej strony
          </li>
        </Paragraph>
        <Paragraph>
          <b>4.3</b> Polityka cookies Nasza polityka cookies, dostępna ze strony
          głównej, szczegółowo opisuje sposób korzystania przez nas z cookies.
          Do zarządzania cookies i podobnymi technologiami (piksele śledzące,
          sygnały nawigacyjne itp.) oraz związanymi z nimi zgodami,
          wykorzystujemy narzędzie do zarządzania zgodami. Podstawą prawną
          przetwarzania danych osobowych w tym zakresie są art. 6 ust. 1 lit. c
          UK GDPR oraz art. 6 ust. 1 lit. f UK GDPR. Nasz uzasadniony interes to
          zarządzanie wykorzystywaniem cookies i podobnych technologii oraz
          związanych z nimi zgód. Podanie danych osobowych nie jest wymagane
          umownie ani nie jest konieczne do zawarcia umowy. Nie masz obowiązku
          podawania danych osobowych. W przypadku ich niepodania, nie będziemy
          mogli zarządzać Twoimi zgodami.
        </Paragraph>
      </Section>

      <Section>
        <Subheading>5. Jak i jak długo wykorzystujemy Twoje dane?</Subheading>
        <Paragraph>
          5.1 Wszystkie dane osobowe są przetwarzane i przechowywane w sposób
          bezpieczny, nie dłużej niż jest to konieczne w związku z celami, dla
          których zostały pierwotnie zebrane – maksymalnie przez 6 lat od daty
          realizacji umowy lub 6 lat od ukończenia ostatniego kursu, w którego
          procesie aplikacyjnym uczestniczyliśmy, lub 6 lat od ostatniego
          kontaktu z naszą firmą, w zależności od tego, który z tych terminów
          jest dłuższy. Przez cały czas będziemy przestrzegać naszych obowiązków
          i chronić Twoje prawa zgodnie z UK GDPR.
        </Paragraph>
        <Paragraph>
          5.2 Nasze wykorzystanie Twoich danych osobowych będzie zawsze mieć
          podstawę prawną, np.:
          <br></br>
          <br></br>
          <li>
            realizacja umowy zawartej z Tobą (art. 6 ust. 1 lit. b UK GDPR),
          </li>
          <li>
            realizacja obowiązków prawnych ciążących na Administratorze (art. 6
            ust. 1 lit. c UK GDPR),
          </li>
          <li>
            nasz uzasadniony interes – np. kontakt z Tobą, odpowiedź na Twoje
            pytania, konsultacje podczas spotkań online lub rozmów
            telefonicznych (art. 6 ust. 1 lit. f UK GDPR).
          </li>
          <li>Możemy wykorzystywać Twoje dane w szczególności do:</li>
          <li>
            zapewnienia i zarządzania dostępem do naszej strony internetowej;
          </li>
          <li>personalizacji i dostosowania korzystania z naszej strony;</li>
          <li>
            w celu wsparcia Twojej edukacji, konieczne jest udostępnianie danych
            instytucjom edukacyjnym – robimy to bezpiecznie i wyłącznie wobec
            instytucji, które mają odpowiednią ofertę i z którymi zawarliśmy
            umowę o przetwarzaniu danych osobowych;
          </li>
          <li>odpowiadania na Twoje wiadomości e-mail;</li>
          <li>
            przesyłania informacji i materiałów marketingowych o naszych
            działaniach.
          </li>
        </Paragraph>
        <Paragraph>
          5.3 Bezpieczeństwo danych jest dla nas bardzo ważne – stosujemy
          odpowiednie środki techniczne i organizacyjne w celu ochrony danych
          osobowych.
        </Paragraph>
      </Section>

      <Section>
        <Subheading>6. Twoje prawa</Subheading>
        <Paragraph>Jako osoba, której dane dotyczą, masz prawo do:</Paragraph>
        <li>
          informacji o sposobie zbierania i wykorzystywania danych osobowych;
        </li>
        <li>dostępu do swoich danych osobowych;</li>
        <li>
          sprostowania swoich danych osobowych, jeżeli są nieprawidłowe lub
          niekompletne;
        </li>
        <li>usunięcia danych osobowych (prawo do bycia zapomnianym);</li>
        <li>ograniczenia przetwarzania danych osobowych;</li>
        <li>przenoszenia danych osobowych;</li>
        <li>wniesienia sprzeciwu wobec przetwarzania danych osobowych;</li>
        <li>
          praw związanych z automatycznym podejmowaniem decyzji i profilowaniem.
        </li>
        <Paragraph>
          6.2 Niniejsza Polityka oraz wewnętrzne procedury naszej firmy mają na
          celu ochronę Twoich danych osobowych.
        </Paragraph>
        <Paragraph>
          6.3 Jeśli masz jakiekolwiek skargi dotyczące przetwarzania przez nas
          Twoich danych osobowych, prosimy o kontakt zgodnie z sekcją 10.
          Dołożymy wszelkich starań, aby rozwiązać problem. Masz także prawo do
          złożenia skargi do brytyjskiego organu nadzorczego: Information
          Commissioner’s Office – https://ico.org.uk/global/contact-us/.
        </Paragraph>
      </Section>

      <Section>
        <Subheading>Czy udostępniamy Twoje dane?</Subheading>
        <Paragraph>
          7.1 W celu wsparcia Twojej ścieżki edukacyjnej, konieczne jest
          udostępnianie Twoich danych instytucjom edukacyjnym – robimy to
          bezpiecznie i wyłącznie z instytucjami, które mają odpowiednią ofertę
          i z którymi zawarliśmy stosowne umowy o przetwarzaniu danych
          osobowych.
          <br></br> Zawsze informujemy, która instytucja edukacyjna jest
          odpowiedzialna za daną ofertę oraz gdzie można znaleźć jej Politykę
          Prywatności. To samo dotyczy partnerów wspierających nas w oferowaniu
          usług finansowania studiów lub kursów w Wielkiej Brytanii.
        </Paragraph>
        <Paragraph>
          7.2 Czasami możemy zawierać umowy z innymi podmiotami w celu
          świadczenia usług w naszym imieniu, np.: dostawcy usług IT, operatorzy
          płatności, wyszukiwarki internetowe, dostawcy usług pocztowych,
          podwykonawcy. W takich przypadkach udostępniamy dane wyłącznie w
          niezbędnym zakresie i dbamy o ich bezpieczne przetwarzanie.
        </Paragraph>
        <Paragraph>
          7.3 Możemy sporządzać statystyki dotyczące korzystania ze strony,
          które są anonimizowane i nie zawierają danych pozwalających na
          identyfikację osób. Takie dane możemy udostępniać np. inwestorom,
          partnerom i reklamodawcom – zgodnie z obowiązującymi przepisami prawa.
        </Paragraph>
        <Paragraph>
          7.4 Czasami możemy korzystać z podmiotów przetwarzających dane poza
          Wielką Brytanią. W takim przypadku dbamy, aby dane były odpowiednio
          chronione zgodnie z wymogami UK GDPR.
        </Paragraph>
        <Paragraph>
          7.5 W niektórych przypadkach możemy być prawnie zobowiązani do
          udostępnienia określonych danych, np. w toku postępowań prawnych, na
          podstawie przepisów prawa, nakazu sądowego lub decyzji organów
          administracji publicznej.
        </Paragraph>
      </Section>

      <Section>
        <Subheading>8. Prawo do niepodawania danych</Subheading>
        <Paragraph>
          8.1 Możesz korzystać z niektórych części naszej strony bez podawania
          danych osobowych.
        </Paragraph>
        <Paragraph>
          8.2 Możesz ograniczyć stosowanie cookies – w swojej przeglądarce
          internetowej możesz ustawić akceptację cookies lub ją wyłączyć.
          Domyślnie większość przeglądarek akceptuje cookies, ale możesz to
          zmienić w ustawieniach. Pamiętaj, że usunięcie cookies może spowodować
          utratę niektórych informacji ułatwiających korzystanie z naszej
          strony.
        </Paragraph>
      </Section>

      <Section>
        <Subheading>9. Jak uzyskać dostęp do swoich danych?</Subheading>
        <Paragraph>
          Masz prawo do uzyskania kopii swoich danych osobowych, które
          przetwarzamy. W celu uzyskania szczegółów prosimy o kontakt zgodnie z
          sekcją 10.
        </Paragraph>
      </Section>

      <Section>
        <Subheading>10. Kontakt z nami</Subheading>
        <Paragraph>
          Jeśli masz pytania lub wątpliwości dotyczące ochrony swoich danych
          osobowych, prosimy o kontakt e-mailowy na adres:
          director@admitgo.co.ukProsimy o jasne sformułowanie zapytania,
          szczególnie jeśli dotyczy ono danych, które posiadamy na Twój temat.
        </Paragraph>
      </Section>

      <Section>
        <Subheading>11. Zmiany w naszej Polityce Prywatności</Subheading>
        <Paragraph>
          Możemy okresowo aktualizować niniejszą Politykę Prywatności (np. w
          związku ze zmianami prawa). Wszelkie zmiany zostaną niezwłocznie
          opublikowane na naszej stronie, a dalsze korzystanie ze strony oznacza
          akceptację nowej wersji Polityki Prywatności. Zalecamy regularne
          sprawdzanie niniejszej strony.
        </Paragraph>
        <Paragraph>
          <strong>Data publikacji</strong> 06/2025
        </Paragraph>
      </Section>
    </Wrapper>
  );
};

// Styled Components
const Wrapper = styled.div`
  padding: ${gap * 2}px;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${PURPLE};
  margin-bottom: 1.5rem;
`;

const Subheading = styled.h2`
  font-size: 1.5rem;
  color: ${ORANGE};
  font-weight: 700;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  color: ${DARK_PURPLE};
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const Section = styled.div`
  margin-bottom: 2rem;
`;

export default Polish;
