
# Basic Layout Structure

### Display Area

In this plugin, the layout structure enclosed by red frames (1) to (7) in the diagram below forms the basic unit. The combination of (1) to (7) is referred to as the display area.

![Image](image/FTKR_CustomSimpleActorStatus/n01_002.png)

### Drawing Area

Within the display area, the area where each status is shown is called the drawing area.  
The three areas (1) to (3) in the diagram above are the drawing areas.  
The width of each drawing area can be individually specified, and the statuses displayed can also be set individually.

### Blank Area

In the display area, the area where nothing is displayed is called the blank area.  
The four areas (4) to (7) in the diagram above are the blank areas.  
The width of each can be individually set.

# Layout Settings

1. [Setting Drawing Area Size](#setting-drawing-area-size)
3. [Setting Drawing Area](#setting-drawing-area)
4. [Setting Blank Area](#setting-blank-area)

## Setting Drawing Area Size

The size of the drawing area is set with the plugin parameter `Actor Status Width Rate`. Enter the **ratio** of the widths of the three drawing areas, separated by commas.

In the configuration shown in the diagram below, the drawing areas (1) to (3) are divided in a 2:2:3 ratio relative to the display area.  
For example, if the display area width is 350px, the widths of each drawing area would be as follows (if the blank area size is 0):  
* Drawing Area (1) width - 100px  
* Drawing Area (2) width - 100px  
* Drawing Area (3) width - 150px

![Image](image/FTKR_CustomSimpleActorStatus/n02_005.png)

## Setting Drawing Area

### Drawing Area Display Method

The content of the code set in the plugin parameter `Actor Status Text*` is displayed in each [drawing area](#drawing-area).  
* `Actor Status Text1` - Content for Drawing Area (1)  
* `Actor Status Text2` - Content for Drawing Area (2)  
* `Actor Status Text3` - Content for Drawing Area (3)

![Image](image/FTKR_CustomSimpleActorStatus/n02_002.png)

### Status Display Method

By entering a [code](#status-that-can-be-displayed) in the plugin parameters, the status will be shown in the drawing area.

Example for Drawing Area (2) setting:
```
name,level
```
Even if the status (such as a long actor name) exceeds the width of the drawing area, the text will be compressed horizontally and displayed within the drawing area.

![Image](image/FTKR_CustomSimpleActorStatus/n02_013.png)

### Using Comma-separated Input

Codes entered separated by commas will be displayed on the next (lower) line within the drawing area.  
By separating with multiple commas, you can display multiple lines vertically. However, make sure to keep the number of status lines within the height of the drawing area, as it will not display correctly if it exceeds the available space.

Example for Drawing Area (3) setting:
```
class,hp,mp
```

![Image](image/FTKR_CustomSimpleActorStatus/n02_009.png)

If two commas are used consecutively, as shown in the diagram below, a blank line will be created.

Example for Drawing Area (2) setting:
```
name,,level
```

![Image](image/FTKR_CustomSimpleActorStatus/n02_008.png)

### Using Braces for Input

If a code is enclosed in braces ( `{ }` ), it will be displayed using the right side of the drawing area as well.

This can be useful for displaying long names without changing the font size. However, to avoid overlap with the right-side drawing area, ensure to leave one line empty on the right side.

Example for Drawing Area (2) setting:
```
{name},level
```
Example for Drawing Area (3) setting:
```
,,class,hp,mp
```

![Image](image/FTKR_CustomSimpleActorStatus/n02_012.png)

### Using Square Brackets for Input

If multiple codes are enclosed in square brackets (`[ ]`) and separated by slashes (`/`), they will be displayed horizontally on the same line in the drawing area.  
If one side of the square brackets is left empty, the corresponding side of the drawing area will not be displayed.

```
class,[hp/mp],[tp/]
```

![Image](image/FTKR_CustomSimpleActorStatus/n02_014.png)

The spacing between items displayed horizontally follows the value set in the plugin parameter `Actor Status Space In Text` (in pixels).

![Image](image/FTKR_CustomSimpleActorStatus/n02_004.png)

## Setting Blank Area

The size of the blank area is set with the plugin parameter `Actor Status Space`. Enter the widths (in pixels) of the four blank areas separated by commas.

For the configuration shown in the diagram below, the widths of each [blank area](#blank-area) will be as follows:  
* Blank Area (4) width - 10px  
* Blank Area (5) width - 20px  
* Blank Area (6) width - 50px  
* Blank Area (7) width - 10px

![Image](image/FTKR_CustomSimpleActorStatus/n02_003.png)

The size of the drawing area is calculated by subtracting the total width of the blank areas from the display area width and then dividing it based on the ratio in the `Actor Status Width Rate` parameter.  
Be cautious not to use too much space for blank areas, as this will reduce the available space for the drawing areas.
