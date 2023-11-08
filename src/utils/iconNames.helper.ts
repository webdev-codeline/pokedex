import BugIcon from '../assets/icons/bug.svg';
import DarkIcon from '../assets/icons/dark.svg';
import DragonIcon from '../assets/icons/dragon.svg';
import ElectricIcon from '../assets/icons/electric.svg';
import FairyIcon from '../assets/icons/fairy.svg';
import FightingIcon from '../assets/icons/fighting.svg';
import FireIcon from '../assets/icons/fire.svg';
import FlyingIcon from '../assets/icons/flying.svg';
import GhostIcon from '../assets/icons/ghost.svg';
import GrassIcon from '../assets/icons/grass.svg';
import GroundIcon from '../assets/icons/ground.svg';
import IceIcon from '../assets/icons/ice.svg';
import NormalIcon from '../assets/icons/normal.svg';
import PoisonIcon from '../assets/icons/poison.svg';
import PsychicIcon from '../assets/icons/psychic.svg';
import RockIcon from '../assets/icons/rock.svg';
import SteelIcon from '../assets/icons/steel.svg';
import WaterIcon from '../assets/icons/water.svg';

import { PokemonTypes } from './pokemonTypeColors.helper';

export const IconFiles = {
  BugIcon,
  DarkIcon,
  DragonIcon,
  ElectricIcon,
  FairyIcon,
  FightingIcon,
  FireIcon,
  FlyingIcon,
  GhostIcon,
  GrassIcon,
  GroundIcon,
  IceIcon,
  NormalIcon,
  PoisonIcon,
  PsychicIcon,
  RockIcon,
  SteelIcon,
  WaterIcon,
};

export const IconNames: { [K in PokemonTypes]: keyof typeof IconFiles } = {
  normal: 'NormalIcon',
  fire: 'FireIcon',
  water: 'WaterIcon',
  electric: 'ElectricIcon',
  grass: 'GrassIcon',
  ice: 'IceIcon',
  fighting: 'FightingIcon',
  poison: 'PoisonIcon',
  ground: 'GroundIcon',
  flying: 'FlyingIcon',
  psychic: 'PsychicIcon',
  bug: 'BugIcon',
  rock: 'RockIcon',
  ghost: 'GhostIcon',
  dragon: 'DragonIcon',
  dark: 'DarkIcon',
  steel: 'SteelIcon',
  fairy: 'FairyIcon',
};
