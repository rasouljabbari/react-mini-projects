import {action, makeObservable, observable} from "mobx";

class AnimalStoreImpl {
    energyLevel = 100

    constructor() {
        makeObservable(this, {
            energyLevel: observable,
            reduceEnergy: action,
            increaseEnergy: action,
        })
    }

    reduceEnergy() {
        this.energyLevel -= 5
    }

    increaseEnergy() {
        this.energyLevel += 3
    }

}

export const AnimalStore = new AnimalStoreImpl()

