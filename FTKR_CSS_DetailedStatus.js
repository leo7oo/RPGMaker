// =============================================================================
// Plugin to modify the display content of the detailed status screen
// FTKR_CSS_DetailedStatus.js
// Plugin No : 27
// Author     : Futokoro
// Creation Date : 2017/04/21
// Last Updated Date : 2018/12/13
// Version : v2.1.4
// =============================================================================

var Imported = Imported || {};
Imported.FTKR_CSS_DS = true;

var FTKR = FTKR || {};
FTKR.CSS.DS = FTKR.CSS.DS || {};

// =============================================================================
/*:
 * @plugindesc v2.1.4 Plugin to modify the display content of the detailed status screen
 * @author Futokoro
 *
 * @param --Detailed Status Display Settings--
 * @default
 * 
 * @param statusList
 * @desc Sets the statuses to display and their positions.
 * @type struct<status>[]
 * @default ["{\"text\":\"name\",\"value\":\"\",\"x\":\"6\",\"y\":\"0\",\"width\":\"150\"}","{\"text\":\"class\",\"value\":\"\",\"x\":\"192\",\"y\":\"0\",\"width\":\"150\"}","{\"text\":\"nickname\",\"x\":\"432\",\"y\":\"0\",\"width\":\"150\"}","{\"text\":\"line\",\"value\":\"\",\"x\":\"0\",\"y\":\"36\",\"width\":\"780\"}","{\"text\":\"face\",\"x\":\"12\",\"y\":\"72\",\"width\":\"144\"}","{\"text\":\"name\",\"x\":\"204\",\"y\":\"72\",\"width\":\"150\"}","{\"text\":\"state\",\"x\":\"204\",\"y\":\"108\",\"width\":\"150\"}","{\"text\":\"hp\",\"x\":\"204\",\"y\":\"144\",\"width\":\"150\"}","{\"text\":\"mp\",\"x\":\"204\",\"y\":\"180\",\"width\":\"150\"}","{\"text\":\"custom(%1)\",\"value\":\"0\",\"x\":\"456\",\"y\":\"72\",\"width\":\"270\"}","{\"text\":\"custom(%1)\",\"value\":\"1\",\"x\":\"456\",\"y\":\"108\",\"width\":\"270\"}","{\"text\":\"custom(%1)\",\"value\":\"2\",\"x\":\"456\",\"y\":\"144\",\"width\":\"270\"}","{\"text\":\"custom(%1)\",\"value\":\"3\",\"x\":\"456\",\"y\":\"180\",\"width\":\"270\"}","{\"text\":\"line\",\"value\":\"\",\"x\":\"0\",\"y\":\"216\",\"width\":\"780\"}","{\"text\":\"param(%1)\",\"value\":\"2\",\"x\":\"48\",\"y\":\"252\",\"width\":\"160\"}","{\"text\":\"equip(%1)\",\"value\":\"0\",\"x\":\"432\",\"y\":\"252\",\"width\":\"312\"}","{\"text\":\"param(%1)\",\"value\":\"3\",\"x\":\"48\",\"y\":\"288\",\"width\":\"160\"}","{\"text\":\"equip(%1)\",\"value\":\"1\",\"x\":\"432\",\"y\":\"288\",\"width\":\"312\"}","{\"text\":\"param(%1)\",\"value\":\"4\",\"x\":\"48\",\"y\":\"324\",\"width\":\"160\"}","{\"text\":\"equip(%1)\",\"value\":\"2\",\"x\":\"432\",\"y\":\"324\",\"width\":\"312\"}","{\"text\":\"param(%1)\",\"value\":\"5\",\"x\":\"48\",\"y\":\"360\",\"width\":\"160\"}","{\"text\":\"equip(%1)\",\"value\":\"3\",\"x\":\"432\",\"y\":\"360\",\"width\":\"312\"}","{\"text\":\"param(%1)\",\"value\":\"6\",\"x\":\"48\",\"y\":\"396\",\"width\":\"160\"}","{\"text\":\"equip(%1)\",\"value\":\"5\",\"x\":\"432\",\"y\":\"396\",\"width\":\"312\"}","{\"text\":\"param(%1)\",\"value\":\"7\",\"x\":\"48\",\"y\":\"432\",\"width\":\"160\"}","{\"text\":\"equip(%1)\",\"value\":\"4\",\"x\":\"432\",\"y\":\"432\",\"width\":\"312\"}","{\"text\":\"line\",\"value\":\"\",\"x\":\"0\",\"y\":\"468\",\"width\":\"780\"}","{\"text\":\"profile\",\"value\":\"\",\"x\":\"0\",\"y\":\"504\",\"width\":\"780\"}"]
 * @parent --Detailed Status Display Settings--
 * 
 * @param DS Space In Text
 * @desc Specifies the interval when displaying multiple items within the text.
 * @default 5
 * @parent --Detailed Status Display Settings--
 * 
 * @param --Window Settings--
 * @desc 
 * 
 * @param Enabled Custom Window
 * @desc Whether to use the window layout change feature.
 * 0 - Disabled, 1 - Enabled
 * @default 0
 * @type select
 * @option Disable
 * @value 0
 * @option Enable
 * @value 1
 * @parent --Window Settings--
 * 
 * @param Font Size
 * @desc Font size
 * @default 28
 * @parent --Window Settings--
 * 
 * @param Window Padding
 * @desc Padding around the window
 * @default 18
 * @parent --Window Settings--
 * 
 * @param Window Line Height
 * @desc Line height within the window
 * @default 36
 * @parent --Window Settings--
 * 
 * @param Window Opacity
 * @desc Background opacity of the window
 * @default 192
 * @parent --Window Settings--
 * 
 * @param Hide Window Frame
 * @desc Whether to hide the window frame
 * 1 - Hide, 0 - Show
 * @default 0
 * @type select
 * @option Show
 * @value 0
 * @option Hide
 * @value 1
 * @parent --Window Settings--
 * 
 * @param Auto Refresh Window
 * @desc Settings for automatically refreshing the display content
 * This setting will work even if layout changes are disabled
 * @type struct<update>
 * @default {"enabled":"false","count":"60"}
 * @parent --Window Settings--
 * 
 * @help
 * -----------------------------------------------------------------------------
 * Overview
 * -----------------------------------------------------------------------------
 * This plugin allows you to change the layout of the detailed status screen.
 * 
 * This plugin requires FTKR_CustomSimpleActorStatus.js (v3.0.0 or later).
 * 
 * To use this plugin, please refer to the online manual below:
 * https://github.com/futokoro/RPGMaker/blob/master/FTKR_CSS_DetailedStatus.en.md
 * 
 * 
 * -----------------------------------------------------------------------------
 * Setup Instructions
 * -----------------------------------------------------------------------------
 * 1. Add this plugin to the "Plugin Manager" of your project.
 * 
 * 2. When combining with the following plugins, pay attention to the order in the Plugin Manager.
 * 
 *    FTKR_CustomSimpleActorStatus.js (Modifies the status display)
 *    ↑ Register above this plugin ↑
 *    FTKR_CSS_DetailedStatus.js
 * 
 * 
 * -----------------------------------------------------------------------------
 * Actor Detailed Status Display Settings
 * -----------------------------------------------------------------------------
 * By configuring the plugin parameters, you can modify the layout of the status screen.
 * 
 * For the meaning of each parameter and how to configure them, refer to the help of
 * FTKR_CustomSimpleActorStatus.js.
 * 
 * Additionally, settings for walking characters, SV battle characters, custom parameters,
 * and custom gauges will follow the configuration of FTKR_CustomSimpleActorStatus.js.
 * 
 * 
 * -----------------------------------------------------------------------------
 * Status Window Settings
 * -----------------------------------------------------------------------------
 * The following plugin parameters can be configured.
 * 
 * <Enabled Custom Window>
 *    : Specifies whether to use the window layout change feature.
 *    : 0 - Disabled, 1 - Enabled
 * 
 * <Font Size>
 *    : Changes the font size within the window.
 *    : Default is 28. (Unit is pixels)
 * 
 * <Window Padding>
 *    : Changes the padding around the window.
 *    : Default is 18. (Unit is pixels)
 * 
 * <Window Line Height>
 *    : Changes the line height within the window.
 *    : Default is 36. (Unit is pixels)
 * 
 * <Window Opacity>
 *    : Changes the background opacity of the window.
 *    : Default is 192.
 *    : 0 - Transparent, 255 - Opaque
 * 
 * <Hide Window Frame>
 *    : Specifies whether to hide the window frame.
 *    : 1 - Hide, 0 - Show
 *    : Default is Show.
 * 
 * 
 * <Window Height>
 * The window height is calculated by the following formula:
 *    [Window Height] = [Number of Vertical Rows] × [Line Height] + [Padding Size] × 2
 * 
 * 
 * <Font Size and Line Height>
 * It is recommended to set the following relationships:
 *    Font Size < Line Height
 * 
 * 
 * <How to Hide the Window>
 * The following settings will hide the window frame and background,
 * displaying only the actor's status.
 * 
 * <Window Opacity>     : 0
 * <Hide Window Frame>  : 1
 * 
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
 * v2.1.4 - 2018/12/13 : Changed default value for plugin parameter statusList
 * 
 * v2.1.3 - 2018/10/20 : Conflict avoidance
 *    1. Supported proficiency display in dsWeaponMastery plugin
 * 
 * v2.1.2 - 2018/09/29 : Feature Addition
 *    1. Added selectable items in the plugin parameter list.
 * 
 * v2.1.1 - 2018/09/12 : Removed unnecessary plugin parameters
 * 
 * v2.1.0 - 2018/08/30 : Feature Addition
 *    1. Added auto-refresh function for the window's display content.
 *    2. Added selectable statuses in the plugin parameter list.
 * 
 * v2.0.0 - 2018/08/19 : Changed to be compatible with FTKR_CustomSimpleActorStatus v3.0.0
 * 
 * v1.1.0 - 2017/11/18 : Spec Change
 *    1. Compatible with FTKR_CustomSimpleActorStatus.js v2.6.0
 * 
 * v1.0.2 - 2017/05/13 : Bug Fix
 *    1. Fixed bug where window settings weren't functioning correctly.
 * 
 * v1.0.1 - 2017/05/08 : Feature Addition, Removed Unnecessary Parameters
 *    1. Added window setting change feature.
 * 
 * v1.0.0 - 2017/04/21 : Initial Release
 * 
 * -----------------------------------------------------------------------------
 */
/*~struct~status:
 * @param text
 * @desc Select the status to display
 * If it's not in the list, write it directly as text
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
 * @option Character Image
 * @value chara
 * @option SV Battle Character Image
 * @value sv
 * @option State (Horizontal)
 * @value state
 * @option State (Vertical)
 * @value state2(%1)
 * @option Profile
 * @value profile
 * @option Normal Parameter Value
 * @value param(%1)
 * @option Normal Parameter Value (Base)
 * @value pbase(%1)
 * @option Normal Parameter Value (Increased)
 * @value pdiff(%1)
 * @option Equip
 * @value equip(%1)
 * @option Equip Parameter
 * @value eparam(%1)
 * @option Custom Parameter
 * @value custom(%1)
 * @option Custom Gauge
 * @value gauge(%1)
 * @option Actor-Specific Custom Gauge
 * @value agauge(%1)
 * @option Class-Specific Custom Gauge
 * @value cgauge(%1)
 * @option Custom Image
 * @value image
 * @option Custom Image (Registered ID)
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
 * @option AOP Ability Value (Increased)
 * @value aopdiff(%1)
 * @option AOP Equip Parameter
 * @value eaop(%1)
 * @option Item Name
 * @value iname
 * @option Item Icon
 * @value iicon
 * @option Item Description
 * @value idesc
 * @option Item Type
 * @value itype
 * @option Item Equip Type
 * @value ietype
 * @option Item Range
 * @value iscope
 * @option Item Element
 * @value ielement
 * @option Item Detailed Settings
 * @value iparam(%1)
 * @option Item Custom Image
 * @value iimage(%1)
 * @option Map Name
 * @value mapname
 *
 * @param value
 * @desc Enter the content of %1 for the status set in code(%1) format
 * @default 
 * 
 * @param x
 * @desc X coordinate to display
 * @default 0
 *
 * @param y
 * @desc Y coordinate to display
 * @default 0
 *
 * @param width
 * @desc Width to display
 * @default 0
 *
 */
/*~struct~update:
 * @param enabled
 * @desc Whether to auto-update the window's display
 * @default false
 * @type boolean
 * @on Auto-update ON
 * @off Auto-update OFF
 * 
 * @param count
 * @desc Set the display update interval.
 * @default 60
 * @type number
 *
*/

if (Imported.FTKR_CSS) (function(){
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
    // プラグイン パラメータ
    //=============================================================================
    var parameters = PluginManager.parameters('FTKR_CSS_DetailedStatus');

    //詳細ステータスオブジェクト
    FTKR.CSS.DS.detailedStatus = {
        statusList : paramParse(parameters['statusList']),
        spaceIn    : Number(parameters['DS Space In Text'] || 0),
    };

    FTKR.CSS.DS.window = {
        enabled       :paramParse(parameters['Enabled Custom Window'] || 0),
        fontSize      :Number(parameters['Font Size'] || 0),
        padding       :Number(parameters['Window Padding'] || 0),
        lineHeight    :Number(parameters['Window Line Height'] || 0),
        opacity       :Number(parameters['Window Opacity'] || 0),
        hideFrame     :paramParse(parameters['Hide Window Frame'] || 0),
        autoRefresh   :paramParse(parameters['Auto Refresh Window']) || {},
    };

    //=============================================================================
    // Window_Base
    //=============================================================================

    //=============================================================================
    // Window_Status
    // ステータス画面のステータスウィンドウの表示クラス
    //=============================================================================

    //書き換え
    var _DS_Window_Status_refresh = Window_Status.prototype.refresh;
    Window_Status.prototype.refresh = function() {
        this.contents.clear();
        if (Imported.dsWeaponMastery && this._switchWM) {
            _DS_Window_Status_refresh.call(this);
        } else {
            if (this._actor) {
                var w = this.width - this.padding * 2;
                var h = this.height - this.padding * 2;
                this.drawCssActorStatus(0, this._actor, 0, 0, w, h, FTKR.CSS.DS.detailedStatus);
            }
        }
    };

    Window_Status.prototype.standardCssLayout = function() {
        return FTKR.CSS.DS.window;
    };

    var _DS_Window_Status_update = Window_Status.prototype.update;
    Window_Status.prototype.update = function() {
        _DS_Window_Status_update.call(this);
        if(FTKR.CSS.DS.window.autoRefresh.enabled && !this._cssUpdateCount) {
            this.refresh();
            this._cssUpdateCount = FTKR.CSS.DS.window.autoRefresh.count;
        } else {
            this._cssUpdateCount--;
        }
    };

}());//TKR_CustomSimpleActorStatus.jsが必要

