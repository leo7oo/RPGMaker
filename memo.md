# Memo of Plugins That Might Be Supported

This is just a list of plugins that "might be supported."  
We will prioritize fixing bugs as much as possible, but for other requests or avoiding conflicts with other plugins, we will address them when we have time and feel like it.

## Bugs
* **FTKR_AlternatingTurnBattle**
    * When using the "Member Swap" common event during the player's turn, the actions performed during the player's turn are repeated after "Turn End."

## Requests
* **FTKR_BattleWindowLayout**
    * Can the status window be displayed from the start of battle?
    * Can the status window remain displayed after the battle ends?
* **FTKR_AlternatingTurnBattle**
    * When used with YEP_BattleEngineCore, the game freezes when forcing a battle action.

## Things I Want to Do (No Requests)
* **FTKR_SkillUpgradeSystem**
    * Combine multiple plugins into one ⇒ Requires a remake.
* **FTKR_SkillTreeSystem**
    * Make skill tree creation a bit easier ⇒ Requires a remake.
* **FTKR_FacialImageDifference2**
    * Add a feature to switch facial images outside of battle.
* **FTKR_AISkillEvalute**
    * Make AI configuration a bit easier.
    * Add a gambit-like feature similar to FF12.
* **FTKR_AddOriginalParameters**
    * Simplify the method of adding parameters ⇒ Requires a remake.
* **FTKR_OriginalSceneWindow**
    * Revise the manual (include usage examples).

## On Hold
* **FTKR_SkillTreeSystem**
    * Reduce the load on the skill tree screen ⇒ On hold due to needing a remake.
    * Allow free placement of skills on the skill tree screen ⇒ On hold due to needing a remake.
* **FTKR_ConnectingMapGenerator**
    * Can the background images of each map be used as-is? (Combine multiple background images for display) ⇒ Difficult to implement.
* **FTKR_ExBattleEvent**
    * Avoid conflicts with other plugins (YEP_X_BattleSysCBT) ⇒ Difficult.
* **FTKR_ExMessageWindow2**
    * Avoid conflicts with other plugins (YEP_X_MessageBackLog) ⇒ On hold due to needing a remake.
* **FTKR_CustomSimpleActorStatus**
    * Can parameter display positions be aligned to the center or right, not just the left? ⇒ On hold due to requiring major changes.
* **FTKR_GDM_WindowEditor**
    * Fix issues around choices ⇒ On hold due to uncertainty about the future of this plugin.
* **FTKR_ItemCompositionSystem**
    * Allow setting multiple categories ⇒ Requires a remake.

## Resolved
* **FTKR_CSS_EquipStatus** causes performance issues?
* Updated the manual page for **FTKR_CustomSimpleActorStatus** to match v3.0.0.
* **FTKR_CSS_ShopStatus**
    * Slow cursor movement when selecting equipment in the shop screen, further slowed when used with FTKR_AddOriginalParameters ⇒ Mitigation measures implemented.
* **FTKR_ChangeBattleSpeed**
    * Bug) The feature to set a fixed value without using variables was not working.
* **FTKR_ExSvMotion**
    * Added the ability to set action motion priority in state motion settings.
* **FTKR_SkillTreeSystem**
    * Added a feature to learn different skills based on the number of times a skill is learned.
    * Added a feature to hide lines between skills in the skill tree screen.
    * Resolved conflict with FTKR_CustomSimpleActorStatus (Cursor Line Number).
* **FTKR_TitleScene**
    * Bug) Error occurs if credits are not set.
* **FTKR_AutoStateConditions**
    * Bug) FPS drops during map transitions ⇒ Reviewed automatic state application process and timing.
* **FTKR_CustomSimpleActorStatus**
    * Added a feature to display various stats other than normal parameters.
* **FTKR_ExItemConfig_Effect**
    * Bug) Content 1/Content 2 settings not reflecting correctly? When used with FTKR_ExStateEffects.
* **FTKR_AddOriginalParameters**
    * Added the ability to permanently increase additional parameters through item or skill effects.
* **FTKR_OriginalSceneWindow**
    * Fixed a bug with the window active command.
    * Added a feature to specify the height of the command window.

[Return to Top Page](README.md)
