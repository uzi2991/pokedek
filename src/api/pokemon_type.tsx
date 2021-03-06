export const typeColors: {
  [key: string]: string;
} = {
  normal: '#A8A77A',
  fire: '#EE8130',
  water: '#6390F0',
  electric: '#F7D02C',
  grass: '#7AC74C',
  ice: '#96D9D6',
  fighting: '#C22E28',
  poison: '#A33EA1',
  ground: '#E2BF65',
  flying: '#A98FF3',
  psychic: '#F95587',
  bug: '#A6B91A',
  rock: '#B6A136',
  ghost: '#735797',
  dragon: '#6F35FC',
  dark: '#705746',
  steel: '#B7B7CE',
  fairy: '#D685AD'
};

export const allTypes = [
  'normal',
  'fighting',
  'flying',
  'poison',
  'ground',
  'rock',
  'bug',
  'ghost',
  'steel',
  'fire',
  'water',
  'grass',
  'electric',
  'psychic',
  'ice',
  'dragon',
  'dark',
  'fairy'
];

export const typeEffectiveness: {
  [key: string]: {
    [key: string]: number;
  };
} = {
  normal: {
    normal: 1,
    fighting: 1,
    flying: 1,
    poison: 1,
    ground: 1,
    rock: 0.5,
    bug: 1,
    ghost: 0,
    steel: 0.5,
    fire: 1,
    water: 1,
    grass: 1,
    electric: 1,
    psychic: 1,
    ice: 1,
    dragon: 1,
    dark: 1,
    fairy: 1
  },
  fighting: {
    normal: 2,
    fighting: 1,
    flying: 0.5,
    poison: 0.5,
    ground: 1,
    rock: 2,
    bug: 0.5,
    ghost: 0,
    steel: 2,
    fire: 1,
    water: 1,
    grass: 1,
    electric: 1,
    psychic: 0.5,
    ice: 2,
    dragon: 1,
    dark: 2,
    fairy: 0.5
  },
  flying: {
    normal: 1,
    fighting: 2,
    flying: 1,
    poison: 1,
    ground: 1,
    rock: 0.5,
    bug: 2,
    ghost: 1,
    steel: 0.5,
    fire: 1,
    water: 1,
    grass: 2,
    electric: 0.5,
    psychic: 1,
    ice: 1,
    dragon: 1,
    dark: 1,
    fairy: 1
  },
  poison: {
    normal: 1,
    fighting: 1,
    flying: 1,
    poison: 0.5,
    ground: 0.5,
    rock: 0.5,
    bug: 1,
    ghost: 0.5,
    steel: 0,
    fire: 1,
    water: 1,
    grass: 2,
    electric: 1,
    psychic: 1,
    ice: 1,
    dragon: 1,
    dark: 1,
    fairy: 2
  },
  ground: {
    normal: 1,
    fighting: 1,
    flying: 0,
    poison: 2,
    ground: 1,
    rock: 2,
    bug: 0.5,
    ghost: 1,
    steel: 2,
    fire: 2,
    water: 1,
    grass: 0.5,
    electric: 2,
    psychic: 1,
    ice: 1,
    dragon: 1,
    dark: 1,
    fairy: 1
  },
  rock: {
    normal: 1,
    fighting: 0.5,
    flying: 2,
    poison: 1,
    ground: 0.5,
    rock: 1,
    bug: 2,
    ghost: 1,
    steel: 0.5,
    fire: 2,
    water: 1,
    grass: 1,
    electric: 1,
    psychic: 1,
    ice: 2,
    dragon: 1,
    dark: 1,
    fairy: 1
  },
  bug: {
    normal: 1,
    fighting: 0.5,
    flying: 0.5,
    poison: 0.5,
    ground: 1,
    rock: 1,
    bug: 1,
    ghost: 0.5,
    steel: 0.5,
    fire: 0.5,
    water: 1,
    grass: 2,
    electric: 1,
    psychic: 2,
    ice: 1,
    dragon: 1,
    dark: 2,
    fairy: 0.5
  },
  ghost: {
    normal: 0,
    fighting: 1,
    flying: 1,
    poison: 1,
    ground: 1,
    rock: 1,
    bug: 1,
    ghost: 2,
    steel: 1,
    fire: 1,
    water: 1,
    grass: 1,
    electric: 1,
    psychic: 2,
    ice: 1,
    dragon: 1,
    dark: 0.5,
    fairy: 1
  },
  steel: {
    normal: 1,
    fighting: 1,
    flying: 1,
    poison: 1,
    ground: 1,
    rock: 2,
    bug: 1,
    ghost: 1,
    steel: 0.5,
    fire: 0.5,
    water: 0.5,
    grass: 1,
    electric: 0.5,
    psychic: 1,
    ice: 2,
    dragon: 1,
    dark: 1,
    fairy: 2
  },
  fire: {
    normal: 1,
    fighting: 1,
    flying: 1,
    poison: 1,
    ground: 1,
    rock: 0.5,
    bug: 2,
    ghost: 1,
    steel: 2,
    fire: 0.5,
    water: 0.5,
    grass: 2,
    electric: 1,
    psychic: 1,
    ice: 2,
    dragon: 0.5,
    dark: 1,
    fairy: 1
  },
  water: {
    normal: 1,
    fighting: 1,
    flying: 1,
    poison: 1,
    ground: 2,
    rock: 2,
    bug: 1,
    ghost: 1,
    steel: 1,
    fire: 2,
    water: 0.5,
    grass: 0.5,
    electric: 1,
    psychic: 1,
    ice: 1,
    dragon: 0.5,
    dark: 1,
    fairy: 1
  },
  grass: {
    normal: 1,
    fighting: 1,
    flying: 0.5,
    poison: 0.5,
    ground: 2,
    rock: 2,
    bug: 0.5,
    ghost: 1,
    steel: 0.5,
    fire: 0.5,
    water: 2,
    grass: 0.5,
    electric: 1,
    psychic: 1,
    ice: 1,
    dragon: 0.5,
    dark: 1,
    fairy: 1
  },
  electric: {
    normal: 1,
    fighting: 1,
    flying: 2,
    poison: 1,
    ground: 0,
    rock: 1,
    bug: 1,
    ghost: 1,
    steel: 1,
    fire: 1,
    water: 2,
    grass: 0.5,
    electric: 0.5,
    psychic: 1,
    ice: 1,
    dragon: 0.5,
    dark: 1,
    fairy: 1
  },
  psychic: {
    normal: 1,
    fighting: 2,
    flying: 1,
    poison: 2,
    ground: 1,
    rock: 1,
    bug: 1,
    ghost: 1,
    steel: 0.5,
    fire: 1,
    water: 1,
    grass: 1,
    electric: 1,
    psychic: 0.5,
    ice: 1,
    dragon: 1,
    dark: 0,
    fairy: 1
  },
  ice: {
    normal: 1,
    fighting: 1,
    flying: 2,
    poison: 1,
    ground: 2,
    rock: 1,
    bug: 1,
    ghost: 1,
    steel: 0.5,
    fire: 0.5,
    water: 0.5,
    grass: 2,
    electric: 1,
    psychic: 1,
    ice: 0.5,
    dragon: 2,
    dark: 1,
    fairy: 1
  },
  dragon: {
    normal: 1,
    fighting: 1,
    flying: 1,
    poison: 1,
    ground: 1,
    rock: 1,
    bug: 1,
    ghost: 1,
    steel: 0.5,
    fire: 1,
    water: 1,
    grass: 1,
    electric: 1,
    psychic: 1,
    ice: 1,
    dragon: 2,
    dark: 1,
    fairy: 0
  },
  dark: {
    normal: 1,
    fighting: 0.5,
    flying: 1,
    poison: 1,
    ground: 1,
    rock: 1,
    bug: 1,
    ghost: 2,
    steel: 1,
    fire: 1,
    water: 1,
    grass: 1,
    electric: 1,
    psychic: 2,
    ice: 1,
    dragon: 1,
    dark: 0.5,
    fairy: 0.5
  },
  fairy: {
    normal: 1,
    fighting: 2,
    flying: 1,
    poison: 0.5,
    ground: 1,
    rock: 1,
    bug: 1,
    ghost: 1,
    steel: 0.5,
    fire: 0.5,
    water: 1,
    grass: 1,
    electric: 1,
    psychic: 1,
    ice: 1,
    dragon: 2,
    dark: 2,
    fairy: 1
  }
};

export const calculateEffectiveness = (
  attackType: string,
  defenseTypes: string[]
) => {
  return defenseTypes.reduce(
    (acc, type) => acc * typeEffectiveness[attackType][type],
    1
  );
};

export const getAttackPropsAndCons = (type: string) => {
  const prosAndCons: {
    'super effective': string[];
    'not effective': string[];
    'no effect': string[];
  } = {
    'super effective': [],
    'not effective': [],
    'no effect': []
  };

  Object.entries(typeEffectiveness[type]).forEach(([defType, coef]) => {
    if (coef > 1) {
      prosAndCons['super effective'].push(defType);
    } else if (coef < 1 && coef > 0) {
      prosAndCons['not effective'].push(defType);
    } else if (coef === 0) {
      prosAndCons['no effect'].push(defType);
    }
  });

  return prosAndCons;
};

export const getDefenseProsAndCons = (type: string) => {
  const prosAndCons: {
    'super effective': string[];
    'not effective': string[];
    'no effect': string[];
  } = {
    'super effective': [],
    'not effective': [],
    'no effect': []
  };

  Object.entries(typeEffectiveness).forEach(([atkType, coefs]) => {
    const coef = coefs[type];
    if (coef > 1) {
      prosAndCons['super effective'].push(atkType);
    } else if (coef < 1 && coef > 0) {
      prosAndCons['not effective'].push(atkType);
    } else if (coef === 0) {
      prosAndCons['no effect'].push(atkType);
    }
  });

  return prosAndCons;
};
