/* Sound Category File
 * All the sounds found in this folder have a definition in this file
 * Any category added has to be added to the array below so it can be seen by the bot
 */

const airhorn = {
  name: 'airhorn',
  prefix: 'airhorn',
  commands: [
    '!airhorn'
  ],
  files: [
    { name: 'default', filetype: 'dca' },
    { name: 'reverb', filetype: 'dca' },
    { name: 'spam', filetype: 'dca' },
    { name: 'tripletap', filetype: 'dca' },
    { name: 'fourtap', filetype: 'dca' },
    { name: 'distant', filetype: 'dca' },
    { name: 'echo', filetype: 'dca' },
    { name: 'clownfull', filetype: 'dca' },
    { name: 'clownshort', filetype: 'dca' },
    { name: 'clownspam', filetype: 'dca' },
    { name: 'highfartlong', filetype: 'dca' },
    { name: 'highfartshort', filetype: 'dca' },
    { name: 'midshort', filetype: 'dca' },
    { name: 'truck', filetype: 'dca' }
  ]
}
const overwatch = {
  name: 'overwatch',
  prefix: 'owult',
  commands: [
    '!overwatch',
    '!owult'
  ],
  files: [
    // , filetype: 'dca' }looking for files o[
    // http://rpboyer15.github.io/files-o[-overwatch/
    { name: 'bastion', filetype: 'dca' },
    { name: 'dva_enemy', filetype: 'dca' },
    { name: 'dva_friendly', filetype: 'dca' },
    { name: 'genji_enemy', filetype: 'dca' },
    { name: 'genji_friendly', filetype: 'dca' },
    { name: 'hanzo_enemy', filetype: 'dca' },
    { name: 'hanzo_friendly', filetype: 'dca' },
    { name: 'junkrat_enemy', filetype: 'dca' },
    { name: 'junkrat_friendly', filetype: 'dca' },
    { name: 'lucio_friendly', filetype: 'dca' },
    { name: 'lucio_enemy', filetype: 'dca' },
    { name: 'mccree_enemy', filetype: 'dca' },
    { name: 'mccree_friendly', filetype: 'dca' },
    { name: 'mei_friendly', filetype: 'dca' },
    // //there may be multiple mei friendly ult lines
    // //from this: https://www.reddit.com/r/Overwatch/comments/4fdw0z/is_that_ultimate_friendly_or_hostile/
    { name: 'mei_enemy', filetype: 'dca' },
    { name: 'mercy_friendly', filetype: 'dca' },
    { name: 'mercy_friendly_devil', filetype: 'dca' },
    { name: 'mercy_friendly_valkyrie', filetype: 'dca' },
    { name: 'mercy_enemy', filetype: 'dca' },
    { name: 'orisa_enemy', filetype: 'dca' },
    { name: 'orisa_friendly', filetype: 'dca' },
    { name: 'pharah_enemy', filetype: 'dca' },
    { name: 'pharah_friendly', filetype: 'dca' },
    { name: 'reaper_enemy', filetype: 'dca' },
    { name: 'reaper_friendly', filetype: 'dca' },
    { name: 'reinhardt', filetype: 'dca' },
    { name: 'roadhog_enemy', filetype: 'dca' },
    { name: 'roadhog_friendly', filetype: 'dca' },
    { name: '76_enemy', filetype: 'dca' },
    { name: '76_friendly', filetype: 'dca' },
    { name: 'sombra_enemy', filetype: 'dca' },
    { name: 'sombra_friendly', filetype: 'dca' },
    { name: 'symmetra_teleporter', filetype: 'dca' },
    { name: 'symmetra_shield', filetype: 'dca' },
    { name: 'torbjorn', filetype: 'dca' },
    { name: 'tracer_enemy', filetype: 'dca' }, // enemy line has constiations. constiations are an argument for splitting it up to be !owtracer, putting them in separate sound collections
    { name: 'tracer_friendly', filetype: 'dca' }, // doesn't exist?
    { name: 'widow_enemy', filetype: 'dca' }, // consider shortening to widow?
    { name: 'widow_friendly', filetype: 'dca' }, // same as above
    { name: 'zarya_enemy', filetype: 'dca' },
    { name: 'zarya_friendly', filetype: 'dca' },
    { name: 'zenyatta_enemy', filetype: 'dca' },
    { name: 'zenyatta_friendly', filetype: 'dca' },

    { name: 'dva_;)', filetype: 'dca' }, // should be in its own sound repository
    { name: 'anyong', filetype: 'dca' }
  ]
}

const khaled = {
  name: 'khaled',
  prefix: 'another',
  commands: [
    '!anotha',
    '!anothaone'
  ],
  files: [
    { name: 'one', filetype: 'dca' },
    { name: 'one_classic', filetype: 'dca' },
    { name: 'one_echo', filetype: 'dca' }
  ]
}

const cena = {
  name: 'cena',
  prefix: 'jc',
  commands: [
    '!johncena',
    '!cena'
  ],
  files: [
    { name: 'airhorn', filetype: 'dca' },
    { name: 'echo', filetype: 'dca' },
    { name: 'full', filetype: 'dca' },
    { name: 'jc', filetype: 'dca' },
    { name: 'nameis', filetype: 'dca' },
    { name: 'spam', filetype: 'dca' }
  ]
}

const cow = {
  name: 'cow',
  prefix: 'cow',
  commands: [
    '!stan',
    '!stanislav'
  ],
  files: [
    { name: 'herd', filetype: 'dca' },
    { name: 'moo', filetype: 'dca' },
    { name: 'x3', filetype: 'dca' }
  ]
}

const birthday = {
  name: 'birthday',
  prefix: 'birthday',
  commands: [
    '!birthday',
    '!bday'
  ],
  files: [
    { name: 'horn', filetype: 'dca' },
    { name: 'horn3', filetype: 'dca' },
    { name: 'sadhorn', filetype: 'dca' },
    { name: 'weakhorn', filetype: 'dca' }
  ]
}

const roode = {
  name: 'roode',
  prefix: 'roode',
  commands: [
    '!roode'
  ],
  files: [
    { name: 'glorious', filetype: 'dca' },
    { name: 'defend', filetype: 'dca' },
    { name: 'victorious_full', filetype: 'dca' }
  ]
}

const revival = {
  name: 'revival',
  prefix: 'revival',
  commands: [
    '!revival'
  ],
  files: [
    { name: 'we_go_hard', filetype: 'dca' },
    { name: 'say_yeah', filetype: 'dca' }
  ]
}

const styles = {
  name: 'styles',
  prefix: 'styles',
  commands: [
    '!styles',
    '!aj'
  ],
  files: [
    { name: 'gay_community', filetype: 'dca' }
  ]
}

const dummy = {
  name: 'dummy',
  prefix: 'dummy',
  commands: [
    '!dummy'
  ],
  files: [
    { name: 'yeah', filetype: 'dca' }
  ]
}

const dota = {
  name: 'dota',
  prefix: 'dota',
  commands: [
    '!dota',
    '!tobi',
    '!tobiwan'
  ],
  files: [
    { name: 'alldead', filetype: 'dca' },
    { name: 'digitalsports', filetype: 'dca' },
    { name: 'dingdingding', filetype: 'dca' },
    { name: 'disaster', filetype: 'dca' },
    { name: 'liquid', filetype: 'dca' },
    { name: 'pudge', filetype: 'dca' },
    { name: 'waow', filetype: 'dca' },
    { name: 'echoslammajamma', filetype: 'webm' },
    { name: 'lakad_matatag', filetype: 'webm' }
  ]
}

const jones = {
  name: 'jones',
  prefix: 'jones',
  commands: [
    '!jones',
    '!alexjones'
  ],
  files: [
    { name: 'kissing_goblins', filetype: 'dca' },
    { name: 'kissing_goblins_full', filetype: 'dca' },
    { name: 'in_bed_goblin', filetype: 'dca' },
    { name: 'charging_goblins', filetype: 'dca' },
    { name: 'pepsi_taste_test', filetype: 'dca' },
    { name: '1776', filetype: 'dca' },
    { name: 'human', filetype: 'dca' },
    { name: 'destroy_everything', filetype: 'dca' },
    { name: 'hot_blood', filetype: 'dca' },
    { name: 'have_children', filetype: 'dca' },
    { name: 'gang_of_mustaches', filetype: 'dca' },
    { name: 'sick_of_it', filetype: 'dca' },
    { name: 'what_is_that_joke', filetype: 'dca' },
    { name: 'what_is_venezuela', filetype: 'dca' },
    { name: 'the_gay_bomb', filetype: 'dca' },
    { name: 'punches', filetype: 'dca' },
    { name: 'its_a_gay_bomb', filetype: 'dca' },
    { name: 'gay_frogs', filetype: 'dca' },
    { name: 'fight_for_your_life', filetype: 'dca' }
  ]
}

const mummy = {
  name: 'mummy',
  prefix: 'mummy',
  commands: [
    '!mummy'
  ],
  files: [
    { name: '1', filetype: 'dca' },
    { name: '2', filetype: 'dca' },
    { name: '3', filetype: 'dca' },
    { name: '4', filetype: 'dca' },
    { name: '5', filetype: 'dca' },
    { name: '6', filetype: 'dca' },
    { name: '7', filetype: 'dca' },
    { name: '8', filetype: 'dca' }
  ]
}

const imhere = {
  name: 'imhere',
  prefix: 'imhere',
  commands: [
    '!im_here',
    '!imhere'
  ],
  files: [
    { name: 'find_me', filetype: 'dca' }
  ]
}

const newsreel = {
  name: 'newsreel',
  prefix: 'newsreel',
  commands: [
    '!newsreel'
  ],
  files: [
    { name: 'ooh_swish', filetype: 'dca' }
  ]
}

const logan = {
  name: 'logan',
  prefix: 'logan',
  commands: [
    '!logan'
  ],
  files: [
    { name: '1', filetype: 'dca' },
    { name: '2', filetype: 'dca' },
    { name: '3', filetype: 'dca' },
    { name: '4', filetype: 'dca' }
  ]
}

const foxy = {
  name: 'foxy',
  prefix: 'foxy',
  commands: [
    '!foxy'
  ],
  files: [
    { name: 'trying', filetype: 'dca' }
  ]
}

const money = {
  name: 'money',
  prefix: 'money',
  commands: [
    '!money'
  ],
  files: [
    { name: 'lodsofemone', filetype: 'dca' },
    { name: 'lodsofemone_full', filetype: 'dca' },
    { name: 'wopitout', filetype: 'dca' }
  ]
}

const gw2 = {
  name: 'gw2',
  prefix: 'gw2',
  commands: [
    '!gw2'
  ],
  files: [
    { name: 'rose', filetype: 'dca' },
    { name: 'outrun_a_centaur', filetype: 'webm' },
    { name: 'run_from_centaur', filetype: 'webm' },
    { name: 'my_leg', filetype: 'webm' }
  ]
}

const weed = {
  name: 'weed',
  prefix: 'theweed',
  commands: [
    '!theweed',
    '!weed'
  ],
  files: [
    { name: 'all', filetype: 'dca' }
  ]
}

const tf2 = {
  name: 'tf2',
  prefix: 'tf2',
  commands: [
    '!tf2'
  ],
  files: [
    { name: 'overtime1', filetype: 'dca' },
    { name: 'overtime2', filetype: 'dca' },
    { name: 'overtime3', filetype: 'dca' },
    { name: 'overtime4', filetype: 'dca' }
  ]
}

const assblast = {
  name: 'assblast',
  prefix: 'assblastusa',
  commands: [
    '!assblastusa'
  ],
  files: [
    { name: 'full', filetype: 'dca' }
  ]
}

const rwby = {
  name: 'rwby',
  prefix: 'rwby',
  commands: [
    '!rwby'
  ],
  files: [
    { name: 'laugh', filetype: 'webm' },
    { name: 'red_like_roses_1', filetype: 'webm' },
    { name: 'red_like_roses_2', filetype: 'webm' },
    { name: 'i_burn', filetype: 'webm' },
    { name: 'burning_gold', filetype: 'webm' },
    { name: 'wat', filetype: 'webm' }
  ]
}

const balor = {
  name: 'balor',
  prefix: 'finn',
  commands: [
    '!finn',
    '!balor'
  ],
  files: [
    { name: 'likes', filetype: 'webm' }
  ]
}

const rose = {
  name: '🌹',
  prefix: '🌹',
  commands: [
    '!rose',
    ':rose:',
    '!🌹'
  ],
  files: [
    { name: 'red_roses_too', filetype: 'webm' }
  ]
}

const jordan = {
  name: 'jordan',
  prefix: 'jordan',
  commands: [
    '!jordan',
  ],
  files: [
    { name: 'stop_it', filetype: 'webm' }
  ]
}

const grado = {
  name: 'grado',
  prefix: 'grado',
  commands: [
    '!grado',
  ],
  files: [
    { name: 'bad_boy', filetype: 'webm' }
  ]
}

const rag = {
  name: 'raggedy ann & andy',
  prefix: 'rag',
  commands: [
    '!rag',
  ],
  files: [
    { name: 'sick_and_tired', filetype: 'webm' }
  ]
}

const blazblue = {
  name: 'blazblue',
  prefix: 'blazblue',
  commands: [
    '!blazblue',
  ],
  files: [
    { name: 'nu_pointless', filetype: 'webm' },
    { name: 'nu_pointless2', filetype: 'webm' },
    { name: 'plat_perv', filetype: 'webm' }
  ]
}

const undernight = {
  name: 'undernight',
  prefix: 'undernight',
  commands: [
    '!undernight',
  ],
  files: [
    { name: 'paco_bell', filetype: 'webm' },
    { name: 'vatista1', filetype: 'webm' },
    { name: 'vatista2', filetype: 'webm' },
    { name: 'mika_blaze', filetype: 'webm' }
  ]
}

const payday2 = {
  name: 'payday 2',
  prefix: 'pd2',
  commands: [
    '!pd2',
    '!payday2'
  ],
  files: [
    { name: 'dallas_medic_bag', filetype: 'webm' }
  ]
}

const striminal = {
  name: 'striminal',
  prefix: 'striminal',
  commands: [
    '!striminal'
  ],
  files: [
    { name: 'ill_steal_it', filetype: 'webm' },
    { name: 'never_know_bunch', filetype: 'webm' },
    { name: 'never_know', filetype: 'webm' }
  ]
}

const sami = {
  name: 'Sami Zayn',
  prefix: 'sami',
  commands: [
    '!sz',
    '!sami',
    '!zayn'
  ],
  files: [
    { name: 'police', filetype: 'webm' },
  ]
}

const kay = {
  name: 'Billie Kay',
  prefix: 'kay',
  commands: [
    '!bk', '!kay'
  ],
  files: [
    { name: 'joking', filetype: 'webm'},
  ]
}

const office = {
  name: 'The Office',
  prefix: 'office',
  commands: [
    '!office'
  ],
  files: [
    { name: 'art', filetype: 'webm'},
  ]
}

const gultiygear = {
  name: 'Guilty Gear',
  prefix: 'guilty',
  commands: [
    '!guilty'
  ],
  files: [
    { name: 'elphelt', filetype: 'webm'},
  ]
}

const bugenhagen = {
  name: 'Eric Bugenhagen',
  prefix: 'bugenhagen',
  commands: [
    '!bugenhagen'
  ],
  files: [
    { name: 'eeeeee', filetype: 'webm' }
  ]
}

// This module exports all the sound catgories used in the bot
module.exports = [
  airhorn,
  overwatch,
  khaled,
  cena,
  cow,
  birthday,
  roode,
  revival,
  styles,
  dummy,
  dota,
  jones,
  mummy,
  imhere,
  newsreel,
  logan,
  foxy,
  money,
  gw2,
  weed,
  // tf2,
  assblast,
  rwby,
  balor,
  rose,
  jordan,
  blazblue,
  undernight,
  grado,
  rag,
  payday2,
  striminal,
  sami,
  kay,
  office,
  gultiygear,
  bugenhagen
]
