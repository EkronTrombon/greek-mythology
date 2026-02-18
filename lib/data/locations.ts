import { Location } from "../types";

export const locations: Location[] = [
  {
    id: "olympus",
    name: "Mount Olympus",
    type: "mountain",
    region: "Thessaly, Greece",
    significance: "Home of the Olympian gods",
    associatedDeities: ["Zeus", "Hera", "Athena", "Apollo", "Artemis", "all Olympians"],
    description:
      "Mount Olympus is the highest mountain in Greece and the legendary home of the twelve Olympian gods. The summit was said to be shrouded in clouds, hiding the magnificent palaces of the gods from mortal eyes. It was here that Zeus held court and the gods gathered to feast on ambrosia and nectar.",
  },
  {
    id: "underworld",
    name: "The Underworld (Hades)",
    type: "underworld",
    significance: "Realm of the dead",
    associatedDeities: ["Hades", "Persephone", "Charon", "Thanatos", "Cerberus"],
    description:
      "The Underworld is the realm of the dead, ruled by Hades and Persephone. It consists of several regions including the Elysian Fields (paradise), Asphodel Meadows (for ordinary souls), and Tartarus (for punishment). The river Styx separates the world of the living from the dead, with Charon ferrying souls across.",
  },
  {
    id: "delphi",
    name: "Delphi",
    type: "temple",
    region: "Phocis, Greece",
    significance: "Site of Apollo's oracle",
    associatedDeities: ["Apollo", "Python", "Dionysus"],
    description:
      "Delphi was the most important oracle in ancient Greece, where the Pythia (priestess) delivered prophecies from Apollo. Located on Mount Parnassus, it was considered the center of the world, marked by the omphalos stone. Kings and commoners alike sought guidance from Apollo's oracle before major decisions.",
  },
  {
    id: "troy",
    name: "Troy",
    type: "city",
    region: "Anatolia (modern-day Turkey)",
    significance: "Site of the Trojan War",
    associatedDeities: ["Athena", "Apollo", "Aphrodite", "Ares"],
    description:
      "Troy was a legendary city besieged by the Greeks for ten years in the Trojan War. The war began after Paris of Troy abducted Helen, wife of Menelaus of Sparta. The conflict ended with the famous Trojan Horse stratagem devised by Odysseus, leading to Troy's destruction.",
  },
  {
    id: "athens",
    name: "Athens",
    type: "city",
    region: "Attica, Greece",
    significance: "City of Athena, birthplace of democracy",
    associatedDeities: ["Athena", "Poseidon"],
    description:
      "Athens was named after the goddess Athena, who won the city's patronage by gifting it an olive tree, deemed more valuable than Poseidon's salt spring. It became the most powerful city-state in ancient Greece and the birthplace of democracy, philosophy, and theater. The Parthenon temple crowns the Acropolis in her honor.",
  },
  {
    id: "crete",
    name: "Crete",
    type: "island",
    region: "Aegean Sea",
    significance: "Home of the Minotaur and King Minos",
    associatedDeities: ["Zeus", "Poseidon"],
    description:
      "Crete was home to the legendary King Minos and the Minoan civilization. The island is famous for the labyrinth built by Daedalus to house the Minotaur, a creature that was half-man, half-bull. Zeus was said to have been born and hidden in a cave on Crete to protect him from his father Cronus.",
  },
  {
    id: "sparta",
    name: "Sparta",
    type: "city",
    region: "Laconia, Greece",
    significance: "Home of the greatest warriors",
    associatedDeities: ["Ares", "Artemis", "Apollo"],
    description:
      "Sparta was a powerful city-state known for its military prowess and austere lifestyle. Spartan warriors were legendary for their discipline and skill in battle. The city was ruled by two kings and was the rival of Athens. Menelaus and Helen ruled Sparta before the Trojan War.",
  },
  {
    id: "elysium",
    name: "Elysian Fields",
    type: "realm",
    significance: "Paradise for heroes and the virtuous",
    associatedDeities: ["Hades", "Persephone"],
    description:
      "The Elysian Fields, or Elysium, is a paradise within the Underworld reserved for heroes, demigods, and those who lived exceptionally virtuous lives. It is described as a land of perfect happiness, with eternal spring, beautiful meadows, and no suffering. Here, the blessed could choose to be reborn or remain in bliss.",
  },
  {
    id: "tartarus",
    name: "Tartarus",
    type: "underworld",
    significance: "Prison for the Titans and place of punishment",
    associatedDeities: ["Hades", "Furies"],
    description:
      "Tartarus is the deepest, darkest pit of the Underworld, used as a dungeon of torment and suffering. It lies as far below the rest of the Underworld as Earth lies below Olympus. Here, the Titans were imprisoned after their defeat, and wicked mortals suffered eternal punishment for their crimes against the gods.",
  },
  {
    id: "parnassus",
    name: "Mount Parnassus",
    type: "mountain",
    region: "Phocis, Greece",
    significance: "Sacred to Apollo and the Muses",
    associatedDeities: ["Apollo", "Dionysus", "The Muses"],
    description:
      "Mount Parnassus is sacred to Apollo and Dionysus and home to the Muses. Delphi is located on its southern slopes. The mountain has two peaks called 'the shining ones' and was considered a source of poetic inspiration. During winter, Apollo was said to leave for the land of the Hyperboreans while Dionysus dwelled on the mountain.",
  },
  {
    id: "ithaca",
    name: "Ithaca",
    type: "island",
    region: "Ionian Sea",
    significance: "Kingdom of Odysseus",
    associatedDeities: ["Athena"],
    description:
      "Ithaca was the island kingdom of Odysseus, the hero of Homer's Odyssey. A rocky, modest island, it was nonetheless dear to Odysseus, who spent ten years fighting at Troy and another ten trying to return home. His faithful wife Penelope waited for him, fending off suitors who sought to claim his throne.",
  },
  {
    id: "thebes",
    name: "Thebes",
    type: "city",
    region: "Boeotia, Greece",
    significance: "Birthplace of Heracles and Dionysus",
    associatedDeities: ["Dionysus", "Zeus"],
    description:
      "Thebes was one of the most important cities in ancient Greece, rivaling Athens and Sparta. It was the birthplace of Heracles and Dionysus, and the setting for many tragic myths including the story of Oedipus. The city was founded by Cadmus, who sowed dragon's teeth that grew into warriors called Spartoi.",
  },
];
