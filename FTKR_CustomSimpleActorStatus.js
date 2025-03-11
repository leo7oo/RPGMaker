// =============================================================================
// Plugin to modify actor status display
// FTKR_CustomSimpleActorStatus.js
// Plugin No: 9
// Author: Futokoro
// Creation Date: 2017/03/09
// Last Updated: 2019/05/12
// Version: v3.5.3
// =============================================================================
// GraphicalDesignMode.js
// ----------------------------------------------------------------------------
// Copyright (c) 2015 Triacontane
// This software is released under the MIT License.
// http://opensource.org/licenses/mit-license.php
// =============================================================================

var Imported = Imported || {};
Imported.FTKR_CSS = true;

var FTKR = FTKR || {};
FTKR.CSS = FTKR.CSS || {};

// =============================================================================
/*:
 * @plugindesc v3.5.3 Plugin to modify actor status display
 * @author Futororo
 *
 * @noteParam CSS_Image
 * @noteRequire 1
 * @noteDir img/pictures/
 * @noteType file
 * @noteData actors
 * 
 * @noteParam CSS_Image
 * @noteRequire 1
 * @noteDir img/pictures/
 * @noteType file
 * @noteData items
 * 
 * @noteParam CSS_Image
 * @noteRequire 1
 * @noteDir img/pictures/
 * @noteType file
 * @noteData weapons
 * 
 * @noteParam CSS_Image
 * @noteRequire 1
 * @noteDir img/pictures/
 * @noteType file
 * @noteData armors
 * 
 * @param face
 * @text --Face Image Settings--
 * @default
 * 
 * @param Face Image Width
 * @desc Set the width of the actor's face image
 * The default is 144
 * @default 144
 * @parent face
 * 
 * @param Face Image Height
 * @desc Set the height of the actor's face image
 * The default is 144
 * @default 144
 * @parent face
 * 
 * @param Face Position X
 * @desc Where to display the face image within the drawing area.
 * 0 - Left, 1 - Center, 2 - Right
 * @default 1
 * @parent face
 * 
 * @param chara
 * @text --Walking Character Settings--
 * @default
 * 
 * @param Chara Image Width
 * @desc Set the width of the actor's walking character image
 * The default is 48
 * @default 48
 * @parent chara
 * 
 * @param Chara Image Height
 * @desc Set the height of the actor's walking character image
 * The default is 48
 * @default 48
 * @parent chara
 * 
 * @param Chara Position X
 * @desc Where to display the actor's walking character within the drawing area.
 * 0 - Left, 1 - Center, 2 - Right
 * @default 1
 * @parent chara
 * 
 * @param Chara Direction
 * @desc Set the direction of the actor's walking character.
 * 0 - Fixed Front, 1 - Direction of the leading player on the map
 * @default 0
 * @parent chara
 * 
 * @param sv
 * @text --SV Character Settings--
 * @default
 * 
 * @param Sv Image Width
 * @desc Set the width of the actor's SV character image
 * The default is 64
 * @default 64
 * @parent sv
 * 
 * @param Sv Image Height
 * @desc Set the height of the actor's SV character image
 * The default is 64
 * @default 64
 * @parent sv
 * 
 * @param Sv Position X
 * @desc Where to display the actor's SV character within the drawing area.
 * 0 - Left, 1 - Center, 2 - Right
 * @default 1
 * @parent sv
 * 
 * @param Enabled Sv Motion
 * @desc Set whether to enable the SV character motion
 * 0 - Disable, 1 - Always enabled, 2 - Enabled except in battle
 * @default 1
 * @parent sv
 * 
 * @param Sv Image Motion
 * @desc Set the default motion for the SV character
 * @default wait
 * @parent sv
 * 
 * @param Enabled State Motion
 * @desc Set whether to enable state motion
 * 1 - Enable, 0 - Disable
 * @default 1
 * @parent sv
 * 
 * @param state
 * @text --State Settings--
 * @default
 * 
 * @param Enable CSS States
 * @desc Set whether to change the state icon display to a special drawing process.
 * 1 - Enable, 0 - Disable
 * @default 1
 * @parent state
 * 
 * @param Animation Wait
 * @desc Set the time for switching state icons
 * The default is 40
 * @default 40
 * @parent state
 * 
 * @param Enable Overlap
 * @desc Set whether to enable overlapping display of state icons
 * 1 - Enable, 0 - Disable
 * @default 0
 * @parent state
 * 
 * @param Overlap Rate
 * @desc Set the allowed ratio for overlapping of icons.
 * @default 0.5
 * @parent state
 * 
 * @param State Icon Padding
 * @desc Set the padding required for icon display.
 * @default 4
 * @type number
 * @min 0
 * @parent state
 * 
 * @param Enable Auto Scale
 * @desc Set whether to adjust the icon size according to the row height or display width
 * 1 - Enable, 0 - Disable
 * @default 0
 * @parent state
 * 
 * @param pdiff
 * @text --Normal Stat Difference Settings--
 * @default
 * 
 * @param Enabled Escapecharacters By PDIFF
 * @desc Enable the use of control characters in difference display
 * @type boolean
 * @on Enable
 * @off Disable
 * @default true
 * @parent pdiff
 * 
 * @param Format PDIFF Plus
 * @desc Set the display for increases.
 * %1 - Increase value
 * @default \c[24]+ %1
 * @parent pdiff
 * 
 * @param Format PDIFF Minus
 * @desc Set the display for decreases.
 * %1 - Decrease value
 * @default \c[25]- %1
 * @parent pdiff
 * 
 * @param xparam
 * @text --Stat Settings--
 * @default
 * 
 * @param Disp Decimals Param
 * @desc Choose how to display parameters expressed as percentages.
 * @type select
 * @option Display as decimals
 * @value 0
 * @option Display as percentage (%)
 * @value 1
 * @default 0
 * @parent xparam
 * 
 * @param equip
 * @text --Equipment Parameter Settings--
 * @default
 * 
 * @param Equip Right Arrow
 * @desc Set the right arrow symbol to display when changing equipment.
 * @default \c[16]→
 * @parent equip
 * 
 * @param ediff
 * @text --Equipment Parameter (Difference) Settings--
 * @default
 * 
 * @param Enabled Escapecharacters By EDIFF
 * @desc Enable the use of control characters in difference display
 * @type boolean
 * @on Enable
 * @off Disable
 * @default true
 * @parent ediff
 * 
 * @param Format EDIFF Plus
 * @desc Set the display for increases.
 * %1 - Increase value
 * @default \c[24]+ %1
 * @parent ediff
 * 
 * @param Format EDIFF Minus
 * @desc Set the display for decreases.
 * %1 - Decrease value
 * @default \c[25]- %1
 * @parent ediff
 * 
 * @param aopdiff
 * @text --AOP Stat (Difference) Settings--
 * @default
 * 
 * @param Enabled Escapecharacters By AOPDIFF
 * @desc Enable the use of control characters in difference display
 * @type boolean
 * @on Enable
 * @off Disable
 * @default true
 * @parent aopdiff
 * 
 * @param Format AOPDIFF Plus
 * @desc Set the display for increases.
 * %1 - Increase value
 * @default \c[24]+ %1
 * @parent aopdiff
 * 
 * @param Format AOPDIFF Minus
 * @desc Set the display for decreases.
 * %1 - Decrease value
 * @default \c[25]- %1
 * @parent aopdiff
 * 
 * @param ediffaop
 * @text --AOP Equipment Parameter (Difference) Settings--
 * @default
 * 
 * @param Enabled Escapecharacters By EDIFFAOP
 * @desc Enable the use of control characters in difference display
 * @type boolean
 * @on Enable
 * @off Disable
 * @default true
 * @parent ediffaop
 * 
 * @param Format EDIFFAOP Plus
 * @desc Set the display for increases.
 * %1 - Increase value
 * @default \c[24]+ %1
 * @parent ediffaop
 * 
 * @param Format EDIFFAOP Minus
 * @desc Set the display for decreases.
 * %1 - Decrease value
 * @default \c[25]- %1
 * @parent ediffaop
 * 
 * @param image
 * @text --Custom Image Settings--
 * @default
 * 
 * @param Image Position X
 * @desc Where to display the custom image within the drawing area.
 * 0 - Left, 1 - Center, 2 - Right
 * @default 1
 * @parent image
 * 
 * @param message
 * @text --Message Settings--
 * @default
 * 
 * @param Display LevelUp Message
 * @desc Set the message displayed upon level-up.
 * %1 - Actor name, %2 - Current level, %3 - Level gained
 * @default \C[17]%3 Level Up!
 * @parent message
 * 
 * @param customParam
 * @text --Custom Parameter Settings--
 * 
 * @param --Custom Param 0--
 * @default
 * @parent customParam
 * 
 * @param Custom 0 Display Name
 * @desc Set the display name for Custom(0)
 * @default \c[16]Current Experience
 * @parent --Custom Param 0--
 * 
 * @param Custom 0 References
 * @desc Set the reference for the value of Custom(0).
 * Use actor as "a" and specify the reference for the status.
 * @default 
 * @parent --Custom Param 0--
 * 
 * @param Custom 0 Unit
 * @desc Set the unit for Custom(0).
 * @default 
 * @parent --Custom Param 0--
 * 
 * @param --Custom Param 1--
 * @default
 * @parent customParam
 * 
 * @param Custom 1 Display Name
 * @desc Set the display name for Custom(1)
 * @default 
 * @parent --Custom Param 1--
 * 
 * @param Custom 1 References
 * @desc Set the reference for the value of Custom(1).
 * Use actor as "a" and specify the reference for the status.
 * @default a.currentExp()
 * @parent --Custom Param 1--
 * 
 * @param Custom 1 Unit
 * @desc Set the unit for Custom(1).
 * @default 
 * @parent --Custom Param 1--
 * 
 * @param --Custom Param 2--
 * @default
 * @parent customParam
 * 
 * @param Custom 2 Display Name
 * @desc Set the display name for Custom(2)
 * @default \c[16]Next Level
 * @parent --Custom Param 2--
 * 
 * @param Custom 2 References
 * @desc Set the reference for the value of Custom(2).
 * Use actor as "a" and specify the reference for the status.
 * @default 
 * @parent --Custom Param 2--
 * 
 * @param Custom 2 Unit
 * @desc Set the unit for Custom(2).
 * @default 
 * @parent --Custom Param 2--
 * 
 * @param --Custom Param 3--
 * @default
 * @parent customParam
 * 
 * @param Custom 3 Display Name
 * @desc Set the display name for Custom(3)
 * @default 
 * @parent --Custom Param 3--
 * 
 * @param Custom 3 References
 * @desc Set the reference for the value of Custom(3).
 * Use actor as "a" and specify the reference for the status.
 * @default a.nextRequiredExp()
 * @parent --Custom Param 3--
 * 
 * @param Custom 3 Unit
 * @desc Set the unit for Custom(3).
 * @default 
 * @parent --Custom Param 3--
 * 
 * @param --Custom Param 4--
 * @default
 * @parent customParam
 * 
 * @param Custom 4 Display Name
 * @desc Set the display name for Custom(4)
 * @default 
 * @parent --Custom Param 4--
 * 
 * @param Custom 4 References
 * @desc Set the reference for the value of Custom(4).
 * Use actor as "a" and specify the reference for the status.
 * @default 
 * @parent --Custom Param 4--
 * 
 * @param Custom 4 Unit
 * @desc Set the unit for Custom(4).
 * @default 
 * @parent --Custom Param 4--
 * 
 * @param --Custom Param 5--
 * @default 
 * @parent customParam
 * 
 * @param Custom 5 Display Name
 * @desc Set the display name for Custom(5)
 * @default 
 * @parent --Custom Param 5--
 * 
 * @param Custom 5 References
 * @desc Set the reference for the value of Custom(5).
 * Use actor as "a" and specify the reference for the status.
 * @default 
 * @parent --Custom Param 5--
 * 
 * @param Custom 5 Unit
 * @desc Set the unit for Custom(5).
 * @default 
 * @parent --Custom Param 5--
 *
 * @param --Custom Param 6--
 * @default 
 * @parent customParam
 * 
 * @param Custom 6 Display Name
 * @desc Set the display name for Custom(6)
 * @default 
 * @parent --Custom Param 6--
 * 
 * @param Custom 6 References
 * @desc Set the reference for the value of Custom(6).
 * Use the actor as 'a' and specify the reference to the stat.
 * @default 
 * @parent --Custom Param 6--
 * 
 * @param Custom 6 Unit
 * @desc Set the unit for Custom(6).
 * @default 
 * @parent --Custom Param 6--
 * 
 * @param --Custom Param 7--
 * @default 
 * @parent customParam
 * 
 * @param Custom 7 Display Name
 * @desc Set the display name for Custom(7)
 * @default 
 * @parent --Custom Param 7--
 * 
 * @param Custom 7 References
 * @desc Set the reference for the value of Custom(7).
 * Use the actor as 'a' and specify the reference to the stat.
 * @default 
 * @parent --Custom Param 7--
 * 
 * @param Custom 7 Unit
 * @desc Set the unit for Custom(7).
 * @default 
 * @parent --Custom Param 7--
 * 
 * @param --Custom Param 8--
 * @default
 * @parent customParam
 * 
 * @param Custom 8 Display Name
 * @desc Set the display name for Custom(8)
 * @default 
 * @parent --Custom Param 8--
 * 
 * @param Custom 8 References
 * @desc Set the reference for the value of Custom(8).
 * Use the actor as 'a' and specify the reference to the stat.
 * @default 
 * @parent --Custom Param 8--
 * 
 * @param Custom 8 Unit
 * @desc Set the unit for Custom(8).
 * @default 
 * @parent --Custom Param 8--
 * 
 * @param --Custom Param 9--
 * @default
 * @parent customParam
 * 
 * @param Custom 9 Display Name
 * @desc Set the display name for Custom(9)
 * @default 
 * @parent --Custom Param 9--
 * 
 * @param Custom 9 References
 * @desc Set the reference for the value of Custom(9).
 * Use the actor as 'a' and specify the reference to the stat.
 * @default 
 * @parent --Custom Param 9--
 * 
 * @param Custom 9 Unit
 * @desc Set the unit for Custom(9).
 * @default 
 * @parent --Custom Param 9--
 * 
 * @param --Custom Param 10--
 * @default
 * @parent customParam
 * 
 * @param Custom 10 Display Name
 * @desc Set the display name for Custom(10)
 * @default 
 * @parent --Custom Param 10--
 * 
 * @param Custom 10 References
 * @desc Set the reference for the value of Custom(10).
 * Use the actor as 'a' and specify the reference to the stat.
 * @default 
 * @parent --Custom Param 10--
 * 
 * @param Custom 10 Unit
 * @desc Set the unit for Custom(10).
 * @default 
 * @parent --Custom Param 10--
 * 
 * @param --Custom Param 11--
 * @default
 * @parent customParam
 * 
 * @param Custom 11 Display Name
 * @desc Set the display name for Custom(11)
 * @default 
 * @parent --Custom Param 11--
 * 
 * @param Custom 11 References
 * @desc Set the reference for the value of Custom(11).
 * Use the actor as 'a' and specify the reference to the stat.
 * @default 
 * @parent --Custom Param 11--
 * 
 * @param Custom 11 Unit
 * @desc Set the unit for Custom(11).
 * @default 
 * @parent --Custom Param 11--
 * 
 * @param --Custom Param 12--
 * @default
 * @parent customParam
 * 
 * @param Custom 12 Display Name
 * @desc Set the display name for Custom(12)
 * @default 
 * @parent --Custom Param 12--
 * 
 * @param Custom 12 References
 * @desc Set the reference for the value of Custom(12).
 * Use the actor as 'a' and specify the reference to the stat.
 * @default 
 * @parent --Custom Param 12--
 * 
 * @param Custom 12 Unit
 * @desc Set the unit for Custom(12).
 * @default 
 * @parent --Custom Param 12--
 * 
 * @param --Custom Param 13--
 * @default
 * @parent customParam
 * 
 * @param Custom 13 Display Name
 * @desc Set the display name for Custom(13)
 * @default 
 * @parent --Custom Param 13--
 * 
 * @param Custom 13 References
 * @desc Set the reference for the value of Custom(13).
 * Use the actor as 'a' and specify the reference to the stat.
 * @default 
 * @parent --Custom Param 13--
 * 
 * @param Custom 13 Unit
 * @desc Set the unit for Custom(13).
 * @default 
 * @parent --Custom Param 13--
 * 
 * @param --Custom Param 14--
 * @default
 * @parent customParam
 * 
 * @param Custom 14 Display Name
 * @desc Set the display name for Custom(14)
 * @default 
 * @parent --Custom Param 14--
 * 
 * @param Custom 14 References
 * @desc Set the reference for the value of Custom(14).
 * Use the actor as 'a' and specify the reference to the stat.
 * @default 
 * @parent --Custom Param 14--
 * 
 * @param Custom 14 Unit
 * @desc Set the unit for Custom(14).
 * @default 
 * @parent --Custom Param 14--
 * 
 * @param --Custom Param 15--
 * @default
 * @parent customParam
 * 
 * @param Custom 15 Display Name
 * @desc Set the display name for Custom(15)
 * @default 
 * @parent --Custom Param 15--
 * 
 * @param Custom 15 References
 * @desc Set the reference for the value of Custom(15).
 * Use the actor as 'a' and specify the reference to the stat.
 * @default 
 * @parent --Custom Param 15--
 * 
 * @param Custom 15 Unit
 * @desc Set the unit for Custom(15).
 * @default 
 * @parent --Custom Param 15--
 * 
 * @param --Custom Param 16--
 * @default
 * @parent customParam
 * 
 * @param Custom 16 Display Name
 * @desc Set the display name for Custom(16)
 * @default 
 * @parent --Custom Param 16--
 * 
 * @param Custom 16 References
 * @desc Set the reference for the value of Custom(16).
 * Use the actor as 'a' and specify the reference to the stat.
 * @default 
 * @parent --Custom Param 16--
 * 
 * @param Custom 16 Unit
 * @desc Set the unit for Custom(16).
 * @default 
 * @parent --Custom Param 16--
 * 
 * @param --Custom Param 17--
 * @default
 * @parent customParam
 * 
 * @param Custom 17 Display Name
 * @desc Set the display name for Custom(17)
 * @default 
 * @parent --Custom Param 17--
 * 
 * @param Custom 17 References
 * @desc Set the reference for the value of Custom(17).
 * Use the actor as 'a' and specify the reference to the stat.
 * @default 
 * @parent --Custom Param 17--
 * 
 * @param Custom 17 Unit
 * @desc Set the unit for Custom(17).
 * @default 
 * @parent --Custom Param 17--
 * 
 * @param --Custom Param 18--
 * @default
 * @parent customParam
 * 
 * @param Custom 18 Display Name
 * @desc Set the display name for Custom(18)
 * @default 
 * @parent --Custom Param 18--
 * 
 * @param Custom 18 References
 * @desc Set the reference for the value of Custom(18).
 * Use the actor as 'a' and specify the reference to the stat.
 * @default 
 * @parent --Custom Param 18--
 * 
 * @param Custom 18 Unit
 * @desc Set the unit for Custom(18).
 * @default 
 * @parent --Custom Param 18--
 * 
 * @param --Custom Param 19--
 * @default
 * @parent customParam
 * 
 * @param Custom 19 Display Name
 * @desc Set the display name for Custom(19)
 * @default 
 * @parent --Custom Param 19--
 * 
 * @param Custom 19 References
 * @desc Set the reference for the value of Custom(19).
 * Use the actor as 'a' and specify the reference to the stat.
 * @default 
 * @parent --Custom Param 19--
 * 
 * @param Custom 19 Unit
 * @desc Set the unit for Custom(19).
 * @default 
 * @parent --Custom Param 19--
 * 
 * @param customGauge
 * @text --Custom Gauge Settings--
 * 
 * @param Gauge Param Digit
 * @desc Set the number of digits for displaying the current value and maximum value.
 * @default 4
 * @parent customGauge
 * 
 * @param --Gauge Param 0--
 * @default
 * @parent customGauge
 * 
 * @param Gauge 0 Display Name
 * @desc Sets the display name for Gauge(0).
 * @default \C[16]EXP
 * @parent --Gauge Param 0--
 * 
 * @param Gauge 0 References
 * @desc Sets the reference for the value displayed in Gauge(0).
 * Use 'a' to represent the actor and specify the status reference.
 * @default 
 * @parent --Gauge Param 0--
 * 
 * @param Gauge 0 Current
 * @desc Sets the reference for the current value of Gauge(0).
 * Use 'a' to represent the actor and specify the status reference.
 * @default a.isMaxLevel() ? '--------' : a.currentExp()
 * @parent --Gauge Param 0--
 * 
 * @param Gauge 0 Max
 * @desc Sets the reference for the maximum value of Gauge(0).
 * Use 'a' to represent the actor and specify the status reference.
 * @default a.isMaxLevel() ? '--------' : a.nextLevelExp()
 * @parent --Gauge Param 0--
 * 
 * @param Gauge 0 Color1
 * @desc Sets color 1 for Gauge(0).
 * @default 17
 * @parent --Gauge Param 0--
 * 
 * @param Gauge 0 Color2
 * @desc Sets color 2 for Gauge(0).
 * @default 6
 * @parent --Gauge Param 0--
 * 
 * @param --Gauge Param 1--
 * @default
 * @parent customGauge
 * 
 * @param Gauge 1 Display Name
 * @desc Sets the display name for Gauge(1).
 * @default 
 * @parent --Gauge Param 1--
 * 
 * @param Gauge 1 References
 * @desc Sets the reference for the value displayed in Gauge(1).
 * Use 'a' to represent the actor and specify the status reference.
 * @default 
 * @parent --Gauge Param 1--
 * 
 * @param Gauge 1 Current
 * @desc Sets the reference for the current value of Gauge(1).
 * Use 'a' to represent the actor and specify the status reference.
 * @default 
 * @parent --Gauge Param 1--
 * 
 * @param Gauge 1 Max
 * @desc Sets the reference for the maximum value of Gauge(1).
 * Use 'a' to represent the actor and specify the status reference.
 * @default 
 * @parent --Gauge Param 1--
 * 
 * @param Gauge 1 Color1
 * @desc Sets color 1 for Gauge(1).
 * @default 
 * @parent --Gauge Param 1--
 * 
 * @param Gauge 1 Color2
 * @desc Sets color 2 for Gauge(1).
 * @default 
 * @parent --Gauge Param 1--
 * 
 * @param --Gauge Param 2--
 * @default
 * @parent customGauge
 * 
 * @param Gauge 2 Display Name
 * @desc Sets the display name for Gauge(2).
 * @default 
 * @parent --Gauge Param 2--
 * 
 * @param Gauge 2 References
 * @desc Sets the reference for the value displayed in Gauge(2).
 * Use 'a' to represent the actor and specify the status reference.
 * @default 
 * @parent --Gauge Param 2--
 * 
 * @param Gauge 2 Current
 * @desc Sets the reference for the current value of Gauge(2).
 * Use 'a' to represent the actor and specify the status reference.
 * @default 
 * @parent --Gauge Param 2--
 * 
 * @param Gauge 2 Max
 * @desc Sets the reference for the maximum value of Gauge(2).
 * Use 'a' to represent the actor and specify the status reference.
 * @default 
 * @parent --Gauge Param 2--
 * 
 * @param Gauge 2 Color1
 * @desc Sets color 1 for Gauge(2).
 * @default 
 * @parent --Gauge Param 2--
 * 
 * @param Gauge 2 Color2
 * @desc Sets color 2 for Gauge(2).
 * @default 
 * @parent --Gauge Param 2--
 * 
 * @param --Gauge Param 3--
 * @default
 * @parent customGauge
 * 
 * @param Gauge 3 Display Name
 * @desc Sets the display name for Gauge(3).
 * @default 
 * @parent --Gauge Param 3--
 * 
 * @param Gauge 3 References
 * @desc Sets the reference for the value displayed in Gauge(3).
 * Use 'a' to represent the actor and specify the status reference.
 * @default 
 * @parent --Gauge Param 3--
 * 
 * @param Gauge 3 Current
 * @desc Sets the reference for the current value of Gauge(3).
 * Use 'a' to represent the actor and specify the status reference.
 * @default 
 * @parent --Gauge Param 3--
 * 
 * @param Gauge 3 Max
 * @desc Sets the reference for the maximum value of Gauge(3).
 * Use 'a' to represent the actor and specify the status reference.
 * @default 
 * @parent --Gauge Param 3--
 * 
 * @param Gauge 3 Color1
 * @desc Sets color 1 for Gauge(3).
 * @default 
 * @parent --Gauge Param 3--
 * 
 * @param Gauge 3 Color2
 * @desc Sets color 2 for Gauge(3).
 * @default 
 * @parent --Gauge Param 3--
 * 
 * @param --Gauge Param 4--
 * @default
 * @parent customGauge
 * 
 * @param Gauge 4 Display Name
 * @desc Sets the display name for Gauge(4).
 * @default 
 * @parent --Gauge Param 4--
 * 
 * @param Gauge 4 References
 * @desc Sets the reference for the value displayed in Gauge(4).
 * Use 'a' to represent the actor and specify the status reference.
 * @default 
 * @parent --Gauge Param 4--
 * 
 * @param Gauge 4 Current
 * @desc Sets the reference for the current value of Gauge(4).
 * Use 'a' to represent the actor and specify the status reference.
 * @default 
 * @parent --Gauge Param 4--
 * 
 * @param Gauge 4 Max
 * @desc Sets the reference for the maximum value of Gauge(4).
 * Use 'a' to represent the actor and specify the status reference.
 * @default 
 * @parent --Gauge Param 4--
 * 
 * @param Gauge 4 Color1
 * @desc Sets color 1 for Gauge(4).
 * @default 
 * @parent --Gauge Param 4--
 * 
 * @param Gauge 4 Color2
 * @desc Sets color 2 for Gauge(4).
 * @default 
 * @parent --Gauge Param 4--
 * 
 * @param --Gauge Param 5--
 * @default
 * @parent customGauge
 * 
 * @param Gauge 5 Display Name
 * @desc Sets the display name for Gauge(5).
 * @default 
 * @parent --Gauge Param 5--
 * 
 * @param Gauge 5 References
 * @desc Sets the reference for the value displayed in Gauge(5).
 * Use 'a' to represent the actor and specify the status reference.
 * @default 
 * @parent --Gauge Param 5--
 * 
 * @param Gauge 5 Current
 * @desc Sets the reference for the current value of Gauge(5).
 * Use 'a' to represent the actor and specify the status reference.
 * @default 
 * @parent --Gauge Param 5--
 * 
 * @param Gauge 5 Max
 * @desc Sets the reference for the maximum value of Gauge(5).
 * Use 'a' to represent the actor and specify the status reference.
 * @default 
 * @parent --Gauge Param 5--
 * 
 * @param Gauge 5 Color1
 * @desc Sets color 1 for Gauge(5).
 * @default 
 * @parent --Gauge Param 5--
 * 
 * @param Gauge 5 Color2
 * @desc Sets color 2 for Gauge(5).
 * @default 
 * @parent --Gauge Param 5--
 * 
 * @param --Gauge Param 6--
 * @default
 * @parent customGauge
 * 
 * @param Gauge 6 Display Name
 * @desc Sets the display name for Gauge(6).
 * @default 
 * @parent --Gauge Param 6--
 * 
 * @param Gauge 6 References
 * @desc Sets the reference for the value displayed in Gauge(6).
 * Use 'a' to represent the actor and specify the status reference.
 * @default 
 * @parent --Gauge Param 6--
 * 
 * @param Gauge 6 Current
 * @desc Sets the reference for the current value of Gauge(6).
 * Use 'a' to represent the actor and specify the status reference.
 * @default 
 * @parent --Gauge Param 6--
 * 
 * @param Gauge 6 Max
 * @desc Sets the reference for the maximum value of Gauge(6).
 * Use 'a' to represent the actor and specify the status reference.
 * @default 
 * @parent --Gauge Param 6--
 * 
 * @param Gauge 6 Color1
 * @desc Sets color 1 for Gauge(6).
 * @default 
 * @parent --Gauge Param 6--
 * 
 * @param Gauge 6 Color2
 * @desc Sets color 2 for Gauge(6).
 * @default 
 * @parent --Gauge Param 6--
 * 
 * @param --Gauge Param 7--
 * @default
 * @parent customGauge
 * 
 * @param Gauge 7 Display Name
 * @desc Sets the display name for Gauge(7).
 * @default 
 * @parent --Gauge Param 7--
 * 
 * @param Gauge 7 References
 * @desc Sets the reference for the value displayed in Gauge(7).
 * Use 'a' to represent the actor and specify the status reference.
 * @default 
 * @parent --Gauge Param 7--
 * 
 * @param Gauge 7 Current
 * @desc Sets the reference for the current value of Gauge(7).
 * Use 'a' to represent the actor and specify the status reference.
 * @default 
 * @parent --Gauge Param 7--
 * 
 * @param Gauge 7 Max
 * @desc Sets the reference for the maximum value of Gauge(7).
 * Use 'a' to represent the actor and specify the status reference.
 * @default 
 * @parent --Gauge Param 7--
 * 
 * @param Gauge 7 Color1
 * @desc Sets color 1 for Gauge(7).
 * @default 
 * @parent --Gauge Param 7--
 * 
 * @param Gauge 7 Color2
 * @desc Sets color 2 for Gauge(7).
 * @default 
 * @parent --Gauge Param 7--
 * 
 * @param --Gauge Param 8--
 * @default
 * @parent customGauge
 * 
 * @param Gauge 8 Display Name
 * @desc Sets the display name for Gauge(8).
 * @default 
 * @parent --Gauge Param 8--
 * 
 * @param Gauge 8 References
 * @desc Sets the reference for the value displayed in Gauge(8).
 * Use 'a' to represent the actor and specify the status reference.
 * @default 
 * @parent --Gauge Param 8--
 * 
 * @param Gauge 8 Current
 * @desc Sets the reference for the current value of Gauge(8).
 * Use 'a' to represent the actor and specify the status reference.
 * @default 
 * @parent --Gauge Param 8--
 * 
 * @param Gauge 8 Max
 * @desc Sets the reference for the maximum value of Gauge(8).
 * Use 'a' to represent the actor and specify the status reference.
 * @default 
 * @parent --Gauge Param 8--
 * 
 * @param Gauge 8 Color1
 * @desc Sets color 1 for Gauge(8).
 * @default 
 * @parent --Gauge Param 8--
 * 
 * @param Gauge 8 Color2
 * @desc Sets color 2 for Gauge(8).
 * @default 
 * @parent --Gauge Param 8--
 * 
 * @param --Gauge Param 9--
 * @default
 * @parent customGauge
 * 
 * @param Gauge 9 Display Name
 * @desc Sets the display name for Gauge(9).
 * @default 
 * @parent --Gauge Param 9--
 * 
 * @param Gauge 9 References
 * @desc Sets the reference for the value displayed in Gauge(9).
 * Use 'a' to represent the actor and specify the status reference.
 * @default 
 * @parent --Gauge Param 9--
 * 
 * @param Gauge 9 Current
 * @desc Sets the reference for the current value of Gauge(9).
 * Use 'a' to represent the actor and specify the status reference.
 * @default 
 * @parent --Gauge Param 9--
 * 
 * @param Gauge 9 Max
 * @desc Sets the reference for the maximum value of Gauge(9).
 * Use 'a' to represent the actor and specify the status reference.
 * @default 
 * @parent --Gauge Param 9--
 * 
 * @param Gauge 9 Color1
 * @desc Sets color 1 for Gauge(9).
 * @default 
 * @parent --Gauge Param 9--
 * 
 * @param Gauge 9 Color2
 * @desc Sets color 2 for Gauge(9).
 * @default 
 * @parent --Gauge Param 9--
 * 
 * @param paramName
 * @text --Display Name Settings--
 * 
 * @param XPARAM Name
 * @desc Sets the display name for additional parameters.
 * @type struct<xparam>
 * @default {"hit":"Hit Rate","eva":"Evasion Rate","cri":"Critical Rate","cev":"Critical Evasion Rate","mev":"Magic Evasion Rate","mrf":"Magic Reflection Rate","cnt":"Counter Rate","hrg":"HP Regeneration Rate","mrg":"MP Regeneration Rate","trg":"TP Regeneration Rate"}
 * @parent paramName
 * 
 * @param SPARAM Name
 * @desc Sets the display name for special parameters.
 * @type struct<sparam>
 * @default {"tgr":"Target Rate","grd":"Guard Effect Rate","rec":"Recovery Effect Rate","pha":"Pharmacy Knowledge","mcr":"MP Cost Rate","tcr":"TP Charge Rate","pdr":"Physical Damage Rate","mdr":"Magic Damage Rate","fdr":"Floor Damage Rate","exr":"EXP Gain Rate"}
 * @parent paramName
 * 
 * @help
 * -----------------------------------------------------------------------------
 * Overview
 * -----------------------------------------------------------------------------
 * This plugin implements a feature that allows for more detailed customization
 * of actor status display layouts.
 * 
 * By combining this plugin with its extension plugins (FTKR_CSS_***.js),
 * you can set up various status screens such as the menu screen or battle screen.
 * 
 * For the display position specification method for each status adopted from
 * version v3.0.0 of this plugin, please use version v2.0.0 or later of the
 * extension plugin.
 * *Note: The previous method is still available in the v1 extension plugin.
 * 
 * To use this plugin, please refer to the online manual below:
 * https://github.com/leo7oo/RPGMaker/blob/master/FTKR_CustomSimpleActorStatus.md
 * 
 * -----------------------------------------------------------------------------
 * Setup Instructions
 * -----------------------------------------------------------------------------
 * 1. Add this plugin in the "Plugin Manager" (Plugin Management).
 * 
 * 2. When using in combination with an extension plugin (FTKR_CSS_***.js),
 *    ensure that this plugin is placed above the extension plugin.
 * 
 * 3. When combining with GraphicalDesignMode.js, place this plugin below it.
 * 
 * 4. No plugin parameters are required to use this plugin.
 * 
 * -----------------------------------------------------------------------------
 * License Information for this Plugin
 * -----------------------------------------------------------------------------
 * This plugin is released under the MIT License.
 * 
 * Copyright (c) 2017,2018 Futokoro
 * http://opensource.org/licenses/mit-license.php
 * 
 * Plugin Repository:
 * https://github.com/futokoro/RPGMaker/blob/master/README.md
 * 
 * -----------------------------------------------------------------------------
*/

/* ja:
 * -----------------------------------------------------------------------------
 * Changelog
 * -----------------------------------------------------------------------------
 * 
 * v3.5.3 - 2019/05/12 : Feature Added
 *    1. Added code (numItem) to display the number of items owned.
 *    2. Added a dedicated process for shop screen to the equipment display code (equip(%1)).
 * 
 * v3.5.2 - 2019/04/14 : Feature Added
 *    1. Added code to display special abilities (xparam) and additional abilities (sparam).
 * 
 * v3.5.1 - 2019/03/05 : Bug Fixes and Features Added
 *    1. Fixed a bug where the value of "value" in the "statusList" parameter of the extension plugin
 *       was not being correctly read.
 *    2. Added code notequip to display a specific message when the selected equipment cannot be equipped.
 *       *Available in equipment and shop screens.
 * 
 * v3.5.0 - 2018/12/29 : Feature Added
 *    1. Added a plugin command to modify saved window settings.
 * 
 * v3.4.7 - 2018/12/27 : Bug Fixes
 *    1. Fixed bugs in FTKR_CSS_ShopStatus v2.2.2.
 *    2. Addressed an issue where item data images could not be displayed in FTKR_OriginalSceneWindow.
 * 
 * v3.4.6 - 2018/12/15 : Bug Fixes (Optimization)
 *    1. Reviewed display processing for custom parameters and custom gauges.
 *    2. Optimized the evaluation process for plugin commands.
 * 
 * v3.4.5 - 2018/12/13 : Bug Fixes (Optimization)
 *    1. Reviewed the evaluation process for parameters in the form code(x), where eval() was always used.
 * 
 * v3.4.4 - 2018/12/02 : Bug Fix
 *    1. Fixed a bug where specifying a non-existent image ID for custom images caused an error.
 * 
 * v3.4.3 - 2018/11/03 : Specification Change
 *    1. Independent configuration of the display content for ediff(x), aopdiff(x), ediffaop(x) from pdiff(x).
 * 
 * v3.4.2 - 2018/10/28 : Bug Fix
 *    1. Fixed a bug where original parameters and original gauges were not displayed correctly in certain scenes.
 * 
 * v3.4.1 - 2018/10/11 : Features Added, Specification Changed
 *    1. Added a feature to disable control characters in differential parameter displays.
 *    2. Changed the display to hide when a differential parameter is 0.
 * 
 * v3.4.0 - 2018/10/10 : Feature Added
 *    1. Moved the ediff(x) and ediffaop(x) codes from FTKR_CSS_ShopStatus.
 * 
 * v3.3.4 - 2018/09/28 : Feature Added
 *    1. Added AOP parameter display codes to status codes.
 * 
 * v3.3.3 - 2018/09/28 : Feature Added
 *    1. Added parameter display codes to status codes.
 * 
 * v3.3.2 - 2018/09/19 : Feature Added
 *    1. Added item display codes to status codes.
 * 
 * v3.3.1 - 2018/09/19 : Bug Fix
 *    1. Fixed a bug where state icons were not displayed when the actor was incapacitated.
 * 
 * v3.3.0 - 2018/09/15 : Feature Added
 *    1. Added item display codes to status codes.
 *    2. Added a feature to set the spacing between status icons.
 *    3. Changed so that at least one status icon is displayed, even when space is insufficient.
 *    4. When Enable Auto Scale is enabled in plugin parameters, icons will adjust size even when the display width is small.
 * 
 * v3.2.0 - 2018/09/11 : Fixed descriptions for FTKR_GDM_WindowEditor.js.
 * 
 * v3.1.1 - 2018/09/09 : Removed code for GraphicalDesignMode.js.
 * 
 * v3.1.0 - 2018/08/30 : Feature Added
 *    1. Added a feature to select displayed statuses as a list in the extension plugin's parameters.
 * 
 * v3.0.2 - 2018/08/25 : Bug Fix
 *    1. Fixed a bug where setting the margin and background transparency to 0 in the extension plugin rendered the settings invalid.
 * 
 * v3.0.1 - 2018/08/20 : Bug Fix
 *    1. Fixed a bug where an error occurred when enabling status window settings in the extension plugin.
 * 
 * v3.0.0 - 2018/08/19 : Specification Change
 *    1. Adopted the method of specifying display positions for each status in status and parameter input.
 *    2. Fixed for FTKR_GDM_WindowEditor support.
 *    3. Reduced help documentation.
 *    4. Added a feature to adjust the size of facial images.
 *    5. Moved the integration with GraphicalDesignMode.js to FTKR_GDM_Editor.
 * 
 * v2.7.2 - 2018/08/18 : Bug Fix
 *    1. Fixed an issue where state icons were not displayed when using the extension plugin.
 * 
 * v2.7.1 - 2018/08/17 : Bug Fix
 *    1. Fixed an issue where state icons were displayed even if the status window was hidden in the battle scene.
 * 
 * v2.7.0 - 2018/03/17 : Feature Added
 *    1. Added a plugin command to change custom images in-game.
 * 
 * v2.6.3 - 2018/03/12 : Process Change
 *    1. Made the transparency check for facial and custom images into a separate function.
 *    2. Added exception handling for cases where an actor is not set.
 * 
 * v2.6.2 - 2018/03/11 : Bug Fix
 *    1. Fixed a bug where codes set in square brackets were not displayed correctly.
 *    2. Fixed a bug where the state icon display was not updated when the state code was changed in design mode.
 * 
 * v2.6.1 - 2018/01/07 : Process Change
 *    1. Made the X-axis alignment of facial images, walking characters, and SV characters into a separate function.
 * 
 * v2.6.0 - 2017/11/18 : Feature Added
 *    1. Added processing for FTKR_CSS_***Status extension plugins to support GraphicalDesignMode.js.
 * 
 * v2.5.1 - 2017/11/08 : Bug Fix
 *    1. Fixed a bug where an error occurred when a window generated by FTKR_OriginalSceneWindow.js existed at the start of a scene.
 * 
 * v2.5.0 - 2017/11/08 : Feature Added
 *    1. Added a code to display horizontal lines ("line").
 *    2. Added a feature to change layouts in-game using GraphicalDesignMode.js and FTKR_CSS_GDM.js.
 * 
 * v2.4.3 - 2017/11/02 : Bug Fix
 *    1. Fixed a bug where parameter settings were not applied in certain cases when using the extension plugin.
 * 
 * v2.4.2 - 2017/10/23 : Bug Fix
 *    1. Fixed a bug where the value of the "name" argument in "customStatusWindow" was not displayed correctly.
 * 
 * v2.4.1 - 2017/10/20 : Feature Added
 *    1. Added code to display the name of the actor.
 * 
 * v2.4.0 - 2017/10/15 : Feature Added
 *    1. Added code to customize facial image size and alignment.
 * 
 * v2.3.0 - 2017/10/14 : Feature Added
 *    1. Added a feature to support original design mode (FTKR_GDM_WindowEditor).
 * 
 * v2.2.0 - 2017/10/12 : Feature Added
 *    1. Added features to display custom parameters and gauges for status.
 * 
 * v2.1.0 - 2017/10/09 : Feature Added
 *    1. Added support for custom parameters in the status display.
 * 
 * v2.0.0 - 2017/10/06 : Feature Added
 *    1. Added an extension plugin to customize the status display for actors.
 * 
 * v1.0.0 - 2017/09/30 : Feature Added
 *    1. Initial release
 * 
 * -----------------------------------------------------------------------------
 */
// =============================================================================
/*~struct~status:
 * @param text
 * @desc Select the status to display
 * If not in the list, you can directly write it as text
 * @default 
 * @type select
 * @option Name
 * @value name
 * @option Nickname
 * @value nickname
 * @option Class
 * @value class
 * @option Level
 * @value level
 * @option HP
 * @value hp
 * @option MP
 * @value mp
 * @option TP
 * @value tp
 * @option Face Image
 * @value face
 * @option Face Image (with size)
 * @value face(%1)
 * @option Character Image
 * @value chara
 * @option SV Battle Character Image
 * @value sv
 * @option State (horizontal)
 * @value state
 * @option State (vertical)
 * @value state2(%1)
 * @option Profile
 * @value profile
 * @option Base Stats
 * @value param(%1)
 * @option Base Stats (raw)
 * @value pbase(%1)
 * @option Base Stats (increase)
 * @value pdiff(%1)
 * @option Additional Stats
 * @value xparam(%1)
 * @option Special Stats
 * @value sparam(%1)
 * @option Equipment
 * @value equip(%1)
 * @option Equipment Base Stats
 * @value eparam(%1)
 * @option Equipment Additional Stats
 * @value exparam(%1)
 * @option Equipment Special Stats
 * @value esparam(%1)
 * @option Equipment Base Stat Difference
 * @value ediff(%1)
 * @option Equipment Additional Stat Difference
 * @value exdiff(%1)
 * @option Equipment Special Stat Difference
 * @value esdiff(%1)
 * @option Equipment Unavailable Display
 * @value notequip(%1)
 * @option Custom Parameters
 * @value custom(%1)
 * @option Custom Gauges
 * @value gauge(%1)
 * @option Actor-Specific Custom Gauges
 * @value agauge(%1)
 * @option Class-Specific Custom Gauges
 * @value cgauge(%1)
 * @option Custom Image
 * @value image
 * @option Custom Image (Registered ID)
 * @value image(%1)
 * @option Message
 * @value message
 * @option Text
 * @value text(%1)
 * @option JS Calculation (numeric display)
 * @value eval(%1)
 * @option JS Calculation (string display)
 * @value streval(%1)
 * @option Horizontal Line
 * @value line
 * @option AOP Stats
 * @value aop(%1)
 * @option AOP Stats (raw)
 * @value aopbase(%1)
 * @option AOP Stats (increase)
 * @value aopdiff(%1)
 * @option AOP Equipment Parameters
 * @value eaop(%1)
 * @option AOP Equipment Parameter Difference
 * @value ediffaop(%1)
 * @option Item Name
 * @value iname
 * @option Item Icon
 * @value iicon
 * @option Item Description
 * @value idesc
 * @option Item Type
 * @value itype
 * @option Item Equipment Type
 * @value ietype
 * @option Item Range
 * @value iscope
 * @option Item Element
 * @value ielement
 * @option Item Settings Details
 * @value iparam(%1)
 * @option Item Custom Image
 * @value iimage(%1)
 * @option Item Quantity
 * @value inumber
 * @option Map Name
 * @value mapname
 *
 * @param value
 * @desc Enter the content of %1 for the status set in the code(%1) format
 * @default 
 * 
 * @param x
 * @desc X coordinate for display
 * @default 0
 *
 * @param y
 * @desc Y coordinate for display
 * @default 0
 *
 * @param width
 * @desc Width for display
 * @default 0
 *
 */
/*~struct~xparam:
 *
 * @param hit
 * @desc Hit Rate display name
 * @default Hit Rate
 *
 * @param eva
 * @desc Evasion Rate display name
 * @default Evasion Rate
 *
 * @param cri
 * @desc Critical Hit Rate display name
 * @default Critical Hit Rate
 *
 * @param cev
 * @desc Critical Evasion Rate display name
 * @default Critical Evasion Rate
 *
 * @param mev
 * @desc Magic Evasion Rate display name
 * @default Magic Evasion Rate
 *
 * @param mrf
 * @desc Magic Reflection Rate display name
 * @default Magic Reflection Rate
 *
 * @param cnt
 * @desc Counter Rate display name
 * @default Counter Rate
 *
 * @param hrg
 * @desc HP Regeneration Rate display name
 * @default HP Regeneration Rate
 *
 * @param mrg
 * @desc MP Regeneration Rate display name
 * @default MP Regeneration Rate
 *
 * @param trg
 * @desc TP Regeneration Rate display name
 * @default TP Regeneration Rate
 *
 */
/*~struct~sparam:
 *
 * @param tgr
 * @desc Targeted Rate display name
 * @default Targeted Rate
 *
 * @param grd
 * @desc Defense Effect Rate display name
 * @default Defense Effect Rate
 *
 * @param rec
 * @desc Healing Effect Rate display name
 * @default Healing Effect Rate
 *
 * @param pha
 * @desc Knowledge of Medicines display name
 * @default Knowledge of Medicines
 *
 * @param mcr
 * @desc MP Consumption Rate display name
 * @default MP Consumption Rate
 *
 * @param tcr
 * @desc TP Charge Rate display name
 * @default TP Charge Rate
 *
 * @param pdr
 * @desc Physical Damage Rate display name
 * @default Physical Damage Rate
 *
 * @param mdr
 * @desc Magical Damage Rate display name
 * @default Magical Damage Rate
 *
 * @param fdr
 * @desc Floor Damage Rate display name
 * @default Floor Damage Rate
 *
 * @param exr
 * @desc Experience Gain Rate display name
 * @default Experience Gain Rate
 *
 */

(function() {

    var paramParse = function(obj) {
        return JSON.parse(JSON.stringify(obj, paramReplace));
    };

    var paramReplace = function(key, value) {
        try {
            return JSON.parse(value || null);
        } catch (e) {
            return value;
        }
    };

    //=============================================================================
    // Plugin Parameters
    //=============================================================================
    var parameters = PluginManager.parameters('FTKR_CustomSimpleActorStatus');

    // Original Status Object Settings
    FTKR.CSS.cssStatus = {
        face:{
            width:Number(parameters['Face Image Width'] || 0),
            height:Number(parameters['Face Image Height'] || 0),
            posiX:Number(parameters['Face Position X'] || 0),
        },
        chara:{
            width:Number(parameters['Chara Image Width'] || 0),
            height:Number(parameters['Chara Image Height'] || 0),
            posiX:Number(parameters['Chara Position X'] || 0),
            direction:Number(parameters['Chara Direction'] || 0),
        },
        svChara:{
            width:Number(parameters['Sv Image Width'] || 0),
            height:Number(parameters['Sv Image Height'] || 0),
            enable:Number(parameters['Enabled Sv Motion'] || 0),
            motion:String(parameters['Sv Image Motion'] || ''),
            state:Number(parameters['Enabled State Motion'] || 0),
            posiX:Number(parameters['Sv Position X'] || 0),
        },
        state:{
            enable      :Number(parameters['Enable CSS States'] || 0),
            wait        :Number(parameters['Animation Wait'] || 0),
            overlap     :Number(parameters['Enable Overlap'] || 0),
            autoScale   :Number(parameters['Enable Auto Scale'] || 0),
            rate        :Number(parameters['Overlap Rate'] || 0),
            iconPadding :Number(parameters['State Icon Padding'] || 0),
        },
        param:{
            decimals    :paramParse(parameters['Disp Decimals Param']),
        },
        pdiff:{
            plus        :paramParse(parameters['Format PDIFF Plus']),
            minus       :paramParse(parameters['Format PDIFF Minus']),
            enabledEc   :paramParse(parameters['Enabled Escapecharacters By PDIFF']),
        },
        equip:{
            arrow:String(parameters['Equip Right Arrow'] || ''),
        },
        ediff:{
            plus        :paramParse(parameters['Format EDIFF Plus']),
            minus       :paramParse(parameters['Format EDIFF Minus']),
            enabledEc   :paramParse(parameters['Enabled Escapecharacters By EDIFF']),
        },
        aopdiff:{
            plus        :paramParse(parameters['Format AOPDIFF Plus']),
            minus       :paramParse(parameters['Format AOPDIFF Minus']),
            enabledEc   :paramParse(parameters['Enabled Escapecharacters By AOPDIFF']),
        },
        ediffaop:{
            plus        :paramParse(parameters['Format EDIFFAOP Plus']),
            minus       :paramParse(parameters['Format EDIFFAOP Minus']),
            enabledEc   :paramParse(parameters['Enabled Escapecharacters By EDIFFAOP']),
        },
        gauge:{
            digit :Number(parameters['Gauge Param Digit'] || 0),
        },
        image:{
            posiX:Number(parameters['Image Position X'] || 0),
        },
        message:{
            levelUp:String(parameters['Display LevelUp Message'] || ''),
        },
        customs:[
            {name:String(parameters['Custom 0 Display Name'] || ''),
              unit:String(parameters['Custom 0 Unit'] || ''),
              formula:String(parameters['Custom 0 References'] || ''),},
            {name:String(parameters['Custom 1 Display Name'] || ''),
              unit:String(parameters['Custom 1 Unit'] || ''),
              formula:String(parameters['Custom 1 References'] || ''),},
            {name:String(parameters['Custom 2 Display Name'] || ''),
              unit:String(parameters['Custom 2 Unit'] || ''),
              formula:String(parameters['Custom 2 References'] || ''),},
            {name:String(parameters['Custom 3 Display Name'] || ''),
              unit:String(parameters['Custom 3 Unit'] || ''),
              formula:String(parameters['Custom 3 References'] || ''),},
            {name:String(parameters['Custom 4 Display Name'] || ''),
              unit:String(parameters['Custom 4 Unit'] || ''),
              formula:String(parameters['Custom 4 References'] || ''),},
            {name:String(parameters['Custom 5 Display Name'] || ''),
              unit:String(parameters['Custom 5 Unit'] || ''),
              formula:String(parameters['Custom 5 References'] || ''),},
            {name:String(parameters['Custom 6 Display Name'] || ''),
              unit:String(parameters['Custom 6 Unit'] || ''),
              formula:String(parameters['Custom 6 References'] || ''),},
            {name:String(parameters['Custom 7 Display Name'] || ''),
              unit:String(parameters['Custom 7 Unit'] || ''),
              formula:String(parameters['Custom 7 References'] || ''),},
            {name:String(parameters['Custom 8 Display Name'] || ''),
              unit:String(parameters['Custom 8 Unit'] || ''),
              formula:String(parameters['Custom 8 References'] || ''),},
            {name:String(parameters['Custom 9 Display Name'] || ''),
              unit:String(parameters['Custom 9 Unit'] || ''),
              formula:String(parameters['Custom 9 References'] || ''),},
            {name:String(parameters['Custom 10 Display Name'] || ''),
              unit:String(parameters['Custom 10 Unit'] || ''),
              formula:String(parameters['Custom 10 References'] || ''),},
            {name:String(parameters['Custom 11 Display Name'] || ''),
              unit:String(parameters['Custom 11 Unit'] || ''),
              formula:String(parameters['Custom 11 References'] || ''),},
            {name:String(parameters['Custom 12 Display Name'] || ''),
              unit:String(parameters['Custom 12 Unit'] || ''),
              formula:String(parameters['Custom 12 References'] || ''),},
            {name:String(parameters['Custom 13 Display Name'] || ''),
              unit:String(parameters['Custom 13 Unit'] || ''),
              formula:String(parameters['Custom 13 References'] || ''),},
            {name:String(parameters['Custom 14 Display Name'] || ''),
              unit:String(parameters['Custom 14 Unit'] || ''),
              formula:String(parameters['Custom 14 References'] || ''),},
            {name:String(parameters['Custom 15 Display Name'] || ''),
              unit:String(parameters['Custom 15 Unit'] || ''),
              formula:String(parameters['Custom 15 References'] || ''),},
            {name:String(parameters['Custom 16 Display Name'] || ''),
              unit:String(parameters['Custom 16 Unit'] || ''),
              formula:String(parameters['Custom 16 References'] || ''),},
            {name:String(parameters['Custom 17 Display Name'] || ''),
              unit:String(parameters['Custom 17 Unit'] || ''),
              formula:String(parameters['Custom 17 References'] || ''),},
            {name:String(parameters['Custom 18 Display Name'] || ''),
              unit:String(parameters['Custom 18 Unit'] || ''),
              formula:String(parameters['Custom 18 References'] || ''),},
            {name:String(parameters['Custom 19 Display Name'] || ''),
              unit:String(parameters['Custom 19 Unit'] || ''),
              formula:String(parameters['Custom 19 References'] || ''),},
        ],
        gauges:[
            {name:String(parameters['Gauge 0 Display Name'] || ''),
              ref:String(parameters['Gauge 0 References'] || ''),
              current:String(parameters['Gauge 0 Current'] || ''),
              max:String(parameters['Gauge 0 Max'] || ''),
              color1:Number(parameters['Gauge 0 Color1'] || 0),
              color2:Number(parameters['Gauge 0 Color2'] || 0),},
            {name:String(parameters['Gauge 1 Display Name'] || ''),
              ref:String(parameters['Gauge 1 References'] || ''),
              current:String(parameters['Gauge 1 Current'] || ''),
              max:String(parameters['Gauge 1 Max'] || ''),
              color1:Number(parameters['Gauge 1 Color1'] || 0),
              color2:Number(parameters['Gauge 1 Color2'] || 0),},
            {name:String(parameters['Gauge 2 Display Name'] || ''),
              ref:String(parameters['Gauge 2 References'] || ''),
              current:String(parameters['Gauge 2 Current'] || ''),
              max:String(parameters['Gauge 2 Max'] || ''),
              color1:Number(parameters['Gauge 2 Color1'] || 0),
              color2:Number(parameters['Gauge 2 Color2'] || 0),},
            {name:String(parameters['Gauge 3 Display Name'] || ''),
              ref:String(parameters['Gauge 3 References'] || ''),
              current:String(parameters['Gauge 3 Current'] || ''),
              max:String(parameters['Gauge 3 Max'] || ''),
              color1:Number(parameters['Gauge 3 Color1'] || 0),
              color2:Number(parameters['Gauge 3 Color2'] || 0),},
            {name:String(parameters['Gauge 4 Display Name'] || ''),
              ref:String(parameters['Gauge 4 References'] || ''),
              current:String(parameters['Gauge 4 Current'] || ''),
              max:String(parameters['Gauge 4 Max'] || ''),
              color1:Number(parameters['Gauge 4 Color1'] || 0),
              color2:Number(parameters['Gauge 4 Color2'] || 0),},
            {name:String(parameters['Gauge 5 Display Name'] || ''),
              ref:String(parameters['Gauge 5 References'] || ''),
              current:String(parameters['Gauge 5 Current'] || ''),
              max:String(parameters['Gauge 5 Max'] || ''),
              color1:Number(parameters['Gauge 5 Color1'] || 0),
              color2:Number(parameters['Gauge 5 Color2'] || 0),},
            {name:String(parameters['Gauge 6 Display Name'] || ''),
              ref:String(parameters['Gauge 6 References'] || ''),
              current:String(parameters['Gauge 6 Current'] || ''),
              max:String(parameters['Gauge 6 Max'] || ''),
              color1:Number(parameters['Gauge 6 Color1'] || 0),
              color2:Number(parameters['Gauge 6 Color2'] || 0),},
            {name:String(parameters['Gauge 7 Display Name'] || ''),
              ref:String(parameters['Gauge 7 References'] || ''),
              current:String(parameters['Gauge 7 Current'] || ''),
              max:String(parameters['Gauge 7 Max'] || ''),
              color1:Number(parameters['Gauge 7 Color1'] || 0),
              color2:Number(parameters['Gauge 7 Color2'] || 0),},
            {name:String(parameters['Gauge 8 Display Name'] || ''),
              ref:String(parameters['Gauge 8 References'] || ''),
              current:String(parameters['Gauge 8 Current'] || ''),
              max:String(parameters['Gauge 8 Max'] || ''),
              color1:Number(parameters['Gauge 8 Color1'] || 0),
              color2:Number(parameters['Gauge 8 Color2'] || 0),},
            {name:String(parameters['Gauge 9 Display Name'] || ''),
              ref:String(parameters['Gauge 9 References'] || ''),
              current:String(parameters['Gauge 9 Current'] || ''),
              max:String(parameters['Gauge 9 Max'] || ''),
              color1:Number(parameters['Gauge 9 Color1'] || 0),
              color2:Number(parameters['Gauge 9 Color2'] || 0),},
        ],
    };

    var xparamName = paramParse(parameters['XPARAM Name']);
    if (xparamName) {
        FTKR.CSS.cssStatus.xparam = Object.entries(xparamName).map(function(obj){return obj[1];});
    } else {
        console.error('The plugin parameter XPARAM Name has not been set.');
        return;
    }
    var sparamName = paramParse(parameters['SPARAM Name']);
    if (sparamName) {
        FTKR.CSS.cssStatus.sparam = Object.entries(sparamName).map(function(obj){return obj[1];});
    } else {
        console.error('The plugin parameter SPARAM Name has not been set.');
        return;
    }

    // Shadow image height for SV battle characters
    Window_Base.SV_SHADOW_HEIGHT = 48;

    //=============================================================================
    // Custom Function (Global)
    //=============================================================================

    FTKR.gameData = FTKR.gameData || {
        user   :null,
        target :null,
        item   :null,
        number :0,
    };

    if (!FTKR.setGameData) {
    FTKR.setGameData = function(user, target, item, number) {
        FTKR.gameData = {
            user   :user || null,
            target :target || null,
            item   :item || null,
            number :number || 0
        };
    };
    }

    if (!FTKR.evalFormula) {
    FTKR.evalFormula = function(formula) {
        var datas = FTKR.gameData;
        try {
            var s = $gameSwitches._data;
            var v = $gameVariables._data;
            var a = datas.user;
            var b = datas.target;
            var item   = datas.item;
            var number = datas.number;
            if (b) var result = b.result();
            var value = eval(formula);
            if (isNaN(value)) value = 0;
            return value;
        } catch (e) {
            console.error(e);
            return 0;
        }
    };
    }

    if (!FTKR.evalStrFormula) {
    FTKR.evalStrFormula = function(formula) {
        var datas = FTKR.gameData;
        try {
            var s = $gameSwitches._data;
            var v = $gameVariables._data;
            var a = datas.user;
            var b = datas.target;
            var item   = datas.item;
            var number = datas.number;
            if (b) var result = b.result();
            var value = eval(formula);
            return value;
        } catch (e) {
            return formula;
        }
    };
    }

    //=============================================================================
    // Custom Process
    //=============================================================================

    // Read metadata in the format of <codeTitle:id>text</codeTitle> and return {id, text}
    var readEntrapmentCodeToTextEx = function(obj, codeTitles) {
        var regs = convertEntrapmentRegArrayEx(codeTitles);
        var notedata = obj.note.split(/[\r\n]+/);
        var setMode = 'none';
        var results = [];

        for (var i = 0; i < notedata.length; i++) {
            var line = notedata[i];
            if (matchRegs(line, regs, 'start')) {
                var data = {
                    id:RegExp.$1,
                    text:''
                };
                setMode = 'read';
            } else if (matchRegs(line, regs, 'end')) {
                setMode = 'none';
                results.push(data);
            } else if (setMode === 'read') {
                data.text += line + ';';
            }
        }
        return results;
    };

    var convertEntrapmentRegArrayEx = function(codeTitles) {
        return codeTitles.map(function(codeTitle) {
            return {
                start:new RegExp('<' + codeTitle + ':[ ]*(.+)>', 'i'),
                end  :new RegExp('<\/' + codeTitle + '>', 'i')
            };
        });
    };

    var matchRegs = function(data, regs, prop) {
        return regs.some(function(reg){
            return prop ? data.match(reg[prop]) : data.match(reg);
        });
    };

    var convertEscapeCharacters = function(text) {
        if (text == null) text = '';
        var window = SceneManager._scene._windowLayer.children[0];
        return window ? window.convertEscapeCharacters(text) : text;
    };

    var setArgStr = function(arg) {
        return convertEscapeCharacters(arg);
    };

    var setArgNum = function(arg) {
        try {
            return Number(eval(setArgStr(arg)));
        } catch (e) {
            return 0;
        }
    };

    // Sum of the elements of the array
    Math.sam = function(arr) {
        return arr.reduce( function(prev, current, i, arr) {
            return prev + current;
        });
    };

    Math._getDec = function(value) {
      var list = (value + '').split('.');
      return list[1] !== undefined && list[1].length > 0 ? list[1].length : 0;
    };

    // Convert a ratio expressed as a decimal to an integer percentage (e.g., convert 0.5 to 50)
    Math.percent = function(dec) {
      var decnum = Math._getDec(dec);
      var int = +(dec + '').replace('.', '');
      var diffdec = 2 - decnum;
      return diffdec ? int * Math.pow(10, diffdec) : int;
    }

    Number.prototype._getDec = function() {
        var list = (this + '').split('.');
        return list[1] !== undefined && list[1].length > 0 ? list[1].length : 0;
    };

    // Convert a decimal value to a percentage value (e.g., convert 0.5 to 50)
    Number.prototype.percent = function(dec) {
        dec = dec || 0;
        var decnum = this._getDec();
        var int = +(this + '').replace('.', '');
        var diffdec = 2 + dec - decnum;
        return Math.floor(int * Math.pow(10, diffdec)) / Math.pow(10, dec);
    }

    // Convert all elements of the array to numbers
    Array.prototype.num = function() {
      return this.map(function(elm) {
          return Number(elm);
      });
    }

    //=============================================================================
    // Remove the escape flag after the battle ends
    //=============================================================================

    var _Scene_Map_start = Scene_Map.prototype.start;
    Scene_Map.prototype.start = function() {
        _Scene_Map_start.call(this);
        BattleManager._escaped = false;
    };

    //=============================================================================
    // DataManager
    //=============================================================================

    var _DatabaseLoaded = false;
    var _DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
    DataManager.isDatabaseLoaded = function() {
        if (!_DataManager_isDatabaseLoaded.call(this)) return false;
        if (!_DatabaseLoaded) {
            this.cssActorImageNotetags($dataActors);
            this.cssActorImageNotetags($dataItems);
            this.cssActorImageNotetags($dataWeapons);
            this.cssActorImageNotetags($dataArmors);
            this.cssCustomParamNotetags($dataActors);
            this.cssCustomParamNotetags($dataClasses);
            _DatabaseLoaded = true;
        }
        return true;
    };

    DataManager.cssActorImageNotetags = function(group) {
        for (var n = 1; n < group.length; n++) {
            var obj = group[n];
            obj.cssbgi = [];
            var datas = readEntrapmentCodeToTextEx(obj, ['CSS_画像', 'CSS_IMAGE']);
            if (datas.length) this.readCssBgiMetaDatas(obj, datas);
        }
    };

    DataManager.setCssBgiBase = function(obj, index, name) {
        obj.cssbgi[index] = {
            name    :name,
            offsetX :0,
            offsetY :0,
            width   :0,
            height  :0,
            scale   :100,
        };
    };

    DataManager.readCssBgiMetaDatas = function(obj, metaDatas) {
        for (var t = 0; t < metaDatas.length; t++) {
            this.setCssBgiBase(obj, t, metaDatas[t].id);
            var datas = metaDatas[t].text.split(';');
            for (var i = 0; i < datas.length; i++) {
                var data = datas[i];
                var match = /(.+):[ ]*(.+)/.exec(data);
                if (!match) continue;
                switch (match[1].toUpperCase()) {
                    case 'BGI OFFSET X':
                        obj.cssbgi[t].offsetX = Number(match[2]);
                        break;
                    case 'BGI OFFSET Y':
                      obj.cssbgi[t].offsetY = Number(match[2]);
                        break;
                    case 'BGI WIDTH':
                        obj.cssbgi[t].width = Number(match[2]);
                        break;
                    case 'BGI HEIGHT':
                        obj.cssbgi[t].height = Number(match[2]);
                        break;
                    case 'BGI SCALE':
                        obj.cssbgi[t].scale = Number(match[2]);
                        break;
                }
            }
        }
    };

    DataManager.cssCustomParamNotetags = function(group) {
        for (var n = 1; n < group.length; n++) {
            var obj = group[n];
            obj.cssGauges = [];
            var datas = readEntrapmentCodeToTextEx(obj, ['CSS_カスタム', 'CSS_CUSTOM']);
            this.readCssCustomParamMetaDatas(obj, datas);
        }
    };

    DataManager.readCssCustomParamMetaDatas = function(obj, metaDatas) {
        for (var t = 0; t < metaDatas.length; t++) {
            var dataId = Number(metaDatas[t].id);
            obj.cssGauges[dataId] = {};

            var datas = metaDatas[t].text.split(';');
            for (var i = 0; i < datas.length; i++) {
                var data = datas[i];
                var match = /(.+):[ ]*(.+)/.exec(data);
                if (!match) continue;
                switch (match[1].toUpperCase()) {
                    case 'NAME':
                    case '表示名':
                        obj.cssGauges[dataId].name = match[2];
                        break;
                    case 'REFERENCES':
                    case '参照先':
                        obj.cssGauges[dataId].ref = match[2];
                        break;
                    case 'CURRENT':
                    case '現在値':
                        obj.cssGauges[dataId].current = match[2];
                        break;
                    case 'MAX':
                    case '最大値':
                        obj.cssGauges[dataId].max = match[2];
                        break;
                    case 'COLOR':
                    case '色':
                        var colors = match[2].replace(/\s/g,'').split(',');
                        obj.cssGauges[dataId].color1 = Number(colors[0]);
                        obj.cssGauges[dataId].color2 = colors[1] ? Number(colors[1]) : Number(colors[0]);
                        break;
                }
            }
        }
    };

    //=============================================================================
    // プラグインコマンド
    //=============================================================================

    var _CSS_Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        switch (command.toUpperCase()) {
            case 'CSS_カスタム画像変更':
            case 'CSS_CHANGE_CUSTOM_IMAGE':
                this.cssChangeCustomImage(args);
                break;
            case 'CSS_ウィンドウ設定変更':
            case 'CSS_CHANGE_WINDOW_SETTING':
                this.cssChangeWindowSetting(args);
                break;
            default:
                _CSS_Game_Interpreter_pluginCommand.call(this, command, args);
                break;
        }
    };

    Game_Interpreter.prototype.cssChangeCustomImage = function(args) {
        switch (setArgStr(args[0]).toUpperCase()) {
            case 'アクター':
            case 'ACTOR':
                var actor = $gameActors.actor(setArgNum(args[1]));
                break;
            case 'パーティー':
            case 'PARTY':
                var actor = $gameParty.members()[setArgNum(args[1])];
                break;
            default : 
                return;
        }
        if (!actor) return;
        actor.setupCssbgi(
            setArgNum(args[2]),
            setArgStr(args[3]),
            setArgNum(args[4]),
            setArgNum(args[5]),
            setArgNum(args[6]),
            setArgNum(args[7]),
            setArgNum(args[8])
        );
    };

    Game_Interpreter.prototype.cssChangeWindowSetting = function(args) {
        switch(setArgStr(args[0].toUpperCase())) {
            case 'バトル':
            case 'BATTLE':
                this.cssChangeWindowSettingParam($gameSystem._cssBattleWindow, args);
                return;
            default:
                return;
        }
    };

    Game_Interpreter.prototype.cssChangeWindowSettingParam = function(param, args) {
        if (!param) return;
        switch(setArgStr(args[1].toUpperCase())) {
            case 'ENABLED':
            case 'カスタム機能':
                param.enabled = Boolean(setArgStr(args[2]));
                break;
            case 'NUMVISIBLEROUS':
            case '表示行数':
                param.numVisibleRows = setArgNum(args[2]);
                break;
            case 'FONTSIZE':
            case 'フォントサイズ':
                param.fontSize = setArgNum(args[2]);
                break;
            case 'PADDING':
            case '余白':
                param.padding = setArgNum(args[2]);
                break;
            case 'LINEHEIGHT':
            case '行高さ':
                param.lineHeight = setArgNum(args[2]);
                break;
            case 'OPACITY':
            case '背景透明度':
                param.opacity = setArgNum(args[2]);
                break;
            case 'HIDEFRAME':
            case '枠非表示':
                param.hideFrame = Boolean(setArgStr(args[2]));
                break;
            case 'MAXCOLS':
            case '表示列数':
                param.maxCols = setArgNum(args[2]);
                break;
            case 'CURSORHEIGHT':
            case 'カーソル行数':
                param.cursorHeight = setArgNum(args[2]);
                break;
            case 'HSPACE':
            case '表示行間隔':
                param.hspace = setArgNum(args[2]);
                break;
            default:
                break;
        }
    };

    //=============================================================================
    // Game_Actor
    //=============================================================================

    var _Game_Actor_levelUp = Game_Actor.prototype.levelUp;
    Game_Actor.prototype.levelUp = function() {
        _Game_Actor_levelUp.call(this);
        if (!this._levelUpCount) this._levelUpCount = 0;
        this._levelUpCount += 1;
    };

    var _Game_Actor_setup = Game_Actor.prototype.setup;
    Game_Actor.prototype.setup = function(actorId) {
        _Game_Actor_setup.call(this, actorId);
        ImageManager.loadFace(this.faceName());
        this.actor().cssbgi.forEach( function(bgi){
            if (bgi) ImageManager.loadPicture(bgi.name);
        });
        this._cssbgi = this.actor().cssbgi.filter(function(bgi){
            return bgi && bgi.name;
        });
        ImageManager.loadSvActor(this.battlerName());
    };

    Game_Actor.prototype.cssbgi = function(imageId) {
        return this._cssbgi[imageId];
    };

    Game_Actor.prototype.setupCssbgi = function(imageId, name, x, y, width, height, scale) {
        var bgi = this._cssbgi[imageId];
        bgi = {
            name    : name || bgi.name,
            offsetX : x >= 0 ? x : bgi.offsetX,
            offsetY : y >= 0 ? y : bgi.offsetY,
            width   : width >= 0 ? width : bgi.width,
            height  : height >= 0 ? height : bgi.height,
            scale   : scale >= 0 ? scale : bgi.scale,
        };
        this._cssbgi[imageId] = bgi;
    };

    // Obtain state motion
    Game_Actor.prototype.getStateMotion = function() {
        if(Imported.FTKR_ESM) {
            return this.getEsmMotion();
        } else {
            switch (this.stateMotionIndex()) {
                case 1: return 'abnormal';
                case 2: return 'sleep';
                case 3: return 'dead';
            }
            return '';
        }
    };

    //=============================================================================
    // Window_Base
    //=============================================================================

    var _Window_Base_initialize = Window_Base.prototype.initialize;
    Window_Base.prototype.initialize = function(x, y, width, height) {
        _Window_Base_initialize.call(this, x, y, width, height);
        this.sprite = [];
        this._stateIconSprite = [];
        this._faceSprite = [];
    };

    Window_Base.prototype.clearCssSprite = function(index) {
        if (this.sprite && this.sprite[index]) {
            this.sprite[index].setBattler();
        }
        if (this._stateIconSprite && this._stateIconSprite[index]) {
            this._stateIconSprite[index].forEach( function(sprite){
                sprite.setup(null);
            });
        }
    };

    Window_Base.prototype.clearItem = function(index) {
        this.clearCssSprite(index);
    };

    var _CSS_Window_Selectable_clearItem = Window_Selectable.prototype.clearItem;
    Window_Selectable.prototype.clearItem = function(index) {
        _CSS_Window_Selectable_clearItem.call(this, index);
        Window_Base.prototype.clearItem.call(this, index);
    };

    Window_Base.prototype.showActorNum = function() {
        return this.maxPageItems ? this.maxPageItems() : 1;
    };

    Window_Base.prototype.convertCssNumber = function(actor, value) {
        if (!value) return 0;
        if (!isNaN(value)) {
            return Number(value);
        }
        return Number(this.evalCssCustomFormula(actor, value));
    };

    Window_Base.prototype.evalCssCustomFormula = function(actor, formula) {
        if (!formula) return '';
        FTKR.setGameData(actor);
        return FTKR.evalFormula(formula);
    };

    Window_Base.prototype.evalCssStrFormula = function(actor, formula) {
        if (!formula) return '';
        FTKR.setGameData(actor);
        return FTKR.evalStrFormula(formula);
    };

    Window_Base.prototype.isEnabledChangePaintOpacity = function(actor) {
        return actor && actor.isBattleMember();
    };

    // Calculate the length of the input text, considering control characters
    Window_Base.prototype.convertTextWidth = function(text) {
        var textObj = { text : text, width : 0 };
        textObj.text = this.convertEscapeCharacters(textObj.text);
        this.convertEscapeCharactersTextWidth(textObj);
        textObj.width += this.textWidth(textObj.text);
        return textObj.width;
    };

    Window_Base.prototype.convertEscapeCharactersTextWidth = function(obj) {
        var reg = /i\[(\d+)\]/i;
        while (reg.test(obj.text)) {
            obj.text = (conv.toUpperCase()).replace(reg, '');
            obj.width += Window_Base._iconWidth + 4;
        }
        reg = /c\[(\d+)\]/i;
        while (reg.test(obj.text)) {
            obj.text = (obj.text.toUpperCase()).replace(reg, '');
        }
        reg = /lw\[(\d+),?([^\]]+)\]/i;
        var result;
        while (result = reg.exec(obj.text)) {
            obj.width += Number(result[1]);
            obj.text = (obj.text.toUpperCase()).replace(reg, '');
        }
        return obj;
    };

    /*-------------------------------------------------------------
    // A function to display the actor's simplified status
    drawCssActorStatus(index, actor, x, y, width, height, lss)
    index :Actor display number
    actor :Actor object
    x     :X-coordinate
    y     :Y-coordinate
    width :Display area width
    height:Display area height
    lss   :Simplified status object
    -------------------------------------------------------------*/
    Window_Base.prototype.drawCssActorStatus = function(index, actor, x, y, width, height, lss) {
        if (lss && lss.statusList) {
            lss.statusList.forEach(function(status){
                this.drawCssActorStatusText(index, actor, x, y, width, height, status, lss);
            },this);
        } else {
            this.drawCssActorStatus_v2(index, actor, x, y, width, height, lss);
        }
    };

    Window_Base.prototype.drawCssActorStatus_v2 = function(index, actor, x, y, width, height, lss) {
        if (!lss) lss = {};
        var w = width;
        var h = height;
        var wrs = lss.widthRate.split(',').num();
        var spc = lss.space.split(',').num();
        this._dispWidth = width - spc[0] - spc[3];
        var aws = [];
        var axs = [];
        var status = [lss.text1.split(','), lss.text2.split(','), lss.text3.split(',')];
        for (var i = 0; i < 3; i++) {
            aws[i] = (w - Math.sam(spc)) * wrs[i] / Math.sam(wrs);
            axs[i] = i > 0 ? axs[i-1] + aws[i-1] + spc[i]: x + spc[0];
            this.drawCssActorStatusText(index, actor, axs[i], y, aws[i], height, status[i], lss);
            this._dispWidth -= aws[i] + spc[i+1];
        }
    };

    /*-------------------------------------------------------------
    // A function to display the drawing area
    drawCssActorStatusText(index, actor, x, y, width, statusnames, lss)
    index       :Actor display number
    actor       :Actor object
    x           :X-coordinate of the drawing area
    y           :Y-coordinate of the drawing area
    width       :Width of the drawing area
    statusnames :Height of the drawing area
    lss         :Simplified status object
    -------------------------------------------------------------*/
    Window_Base.prototype.drawCssActorStatusText = function(index, actor, x, y, width, height, status, lss) {
        if (lss && lss.statusList) {
            var dx = this.parseIntCssStatus(status.x, x, y, width, height);
            var dy = this.parseIntCssStatus(status.y, x, y, width, height);
            var dw = this.parseIntCssStatus(status.width, x, y, width, height);
            dw = dw < 0 ? width - x - dx : Math.min(dw, width);
            var text = status.text;
            if (/([^\(]+)\(\%1\)/i.test(status.text)) {
                text = text.format(status.value);
            }
            this.drawCssActorStatusBases(index, actor, x + dx, y + dy, dw, text, lss);
        } else {
            this.drawCssActorStatusText_v2(index, actor, x, y, width, height, status, lss);
        }
    };

    Window_Base.prototype.parseIntCssStatus = function(value, x, y, width, height) {
        if (!isNaN(value)) {
            return parseInt(value);
        } else {
            var line = this.lineHeight();
            return eval(value);
        }
    };

    Window_Base.prototype.drawCssActorStatusText_v2 = function(index, actor, x, y, width, height, statusnames, lss) {
        var dy = this.lineHeight();
        var line = 0;
        statusnames.forEach( function(status) {
            line += this.drawCssActorStatusBases(index, actor, x, y + dy * line, width, status, lss);
        },this);
    };

    Window_Base.prototype.drawCssActorStatusBases = function(index, actor, x, y, width, status, lss) {
        if (lss && lss.statusList) {
            var match = status.match(/^\[(.+)\]$/);
            var statuses = !match ? [status] : match[1].split('/');
            var len = statuses.length;
            var sIn = Number(lss.spaceIn);
            if (len > 1) width = (width - sIn * (len - 1))/ len;
            statuses.forEach( function(element, i) {
                var dx = (width + sIn) * i;
                this.drawCssActorStatusBase(index, actor, x + dx, y, width, element, lss);
            },this);
        } else {
            return this.drawCssActorStatusBases_v2(index, actor, x, y, width, status, lss);
        }
    };

    Window_Base.prototype.drawCssActorStatusBases_v2 = function(index, actor, x, y, width, status, lss) {
        var matchA = status.match(/^\{(.+)\}$/);
        if (matchA) {
            status = matchA[1];
            width = this._dispWidth;
        }
        var matchB = status.match(/^\[(.+)\]$/);
        var statuses = !matchB ? [status] : matchB[1].split('/');
        var line = 0;
        var len = statuses.length;
        var sIn = Number(lss.spaceIn);
        if (len > 1) width = (width - sIn * (len - 1))/ len;
        statuses.forEach( function(element, i) {
            var dx = (width + sIn) * i;
            line = Math.max(this.drawCssActorStatusBase(index, actor, x + dx, y, width, element, lss), line);
        },this);
        return line;
    };

    /*-------------------------------------------------------------
    // A function to determine the display code
    drawCssActorStatusBase(index, actor, x, y, width, status, lss)
    index       :Actor display number
    actor       :Actor object
    x           :X-coordinate of the drawing area
    y           :Y-coordinate of the drawing area
    width       :Width of the drawing area
    status      :Height of the drawing area
    lss         :Simplified status object
    -------------------------------------------------------------*/
    Window_Base.prototype.drawCssActorStatusBase = function(index, actor, x, y, width, status, lss) {
        var css = FTKR.CSS.cssStatus;
        var match = status.match(/([^\(]+)\((.+)\)/);
        if (match) {
            return this.drawCssActorStatusBase_A(index, actor, x, y, width, match, lss, css);
        } else {
            return this.drawCssActorStatusBase_B(index, actor, x, y, width, status, lss, css);
        }
    };

    // Display code to specify the content to be displayed in parentheses
    Window_Base.prototype.drawCssActorStatusBase_A = function(index, actor, x, y, width, match, lss, css) {
        switch(match[1].toUpperCase()) {
            case 'IPARAM':
                return this.drawCssItemParam(actor, x, y, width, match[2], lss);
            case 'STREVAL':
                return this.drawCssEval(actor, x, y, width, match[2], false);
            case 'EVAL':
                return this.drawCssEval(actor, x, y, width, match[2], true);
            case 'TEXT':
                return this.drawCssText(actor, x, y, width, match[2]);
            case 'NOTEQUIP':
                return this.drawCssCannotEquip(actor, x, y, width, match[2], lss);
            case 'EQUIP':
                return this.drawCssActorEquip(actor, x, y, width, match[2], lss);
            default:
                // if (!actor) return 1;
                FTKR.setGameData(actor, lss.target, lss.item);
                match[2] = this.convertCssNumber(actor, match[2]);
                return this.drawCssActorStatusBase_A1(index, actor, x, y, width, match, lss, css);
        }
    };

    // Display code to specify the content to be displayed in parentheses (when the content inside the parentheses is evaluated using eval)
    Window_Base.prototype.drawCssActorStatusBase_A1 = function(index, actor, x, y, width, match, lss, css) {
        switch(match[1].toUpperCase()) {
            case 'EDIFFAOP':
                return this.drawCssActorEquipAopDiff(actor, x, y, width, match[2], lss);
            case 'EXDIFF':
                return this.drawCssActorEquipXPDiff(actor, x, y, width, match[2], lss);
            case 'ESDIFF':
                return this.drawCssActorEquipSPDiff(actor, x, y, width, match[2], lss);
            case 'EDIFF':
                return this.drawCssActorEquipDiff(actor, x, y, width, match[2], lss);
            case 'AOPDIFF':
                return this.drawCssActorAopParamDiff(actor, x, y, width, match[2], lss);
            case 'AOPBASE':
                return this.drawCssActorAopParamBase(actor, x, y, width, match[2], lss);
            case 'PDIFF':
                return this.drawCssActorParamDiff(actor, x, y, width, match[2], lss);
            case 'PBASE':
                return this.drawCssActorParamBase(actor, x, y, width, match[2], lss);
            case 'IIMAGE':
                return this.drawCssItemImage(actor, x, y, width, match[2], lss);
            case 'EXPARAM':
                return this.drawCssActorEquipXParam(actor, x, y, width, match[2], lss);
            case 'ESPARAM':
                return this.drawCssActorEquipSParam(actor, x, y, width, match[2], lss);
            case 'EPARAM':
                return this.drawCssActorEquipParam(actor, x, y, width, match[2], lss);
            case 'EAOP':
                return this.drawCssActorEquipAopParam(actor, x, y, width, match[2], lss);
            case 'AOP':
                return this.drawCssActorAopParam(actor, x, y, width, match[2], lss);
            case 'AGAUGE':
                return this.drawCssActorCustomGauge(actor, x, y, width, match[2]);
            case 'CGAUGE':
                return this.drawCssClassCustomGauge(actor, x, y, width, match[2]);
            case 'XPARAM':
                return this.drawCssActorXParam(actor, x, y, width, match[2]);
            case 'SPARAM':
                return this.drawCssActorSParam(actor, x, y, width, match[2]);
            case 'PARAM':
                return this.drawCssActorParam(actor, x, y, width, match[2]);
            case 'CUSTOM':
                return this.drawCssActorCustom(actor, x, y, width, css.customs[match[2]]);
            case 'GAUGE':
                return this.drawCssActorGauge(actor, x, y, width, css.gauges[match[2]]);
            case 'STATE2':
                return this.drawCssActorIcons(index, actor, x, y, width, match[2]);
            case 'FACE':
                return this.drawCssActorFace(actor, x, y, width, lss, match[2]);
            case 'IMAGE':
                return this.drawCssActorImage(actor, x, y, width, match[2]);
            default:
                return 1;
        }
    };

    // Display code without using parentheses
    Window_Base.prototype.drawCssActorStatusBase_B = function(index, actor, x, y, width, status, lss, css) {
        switch (status.toUpperCase()) {
            case 'IICON':
                return this.drawCssItemIcon(actor, x, y, width, lss);
            case 'INAME':
                return this.drawCssItemName(actor, x, y, width, lss);
            case 'IDESC':
                return this.drawCssItemDesc(actor, x, y, width, lss);
            case 'ITYPE':
                return this.drawCssItemType(actor, x, y, width, lss);
            case 'IETYPE':
                return this.drawCssItemEType(actor, x, y, width, lss);
            case 'ISCOPE':
                return this.drawCssItemScope(actor, x, y, width, lss);
            case 'IELEMENT':
                return this.drawCssItemElement(actor, x, y, width, lss);
            case 'INUMBER':
                return this.drawCssItemNumber(actor, x, y, width, lss);
            case 'MAPNAME':
                return this.drawCssMapName(actor, x, y, width, lss);
            case 'FACE':
                return this.drawCssActorFace(actor, x, y, width, lss);
            case 'ECHARA':
                return this.drawCssEnemyChara(actor, x, y, width);
            case 'CHARA':
                return this.drawCssActorChara(actor, x, y, width, css.chara);
            case 'SV':
                return this.drawCssActorSvChara(index, actor, x, y, width, css.svChara);
            case 'NICKNAME':
                return this.drawCssActorNickname(actor, x, y, width);
            case 'NAME':
                return this.drawCssActorName(actor, x, y, width);
            case 'LEVEL':
                return this.drawCssActorLevel(actor, x, y, width);
            case 'HP':
                return this.drawCssActorHp(actor, x, y, width);
            case 'MP':
                return this.drawCssActorMp(actor, x, y, width);
            case 'TP':
                return this.drawCssActorTp(actor, x, y, width);
            case 'CLASS':
                return this.drawCssActorClass(actor, x, y, width);
            case 'STATE':
                return this.drawCssActorIcons(index, actor, x, y, width);
            case 'PROFILE':
                return this.drawCssProfile(actor, x, y, width);
            case 'IMAGE':
                return this.drawCssActorImage(actor, x, y, width, 0);
            case 'MESSAGE':
                return this.drawCssActorMessage(actor, x, y, width);
            case 'LINE':
                return this.drawCssLine(x, y, width);
            default:
                return 1;
        }
    };

    //------------------------------------------------------------------------
    // Item icon display function
    //------------------------------------------------------------------------
    Window_Base.prototype.drawCssItemIcon = function(actor, x, y, width, lss) {
        var index = lss.item ? lss.item.iconIndex : 0;
        this.drawIcon(index, x, y);
        return 1;
    };

    //------------------------------------------------------------------------
    // Item name display function
    //------------------------------------------------------------------------
    Window_Base.prototype.drawCssItemName = function(actor, x, y, width, lss) {
        var name = lss.item ? lss.item.name : '';
        this.drawText(name, x, y, width);
        return 1;
    };

    //------------------------------------------------------------------------
    // Item description display function
    //------------------------------------------------------------------------
    Window_Base.prototype.drawCssItemDesc = function(actor, x, y, width, lss) {
        var name = lss.item ? lss.item.description : '';
        this.drawTextEx(name, x, y);
        return 2;
    };

    //------------------------------------------------------------------------
    // Item setting display function
    //------------------------------------------------------------------------
    Window_Base.prototype.drawCssItemParam = function(actor, x, y, width, param, lss) {
        var item = lss.item;
        if (!item) return 1;
        this.drawText(item[param], x, y, width);
        return 1;
    };

    //------------------------------------------------------------------------
    // Item type (skill type, weapon type, armor type)
    //------------------------------------------------------------------------
    Window_Base.prototype.drawCssItemType = function(actor, x, y, width, lss) {
        this.drawText(DataManager.itemTypeName(lss.item), x, y, width);
        return 1;
    };

    Window_Base.ITEM_TYPES = [
        '',
        'General Item',
        'Important Item',
        'Hidden Item A',
        'Hidden Item B',
    ];

    DataManager.itemTypeName = function(item) {
        if (this.isSkill(item)) {
            return $dataSystem.skillTypes[item.stypeId];
        } else if (this.isItem(item)) {
            return Window_Base.ITEM_TYPES[item.itypeId];
        } else if (this.isWeapon(item)) {
            return $dataSystem.weaponTypes[item.wtypeId];
        } else if (this.isArmor(item)) {
            return $dataSystem.armorTypes[item.atypeId];
        } else {
            return '';
        }
    };

    //------------------------------------------------------------------------
    // Item equip type
    //------------------------------------------------------------------------
    Window_Base.prototype.drawCssItemEType = function(actor, x, y, width, lss) {
        var name = lss.item ?  $dataSystem.equipTypes[lss.item.etypeId] : '';
        this.drawText(name, x, y, width);
        return 1;
    };

    //------------------------------------------------------------------------
    // Item range
    //------------------------------------------------------------------------
    Window_Base.prototype.drawCssItemScope = function(actor, x, y, width, lss) {
        var name = lss.item ? Window_Base.ITEM_SCOPE[lss.item.scope] : '';
        this.drawText(name, x, y, width);
        return 1;
    };

    Window_Base.ITEM_SCOPE = [
        '',
        'Single enemy',
        'All enemies',
        'Single random enemy',
        'Two random enemies',
        'Three random enemies',
        'Four random enemies',
        'Single ally',
        'All allies',
        'Single ally (incapacitated)',
        'All allies (incapacitated)',
        'User'
    ];

    //------------------------------------------------------------------------
    // Item attributes
    //------------------------------------------------------------------------
    Window_Base.prototype.drawCssItemElement = function(actor, x, y, width, lss) {
        var name = lss.item && lss.item.damage ? $dataSystem.elements[lss.item.damage.elementId] : '';
        this.drawText(name, x, y, width);
        return 1;
    };

    //------------------------------------------------------------------------
    // Display of custom item images
    //------------------------------------------------------------------------
    Window_Base.prototype.drawCssItemImage = function(actor, dx, dy, width, id, lss) {
        var item = lss.item;
        if (!item || !item.cssbgi) return 1;
        id = id || 0;
        var bgi = item.cssbgi[id];
        if (!bgi) return 1;
        var bitmap = ImageManager.loadPicture(bgi.name);
        if (!bitmap) return 1;
        var sw = bgi.width || bitmap.width;
        var sh = bgi.height || bitmap.height;
        var sx = bgi.offsetX || 0;
        var sy = bgi.offsetY || 0;

        var dh = sh * bgi.scale / 100;
        var dw = sw * bgi.scale / 100;
        var offsetX = FTKR.CSS.cssStatus.image.posiX * (width - dw) / 2;
        dx = Math.floor(dx + offsetX);
        this.contents.blt(bitmap, sx, sy, sw, sh, dx, dy, dw, dh);
        return Math.ceil(dh / this.lineHeight()) || 1;
    };

    //------------------------------------------------------------------------
    // Item quantity
    //------------------------------------------------------------------------
    Window_Base.prototype.drawCssItemNumber = function(actor, x, y, width, lss) {
        if (lss.item){
            var numItems = $gameParty.numItems(lss.item);
            this.drawText(numItems, x, y, width, 'right');
        }
        return 1;
    };

    //------------------------------------------------------------------------
    // Display of map name
    //------------------------------------------------------------------------
    Window_Base.prototype.drawCssMapName = function(actor, x, y, width, lss) {
        this.drawText($gameMap.displayName(), x, y, width);
        return 1;
    };

    //------------------------------------------------------------------------
    // Actor face image display function
    //------------------------------------------------------------------------
    Window_Base.prototype.drawCssActorFace = function(actor, x, y, width, lss, scale) {
        var dy = this.lineHeight();
        scale = scale || Math.ceil(Window_Base._faceHeight / dy);
        this.changePaintOpacity(this.isEnabledChangePaintOpacity(actor));
        this.drawCssFace(actor, x, y, width, dy * scale);
        this.changePaintOpacity(true);
        return scale;
    };

    Window_Base.prototype.drawCssFace = function(actor, dx, dy, width, height) {
        var fw = FTKR.CSS.cssStatus.face.width || Window_Base._faceWidth;
        var fh = FTKR.CSS.cssStatus.face.height || Window_Base._faceHeight;
        var scaleh = height / fh;
        var scaleW = width / fw;
        if (scaleh < scaleW) {
            var dh = height;
            var dw = fw * scaleh;
        } else {
            var dh = fh * scaleW;
            var dw = width;
        }
        var offsetX = this.cssFacePositionX(actor) * (width - dw) / 2;
        dx = Math.floor(dx + offsetX);
        var bitmap = ImageManager.loadFace(actor.faceName());
        var sw = fw;
        var sh = fh;
        var sx = actor.faceIndex() % 4 * sw;
        var sy = Math.floor(actor.faceIndex() / 4) * sh;
        this.contents.blt(bitmap, sx, sy, sw, sh, dx, dy, dw, dh);
    };

    Window_Base.prototype.cssFacePositionX = function(actor) {
        return FTKR.CSS.cssStatus.face.posiX;
    };

    //------------------------------------------------------------------------
    // Enemy battle image display function
    //------------------------------------------------------------------------
    Window_Base.prototype.drawCssEnemyChara = function(actor, dx, dy, width) {
        if (!actor) return 1;
        var bitmap = ImageManager.loadPicture(actor.battlerName());
        if (!bitmap) return 1;
        var sw = bitmap.width;
        var sh = bitmap.height;
        var sx = 0;
        var sy = 0;
        var dh = sh;
        var dw = sw;
        this.contents.blt(bitmap, sx, sy, sw, sh, dx, dy, dw, dh);
        return Math.ceil(dh / this.lineHeight()) || 1;
    };

    //------------------------------------------------------------------------
    // Actor walking character display function
    //------------------------------------------------------------------------
    Window_Base.prototype.drawCssActorChara = function(actor, x, y, width, chara) {
        var dy = this.lineHeight();
        var line = Math.ceil(chara.height / dy);
        this.changePaintOpacity(this.isEnabledChangePaintOpacity(actor));
        this.drawCssChara(actor, x, y, width, dy * line, chara);
        this.changePaintOpacity(true);
        return line;
    };

    Window_Base.prototype.drawCssChara = function(actor, dx, dy, width, height, chara) {
        var faceName = actor.characterName();
        var index = actor.characterIndex();
        var dh = chara.height;
        var dw = dh || width || chara.width;
        var offsetX = this.cssCharaPositionX(actor, chara) * (width - dw) / 2;
        var offsetY = (height - dh) / 2;
        dx = Math.floor(dx + offsetX);
        dy = Math.floor(dy + offsetY);
        var bitmap = ImageManager.loadCharacter(faceName);
        var direction = chara.direction ? $gamePlayer._direction / 2 - 1 : 0;
        var sw = chara.width;
        var sh = chara.height;
        var sx = (index % 4 * 3 + 1) * sw;
        var sy = (Math.floor(index / 4) * 4 + direction) * sh;
        this.contents.blt(bitmap, sx, sy, sw, sh, dx, dy, dw, dh);
    };

    Window_Base.prototype.cssCharaPositionX = function(actor, chara) {
        return chara.posiX;
    };

    //------------------------------------------------------------------------
    // Actor SV battle character display function
    //------------------------------------------------------------------------
    Window_Base.prototype.drawCssActorSvChara = function(index, actor, x, y, width, svChara) {
        var dy = this.lineHeight();
        var line = Math.ceil(svChara.height / dy);
        this.changePaintOpacity(this.isEnabledChangePaintOpacity(actor));
        this.drawCssSvChara(index, actor, x, y, width, dy * line, svChara);
        this.changePaintOpacity(true);
        return line;
    };

    Window_Base.prototype.drawCssSvChara = function(index, actor, dx, dy, width, height, svChara) {
        if (this.enableCssSvCharaMotion(svChara)) {
            this.drawCssSvSprite(index, actor, dx, dy, width, height, svChara);
        } else {
            this.drawCssSvImage(index, actor, dx, dy, width, height, svChara);
        }
    };

    Window_Base.prototype.enableCssSvCharaMotion = function(svChara) {
        return $gameSystem.isSideView() &&
            (svChara.enable === 1 || svChara.enable === 2 && !$gameParty.inBattle());
    };

    Window_Base.prototype.drawCssSvSprite = function(index, actor, dx, dy, width, height, svChara) {
        index = index % this.showActorNum();
        var sprite = this.sprite[index];
        if (!sprite) {
            sprite = new Sprite_Actor(actor);
            this.addChild(sprite);
            this.sprite[index] = sprite;
        } else {
            sprite.setBattler(actor);
        }
        var offsetX = this.cssSvPositionX(actor, svChara) * (width - svChara.width) / 2;
        var sx = Math.floor(dx + offsetX + this.padding + svChara.width / 2);
        var sy = Math.floor(dy + height + this.padding);
        sprite.setHome(sx, sy);
        sprite.startMove(0,0,0);
        sprite.stopMove();
        if (!Imported.FTKR_ESM) {
            var stateMotion = actor.getStateMotion();
            var motion = svChara.state && stateMotion ? stateMotion : svChara.motion;
            sprite.startMotion(motion);
        }
    };
    

    Window_Base.prototype.drawCssSvImage = function(index, actor, dx, dy, width, height, svChara) {
        var dh = svChara.height;
        var dw = dh || width || svChara.width;
        var offsetX = this.cssSvPositionX(actor, svChara) * (width - dw) / 2;
        var offsetY = (height - dh) / 2;
        dx = Math.floor(dx + offsetX);
        dy = Math.floor(dy + offsetY);
        var bitmap = ImageManager.loadSvActor(actor.battlerName());
        var sw = svChara.width;
        var sh = svChara.height;
        this.contents.blt(bitmap, 0, 0, sw, sh, dx, dy, dw, dh);
    };

    Window_Base.prototype.cssSvPositionX = function(actor, svChara) {
        return svChara.posiX;
    };

    //------------------------------------------------------------------------
    // Actor name display function
    //------------------------------------------------------------------------
    Window_Base.prototype.drawCssActorName = function(actor, x, y, width) {
        if (!actor) return 1;
        this.changeTextColor(this.hpColor(actor));
        this.drawText(actor.name(), x, y, width);
        return 1;
    };

    //------------------------------------------------------------------------
    // Actor class name display function
    //------------------------------------------------------------------------
    Window_Base.prototype.drawCssActorClass = function(actor, x, y, width) {
        this.resetTextColor();
        this.drawText(actor.currentClass().name, x, y, width);
        return 1;
    };

    //------------------------------------------------------------------------
    // Actor title display function
    //------------------------------------------------------------------------
    Window_Base.prototype.drawCssActorNickname = function(actor, x, y, width) {
        this.resetTextColor();
        this.drawText(actor.nickname(), x, y, width);
        return 1;
    };

    //------------------------------------------------------------------------
    // Actor level display function
    //------------------------------------------------------------------------
    Window_Base.prototype.drawCssActorLevel = function(actor, x, y, width) {
        var value = actor.level;
        var tw = this.textWidth(String(value));
        this.changeTextColor(this.systemColor());
        this.drawText(TextManager.levelA, x, y, width - tw - 4);
        this.resetTextColor();
        this.drawText(value, x + width - tw, y, tw, 'right');
        return 1;
    };

    //------------------------------------------------------------------------
    // Actor state icon display function
    //------------------------------------------------------------------------
    Window_Base.prototype.drawCssActorIcons = function(index, actor, x, y, width, line) {
        if (FTKR.CSS.cssStatus.state.enable) {
            return this.drawCssIconsSprite(index, actor, x, y, width, line);
        } else {
            this.drawActorIcons(actor, x, y, width);
            return 1;
        }
    };

    Window_Base.prototype.drawCssIconsSprite = function(index, actor, x, y, width, line) {
        var css = FTKR.CSS.cssStatus.state;
        var iw = Window_Base._iconWidth;
        var iconPadding = css.iconPadding;
        index = index % this.showActorNum();
        var iconSprites = this._stateIconSprite[index];
        if (!iconSprites) {
            iconSprites = [];
        }
        if(css.autoScale) {
            var scale = this.iconScale(width);
            iw = iw * scale;
        }
        var maxlen = line ? this.lineHeight() * line : width;
        var offset = css.overlap ? this.getOverlapValue(actor, iw, maxlen, css) : iw;
        var showNum = Math.max(Math.floor((maxlen - iconPadding) / offset), 1);
        if (showNum < iconSprites.length) {
            iconSprites.forEach(function(sprite,i){
                if (i < showNum) return;
                this.removeChild(sprite);
            },this);
            iconSprites = iconSprites.slice(0, showNum);
        }
        for (var i = 0; i < showNum; i++) {
            var sprite = iconSprites[i];
            if (!sprite) {
                sprite = new Sprite_CssStateIcon(i, showNum);
                this.addChild(sprite);
                sprite.setup(actor, showNum);
                iconSprites[i] = sprite;
            } else {
                sprite.setup(actor, showNum);
            }
            sprite.move(x + this.padding, y + this.padding);
            sprite.offsetMove(offset * i, line);
            if(css.autoScale) sprite.setScale(scale);
        }
        this._stateIconSprite[index] = iconSprites;
        return line ? line : 1;
    };

    Window_Base.prototype.getOverlapValue = function(actor, iw, maxlen, css) {
        var iconlen = actor.allIcons().length;
        var iconPadding = FTKR.CSS.cssStatus.state.iconPadding;
        var diff = Math.max((maxlen - iw - iconPadding) / (iconlen - 1), iw * css.rate);
        return diff && diff < iw ? diff : iw;
    };

    Window_Base.prototype.iconOverlapOffset = function(iw, number, width, vartical) {
        var iconPadding = FTKR.CSS.cssStatus.state.iconPadding;
        var len = vartical ? (number - 1) * this.lineHeight() + iconPadding : width - iw - iconPadding;
        var diff = number > 1 ? len / (number - 1) : 0;
        return diff < iw ? diff : iw;
    };

    Window_Base.prototype.iconScale = function(width) {
        var iconPadding = FTKR.CSS.cssStatus.state.iconPadding;
        var iw = Window_Base._iconWidth;
        var len = Math.min(this.lineHeight(), width);
        return Math.min(Math.max(len - iconPadding, 0) / iw);
    };

    // Icon display function with customizable scale
    Window_Base.prototype.drawCssIcon = function(iconIndex, x, y, scale, auto) {
        var iconPadding = FTKR.CSS.cssStatus.state.iconPadding;
        scale = scale || 1;
        var bitmap = ImageManager.loadSystem('IconSet');
        var pw = Window_Base._iconWidth;
        var ph = Window_Base._iconHeight;
        if (auto) scale = Math.min(Math.max(this.lineHeight() - iconPadding, 0) / pw, 1);
        var sx = iconIndex % 16 * pw;
        var sy = Math.floor(iconIndex / 16) * ph;
        this.contents.blt(bitmap, sx, sy, pw, ph, x, y, pw * scale, ph * scale);
    };

    //------------------------------------------------------------------------
    // Actor HP display function
    //------------------------------------------------------------------------
    Window_Base.prototype.drawCssActorHp = function(actor, x, y, width) {
        this.drawActorHp(actor, x, y, width);
        return 1;
    };

    //------------------------------------------------------------------------
    // Actor MP display function
    //------------------------------------------------------------------------
    Window_Base.prototype.drawCssActorMp = function(actor, x, y, width) {
        this.drawActorMp(actor, x, y, width);
        return 1;
    };

    //------------------------------------------------------------------------
    // Actor TP display function
    //------------------------------------------------------------------------
    Window_Base.prototype.drawCssActorTp = function(actor, x, y, width) {
        this.drawActorTp(actor, x, y, width);
        return 1;
    };

    //------------------------------------------------------------------------
    // Parameter display function
    //------------------------------------------------------------------------
    Window_Base.prototype.drawCssActorParam = function(actor, x, y, width, paramId) {
        if (paramId < 0 && paramId > 7) return 0;
        this.changeTextColor(this.systemColor());
        this.drawText(TextManager.param(paramId), x, y, width);
        this.resetTextColor();
        this.drawText(actor.param(paramId), x, y, width, 'right');
        return 1;
    };

    //------------------------------------------------------------------------
    // Base parameter display function
    //------------------------------------------------------------------------
    Window_Base.prototype.drawCssActorParamBase = function(actor, x, y, width, paramId, lss) {
        if (paramId < 0 && paramId > 7) return 0;
        this.changeTextColor(this.systemColor());
        this.drawText(TextManager.param(paramId), x, y, width);
        this.resetTextColor();
        this.drawText(actor.paramBase(paramId), x, y, width, 'right');
        return 1;
    };

    //------------------------------------------------------------------------
    // Parameter difference display function
    //------------------------------------------------------------------------
    Window_Base.prototype.drawCssActorParamDiff = function(actor, x, y, width, paramId, lss) {
        if (paramId < 0 && paramId > 7) return 1;
        var param = actor.param(paramId);
        var base = actor.paramBase(paramId);
        var diff = param - base;
        this.drawParamDiffValue(diff, x, y, width, FTKR.CSS.cssStatus.pdiff);
        return 1;
    };

    Window_Base.prototype.drawParamDiffValue = function(value, x, y, width, formatParams) {
        this.changeTextColor(this.paramchangeTextColor(value));
        var text = '';
        if (value > 0) {
            text = formatParams.plus.format(value);
        } else if (value < 0) {
            text = formatParams.minus.format(-value);
        }
        if (formatParams.enabledEc) {
            this.drawTextEx(text, x, y);
        } else {
            this.drawText(text, x, y, width, 'right');
        }
        this.resetTextColor();
    };

    //------------------------------------------------------------------------
    // Additional attribute display function
    //------------------------------------------------------------------------
    Window_Base.prototype.drawCssActorXParam = function(actor, x, y, width, paramId) {
        if (paramId < 0 && paramId > 9) return 0;
        this.changeTextColor(this.systemColor());
        this.drawText(FTKR.CSS.cssStatus.xparam[paramId], x, y, width);
        this.resetTextColor();
        var text = actor.xparam(paramId);
        if (FTKR.CSS.cssStatus.param.decimals) {
            text = text.percent() + '%';
        }
        this.drawText(text, x, y, width, 'right');
        return 1;
    };

    //------------------------------------------------------------------------
    // Special attribute display function
    //------------------------------------------------------------------------
    Window_Base.prototype.drawCssActorSParam = function(actor, x, y, width, paramId) {
        if (paramId < 0 && paramId > 9) return 0;
        this.changeTextColor(this.systemColor());
        this.drawText(FTKR.CSS.cssStatus.sparam[paramId], x, y, width);
        this.resetTextColor();
        var text = actor.sparam(paramId);
        if (FTKR.CSS.cssStatus.param.decimals) {
            text = text.percent() + '%';
        }
        this.drawText(text, x, y, width, 'right');
        return 1;
    };

    //------------------------------------------------------------------------
    // Parameter display function when equipping a specified item
    //------------------------------------------------------------------------
    Window_Base.prototype.drawCssActorEquipParam = function(actor, x, y, width, paramId, lss) {
        if (paramId < 0 && paramId > 7) return 0;
        this.drawTextEx(FTKR.CSS.cssStatus.equip.arrow, x, y);
        var target = lss.target;
        var item = FTKR.gameData.item;
        if (item && !actor.canEquip(item)) return 1;
        if (this.checkShowEquipParam(actor, target)) {
            var newValue = target.param(paramId);
            var diffvalue = newValue - actor.param(paramId);
            this.changeTextColor(this.paramchangeTextColor(diffvalue));
            this.drawText(newValue, x, y, width, 'right');
        }
        return 1;
    };

    Window_Base.prototype.checkShowEquipParam = function(actor, target) {
        return !!actor && !!target;
    };

    //------------------------------------------------------------------------
    // Additional attribute display function when equipping a specified item
    //------------------------------------------------------------------------
    Window_Base.prototype.drawCssActorEquipXParam = function(actor, x, y, width, paramId, lss) {
        if (paramId < 0 && paramId > 9) return 0;
        this.drawTextEx(FTKR.CSS.cssStatus.equip.arrow, x, y);
        var target = lss.target;
        var item = FTKR.gameData.item;
        if (item && !actor.canEquip(item)) return 1;
        if (this.checkShowEquipParam(actor, target)) {
            var newValue = target.xparam(paramId);
            var diffvalue = newValue - actor.xparam(paramId);
            this.changeTextColor(this.paramchangeTextColor(diffvalue));
            if (FTKR.CSS.cssStatus.param.decimals) {
                newValue = newValue.percent() + '%';
            }
            this.drawText(newValue, x, y, width, 'right');
        }
        return 1;
    };

    //------------------------------------------------------------------------
    // Special attribute display function when equipping a specified item
    //------------------------------------------------------------------------
    Window_Base.prototype.drawCssActorEquipSParam = function(actor, x, y, width, paramId, lss) {
        if (paramId < 0 && paramId > 9) return 0;
        this.drawTextEx(FTKR.CSS.cssStatus.equip.arrow, x, y);
        var target = lss.target;
        var item = FTKR.gameData.item;
        if (item && !actor.canEquip(item)) return 1;
        if (this.checkShowEquipParam(actor, target)) {
            var newValue = target.sparam(paramId);
            var diffvalue = newValue - actor.sparam(paramId);
            this.changeTextColor(this.paramchangeTextColor(diffvalue));
            if (FTKR.CSS.cssStatus.param.decimals) {
                newValue = newValue.percent() + '%';
            }
            this.drawText(newValue, x, y, width, 'right');
        }
        return 1;
    };

    //------------------------------------------------------------------------
    // Equipped parameter difference display function
    //------------------------------------------------------------------------
    Window_Base.prototype.drawCssActorEquipDiff = function(actor, x, y, width, paramId, lss) {
        if (paramId < 0 && paramId > 7) return 1;
        var target = lss.target;
        var item = FTKR.gameData.item;
        if (item && !actor.canEquip(item)) return 1;
        if (target) {
            var newValue = target.param(paramId);
            var diffvalue = newValue - actor.param(paramId);
            this.drawParamDiffValue(diffvalue, x, y, width, FTKR.CSS.cssStatus.ediff);
        }
        return 1;
    };

    //------------------------------------------------------------------------
    // Additional attribute equipped parameter difference display function
    //------------------------------------------------------------------------
    Window_Base.prototype.drawCssActorEquipXPDiff = function(actor, x, y, width, paramId, lss) {
        if (paramId < 0 && paramId > 9) return 1;
        var target = lss.target;
        var item = FTKR.gameData.item;
        if (item && !actor.canEquip(item)) return 1;
        if (target) {
            var newValue = target.xparam(paramId);
            var diffvalue = newValue - actor.xparam(paramId);
            if (FTKR.CSS.cssStatus.param.decimals) {
                diffvalue = diffvalue.percent() + '%';
            }
            this.drawParamDiffValue(diffvalue, x, y, width, FTKR.CSS.cssStatus.ediff);
        }
        return 1;
    };

    //------------------------------------------------------------------------
    // Special attribute equipped parameter difference display function
    //------------------------------------------------------------------------
    Window_Base.prototype.drawCssActorEquipSPDiff = function(actor, x, y, width, paramId, lss) {
        if (paramId < 0 && paramId > 9) return 1;
        var target = lss.target;
        var item = FTKR.gameData.item;
        if (item && !actor.canEquip(item)) return 1;
        if (target) {
            var newValue = target.sparam(paramId);
            var diffvalue = newValue - actor.sparam(paramId);
            if (FTKR.CSS.cssStatus.param.decimals) {
                diffvalue = diffvalue.percent() + '%';
            }
            this.drawParamDiffValue(diffvalue, x, y, width, FTKR.CSS.cssStatus.ediff);
        }
        return 1;
    };

    //------------------------------------------------------------------------
    // AOP attribute display function
    //------------------------------------------------------------------------
    Window_Base.prototype.drawCssActorAopParam = function(actor, x, y, width, paramId, lss) {
        if (!Imported.FTKR_AOP) return 1;
        if (paramId < 0 && FTKR.AOP.useParamNum > 9) return 1;
        this.changeTextColor(this.systemColor());
        this.drawText(FTKR.AOP.params[paramId].text, x, y, width);
        this.resetTextColor();
        this.drawText(actor.aopParam(paramId), x, y, width, 'right');
        return 1;
    };

    //------------------------------------------------------------------------
    // Base AOP attribute display function
    //------------------------------------------------------------------------
    Window_Base.prototype.drawCssActorAopParamBase = function(actor, x, y, width, paramId, lss) {
        if (!Imported.FTKR_AOP) return 1;
        if (paramId < 0 && FTKR.AOP.useParamNum > 9) return 1;
        this.changeTextColor(this.systemColor());
        this.drawText(FTKR.AOP.params[paramId].text, x, y, width);
        this.resetTextColor();
        this.drawText(actor.aopParamBase(paramId), x, y, width, 'right');
        return 1;
    };

    //------------------------------------------------------------------------
    // AOP attribute difference display function
    //------------------------------------------------------------------------
    Window_Base.prototype.drawCssActorAopParamDiff = function(actor, x, y, width, paramId, lss) {
        if (!Imported.FTKR_AOP) return 1;
        if (paramId < 0 && FTKR.AOP.useParamNum > 9) return 1;
        var param = actor.aopParam(paramId);
        var base = actor.aopParamBase(paramId);
        var diff = param - base;
        this.drawParamDiffValue(diff, x, y, width, FTKR.CSS.cssStatus.aopdiff);
        return 1;
    };

    //------------------------------------------------------------------------
    // AOP parameter display function when equipping a specified item
    //------------------------------------------------------------------------
    Window_Base.prototype.drawCssActorEquipAopParam = function(actor, x, y, width, paramId, lss) {
        if (!Imported.FTKR_AOP) return 1;
        if (paramId < 0 && FTKR.AOP.useParamNum > 9) return 1;
        this.drawTextEx(FTKR.CSS.cssStatus.equip.arrow, x, y);
        var target = lss.target;
        var item = FTKR.gameData.item;
        if (item && !actor.canEquip(item)) return 1;
        if (this.checkShowEquipParam(actor, target)) {
            var newValue = target.aopParam(paramId);
            var diffvalue = newValue - actor.aopParam(paramId);
            this.changeTextColor(this.paramchangeTextColor(diffvalue));
            this.drawText(newValue, x, y, width, 'right');
        }
        return 1;
    };

    //------------------------------------------------------------------------
    // AOP equipped parameter difference display function
    //------------------------------------------------------------------------
    Window_Base.prototype.drawCssActorEquipAopDiff = function(actor, x, y, width, paramId, lss) {
        if (!Imported.FTKR_AOP) return 1;
        if (paramId < 0 && FTKR.AOP.useParamNum > 7) return 1;
        var target = lss.target;
        var item = FTKR.gameData.item;
        if (item && !actor.canEquip(item)) return 1;
        if (target) {
            var newValue = target.aopParam(paramId);
            var diffvalue = newValue - actor.aopParam(paramId);
            this.drawParamDiffValue(diffvalue, x, y, width, FTKR.CSS.cssStatus.ediffaop);
        }
        return 1;
    };
    

    //------------------------------------------------------------------------
    // Custom parameter display function
    //------------------------------------------------------------------------
    Window_Base.prototype.drawCssActorCustom = function(actor, x, y, width, custom) {
        if (!custom) return 1;
        var name = custom.name || '';
        var formula = custom.formula || '';
        var unit = custom.unit || '';
        var tux = this.convertTextWidth(unit);
        var value = this.evalCssCustomFormula(actor, formula);
        this.changeTextColor(this.systemColor());
        var tx = this.convertTextWidth(name);
        this.drawTextEx(name, x, y);
        this.resetTextColor();
        this.drawText(value, x + tx, y, width - tx - tux, 'right');
        if (unit) this.drawTextEx(unit, x + width - tux, y);
        return 1;
    };

    //------------------------------------------------------------------------
    // Custom gauge display function
    //------------------------------------------------------------------------
    Window_Base.prototype.drawCssActorGauge = function(actor, x, y, width, gauge) {
        if (!gauge) return 1;
        var current = this.evalCssStrFormula(actor, gauge.current);
        var max = this.evalCssStrFormula(actor, gauge.max);
        if (gauge.color1 >= 0 && gauge.color2 >= 0) {
            var rate = isNaN(max) ? 1 : current / max;
            var color1 = this.textColor(gauge.color1);
            var color2 = this.textColor(gauge.color2);
            this.drawGauge(x, y, width, rate, color1, color2);
        }
        this.changeTextColor(this.systemColor());
        var tx = this.convertTextWidth(gauge.name);
        this.drawTextEx(gauge.name, x, y);
        if (gauge.ref) {
            var ref = this.evalCssStrFormula(actor, gauge.ref);
            this.resetTextColor();
            this.drawText(ref, x + tx, y, width - tx, 'right');
        } else {
            if (tx) this.drawCssCurrentAndMax(tx, current, max, x, y, width,
                                this.normalColor(), this.normalColor());
        }
        return 1;
    };

    Window_Base.prototype.drawCssCurrentAndMax = function(labelWidth, current, max, x, y,
                                                      width, color1, color2) {
        var gauge = FTKR.CSS.cssStatus.gauge;
        var valueWidth = this.textWidth('0') * gauge.digit;
        var slashWidth = this.textWidth('/');
        var x1 = x + width - valueWidth;
        var x2 = x1 - slashWidth;
        var x3 = x2 - valueWidth;
        if (x3 >= x + labelWidth) {
            this.changeTextColor(color1);
            this.drawText(current, x3, y, valueWidth, 'right');
            this.changeTextColor(color2);
            this.drawText('/', x2, y, slashWidth, 'right');
            this.drawText(max, x1, y, valueWidth, 'right');
        } else {
            this.changeTextColor(color1);
            this.drawText(current, x1, y, valueWidth, 'right');
        }
    };

    //------------------------------------------------------------------------
    // Equipment display function
    //------------------------------------------------------------------------
    Window_Base.prototype.drawCssActorEquip = function(actor, x, y, width, equipId, lss) {
        if ((equipId +'').toUpperCase() === 'SHOP') {
            equipId = lss.item.etypeId - 1;
        } else {
            FTKR.setGameData(actor, lss.target, lss.item);
            equipId = this.convertCssNumber(actor, equipId);
        }
        var equip = actor.equips()[equipId];
        if (equip) {
            this.drawCssIcon(equip.iconIndex, x, y, 1, true);
            var iw = Window_Base._iconWidth + 4;
            this.resetTextColor();
            this.drawText(equip.name, x + iw, y, width - iw);
        }
        return 1;
    };

    //------------------------------------------------------------------------
    // Equipment availability display function
    //------------------------------------------------------------------------
    Window_Base.prototype.drawCssCannotEquip = function(actor, x, y, width, text, lss) {
        var item = FTKR.gameData.item || lss.item;
        if (!item) return 1;
        if (!actor.canEquip(item)) {
            text = text == 'null' ? 'Cannot equip' : text;
            this.drawTextEx(text, x, y);
        }
        return 1;
    };

    //------------------------------------------------------------------------
    // Profile display function
    //------------------------------------------------------------------------
    Window_Base.prototype.drawCssProfile = function(actor, x, y, width) {
        this._setItem = actor.actor();
        var texts = actor.profile().split('\n');
        var dy = this.lineHeight();
        texts.forEach( function(text, i) {
            this.drawTextEx(text, x, y + dy * i);
        },this);
        return texts.length;
    };

    //------------------------------------------------------------------------
    // Text display function
    //------------------------------------------------------------------------
    Window_Base.prototype.drawCssText = function(actor, x, y, width, text) {
        if (!text) return 1;
        var text = this.evalCssStrFormula(actor, text);
        this.changeTextColor(this.systemColor());
        this.drawTextEx(text, x, y);
        this.resetTextColor();
        return 1;
    };

    //------------------------------------------------------------------------
    // JS expression display function
    //------------------------------------------------------------------------
    Window_Base.prototype.drawCssEval = function(actor, x, y, width, text, isNumber) {
        if (!text) return 1;
        if (isNumber) {
            var value = this.evalCssCustomFormula(actor, text);
            var align = 'right';
        } else {
            var value = this.evalCssStrFormula(actor, text);
            var align = 'left';
        }
        this.resetTextColor();
        this.drawText(value, x, y, width, align);
        return 1;
    };

    //------------------------------------------------------------------------
    // Custom image display function
    //------------------------------------------------------------------------
    Window_Base.prototype.drawCssActorImage = function(actor, x, y, width, id) {
        if (!actor) return 1;
        this.changePaintOpacity(this.isEnabledChangePaintOpacity(actor));
        var line = this.drawCssImage(actor, x, y, width, id);
        this.changePaintOpacity(true);
        return line;
    };

    Window_Base.prototype.drawCssImage = function(actor, dx, dy, width, id) {
        var bgi = actor.cssbgi(id) ? actor.cssbgi(id) : actor.actor().cssbgi[id];
        if (!bgi) return 1;
        var bitmap = ImageManager.loadPicture(bgi.name);
        if (!bitmap) return 1;
        var sw = bgi.width || bitmap.width;
        var sh = bgi.height || bitmap.height;
        var sx = bgi.offsetX || 0;
        var sy = bgi.offsetY || 0;
        var dh = sh * bgi.scale / 100;
        var dw = sw * bgi.scale / 100;
        var offsetX = FTKR.CSS.cssStatus.image.posiX * (width - dw) / 2;
        dx = Math.floor(dx + offsetX);
        this.contents.blt(bitmap, sx, sy, sw, sh, dx, dy, dw, dh);
        return Math.ceil(dh / this.lineHeight()) || 1;
    };

    //------------------------------------------------------------------------
    // Custom gauge display function set for actor
    //------------------------------------------------------------------------
    Window_Base.prototype.drawCssActorCustomGauge = function(actor, x, y, width, paramId) {
        var gauge = actor.actor().cssGauges[paramId];
        if (!gauge) return 1;
        return this.drawCssActorGauge(actor, x, y, width, gauge);
    };

    //------------------------------------------------------------------------
    // Custom gauge display function set for class
    //------------------------------------------------------------------------
    Window_Base.prototype.drawCssClassCustomGauge = function(actor, x, y, width, paramId) {
        var gauge = actor.currentClass().cssGauges[paramId];
        if (!gauge) return 1;
        return this.drawCssActorGauge(actor, x, y, width, gauge);
    };

    //------------------------------------------------------------------------
    // Message display function for actor's state changes
    //------------------------------------------------------------------------
    Window_Base.prototype.drawCssActorMessage = function(actor, x, y, width) {
        if (!actor._levelUpCount) return 1;
        var text = FTKR.CSS.cssStatus.message.levelUp.format(actor.name(), actor.level, actor._levelUpCount);
        this.drawTextEx(text, x, y);
        actor._levelUpMessage = true;
        return 1;
    };

    var _Scene_Base_start = Scene_Base.prototype.start;
    Scene_Base.prototype.start = function() {
        _Scene_Base_start.call(this);
        if ($gameParty) {
            $gameParty.members().forEach( function(actor){
                if (actor && actor._levelUpMessage) {
                    actor._levelUpCount = 0;
                    actor._levelUpMessage = false;
                }
            });
        }
    };

    //------------------------------------------------------------------------
    // Horizontal line display function
    //------------------------------------------------------------------------
    Window_Base.prototype.drawCssLine = function(x, y, width, thick, color) {
        var thick = thick > 0 ? thick : 2;
        var color = color > 0 ? color : 0;
        var lineY = y + this.lineHeight() / 2 - thick / 2;
        this.contents.paintOpacity = 48;
        this.contents.fillRect(x, lineY, width, thick, this.textColor(color));
        this.contents.paintOpacity = 255;
        return 1;
    };

    //------------------------------------------------------------------------
    // Fix for default window layout settings
    //------------------------------------------------------------------------

    var _CSS_Window_Base_initialize = Window_Base.prototype.initialize;
    Window_Base.prototype.initialize = function(x, y, width, height) {
        this.initCssLayout();
        _CSS_Window_Base_initialize.call(this, x, y, width, height);
    };

    Window_Base.prototype.initCssLayout = function() {
        var lss = this.standardCssLayout();
        if (lss && lss.enabled) {
            this._customFontSize    = lss.fontSize;
            this._customPadding     = lss.padding;
            this._customLineHeight  = lss.lineHeight;
            this._customBackOpacity = lss.opacity;
            this._customHideFrame   = lss.hideFrame;
        }
        this._lssStatus = this.standardCssStatus();
    };

    Window_Base.prototype.standardCssLayout = function() {
        return {};
    }

    Window_Base.prototype.standardCssStatus = function() {
        return {};
    };

    Window_Selectable.prototype.initCssLayout = function() {
        Window_Base.prototype.initCssLayout.call(this);
        var lss = this.standardCssLayout();
        if (lss && lss.enabled) {
            this._customMaxCols = lss.maxCols;
            this._customCursorHeight = lss.cursorHeight;
            this._customHorSpacing = lss.hspace;
        }
    };

    //=============================================================================
    // Referencing custom data
    //=============================================================================

    var _CSS_Window_Base_standardFontSize = Window_Base.prototype.standardFontSize;
    Window_Base.prototype.standardFontSize = function() {
        return this._customFontSize ? this._customFontSize : _CSS_Window_Base_standardFontSize.call(this);
    };

    var _CSS_Window_Base_standardPadding = Window_Base.prototype.standardPadding;
    Window_Base.prototype.standardPadding = function() {
        return this._customPadding >= 0 ? this._customPadding : _CSS_Window_Base_standardPadding.call(this);
    };

    var _CSS_Window_Base_lineHeight = Window_Base.prototype.lineHeight;
    Window_Base.prototype.lineHeight = function() {
        return this._customLineHeight ? this._customLineHeight : _CSS_Window_Base_lineHeight.call(this);
    };

    var _CSS_Window_Base_standardBackOpacity = Window_Base.prototype.standardBackOpacity;
    Window_Base.prototype.standardBackOpacity = function() {
        return this._customBackOpacity >= 0 ? this._customBackOpacity : _CSS_Window_Base_standardBackOpacity.call(this);
    };

    //------------------------------------------------------------------------
    // _customHideFrame
    //------------------------------------------------------------------------
    // Window frame display
    Window_Base.prototype._refreshFrame = function() {
        Window.prototype._refreshFrame.call(this);
        if (this._customHideFrame) {
            this._windowFrameSprite.alpha = 0; // Remove only the frame
        } else {
            this._windowFrameSprite.alpha = 1;
        }
    };

    //------------------------------------------------------------------------
    // _customSpacing
    //------------------------------------------------------------------------
    Window_Base.prototype.spacing = function() {
        return 0;
    };

    var _CSS_Window_Selectable_spacing = Window_Selectable.prototype.spacing;
    Window_Selectable.prototype.spacing = function() {
        return this._customSpacing !== undefined ? this._customSpacing : _CSS_Window_Selectable_spacing.call(this);
    };

    Window_Selectable.prototype.customSpacing = function() {
        return this._customSpacing !== undefined ? this._customSpacing : this.spacing();
    };

    //------------------------------------------------------------------------
    // _customMaxCols
    //------------------------------------------------------------------------

    var _CSS_Window_Selectable_maxCols = Window_Selectable.prototype.maxCols;
    Window_Selectable.prototype.maxCols = function() {
        return this._customMaxCols ? this._customMaxCols : _CSS_Window_Selectable_maxCols.call(this);
    };

    Window_Selectable.prototype.customMaxCols = function() {
        return this._customMaxCols ? this._customMaxCols : this.maxCols();
    };

    //------------------------------------------------------------------------
    // _customCursorHeight
    //------------------------------------------------------------------------

    Window_Selectable.prototype.cursorHeight = function() {
        return this._customCursorHeight;
    };

    //------------------------------------------------------------------------
    // _customHorSpacing
    //------------------------------------------------------------------------

    Window_Selectable.prototype.itemHeightSpace = function() {
        return this._customHorSpacing;
    };
    
    //=============================================================================
    // Apply custom data
    //=============================================================================

    // Rewrite
    Window_Selectable.prototype.maxRows = function() {
        return Math.max(Math.ceil(this.maxItems() / this.customMaxCols()), 1);
    };
    
    // Rewrite
    Window_Selectable.prototype.row = function() {
        return Math.floor(this.index() / this.customMaxCols());
    };
    
    // Rewrite
    Window_Selectable.prototype.maxPageItems = function() {
        return this.maxPageRows() * this.customMaxCols();
    };
    
    // Rewrite
    Window_Selectable.prototype.topIndex = function() {
        return this.topRow() * this.customMaxCols();
    };
    
    // Rewrite
    Window_Selectable.prototype.cursorDown = function(wrap) {
        var index = this.index();
        var maxItems = this.maxItems();
        var maxCols = this.customMaxCols();
        if (index < maxItems - maxCols || (wrap && maxCols === 1)) {
            this.select((index + maxCols) % maxItems);
        }
    };
    
    // Rewrite
    Window_Selectable.prototype.cursorUp = function(wrap) {
        var index = this.index();
        var maxItems = this.maxItems();
        var maxCols = this.customMaxCols();
        if (index >= maxCols || (wrap && maxCols === 1)) {
            this.select((index - maxCols + maxItems) % maxItems);
        }
    };
    
    // Rewrite
    Window_Selectable.prototype.cursorRight = function(wrap) {
        var index = this.index();
        var maxItems = this.maxItems();
        var maxCols = this.customMaxCols();
        if (maxCols >= 2 && (index < maxItems - 1 || (wrap && this.isHorizontal()))) {
            this.select((index + 1) % maxItems);
        }
    };
    
    // Rewrite
    Window_Selectable.prototype.cursorLeft = function(wrap) {
        var index = this.index();
        var maxItems = this.maxItems();
        var maxCols = this.customMaxCols();
        if (maxCols >= 2 && (index > 0 || (wrap && this.isHorizontal()))) {
            this.select((index - 1 + maxItems) % maxItems);
        }
    };
    
    // Rewrite
    Window_Command.prototype.numVisibleRows = function() {
        return Math.ceil(this.maxItems() / this.customMaxCols());
    };
        
    // Rewrite
    Window_Selectable.prototype.itemWidth = function() {
        return Math.floor((this.width - this.padding * 2 +
                           this.customSpacing()) / this.customMaxCols() - this.customSpacing());
    };
    
    var _Window_Selectable_itemHeight = Window_Selectable.prototype.itemHeight;
    Window_Selectable.prototype.itemHeight = function() {
        return this.cursorHeight() ? 
            this.lineHeight() * this.cursorHeight() :
            _Window_Selectable_itemHeight.call(this);
    };

    Window_Selectable.prototype.unitHeight = function() {
        return this.itemHeight() + this.itemHeightSpace();
    };

    Window_Selectable.prototype.unitWidth = function() {
        return this.itemWidth() + this.customSpacing();
    };

    var _CSS_Window_Selectable_maxPageRows = Window_Selectable.prototype.maxPageRows;
    Window_Selectable.prototype.maxPageRows = function() {
        if (this.itemHeightSpace() !== undefined) {
            var pageHeight = this.height - this.padding * 2;
            return Math.floor(pageHeight / this.unitHeight());
        } else {
            return _CSS_Window_Selectable_maxPageRows.call(this);
        }
    };

    var _CSS_Window_Selectable_topRow = Window_Selectable.prototype.topRow;
    Window_Selectable.prototype.topRow = function() {
        return this.itemHeightSpace() !== undefined ? Math.floor(this._scrollY / this.unitHeight()) :
            _CSS_Window_Selectable_topRow.call(this);
    };

    var _CSS_Window_Selectable_setTopRow = Window_Selectable.prototype.setTopRow;
    Window_Selectable.prototype.setTopRow = function(row) {
        if (this.itemHeightSpace() !== undefined) {
            var scrollY = row.clamp(0, this.maxTopRow()) * this.unitHeight();
            if (this._scrollY !== scrollY) {
                this._scrollY = scrollY;
                this.refresh();
                this.updateCursor();
            }
        } else {
            return _CSS_Window_Selectable_setTopRow.call(this, row);
        }
    };

    var _CSS_Window_Selectable_itemRect = Window_Selectable.prototype.itemRect;
    Window_Selectable.prototype.itemRect = function(index) {
        if (this.itemHeightSpace() !== undefined) {
            var rect = new Rectangle();
            var maxCols = this.customMaxCols();
            rect.width = this.itemWidth();
            rect.height = this.itemHeight();
            rect.x = index % maxCols * this.unitWidth() - this._scrollX;
            rect.y = Math.floor(index / maxCols) * this.unitHeight() - this._scrollY;
            return rect;
        } else {
            return _CSS_Window_Selectable_itemRect.call(this, index);
        }
    };

    //=============================================================================
    // Sprite_Battler fix
    // Sprite_Actor fix
    //=============================================================================

    FTKR.CSS.Sprite_Battler_initMembers = Sprite_Battler.prototype.initMembers;
    Sprite_Battler.prototype.initMembers = function() {
        FTKR.CSS.Sprite_Battler_initMembers.call(this);
        this._canMove = true;
    };

    //------------------------------------------------------------------------
    // Prevent changing the position of the SV battle character
    //------------------------------------------------------------------------
    Sprite_Actor.prototype.stopMove = function() {
        this._canMove = false;
    };

    Sprite_Actor.prototype.canMove = function() {
        return this._canMove;
    };

    FTKR.CSS.Sprite_Actor_updateTargetPosition = Sprite_Actor.prototype.updateTargetPosition;
    Sprite_Actor.prototype.updateTargetPosition = function() {
        if (!this.canMove()) return;
        FTKR.CSS.Sprite_Actor_updateTargetPosition.call(this);
    };

}()); // END

//=============================================================================
// Sprite_CssStateIcon
// Sprite for state icon
//=============================================================================

function Sprite_CssStateIcon() {
    this.initialize.apply(this, arguments);
}

Sprite_CssStateIcon.prototype = Object.create(Sprite_StateIcon.prototype);
Sprite_CssStateIcon.prototype.constructor = Sprite_CssStateIcon;

Sprite_CssStateIcon.prototype.initialize = function(index, showNum) {
    Sprite_StateIcon.prototype.initialize.call(this);
    this._index = index;
    this._showNum = showNum;
};

Sprite_CssStateIcon._iconWidth  = 32;
Sprite_CssStateIcon._iconHeight = 32;

Sprite_CssStateIcon.prototype.initMembers = function() {
    this._battler = null;
    this._iconIndex = 0;
    this._animationCount = this.animationWait();
    this._animationIndex = 0;
    this.anchor.x = 0;
    this.anchor.y = 0;
    if (Imported.YEP_BuffsStatesCore) {
        if (!this._turnCounterSprite) {
            this._turnCounterSprite = new Sprite();
            this.addChild(this._turnCounterSprite);
        }
        var w = Window_Base._iconWidth;
        var h = Window_Base._iconHeight;
        this._turnCounterSprite.bitmap = new Bitmap(w, h);
        this._turnCounterSprite.anchor.x = 0;
        this._turnCounterSprite.anchor.y = 0;
    }
};

Sprite_CssStateIcon.prototype.setup = function(battler, showNum) {
    this.initMembers();
    this._battler = battler;
    this._showNum = showNum;
    this.setFrame();
};

Sprite_CssStateIcon.prototype.updateIcon = function() {
    var icons = [];
   // if (this._battler && this._battler.isAlive()) {
    if (this._battler) {
            icons = this._battler.allIcons();
    }
    if (icons.length > 0) {
        this._animationIndex++;
        if (this._animationIndex >= Math.ceil(icons.length / this._showNum)) {
            this._animationIndex = 0;
        }
        this._iconIndex = icons[this._animationIndex * this._showNum + this._index];
    } else {
        this._animationIndex = 0;
        this._iconIndex = 0;
    }
};

Sprite_CssStateIcon.prototype.animationWait = function() {
    return FTKR.CSS.cssStatus.state.wait;
};

Sprite_CssStateIcon.prototype.setScale = function(scale) {
    this.scale._x = scale;
    this.scale._y = scale;
};

Sprite_CssStateIcon.prototype.offsetMove = function(offset, vartical) {
    !vartical ? this.x += offset : this.y += offset;
};

Sprite_CssStateIcon.prototype.update = function() {
    Sprite.prototype.update.call(this);
    this.updateOpacity();
    this._animationCount++;
    if (this._animationCount >= this.animationWait()) {
        this.updateIcon();
        this.updateFrame();
        this._animationCount = 0;
    }
};

Sprite_CssStateIcon.prototype.updateOpacity = function() {
    if (this.opacity != this.parent.openness) {
        this.opacity = this.parent.openness;
    }
};

//=============================================================================
// Fix for YEP_BuffsStatesCore
//=============================================================================
if (Imported.YEP_BuffsStatesCore) {

Sprite_CssStateIcon.prototype.updateTurnAndCounter = function() {
    this._turnCounterSprite.bitmap.clear();
    if (!this._battler) return;
    var group = this._battler.statesAndBuffs();
    if (group.length <= 0) return;
    var state = group[this._animationIndex * this._showNum + this._index];
    if (!state) return;
    if (typeof state === 'number') {
        if (Yanfly.Param.BSCEnemyBTurn) {
            this.drawBuffTurns(state);
            if (Yanfly.Param.BSCShowBuffRate) {
                this.drawBuffRate(state)
            }
        }
    } else {
        if (Yanfly.Param.BSCEnemyTurn) this.drawStateTurns(state);
        if (Yanfly.Param.BSCEnemyCounter) this.drawStateCounter(state);
    }
};

}// YEP_BuffsStatesCore.js END

// EOF
