import { Myth } from "../types";

export const myths: Myth[] = [
  {
    id: "creation",
    title: "The Creation of the World",
    category: "creation",
    characters: ["Chaos", "Gaia", "Uranus", "Cronus", "Titans"],
    locations: ["Tartarus", "Earth"],
    summary:
      "In the beginning was Chaos, from which emerged Gaia (Earth), Tartarus (the Abyss), and Eros (Love). Gaia gave birth to Uranus (Sky), and together they produced the Titans. Cronus, the youngest Titan, overthrew Uranus and ruled until he was in turn overthrown by his son Zeus, beginning the age of the Olympian gods.",
    moralLesson: "The cycle of power and succession between generations",
    description:
      "The Greek creation myth describes the emergence of order from primordial chaos. Each generation overthrows the previous: Uranus imprisoned his children in Tartarus, leading Cronus to castrate and overthrow him. Cronus then swallowed his children to prevent the same fate, but Rhea saved Zeus, who eventually forced Cronus to regurgitate his siblings and led them in the Titanomachy to establish the Olympian order.",
  },
  {
    id: "prometheus",
    title: "Prometheus and the Gift of Fire",
    category: "divine",
    characters: ["Prometheus", "Zeus", "Epimetheus", "Pandora"],
    locations: ["Mount Olympus", "Caucasus Mountains"],
    summary:
      "The Titan Prometheus defied Zeus by stealing fire from Olympus and giving it to humanity, enabling their advancement. As punishment, Zeus had Prometheus chained to a rock where an eagle would eat his liver daily, only for it to regenerate each night. His suffering ended when Heracles freed him.",
    moralLesson: "The price of defying divine authority and the gift of knowledge",
    description:
      "Prometheus, whose name means 'forethought,' was a champion of humanity. He tricked Zeus during a sacrifice, ensuring humans received the best meat. In retaliation, Zeus withheld fire from mortals. Prometheus stole it back, hidden in a fennel stalk. Zeus's further revenge included creating Pandora, whose curiosity led to the release of all evils into the world.",
  },
  {
    id: "persephone",
    title: "The Abduction of Persephone",
    category: "divine",
    characters: ["Persephone", "Hades", "Demeter", "Zeus", "Hecate"],
    locations: ["Sicily", "The Underworld", "Mount Olympus"],
    summary:
      "Hades abducted Persephone, daughter of Demeter, to be his queen in the Underworld. Demeter's grief caused all crops to fail and winter to fall upon the earth. Zeus negotiated Persephone's return, but because she had eaten pomegranate seeds in the Underworld, she must spend part of each year there, explaining the seasons.",
    moralLesson: "Explains the changing of seasons and the cycle of life and death",
    description:
      "This myth explains the origin of seasons. When Persephone is with her mother Demeter, the earth blooms in spring and summer. When she returns to the Underworld as Hades' queen, Demeter mourns and winter comes. The pomegranate seeds represent the irrevocable connection between the world of the living and the dead.",
  },
  {
    id: "trojan-war",
    title: "The Trojan War",
    category: "war",
    characters: [
      "Helen",
      "Paris",
      "Menelaus",
      "Agamemnon",
      "Achilles",
      "Hector",
      "Odysseus",
      "Priam",
    ],
    locations: ["Troy", "Sparta", "Greece"],
    summary:
      "The ten-year war between Greeks and Trojans began when Paris of Troy abducted Helen, wife of Menelaus of Sparta. The Greeks, led by Agamemnon, besieged Troy. After years of fighting featuring heroes like Achilles and Hector, the Greeks finally won through Odysseus's Trojan Horse stratagem, leading to Troy's destruction.",
    moralLesson: "The devastating consequences of pride, revenge, and divine intervention",
    description:
      "The Trojan War is one of the most famous events in Greek mythology, immortalized in Homer's Iliad. It began with the Judgment of Paris, where he chose Aphrodite as the fairest goddess, earning Helen as his prize. The war saw countless heroes on both sides, divine interventions, and epic duels. It ended with the clever deception of the Trojan Horse.",
  },
  {
    id: "odyssey",
    title: "The Odyssey",
    category: "heroic",
    characters: [
      "Odysseus",
      "Penelope",
      "Telemachus",
      "Athena",
      "Polyphemus",
      "Circe",
      "Calypso",
    ],
    locations: ["Ithaca", "Cyclops Island", "Aeaea", "Ogygia", "Phaeacia"],
    summary:
      "After the Trojan War, Odysseus spent ten years trying to return home to Ithaca. He faced numerous challenges including the Cyclops Polyphemus, the enchantress Circe, the Sirens, and the monsters Scylla and Charybdis. Meanwhile, his wife Penelope fended off suitors. Finally, with Athena's help, he returned home and reclaimed his kingdom.",
    moralLesson: "Perseverance, cleverness, and loyalty triumph over adversity",
    description:
      "Homer's Odyssey chronicles one of literature's greatest journeys. Odysseus's intelligence helped him survive each challenge, though his pride in blinding Polyphemus earned him Poseidon's lasting enmity. Penelope matched his cleverness by weaving a shroud by day and unraveling it by night to delay choosing a new husband.",
  },
  {
    id: "pandora",
    title: "Pandora's Box",
    category: "creation",
    characters: ["Pandora", "Epimetheus", "Prometheus", "Zeus"],
    locations: ["Earth"],
    summary:
      "Zeus created Pandora, the first woman, as punishment for Prometheus's theft of fire. She was given to Epimetheus along with a jar (often called a box) which she was told never to open. Overcome by curiosity, Pandora opened it, releasing all the evils into the world. Only Hope remained inside.",
    moralLesson: "Curiosity and disobedience have consequences; hope endures despite suffering",
    description:
      "Pandora was crafted by Hephaestus and given gifts by all the gods—her name means 'all-gifted.' Despite Prometheus's warnings, Epimetheus accepted her. The jar contained all the evils that plague humanity: disease, death, sorrow, vice. When these escaped, they spread throughout the world. Hope remained as humanity's consolation in the face of these evils.",
  },
  {
    id: "theseus-minotaur",
    title: "Theseus and the Minotaur",
    category: "heroic",
    characters: ["Theseus", "Ariadne", "Minos", "Minotaur", "Daedalus", "Aegeus"],
    locations: ["Crete", "Athens", "Labyrinth"],
    summary:
      "Athens had to send seven youths and maidens to Crete every nine years as tribute to be fed to the Minotaur. Theseus volunteered to go and kill the beast. With the help of Ariadne's thread, he navigated the labyrinth, slew the Minotaur, and escaped. However, he forgot to change his sail to white, causing his father to believe he had died.",
    moralLesson: "Courage and cleverness can overcome monsters; forgetfulness has tragic consequences",
    description:
      "The Minotaur was born from Minos's wife Pasiphaë and a sacred bull, punishment for Minos's hubris. Daedalus built the labyrinth to contain it. Ariadne fell in love with Theseus and gave him a ball of thread to mark his path. After victory, Theseus abandoned Ariadne on Naxos. His black sail caused his father Aegeus to throw himself into the sea (hence the Aegean).",
  },
  {
    id: "icarus",
    title: "Daedalus and Icarus",
    category: "tragedy",
    characters: ["Daedalus", "Icarus", "Minos"],
    locations: ["Crete", "Aegean Sea"],
    summary:
      "Imprisoned by King Minos, the inventor Daedalus fashioned wings of feathers and wax for himself and his son Icarus to escape. Daedalus warned Icarus not to fly too close to the sun or too close to the sea. In his exhilaration, Icarus flew too high, the sun melted the wax, and he fell to his death in the sea.",
    moralLesson: "Hubris and ignoring wise counsel lead to tragedy; moderation is key",
    description:
      "Daedalus was a master craftsman who created the labyrinth for Minos. After helping Theseus, Minos imprisoned him and his son. The wings represented both salvation and hubris. Icarus's youth and excitement made him forget his father's warnings. His fall became a cautionary tale about the dangers of ambition and pride—flying too high, too close to the divine realm.",
  },
  {
    id: "orpheus-eurydice",
    title: "Orpheus and Eurydice",
    category: "love",
    characters: ["Orpheus", "Eurydice", "Hades", "Persephone"],
    locations: ["Thrace", "The Underworld"],
    summary:
      "When Eurydice died from a snake bite, the musician Orpheus descended to the Underworld to retrieve her. His beautiful music moved Hades and Persephone to allow Eurydice to return, on one condition: Orpheus must not look back at her until they reached the surface. At the last moment, he looked back, and she vanished forever.",
    moralLesson: "Love can move even death, but doubt and impatience lead to loss",
    description:
      "Orpheus's music was so beautiful it could charm all living things, and even stones. His grief at losing Eurydice drove him to attempt the impossible. The gods of the Underworld were so moved they agreed to his request. But at the threshold of the living world, doubt overcame him—was she really following? He turned, and she faded back into death forever.",
  },
  {
    id: "perseus-medusa",
    title: "Perseus and Medusa",
    category: "heroic",
    characters: ["Perseus", "Medusa", "Athena", "Hermes", "Andromeda", "Polydectes"],
    locations: ["Seriphos", "Island of the Gorgons", "Ethiopia"],
    summary:
      "King Polydectes sent Perseus on an impossible quest to bring back Medusa's head. With divine gifts from Athena and Hermes, Perseus approached Medusa while she slept, using his polished shield as a mirror to avoid her petrifying gaze. After beheading her, he used her head as a weapon to rescue Andromeda and later turn Polydectes to stone.",
    moralLesson: "Cleverness and divine favor overcome impossible challenges",
    description:
      "Perseus was equipped with winged sandals, a cap of invisibility, a divine sword, and a mirrored shield. From Medusa's blood sprang Pegasus and Chrysaor. Perseus used her head to save Andromeda from a sea monster, turning it to stone. The head retained its power even after Medusa's death, and Perseus eventually gave it to Athena, who placed it on her aegis.",
  },
  {
    id: "jason-golden-fleece",
    title: "Jason and the Golden Fleece",
    category: "heroic",
    characters: ["Jason", "Medea", "Argonauts", "Pelias", "Aeetes"],
    locations: ["Iolcus", "Colchis", "Lemnos"],
    summary:
      "Jason was sent by his uncle Pelias to retrieve the Golden Fleece from Colchis, a task meant to be impossible. He assembled the greatest heroes (the Argonauts) and sailed on the ship Argo. In Colchis, Princess Medea fell in love with him and used her magic to help him complete the tasks set by her father Aeetes, securing the fleece.",
    moralLesson: "Teamwork and unexpected alliances can achieve the impossible",
    description:
      "The Golden Fleece came from a sacred flying ram that had saved two children. The fleece hung in a sacred grove, guarded by a dragon that never slept. Jason's crew included heroes like Heracles, Orpheus, Castor and Pollux. Medea's magic was crucial: she drugged the dragon and advised Jason through the fire-breathing bulls and dragon-teeth warriors.",
  },
  {
    id: "twelve-labors",
    title: "The Twelve Labors of Heracles",
    category: "heroic",
    characters: ["Heracles", "Eurystheus", "Iolaus", "Athena"],
    locations: ["Nemea", "Lerna", "Erymanthus", "Crete", "Thrace", "The Underworld"],
    summary:
      "Driven mad by Hera, Heracles killed his family and sought purification from the Oracle at Delphi. He was ordered to serve King Eurystheus and complete twelve seemingly impossible labors, including slaying the Nemean Lion, killing the Hydra, capturing Cerberus, and cleaning the Augean Stables. Completing these earned him redemption and eventual immortality.",
    moralLesson: "Redemption through perseverance; even the greatest heroes must atone for their mistakes",
    description:
      "The Twelve Labors showcase Heracles' strength, courage, and cleverness. Each labor was designed to be impossible: the Nemean Lion's hide was impervious to weapons, the Hydra grew two heads for each one cut off, Cerberus was the three-headed guardian of the Underworld. Yet Heracles succeeded through both might and wit, sometimes with help from Iolaus or Athena.",
  },
];
