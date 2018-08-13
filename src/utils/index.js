export const getTotalCost = results => results.reduce((acc, result) => acc + (result.cost - (result.cost * result.discount / 100)), 0)

export const getTotalTime = results => results.reduce((acc, result) => acc + ((parseInt(result.duration.h, 10) * 60) + parseInt(result.duration.m, 10)), 0)
