/**
 * PostCSS Mixin: Responsive Utility Generator
 * 
 * Generates responsive utility classes across all breakpoints.
 * Reduces repetitive media query code from 100s of lines to single mixin calls.
 * 
 * Usage:
 *   @mixin responsive-utility margin, zm, --zSpacing, 0 1 2 3 4 5 6 7 8 9 10;
 *   @mixin responsive-utility padding, zp, --zSpacing, 0 1 2 3 4 5;
 */

const breakpoints = {
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1400px'
};

module.exports = function(mixin, property, classPrefix, tokenPrefix, values) {
  const valueList = values.split(' ');
  const rules = {};

  // Base (mobile-first, no media query)
  valueList.forEach(val => {
    rules[`.${classPrefix}-${val}`] = {
      [property]: `var(${tokenPrefix}-${val}) !important`
    };
  });

  // Responsive variants for each breakpoint
  Object.entries(breakpoints).forEach(([bp, minWidth]) => {
    const mediaQuery = `@media (min-width: ${minWidth})`;
    if (!rules[mediaQuery]) rules[mediaQuery] = {};
    
    valueList.forEach(val => {
      rules[mediaQuery][`.${classPrefix}-${bp}-${val}`] = {
        [property]: `var(${tokenPrefix}-${val}) !important`
      };
    });
  });

  return rules;
};
