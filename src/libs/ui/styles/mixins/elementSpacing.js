const removeSpacing = (type, directions) => {
  return directions.reduce((all, cur, i) => `${all}${type}-${cur}: 0; `, '')
};

export const removeMargin = (margins) => removeSpacing('margin', margins);

export const removePadding = (paddings) => removeSpacing('padding', paddings);