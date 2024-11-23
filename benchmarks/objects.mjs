export const smallObject = { a: 1, b: 2, c: 3 };

export const mediumObject = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: {
        f: 5,
        g: 6,
        h: 7,
        i: 8,
        j: {
            k: 9,
            l: 10,
            m: 11,
            n: 12,
            o: {
                p: 13,
                q: 14,
                r: 15,
                s: 16,
                t: {
                    u: 17,
                    v: 18,
                    w: 19,
                    x: 20,
                    y: {
                        z: 21
                    }
                }
            }
        }
    }
}

export const largeObject = {
    a: 1,
    b: 2,
    c: 3,
    d: "4",
    e: {
        f: 5,
        g: 6,
        h: 7,
        i: 8,
        j: [
            {
                k: 9,
                l: 10,
                m: 11,
                n: 12,
                o: {
                    p: 13,
                    q: 14,
                    r: 15,
                    s: 16,
                    t: {
                        u: 17,
                        v: 18,
                        w: 19,
                        x: 20,
                        y: {
                            z: 21
                        }
                    }
                }
            },
            {
                k: 22,
                l: 23,
                m: 24,
                n: 25,
                o: {
                    p: 26,
                    q: 27,
                    r: 28,
                    s: 29,
                    t: {
                        u: 30,
                        v: 31,
                        w: 32,
                        x: 33,
                        y: {
                            z: 34
                        }
                    }
                }
            }
        ],
        aa: 22,
        bb: 23,
        cc: 24,
        dd: 25,
        ee: {
            ff: 26,
            gg: 27,
            hh: 28,
            ii: 29,
            jj: {
                kk: 30,
                ll: 31,
                mm: 32,
                nn: 33,
                oo: [
                    {
                        pp: 34,
                        qq: 35,
                        rr: 36,
                        ss: 37,
                        tt: {
                            uu: 38,
                            vv: 39,
                            ww: 40,
                            xx: 41,
                            yy: {
                                zz: 42
                            }
                        }
                    },
                    {
                        pp: 43,
                        qq: 44,
                        rr: 45,
                        ss: 46,
                        tt: {
                            uu: 47,
                            vv: 48,
                            ww: 49,
                            xx: 50,
                            yy: {
                                zz: 51
                            }
                        }
                    }
                ]
            }
        }
    },
    f: [
        {
            g: {
                id: 3,
                gg: [
                    {
                        id: "gg",
                        ggg: [
                            {
                                id: "ggg"
                            }
                        ]
                    }
                ]
            }
        }
    ]
}

export const depth = {
    "id": "test",
    attributes: {
        edges: [
            {
                node: {
                    id: "attr-1",
                    value: "Blah"
                }
            }
        ]
    },
    links: {
        "edges": [
            {
                "id": "sub",
                "foo": "bar",
                "edges": [
                    {
                        "id": "sub-sub",
                        "foo": "test",
                        "blah": [
                        {
                            "edges": [
                            {
                                "id": "deep"
                            }  
                            ]
                        }
                        ]
                    }  
                ]
            }
        ]
    }
  }

  export const nested = {
    "level1": {
      "level2": {
        "level3": {
          "level4": {
            "level5": {
              "array": [
                {
                  "id": 1,
                  "name": "Item 1",
                  "details": {
                    "description": "This is item 1",
                    "values": [1, 2, 3, 4, 5]
                  }
                },
                {
                  "id": 2,
                  "name": "Item 2",
                  "details": {
                    "description": "This is item 2",
                    "values": [6, 7, 8, 9, 10]
                  }
                }
              ],
              "object": {
                "key1": "value1",
                "key2": "value2",
                "nestedObject": {
                  "nestedKey1": "nestedValue1",
                  "nestedKey2": "nestedValue2",
                  "deeplyNestedObject": [{
                    "deepKey1": "deepValue1",
                    "deepKey2": "deepValue2"
                  }]
                }
              }
            }
          }
        }
      }
    },
    "anotherLevel1": {
      "anotherLevel2": {
        "anotherArray": [
          {
            "anotherId": 1,
            "anotherName": "Another Item 1",
            "anotherDetails": {
              "anotherDescription": "This is another item 1",
              "anotherValues": [11, 12, 13, 14, 15]
            }
          },
          {
            "anotherId": 2,
            "anotherName": "Another Item 2",
            "anotherDetails": {
              "anotherDescription": "This is another item 2",
              "anotherValues": [16, 17, 18, 19, 20]
            }
          }
        ],
        "anotherObject": {
          "anotherKey1": "anotherValue1",
          "anotherKey2": "anotherValue2",
          "anotherNestedObject": {
            "anotherNestedKey1": "anotherNestedValue1",
            "anotherNestedKey2": "anotherNestedValue2",
            "anotherDeeplyNestedObject": [{
              "anotherDeepKey1": "anotherDeepValue1",
              "anotherDeepKey2": "anotherDeepValue2"
            }]
          }
        }
      }
    }
  }