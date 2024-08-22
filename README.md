# CroFurs

Ovo je služben repo za kod CroFurs stranice

## Kako sudjelovati u razvoju?

1. Napravit Fork repoa

2. Klonirajte repo na računalo
```
git clone https://github.com/Your-username/CroFurs-web 
```

3. Napravite custom branch na kojem ćete raditi promijene

4. Pushajte promijene te napravite pull request

## Kako dodati svoju stranicu?

* CroFurs tim dopušta da se na našem serveru hosta stranice ostalih lokalnih furrya kako bi se potaknula kreativnost i zajedništvo hrvatske furry zajednice

* Trenutno ima nekih limitacija:
  *  Slike ne smiju biti preko 512KB (osim uz dopuštenje)
  *  Videi ne smiju biti preko 10MB (osim uz dopuštenje)
  *  Trenutno nije dozvoljeno stavljati JS kod. To će se kasnije promijeniti
  *  Nije dozvoljeno povlačenje JS skripta

* Koraci kako predati "zahtjev" za dodavanje vaše stranice:
  1. Popratite sekciju iznad. Potrebno je napravit sve do točke 3.
  2. Kada imate kopiju repoa na svom računalu, potrebno je napraviti direktorij sa svojim imenom unutar folder 'furs'. npr. Ovako bi trebalo izgledati za korisnika "xunillen"
    ```
      furs/
        `-- xunillen
    ```
  3. Nakon što to napravite, slobodno počnite radit svoju stranicu :), jedino što treba paziti je na strukturu koja bi poželjno trebala biti:
    ```
    furs/xunillen/
      |-- icons/        -> Sadrži ikone
      |-- images/       -> Sadrži slike 
      |-- index.html    -> Početna stranica
      |-- pages/        -> Sadrži ostale stranice
      `-- styles/       -> Sadrži sve CSS datoteke
    ```
  4. Dodajte link do svoje stranice na stranici unutar direktorija `/pages/furs.html`. npr.
    ```
    ...
    <ul>
        <li><a href="/furs/xunillen/index.html">Xunillen</a></li>
    </ul>
   ...

    To treba staviti u sekciju za vaše prvo početno slovo (npr. u ovom slučaju x), te ako ta sekcija ne postoji treba je napraviti.
    PS. Treba poštovati ostale ljude, te pratiti abecedni red tijekom stavljanja svog linka na stranicu
    ```
  6. Nakon Svih promjena, napravite pull request. Nakon što se pull request prihvati i merga u glavni repo, skripta će tijekom dana ažurirat stranicu na serveru.
 
Primjer stranice: https://crofurs.hr/furs/xunillen/
