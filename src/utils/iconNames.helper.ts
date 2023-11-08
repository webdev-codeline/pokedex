import { SvgProps } from 'react-native-svg';

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

export const IconNames: { [key: string]: keyof typeof IconFiles } = {
  bug: 'BugIcon',
  dark: 'DarkIcon',
  dragon: 'DragonIcon',
  electric: 'ElectricIcon',
  fairy: 'FairyIcon',
  fighting: 'FightingIcon',
  fire: 'FireIcon',
  flying: 'FlyingIcon',
  ghost: 'GhostIcon',
  grass: 'GrassIcon',
  ground: 'GroundIcon',
  ice: 'IceIcon',
  normal: 'NormalIcon',
  poison: 'PoisonIcon',
  psychic: 'PsychicIcon',
  rock: 'RockIcon',
  steel: 'SteelIcon',
  water: 'WaterIcon',
};
