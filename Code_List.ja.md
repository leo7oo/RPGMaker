[Return to Top Page](README.md)

# Code List

A reference for various codes used in plugin parameters and scripts.

## Table of Contents

1. [Parameters](#parameters)
2. [Motions](#motions)
3. [About HP Recovery](#about-hp-recovery)

## Parameters
Mainly used in damage formulas.
Expressed as `a.hp`, etc.

| Parameter Name | Code | Notes |
| --- | --- | --- |
| Current HP | hp |  |
| Current MP | mp |  |
| Current TP | tp |  |
| Current Level | level |  |
| Max HP | mhp |  |
| Max MP | mmp |  |
| Attack Power | atk |  |
| Defense Power | def |  |
| Magic Attack | mat |  |
| Magic Defense | mdf |  |
| Agility | agi |  |
| Luck | luk |  |
| Hit Rate | hit |  |
| Evasion Rate | eva |  |
| Critical Rate | cri |  |
| Critical Evasion Rate | cev |  |
| Magic Evasion Rate | mev |  |
| Magic Reflection Rate | mrf |  |
| Counter Rate | cnt |  |
| HP Regeneration Rate | hrg |  |
| MP Regeneration Rate | mrg |  |
| TP Regeneration Rate | trg |  |
| Target Rate | tgr |  |
| Guard Effect Rate | grd | Damage reduction rate when guarding |
| Recovery Effect Rate | rec | Multiplier for damage type and "HP Recovery"/"MP Recovery" in effects |
| Pharmacological Knowledge | pha | Multiplier for "HP Recovery"/"MP Recovery" in effects |
| MP Cost Rate | mcr |  |
| TP Charge Rate | tcr | Multiplier for TP gained when taking damage or using skills |
| Physical Damage Rate | pdr | Multiplier for damage of "Physical Attack" hit type<br>Also affects recovery of damage type |
| Magic Damage Rate | mdr | Multiplier for damage of "Magic Attack" hit type<br>Also affects recovery of damage type |
| Floor Damage Rate | fdr |  |
| Experience Gain Rate | exr |  |

[Return to Table of Contents](#table-of-contents)

## Motions

The numbers indicate the position of the corresponding motion in the image file.<br>
Starting from the top-left as 0, counting down as 1, 2,... (3 images per set).<br>
The next set to the right of 0 is 6.

The loop ○/× indicates whether it loops by default.

| Number | Motion | Code | Loop | Notes |
| --- | --- | --- | --- | --- |
| 0 | Walk | walk | ○ |  |
| 1 | Idle | wait | ○ |  |
| 2 | Chant | chant | ○ |  |
| 3 | Guard | guard | ○ |  |
| 4 | Damage | damage | × |  |
| 5 | Evade | evade | × |  |
| 6 | Thrust | thrust | × |  |
| 7 | Swing | swing | × |  |
| 8 | Missile | missile | × |  |
| 9 | Skill Use | skill | × |  |
| 10 | SV Magic Skill Use | spell | × |  |
| 11 | Item Use | item | × |  |
| 12 | Escape | escape | ○ |  |
| 13 | Victory | victory | ○ |  |
| 14 | Dying | dying | ○ |  |
| 15 | Abnormal State | abnormal | ○ |  |
| 16 | Sleep | sleep | ○ |  |
| 17 | Defeated | dead | ○ |  |

[Return to Table of Contents](#table-of-contents)

## About HP Recovery

When recovering HP with skills or items, there are two methods: damage type and effect. The following differences exist:<br>
○ indicates an effect, × indicates no effect.

|  | Damage Type | Effect | Notes |
| --- | --- | --- | --- |
| Elemental Effectiveness | ○ | × | When elements are set |
| Physical Damage Rate/Magic Damage Rate | ○ | × | When hit type is set to physical or magic |
| Variance | ○ | × |  |
| Critical | ○ | × | When critical is enabled |
| Guard/Guard Effect Rate | ○ | × | When used on a guarding target |
| Recovery Effect Rate | ○ | ○ |  |
| Pharmacological Knowledge | × | ○ (Items only) | No effect for skills |

Note that the timing of HP recovery effects occurs in the order of "Damage Type → Effect".

[Return to Table of Contents](#table-of-contents)

[Return to Top Page](README.md)
