<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer : A. {}</b></summary>
<p>

###### greeting is a variable. in this variable assigning an empty object by the "greeting = {};"

#### Answer:  A. {}?




<i>greeting is a variable. in this variable assigning an empty object by the "greeting = {};"</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer: C. "12"</b></summary>
<p>

###### explanation: n JavaScript, when you use the + operator with a number and a string, it will perform string concatenation, not numeric addition. So, the result of sum(1, "2") will be the string "12", not the number 3.



#### Answer: C. "12"

<i>n JavaScript, when you use the + operator with a number and a string, it will perform string concatenation, not numeric addition. So, the result of sum(1, "2") will be the string "12", not the number 3.</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer: A. `['🍕', '🍫', '🥑', '🍔']`</b></summary>
<p>

###### explanation: only modifies the info objext and has no direct impact on the food array. it will remain unchang and you will see the original array

#### Answer: A: `['🍕', '🍫', '🥑', '🍔']`?

<i>explanation: only modifies the info objext and has no direct impact on the food array. it will remain unchang and you will see the original array</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer: B: Hi there, undefined</b></summary>
<p>

###### explanation: this function contain one parameter but when it is call it not give this parameter through the output is undefined

#### Answer: B: `Hi there, undefined`?

<i>this function contain one parameter but when it is call it not give this parameter through the output is undefined</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer: C: 3</b></summary>
<p>

###### explenation: the answer is 3

#### Answer: C: 3

<i>the answer is 3</i>

</p>
</details>
