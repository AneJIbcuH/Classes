// Класс Самолет
class Airplane {
  constructor(name, maxSpeed) {
    this.name = name
    this.maxSpeed = maxSpeed
    this.isFlying = false
  }

  takeOff() {
    if (!this.isFlying) {
      this.isFlying = true
      console.log(`${this.name} взлетел`)
    } else {
      console.log(`${this.name} уже в воздухе`)
    }
  }

  land() {
    if (this.isFlying) {
      this.isFlying = false
      console.log(`${this.name} приземлился`)
    } else {
      console.log(`${this.name} уже на земле`)
    }
  }

  getStatus() {
    if (this.isFlying) {
      console.log(`${this.name} находится в воздухе`)
    } else {
      console.log(`${this.name} находится на земле`)
    }
  }
}

// Класс МИГ
class Mig extends Airplane {
  attack() {
    if (this.isFlying) {
      console.log(`${this.name} атакует врага`)
    } else {
      console.log(`${this.name} летит в бой`)
    }
  }
}

// Класс ТУ-154
class Tu154 extends Airplane {

}

// Класс Аэропорт в данном случае имеет "агрегацию" с классами МИГ и ТУ-154, так как самолеты являются частью аэропорта
class Airport {
  constructor() {
    this.airplanes = []
  }

  acceptAirplane(airplane) {
    if (!this.airplanes.includes(airplane)) {
      this.airplanes.push(airplane)
      console.log(`${airplane.name} принят в аэропорту`)
    } else {
      console.log(`${airplane.name} уже находится в аэропорту`)
    }
  }
  
// Если самолет уходит с аэропорта и улетает, класс Аэропорт может использовать "композицию" с классами МИГ и ТУ-154, так как они существуют только внутри аэропорта и не могут существовать отдельно
  
  freeSpotAndLeave(airplane) {
    if (this.airplanes.includes(airplane)) {
      const index = this.airplanes.indexOf(airplane)
      this.airplanes.splice(index, 1)
      console.log(`${airplane.name} освободил место и улетел`)
    } else {
      console.log(`${airplane.name} сейчас не в аэропорту`)
    }
  }

  goToParking(airplane) {
    if (this.airplanes.includes(airplane)) {
      console.log(`${airplane.name} ушел на стоянку`)
    } else {
      console.log(`${airplane.name} сейчас не в аэропорту`)
    }
  }

  readyForTakeOff(airplane) {
    if (this.airplanes.includes(airplane)) {
      console.log(`${airplane.name} готов к взлету`)
    } else {
      console.log(`${airplane.name} сейчас не в аэропорту`)
    }
  }  
}

// Использование, создается аэропорт, принимаются МИГ-29 и ТУ-154. Затем происходят действия взлета, атаки и посадки для МИГ-29 и ТУ-154, далее самолеты покидают аэропорт.

const airport = new Airport()

const mig29 = new Mig('МИГ-29', 2400)
airport.acceptAirplane(mig29)
mig29.takeOff()
mig29.attack()
mig29.land()
airport.freeSpotAndLeave(mig29)

const tu154 = new Tu154('ТУ-154', 950)
airport.acceptAirplane(tu154)
tu154.takeOff()

tu154.land()
airport.readyForTakeOff(tu154)
airport.goToParking(tu154)
airport.freeSpotAndLeave(tu154)