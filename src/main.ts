console.log('#19. TypeScript homework example file')

/*
 * #1
 *
 * Задача: Розробити функцію `sumArray`, яка приймає масив чисел і повертає їх суму.
 *
 * Мета: Створення надійної функції, що здатна обробляти масиви чисел різної довжини, включаючи порожні масиви, і повертати точну суму їх елементів.
 *
 * Вимоги до реалізації:
 * 1 Функція повинна приймати один аргумент: `numbers` - масив чисел (`number[]`).
 * 2. Функція повинна повертати суму елементів масиву як число (`number`).
 * 3. Якщо масив порожній, функція повинна повертати `0`.
 * 4. Функція має використовувати метод `reduce` для обчислення суми елементів масиву.
 *
 */

function sumArray(numbers: number[]): number {
  return numbers.reduce((sum: number, num: number) => sum + num, 0);
}


// Приклади використання
console.log(sumArray([1, 2, 3, 4, 5])); // 15
console.log(sumArray([]));             // 0
console.log(sumArray([-1, -2, -3]));   // -6


// Вивід до консолі для демонстрації
// console.log(sumArray([1, 2, 3, 4])) // Повинно вивести 10
// console.log(sumArray([])) // Повинно вивести 0

/*
 * #2
 *
 * Задача: Розробити функцію createUser, яка створює об'єкт користувача з заданими властивостями.
 *
 * Мета: Створити функцію, що дозволяє легко генерувати нові об'єкти користувачів з переданими атрибутами ім'я, вік та статус активності, використовуючи визначений тип User.
 *
 * Вимоги до реалізації:
 * 1. Функція повинна приймати три параметри: name (рядок), age (число) та isActive (булеве значення).
 * 2. Функція має повертати об'єкт, що відповідає типу User. Тип User має бути оголошений з використанням ключового слова `type` та включати властивості name, age, та isActive.
 * 3. Об'єкт, що повертається, має мати типи властивостей відповідно до оголошеного типу User: name як string, age як number, isActive як boolean.
 * 4. Визначення типу User має бути сумісним зі структурою об'єкта, який повертається функцією, включно з порядком та наявністю всіх властивостей.
 * 5. Функція має правильно обробляти випадок, коли isActive не передано, і за замовчуванням вважати цей параметр true.
 *
 */

// Визначення типу User
type User = {
  name: string;
  age: number;
  isActive: boolean;
};

// Функція створення користувача
function createUser(name: string, age: number, isActive: boolean = true): User {
  return {
      name,
      age,
      isActive
  };
}

// Приклади використання
console.log(createUser("Олександр", 25));        // { name: 'Олександр', age: 25, isActive: true }
console.log(createUser("Марія", 30, false));    // { name: 'Марія', age: 30, isActive: false }


// const newUser = createUser('Анна', 25, true)
// console.log(newUser)



/*
 * #3
 *
 * Задача: Розробити функцію getOrderStatus, яка приймає статус замовлення як параметр і повертає рядок з описом статусу.
 *
 * Мета: Створення функції, здатної ідентифікувати статус замовлення і надавати користувачеві зрозуміле пояснення щодо поточного стану замовлення.
 *
 * Вимоги до реалізації:
 * 1. У коді має бути присутній enum OrderStatus з необхідними статусами.
 * 2. enum OrderStatus повинен мати статуси: 'Pending', 'Shipped', 'Delivered', 'Cancelled'.
 * 3. Функція має використовувати enum OrderStatus для визначення можливих статусів замовлення.
 * 4. Функція має приймати один параметр типу OrderStatus і повертати рядок з описом статусу.
 * 5. Функція повинна правильно обробити кожен статус замовлення, повертаючи відповідне повідомлення:
 * -  'Pending' -> 'Замовлення очікує на обробку',
 * -  'Shipped' -> 'Замовлення було відправлено',
 * -  'Delivered' -> 'Замовлення доставлено',
 * -  'Cancelled' -> 'Замовлення скасовано'
 * -  прокинути помилку з текстом 'Невідомий статус замовлення' в будь-якому іншому випадку.
 * 6. Параметри функції та її тип повернення мають бути явно типізовані.
 *
 */

// Визначення enum OrderStatus
enum OrderStatus {
  Pending = "Pending",
  Shipped = "Shipped",
  Delivered = "Delivered",
  Cancelled = "Cancelled"
}

// Функція отримання статусу замовлення
function getOrderStatus(status: OrderStatus): string {
  switch (status) {
      case OrderStatus.Pending:
          return "Замовлення очікує на обробку";
      case OrderStatus.Shipped:
          return "Замовлення було відправлено";
      case OrderStatus.Delivered:
          return "Замовлення доставлено";
      case OrderStatus.Cancelled:
          return "Замовлення скасовано";
      default:
          throw new Error("Невідомий статус замовлення");
  }
}

// Приклади використання
console.log(getOrderStatus(OrderStatus.Pending));    // Замовлення очікує на обробку
console.log(getOrderStatus(OrderStatus.Shipped));    // Замовлення було відправлено
console.log(getOrderStatus(OrderStatus.Delivered));  // Замовлення доставлено
console.log(getOrderStatus(OrderStatus.Cancelled));  // Замовлення скасовано


// Приклад виклику функції
// console.log(getOrderStatus(OrderStatus.Pending))
// console.log(getOrderStatus(OrderStatus.Shipped))
// console.log(getOrderStatus(OrderStatus.Delivered))
// console.log(getOrderStatus(OrderStatus.Cancelled))

export { sumArray, createUser, OrderStatus, getOrderStatus };