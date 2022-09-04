import {repeatWord}  from "./index.js";

describe("Tests for repeatWord function № 3", () => {
  const testCases = [
    {
      // успешное выполнение функции
      inString: "meow",
      isNum: 4,
      expected: "meow1,meow2,meow3,meow4",
    },

    //не успешное выполнение: 
    
    {
      // передан один аргумент word
      inString: "meow",
      expected: "",
    },
    {
      // передан 0 в аргумент count
      inString: "meow",
      isNum: 0,
      expected: "",
    },
    {
      // передан отрицательный аргумент в count
      inString: "meow",
      isNum: -1,
      expected: "",
    },
    {
      // передана строка, вместо числа во второгом аргументе count
      inString: "meow",
      isNum: "bzzz",
      expected: "",
    },
    {
      // передано число, вместо строки в аргументе word
      inString: 8,
      isNum: 6,
      expected: "9,10,11,12,13,14",
    },
  ];
  testCases.forEach((test) => {
    it(`Incoming arguments: ${test.inString}, ${test.isNum} Expect: ${test.expected}`, () => {
      const result = repeatWord(test.inString, test.isNum);
      expect(result).toBe(test.expected);
    });
  });
});
