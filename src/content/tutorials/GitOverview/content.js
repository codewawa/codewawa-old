import React, { Component, Fragment } from 'react'
import '../../../../node_modules/prismjs/plugins/keep-markup/prism-keep-markup.js';
import '../../../../node_modules/prismjs/plugins/command-line/prism-command-line.js';
import '../../../../node_modules/prismjs/plugins/command-line/prism-command-line.css';
import '../../../../node_modules/prismjs/themes/prism-okaidia.css';
import '../../../../node_modules/prismjs/prism.js';

export default class Content extends Component{
  constructor(props){
    super(props)
  }
  render = () => {
    return (
      <Fragment>
        <p>Chociaż tworzenie projektów grupowych, zwłaszcza w informatyce, jest bardzo efektywną metodą
pracy, to wiąże się z wieloma trudnościami. Jedną z nich jest konieczność zarządzania zmianami,
które dokonują członkowie zespołu. Dlatego powstało wiele tzw. <b>systemów kontroli wersji</b>. Jednym z
najpopularniejszych z nich jest <b>git</b>.
</p>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/1200px-Git-logo.svg.png" />
<p>
Zanim rozpoczniemy pracę nad jakimkolwiek grupowym
projektem musimy go pobrać ze <a href="https://git-scm.com/download/"> strony Gita</a>.
Kolejnym krokiem jest utworzenie własnego repozytorium z kopią projektu. Logujemy się na GitHub i
otwieramy repozytorium naszego projektu np. <code className="language-markdown">https://github.com/codewawa/todoapp</code>.
 W prawym górnym rogu klikamy przycisk <i>Fork</i>. Następnie klikamy na ikonę własnego konta, która się pojawiła.
Teraz na swoim koncie powinniśmy mieć repozytorium o takiej nazwie jak grupowy projekt np. <code className="language-markdown">https://github.com/tymek04/todoapp</code>.
</p><p>
Następnym krokiem jest sklonowanie repozytorium z GitHub na nasz komputer. W tym celu
otwieramy wiersz polecenia (lub terminal) i przechodzimy na pulpit za pomocą polecenia:
<pre className="command-line language-bash"><code className="language-bash">cd Desktop</code></pre>
Następnie wpisujemy komendę <code className="language-bash">git clone</code> i adres naszego repozytorium na GitHub np.
 <pre className="command-line language-bash"><code className="language-bash">
git clone https://github.com/tymek04/todoapp</code></pre>
  Za pomocą <code className="language-bash">cd</code> przechodzimy do sklonowanego folderu, w
tym wypadku:
<pre className="command-line language-bash"><code className="language-bash">
cd todoapp</code></pre>
  </p>
  <figure>
    <img src="https://www.linode.com/docs/assets/git-github-workflow-1000w.png" />
    <figcaption>by linode.com</figcaption>
    </figure>
    <p>
Teraz musimy sprawić, aby zmiany innych członków w oryginalnym repozytorium pojawiały się na
naszym komputerze. Wpisujemy komendę <code className="language-bash">git remote add upstream</code> i nazwę grupowego
repozytorium. W moim przypadku to polecenie przyjmie postać:
<pre className="command-line language-bash"><code className="language-bash">
git remote add upstream https://github.com/codewawa/todoapp</code></pre> 
Następnie wpisujemy komendę:
<pre className="command-line language-bash"><code className="language-bash">
git fetch upstream</code></pre> 
Teraz, jeśli zobaczymy, że w grupowym repozytorium zaszły zmiany, to możemy użyć poniższych komend, a nasze repozytorium się zaktualizuje.
<pre className="command-line language-bash"><code className="language-bash">
git pull upstream master && git push</code></pre> 
    </p>
    <br/>
    <p>
    Po wykonaniu tych wszystkich kroków możemy z czystym sumieniem zająć się zmienianiem kodu
projektu. Gdy wprowadzimy jakieś znaczące poprawki, zapisujemy je a następnie wchodzimy do
wiersza polecenia / terminala i wpisujemy następującą komędę: 
<pre className="command-line language-bash"><code className="language-bash">git add .</code></pre> 
(ta kropka nie kończy zdania, ale jest częścią polecenia). Potem dodajemy komendę <code className="language-bash">git commit -m </code> i opis dokonamych przez nas zmian np.
<pre className="command-line language-bash"><code className="language-bash">git commit -m ”Improved index.html and style.css footer added”</code></pre> 
Jeśli teraz wejdziemy na GitHub, zobaczymy, że zmiany pojawiły się w naszym repozytorium, ale nie w grupowym. Aby nasze zmiany
pojawiły się w głównym projekcie musimy stworzyć tzw. <i>pull request</i>. Na GitHub, w swoim
repozytorium klikamy przycisk <i>New pull request</i> a potem <i>Create pull request</i>. Nadajemy jakiś tytuł i
ponownie klikamy przycisk <i>Create pull request</i>. Teraz musimy poczekać aż zarządzający projektem
zaakceptuje nasze zmiany. Aby dowodzący nie spędzał całego czasu na rozpatrywaniu pull requests,
nie należy tworzyć ich po każdym commit, ale dopiero, gdy jakaś ich liczba dodaje do projektu
znaczącą użyteczność.
      </p>
      <hr />
      <p>To był pierwszy tutorial z serii <i>Git</i>. Przyszłe części opublikujemy wkrótce!
      </p>

      </Fragment>
    )
  }
}
