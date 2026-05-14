/**
 * PostCSS Mixin: Responsive Directional Utility Generator
 * 
 * Generates directional utilities (top, bottom, left, right, x, y) with responsive variants.
 * 
 * Usage:
 *   @mixin responsive-directional margin, zm, --zSpacing, 0 1 2 3 4 5;
 *   @mixin responsive-directional padding, zp, --zSpacing, 0 1 2 3 4 5;
 */

const breakpoints = {
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1400px'
};

const directions = {
  t: 'top',
  b: 'bottom',
  s: 'left',    // start (LTR)
  e: 'right',   // end (LTR)
  x: ['left', 'right'],
  y: ['top', 'bottom']
};

module.exports = function(mixin, property, classPrefix, tokenPrefix, values) {
  const valueList = values.split(' ');
  const rules = {};

  // Base directional utilities (mobile-first)
  Object.entries(directions).forEach(([dir, cssProp]) => {
    valueList.forEach(val => {
      const className = `.${classPrefix}${dir}-${val}`;
      
      if (Array.isArray(cssProp)) {
        // Handle x/y axis (multiple properties)
        rules[className] = {};
        cssProp.forEach(prop => {
          rules[className][`${property}-${prop}`] = `var(${tokenPrefix}-${val}) !important`;
        });
      } else {
        // Handle single direction
        rules[className] = {
          [`${property}-${cssProp}`]: `var(${tokenPrefix}-${val}) !important`
        };
      }
    });
  });

  // Responsive variants for each breakpoint
  Object.entries(breakpoints).forEach(([bp, minWidth]) => {
    const mediaQuery = `@media (min-width: ${minWidth})`;
    if (!rules[mediaQuery]) rules[mediaQuery] = {};
    
    Object.entries(directions).forEach(([dir, cssProp]) => {
      valueList.forEach(val => {
        const className = `.${classPrefix}${dir}-${bp}-${val}`;
        
        if (Array.isArray(cssProp)) {
          rules[mediaQuery][className] = {};
          cssProp.forEach(prop => {
            rules[mediaQuery][className][`${property}-${prop}`] = `var(${tokenPrefix}-${val}) !important`;
          });
        } else {
          rules[mediaQuery][className] = {
            [`${property}-${cssProp}`]: `var(${tokenPrefix}-${val}) !important`
          };
        }
      });
    });
  });

  return rules;
};
