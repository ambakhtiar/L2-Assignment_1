# TypeScript প্রশ্নোত্তর (বাংলা ব্লগ পোস্ট)

## প্রশ্ন ১: Interface vs Type এর পার্থক্য কী? 

TypeScript-এ `interface` এবং `type` দুটোই object-এর গঠন (structure) define করতে ব্যবহৃত হয়। তবে কিছু পার্থক্য আছে।

- Interface সাধারণত object-oriented design-এর জন্য ভালো। এটি extend করা যায় এবং একাধিক declaration একসাথে merge হয়।

- Type বেশি flexible। union, tuple, primitive type, function type ইত্যাদি define করতে পারে। তবে declaration merging হয় না। 

**উদাহরণ:**

```ts
interface User {
  name: string;
  age: number;
}
interface AdminInterface extends User {
    role: string;
}

type Admin = {
  name: string;
  role: string;
}
type SuperUser = User & Admin; 
```

---

## প্রশ্ন ২: keyof কী কাজে লাগে?

`keyof` keyword object-এর key গুলোকে একটি union type-এ রূপান্তর করে। এটি type-safe accessor তৈরি করতে সাহায্য করে।

**উদাহরণ:**

```ts
const getPropertyFromObj = <X>(obj: X, key: keyof X) => {
  return obj[key];
};

const product = {
  brand: "HP",
};

const student = {
  id: 123,
  class: "four",
};

const result2 = getPropertyFromObj(product, "brand");
const result3 = getPropertyFromObj(student, "id");
```

**ব্যবহার:**

```ts
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { name: "Rahim", age: 25 };
const name = getValue(user, "name"); // "Rahim"
```

---

## প্রশ্ন ৩: any, unknown, never এর পার্থক্য কী?

- `any` মানে যেকোনো কিছু হতে পারে। compiler কিছুই check করবে না। খুব flexible, কিন্তু unsafe।
- `unknown` মানে যেকোনো কিছু হতে পারে, কিন্তু ব্যবহার করার আগে type check করতে হবে। এটি safer alternative to `any`।
- `never` মানে এমন কিছু যা কখনোই ঘটবে না । যেমন error throw করা বা infinite loop। 

**উদাহরণ:**

```ts
let a: any = 5;
a = "hello"; // এরর দেখাবে না

let b: unknown = "world";
if (typeof b === "string") // অবশ্যই কন্ডিশন দেওয়া লাগবে
console.log(b.toUpperCase()); 

function throwError(): never {
  throw new Error("Something went wrong");
} 
```

---

## প্রশ্ন ৪: Enum কী কাজে লাগে?

`enum` ব্যবহার করে আমরা fixed value set তৈরি করতে পারি। এটি code কে readable এবং manageable করে তোলে।

**Numeric Enum:**

```ts
enum UserRoles {
  Admin = "Admin",
  Editor = "Editor",
  Viewer = "Viewer",
}

const canEdit = (role: UserRoles) => {
  if (role === UserRoles.Admin || role === UserRoles.Editor) {
    return true;
  } else return false;
};

const isEditPermissable = canEdit(UserRoles.Admin);
console.log(isEditPermissable);
```

---

## প্রশ্ন ৫: Union vs Intersection Type

- `Union` (`|`) মানে একাধিক type-এর যেকোনো একটি হতে পারে।
- `Intersection` (`&`) মানে সব type-এর গুণাবলী একসাথে থাকতে হবে।

**উদাহরণ:**

```ts
type Dog = { bark: () => void };
type Cat = { meow: () => void };

// Union
let pet: Dog | Cat;

// Intersection
let hybrid: Dog & Cat;
```

Union ব্যবহার হয়, যখন variable একাধিক type-এর যেকোনো একটি হতে পারে। Intersection ব্যবহার হয় যখন সব type-এর behavior একসাথে দরকার ।