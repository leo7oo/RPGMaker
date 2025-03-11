# RPG Maker MV Plugins

Plugins are being added and updated sequentially. For the latest information, please check the [Update Information](#update-information).<br>
Number of plugins currently available: 95<br>
[Notes on plugins that might be supported](memo.md)

# Table of Contents

1. [Status](#status)
    1. [Status Display Changes](#status-display-changes)
1. [Variables_Switches](#variables_switches)
1. [Windows](#windows)
1. [Messages](#messages)
1. [Item_Skill Specification Extensions](#item_skill-specification-extensions)
1. [Skills](#skills)
    1. [Skill Enhancement System](#skill-enhancement-system)
    1. [Skill Tree System](#skill-tree-system)
1. [Items](#items)
1. [States](#states)
1. [Enemy Groups](#enemy-groups)
1. [Battle](#battle)
    1. [FTKR_AlternatingTurnBattle](#ftkr_alternatingturnbattle)
1. [Events](#events)
1. [Maps](#maps)
1. [Pictures](#pictures)
1. [Save](#save)
1. [Mini-Games](#mini-games)
1. [Debug](#debug)
1. [Other Notes](#other-notes)
1. [Prototype Repository](#prototype-repository)
1. [Update Information](#update-information)

# Status

Number of plugins: 6

| Plugin | Manual | Download | Update Date | Description |
|:-----------|:-----------:|:-------------|:-------------|:-------------|
| [FTKR_AddOriginalParameters](FTKR_AddOriginalParameters.js) | [Available](FTKR_AddOriginalParameters.ja.md) | [v1.3.0](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_AddOriginalParameters.js) | 2020/03/21 | Adds original parameters |
| [FTKR_SearchPartyParam](FTKR_SearchPartyParam.js) | [Available](FTKR_SearchPartyParam.ja.md) | [v1.0.1](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_SearchPartyParam.js) | 2017/04/14 | Implements scripts related to party parameters |
| [FTKR_ExSvMotion](FTKR_ExSvMotion.js) | [Draft](FTKR_ExSvMotion.ja.md) | [v1.4.0](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_ExSvMotion.js) | 2019/04/13 | Extends SV character motions |
| [FTKR_FacialImageDifference](FTKR_FacialImageDifference.js) | [Draft](FTKR_FacialImageDifference.ja.md) | [v1.1.7](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_FacialImageDifference.js) | 2017/12/02 | Changes facial images based on actor status<br>Displays animations on facial images |
| [FTKR_FacialImageDifference2](FTKR_FacialImageDifference2.js) | None | [v2.0.1](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_FacialImageDifference2.js) | 2017/12/16 | Changes facial images based on actor status<br>Cannot be used with FTKR_FacialImageDifference.js |
| [FTKR_ExTraitSetting](FTKR_ExTraitSetting.js) | None | [v1.0.4](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_ExTraitSetting.js) | 2018/02/17 | Allows detailed settings for equipment, states, etc. |

## Status Display Changes

Number of plugins: 8

| Plugin | Manual | Download | Update Date | Description |
|:-----------|:-----------:|:-------------|:-------------|:-------------|
| [FTKR_CustomSimpleActorStatus](FTKR_CustomSimpleActorStatus.js) | [Available](FTKR_CustomSimpleActorStatus.ja.md) | [v3.5.3](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_CustomSimpleActorStatus.js) | 2019/05/12 | Changes status display - Main plugin |
| [FTKR_CSS_MenuStatus](FTKR_CSS_MenuStatus.js) | [Available](FTKR_CSS_MenuStatus.ja.md) | [v2.1.3](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_CSS_MenuStatus.js) | 2018/12/13 | Changes status display in the menu screen<br>Requires:<br>[FTKR_CustomSimpleActorStatus](FTKR_CustomSimpleActorStatus.js) |
| [FTKR_CSS_BattleStatus](FTKR_CSS_BattleStatus.js) | [Available](FTKR_CSS_BattleStatus.ja.md) | [v2.2.0](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_CSS_BattleStatus.js) | 2018/12/29 | Changes status display in the battle screen<br>Requires:<br>[FTKR_CustomSimpleActorStatus](FTKR_CustomSimpleActorStatus.js) |
| [FTKR_CSS_DetailedStatus](FTKR_CSS_DetailedStatus.js) | [Available](FTKR_CSS_DetailedStatus.ja.md) | [v2.1.4](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_CSS_DetailedStatus.js) | 2018/12/13 | Changes status display in the status screen<br>Requires:<br>[FTKR_CustomSimpleActorStatus](FTKR_CustomSimpleActorStatus.js) |
| [FTKR_CSS_SkillStatus](FTKR_CSS_SkillStatus.js) | [Available](FTKR_CSS_SkillStatus.ja.md) | [v2.1.3](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_CSS_SkillStatus.js) | 2018/12/13 | Changes status display in the skill screen<br>Requires:<br>[FTKR_CustomSimpleActorStatus](FTKR_CustomSimpleActorStatus.js) |
| [FTKR_CSS_EquipStatus](FTKR_CSS_EquipStatus.js) | [Draft](FTKR_CSS_EquipStatus.ja.md) | [v2.1.4](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_CSS_EquipStatus.js) | 2018/12/13 | Changes status display in the equipment screen<br>Requires:<br>[FTKR_CustomSimpleActorStatus](FTKR_CustomSimpleActorStatus.js) |
| [FTKR_CSS_ShopStatus](FTKR_CSS_ShopStatus.js) | [Draft](FTKR_CSS_ShopStatus.ja.md) | [v2.3.0](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_CSS_ShopStatus.js) | 2019/05/12 | Changes status display in the shop screen<br>Requires:<br>[FTKR_CustomSimpleActorStatus](FTKR_CustomSimpleActorStatus.js) |
| [FTKR_CSS_CustomizeBattleResults](FTKR_CSS_CustomizeBattleResults.js) | [Draft](FTKR_CSS_CustomizeBattleResults.ja.md) | [v2.1.4](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_CSS_CustomizeBattleResults.js) | 2018/12/13 | Displays battle results at the end of a battle<br>Requires:<br>[FTKR_CustomSimpleActorStatus](FTKR_CustomSimpleActorStatus.js) |

FTKR_CSS_GDM has been integrated into FTKR_CustomSimpleActorStatus.

[Back to Table of Contents](#table-of-contents)

# Variables_Switches

Number of plugins: 3

| Plugin | Manual | Download | Update Date | Description |
|:-----------|:-----------:|:-------------|:-------------|:-------------|
| [FTKR_ItemSelfVariables](FTKR_ItemSelfVariables.js) | [Available](FTKR_ItemSelfVariables.ja.md) | [v1.2.2](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_ItemSelfVariables.js) | 2018/01/08 | Adds self-variables to items, skills, actors, and enemies |
| [FTKR_ExVariablesChange](FTKR_ExVariablesChange.js) | [Draft](FTKR_ExVariablesChange.ja.md) | [v1.2.4](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_ExVariablesChange.js) | 2018/07/01 | Extends variable operations |
| [FTKR_EventSelfSwOperation](FTKR_EventSelfSwOperation.js) | None | [v1.0.0](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_EventSelfSwOperation.js) | 2017/04/25 | Operates event self-switches |

[Back to Table of Contents](#table-of-contents)

# Windows

Number of plugins: 6

| Plugin | Manual | Download | Update Date | Description |
|:-----------|:-----------:|:-------------|:-------------|:-------------|
| [FTKR_DisplayCommandFrame](FTKR_DisplayCommandFrame.js) | [Draft](FTKR_DisplayCommandFrame.ja.md) | [v1.2.2](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_DisplayCommandFrame.js) | 2020/05/17 | Adds frames to commands |
| [FTKR_OriginalSceneWindow](FTKR_OriginalSceneWindow.js) | [Draft](FTKR_OriginalSceneWindow.ja.md) | [v1.7.1](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_OriginalSceneWindow.js) | 2020/03/21 | Creates original scenes and windows |
| [FTKR_SceneBackImages](FTKR_SceneBackImages.js) | None | [v1.0.0](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_SceneBackImages.js) | 2018/02/24 | Sets background images that can be switched using variables in menu and shop screens |
| [FTKR_InterlockMouseAndWindow](FTKR_InterlockMouseAndWindow.js) | None | [v1.1.0](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_InterlockMouseAndWindow.js) | 2018/04/30 | Synchronizes mouse pointer and window cursor |
| [FTKR_TitleScene](FTKR_TitleScene.js) | None | [v1.0.1](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_TitleScene.js) | 2019/04/14 | Changes title screen commands and adds a credits screen |
| [FTKR_RestrictRefreshWindows](FTKR_RestrictRefreshWindows.js) | [Draft](FTKR_RestrictRefreshWindows.ja.md) | [v1.0.2](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_RestrictRefreshWindows.js) | 2018/12/16 | Limits window refresh rate to reduce load |

[Back to Table of Contents](#table-of-contents)

# Messages

Number of plugins: 7

| Plugin | Manual | Download | Update Date | Description |
|:-----------|:-----------:|:-------------|:-------------|:-------------|
| [FTKR_ExEscapeCharacters](FTKR_ExEscapeCharacters.js) | [Draft](FTKR_ExEscapeCharacters.ja.md) | [v1.0.2](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_ExEscapeCharacters.js) | 2017/03/28 | Adds control characters |
| [FTKR_ExMessageWindow](FTKR_ExMessageWindow.js) | [Draft](FTKR_ExMessageWindow.ja.md) | [v1.0.0](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_ExMessageWindow.js) | 2017/03/28 | Displays multiple message windows simultaneously using control characters |
| [FTKR_ExMessageWindow2](FTKR_ExMessageWindow2.js) | [Draft](FTKR_ExMessageWindow2.ja.md) | [v2.4.0](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_ExMessageWindow2.js) | 2017/08/21 | Displays multiple message windows simultaneously using text display commands<br>Cannot be used with FTKR_ExMessageWindow |
| [FTKR_MessageWindowLines](FTKR_MessageWindowLines.js) | None | [v1.1.2](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_MessageWindowLines.js) | 2018/04/28 | Changes the number of lines in the message window<br>Allows more than 4 lines by combining multiple text display commands |
| [FTKR_PopupSpriteMessage](FTKR_PopupSpriteMessage.js) | None | [v1.2.5](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_PopupSpriteMessage.js) | 2018/08/11 | Displays any message as a popup on the screen |
| [FTKR_PauseSignPosition](FTKR_PauseSignPosition.js) | None | [v1.0.0](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_PauseSignPosition.js) | 2018/04/15 | Changes the position of the pause sign |
| [FTKR_SelectHelpWindow](FTKR_SelectHelpWindow.js) | [Available](FTKR_SelectHelpWindow.ja.md) | [v1.1.0](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_SelectHelpWindow.js) | 2018/08/06 | Displays a help window for choices during selection |

[Back to Table of Contents](#table-of-contents)

# Item_Skill Specification Extensions

Number of plugins: 6

| Plugin | Manual | Download | Update Date | Description |
|:-----------|:-----------:|:-------------|:-------------|:-------------|
| [FTKR_ExItemConfig_ItemBasic](FTKR_ExItemConfig_ItemBasic.js) | [Draft](FTKR_ExItemConfig_ItemBasic.ja.md) | [v1.1.2](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_ExItemConfig_ItemBasic.js) | 2018/04/16 | Extends basic settings for items and skills |
| [FTKR_ExItemConfig_IB_SkillCost](FTKR_ExItemConfig_IB_SkillCost.js) | [Draft](FTKR_ExItemConfig_IB_SkillCost.ja.md) | [v1.0.0](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_ExItemConfig_IB_SkillCost.js) | 2017/04/30 | Extends skill cost settings<br>Requires:<br>[FTKR_ExItemConfig_ItemBasic](FTKR_ExItemConfig_ItemBasic.js) |
| [FTKR_ExItemConfig_Damage](FTKR_ExItemConfig_Damage.js) | [Draft](FTKR_ExItemConfig_Damage.ja.md) | [v1.1.2](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_ExItemConfig_Damage.js) | 2020/01/13 | Extends damage processing for items and skills |
| [FTKR_ExItemConfig_Effect](FTKR_ExItemConfig_Effect.js) | [Draft](FTKR_ExItemConfig_Effect.ja.md) | [v1.2.1](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_ExItemConfig_Effect.js) | 2019/05/08 | Extends the effects of items and skills |
| [FTKR_ExItemConfig_Activate](FTKR_ExItemConfig_Activate.js) | [Draft](FTKR_ExItemConfig_Activate.ja.md) | [v1.0.3](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_ExItemConfig_Activate.js) | 2017/06/23 | Extends activation settings for items and skills |
| [FTKR_ExItemConfig_Required](FTKR_ExItemConfig_Required.js) | [Draft](FTKR_ExItemConfig_Required.ja.md) | [v1.0.3](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_ExItemConfig_Required.js) | 2018/02/01 | Extends usage conditions for items and skills |

Note: FTKR_ExItemConfig_* and FTKR_SkillExpansion cannot be used together.

[Back to Table of Contents](#table-of-contents)

# Skills

Number of plugins: 5

| Plugin | Manual | Download | Update Date | Description |
|:-----------|:-----------:|:-------------|:-------------|:-------------|
| [FTKR_SkillCounter](FTKR_SkillCounter.js) | [Available](FTKR_SkillCounter.ja.md) | [v1.0.5](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_SkillCounter.js) | 2017/04/29 | Changes effects in response to enemy skills |
| [FTKR_SkillSubCommand](FTKR_SkillSubCommand.js) | [Draft](FTKR_SkillSubCommand.ja.md) | [v1.0.0](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_SkillSubCommand.js) | 2017/04/15 | Adds sub-commands to the skill screen<br>Cannot be used with FTKR_SEP_ShowSkillStatus |
| [FTKR_AutoInvokeSkill](FTKR_AutoInvokeSkill.js) | None | [v1.3.2](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_AutoInvokeSkill.js) | 2018/09/07 | Automatically invokes skills under specific conditions |
| [FTKR_AISkillEvaluate](FTKR_AISkillEvaluate.js) | [Draft](FTKR_AISkillEvaluate.ja.md) | [v1.2.6](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_AISkillEvaluate.js) | 2018/12/11 | Sets individual skill evaluation values for auto-battle |
| [FTKR_SkillCastingMotion](FTKR_SkillCastingMotion.js) | None | [v1.0.0](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_SkillCastingMotion.js) | 2018/04/11 | Enables/disables casting motions for each skill |

## Skill Enhancement System

Number of plugins: 4

| Plugin | Manual | Download | Update Date | Description |
|:-----------|:-----------:|:-------------|:-------------|:-------------|
| [FTKR_SkillExpansion](FTKR_SkillExpansion.js) | [Draft](FTKR_SkillExpansion.ja.md) | [v1.4.2](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_SkillExpansion.js) | 2018/11/18 | Extends skill specifications |
| [FTKR_SEP_ShowSkillStatus](FTKR_SEP_ShowSkillStatus.js) | None | [v1.4.7](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_SEP_ShowSkillStatus.js) | 2018/08/16 | Extends skill screen display<br>Requires:<br>[FTKR_SkillExpansion](FTKR_SkillExpansion.js) |
| [FTKR_SkillUpgradeSystem_Core](FTKR_SkillUpgradeSystem_Core.js) | [Tukmate](http://tm.lucky-duet.com/viewtopic.php?f=5&t=3076) | [v1.5.4](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_SkillUpgradeSystem_Core.js) | 2019/12/17 | Skill enhancement system<br>Requires:<br>[FTKR_SkillExpansion](FTKR_SkillExpansion.js) |
| [FTKR_SkillUpgradeSystem_Window](FTKR_SkillUpgradeSystem_Window.js) | None | [v1.5.0](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_SkillUpgradeSystem_Window.js) | 2017/10/04 | Implements a dedicated screen for the skill enhancement system<br>Requires:<br>[FTKR_SkillExpansion](FTKR_SkillExpansion.js)<br>[FTKR_SEP_ShowSkillStatus](FTKR_SEP_ShowSkillStatus.js)<br>[FTKR_SkillUpgradeSystem_Core](FTKR_SkillUpgradeSystem_Core.js) |
| [FTKR_SUS_plus_SP](FTKR_SUS_plus_SP.js) | None | [v1.0.0](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_SUS_plus_SP.js) | 2019/12/17 | Adds SP from the skill tree plugin as a cost for the skill enhancement system<br>Requires:<br>[FTKR_SkillExpansion](FTKR_SkillExpansion.js)<br>[FTKR_SEP_ShowSkillStatus](FTKR_SEP_ShowSkillStatus.js)<br>[FTKR_SkillUpgradeSystem_Core](FTKR_SkillUpgradeSystem_Core.js)<br>[FTKR_SkillTreeSystem](FTKR_SkillTreeSystem.js) |

## Skill Tree System

Number of plugins: 3

| Plugin | Manual | Download | Update Date | Description |
|:-----------|:-----------:|:-------------|:-------------|:-------------|
| [FTKR_SkillTreeSystem](FTKR_SkillTreeSystem.js) | [Available](FTKR_SkillTreeSystem.ja.md) | [v1.18.3](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_SkillTreeSystem.js) | 2019/11/17 | Tree-based skill acquisition system |
| [FTKR_STS_CustomWindow](FTKR_STS_CustomWindow.js) | [Draft](FTKR_STS_CustomWindow.ja.md) | [v1.3.1](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_STS_CustomWindow.js) | 2018/09/08 | Changes the layout of the skill tree acquisition screen<br>Requires:<br>[FTKR_SkillTreeSystem](FTKR_SkillTreeSystem.js) |
| [FTKR_STS_CustomSkillStatus](FTKR_STS_CustomSkillStatus.js) | None | [v1.0.2](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_STS_CustomSkillStatus.js) | 2018/09/07 | Changes the skill parameters displayed in the skill tree window<br>Requires:<br>[FTKR_SkillTreeSystem](FTKR_SkillTreeSystem.js)<br>[FTKR_CustomSimpleActorStatus](FTKR_CustomSimpleActorStatus.js) |

[Back to Table of Contents](#table-of-contents)

# Items

Number of plugins: 7

| Plugin | Manual | Download | Update Date | Description |
|:-----------|:-----------:|:-------------|:-------------|:-------------|
| [FTKR_ItemNonScope](FTKR_ItemNonScope.js) | [Draft](FTKR_ItemNonScope.ja.md) | [v1.0.0](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_ItemNonScope.js) | 2017/04/19 | Targets all party members if the item has no scope |
| [FTKR_ItemCategoryFixed](FTKR_ItemCategoryFixed.js) | [Draft](FTKR_ItemCategoryFixed.ja.md) | [v1.0.3](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_ItemCategoryFixed.js) | 2019/11/22 | Removes category selection in the item box |
| [FTKR_ItemSubCommand](FTKR_ItemSubCommand.js) | [Draft](FTKR_ItemSubCommand.ja.md) | [v1.7.3](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_ItemSubCommand.js) | 2020/01/05 | Adds sub-commands to the item box, allowing item discarding and equipment changes in the item screen |
| [FTKR_ItemBoxCapacity](FTKR_ItemBoxCapacity.js) | [Draft](FTKR_ItemBoxCapacity.ja.md) | [v1.0.1](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_ItemBoxCapacity.js) | 2018/09/22 | Adds item capacity to the item box |
| [FTKR_ItemBoxCategory](FTKR_ItemBoxCategory.js) | [Available](FTKR_ItemBoxCategory.ja.md) | [v1.1.0](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_ItemBoxCategory.js) | 2017/12/10 | Adds/changes categories in the item box<br>Cannot be used with FTKR_ItemCategoryFixed |
| [FTKR_ItemCompositionSystem](FTKR_ItemCompositionSystem.js) | [Draft](FTKR_ItemCompositionSystem.ja.md) | [v1.7.4](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_ItemCompositionSystem.js) | 2020/03/18 | Item composition system |
| [FTKR_ExEquipSlot](FTKR_ExEquipSlot.js) | [Draft](FTKR_ExEquipSlot.ja.md) | [v1.2.1](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_ExEquipSlot.js) | 2018/12/21 | Allows equipping two or more items of the same type |

[Back to Table of Contents](#table-of-contents)

# States

Number of plugins: 5

| Plugin | Manual | Download | Update Date | Description |
|:-----------|:-----------:|:-------------|:-------------|:-------------|
| [FTKR_TransformationState](FTKR_TransformationState.js) | None | [v1.1.0](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_TransformationState.js) | 2017/10/08 | Changes SV images while a state is active |
| [FTKR_AutoStateConditions](FTKR_AutoStateConditions.js) | None | [v1.0.1](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_AutoStateConditions.js) | 2019/04/14 | Sets auto-apply and auto-remove conditions for states |
| [FTKR_ExStateEffects](FTKR_ExStateEffects.js) | None | [v1.0.0](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_ExStateEffects.js) | 2017/08/04 | Adds another skill's traits to skills used while a state is active |
| [FTKR_ChangeRepeatsState](FTKR_ChangeRepeatsState.js) | None | [v1.0.0](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_ChangeRepeatsState.js) | 2017/08/23 | Multiplies the number of skill repeats while a state is active |
| [FTKR_DamageFixedStates](FTKR_DamageFixedStates.js) | None | [v1.0.0](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_DamageFixedStates.js) | 2018/04/03 | Fixes damage received while a state is active |

[Back to Table of Contents](#table-of-contents)

# Enemy Groups

Number of plugins: 2

| Plugin | Manual | Download | Update Date | Description |
|:-----------|:-----------:|:-------------|:-------------|:-------------|
| [FTKR_ExMetaData](FTKR_ExMetaData.js) | [Available](FTKR_ExMetaData.ja.md) | [v1.0.1](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_ExMetaData.js) | 2018/02/19 | Extends metadata for enemy groups and events |
| [FTKR_SetupTroops](FTKR_SetupTroops.js) | [Available](FTKR_SetupTroops.ja.md) | [v1.1.0](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_SetupTroops.js) | 2017/05/25 | Sets enemy group formations in-game |

[Back to Table of Contents](#table-of-contents)

# Battle

Number of plugins: 13

| Plugin | Manual | Download | Update Date | Description |
|:-----------|:-----------:|:-------------|:-------------|:-------------|
| [FTKR_ExBattleEvent](FTKR_ExBattleEvent.js) | [Available](FTKR_ExBattleEvent.ja.md) | [v1.3.6](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_ExBattleEvent.js) | 2020/03/02 | Extends battle events |
| [FTKR_DisplayRegenerateMessage](FTKR_DisplayRegenerateMessage.js) | [Available](FTKR_DisplayRegenerateMessage.ja.md) | [v1.1.0](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_DisplayRegenerateMessage.js) | 2017/05/27 | Displays HP regeneration in the battle log |
| [FTKR_ExBattleCommand](FTKR_ExBattleCommand.js) | [Available](FTKR_ExBattleCommand.ja.md) | [v2.2.2](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_ExBattleCommand.js) | 2020/01/03 | Changes battle commands |
| [FTKR_FVActorAnimation](FTKR_FVActorAnimation.js) | None | [v1.1.2](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_FVActorAnimation.js) | 2020/02/10 | Displays animations on actor images in front-view mode<br>Requires a separate plugin for actor image display |
| [FTKR_BattleAbortConditions](FTKR_BattleAbortConditions.js) | None | [v1.0.0](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_BattleAbortConditions.js) | 2018/02/12 | Aborts battle and results in victory or defeat if conditions are met |
| [FTKR_MaxBattleMembers](FTKR_MaxBattleMembers.js) | None | [v1.0.0](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_MaxBattleMembers.js) | 2018/02/25 | Manages the maximum number of battle members using variables |
| [FTKR_ChangeBattleSpeed](FTKR_ChangeBattleSpeed.js) | None | [v1.0.3](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_ChangeBattleSpeed.js) | 2019/04/07 | Manages various battle speeds using variables |
| [FTKR_BattleWindowLayout](FTKR_BattleWindowLayout.js) | [Available](FTKR_BattleWindowLayout.ja.md) | [v1.3.0](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_BattleWindowLayout.js) | 2020/04/26 | Changes window layout during battle |
| [FTKR_ExForceAction](FTKR_ExForceAction.js) | [Available](FTKR_ExForceAction.ja.md) | [v1.1.1](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_ExForceAction.js) | 2018/08/06 | Extends the functionality of the force action command |
| [FTKR_ExGuardEffect](FTKR_ExGuardEffect.js) | [Available](FTKR_ExGuardEffect.ja.md) | [v1.0.1](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_ExGuardEffect.js) | 2020/02/11 | Extends the effects of guarding |
| [FTKR_DisplayEnemyParameters](FTKR_DisplayEnemyParameters.js) | [Available](FTKR_DisplayEnemyParameters.ja.md) | [v1.1.1](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_DisplayEnemyParameters.js) | 2018/12/20 | Displays enemy parameters in the battle screen |
| [FTKR_BattleActionTimes](FTKR_BattleActionTimes.js) | [Available](FTKR_BattleActionTimes.ja.md) | [v1.0.2](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_BattleActionTimes.js) | 2018/12/19 | Displays and controls the number of actions during battle |
| [FTKR_BattleActionPoints](FTKR_BattleActionPoints.js) | [Available](FTKR_BattleActionPoints.ja.md) | [v1.1.0](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_BattleActionPoints.js) | 2018/12/10 | Introduces a cost parameter "Action Points (AP)" |

FTKR_BattleCommandIcon has been integrated into FTKR_ExBattleCommand.

# FTKR_AlternatingTurnBattle

Number of plugins: 3

| Plugin | Manual | Download | Update Date | Description |
|:-----------|:-----------:|:-------------|:-------------|:-------------|
| [FTKR_AlternatingTurnBattle](FTKR_AlternatingTurnBattle.js) | [Draft](FTKR_AlternatingTurnBattle.ja.md) | [v2.1.0](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_AlternatingTurnBattle.js) | 2018/12/19 | Alternating turn-based battle system |
| [FTKR_AltTB_SelectTouchedActor](FTKR_AltTB_SelectTouchedActor.js) | None | [v1.0.1](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_AltTB_SelectTouchedActor.js) | 2018/12/04 | Selects an actor by clicking on their row or column in the status window<br>Requires:<br>[FTKR_AlternatingTurnBattle](FTKR_AlternatingTurnBattle.js) |
| [FTKR_AltTB_BattleEventConditions](FTKR_AltTB_BattleEventConditions.js) | [Available](FTKR_AltTB_BattleEventConditions.ja.md) | [v1.0.1](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_AltTB_BattleEventConditions.js) | 2018/12/04 | Sets turn conditions for battle events specific to FTKR_AltTB<br>Requires:<br>[FTKR_AlternatingTurnBattle](FTKR_AlternatingTurnBattle.js) |

[Back to Table of Contents](#table-of-contents)

# Events

Number of plugins: 6

| Plugin | Manual | Download | Update Date | Description |
|:-----------|:-----------:|:-------------|:-------------|:-------------|
| [FTKR_EventSmoothStart](FTKR_EventSmoothStart.js) | None | [v1.0.0](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_EventSmoothStart.js) | 2017/06/25 | Ignores player movement stop when starting an event |
| [FTKR_EventReSpawnEx](FTKR_EventReSpawnEx.js) | None | [v1.0.0](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_EventReSpawnEx.js) | 2017/11/14 | Records the coordinates and self-switches of temporary events generated by EventReSpawn.js and TemplateEvent.js<br>Requires:<br>[EventReSpawn.js (Triacontane's HP link)](https://triacontane.blogspot.jp/2016/08/blog-post.html)<br>[TemplateEvent.js (Triacontane's HP link)](https://triacontane.blogspot.jp/2016/06/blog-post_25.html) |
| [FTKR_MenuEvent](FTKR_MenuEvent.js) | None | [v1.1.0](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_MenuEvent.js) | 2018/10/05 | Executes common events on the menu screen |
| [FTKR_EventMoveByInput](FTKR_EventMoveByInput.js) | None | [v1.0.0](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_EventMoveByInput.js) | 2018/01/25 | Moves a specified event to the center of the screen and allows movement via key input |
| [FTKR_ConvertEscapeCharactersInScript](FTKR_ConvertEscapeCharactersInScript.js) | None | [v1.0.1](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_ConvertEscapeCharactersInScript.js) | 2018/08/13 | Uses control characters in event command scripts |
| [FTKR_AddRoutineMoveCommands](FTKR_AddRoutineMoveCommands.js) | None | [v1.0.1](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_AddRoutineMoveCommands.js) | 2018/08/15 | Adds processing like IF statements using move route settings scripts |

[Back to Table of Contents](#table-of-contents)

# Maps

Number of plugins: 2

| Plugin | Manual | Download | Update Date | Description |
|:-----------|:-----------:|:-------------|:-------------|:-------------|
| [FTKR_ExTileSettingForRegion](FTKR_ExTileSettingForRegion.js) | None | [v1.0.0](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_ExTileSettingForRegion.js) | 2017/08/27 | Temporarily changes passability settings for specified regions |
| [FTKR_ConnectingMapGenerator](FTKR_ConnectingMapGenerator.js) | [Available](FTKR_ConnectingMapGenerator.ja.md) | [v1.2.1](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_ConnectingMapGenerator.js) | 2018/10/21 | Connects multiple maps into one large map |

[Back to Table of Contents](#table-of-contents)

# Pictures

Number of plugins: 1

| Plugin | Manual | Download | Update Date | Description |
|:-----------|:-----------:|:-------------|:-------------|:-------------|
| [FTKR_ShowPictureBalloon](FTKR_ShowPictureBalloon.js) | [Available](FTKR_ShowPictureBalloon.ja.md) | [v1.0.0](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_ShowPictureBalloon.js) | 2018/03/25 | Displays speech bubble icons on pictures |

[Back to Table of Contents](#table-of-contents)

# Save

Number of plugins: 1

| Plugin | Manual | Download | Update Date | Description |
|:-----------|:-----------:|:-------------|:-------------|:-------------|
| [FTKR_DeleteSavefile](FTKR_DeleteSavefile.js) | [Draft](FTKR_DeleteSavefile.ja.md) | [v1.0.5](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_DeleteSavefile.js) | 2020/05/01 | Adds a command to delete save files |

[Back to Table of Contents](#table-of-contents)

# Mini-Games

Number of plugins: 1

| Plugin | Manual | Download | Update Date | Description |
|:-----------|:-----------:|:-------------|:-------------|:-------------|
| [FTKR_CardGames](FTKR_CardGames.js) | [Draft](FTKR_CardGames.ja.md) | [v1.3.0](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_CardGames.js) | 2020/01/10 | Card games |

[Back to Table of Contents](#table-of-contents)

# Debug

Number of plugins: 2

| Plugin | Manual | Download | Update Date | Description |
|:-----------|:-----------:|:-------------|:-------------|:-------------|
| [FTKR_IgnoreScriptError](FTKR_IgnoreScriptError.js) | None | [v1.1.0](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_IgnoreScriptError.js) | 2018/08/13 | Ignores errors in scripts executed during events |
| [FTKR_OriginalDebugMode](FTKR_OriginalDebugMode.js) | [Available](FTKR_OriginalDebugMode.ja.md) | [v1.0.0](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_OriginalDebugMode.js) | 2018/04/02 | Adds an original debug mode |

[Back to Table of Contents](#table-of-contents)

# Other Notes

* [Code List](Code_List.ja.md)
* [Analysis of RPG Maker MV's Battle System](battleSystem.md)

# Prototype Repository

Number of plugins: 3

| Plugin | Manual | Download | Update Date | Description |
|:-----------|:-----------:|:-------------|:-------------|:-------------|
| [FTKR_ActionGauge](FTKR_ActionGauge.js) | None | [v0.7.0](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_ActionGauge.js) | 2017/04/21 | Action gauge |
| [FTKR_addon_TMShooting](FTKR_addon_TMShooting.js) | None | [v0.2.1](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_addon_TMShooting.js) | 2018/05/09 | Extends Tomoaky's shooting plugin |
| [FTKR_GDM_WindowEditor](FTKR_GDM_WindowEditor.js) | [Draft](FTKR_GDM_WindowEditor.ja.md) | [v0.9.17](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_GDM_WindowEditor.js) | 2018/09/15 | Extends Triacontane's GUI screen design plugin (GraphicalDesignMode.js)<br>Bugs present |

# Update Information

2020/05 Update Information

### 2020/05/17
* [FTKR_DisplayCommandFrame](FTKR_DisplayCommandFrame.ja.md) v1.2.2

### 2020/05/01
* [FTKR_DeleteSavefile](FTKR_DeleteSavefile.ja.md) v1.0.5

[Past Update Information](note.md)

[Back to Table of Contents](#table-of-contents)
