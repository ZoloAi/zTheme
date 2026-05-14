# L0_Reset - Pure Normalization Layer

## Purpose

L0_Reset provides a clean slate for building CSS frameworks and applications. It contains zero opinions about styling—just browser normalization and font declarations.

## Contents

- **reboot.css** - Cross-browser CSS reset/normalization
- **fonts.css** - @font-face declarations for custom fonts
- **fonts/** - Font files (Poppins, Kalam, Boogaloo)

## Usage

### Standalone Import
For projects that want only the reset layer:

```css
@import 'zTheme/L0_Reset/zTheme_L0.css';
```

This gives you a normalized canvas without any styling decisions.

### As Part of zTheme
L0 is automatically included when you import L1_Foundation or the full zTheme:

```css
@import 'zTheme/L1_Foundation/zTheme_L1.css';  /* includes L0 */
@import 'zTheme/dist/ztheme.css';              /* full framework, includes L0 */
```

## Philosophy

L0 exists to provide maximum flexibility:
- Want just a reset? Import L0
- Want styled foundations? Import L1+ (which includes L0)
- No forced coupling between normalization and styling decisions
