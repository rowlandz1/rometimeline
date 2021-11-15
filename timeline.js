var renderInfo = {
  "widthPx"        : 7000,
  "heightPx"       : 800,
  "eventHeightPx"  : 30,
  "eventSpacingPx" : 5
};

var eventsInfo = {
  "start"      : -800,
  "end"        : 600,
  "eraSize"    : 100,
  "groupOrder" : ["rulers", "undefined"],
  "events"  : [
    {
      "name" : "Founding of Rome",
      "when" : -753,
      "descr" : "Little is known of the actual origins of the city. The archaeological record indicates\
  	  that Rome developed from various Italic tribes who migrated from the Alban Hills into the\
  	  agriculturally-superior valley near the Tiber River. The discovery of some fortification walls\
  	  on the Palatine Hill that probably date to the mid-eighth century BC seem to justify the traditional\
  	  753 B.C. date for the city's founding as reasonable.<br>\
      <br>\
  	  According to legend, Rome was founded by Romulus. Romulus and his twin brother Remus were born in Alba\
  	  Longa of the vestal virgin Rhea Silvia and the god Mars. Seen by the king as a threat to power, they\
  	  were abandoned at birth and raised by a she-wolf. As young adults, the twins decided to build a city of\
  	  their own in the area near the Tiber River, but they disagreed on which hill to build it. Romulus\
  	  preferred the Palatine Hill while Remus preferred the Aventine Hill. They decided leave the choice to\
  	  the gods through a contest of augury. Remus first saw six auspicious birds but soon afterward Romulus\
  	  saw twelve, and claimed to have won divine approval. This new disputed ended when Remus was murdered by\
  	  Romulus or a supporter. Romulus founded the city and became its first king."
    },
    {
      "name" : "Founding of the Republic",
      "when" : -509
    },
    {
  	  "name" : "Dictatorship of Cincinnatus",
  	  "when" : -458
  	},
    {
      "name" : "Twelve Tables",
      "when" : -451
    },
    {
  	  "name" : "The Siege of Veii",
  	  "when" : -396
  	},
    {
      "name" : "Rome Sacked by Gauls",
      "when" : -390
    },
    {
      "name" : "Battle of Cannae",
      "when" : -216
    },
    {
      "name" : "Battle of Zama",
      "when" : -202
    },
    {
  	  "name" : "Sulla marches on Rome",
  	  "when" : -88
  	},
    {
      "name" : "Catiline Conspiracy",
      "when" : -63
    },
    {
      "name" : "Crossing of the Rubicon",
      "when" : -49
    },
    {
      "name" : "Julius Caesar Killed",
      "when" : -44
    },
    {
  	  "name" : "Battle of Philippi",
  	  "when" : -42,
  	  "descr" : "The forces of the Second Triumvirate met the armies of Cassius and Brutus at\
  	  Philippi where they had fortified a defensive position between mountains and a swamp. Mark\
  	  Antony decided to make an unexpected attack from the swamp and was able to take the base.\
  	  Cassius committed suicide, while Brutus regrouped for one last fateful battle before falling\
  	  on his sword. The battle marks the end of republican opposition to the Caesarians, and the\
  	  height of Mark Antony's military career."
  	},
    {
      "name" : "Battle of Actium",
      "when" : -31
    },
    {
  	  "name" : "Census of Quirinius",
  	  "when" : 6
  	},
    {
      "name" : "Battle of the Teutoburg Forest",
      "when" : 9
    },
    {
      "name" : "Crucifixion of Jesus",
      "when" : 33
    },
    {
      "name" : "Rome Invades Britain",
      "when" : 43
    },
    {
      "name" : "Boudican Revolt",
      "when" : 60
    },
    {
      "name" : "Great Fire of Rome",
      "when" : 64
    },
    {
      "name" : "Year of Four Emperors",
      "when" : 69
    },
    {
      "name" : "Colosseum Completed",
      "when" : 80
    },
    {
      "name" : "Hadrian's Wall Completed",
      "when" : 128
    },
    {
      "name" : "Year of Five Emperors",
      "when" : 193
    },
    {
      "name" : "Sassanid Empire",
      "when" : 224
    },
    {
      "name" : "Year of Six Emperors",
      "when" : 238
    },
    {
      "name" : "Death of Mani",
      "when" : 277
    },
    {
      "name" : "Battle of the Milvian Bridge",
      "when" : 312
    },
    {
      "name" : "Edict of Milan",
      "when" : 313
    },
    {
      "name" : "Founding of Constantinople",
      "when" : 330
    },
    {
      "name" : "Great Conspiracy",
      "when" : 368,
      "descr" : "The entirity of Britain was overrun by a supposedly coordinated\
      attack by the Picts, Scotti, and Saxons, who pillaged and murdered as they\
      pleased. The Roman authorities retreated to walled cities in the southeast.\
      Theodosius the Elder finally managed to restore order after a year using\
      local intelligence and small army detachments."
    },
    {
      "name" : "Massacre of Thessalonica",
      "when" : 390,
      "descr" : "Theodosius ordered a massacre of citizens as retribution for insubordination.\
      When news reached Ambrose of Milan, he refused to offer communion to Theodosius until\
      he repented. Theodosius, remorseful and fearful for his soul, ultimately gave in to\
      Ambrose's demands. This exchange between political and religious leaders set a precedent\
      for Church-state relations through the Middle Ages: the Church has power over the state\
      in religious matters."
    },
    {
      "name" : "Ravenna Becomes Western Capital",
      "when" : 402
    },
    {
      "name" : "Barbarian Invasion",
      "when" : 406
    },
    {
      "name" : "Sack of Rome",
      "when" : 410,
      "descr" : "Alaric, king of the Visigoths, was trying to extract concessions of land and\
      supplies from Emperor Honorius in Ravenna. However, after two sieges of Rome, Honorius\
      was still stubbornly resistant to negotiation. When Alaric's army was attacked by his\
      blood enemy and Roman commander Sarus, he resorted to brute force. The Goths sieged\
      Rome for a third time until slaves opened the Salarian gate. For three days, the Goths\
      beat, raped, killed, destroyed, and looted, although churches and religious artifacts\
      were left alone. This marks the first time Rome was sacked in nearly eight centuries.\
      The population of the city would in time plummet from near a million people to only\
      twenty-thousand.<br>\
      <br>\
      Though of little political significance, the sack of Rome was a major blow to morale.\
      It fueled the growing tendency to ascribe the empire's downfall to the abandonment of\
      paganism, prompting Augustine's rebuttal in <i>The City of God</i>."
    },
    {
      "name" : "Vandal Kingdom Established",
      "when" : 439,
      "descr" : "Having been previously awarded land in Numidia in 435, the opportunistic\
      Vandals under Genseric marched into the province of Africa and captured the city of\
      Carthage. Genseric declared himself the king of a new Vandal Kingdom and embraced the\
      existing inhabitants as his subjects. Neglected by the government in Ravenna, the\
      surprised, but hopeful Roman Africans accepted their new leadership. The Vandals\
      held significant leverage over the imperial government because North Africa was the\
      primary source of grain for Italy. They also reintroduced piracy to the Mediterranean\
      Sea after centuries of maritime peace."
    },
    {
      "name" : "Vandal Sack of Rome",
      "when" : 455
    },
    {
      "name" : "Augustulus Deposed",
      "when" : 476
    }
  ],
  "intervalEvents"  : [
    {
      "name"  : "Romulus",
      "start" : -753,
      "end"   : -715,
      "color" : "gold",
      "group" : "rulers"
    },
    {
      "name"  : "Numa Pompilius",
      "start" : -715,
      "end"   : -673,
      "color" : "gold",
      "group" : "rulers"
    },
    {
      "name"  : "Tullus Hostilius",
      "start" : -673,
      "end"   : -642,
      "color" : "gold",
      "group" : "rulers"
    },
    {
      "name"  : "Ancus Martius",
      "start" : -642,
      "end"   : -616,
      "color" : "gold",
      "group" : "rulers"
    },
    {
      "name"  : "Tarquinius Priscus",
      "start" : -616,
      "end"   : -579,
      "color" : "gold",
      "group" : "rulers"
    },
    {
      "name"  : "Servius Tullius",
      "start" : -579,
      "end"   : -534,
      "color" : "gold",
      "group" : "rulers"
    },
    {
      "name"  : "Tarquinius Superbus",
      "start" : -534,
      "end"   : -509,
      "color" : "gold",
      "group" : "rulers"
    },
    {
      "name"  : "First Samnite War",
      "start" : -343,
      "end"   : -341,
      "color" : "#EE1111"
    },
    {
      "name"  : "Latin War",
      "start" : -340,
      "end"   : -338,
      "color" : "#EE1111"
    },
    {
      "name"  : "Alexander the Great",
      "start" : -336,
      "end"   : -323,
      "color" : "blue"
    },
    {
      "name"  : "Second Samnite War",
      "start" : -326,
      "end"   : -304,
      "color" : "#EE1111"
    },
    {
      "name"  : "Third Samnite War",
      "start" : -298,
      "end"   : -290,
      "color" : "#EE1111"
    },
    {
      "name"  : "Pyrrhic War",
      "start" : -280,
      "end"   : -275,
      "color" : "#EE1111"
    },
    {
      "name"  : "First Punic War",
      "start" : -264,
      "end"   : -241,
      "color" : "#EE1111"
    },
    {
      "name"  : "Second Punic War",
      "start" : -218,
      "end"   : -201,
      "color" : "#EE1111"
    },
    {
      "name"  : "Second Macedonian War",
      "start" : -200,
      "end"   : -197,
      "color" : "#EE1111"
    },
    {
      "name"  : "Third Macedonian War",
      "start" : -171,
      "end"   : -168,
      "color" : "#EE1111"
    },
    {
      "name"  : "Third Punic War",
      "start" : -149,
      "end"   : -146,
      "color" : "#EE1111"
    },
    {
  	  "name"  : "First Servile War",
  	  "start" : -135,
  	  "end"   : -132,
  	  "color" : "#EE1111"
  	},
  	{
  	  "name"  : "Marius",
  	  "start" : -107,
  	  "end"   : -100,
  	  "color" : "blue",
  	  "descr" : "Marius was consul an unprecedented seven times during 107, 104-100, and 86 BC."
  	},
    {
      "name"  : "Social War",
      "start" : -91,
      "end"   : -87,
      "color" : "#EE1111"
    },
    {
      "name"  : "First Mithridatic War",
      "start" : -89,
      "end"   : -85,
      "color" : "#EE1111"
    },
    {
      "name"  : "Third Servile War",
      "start" : -73,
      "end"   : -71,
      "color" : "#EE1111"
    },
    {
  	  "name"  : "First Triumvirate",
  	  "start" : -60,
  	  "end"   : -53,
  	  "color" : "blue",
  	  "descr" : "Informal political alliance among Julius Caesar, Crassus, and Pompey"
  	},
    {
      "name"  : "Gallic Wars",
      "start" : -58,
      "end"   : -50,
      "color" : "#EE1111"
    },
    {
  	  "name"  : "Second Triumvirate",
  	  "start" : -43,
  	  "end"   : -32,
  	  "color" : "blue",
  	  "descr" : "Officially the \"triumvirate for organizing the republic\", the Second Triumvirate was\
  	  a political alliance among Octavian, Antony, and Lepidus. Though relations between Octavian and\
  	  Antony were strained, their aliiance was held together by their common republican enemies Cassius\
  	  and Brutus. The triumvirate was legally ratified by the Senate and ruled Rome as essentially a\
  	  military dictatorship."
  	},
    {
      "name"  : "Augustus",
      "start" : -27,
      "end"   : 14,
      "color" : "#7851A9",
      "group" : "rulers",
      "descr" : "Was 19-year old Gaius Octavius when Caesar died. He was left 3/4 of Caesar's fortune\
  	  and was adopted by the late leader. He was fragile and prone to sickness, not strong, had over-\
  	  protective mother. He showed promise in oratory and attracted the right kinds of friends. His\
  	  mother begged him to not accept his inheritance, but ambitious like his uncle, he did anyway.\
  	  He was immediately forced into competition with Antony for support of the Senate, legions, and\
  	  people. <br>\
  	  <b>Administrative</b> He built a permanent civil-service and administrative bureaucracy consisting\
  	  of slaves and ex-slaves which provided professionalism of administration and continuity between\
  	  leadership changes. He improved the productivity of the unwieldy Senate by creating a\
  	  working-group of 30 men that actually made the legislation. He used his massive wealth to fund\
  	  infrastructure projects such as roads, horse-relay stations, and aqueducts which improved\
  	  communication and trade. He imposed a regular census to make the tax collection consistant and\
  	  fair.<br>\
  	  <b>Diplomacy/Military</b> Augustus thought the empire would soon become over-extended if it grew\
  	  much bigger. He envisioned an empire that extended to the easily-defensible Danube\
  	  and Elbe rivers. He settled a favorable peace with the Parthians which saw the return of the Roman\
  	  legionary standards.<br>\
  	  <b>Imperial Image & Authority</b> Augustus was the pioneer of the Princeps, or 'first citizen' model\
  	  of emperor.\ Wary of the stigma surrounding absolute power, he advertized himself as the restorer of\
      the republic. Ironically, the common Romans, tired of the old republican oligarchy, often insisted\
      he seize more power.<br>\
  	  <b>Religion & Morality</b> He instituted 'morality laws' to try to restore traditional Roman virtue.\
  	  He outlawed adultery, provided benefits for having children, and made it hard to be single. These\
  	  laws had little effect though. He also ushered in a revival of Roman religious practices and\
  	  festivities."
    },
    {
      "name"  : "Tiberius",
      "start" : 14,
      "end"   : 37,
      "color" : "#7851A9",
      "group" : "rulers"
    },
    {
      "name"  : "Caligula",
      "start" : 37,
      "end"   : 41,
      "color" : "#7851A9",
      "group" : "rulers"
    },
    {
      "name"  : "Claudius",
      "start" : 41,
      "end"   : 54,
      "color" : "#7851A9",
      "group" : "rulers"
    },
    {
      "name"  : "Nero",
      "start" : 54,
      "end"   : 68,
      "color" : "#7851A9",
      "group" : "rulers"
    },
    {
      "name"  : "Great Jewish Revolt",
      "start" : 66,
      "end"   : 73,
      "color" : "#EE1111"
    },
    {
      "name"  : "Vespasian",
      "start" : 69,
      "end"   : 79,
      "color" : "#7851A9",
      "group" : "rulers"
    },
    {
      "name"  : "Domitian",
      "start" : 81,
      "end"   : 96,
      "color" : "#7851A9",
      "group" : "rulers"
    },
    {
      "name"  : "Nerva",
      "start" : 96,
      "end"   : 98,
      "color" : "#7851A9",
      "group" : "rulers"
    },
    {
      "name"  : "Trajan",
      "start" : 98,
      "end"   : 117,
      "color" : "#7851A9",
      "group" : "rulers"
    },
    {
      "name"  : "Hadrian",
      "start" : 117,
      "end"   : 138,
      "color" : "#7851A9",
      "group" : "rulers"
    },
    {
      "name"  : "Antoninus Pius",
      "start" : 138,
      "end"   : 161,
      "color" : "#7851A9",
      "group" : "rulers"
    },
    {
      "name"  : "Marcus Aurelius",
      "start" : 161,
      "end"   : 180,
      "color" : "#7851A9",
      "group" : "rulers"
    },
    {
      "name"  : "Marcomannic Wars",
      "start" : 166,
      "end"   : 180,
      "color" : "#EE1111"
    },
    {
      "name"  : "Commodus",
      "start" : 176,
      "end"   : 192,
      "color" : "#7851A9",
      "group" : "rulers"
    },
    {
      "name"  : "Antonine Plague",
      "start" : 165,
      "end"   : 180,
      "color" : "green"
    },
    {
      "name"  : "Severus",
      "start" : 193,
      "end"   : 211,
      "color" : "#7851A9",
      "group" : "rulers",
      "descr" : "Being the first major emperor after the Antonine dynasty, his legitimacy was critically\
      low beginning his reign. In 193, he was hailed emperor by his troops in Pannonia and thrust into\
      competition with his rival claimants. His place in power was given and maintained by the army\
      alone. Aware of his fragile authority, Severus gave large donatives and increased the wage of his\
      soldiers. He created new legions and reorganized the Praetorian Guard into a personal army of\
      fifty-thousand men. Having little interest in the charade of republicanism, he ignored the Senate\
      and Roman aristocracy. The increased military spending prompted Severus to debase the silver\
      denarius from 81% to only 54% silver.<br>\
      <br>\
      Severus is usually remembered as an effective ruler who waged several successful military campaigns\
      and fixed much of the financial damage caused by Commodus. However, the soldier wage increase and\
      coinage debasement contributed to the military anarchy and economic collapse of the third century."
    },
    {
      "name"  : "Caracalla",
      "start" : 198,
      "end"   : 217,
      "color" : "#7851A9",
      "group" : "rulers"
    },
    {
      "name"  : "Elagabalus",
      "start" : 218,
      "end"   : 222,
      "color" : "#7851A9",
      "group" : "rulers"
    },
    {
      "name"  : "Severus Alexander",
      "start" : 222,
      "end"   : 235,
      "color" : "#7851A9",
      "group" : "rulers"
    },
    {
      "name"  : "Crisis of the Third Century",
      "start" : 235,
      "end"   : 284,
      "color" : "#EE1111",
      "descr" : "During the mid-third century, the empire nearly fell apart due to a combination of\
  	  political instability, external invasion, plague, and economic depression.\
  	  By this time, the legions had come to expect frequent wage increases and bonuses which was taking\
  	  a toll on the empire's economy. Emperors who refused to comply with the army's demands were overthrown.\
  	  This devastated the sitting emperor's ability to hold power. The emperor faced too many challenges to\
  	  deal with on his own, but delegating tasks to a general ran the risk of creating a usurper.\
  	  Internal trade networks broke down. Beginning with Aurelian, the defensive strategy shifted to\
  	  one of waiting for the imperial army behind city walls instead of patrolling the extensive Rhine\
  	  and Danube frontiers. The Cyprian Plague reduced the number of soldiers and farmers prompting\
  	  invasion and famine. Due to debasement and constant minting of new coins, Roman currency became almost\
  	  worthless."
    },
    {
      "name"  : "Cyprian Plague",
      "start" : 249,
      "end"   : 262,
      "color" : "green"
    },
    {
      "name"  : "Valerian",
      "start" : 253,
      "end"   : 260,
      "color" : "#7851A9",
      "group" : "rulers"
    },
    {
      "name"  : "Aurelian",
      "start" : 270,
      "end"   : 275,
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
      "start" : 284,
      "end"   : 305,
      "color" : "#7851A9",
      "group" : "rulers",
      "descr" : "The reforms of the charismatic Diocletian lifted the empire out of the crisis era.\
      His vision was to restore the empire's glory by reshaping its every institution.<br>\
      <b>Administrative/Military Reforms</b> Diocletian sought to restore political stability by\
      distributing administrative and military duties amongst more officials, thereby allowing\
      specilization and preventing power amalgamation.\
      <ul>\
      <li>Established the Tetrarchy and voluntarily abdicated the throne, setting a\
          precedent of peaceful sharing and relinquishing of imperial power</li>\
      <li>Doubled the size of the imperial bureaucracy</li>\
      <li>Doubled the number of provinces, and grouped them into dioceses</li>\
      <li>Separated civilian and military government positions, such as establishing\
          the position of dux--the military commander in a province</li>\
      <li>Emphasized smaller and more mobile vexillation over the legion as the\
          primary military unit for patrolling the northern frontiers</li>\
      </ul>\
      <b>Economic Reforms</b> His economic reforms aimed to fund the army and bureaucracy\
      despite coin-debasement and inflation. He abandoned monetary taxation in favor of\
      direct payment of raw goods. His Edict on Prices attempted to curb inflation by\
      tabulating for each marketable good a maximum prices. However, the edict was\
      unenforceable and was abandoned after his abdication.<br>\
      <b>Imperial Image</b> Hy styled the emperorship as a divinely appointed position\
      to remove the ever-shifting allegiance of the army as the source of imperial legitimacy.\
      This shift in perception from \"first among equals\" to \"lord and master\" typically\
      marks the boundary between the Principate and Dominate forms of government.<br>\
      <b>Religious Persecutions</b> In 303, he ordered the persecution of Christians and\
      Manichaeans from fear that the pagan gods would turn their backs on Rome. However,\
      by this time, Christianity was too established and had too much sympathy to justify\
      the appalling measures taken to stamp it out.\
      "
    },
    {
      "name"  : "Constantine",
      "start" : 306,
      "end"   : 337,
      "color" : "#7851A9",
      "group" : "rulers"
    },
    {
      "name"  : "Julian the Apostate",
      "start" : 355,
      "end"   : 363,
      "color" : "#7851A9",
      "group" : "rulers",
      "descr" : "Like Marcus Aurelius, Julian was inclined toward intellectual\
      pursuits, but refused to shirk his duty as a military general. He attempted to\
      revert the administration, religion, and imperial image to more traditional\
      forms, but found that Christianity, bureaucracy, and the divine emperor were\
      firmly entrenched."
    },
    {
      "name"  : "Gothic War",
      "start" : 376,
      "end"   : 382,
      "color" : "#EE1111",
      "descr" : "In 376, a hoard of Goths crossed the Danube seeking refuge from the Huns.\
      After enduring harassment from local Roman leaders, they revolted and began rampaging\
      around the Balkans. Emperor Valens and the eastern army eventually confronted them in 378.\
      The ensuing Battle of Adrianople resulted in overwhelming victory for the Goths, whose\
      unaccounted-for cavalry surrounded and slaughtered Valens and two-thirds of the veteran\
      eastern army. What followed was a war of attrition as Gothic forces proved unable to\
      capture the heavily fortified Roman cities and the crippled Roman army was no match for\
      the Goths in open combat. In 382, breaking from centuries-old Roman foreign policy, the\
      Goths were allowed to remain on Roman territory as a unified nation with fragile loyalty\
      to Rome.<br><br>\
      The Gothic War marks when the Roman legions, long suffering from manpower shortages, began\
      to have serious problems defending the empire from hostile barbarians and internal\
      political usurpers."
    },
    {
      "name"  : "Theodosius",
      "start" : 379,
      "end"   : 395,
      "color" : "#7851A9",
      "group" : "rulers"
    },
    {
      "name"  : "Stilicho",
      "start" : 382,
      "end"   : 408,
      "color" : "orange"
    },
    {
      "name"  : "Honorius",
      "start" : 393,
      "end"   : 423,
      "color" : "#7851A9",
      "group" : "rulers"
    },
    {
      "name"  : "Valentinian III",
      "start" : 425,
      "end"   : 455,
      "color" : "#7851A9",
      "group" : "rulers"
    },
    {
      "name"  : "Aëtius",
      "start" : 433,
      "end"   : 454,
      "color" : "orange"
    },
    {
      "name"  : "Ricimer",
      "start" : 461,
      "end"   : 472,
      "color" : "orange"
    }
  ]
};
