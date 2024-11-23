export const simplePath = '$.a';
export const simplePathResult = [1]

export const complexPath = '$.e.j[0].o.t.y.z';
export const compelxPathResult = [21]

export const filteredPath1 = "$.f[?(@.g.id == 3)].g";
export const filteredPath1Result = [{"gg":[{"ggg":[{"id":"ggg"}],"id":"gg"}],"id":3}]

export const filteredPath2 = "$.f[0].g.gg[?(@.id == 'gg')]";
export const filteredPath2Result = [{"ggg":[{"id":"ggg"}],"id":"gg"}]

export const filteredPath3 = '$.e.j[0].o';
export const filteredPath3Result = [{"p":13,"q":14,"r":15,"s":16,"t":{"u":17,"v":18,"w":19,"x":20,"y":{"z":21}}}]

export const filteredPath4 = '$.e.j';
export const filteredPath4Result = [[{"k":9,"l":10,"m":11,"n":12,"o":{"p":13,"q":14,"r":15,"s":16,"t":{"u":17,"v":18,"w":19,"x":20,"y":{"z":21}}}},{"k":22,"l":23,"m":24,"n":25,"o":{"p":26,"q":27,"r":28,"s":29,"t":{"u":30,"v":31,"w":32,"x":33,"y":{"z":34}}}}]]

export const filteredPath5 = '$..*[?(@ > 10)]';
export const filteredPath5Result = [22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,43,44,45,46,38,39,40,41,42,47,48,49,50,51,11,12,22,23,24,25,13,14,15,16,17,18,19,20,21,26,27,28,29,30,31,32,33,34]

export const depthPath = "$.links.edges[?(@.edges[?(@.blah[?(@.edges[?(@.id == 'deep')])])])].edges[?(@.foo == 'test')].id"

export const paths = [simplePath, complexPath, filteredPath1, filteredPath2, filteredPath3, filteredPath4, filteredPath5];
export const results = [simplePathResult, compelxPathResult, filteredPath1Result, filteredPath2Result, filteredPath3Result, filteredPath4Result, filteredPath5Result];

export const nestedPath1 = "$.level1.level2.level3.level4.level5.array[?(@.id > 1)]"

export const nestedPath2 = "$.level1.level2.level3.level4.level5.array[?(@.details.values[?(@ == 3)])]"

export const nestedPath3 = "$.anotherLevel1.anotherLevel2.anotherArray[?(@.anotherId < 2)]"

export const nestedPath4 = "$.anotherLevel1.anotherLevel2.anotherArray[?(@.anotherDetails.anotherValues[?(@ == 17)])]"

export const nestedPath5 = "$.level1.level2.level3.level4.level5.object.nestedObject.deeplyNestedObject[?(@.deepKey1 == 'deepValue1')]"

export const nestedPath6 = "$.anotherLevel1.anotherLevel2.anotherObject.anotherNestedObject.anotherDeeplyNestedObject[?(@.anotherDeepKey2 == 'anotherDeepValue2')]"

export const nestedPath7 = "$.anotherLevel1.anotherLevel2.anotherObject.anotherNestedObject.anotherDeeplyNestedObject.*"

export const nestedPaths = [nestedPath1, nestedPath2, nestedPath3, nestedPath4, nestedPath5, nestedPath6, nestedPath7];

