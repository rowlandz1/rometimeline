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
      "tags" : ["foreign"],
      "file": "descrs/founding_of_byzantium.html"
    },
    {
      "name" : "Solonian Reforms",
      "when" : "594 BCE",
      "tags" : ["foreign"],
      "descr" : "A century before the Athenian Revolution, the seeds of democracy in the Greek\
      city-state of Athens were being planted by the political reformer Solon.\
      He used his power as archon (the chief executive position in Athens)\
      to address the growing problems of wealth inequality and debt-bondage. His reforms\
      attempted to establish a \"middle class\" of Athenians who were sufficiently prosperous\
      that could fill the ranks of the army and wouldn't revolt against the ruling oligarchs.\
      Written law and rudimentary civic rights were introduced for the first time. It is possible\
      that the reforms entered the Roman consciousness through Magna Graecia and influenced the\
      construction of the Twelve Tables."
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
      "file" : "descrs/secession_of_the_plebs.html"
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
      "name" : "Lex Licinia",
      "when" : "367 BCE",
      "file" : "descrs/lex_licinia.html"
    },
    {
      "name" : "Lex Genucia",
      "when" : "342 BCE"
    },
    {
      "name" : "First Illyrian War",
      "when" : "228 BCE",
      "tags" : ["war"],
      "descr" : "The Romans launched a campaign against the Illyrian Ardiaei kingdom to put an end\
      to Illyrian piracy."
    },
    {
      "name" : "Battle of Telamon",
      "when" : "225 BCE",
      "descr" : "Decisive victory against invading Gauls"
    },
    {
      "name" : "War against Nabis",
      "when" : "195 BCE",
      "tags" : ["war"],
      "descr" : "The Aetolian League, which had fought with Rome in the Second Macedonian War, was\
      attempting to form an alliance with Sparta and the Selucid Empire. As a preventative measure,\
      Rome made a move against Sparta under King Nabis, removing them as a dominant power in Greece.\
      The alliance was prevented, but Greek opinion turned against Rome."
    },
    {
      "name" : "Scipio meets Hannibal",
      "when" : "193 BCE",
      "file" : "descrs/meeting_of_hannibal_and_scipio.html"
    },
    {
      "name" : "Achaean War",
      "when" : "146 BCE",
      "tags" : ["war"],
      "descr" : "In 146 BCE, the Achaean League rose up in defiance of the Roman occupation of Greece,\
      but the rebels didn't stand a chance and were crushed. Achaea was incorporated into the\
      province of Macedonia, but later became its own province. The conflict is notable for ending with\
      the total destruction of Corinth, demonstrating the brutality and greed of which a Roman army was\
      capable. The art and wealth of the city was exported back to Rome."
    },
    {
      "name" : "Tiberius Gracchus",
      "when" : "133 BCE",
      "file" : "descrs/tiberius_gracchus.html"
    },
    {
      "name" : "Gaius Gracchus",
      "when" : "122 BCE"
    },
    {
      "name" : "Catiline Conspiracy",
      "when" : "63 BCE",
      "file" : "descrs/catiline_conspiracy.html"
    },
    {
      "name" : "Pompey's Triumph",
      "when" : "61 BCE",
      "file" : "descrs/pompeys_triumph.html"
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
      "name" : "Battle of the Teutoburg Forest",
      "when" : "9"
    },
    {
      "name" : "Crucifixion of Jesus",
      "when" : "33"
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
      "name" : "Destruction of Pompeii",
      "when" : "79 CE"
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
      "when" : "224",
      "tags" : ["foreign"]
    },
    {
      "name" : "Year of Six Emperors",
      "when" : "238"
    },
    {
      "name" : "Death of Mani",
      "when" : "277",
      "tags" : ["foreign"]
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
      "tags" : ["foreign"],
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
      "when" : "570 CE",
      "tags" : ["foreign"]
    }
  ],
  "intervalEvents"  : [
    {
      "name"  : "Romulus",
      "start" : "753 BCE",
      "end"   : "715 BCE",
      "color" : "gold"
    },
    {
      "name"  : "Numa Pompilius",
      "start" : "715 BCE",
      "end"   : "673 BCE",
      "color" : "gold"
    },
    {
      "name"  : "Tullus Hostilius",
      "start" : "673 BCE",
      "end"   : "642 BCE",
      "color" : "gold"
    },
    {
      "name"  : "Ancus Martius",
      "start" : "642 BCE",
      "end"   : "616 BCE",
      "color" : "gold"
    },
    {
      "name"  : "Tarquinius Priscus",
      "start" : "616 BCE",
      "end"   : "579 BCE",
      "color" : "gold"
    },
    {
      "name"  : "Servius Tullius",
      "start" : "579 BCE",
      "end"   : "534 BCE",
      "color" : "gold"
    },
    {
      "name"  : "Tarquinius Superbus",
      "start" : "534 BCE",
      "end"   : "509 BCE",
      "color" : "gold"
    },
    {
      "name"  : "Athenian Democracy",
      "start" : "508 BCE",
      "end"   : "404 BCE",
      "color" : "cyan",
      "tags" : ["foreign"],
      "file"  : "descrs/athenian_democracy.html"
    },
    {
      "name"  : "War with Veii",
      "start" : "405 BCE",
      "end"   : "396 BCE",
      "color" : "#EE1111",
      "tags"  : ["war"],
      "file"  : "descrs/war_with_veii.html"
    },
    {
      "name"  : "First Samnite War",
      "start" : "343 BCE",
      "end"   : "341 BCE",
      "color" : "#EE1111",
      "tags"  : ["war"],
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
      "tags"  : ["war"],
      "file"  :  "descrs/latin_war.html"
    },
    {
      "name"  : "Alexander the Great",
      "start" : "336 BCE",
      "end"   : "323 BCE",
      "color" : "blue",
      "tags" : ["foreign"],
      "file"  : "descrs/alexander_the_great.html"
    },
    {
      "name"  : "Second Samnite War",
      "start" : "326 BCE",
      "end"   : "304 BCE",
      "color" : "#EE1111",
      "tags"  : ["war"],
      "file"  : "descrs/second_samnite_war.html"
    },
    {
      "name"  : "Third Samnite War",
      "start" : "298 BCE",
      "end"   : "290 BCE",
      "color" : "#EE1111",
      "tags"  : ["war"],
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
      "tags"  : ["war"],
      "file"  : "descrs/pyrrhic_war.html"
    },
    {
      "name"  : "First Punic War",
      "start" : "264 BCE",
      "end"   : "241 BCE",
      "color" : "#EE1111",
      "tags"  : ["war"],
      "file"  : "descrs/first_punic_war.html"
    },
    {
      "name"  : "Second Punic War",
      "start" : "218 BCE",
      "end"   : "201 BCE",
      "color" : "#EE1111",
      "tags"  : ["war"],
      "file"  : "descrs/second_punic_war.html"
    },
    {
      "name"  : "First Macedonian War",
      "start" : "215 BCE",
      "end"   : "205 BCE",
      "color" : "#EE1111",
      "tags"  : ["foreign", "war"]
    },
    {
      "name"  : "Second Macedonian War",
      "start" : "200 BCE",
      "end"   : "197 BCE",
      "color" : "#EE1111",
      "tags"  : ["war"],
      "file"  : "descrs/second_macedonian_war.html"
    },
    {
      "name"  : "Roman-Seleucid War",
      "start" : "192 BCE",
      "end"   : "188 BCE",
      "color" : "#EE1111",
      "tags"  : ["war"],
      "file"  : "descrs/roman_seleucid_war.html"
    },
    {
      "name"  : "Third Macedonian War",
      "start" : "171 BCE",
      "end"   : "168 BCE",
      "color" : "#EE1111",
      "tags"  : ["war"],
      "file"  : "descrs/third_macedonian_war.html"
    },
    {
      "name"  : "War in Iberia",
      "start" : "155 BCE",
      "end"   : "133 BCE",
      "color" : "#EE1111",
      "tags"  : ["war"]
    },
    {
      "name"  : "Fourth Macedonian War",
      "start" : "150 BCE",
      "end"   : "148 BCE",
      "color" : "#EE1111",
      "tags"  : ["war"],
      "descr" : "The pretender Andriscus united the four Macedonian republics in revolt. But\
      they were no match for the Roman legions. Recognizing that a hands-off approach to\
      governing Greece was not going to work, the Senate did away with the tributary republics\
      and fully encorporated Macedonia as a Roman province."
    },
    {
      "name"  : "Third Punic War",
      "start" : "149 BCE",
      "end"   : "146 BCE",
      "color" : "#EE1111",
      "tags"  : ["war"],
      "descr" : "The treaty after the Second Punic War established a border between Carthage and\
      Numidia. Neither side was allowed to encroach on the other's territory, punishable by Rome.\
      However, incursions into Carthaginian territory by the Numidians, by far on friendlier terms\
      with Rome, were largely ignored. The Carthaginians decided to raise an army to defend\
      themselves, but doing so was also a violation of the treaty. This simply gave the Romans an\
      excuse to wipe them out."
    },
    {
      "name"  : "First Servile War",
      "start" : "135 BCE",
      "end"   : "132 BCE",
      "color" : "#EE1111",
      "tags"  : ["war"],
    },
    {
      "name"  : "War with Jugurtha",
      "start" : "118 BCE",
      "end"   : "106 BCE",
      "color" : "#EE1111",
      "tags"  : ["war"]
    },
    {
      "name"  : "Cimbrian War",
      "start" : "113 BCE",
      "end"   : "101 BCE",
      "color" : "#EE1111",
      "tags"  : ["war"]
    },
    {
      "name"  : "Marius",
      "start" : "107 BCE",
      "end"   : "100 BCE",
      "color" : "blue",
      "file"  : "descrs/marius.html"
    },
    {
      "name"  : "Second Servile War",
      "start" : "104 BCE",
      "end"   : "100 BCE",
      "color" : "#EE1111",
      "tags"  : ["war"]
    },
    {
      "name"  : "Social War",
      "start" : "91 BCE",
      "end"   : "87 BCE",
      "color" : "#EE1111",
      "tags"  : ["war"],
      "file"  : "descrs/social_war.html"
    },
    {
      "name"  : "Mithridatic Wars",
      "start" : "89 BCE",
      "end"   : "63 BCE",
      "color" : "#EE1111",
      "tags"  : ["war"],
      "file"  : "descrs/mithridatic_wars.html"
    },
    {
      "name"  : "Sulla",
      "start" : "88 BCE",
      "end"   : "79 BCE",
      "color" : "blue",
      "file"  : "descrs/sulla.html"
    },
    {
      "name"  : "Spartican Revolt",
      "start" : "73 BCE",
      "end"   : "71 BCE",
      "color" : "#EE1111",
      "tags"  : ["war"],
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
      "color" : "#EE1111",
      "tags"  : ["war"],
    },
    {
      "name"  : "Caesar's Civil War",
      "start" : "49 BCE",
      "end"   : "45 BCE",
      "color" : "#EE1111",
      "tags"  : ["war"]
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
      "tags"  : ["emperor"],
      "file"  : "descrs/augustus.html"
    },
    {
      "name"  : "Tiberius",
      "start" : "14",
      "end"   : "37",
      "color" : "#7851A9",
      "tags"  : ["emperor"],
    },
    {
      "name"  : "Caligula",
      "start" : "37",
      "end"   : "41",
      "color" : "#7851A9",
      "tags"  : ["emperor"],
    },
    {
      "name"  : "Claudius",
      "start" : "41",
      "end"   : "54",
      "color" : "#7851A9",
      "tags"  : ["emperor"],
    },
    {
      "name"  : "Conquest of Britain",
      "start" : "43 CE",
      "end"   : "96 CE",
      "color" : "#EE1111"
    },
    {
      "name"  : "Nero",
      "start" : "54",
      "end"   : "68",
      "color" : "#7851A9",
      "tags"  : ["emperor"],
    },
    {
      "name"  : "Great Jewish Revolt",
      "start" : "66",
      "end"   : "73",
      "color" : "#EE1111",
      "tags"  : ["war"]
    },
    {
      "name"  : "Vespasian",
      "start" : "69",
      "end"   : "79",
      "color" : "#7851A9",
      "tags"  : ["emperor"],
    },
    {
      "name"  : "Domitian",
      "start" : "81",
      "end"   : "96",
      "color" : "#7851A9",
      "tags"  : ["emperor"]
    },
    {
      "name"  : "Nerva",
      "start" : "96",
      "end"   : "98",
      "color" : "#7851A9",
      "tags"  : ["emperor"]
    },
    {
      "name"  : "Trajan",
      "start" : "98",
      "end"   : "117",
      "color" : "#7851A9",
      "tags"  : ["emperor"]
    },
    {
      "name"  : "Hadrian",
      "start" : "117",
      "end"   : "138",
      "color" : "#7851A9",
      "tags"  : ["emperor"]
    },
    {
      "name"  : "Antoninus Pius",
      "start" : "138",
      "end"   : "161",
      "color" : "#7851A9",
      "tags"  : ["emperor"]
    },
    {
      "name"  : "Marcus Aurelius",
      "start" : "161",
      "end"   : "180",
      "color" : "#7851A9",
      "tags"  : ["emperor"]
    },
    {
      "name"  : "Marcomannic Wars",
      "start" : "166",
      "end"   : "180",
      "color" : "#EE1111",
      "tags"  : ["war"]
    },
    {
      "name"  : "Commodus",
      "start" : "176",
      "end"   : "192",
      "color" : "#7851A9",
      "tags"  : ["emperor"]
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
      "tags"  : ["emperor"],
      "file"  : "descrs/severus.html"
    },
    {
      "name"  : "Caracalla",
      "start" : "198",
      "end"   : "217",
      "color" : "#7851A9",
      "tags"  : ["emperor"]
    },
    {
      "name"  : "Elagabalus",
      "start" : "218",
      "end"   : "222",
      "color" : "#7851A9",
      "tags"  : ["emperor"]
    },
    {
      "name"  : "Severus Alexander",
      "start" : "222",
      "end"   : "235",
      "color" : "#7851A9",
      "tags"  : ["emperor"]
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
      "tags"  : ["emperor"]
    },
    {
      "name"  : "Aurelian",
      "start" : "270",
      "end"   : "275",
      "color" : "#7851A9",
      "tags"  : ["emperor"],
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
      "tags"  : ["emperor"],
      "file"  : "descrs/diocletian.html"
    },
    {
      "name"  : "Constantine",
      "start" : "306",
      "end"   : "337",
      "color" : "#7851A9",
      "tags"  : ["emperor"],
      "file"  : "descrs/constantine.html"
    },
    {
      "name"  : "Constantius II",
      "start" : "337",
      "end"   : "361",
      "color" : "#7851A9",
      "tags"  : ["emperor"]
    },
    {
      "name"  : "Julian the Apostate",
      "start" : "355",
      "end"   : "363",
      "color" : "#7851A9",
      "tags"  : ["emperor"],
      "file"  : "descrs/julian_the_apostate.html"
    },
    {
      "name"  : "Valentinian I",
      "start" : "364",
      "end"   : "375",
      "color" : "#7851A9",
      "tags"  : ["emperor"],
      "descr" : "At a meeting with the Quadi tribe, Valentinian got so angry that he suffered\
      and died from a stroke induced from his yelling."
    },
    {
      "name"  : "Valens",
      "start" : "364",
      "end"   : "378",
      "color" : "#7851A9",
      "tags"  : ["emperor"]
    },
    {
      "name"  : "Valentinian II",
      "start" : "375",
      "end"   : "392",
      "color" : "#7851A9",
      "tags"  : ["emperor"],
    },
    {
      "name"  : "Gothic War",
      "start" : "376",
      "end"   : "382",
      "color" : "#EE1111",
      "tags"  : ["war"],
      "file"  : "descrs/gothic_war.html"
    },
    {
      "name"  : "Theodosius",
      "start" : "379",
      "end"   : "395",
      "color" : "#7851A9",
      "tags"  : ["emperor"]
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
      "tags"  : ["emperor"]
    },
    {
      "name"  : "Valentinian III",
      "start" : "425",
      "end"   : "455",
      "color" : "#7851A9",
      "tags"  : ["emperor"]
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
      "tags" : ["foreign"],
      "descr" : "Theodoric ruled as the King of the Ostrogoths from 475 and as King of Italy from\
      493"
    },
    {
      "name"  : "Justinian",
      "start" : "1 April 527 CE",
      "end"   : "14 November 565 CE",
      "color" : "#7851A9",
      "tags"  : ["emperor"]
    }
  ],
  "epochs" : [
    {
      "name"  : "KINGDOM",
      "start" : "753 BCE",
      "end"   : "509 BCE",
      "color" : "rgba(255, 217, 0, 0.5)",
      "tags"  : ["3way", "5way"]
    },
    {
      "name"  : "REPUBLIC",
      "start" : "509 BCE",
      "end"   : "27 BCE",
      "color" : "rgba(255, 50, 50, 0.5)",
      "tags"  : ["3way"]
    },
    {
      "name"  : "EARLY REPUBLIC",
      "start" : "509 BCE",
      "end"   : "201 BCE",
      "color" : "rgba(255, 100, 0, 0.5)",
      "tags"  : ["5way"]
    },
    {
      "name"  : "LATE REPUBLIC",
      "start" : "201 BCE",
      "end"   : "27 BCE",
      "color" : "rgba(255, 0, 100, 0.5)",
      "tags"  : ["5way"]
    },
    {
      "name"  : "EMPIRE",
      "start" : "27 BCE",
      "end"   : "476 CE",
      "color" : "rgba(100, 0, 255, 0.5)",
      "tags"  : ["3way"]
    },
    {
      "name"  : "PRINCIPATE",
      "start" : "27 BCE",
      "end"   : "284 CE",
      "color" : "rgba(0, 100, 255, 0.5)",
      "tags"  : ["5way"]
    },
    {
      "name"  : "DOMINATE",
      "start" : "284 CE",
      "end"   : "476 CE",
      "color" : "rgba(50, 0, 255, 0.5)",
      "tags"  : ["5way"]
    },
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
      "image" : "https://upload.wikimedia.org/wikipedia/commons/7/7c/Map_of_Ancient_Rome_271_AD.svg"
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
      "icon"  : "https://upload.wikimedia.org/wikipedia/commons/8/83/Vexilloid_of_the_Roman_Empire.svg",
      "width" : 75,
      "when"  : "310 BCE",
      "ypos"  : -150,
      "file"  : "descrs/roman_legions.html"
    },
    {
      "name"  : "Carthage",
      "icon"  : "https://upload.wikimedia.org/wikipedia/commons/0/0f/Carthage_standard.svg",
      "width" : 40,
      "when"  : "250 BCE",
      "ypos"  : -150,
      "file"  : "descrs/carthage.html"
    },
    {
      "name"  : "Classical Latin",
      "icon"  : "https://upload.wikimedia.org/wikipedia/commons/b/b7/Rome_Colosseum_inscription_2.jpg",
      "width" : 55,
      "when"  : "25 CE",
      "ypos"  : 100,
      "file"  : "descrs/classical_latin.html"
    }
  ]
};
