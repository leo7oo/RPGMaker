[Return to Top Page](README.md)

# [FTKR_CSS_MenuStatus](FTKR_CSS_MenuStatus.js) Plugin

This plugin modifies the status display of actors in the menu screen.  
This plugin is an extension of the [FTKR_CustomSimpleActorStatus](FTKR_CustomSimpleActorStatus.md) plugin.

Download: [FTKR_CSS_MenuStatus.js](https://raw.githubusercontent.com/leo7oo/RPGMaker/refs/heads/master/FTKR_CSS_MenuStatus.js)

## Table of Contents

The following sections explain how to use the plugin:
1. [Overview](#overview)
2. [Plugin Registration](#plugin-registration)
3. [Layout Settings](#layout-settings)
4. [Window Settings](#window-settings)
    1. [Plugin Parameter Settings](#plugin-parameter-settings)
    2. [Additional Notes on Window Settings](#additional-notes-on-window-settings)
5. [Actor Display Examples](#actor-display-examples)
    1. [Changing the Number of Actors Displayed Vertically](#changing-the-number-of-actors-displayed-vertically)
    2. [Displaying Actors Horizontally](#displaying-actors-horizontally)
    3. [Overlaying Status on Face Images](#overlaying-status-on-face-images)
    4. [Using Custom Images](#using-custom-images)
* [Plugin Update History](#plugin-update-history)
* [License](#license)

## Overview

By implementing this plugin, you can change the layout of the actor status display in the menu screen.

![Image](image/FTKR_CustomSimpleActorStatus/n01_001.png)

[Return to Table of Contents](#table-of-contents)

## Plugin Registration

To use this plugin, you must first register [FTKR_CustomSimpleActorStatus](FTKR_CustomSimpleActorStatus.js).  
In the plugin manager, ensure the plugins are registered in the following order:
```
FTKR_CustomSimpleActorStatus.js
FTKR_CSS_MenuStatus.js
```

[Return to Table of Contents](#table-of-contents)

## Layout Settings

The layout settings for the status screen in this plugin are the same as in [FTKR_CustomSimpleActorStatus](FTKR_CustomSimpleActorStatus.js).  
The plugin parameter names are also the same.

For setting instructions, please refer to the [manual](#FTKR_CustomSimpleActorStatus.md) of FTKR_CustomSimpleActorStatus.

[Return to Table of Contents](#table-of-contents)

## Window Settings
### Plugin Parameter Settings
The following plugin parameters can be configured:

#### Enable Custom Window
`Enabled Custom Window`

Specifies whether to use the custom window feature for the menu screen status window.
* 0 - Disabled (default)
* 1 - Enabled

#### Number of Actors Displayed Horizontally
`Number Max Cols`

Changes the number of actors displayed horizontally.  
The default is 1.

#### Cursor Height in Rows
`Cursor Line Number`

Changes the number of rows for the cursor height in the status window.  
The default is 4 rows.

#### Vertical Cursor Spacing
`Cursor Height Space`

Changes the vertical spacing between cursors in the status window.  
The default is 0.

#### Font Size
`Font Size`

Changes the font size within the window.  
The default is 28 (in pixels).

#### Window Padding
`Window Padding`

Changes the padding around the window.  
The default is 18 (in pixels).

#### Line Height
`Window Line Height`

Changes the height of a single line within the window.  
The default is 36 (in pixels).

#### Window Opacity
`Window Opacity`

Changes the opacity of the window background.  
The default is 192.  
0 - Transparent, 255 - Opaque

#### Hide Window Frame
`Hide Window Frame`

Specifies whether to hide the window frame.
* 1 - Hide
* 0 - Show (default)

### Additional Notes on Window Settings

#### Window Height
The window height is automatically calculated using the following formula:
```
[Window Height] = [Number of Rows] × [Line Height] + [Padding Size] × 2
```

#### Font Size and Line Height
Generally, ensure the following relationship:
```
Font Size < Line Height
```

#### How to Remove the Window
To remove the window frame and background, leaving only the actor status displayed, use the following settings:

`Window Opacity`     : 0 <br>
`Hide Window Frame`  : 1

[Return to Table of Contents](#table-of-contents)

# Actor Display Examples

By default, the menu screen can display up to 4 actors vertically.  
By changing the settings of this plugin, you can modify the number of actors displayed and their arrangement.

## Changing the Number of Actors Displayed Vertically

The following example explains how to change the number of actors displayed vertically to 5, as shown in the image below.

![Image](image/FTKR_CustomSimpleActorStatus/n05_001.png)

### Changing Window Settings
The following settings need to be changed to display 5 actors vertically.

#### Enable Custom Window
Change the `Enabled Custom Window` setting to 1.

#### Change Cursor Height
Modify the `Cursor Line Number` setting.  
Since the window has 16 rows (by default), displaying 5 actors allows for 3 rows per actor.

#### Adjust Vertical Cursor Spacing
Modify the `Cursor Height Space` setting.  
If you want to add space between actor images, adjust this setting.  
Changing the cursor height leaves one row (36 pixels by default) blank, so for 5 actors, you can add up to 8 pixels of spacing.

![Image](image/FTKR_CustomSimpleActorStatus/n05_003.png)

### Changing Layout Settings
Modify the layout settings.  
Due to the window settings, only 3 rows can be used per actor.  
Therefore, any settings that use 4 rows need to be adjusted.

#### Changing Face Image Settings
The `face` code uses 4 rows, so to fit within 3 rows, change it to `face(3)`.

![Image](image/FTKR_CustomSimpleActorStatus/n05_002.png)

[Return to Table of Contents](#table-of-contents)

## Displaying Actors Horizontally

The following example explains how to display actors horizontally, as shown in the image below.

The image below uses the official plugin `AltMenuScreen.js` to modify the layout of each window.  
When combining layout modification plugins, register this plugin below them in the following order:
```
AltMenuScreen.js
FTKR_CustomSimpleActorStatus.js
```

![Image](image/FTKR_CustomSimpleActorStatus/n05_004.png)

### Changing Window Settings
The following settings need to be changed to display 4 actors horizontally.

#### Enable Custom Window
Change the `Enabled Custom Window` setting to 1.

#### Change the Number of Actors Displayed Horizontally
Modify the `Number Max Cols` setting.  
For the default 4 actors, set this to 4.

#### Change Cursor Height
Modify the `Cursor Line Number` setting.  
Set this to 11 to match the window size.

![Image](image/FTKR_CustomSimpleActorStatus/n05_007.png)

### Changing Layout Settings
Modify the layout settings.  
Displaying actors horizontally reduces the available width.  
Therefore, it is recommended to consolidate the drawing areas.

#### Changing Drawing Area Settings
Remove the settings for Drawing Area 2 and 3, and consolidate them into Drawing Area 1.  
The settings for Drawing Area 1 will be as follows:

![Image](image/FTKR_CustomSimpleActorStatus/n05_006.png)

#### Changing Blank Area Settings
Modify the `Actor Status Space` setting.  
Since Drawing Area 2 and 3 are removed, change the spacing between Drawing Area 1 and 2, and Drawing Area 2 and 3 to 0.
```
10,0,0,10
```

#### Changing Drawing Area Size Settings
Modify the `Actor Status Width Rate` setting.  
Since Drawing Area 2 and 3 are removed, change the ratio for Drawing Area 2 and 3 to 0.
```
1,0,0
```

![Image](image/FTKR_CustomSimpleActorStatus/n05_005.png)

[Return to Table of Contents](#table-of-contents)

## Overlaying Status on Face Images

The following example shows how to overlay status on face images.  
This can be useful when the display area is narrow, such as when displaying actors horizontally.

![Image](image/FTKR_CustomSimpleActorStatus/n07_001.png)

### Layout Settings

The key points for overlaying status are as follows:
* Set the ratio of Drawing Area (1) to 0 in `Actor Status Width Rate`
* Use curly braces to expand the drawing area in the `face` code of Drawing Area (1)
* Change the `Face Position X` setting to left-align

These settings allow Drawing Area (1) and Drawing Area (2) to be displayed overlapped.

![Image](image/FTKR_CustomSimpleActorStatus/n07_002.png)

![Image](image/FTKR_CustomSimpleActorStatus/n07_004.png)

### Window Settings

![Image](image/FTKR_CustomSimpleActorStatus/n07_003.png)

[Return to Table of Contents](#table-of-contents)

## Using Custom Images

The following example shows how to use custom images, such as character portraits, with a large height.

![Image](image/FTKR_CustomSimpleActorStatus/n07_005.png)

### Layout Settings

Character portraits are displayed using the `image` code.  
Use the method of overlaying status on images. Since the width is narrow, only Drawing Area (2) is used.

![Image](image/FTKR_CustomSimpleActorStatus/n07_006.png)

### Window Settings

Adjust the parameters according to the settings for displaying actors horizontally.

![Image](image/FTKR_CustomSimpleActorStatus/n07_007.png)

### Actor Settings

Set the image to be displayed using the `image` code for each actor.

The width of the display area for one actor is calculated as follows:
```
(Screen Size - Command Window Width - Status Window Padding * 2) / Number of Actors Displayed Horizontally
```
For the default screen size (816 pixels) and command window width (240 pixels), the display area width for one actor is 135 pixels.

Since 4 pixels of blank space are reserved on both ends of the display area, the available width for the image is 131 pixels.

In the example image, `BGI WIDTH` is set to 127 to account for the padding.  
Adjust other parameters based on the position and structure of the character portrait within the image.

![Image](image/FTKR_CustomSimpleActorStatus/n07_008.png)

[Return to Table of Contents](#table-of-contents)

## Plugin Update History

| Version | Release Date | Updates |
| --- | --- | --- |
| [ver2.1.2](FTKR_CSS_MenuStatus.js) | 2018/12/13 | Changed default plugin parameters |
| ver2.1.1 | 2018/09/12 | Removed unnecessary plugin parameters |
| ver2.1.0 | 2018/08/30 | Compatible with FTKR_CustomSimpleActorStatus.js v3.1.0 |
| ver2.0.0 | 2018/08/19 | Compatible with FTKR_CustomSimpleActorStatus.js v3.0.0 |
| [ver1.1.0](/archive/FTKR_CSS_MenuStatus_1.1.0.js) | 2017/11/18 | Compatible with FTKR_CustomSimpleActorStatus.js v2.6.0 |
| ver1.0.0 | 2017/06/18 | Initial release |

## License

This plugin is released under the MIT License.

[The MIT License (MIT)](https://opensource.org/licenses/mit-license.php)

#

[Return to Table of Contents](#table-of-contents)

[Return to Top Page](README.md)
