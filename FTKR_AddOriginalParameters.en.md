
# [FTKR_AddOriginalParameters](FTKR_AddOriginalParameters.js) Plugin

This is a plugin to add original parameters.

Download: [FTKR_AddOriginalParameters](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_AddOriginalParameters.js)

# Table of Contents

The following sections explain how to use the plugin in order:
1. [Overview](#overview)
2. [Basic Settings](#basic-settings)
3. [Actor and Class Settings](#actor-and-class-settings)
4. [Equipment and State Settings](#equipment-and-state-settings)
5. [Item and Skill Settings](#item-and-skill-settings)
6. [Enemy Settings](#enemy-settings)
7. [Uses of Original Parameters](#uses-of-original-parameters)
8. [Script Commands](#script-commands)
9. [Plugin Commands](#plugin-commands)
* [Plugin Update History](#plugin-update-history)
* [Extension Plugins](#extension-plugins)
* [License](#license)

# Overview

This plugin adds original parameters with the following features:

1. These parameters can be used in damage calculation formulas.
2. They can be leveled up with actors.
3. They can be enhanced by equipment and states.
4. They can be increased or decreased using items or skills.
5. They can be applied to enemies.

Original parameters can be added and used like HP or Attack Power.

# Basic Settings

By setting the following plugin parameters, you can set up to 10 original parameters (*1).

(*1) The number of usable parameters depends on the `Use Param Num` plugin parameter.

`<Parameter x Code>`

Set the code name for use in formulas, etc.  
For reference: The code for maximum HP is equivalent to 'mhp'.

`<Parameter x Current>`

Set the current value code for use in formulas, etc.  
This is not needed if you do not use the current value.  
For reference: The code for current HP is equivalent to 'hp'.

`<Parameter x Max>`

Set the maximum value of the parameter that can increase through leveling up or enhancements. If this setting is not used, the value from the `<Max Param>` plugin parameter will be used.  
For reference: For HP, the default maximum is 9999.

`<Parameter x Min>`

Set the minimum value for the parameter.  
If the current value is used, it must be set to 1 or more.  

The number of original parameters to be used in the game is set based on the value of the `Use Param Num` plugin parameter.

# Actor and Class Settings

By entering the following tags in the actor and class memo fields, you can set the initial values and growth rates for leveling up.

## Setting Initial Values

To use original parameters, you need to set initial values.

You can set the initial value (the parameter at level 1) by entering the following tag in the actor or class memo field:

```
<AOP Param x Level 1 Value: z (Rand r)>
<AOP 'code' Level 1 Value: z (Rand r)>
```

Set the initial value of parameter ID x (or 'code') to z.  
If you add (Rand r) inside the parentheses, a random value between ±r will be added to the initial value z.

### Example Input
For parameter 0 with code 'str':
```
<AOP str Level 1 Value: 10>
```
This sets the initial value of parameter 0 ('str') to 10.

## Setting Growth Rates for Leveling Up

There are two ways to set the growth rate:

### Add z when level is y
Tag Input Location: Actor, Class
```
<AOP Param x Level y Value: z (Rand r)>
<AOP 'code' Level y Value: z (Rand r)>
```

Set the increase for parameter ID x (or 'code') when the actor's level is y to z.  
If you add (Rand r) inside the parentheses, a random value between ±r will be added to z.

### Add z from level y1 to y2
Tag Input Location: Actor, Class
```
<AOP Param x Level y1 To y2 Value: z (Rand r)>
<AOP 'code' Level y1 To y2 Value: z (Rand r)>
```

Set the increase for parameter ID x (or 'code') when the actor's level is between y1 and y2 to z.  
If you add (Rand r) inside the parentheses, a random value between ±r will be added to z.

Example Input: For parameter 0 with code 'str':
```
<AOP str Level 2 To 10 Value: 5 Rand 2>
```
This adds a random value between 3 and 7 to parameter 0 ('str') each level from level 2 to level 10.

## Notes on Growth Through Leveling Up

1. If a random value is added, the increase will never be smaller than 0.
2. The random values are determined at the start of the game for each level range. Thus, even if you save/load the game, the values will remain the same.
3. If both the actor and class have settings, their total values will be used.

# Equipment and State Settings

By entering the following tags in the memo fields of weapons, armor, and states, you can enhance parameters while equipped or with active states.

### Add to Parameter
```
<AOP Param x Plus: y>
<AOP 'code' Plus: y>
```
This adds y to parameter x (or 'code') while equipped or with the active state.  
If y is a negative number, it will subtract instead.

### Multiply Parameter
```
<AOP Param x Rate: y>
<AOP 'code' Rate: y>
```
This multiplies parameter x (or 'code') by y while equipped or with the active state.  
If y is negative, it is treated as a positive number.

### Growth Through Leveling Up
This setting is for weapons and armor only.
```
<AOP Param x Grow: y>
<AOP 'code' Grow: y>
```
When the actor levels up while equipped with this weapon/armor, y will be added to parameter x (or 'code').  
This growth value remains even if the equipment is unequipped.

### Calculation Priority of Add and Multiply

The Plus tag value is added first, followed by the multiplication of the Rate tag value.

# Item and Skill Settings

By entering the following tags in the memo fields of items and skills, you can enhance parameters when used.

## Increase/Decrease Maximum Parameter Value

By entering the following tag in the memo fields of items or skills, you can increase or decrease the maximum parameter value.

```
<AOP Param x Grow: y(%)>
<AOP 'code' Grow: y(%)>
```

Using this item or skill increases y of parameter x (or 'code').  
If y is a negative number, it will decrease the value.  
If y is followed by '%', it adds y% of the maximum value to the parameter.

## Increase/Decrease Current Parameter Value

By entering the following tag in the memo fields of items or skills, you can increase or decrease the current value of a parameter.

```
<AOP Param x Get: y(%)>
<AOP 'code' Get: y(%)>
```

Using this item or skill adds y to the current value of parameter x (or 'code').  
If y is a negative number, it will subtract.  
If y is followed by '%', it adds y% of the maximum value to the current value.

Example Input: For parameter 0 with code 'str', where the maximum value is 100 and the current value is 60:
```
<AOP str Get: 5>
```
This adds 5 to the current value of parameter 0 ('str'), making the current value 65.

```
<AOP str Get: 50%>
```
This adds 50% of the maximum value (100) to the current value, resulting in a current value of 100 (maximum).

# Enemy Settings

By entering the following tags in the memo fields of enemies, you can set parameters for enemies.
```
<AOP Param x Value: y>
<AOP 'code' Value: y>
```
This sets the value of parameter x (or 'code') to y for the target enemy.

# Uses of Original Parameters

### Damage Calculation Formula

Original parameters can be used in damage calculation formulas.  
To use them, include the 'code' set in the plugin parameters in the damage calculation formula.

Example: For parameter 0 with code 'str':
```
(a.atk + a.str) * 4 - b.def * 2
```

### Equipment Requirements

Original parameters can be used for equipment requirements.  
Enter the following tag in the memo fields of weapons and armor to set the conditions for equipment.

```
<AOP Param x Require: y>
<AOP 'code' Require: y>
```
You cannot equip the item unless parameter x is greater than or equal to y.

# Script Commands

The following scripts can be used.

To specify a party member, replace `$gameActors.actor(x)` with `$gameParty.members()[n]`.  
For enemy members in battle, replace it with `$gameTroop.members()[n]`.  
n represents the number, starting with 0 for the first member of the party.

### Get Parameter Value
```
$gameActors.actor(x).aopParam(y)
$gameActors.actor(x).code
```
This retrieves the value of parameter y (or 'code') for actor ID x.  
'code' is the code name set in the plugin parameters.

Use the retrieved value with `$gameVariables.setValue()` or other methods.

### Set Current Parameter Value
```
$gameActors.actor(x).setCAop(y, value)
```
This sets the current value of parameter y for actor ID x to value.  
'code' cannot be used with this script.

### Add to Current Parameter Value
```
$gameActors.actor(x).gainCAop(y, value)
```
This adds value to the current value of parameter y for actor ID x.  
If value is negative, it will subtract.  
'code' cannot be used with this script.

# Plugin Commands

The following plugin commands can be used.

### Get Parameter (Maximum Value)
```
AOP_パラメータ取得 ゲーム内変数ID アクター(x) コード名
または
AOP_パラメータ取得 ゲーム内変数ID パーティー(n) コード名
```
This retrieves the value of parameter (or 'code') for actor x, or for the character in the specified party position.

Example Input:
```
AOP_パラメータ取得 5 アクター(1) str
```
This assigns the value of actor ID 1's 'str' to game variable ID 5.

### Change Parameter (Maximum Value)
```
AOP_パラメータ変更 アクター(x) コード名 演算方法 数値
または
AOP_パラメータ変更 パーティー(n) コード名 演算方法 数値
```
This changes the parameter (or 'code') of actor x or the specified party member based on the value and operation method.  
Operation methods include:
* Set (`=`), Add (`+`), Subtract (`-`), Multiply (`*`), Divide (`/`), Modulo (`%`)

Example Input:
```
AOP_パラメータ変更 アクター(1) str 代入 v[5]
```
This sets actor ID 1's 'str' to the value of game variable ID 5.

# Plugin Update History

| Version | Release Date | Changes |
| --- | --- | --- |
| [ver1.3.0](FTKR_AddOriginalParameters.js) | 2020/03/21 | Added functionality to grow parameters when using items or skills |
| ver1.2.1 | 2018/10/16 | Added error display for input mistakes in original parameters (F12) |
| ver1.2.0 | 2018/09/29 | Added functionality to set display names for each code |
| ver1.1.6 | 2017/11/05 | Fixed bug where current value decreases set in items did not apply |
| ver1.1.5 | 2017/11/05 | Fixed bug where parameter changes via level up or plugin commands were not saved |
| ver1.1.4 | 2017/04/30 | Fixed bug where items that restore current value could be used even if maxed out |
| ver1.1.3 | 2017/04/25 | Fixed bug where parameter changes from states were not applied |
| ver1.1.2 | 2017/04/14 | Added plugin commands |
| ver1.1.1 | 2017/03/23 | Bug fixes |
| ver1.0.0 | 2017/02/16 | Initial release |

# Extension Plugins

The following plugins extend the functionality of this plugin:

* [FTKR_CustomSimpleActorStatus](FTKR_CustomSimpleActorStatus.ja.md) - Displays the original parameters set by this plugin on the actor's status screen.

# License

This plugin is released under the MIT license.

[The MIT License (MIT)](https://opensource.org/licenses/mit-license.php)

