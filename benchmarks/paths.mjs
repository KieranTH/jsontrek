export const simplePath = '$.a';

export const complexPath = '$.e.j[0].o.t.y.z';

export const filteredPath1 = '$.f[?(@ == 5)]';

export const filteredPath2 = '$.j.k[?(@ > 8)]';

export const filteredPath3 = '$.j.o.p[?(@ < 14)]';

export const filteredPath4 = '$.j.o.t.u[?(@ == 17)]';

export const filteredPath5 = '$..*[?(@ > 10)]';

export const filteredPath6 = '$.j.o.t.*[?(@ < 20)]';

export const paths = [simplePath, complexPath, filteredPath1, filteredPath2, filteredPath3, filteredPath4, filteredPath5, filteredPath6];