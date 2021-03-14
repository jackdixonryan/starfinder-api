/* interface file refers to the TS Typing for each
piece of important data in the API. Makes everything
easier to govern.
*/

export interface Spell { }

export interface Action {
  name: string;
  description: string;
  rollModifier?: number;
  range?: number;
  limited?: boolean;
  uses?: number;
}

export interface Species {
  name: string;
  description: string;
  // tough one. The "traits" are basically modifiers
  // that govern what the application of species X would
  // do to character Y 
  // could change SO much behavior
  size: string,
  type: string,
  subtypes: string[],
  traits: {
    abilities?: {
      dex?: number;
      int?: number;
      cha?: number;
      str?: number;
      wis?: number;
      con?: number;
    },
    hp: number;
    movement?: {
      desert?: number;
      hill?: number;
      mountain?: number;
    },
    weaponSlots: number;
    savingThrows?: {
      poison?: number;
      mindAffectingEffects?: number;
      sleep?: number;
      disease?: number;
      fear?: number;
    },
    vacuum?: any;
    abilityScores?: {
      senseMotive?: number;
      culture?: number;
      acrobatics?: number;
      athletics?: number;
      diplomacy?: number;
      engineering?: number;
      stealth?: number;
      survival?: number;
    },
    opponentAbilityScores?: {
      senseMotive?: number;
    },
    perception: {
      darkvision?: number;
      lowlightVision?: number;
      blindsense?: number;
    }
    armorUpgradeSlot?: number;
    feats?: number;
    skillRank?: number;
    spells?: Spell[];
    telepathy?: number;
    actions: Action[];
    ac?: number;
    acp?: number;
  }
}