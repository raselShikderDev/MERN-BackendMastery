{
  // ----- Problem 01 -----

  function formatString(input: string, toUpper?: boolean): string {
    return toUpper === false ? input.toLowerCase() : input.toUpperCase();
}
}

{
  // ----- Problem 02 -----
  function filterByRating(
    items: { title: string; rating: number }[]
  ): { title: string; rating: number }[] {
    const arr: { title: string; rating: number }[] = [];
    items.forEach((item) => {
      if (item.rating >= 4) {
        arr.push(item);
      }
    });
    return arr;
  }
}

{
  // ----- Problem 03 -----

  function concatenateArrays<T>(...arrays: T[][]): T[] {
    const arr: T[] = [];
    arrays.forEach((item) => {
      arr.push(...item);
    });
    return arr;
  }
}

{
  // ----- Problem 04 -----

  class Vehicle {
    constructor(private make: string, private year: number) {}
    getInfo() {
      return `Make: ${this.make}, Year: ${this.year}`;
    }
  }

  class Car extends Vehicle {
    constructor(make: string, year: number, private model: string) {
      super(make, year);
    }

    getModel() {
      return `Model: ${this.model}`;
    }
  }
}

{
  // ----- Problem 05 ------
  function processValue(value: string | number): number {
    if (typeof value === "string") {
      return value.length;
    } else {
      return value * 2;
    }
  }
}

{
  // ----- Problem 06 -----

  interface Product {
    name: string;
    price: number;
  }

  function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) return null;
    let num: number = 0;
    products.forEach((item) => {
      if (item.price > num) {
        num = item.price;
      }
    });
    const highest: Product = products.find((item) => item.price === num)!;
    return highest;
  }
}

{
  // Problem 07

enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }

  function getDayType(day: Day): string {
    if (Day.Sunday === day || Day.Saturday === day) {
      return "Weekend";
    } else {
      return "Weekday";
    }
  }
}

{
  // ----- prolem 08 -----

  async function squareAsync(n: number): Promise<number> {
    if (n < 0) throw new Error("Negative number not allowed");
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(n * n);
      }, 1000);
    });
  }
}
