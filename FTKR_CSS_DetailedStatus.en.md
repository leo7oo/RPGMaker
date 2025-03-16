[Back to Top Page](README.md)

# [FTKR_CSS_DetailedStatus](FTKR_CSS_DetailedStatus.js) Plugin

This plugin modifies the status display on the actor's status screen.<br>
This plugin is an extension of [FTKR_CustomSimpleActorStatus](FTKR_CustomSimpleActorStatus.ja.md).

Download: [FTKR_CSS_DetailedStatus.js](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_CSS_DetailedStatus.js)

## Table of Contents

The following sections explain how to use this plugin in order:
1. [Overview](#overview)
2. [Registering the Plugin](#registering-the-plugin)
3. [Layout Settings](#layout-settings)
    1. [Setting Display Area Size](#setting-display-area-size)
    2. [Setting Lines Between Display Areas](#setting-lines-between-display-areas)
    3. [Setting Display Areas](#setting-display-areas)
    4. [Setting Face Image Size](#setting-face-image-size-in-detailed-status)
4. [Window Settings](#window-settings)
    1. [Setting Plugin Parameters](#setting-plugin-parameters)
    2. [Additional Notes on Window Settings](#additional-notes-on-window-settings)
* [Plugin Update History](#plugin-update-history)
* [License](#license)

## Overview

By implementing this plugin, you can change the layout of the actor's status display on the status screen.

![Image](image/FTKR_CSS_DetailedStatus/n01_001.png)

[Back to Table of Contents](#table-of-contents)

## Registering the Plugin

To use this plugin, you must first register [FTKR_CustomSimpleActorStatus](FTKR_CustomSimpleActorStatus.js).
In the plugin management screen, register them in the following order:
```
FTKR_CustomSimpleActorStatus.js
FTKR_CSS_DetailedStatus.js
```
[Back to Table of Contents](#table-of-contents)

## Layout Settings

For details on how to configure the layout, refer to [this document](FTKR_CustomSimpleActorStatus_1.ja.md).

### Other Settings for Status Screen Display Areas

`DS Space In Text*`

Sets the display spacing when using brackets.
Same settings as `Actor Status Space In Text`.

[Back to Table of Contents](#table-of-contents)

## Window Settings

### Setting Plugin Parameters

The following plugin parameters can be configured:

#### Enable Settings
`Enabled Custom Window`

Specify whether to use the function to change the status window on the status screen.
* 0 - Disabled (default)
* 1 - Enabled

#### Font Size
`Font Size`

Changes the font size within the window.
The default is 28 (unit: pixels).

#### Padding Size
`Window Padding`

Changes the padding around the window.
The default is 18 (unit: pixels).

#### Line Height
`Window Line Height`

Changes the height of each line within the window.
The default is 36 (unit: pixels).

#### Background Opacity
`Window Opacity`

Changes the transparency of the window background.
The default is 192.
0 - Transparent, 255 - Opaque

#### Hide Window Frame
`Hide Window Frame`

Specifies whether to hide the window frame.
* 1 - Hide
* 0 - Show (default)

## Additional Notes on Window Settings

### Window Height

The height of the window is automatically calculated as follows:
```
[Window Height] = [Number of Rows] × [Height per Row] + [Padding Size] × 2
```

### Font Size and Line Height

In general, maintain the following size relationship:
```
Font Size < Line Height per Row
```

### How to Remove the Window

By setting the following parameters, you can remove the window frame and background, displaying only the actor's status:

`Window Opacity`: 0 <br>
`Hide Window Frame`: 1

[Back to Table of Contents](#table-of-contents)

## Plugin Update History

| Version | Release Date | Update Details |
| --- | --- | --- |
| [ver2.1.4](FTKR_CSS_DetailedStatus.js) | 2018/12/13 | Changed default plugin parameter values |
| ver2.1.3 | 2018/10/20 | Added support for dsWeaponMastery plugin's proficiency display |
| ver2.1.2 | 2018/09/29 | Added selectable items in plugin parameter lists |
| ver2.1.1 | 2018/09/12 | Removed unnecessary plugin parameters |
| ver2.1.0 | 2018/08/30 | Supported FTKR_CustomSimpleActorStatus.js v3.1.0<br>Added auto-update function for window display content |
| ver2.0.0 | 2018/08/19 | Supported FTKR_CustomSimpleActorStatus.js v3.0.0 |
| [ver1.1.0](/archive/FTKR_CSS_DetailedStatus_1.1.0.js) | 2017/11/18 | Supported FTKR_CustomSimpleActorStatus.js v2.6.0 |
| ver1.0.2 | 2017/05/13 | Fixed issue where window setting change function was not working correctly |
| ver1.0.1 | 2017/05/08 | Added window setting change function |
| ver1.0.0 | 2017/04/21 | Initial release |

## License

This plugin is released under the MIT License.

[The MIT License (MIT)](https://opensource.org/licenses/mit-license.php)

#
[Back to Table of Contents](#table-of-contents)

[Back to Top Page](README.md)
