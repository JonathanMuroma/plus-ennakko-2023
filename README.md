# Plus-deskin koodaava toimittaja, ennakkotehtävä, helmikuu 2023

Eduskuntavaalit lähestyvät ja ennakkotehtävä liittyy vaaleihin. Toivottavasti viihdyt tehtävän parissa. Valmis tehtävä tulee palauttaa viimeistään maanantaina 27.2.2023 klo 12.

Tässä repossa on runko koneelle, jolla käyttäjä voisi rakentaa valitsemansa hallituspohjan täppäämällä puolueita. Runko on yksinkertainen React-sovellus joka pyörii Vite-työkalun päällä.

Tehtävänä on lisätä interaktiiviset elementit koneeseen. Voit koodata toteutuksen haluamallasi tavalla ja valitsemillasi työkaluilla.

- Koneen on tarkoitus näyttää hallituksen ja opposition voimasuhteet ja visualisoida valinta yksinkertaisella palkilla. Vinkki: voit etsiä erilaisia hallituskoneita netistä ja käyttää niitä referenssinä.
- Koneen tulisi näyttää tehdyt valinnat jollain visuaalisella tavalla ja tekstissä.
- Hyödynnä data-kansion `parties.json`-tiedostoa toteutuksessasi, sieltä löytyvät puoluekohtaiset paikkaluvut hypoteettiseen tilanteeseen vaalien jälkeen.
- `App.jsx`-tiedoston kommenteista löydät lisäohjeita.

Voit jatkaa sovelluksen työstämistä Reactilla tai rakentaa kokonaan uuden vaikkapa Vuella, SolidJS:llä tai muulla JavaScript-kehyksellä. Tyylitykset tulevat pohjassa `index.css` ja `App.css` -tiedostoista, mutta voit korvata nämä halutessasi esimerkiksi Styled Componentsilla, Tailwind CSS:llä tai CSS-moduuleilla. Tärkeintä on, että näytät mitä osaat.

Kloonaa tai forkkaa repo itsellesi, tee kone toiminnalliseksi ja jaa linkki valmiiseen repoon GitHubissa käyttäjille [kasperworks](https://github.com/kasperworks) ja [twimirv](https://github.com/twimirv).

Tarvitset koneellesi asennettuna [Node.js](https://nodejs.org/en/):n ja [Git](https://git-scm.com/)-työkalun. Pohja pyörähtää käyntiin komentorivin kautta, asentamalla package.jsonissa määritellyt riippuvuudet komennolla `yarn` (tai `npm install` tai `pnpm install`) ja ajamalla sen jälkeen komento `yarn dev`.

Valmiin koneen tulisi toimia vastaavasti kloonaamalla repo, asentamalla riippuvuudet ja pystyttämällä devausserveri. Voit halutessasi linkata myös URLin palvelimella pyörivään toimivaan toteutukseen, mutta tämä ei ole pakollista.

Jos sinulla on muuta kysyttävää ennakkotehtävään liittyen, olethan yhteydessä kristiina.tolvanen@yle.fi tai 040 6377 131.
