export const simplePath = '$.a';

export const complexPath = '$.e.j[0].o.t.y.z';

export const filteredPath1 = "$.f[?(@.g.id == 3)].g";

export const filteredPath2 = "$.f[0].g.gg[?(@.id == 'gg')]";

export const filteredPath3 = '$.e.j[0].o';

export const filteredPath4 = '$.e.j';

export const filteredPath5 = '$..*[?(@ > 10)]';

export const depthPath = "$.links.edges[?(@.edges[?(@.blah[?(@.edges[?(@.id == 'deep')])])])].edges[?(@.foo == 'test')].id"

export const paths = [simplePath, complexPath, filteredPath1, filteredPath2, filteredPath3, filteredPath4, filteredPath5];