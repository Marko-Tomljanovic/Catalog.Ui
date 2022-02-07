export default {
  kat: [
    {
      naslov: 'Romani',
      text: 'Roman je književna vrsta, katkad ironično nazvan pripoviješću s više od 60.000 riječi. Roman je najopsežniji i najsloženiji prozni oblik. Pisac pripovjedač niže brojne događaje, likove, opise, prikazuje društvo kao cjelinu. Danas je to najpopularnija književna forma.',
      link: '/kategorija/romani',
      slika: require('../assets/book.jpg'),
    },
    {
      naslov: 'Znanstvena fantastika',
      text: 'Znanstvena fantastika umjetnički je žanr, oblik spekulativne fikcije koji se prvenstveno bavi utjecajem izmišljene znanosti i/ili tehnologije na društvo ili pojedince. Definicija znanstvene fantastike vezuje se prije svega za književna, televizijska i filmska djela, ali znanstvena fantastika utječe i na likovnu i glazbenu umjetnost.',
      link: '/kategorija/znanstvenafantastika',
      slika: require('../assets/book.jpg'),
    },
    {
      naslov: 'Drama',
      text: 'Drama je žanr u književnosti, koji je nastao za vrijeme antičke Grčke i koji se i danas razvija. Drama je književno djelo, koje uglavnom služi javnom izvođenju u pozorištu. Tokom 18. i 19. vijeka, opera je nastala kao kombinacija drame, poezije, i muzike.',
      link: '/kategorija/drama',
      slika: require('../assets/book.jpg'),
    },
    {
      naslov: 'Poezija',
      text: 'Poezija ili pjesništvo je umjetnost koja se zasniva na izražajnim mogućnostima jezika. U suvremenoj teoriji ovaj pojam označava stvaralačku energiju uopće, ili umjetnički žar posebno, ili lijepu književnost u cjelini ili književnu vrstu (za razliku od proze), kao lingvistički izraz u vezanim ili nevezanim oblicima.',
      link: '/kategorija/poezija',
      slika: require('../assets/book.jpg'),
    },
    {
      naslov: 'Knjige za djecu',
      text: 'Pri izboru slikovnice treba uvažavati djetetove želje. Od odraslog se očekuje da mu ponudi slikovnice i zainteresira ga za one koje su primjerene njegovim mogućnostima shvaćanja. Slikovnice imaju vrlo različite teme, a danas se sve više pojavljuju one koje govore o tabu temama ',
      link: '/kategorija/knjigezadjecu',
      slika: require('../assets/book.jpg'),
    },
    {
      naslov: 'Biografija',
      text: 'Biografija je vrsta književnog djela koja sadrži podatke iz života neke stvarne ili izmišljene osobe, a kojima se opisuje život te osobe. Za razliku od životopisa, biografije ne sadrže samo činjenične podatke o nekoj osobi, na primjer, datum i mjesto rođenja i smrti, podaci o školovanju i zaposlenju, već i neke privatne sadržaje. ',
      link: '/kategorija/biografija',
      slika: require('../assets/book.jpg'),
    },
    {
      naslov: 'Povijest',
      link: '/kategorija/povijest',
      slika: require('../assets/book.jpg'),
    },
    {
      naslov: 'Religija',
      link: '/kategorija/religija',
      slika: require('../assets/book.jpg'),
    },
    {
      naslov: 'Umjetnost',
      link: '/kategorija/umjetnost',
      slika: require('../assets/book.jpg'),
    },
    {
      naslov: 'Znanost i tehnologija',
      link: '/kategorija/znanostitehnologija',
      slika: require('../assets/book.jpg'),
      adress: 'znanostitehnlogija',
    },
  ],

  adrese: [
    'romani',
    'znanstvenafantastika',
    'drama',
    'poezija',
    'knjigezadjecu',
    'biografija',
    'povijest',
    'religija',
    'umjetnost',
    'znanostitehnlogija',
  ],

  katKnjiga: [
    {
      naslov: 'Star Wars',
      link: '/profil/starwars',
      slika: require('../assets/bookCard.jpg'),
    },
    {
      naslov: 'Primjer Naziva',
      link: '/profil/primjernaziva',
      slika: require('../assets/bookCard.jpg'),
    },
    {
      naslov: 'Scherlock Hlomes',
      link: '/profil/scerlockhlomes',
      slika: require('../assets/bookCard.jpg'),
    },
    {
      naslov: 'Fina upute',
      link: '/profil/finaupute',
      slika: require('../assets/bookCard.jpg'),
    },
  ],
  selected: null,

  stanje: [
    {
      value: 'Bez vidljih oštećenja',
      text: 'Bez vidljih oštećenja',
    },
    {
      value: 'Dobro sa malim znakovima korištenja',
      text: 'Dobro sa malim znakovima korištenja',
    },
    {
      value: 'Vidljivo oštećena knjiga',
      text: 'Vidljivo oštećena knjiga',
    },
  ],

  odabirSelected: [],

  odabirKategorije: [
    {
      value: 'Romani',
      text: 'Romani',
    },
    {
      value: 'Znanstvena fantastika',
      text: 'Znanstvena fantastika',
    },
    {
      value: 'Drama',
      text: 'Drama',
    },
    {
      value: 'Poezija',
      text: 'Poezija',
    },
    {
      value: 'Knjige za djecu',
      text: 'Knjige za djecu',
    },
    {
      value: 'Biografija',
      text: 'Biografija',
    },
    {
      value: 'Povijest',
      text: 'Povijest',
    },
    {
      value: 'Religija',
      text: 'Religija',
    },
    {
      value: 'Umjetnost',
      text: 'Umjetnost',
    },
    {
      value: 'Znanost i tehnologija',
      text: 'Znanost i tehnologija',
    },
  ],
}
