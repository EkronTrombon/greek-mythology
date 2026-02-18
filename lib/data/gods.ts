import { God } from "../types";

export const gods: God[] = [
  {
    id: "zeus",
    name: "Zeus",
    greekName: "Ζεύς",
    romanName: "Jupiter",
    title: "King of the Gods",
    domain: ["sky", "thunder", "lightning", "law", "order", "justice"],
    symbols: ["lightning bolt", "eagle", "oak tree", "bull"],
    parentage: {
      father: "Cronus",
      mother: "Rhea",
    },
    residence: "Mount Olympus",
    description:
      "Zeus is the supreme ruler of Mount Olympus and king of the gods. He overthrew his father Cronus and drew lots with his brothers Poseidon and Hades to divide the universe. Zeus became the god of the sky and thunder, wielding the mighty thunderbolt as his weapon. Known for his numerous affairs and offspring, both divine and mortal.",
  },
  {
    id: "poseidon",
    name: "Poseidon",
    greekName: "Ποσειδῶν",
    romanName: "Neptune",
    title: "God of the Sea",
    domain: ["sea", "earthquakes", "horses", "storms"],
    symbols: ["trident", "dolphin", "horse", "bull"],
    parentage: {
      father: "Cronus",
      mother: "Rhea",
    },
    residence: "Underwater palace",
    description:
      "Poseidon is the god of the sea, earthquakes, and horses. He is one of the three sons of Cronus and Rhea, and brother to Zeus and Hades. Poseidon wields a powerful trident and is known for his volatile temper, causing storms and earthquakes when angered. He is also credited with creating horses.",
  },
  {
    id: "hades",
    name: "Hades",
    greekName: "ᾍδης",
    romanName: "Pluto",
    title: "God of the Underworld",
    domain: ["underworld", "death", "riches", "minerals"],
    symbols: ["helm of darkness", "Cerberus", "cypress", "narcissus"],
    parentage: {
      father: "Cronus",
      mother: "Rhea",
    },
    residence: "The Underworld",
    description:
      "Hades is the god of the underworld and the dead. Despite his dark domain, he is not evil but rather stern and unyielding. He rules over the deceased with his wife Persephone. Hades is also associated with wealth, as precious metals and gems are found underground. He rarely leaves his realm.",
  },
  {
    id: "athena",
    name: "Athena",
    greekName: "Ἀθηνᾶ",
    romanName: "Minerva",
    title: "Goddess of Wisdom",
    domain: ["wisdom", "warfare", "crafts", "strategy", "civilization"],
    symbols: ["owl", "olive tree", "aegis", "spear", "helmet"],
    parentage: {
      father: "Zeus",
    },
    residence: "Mount Olympus",
    description:
      "Athena was born fully grown and armored from Zeus's forehead. She is the goddess of wisdom, strategic warfare, and crafts. Unlike Ares, she represents the intellectual and civilized aspects of war. Athena is the patron goddess of Athens and is known for her fair judgments and assistance to heroes.",
  },
  {
    id: "apollo",
    name: "Apollo",
    greekName: "Ἀπόλλων",
    romanName: "Apollo",
    title: "God of Light and Music",
    domain: ["sun", "music", "poetry", "prophecy", "healing", "archery"],
    symbols: ["lyre", "bow and arrow", "laurel wreath", "python", "sun"],
    parentage: {
      father: "Zeus",
      mother: "Leto",
    },
    residence: "Mount Olympus",
    description:
      "Apollo is one of the most important Olympian deities, associated with the sun, light, music, poetry, prophecy, and healing. He is the twin brother of Artemis. Apollo is known for his oracle at Delphi, his musical talent with the lyre, and his role as leader of the Muses.",
  },
  {
    id: "artemis",
    name: "Artemis",
    greekName: "Ἄρτεμις",
    romanName: "Diana",
    title: "Goddess of the Hunt",
    domain: ["hunt", "wilderness", "moon", "childbirth", "virginity"],
    symbols: ["bow and arrow", "deer", "moon", "cypress"],
    parentage: {
      father: "Zeus",
      mother: "Leto",
    },
    residence: "Mount Olympus",
    description:
      "Artemis is the virgin goddess of the hunt, wilderness, and the moon. Twin sister of Apollo, she is a skilled archer and protector of young women and children. Artemis leads a group of hunting nymphs and is known for her fierce independence and swift punishment of those who offend her.",
  },
  {
    id: "aphrodite",
    name: "Aphrodite",
    greekName: "Ἀφροδίτη",
    romanName: "Venus",
    title: "Goddess of Love",
    domain: ["love", "beauty", "pleasure", "desire", "fertility"],
    symbols: ["dove", "swan", "rose", "myrtle", "scallop shell"],
    parentage: {
      father: "Uranus (from sea foam)",
    },
    residence: "Mount Olympus",
    description:
      "Aphrodite is the goddess of love, beauty, and desire. Born from the sea foam after Cronus castrated Uranus, she is married to Hephaestus but had affairs with Ares and others. Aphrodite wields immense power over both mortals and immortals, and is often accompanied by her son Eros (Cupid).",
  },
  {
    id: "ares",
    name: "Ares",
    greekName: "Ἄρης",
    romanName: "Mars",
    title: "God of War",
    domain: ["war", "bloodshed", "violence", "courage"],
    symbols: ["spear", "helmet", "dog", "vulture", "shield"],
    parentage: {
      father: "Zeus",
      mother: "Hera",
    },
    residence: "Mount Olympus",
    description:
      "Ares is the god of war, representing the brutal and violent aspects of battle. Unlike Athena's strategic warfare, Ares embodies the chaos and bloodlust of combat. Despite being a powerful Olympian, he was not widely worshipped in ancient Greece. He had a long affair with Aphrodite.",
  },
  {
    id: "hephaestus",
    name: "Hephaestus",
    greekName: "Ἥφαιστος",
    romanName: "Vulcan",
    title: "God of Fire and Forge",
    domain: ["fire", "metalworking", "craftsmanship", "sculpture", "volcanoes"],
    symbols: ["hammer", "anvil", "tongs", "quail", "volcano"],
    parentage: {
      father: "Zeus",
      mother: "Hera",
    },
    residence: "Mount Olympus (forge)",
    description:
      "Hephaestus is the god of fire, metalworking, and craftsmanship. Born with a lame leg, he was thrown from Olympus by Hera (or Zeus). Despite this, he became the divine blacksmith, creating magnificent weapons and artifacts for the gods, including Zeus's thunderbolts and Achilles' armor.",
  },
  {
    id: "hermes",
    name: "Hermes",
    greekName: "Ἑρμῆς",
    romanName: "Mercury",
    title: "Messenger of the Gods",
    domain: ["travel", "trade", "thieves", "messengers", "boundaries"],
    symbols: ["caduceus", "winged sandals", "winged hat", "tortoise", "lyre"],
    parentage: {
      father: "Zeus",
      mother: "Maia",
    },
    residence: "Mount Olympus",
    description:
      "Hermes is the swift messenger of the gods, god of travelers, merchants, and thieves. Known for his cunning and inventiveness, he created the lyre from a tortoise shell on the day he was born. Hermes guides souls to the underworld and is a patron of boundaries and transitions.",
  },
  {
    id: "demeter",
    name: "Demeter",
    greekName: "Δημήτηρ",
    romanName: "Ceres",
    title: "Goddess of Harvest",
    domain: ["agriculture", "harvest", "grain", "fertility", "seasons"],
    symbols: ["wheat", "torch", "cornucopia", "poppy"],
    parentage: {
      father: "Cronus",
      mother: "Rhea",
    },
    residence: "Mount Olympus",
    description:
      "Demeter is the goddess of agriculture, harvest, and fertility. She controls the seasons and the growth of crops. When her daughter Persephone was abducted by Hades, Demeter's grief caused winter to fall upon the earth. Her cult at Eleusis was one of the most important mystery religions.",
  },
  {
    id: "dionysus",
    name: "Dionysus",
    greekName: "Διόνυσος",
    romanName: "Bacchus",
    title: "God of Wine",
    domain: ["wine", "festivities", "theater", "ecstasy", "madness"],
    symbols: ["grapevine", "ivy", "thyrsus", "leopard", "chalice"],
    parentage: {
      father: "Zeus",
      mother: "Semele",
    },
    residence: "Mount Olympus",
    description:
      "Dionysus is the god of wine, revelry, and theater. Born from Zeus's thigh after his mother's death, he is associated with religious ecstasy and ritual madness. Dionysus traveled the world teaching viticulture and was accompanied by satyrs and maenads. He represents both joy and destructive chaos.",
  },
];
