// =============================================================================
// Plugin to modify the status display on the menu screen
// FTKR_CSS_MenuStatus.js
// Plugin No : 47
// Creator    : Futokoro
// Created on : 2017/06/18
// Last updated on : 2018/12/13
// Version : v2.1.3
// =============================================================================

var Imported = Imported || {};
Imported.FTKR_CSS_MS = true;

var FTKR = FTKR || {};
FTKR.CSS = FTKR.CSS || {};
FTKR.CSS.MS = FTKR.CSS.MS || {};

// =============================================================================
/*:
 * @plugindesc v2.1.3 Plugin to modify the status display on the menu screen
 * @author Futokoro
 *
 * @param --Simple Status Display--
 * @default
 * 
 * @param statusList
 * @desc Set the statuses to be displayed and their positions.
 * @type struct<status>[]
 * @default ["{\"text\":\"face\",\"x\":\"0\",\"y\":\"0\",\"width\":\"144\"}","{\"text\":\"name\",\"x\":\"162\",\"y\":\"0\",\"width\":\"150\"}","{\"text\":\"level\",\"x\":\"162\",\"y\":\"36\",\"width\":\"150\"}","{\"text\":\"state\",\"x\":\"162\",\"y\":\"72\",\"width\":\"150\"}","{\"text\":\"class\",\"value\":\"\",\"x\":\"342\",\"y\":\"0\",\"width\":\"198\"}","{\"text\":\"hp\",\"value\":\"\",\"x\":\"342\",\"y\":\"36\",\"width\":\"198\"}","{\"text\":\"mp\",\"value\":\"\",\"x\":\"342\",\"y\":\"72\",\"width\":\"198\"}"]
 * @parent --Simple Status Display--
 * 
 * @param Actor Status Space In Text
 * @desc Set the space between multiple status displays within the text.
 * @default 5
 * @parent --Simple Status Display--
 * 
 * @param --Status Window Settings--
 * @default
 * 
 * @param Enabled Custom Window
 * @desc Whether to use the window layout change feature.
 * 1 - Enable, 0 - Disable
 * @default 0
 * @parent --Status Window Settings--
 * 
 * @param Number Max Cols
 * @desc The number of actors to display horizontally: default 1
 * @default 1
 * @parent --Status Window Settings--
 * 
 * @param Cursor Line Number
 * @desc The number of lines for the cursor height: default 4
 * @default 4
 * @parent --Status Window Settings--
 * 
 * @param Cursor Height Space
 * @desc The vertical space between cursors: default 0
 * @default 0
 * @parent --Status Window Settings--
 * 
 * @param Font Size
 * @desc The font size: default 28
 * @default 28
 * @parent --Status Window Settings--
 * 
 * @param Window Padding
 * @desc The padding around the window: default 18
 * @default 18
 * @parent --Status Window Settings--
 * 
 * @param Window Line Height
 * @desc The height of one line inside the window: default 36
 * @default 36
 * @parent --Status Window Settings--
 * 
 * @param Window Opacity
 * @desc The opacity of the window's background: default 192
 * @default 192
 * @parent --Status Window Settings--
 * 
 * @param Hide Window Frame
 * @desc Whether to hide the window frame.
 * 1 - Hide, 0 - Show
 * @default 0
 * @parent --Status Window Settings--
 * 
 * @help
 * -----------------------------------------------------------------------------
 * Overview
 * -----------------------------------------------------------------------------
 * By implementing this plugin, you can change the layout of the actor's status
 * display on the menu screen.
 *
 * This plugin requires FTKR_CustomSimpleActorStatus.js (v3.0.0 or later).
 *
 * To use the plugin, please refer to the online manual below:
 * https://github.com/leo7oo/RPGMaker/blob/master/FTKR_CSS_MenuStatus.md
 *
 * -----------------------------------------------------------------------------
 * Setup
 * -----------------------------------------------------------------------------
 * 1. Add this plugin to the "Plugin Manager".
 *
 * 2. When using with the following plugin, be sure to pay attention to the
 *    order in the Plugin Manager:
 *
 *    FTKR_CustomSimpleActorStatus.js (Changes the status display)
 *    ↑ Register this plugin above ↑
 *    FTKR_CSS_MenuStatus.js
 *
 * -----------------------------------------------------------------------------
 * Actor Simple Status Display Settings
 * -----------------------------------------------------------------------------
 * By adjusting the plugin parameters, you can modify the layout of the status
 * display in the menu screen.
 *
 * The meanings and setup methods for each parameter can be found in
 * FTKR_CustomSimpleActorStatus.js help.
 *
 * Note that settings for walking characters, SV battle characters, custom
 * parameters, and custom gauges will follow the settings in
 * FTKR_CustomSimpleActorStatus.js.
 *
 * -----------------------------------------------------------------------------
 * Menu Screen Status Window Settings
 * -----------------------------------------------------------------------------
 * These settings can be modified with the following plugin parameters:
 *
 * <Enabled Custom Window>
 *    : Specifies whether to use the menu window change feature.
 *    : 0 - Disable, 1 - Enable
 *
 * <Number Max Cols>
 *    : Change the number of actors to be displayed horizontally within the
 *      window. The default is 1.
 *
 * <Cursor Line Number>
 *    : Set how many lines high the cursor (one actor) should be. The default
 *      is 4.
 *
 * <Cursor Height Space>
 *    : Set the vertical space between cursors. The default is 0 (unit is in
 *      pixels).
 *
 * <Font Size>
 *    : Change the font size inside the window. The default is 28 (unit is in
 *      pixels).
 *
 * <Window Padding>
 *    : Change the padding around the window. The default is 18 (unit is in
 *      pixels).
 *
 * <Window Line Height>
 *    : Change the height of one line inside the window. The default is 36
 *      (unit is in pixels).
 *
 * <Window Opacity>
 *    : Change the opacity of the window background. The default is 192.
 *    : 0 - Transparent, 255 - Opaque
 *
 * <Hide Window Frame>
 *    : Specify whether to hide the window frame.
 *    : 1 - Hide, 0 - Show
 *    : The default is Show.
 *
 * <Window Height>
 *    The window height is calculated with the following formula:
 *    [Window Height] = [Number of Lines] × [Line Height] + [Padding Size] × 2
 *
 * <Font Size and Line Height>
 *    It is recommended to configure the following relationship:
 *    Font Size < Line Height
 *
 * <How to Remove the Window>
 *    The window frame and background will disappear, displaying only the
 *    actor's status, when the following settings are made:
 *    <Window Opacity>     : 0
 *    <Hide Window Frame>  : 1
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
 * v2.1.3 - 2018/12/13 : Changed the default value of plugin parameter statusList
 * 
 * v2.1.2 - 2018/09/29 : Added features
 *    1. Added selectable items to the plugin parameters list.
 * 
 * v2.1.1 - 2018/09/12 : Removed unnecessary plugin parameters
 * 
 * v2.1.0 - 2018/08/30 : Added features
 *    1. Added the ability to select statuses to display from a list in the plugin parameters.
 * 
 * v2.0.0 - 2018/08/19 : Changed to be compatible with FTKR_CustomSimpleActorStatus v3.0.0
 * 
 * v1.1.0 - 2017/11/18 : Changed specifications
 *    1. Compatible with FTKR_CustomSimpleActorStatus.js v2.6.0
 * 
 * v1.0.0 - 2017/06/18 : Initial release
 *    Separated from FTKR_CustomSimpleActorStatus.js v1.8.0
 * 
 *-----------------------------------------------------------------------------
 */
//=============================================================================
/*~struct~status:
 * @param text
 * @desc Select the status to display.
 * If it's not in the list, enter it directly as text.
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
 * @option Face Image (Size Specified)
 * @value face(%1)
 * @option Walking Character Image
 * @value chara
 * @option SV Battle Character Image
 * @value sv
 * @option State (Horizontal)
 * @value state
 * @option State (Vertical)
 * @value state2(%1)
 * @option Profile
 * @value profile
 * @option Normal Ability Value
 * @value param(%1)
 * @option Normal Ability Value (Base)
 * @value pbase(%1)
 * @option Normal Ability Value (Increase)
 * @value pdiff(%1)
 * @option Equipment
 * @value equip(%1)
 * @option Equipment Parameters
 * @value eparam(%1)
 * @option Custom Parameters
 * @value custom(%1)
 * @option Custom Gauge
 * @value gauge(%1)
 * @option Actor Specific Custom Gauge
 * @value agauge(%1)
 * @option Class Specific Custom Gauge
 * @value cgauge(%1)
 * @option Custom Image
 * @value image
 * @option Custom Image (Registration ID)
 * @value image(%1)
 * @option Message
 * @value message
 * @option Text
 * @value text(%1)
 * @option JS Formula (Numeric Display)
 * @value eval(%1)
 * @option JS Formula (String Display)
 * @value streval(%1)
 * @option Horizontal Line
 * @value line
 * @option AOP Ability Value
 * @value aop(%1)
 * @option AOP Ability Value (Base)
 * @value aopbase(%1)
 * @option AOP Ability Value (Increase)
 * @value aopdiff(%1)
 * @option AOP Equipment Parameters
 * @value eaop(%1)
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
 * @option Item Scope
 * @value iscope
 * @option Item Element
 * @value ielement
 * @option Item Settings Details
 * @value idetail
 * @option All Items
 * @value allitems
 * @option Item Special Effect
 * @value iespec
 * @option Item Cost
 * @value icost
 * @option Item Damage
 * @value idamage
 * @option Item Price
 * @value iprice
 * @option Item Rarity
 * @value irarity
 * @option Skill Name
 * @value sname
 * @option Skill Icon
 * @value sicon
 * @option Skill Description
 * @value sdesc
 * @option Skill Type
 * @value stype
 * @option Skill Element
 * @value selement
 * @option Skill Special Effect
 * @value sspec
 * @option Skill Cost
 * @value scost
 * @option Skill Damage
 * @value sdamage
 * @option Skill Price
 * @value sprice
 * @option Skill Rarity
 * @value srarity
 * @option All Skills
 * @value allskills
 * @option Ability Name
 * @value pname
 * @option Ability Description
 * @value pdesc
 * @option Ability Icon
 * @value picon
 * @option Ability Special Effect
 * @value pspec
 * @option Ability Cost
 * @value pcost
 * @option Ability Price
 * @value pprice
 * @option Ability Rarity
 * @value prarity
 * @option All Abilities
 * @value allpabilities
 * @option All Weapon Skills
 * @value allwskills
 * @option All Skill Categories
 * @value allskillcategories
 * @option All Weapon Types
 * @value allwtypes
 * @option All Equipment Categories
 * @value allequipcategories
 * @option All Types
 * @value alltypes
 * 
 * @param x
 * @desc Set the position of the status display (x-axis).
 * @default 0
 * @type number
 * 
 * @param y
 * @desc Set the position of the status display (y-axis).
 * @default 0
 * @type number
 * 
 * @param width
 * @desc Set the width of the status display area.
 * @default 144
 * @type number
 * 
 */

if (Imported.FTKR_CSS) (function() {

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
    var parameters = PluginManager.parameters('FTKR_CSS_MenuStatus');

    // Simple Status Object
    FTKR.CSS.MS.simpleStatus = {
        statusList : paramParse(parameters['statusList']),
        spaceIn   :Number(parameters['Actor Status Space In Text'] || 0),
    };

    // Window Settings Object
    FTKR.CSS.MS.window = {
        enabled         :Number(parameters['Enabled Custom Window'] || 0),
        maxCols         :Number(parameters['Number Max Cols'] || 0),
        fontSize        :Number(parameters['Font Size'] || 0),
        padding         :Number(parameters['Window Padding'] || 0),
        lineHeight      :Number(parameters['Window Line Height'] || 0),
        opacity         :Number(parameters['Window Opacity'] || 0),
        hideFrame       :Number(parameters['Hide Window Frame'] || 0),
        cursorHeight    :Number(parameters['Cursor Line Number'] || 0),
        hspace          :Number(parameters['Cursor Height Space'] || 0),
    };

    //=============================================================================
    // Window_MenuStatus
    // Display Class for the Status Window on the Menu Screen
    //=============================================================================
    Window_MenuStatus.prototype.standardCssLayout = function() {
        return FTKR.CSS.MS.window;
    };

    Window_MenuStatus.prototype.standardCssStatus = function() {
        return FTKR.CSS.MS.simpleStatus;
    };

    var _Window_MenuStatus_itemHeight = Window_MenuStatus.prototype.itemHeight;
    Window_MenuStatus.prototype.itemHeight = function() {
        return FTKR.CSS.MS.window.enabled ? 
            this.lineHeight() * this.cursorHeight() :
            _Window_MenuStatus_itemHeight.call(this);
    };

    // Rewrite
    Window_MenuStatus.prototype.drawItemImage = function(index) {
    };

    // Rewrite
    Window_MenuStatus.prototype.drawItemStatus = function(index) {
        var lss = this._lssStatus;
        var actor = $gameParty.members()[index];
        var rect = this.itemRect(index);
        this.drawCssActorStatus(index, actor, rect.x, rect.y, rect.width, rect.height, lss);
    };

    // Rewrite
    Window_MenuStatus.prototype.drawAllItems = function() {
        var topIndex = this.topIndex();
        for (var i = 0; i < this.maxPageItems(); i++) {
            var index = topIndex + i;
            if (index < this.maxItems()) {
                this.drawItem(index);
            } else {
                this.clearCssSprite(index % this.maxPageItems());
            }
        }
    };

}());// EOF
