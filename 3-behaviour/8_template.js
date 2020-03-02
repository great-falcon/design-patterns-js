class Employee {
  constructor(name, salary) {
    this.name = name
    this.salary = salary
  }

  responsibilities() {
  }

  work() {
    return `${this.name} do ${this.responsibilities()}`
  }

  getPaid() {
    return `${this.name} reach ${this.salary}`
  }
}

class Developer extends Employee {
  constructor(name, salary) {
    super(name, salary);
  }

  responsibilities() {
    return 'create software'
  }
}

class Tester extends Employee {
  constructor(name, salary) {
    super(name, salary);
  }

  responsibilities() {
    return 'test software'
  }
}

const dev = new Developer('Oleh', 100000)
console.log(dev.getPaid());
console.log(dev.work());

const tester = new Tester('Vlad', 90000)
console.log(tester.getPaid());
console.log(tester.work());
