import { Hero } from "../types";

export const heroes: Hero[] = [
  {
    id: "heracles",
    name: "Heracles",
    title: "The Greatest Hero",
    parentage: {
      father: "Zeus",
      mother: "Alcmene",
      divine: true,
    },
    famousFor: [
      "The Twelve Labors",
      "Slaying the Nemean Lion",
      "Capturing Cerberus",
      "Cleaning the Augean Stables",
      "Defeating the Hydra",
    ],
    weapons: ["club", "bow and arrows (with Hydra venom)", "lion skin armor"],
    companions: ["Iolaus", "Hylas", "Philoctetes"],
    fate: "Achieved immortality and married Hebe on Mount Olympus",
    description:
      "Heracles (Hercules in Roman) is the greatest of Greek heroes, known for his incredible strength and courage. Driven mad by Hera, he killed his family and was assigned the Twelve Labors as penance. After completing these seemingly impossible tasks and many other adventures, he was granted immortality.",
  },
  {
    id: "perseus",
    name: "Perseus",
    title: "Slayer of Medusa",
    parentage: {
      father: "Zeus",
      mother: "Danaë",
      divine: true,
    },
    famousFor: [
      "Beheading Medusa",
      "Rescuing Andromeda",
      "Founding Mycenae",
      "Killing the sea monster Cetus",
    ],
    weapons: [
      "Harpe (divine sword)",
      "Medusa's head",
      "Cap of Invisibility",
      "Winged sandals",
      "Kibisis (magical pouch)",
    ],
    companions: ["Andromeda", "Dictys"],
    fate: "Lived a long life as king, accidentally killed his grandfather as prophesied",
    description:
      "Perseus was a legendary hero best known for slaying Medusa, one of the three Gorgons whose gaze could turn people to stone. With the help of gods, he obtained divine weapons and successfully beheaded Medusa. He used her head as a weapon to save Andromeda from a sea monster, whom he later married.",
  },
  {
    id: "theseus",
    name: "Theseus",
    title: "King of Athens",
    parentage: {
      father: "Aegeus (or Poseidon)",
      mother: "Aethra",
      divine: false,
    },
    famousFor: [
      "Slaying the Minotaur",
      "Unifying Attica",
      "Founding democracy in Athens",
      "Journey to retrieve his father's sword",
    ],
    weapons: ["sword of Aegeus", "club"],
    companions: ["Ariadne", "Pirithous", "Heracles"],
    fate: "Betrayed Ariadne, later died in exile",
    description:
      "Theseus was the legendary founder-king of Athens and one of its greatest heroes. He is best known for slaying the Minotaur in the Cretan labyrinth with the help of Ariadne's thread. He united the various tribes of Attica and is credited with establishing Athenian democracy. His adventures parallel those of Heracles.",
  },
  {
    id: "achilles",
    name: "Achilles",
    title: "Greatest Warrior of the Trojan War",
    parentage: {
      father: "Peleus",
      mother: "Thetis",
      divine: true,
    },
    famousFor: [
      "Nearly invulnerable body",
      "Greatest warrior of the Trojan War",
      "Slaying Hector",
      "Death from arrow to heel",
    ],
    weapons: ["spear", "sword", "shield and armor made by Hephaestus"],
    companions: ["Patroclus", "Phoenix", "Automedon"],
    fate: "Killed by Paris's arrow to his heel during the Trojan War",
    description:
      "Achilles was the greatest warrior of the Trojan War. His mother Thetis dipped him in the river Styx as a baby, making him invulnerable except for his heel. Known for his rage and prowess in battle, he withdrew from fighting after a quarrel with Agamemnon but returned to avenge his companion Patroclus's death.",
  },
  {
    id: "odysseus",
    name: "Odysseus",
    title: "The Cunning Hero",
    parentage: {
      father: "Laertes",
      mother: "Anticlea",
      divine: false,
    },
    famousFor: [
      "The Trojan Horse strategy",
      "Ten-year journey home (The Odyssey)",
      "Blinding the Cyclops Polyphemus",
      "Resisting the Sirens",
      "Clever problem-solving",
    ],
    weapons: ["bow", "spear", "his cunning intelligence"],
    companions: ["Penelope", "Telemachus", "Athena", "Eumaios"],
    fate: "Returned home to Ithaca after 20 years, reunited with Penelope",
    description:
      "Odysseus was the king of Ithaca, known for his intelligence and cunning. He devised the Trojan Horse strategy that ended the Trojan War. His ten-year journey home is chronicled in Homer's Odyssey, where he faced numerous challenges including the Cyclops, Circe, the Sirens, and Scylla and Charybdis.",
  },
  {
    id: "jason",
    name: "Jason",
    title: "Leader of the Argonauts",
    parentage: {
      father: "Aeson",
      mother: "Polymede",
      divine: false,
    },
    famousFor: [
      "Quest for the Golden Fleece",
      "Leading the Argonauts",
      "Marriage to Medea",
    ],
    weapons: ["sword", "spear"],
    companions: ["Medea", "Heracles", "Orpheus", "Castor and Pollux", "Atalanta"],
    fate: "Abandoned Medea, died alone when ship's timber fell on him",
    description:
      "Jason was a hero who led the Argonauts on a quest to retrieve the Golden Fleece from Colchis. With the help of the sorceress Medea, who fell in love with him, he succeeded in his quest. However, he later betrayed Medea to marry a princess, leading to tragic consequences.",
  },
  {
    id: "bellerophon",
    name: "Bellerophon",
    title: "Tamer of Pegasus",
    parentage: {
      father: "Poseidon (or Glaucus)",
      mother: "Eurynome",
      divine: true,
    },
    famousFor: [
      "Taming Pegasus",
      "Slaying the Chimera",
      "Defeating the Amazons",
      "Attempted flight to Olympus",
    ],
    weapons: ["spear", "Pegasus"],
    companions: ["Pegasus", "Proetus"],
    fate: "Attempted to fly to Olympus, was thrown by Pegasus, lived as a crippled outcast",
    description:
      "Bellerophon was a hero known for taming the winged horse Pegasus and slaying the fire-breathing Chimera. With Pegasus, he completed many impossible tasks. However, his pride led him to attempt to fly to Mount Olympus. Zeus sent a gadfly to sting Pegasus, causing Bellerophon to fall and spend his remaining days crippled and alone.",
  },
  {
    id: "atalanta",
    name: "Atalanta",
    title: "The Swift Huntress",
    parentage: {
      father: "Iasus (or Schoeneus)",
      mother: "Clymene",
      divine: false,
    },
    famousFor: [
      "Hunting the Calydonian Boar",
      "Being the fastest runner",
      "Only woman among the Argonauts",
      "The golden apples race",
    ],
    weapons: ["bow and arrow", "javelin", "hunting spear"],
    companions: ["Meleager", "the Argonauts"],
    fate: "Married Hippomenes after losing race, both turned into lions by Zeus",
    description:
      "Atalanta was a fierce huntress who was abandoned as a baby and raised by a bear. She became one of the greatest hunters and athletes in Greece, the only woman among the Argonauts. She vowed to remain unmarried unless a suitor could beat her in a footrace. Hippomenes won by dropping golden apples during the race.",
  },
];
