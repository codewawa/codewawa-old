import React, { Component, Fragment } from 'react'

export default class Content extends Component{
  constructor(props){
    super(props)
  }
  render = () => {
    return (
      <Fragment>
        <p>
        Chyba wszyscy z nas pamiętają, jak na początku naszej przygody
         z tworzeniem stron internetowych naszym podstawowym narzędziem pracy był notatnik.
         Później każdy powoli wypracowywał swój własny sposób pracy. Jeden wolał Notepada++, drugi - kEDa.
        Założę się, że większość z was pracuje nadal w tych edytorach i nawet nie rozejrzała się za czymś innym.
         Jest nam dobrze pracować w znanym środowisku.
         Ten tutorial nie powstał po to, aby was usilnie namawiać na zmianę waszych ulubionych narzędzi pracy.
          To jest tylko inspiracja dla was. Sami powinniście wybrać swój ulubiony zestaw narzędzi. Pracowałem na edytorach takich jak Sublime Text, VisualStudio Code, Brackets,
          jednak Atom został moim faworytem. Głównie ze względu na możliwości personalizacji. Istnieje do niego masa plugin'ów, z łatwością można też tworzyć własne.
          Zafascynowała mnie również prostota jego konfiguracji - dodawnie własnych snippet'ów, edycja event'ów edytora. Nie na darmo Github chwali swoje narzędzie jako <cite>hackable</cite>.
</p>
          <p>Poniżej znajdują się filmiki dotyczące wybierania swoich narzędzi do pisania kodu oraz podstaw Atoma. Rzućcie okiem.</p>
          <p><i>Dałem też linki do filmików angielskich. Według mnie są one lepsze merytorycznie. Angielski internet WebDev'u jest
            również bardziej aktualny i większy od polskiego, więc polecam szukanie materiałów edukacyjnych głównie na stronach angielskich.
            W następnym artykule omówię szukanie informacji oraz jak i gdzie się kształcić jako WebDeveloper.</i></p>
          <p><i>Dla spragnionych nauki angielkiego z branży informatycznej rekomenduję stosunkowo nową <a href="https://helion.pl/ksiazki/english-4-it-praktyczny-kurs-jezyka-angielskiego-dla-specjalistow-it-i-nie-tylko-beata-blaszczyk,anginf.htm#format/d">
        książkę "English 4 IT"</a> wydaną przez Wydawnictwo Helion.</i></p>
          <i>Artykuł będzie w przyszłości kontynuowany...</i>
          <p>[PL]:</p>
          <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/WjSxnZ8e4Us" frameborder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/LJvMFSu2wCI" frameborder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
          <p>[EN]:</p>
          <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/WWwBQQOGllo" frameborder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
          <p>^ Tu jest cała playlista tutoriali</p>
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/aiXNKHKWlmY" frameborder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>

      </Fragment>
    )
  }
}
