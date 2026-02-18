import { Creature } from "../types";

export const creatures: Creature[] = [
  {
    id: "medusa",
    name: "Medusa",
    type: "Gorgon",
    description:
      "Medusa was once a beautiful maiden who served in Athena's temple. After being violated by Poseidon in the temple, Athena transformed her into a Gorgon with snakes for hair. Anyone who looked directly at her face would turn to stone. She was eventually slain by Perseus, who used a mirrored shield to avoid her gaze.",
    abilities: ["Petrifying gaze", "Serpent hair", "Immortal sisters"],
    weakness: "Vulnerable while sleeping; can be killed if not looked at directly",
    famousEncounters: ["Slain by Perseus", "Gave birth to Pegasus upon death"],
  },
  {
    id: "minotaur",
    name: "Minotaur",
    type: "Bull-man hybrid",
    description:
      "The Minotaur was a creature with the head of a bull and body of a man, born from the union of Pasiphaë, wife of King Minos, and a sacred bull. It was imprisoned in the Labyrinth beneath Crete and fed human tributes from Athens every nine years until Theseus slew it.",
    abilities: ["Immense strength", "Fierce in combat", "Perfect navigation of the labyrinth"],
    weakness: "Limited to the labyrinth; vulnerable to skilled warriors",
    famousEncounters: ["Slain by Theseus with Ariadne's help"],
  },
  {
    id: "cerberus",
    name: "Cerberus",
    type: "Three-headed hound",
    description:
      "Cerberus is the three-headed dog that guards the gates of the Underworld, preventing the dead from leaving. Child of Typhon and Echidna, this monstrous hound has a serpent for a tail and snakes protruding from his back. He allows all spirits to enter the underworld but prevents any from leaving.",
    abilities: ["Three heads (some say fifty)", "Serpent tail", "Venomous bite", "Never sleeps"],
    weakness: "Can be subdued by music; vulnerable to the honey cakes given by new arrivals",
    famousEncounters: [
      "Captured by Heracles (12th Labor)",
      "Lulled to sleep by Orpheus's music",
      "Subdued by Psyche with honey cakes",
    ],
  },
  {
    id: "hydra",
    name: "Lernaean Hydra",
    type: "Multi-headed serpent",
    description:
      "The Lernaean Hydra was a serpentine monster with multiple heads (usually depicted as nine). For each head cut off, two more would grow in its place. It lived in the marshes of Lerna and its breath and blood were extremely poisonous. One of its heads was immortal.",
    abilities: [
      "Multiple heads that regenerate",
      "Poisonous breath",
      "Venomous blood",
      "One immortal head",
    ],
    weakness: "Regeneration can be stopped by burning the neck stumps",
    famousEncounters: ["Slain by Heracles with help from Iolaus (2nd Labor)"],
  },
  {
    id: "chimera",
    name: "Chimera",
    type: "Hybrid monster",
    description:
      "The Chimera was a fire-breathing hybrid creature with the head of a lion, body of a goat, and tail of a serpent. Some depictions show it with multiple heads. Offspring of Typhon and Echidna, it terrorized the region of Lycia until being slain by the hero Bellerophon riding Pegasus.",
    abilities: ["Fire-breathing", "Multiple attacking points", "Flight (in some versions)"],
    weakness: "Vulnerable to aerial attacks",
    famousEncounters: ["Slain by Bellerophon on Pegasus"],
  },
  {
    id: "sphinx",
    name: "Sphinx",
    type: "Winged monster",
    description:
      "The Sphinx had the head of a woman, body of a lion, wings of a bird, and tail of a serpent. She guarded the entrance to Thebes and asked travelers a riddle: 'What walks on four legs in morning, two at noon, and three in evening?' Those who answered incorrectly were devoured. Oedipus solved it (man), causing the Sphinx to destroy herself.",
    abilities: ["Flight", "Riddles", "Immense strength", "Strangling"],
    weakness: "Solving her riddle caused her death",
    famousEncounters: ["Defeated by Oedipus who answered her riddle"],
  },
  {
    id: "pegasus",
    name: "Pegasus",
    type: "Winged horse",
    description:
      "Pegasus was a divine winged stallion, born from Medusa's blood when Perseus beheaded her. Pure white with magnificent wings, he became the mount of heroes. He was eventually tamed by Bellerophon with the help of Athena's golden bridle. After Bellerophon's fall, Pegasus flew to Olympus where he carried Zeus's thunderbolts.",
    abilities: ["Flight", "Created springs with his hooves", "Divine speed and stamina"],
    weakness: "Could only be tamed with Athena's golden bridle",
    famousEncounters: [
      "Tamed by Bellerophon",
      "Helped defeat the Chimera",
      "Carried Zeus's thunderbolts",
    ],
  },
  {
    id: "cyclops",
    name: "Cyclops (Polyphemus)",
    type: "Giant",
    description:
      "Cyclopes were one-eyed giants. The most famous was Polyphemus, son of Poseidon, who trapped Odysseus and his men in his cave. Polyphemus devoured several of Odysseus's crew before the hero got him drunk and blinded his single eye with a burning stake, allowing the survivors to escape tied beneath sheep.",
    abilities: ["Immense strength", "Size advantage", "Powerful throw"],
    weakness: "Single eye; not very intelligent; can be outwitted",
    famousEncounters: ["Blinded by Odysseus", "Called on Poseidon to curse Odysseus"],
  },
  {
    id: "scylla",
    name: "Scylla",
    type: "Sea monster",
    description:
      "Scylla was once a beautiful nymph transformed into a horrific sea monster. She had six long necks with grotesque heads, each containing three rows of sharp teeth. Her lower body was made of twelve tentacle-like legs. She lived on one side of a narrow strait opposite the whirlpool Charybdis.",
    abilities: ["Six heads that strike simultaneously", "Multiple rows of teeth", "Powerful tentacles"],
    weakness: "Fixed to her location in the strait",
    famousEncounters: ["Attacked Odysseus's ship, devouring six men"],
  },
  {
    id: "charybdis",
    name: "Charybdis",
    type: "Sea monster/Whirlpool",
    description:
      "Charybdis was a massive sea monster that took the form of a deadly whirlpool. Three times a day she would swallow huge amounts of water, creating a massive maelstrom, then spit it back out. She dwelt in the strait opposite Scylla, making passage treacherous—sailors had to choose which monster to pass closer to.",
    abilities: ["Creates massive whirlpools", "Swallows entire ships", "Controls water"],
    weakness: "Timing—can be passed during the calm periods between swallowing",
    famousEncounters: ["Odysseus chose to pass closer to Scylla to avoid total destruction"],
  },
  {
    id: "sirens",
    name: "Sirens",
    type: "Bird-women",
    description:
      "Sirens were dangerous creatures with the bodies of birds and heads of women (later depicted as mermaids). They lived on rocky islands and sang beautiful songs that lured sailors to their doom, causing ships to crash on the rocks. Their voices were so enchanting that no mortal could resist.",
    abilities: ["Irresistible singing", "Knowledge of all that happens in the world", "Flight"],
    weakness: "Can be resisted with wax in ears or by being tied down",
    famousEncounters: ["Odysseus survived by having his crew plug their ears while he was tied to the mast"],
  },
  {
    id: "typhon",
    name: "Typhon",
    type: "Titan/Monster",
    description:
      "Typhon was the deadliest monster in Greek mythology, so fearsome that when he first appeared, the Olympian gods fled to Egypt in terror. He was taller than mountains, with a hundred dragon heads, and his eyes flashed fire. Father of many monsters with Echidna. Zeus eventually defeated him in an epic battle.",
    abilities: [
      "Hundred dragon heads",
      "Fire breath",
      "Control over storms",
      "Immense size and strength",
    ],
    weakness: "Defeated by Zeus's thunderbolts",
    famousEncounters: ["Epic battle with Zeus", "Imprisoned under Mount Etna"],
  },
];
