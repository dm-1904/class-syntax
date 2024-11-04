class Circle {
  constructor(radius, color) {
    this.radius = radius
    this.color = color
  }
  calcArea() {
      return Math.PI * this.radius ** 2
  }
  calcCircumference() {
      return 2 * this.radius * Math.PI
  }
  describe () {
    return `This circle has a radius of ${
      this.radius
    }, an area of ${
      this.calcArea().toFixed(2)
    }, and a volume of ${this.calcCircumference().toFixed(2)}.`
  }
  static isValidRadius(radius) {
    return radius > 0 && typeof radius === "number"
  }
}

// instance method: called on an instance
const myCircle = new Circle(10, "red")
// console.log(myCircle)
// console.log(myCircle.calcArea())
// console.log(myCircle.calcCircumference())


// static method: called without creating an instance of the object
// console.log(Circle.isValidRadius(10))


// EXTEND a Class
// We use the extends keyword to connect the new child class to the existing parent class.
// This allows us to add new properties.
// We use the super keyword to call the parent constructor before adding extended properties.
// If we don't use Super, the child class will lack access to the parent properties and methods.
// In an extended class, methods of the same name as the parent will be overwritten.

class Sphere extends Circle {
  constructor(radius, color, nickname) {
    super(radius, color)
    this.nickname = nickname
  }
    getSurfaceArea() {
      return 4 * Math.PI * this.radius ** 2
    }
    getVolume() {
      return (4/3) * Math.PI * this.radius ** 3
    }
    describe() {
      return `This sphere has a radius of ${
          this.radius
        }, a surface area of ${this.getSurfaceArea().toFixed(
          2
        )}, and a volume of ${this.getVolume().toFixed(2)}`


    }
}

const mySphere = new Sphere(5, 'bluegreen', 'earth')
// console.log(mySphere)
// console.log(mySphere.getVolume())
console.log(mySphere.describe())
