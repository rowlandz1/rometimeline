var renderInfo = {
  "widthPx"        : 10000,
  "heightPx"       : 500,
  "eventHeightPx"  : 30,
  "eventSpacingPx" : 5
};

var eventsInfo = {
  "start"      : -800,
  "end"        : 600,
  "eraSize"    : 100,
  "events"  : [
    {
      "name" : "Founding of Rome",
      "when" : "753 BCE",
      "file": "descrs/founding_of_rome.html"
    },
    {
      "name" : "Founding of Byzantium",
      "when" : "657 BCE",
      "file": "descrs/founding_of_byzantium.html"
    },
    {
      "name" : "Founding of the Republic",
      "when" : "509 BCE",
      "file" : "descrs/founding_of_the_republic.html"
    },
    {
      "name" : "Battle of Lake Regillus",
      "when" : "496 BCE",
      "descr" : "Shortly after the abolition of the monarchy, a group of Latins under Roman rule revolted. A battle\
      took place at Lake Regillus ending with Roman victory. The battle ended Latin resistance to Roman rule for\
      150 years. It also marks the republic's first use of a dictator in response to external threat."
    },
    {
      "name" : "Secession of the Plebs",
      "when" : "494 BCE",
      "descr" : "The Plebians were becoming increasingly concerned with debt bondage. In 494 BCE, they basically\
      went on strike, forcing the hand of the Patricians. The office of tribune was created as a result."
    },
    {
      "name" : "Dictatorship of Cincinnatus",
      "when" : "458 BCE",
      "file" : "descrs/dictatorship_of_cincinnatus.html"
    },
    {
      "name" : "Twelve Tables",
      "when" : "451 BCE",
      "file" : "descrs/twelve_tables.html"
    },
    {
      "name" : "Rome Sacked by Gauls",
      "when" : "390 BCE",
      "file" : "descrs/rome_sacked_by_gauls.html"
    },
    {
      "name" : "Lex Genucia",
      "when" : "342 BCE",
      "descr" : "Since the founding of the Republic, the plebians struggled with the patricians\
      for more political power. According to tradition, plebians were forbidden from holding the\
      consulship, the highest political office, although modern historians believe the ban is\
      ficticious and there were in fact plebian consuls. Regardless, the political struggle between\
      the two groups lead to the passage of the Lex Genucia which required one of the yearly consuls\
      to be a plebian."
    },
    {
      "name" : "Battle of Cannae",
      "when" : "216 BCE"
    },
    {
      "name" : "Battle of Zama",
      "when" : "202 BCE"
    },
    {
      "name" : "Sulla marches on Rome",
      "when" : "88 BCE"
    },
    {
      "name" : "Catiline Conspiracy",
      "when" : "63 BCE",
      "file" : "descrs/catiline_conspiracy.html"
    },
    {
      "name" : "Crossing of the Rubicon",
      "when" : "49 BCE"
    },
    {
      "name" : "Julius Caesar Killed",
      "when" : "15 March 44 BCE"
    },
    {
      "name" : "Battle of Philippi",
      "when" : "42 BCE",
      "descr" : "The forces of the Second Triumvirate met the armies of Cassius and Brutus at\
      Philippi where they had fortified a defensive position between mountains and a swamp. Mark\
      Antony decided to make an unexpected attack from the swamp and was able to take the base.\
      Cassius committed suicide, while Brutus regrouped for one last fateful battle before falling\
      on his sword. The battle marks the end of republican opposition to the Caesarians, and the\
      height of Mark Antony's military career."
    },
    {
      "name" : "Battle of Actium",
      "when" : "31 BCE"
    },
    {
      "name" : "Census of Quirinius",
      "when" : "6"
    },
    {
      "name" : "Battle of the Teutoburg Forest",
      "when" : "9"
    },
    {
      "name" : "Crucifixion of Jesus",
      "when" : "33"
    },
    {
      "name" : "Rome Invades Britain",
      "when" : "43"
    },
    {
      "name" : "Boudican Revolt",
      "when" : "60"
    },
    {
      "name" : "Great Fire of Rome",
      "when" : "64"
    },
    {
      "name" : "Year of Four Emperors",
      "when" : "69"
    },
    {
      "name" : "Colosseum Completed",
      "when" : "80"
    },
    {
      "name" : "Hadrian's Wall Completed",
      "when" : "128"
    },
    {
      "name" : "Year of Five Emperors",
      "when" : "193"
    },
    {
      "name" : "Antonine Constitution",
      "when" : "11 July 212 CE",
      "descr" : "The emperor Caracalla issued an edict extending full Roman citizenship to all free\
      inhabitants of the empire, eliminating the distinction between the conquerer and the\
      conquered. The edict had the practical benefit of extending the tax burden to more people."
    },
    {
      "name" : "Sassanid Empire",
      "when" : "224"
    },
    {
      "name" : "Year of Six Emperors",
      "when" : "238"
    },
    {
      "name" : "Death of Mani",
      "when" : "277"
    },
    {
      "name" : "Battle of the Milvian Bridge",
      "when" : "312",
      "file" : "descrs/battle_of_the_milvian_bridge.html"
    },
    {
      "name" : "Edict of Milan",
      "when" : "313"
    },
    {
      "name" : "Council of Nicea",
      "when" : "325",
      "file" : "descrs/council_of_nicea.html"
    },
    {
      "name" : "Founding of Constantinople",
      "when" : "330"
    },
    {
      "name" : "Great Conspiracy",
      "when" : "368",
      "descr" : "The entirity of Britain was overrun by a supposedly coordinated\
      attack by the Picts, Scotti, and Saxons, who pillaged and murdered as they\
      pleased. The Roman authorities retreated to walled cities in the southeast.\
      Theodosius the Elder finally managed to restore order after a year using\
      local intelligence and small army detachments."
    },
    {
      "name" : "Alter of Victory Removed",
      "when" : "382",
      "descr" : "The Alter of Victory was a symbol of Roman strength granted by the\
      favor of the Roman pantheon. In 382, it was taken down at the prodding of Bishop\
      Ambrose, and to the chagrin of the still-pagan aristocracy of the city of Rome. Many\
      superstitious Romans would pin the cause of the empire's final decline to the\
      alter's removal."
    },
    {
      "name" : "Massacre of Thessalonica",
      "when" : "390",
      "descr" : "Theodosius ordered a massacre of citizens as retribution for insubordination.\
      When news reached Ambrose of Milan, he refused to offer communion to Theodosius until\
      he repented. Theodosius, remorseful and fearful for his soul, ultimately gave in to\
      Ambrose's demands. This exchange between political and religious leaders set a precedent\
      for Church-state relations through the Middle Ages: the Church has power over the state\
      in religious matters."
    },
    {
      "name" : "Ravenna Becomes Western Capital",
      "when" : "402"
    },
    {
      "name" : "Barbarian Invasion",
      "when" : "406"
    },
    {
      "name" : "Sack of Rome",
      "when" : "410",
      "file" : "descrs/sack_of_rome.html"
    },
    {
      "name" : "Vandal Kingdom Established",
      "when" : "439",
      "descr" : "Having been previously awarded land in Numidia in 435, the opportunistic\
      Vandals under Genseric marched into the province of Africa and captured the city of\
      Carthage. Genseric declared himself the king of a new Vandal Kingdom and embraced the\
      existing inhabitants as his subjects. Neglected by the government in Ravenna, the\
      surprised, but hopeful Roman Africans cautiously accepted their new leadership. The\
      Vandals held significant leverage over the imperial government by engaging in Mediterranian\
      piracy and threatening to cut off grain exports to Italy. The Vandal Kingdom would last\
      until the Byzantine conquests under Justinian a hundred years later."
    },
    {
      "name" : "Vandal Sack of Rome",
      "when" : "455"
    },
    {
      "name" : "Augustulus Deposed",
      "when" : "476"
    },
    {
      "name" : "Birth of Muhammad",
      "when" : "570 CE"
    }
  ],
  "intervalEvents"  : [
    {
      "name"  : "Romulus",
      "start" : "753 BCE",
      "end"   : "715 BCE",
      "color" : "gold",
      "group" : "rulers"
    },
    {
      "name"  : "Numa Pompilius",
      "start" : "715 BCE",
      "end"   : "673 BCE",
      "color" : "gold",
      "group" : "rulers"
    },
    {
      "name"  : "Tullus Hostilius",
      "start" : "673 BCE",
      "end"   : "642 BCE",
      "color" : "gold",
      "group" : "rulers"
    },
    {
      "name"  : "Ancus Martius",
      "start" : "642 BCE",
      "end"   : "616 BCE",
      "color" : "gold",
      "group" : "rulers"
    },
    {
      "name"  : "Tarquinius Priscus",
      "start" : "616 BCE",
      "end"   : "579 BCE",
      "color" : "gold",
      "group" : "rulers"
    },
    {
      "name"  : "Servius Tullius",
      "start" : "579 BCE",
      "end"   : "534 BCE",
      "color" : "gold",
      "group" : "rulers"
    },
    {
      "name"  : "Tarquinius Superbus",
      "start" : "534 BCE",
      "end"   : "509 BCE",
      "color" : "gold",
      "group" : "rulers"
    },
    {
      "name"  : "Athenian Golden Age",
      "start" : "480 BCE",
      "end"   : "404 BCE",
      "color" : "cyan"
    },
    {
      "name"  : "War with Veii",
      "start" : "405 BCE",
      "end"   : "396 BCE",
      "color" : "#EE1111",
      "file"  : "descrs/war_with_veii.html"
    },
    {
      "name"  : "First Samnite War",
      "start" : "343 BCE",
      "end"   : "341 BCE",
      "color" : "#EE1111",
      "descr" : "Samnites were semi-nomadic hill-tribe. They migrated out of the hills of\
      central Italy onto the lush plains surrounding Capua. The citizens sent envoys\
      to Rome begging for assistance fending off the foreign threat, but Rome refused\
      due to a treaty they still held with the Samnites. Desperate, Capua offered to\
      become a Roman subject which the Senate obviously accepted. The Samnites were\
      now illegally encroaching on Roman territory which was a violation of the\
      treaty, so the Romans declared war. The Romans successfully drove off the\
      Samnites, but the Samnites proved themselves to be a worthy adversary."
    },
    {
      "name"  : "Latin War",
      "start" : "340 BCE",
      "end"   : "338 BCE",
      "color" : "#EE1111",
      "file"  :  "descrs/latin_war.html"
    },
    {
      "name"  : "Alexander the Great",
      "start" : "336 BCE",
      "end"   : "323 BCE",
      "color" : "blue",
      "file"  : "descrs/alexander_the_great.html"
    },
    {
      "name"  : "Second Samnite War",
      "start" : "326 BCE",
      "end"   : "304 BCE",
      "color" : "#EE1111",
      "file"  : "descrs/second_samnite_war.html"
    },
    {
      "name"  : "Third Samnite War",
      "start" : "298 BCE",
      "end"   : "290 BCE",
      "color" : "#EE1111",
      "descr" : "Animosity between Rome and Samnium was bound to flare up again following\
      the Second Samnite War.\
      In 298, the Samnites joined Etruscans, Umbrians, and Gallic mercenaries in a final\
      attempt to beat back the growing Roman menace. The fighting culminated in 295 at the\
      battle of Sentinum where the Romans faced a combined four-way coalition army. Both\
      sides fielded armies upwards of forty-thousand men. Victory was due to the discipline\
      and endurance of the Roman legions."
    },
    {
      "name"  : "Pyrrhic War",
      "start" : "280 BCE",
      "end"   : "275 BCE",
      "color" : "#EE1111",
      "file"  : "descrs/pyrrhic_war.html"
    },
    {
      "name"  : "First Punic War",
      "start" : "264 BCE",
      "end"   : "241 BCE",
      "color" : "#EE1111"
    },
    {
      "name"  : "Second Punic War",
      "start" : "218 BCE",
      "end"   : "201 BCE",
      "color" : "#EE1111"
    },
    {
      "name"  : "Second Macedonian War",
      "start" : "200 BCE",
      "end"   : "197 BCE",
      "color" : "#EE1111"
    },
    {
      "name"  : "Third Macedonian War",
      "start" : "171 BCE",
      "end"   : "168 BCE",
      "color" : "#EE1111"
    },
    {
      "name"  : "Third Punic War",
      "start" : "149 BCE",
      "end"   : "146 BCE",
      "color" : "#EE1111"
    },
    {
      "name"  : "First Servile War",
      "start" : "135 BCE",
      "end"   : "132 BCE",
      "color" : "#EE1111"
    },
    {
      "name"  : "Marius",
      "start" : "107 BCE",
      "end"   : "100 BCE",
      "color" : "blue",
      "descr" : "Marius was consul an unprecedented seven times during 107, 104-100, and 86 BC."
    },
    {
      "name"  : "Social War",
      "start" : "91 BCE",
      "end"   : "87 BCE",
      "color" : "#EE1111"
    },
    {
      "name"  : "First Mithridatic War",
      "start" : "89 BCE",
      "end"   : "85 BCE",
      "color" : "#EE1111"
    },
    {
      "name"  : "Third Servile War",
      "start" : "73 BCE",
      "end"   : "71 BCE",
      "color" : "#EE1111"
    },
    {
      "name"  : "First Triumvirate",
      "start" : "60 BCE",
      "end"   : "53 BCE",
      "color" : "blue",
      "descr" : "Informal political alliance among Julius Caesar, Crassus, and Pompey"
    },
    {
      "name"  : "Gallic Wars",
      "start" : "58 BCE",
      "end"   : "50 BCE",
      "color" : "#EE1111"
    },
    {
      "name"  : "Second Triumvirate",
      "start" : "43 BCE",
      "end"   : "32 BCE",
      "color" : "blue",
      "descr" : "Officially the \"triumvirate for organizing the republic\", the Second Triumvirate was\
      a political alliance among Octavian, Antony, and Lepidus. Though relations between Octavian and\
      Antony were strained, their alliance was held together by their common republican enemies Cassius\
      and Brutus. The triumvirate was legally ratified by the Senate and ruled Rome as essentially a\
      military dictatorship."
    },
    {
      "name"  : "Augustus",
      "start" : "27 BCE",
      "end"   : "14",
      "color" : "#7851A9",
      "group" : "rulers",
      "file"  : "descrs/augustus.html"
    },
    {
      "name"  : "Tiberius",
      "start" : "14",
      "end"   : "37",
      "color" : "#7851A9",
      "group" : "rulers"
    },
    {
      "name"  : "Caligula",
      "start" : "37",
      "end"   : "41",
      "color" : "#7851A9",
      "group" : "rulers"
    },
    {
      "name"  : "Claudius",
      "start" : "41",
      "end"   : "54",
      "color" : "#7851A9",
      "group" : "rulers"
    },
    {
      "name"  : "Nero",
      "start" : "54",
      "end"   : "68",
      "color" : "#7851A9",
      "group" : "rulers"
    },
    {
      "name"  : "Great Jewish Revolt",
      "start" : "66",
      "end"   : "73",
      "color" : "#EE1111"
    },
    {
      "name"  : "Vespasian",
      "start" : "69",
      "end"   : "79",
      "color" : "#7851A9",
      "group" : "rulers"
    },
    {
      "name"  : "Domitian",
      "start" : "81",
      "end"   : "96",
      "color" : "#7851A9",
      "group" : "rulers"
    },
    {
      "name"  : "Nerva",
      "start" : "96",
      "end"   : "98",
      "color" : "#7851A9",
      "group" : "rulers"
    },
    {
      "name"  : "Trajan",
      "start" : "98",
      "end"   : "117",
      "color" : "#7851A9",
      "group" : "rulers"
    },
    {
      "name"  : "Hadrian",
      "start" : "117",
      "end"   : "138",
      "color" : "#7851A9",
      "group" : "rulers"
    },
    {
      "name"  : "Antoninus Pius",
      "start" : "138",
      "end"   : "161",
      "color" : "#7851A9",
      "group" : "rulers"
    },
    {
      "name"  : "Marcus Aurelius",
      "start" : "161",
      "end"   : "180",
      "color" : "#7851A9",
      "group" : "rulers"
    },
    {
      "name"  : "Marcomannic Wars",
      "start" : "166",
      "end"   : "180",
      "color" : "#EE1111"
    },
    {
      "name"  : "Commodus",
      "start" : "176",
      "end"   : "192",
      "color" : "#7851A9",
      "group" : "rulers"
    },
    {
      "name"  : "Antonine Plague",
      "start" : "165",
      "end"   : "180",
      "color" : "green"
    },
    {
      "name"  : "Severus",
      "start" : "193",
      "end"   : "211",
      "color" : "#7851A9",
      "group" : "rulers",
      "file"  : "descrs/severus.html"
    },
    {
      "name"  : "Caracalla",
      "start" : "198",
      "end"   : "217",
      "color" : "#7851A9",
      "group" : "rulers"
    },
    {
      "name"  : "Elagabalus",
      "start" : "218",
      "end"   : "222",
      "color" : "#7851A9",
      "group" : "rulers"
    },
    {
      "name"  : "Severus Alexander",
      "start" : "222",
      "end"   : "235",
      "color" : "#7851A9",
      "group" : "rulers"
    },
    {
      "name"  : "Crisis of the Third Century",
      "start" : "235",
      "end"   : "284",
      "color" : "#EE1111",
      "file"  : "descrs/crisis_of_the_third_century.html"
    },
    {
      "name"  : "Cyprian Plague",
      "start" : "249",
      "end"   : "262",
      "color" : "green"
    },
    {
      "name"  : "Valerian",
      "start" : "253",
      "end"   : "260",
      "color" : "#7851A9",
      "group" : "rulers"
    },
    {
      "name"  : "Aurelian",
      "start" : "270",
      "end"   : "275",
      "color" : "#7851A9",
      "group" : "rulers",
      "descr" : "<ul>\
      <li>Defeated Zenobia and Postumus, reintegrating the Palmyrene and Gallic Empires under Roman rule</li>\
      <li>Abandoned Roman control of the vulnerable province of Dacia</li>\
      <li>Began construction of the Aurelian Walls around Rome, signaling other cities to follow</li>\
      <li>Encouraged worship of Sol Invictus above other gods, beginning Rome's transition to monotheism</li>\
      </ul>"
    },
    {
      "name"  : "Diocletian",
      "start" : "284",
      "end"   : "305",
      "color" : "#7851A9",
      "group" : "rulers",
      "file"  : "descrs/diocletian.html"
    },
    {
      "name"  : "Constantine",
      "start" : "306",
      "end"   : "337",
      "color" : "#7851A9",
      "group" : "rulers",
      "file"  : "descrs/constantine.html"
    },
    {
      "name"  : "Constantius II",
      "start" : "337",
      "end"   : "361",
      "color" : "#7851A9",
      "group" : "rulers"
    },
    {
      "name"  : "Julian the Apostate",
      "start" : "355",
      "end"   : "363",
      "color" : "#7851A9",
      "group" : "rulers",
      "file"  : "descrs/julian_the_apostate.html"
    },
    {
      "name"  : "Valentinian I",
      "start" : "364",
      "end"   : "375",
      "color" : "#7851A9",
      "group" : "rulers",
      "descr" : "At a meeting with the Quadi tribe, Valentinian got so angry that he suffered\
      and died from a stroke induced from his yelling."
    },
    {
      "name"  : "Valens",
      "start" : "364",
      "end"   : "378",
      "color" : "#7851A9",
      "group" : "rulers"
    },
    {
      "name"  : "Valentinian II",
      "start" : "375",
      "end"   : "392",
      "color" : "#7851A9",
      "group" : "rulers",
    },
    {
      "name"  : "Gothic War",
      "start" : "376",
      "end"   : "382",
      "color" : "#EE1111",
      "file"  : "descrs/gothic_war.html"
    },
    {
      "name"  : "Theodosius",
      "start" : "379",
      "end"   : "395",
      "color" : "#7851A9",
      "group" : "rulers"
    },
    {
      "name"  : "Stilicho",
      "start" : "382",
      "end"   : "408",
      "color" : "orange"
    },
    {
      "name"  : "Honorius",
      "start" : "393",
      "end"   : "423",
      "color" : "#7851A9",
      "group" : "rulers"
    },
    {
      "name"  : "Valentinian III",
      "start" : "425",
      "end"   : "455",
      "color" : "#7851A9",
      "group" : "rulers"
    },
    {
      "name"  : "Aëtius",
      "start" : "433",
      "end"   : "454",
      "color" : "orange"
    },
    {
      "name"  : "Ricimer",
      "start" : "461",
      "end"   : "472",
      "color" : "orange"
    },
    {
      "name"  : "Theodoric the Great",
      "start" : "493 CE",
      "end"   : "526 CE",
      "color" : "orange",
      "descr" : "Theodoric ruled as the King of the Ostrogoths from 475 and as King of Italy from\
      493"
    },
    {
      "name"  : "Justinian",
      "start" : "1 April 527 CE",
      "end"   : "14 November 565 CE",
      "color" : "#7851A9",
      "group" : "rulers"
    }
  ],
  "maps" : [
    {
      "title" : "Rome and Carthage before the First Punic War",
      "when"  : "264 BCE",
      "image" : "https://upload.wikimedia.org/wikipedia/commons/a/ac/First_Punic_War_264_BC_v3.png"
    },
    {
      "title" : "The Mediterranean world before the Second Punic War",
      "when"  : "218 BCE",
      "image" : "https://i.pinimg.com/originals/b7/68/3a/b7683ad1d15e83f54c66392dda2513ad.png"
    },
    {
      "title" : "Roman Empire at its greatest extent",
      "when"  : "117 CE",
      "image" : "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Roman_Empire_Trajan_117AD.png/1920px-Roman_Empire_Trajan_117AD.png"
    },
    {
      "title" : "The divided empire during the crisis years.",
      "when"  : "271 CE",
      "image" : "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Map_of_Ancient_Rome_271_AD.svg/1920px-Map_of_Ancient_Rome_271_AD.svg.png"
    },
    {
      "title" : "Division of the empire under the Tetrarchy",
      "when"  : "293 CE",
      "image" : "https://upload.wikimedia.org/wikipedia/commons/0/07/Tetrarchy_map3.jpg"
    },
    {
      "title" : "Europe and the Mediterranean world at the fall of the western empire",
      "when"  : "476 CE",
      "image" : "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Europe_and_the_Near_East_at_476_AD.png/1280px-Europe_and_the_Near_East_at_476_AD.png"
    },
    {
      "title" : "Europe before the reign of Justinian",
      "when"  : "526 CE",
      "image" : "https://3.bp.blogspot.com/-95rLQ9EWCx0/VmaGQvG4agI/AAAAAAAAsao/oYEiactujOs/s1600/EU526.jpg"
    },
    {
      "title" : "Greatest Extent of the Byzantine Empire",
      "when"  : "555 CE",
      "image" : "https://upload.wikimedia.org/wikipedia/commons/0/01/Europe-In-555AD.png"
    }
  ],
  "widgets" : [
    {
      "name"  : "Roman Legions",
      "icon"  : "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Vexilloid_of_the_Roman_Empire.svg/800px-Vexilloid_of_the_Roman_Empire.svg.png",
      "width" : 75,
      "when"  : "310 BCE",
      "ypos"  : -150,
      "file"  : "descrs/roman_legions.html"
    }
  ]
};
