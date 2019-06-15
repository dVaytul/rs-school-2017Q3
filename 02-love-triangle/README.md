# Love triangles

## History
Spichonees (made-up name) live in country Spichland where are no gender. Spichonees are big lovers, so each Spichonee loves any another Spichonee. Unfortunately there are sometimes situations, when Spichonee A loves Spichonee B, Spichonee B loves Spichonee C and Spichonee C loves Spichonee A. This phenomenon is called *Love triangle*.

## Task
Your task is to implement function `getLoveTrianglesCount` which calculates how many *love triangles phenomenons* take place. The function takes the array of integers as the only parameter. An integer `k` on `n`th place means, that `n`th Spichonee loves `k`th Spichonee.

For example:
```js
                                  // 1  2  3  Spichonees
  let count = getLoveTrianglesCount([2, 3, 1]);
  console.log(count); // 1
  /**
    1st Spichonee loves 2nd Spichonee.
    2nd Spichonee loves 3rd Spichonee.
    3rd Spichonee love 1st Spichonee.
    There is love triangle.
  */
```