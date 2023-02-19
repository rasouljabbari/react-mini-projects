import React from 'react';
import {observer} from "mobx-react-lite";

const AnimalEnergy = observer(({animalStore}) => {

    return (
        <div>
            Monkey energy is : {animalStore.energyLevel}
            <br/>
            {
                animalStore.energyLevel > 0 ?
                    <>
                        <button
                            onClick={() => animalStore.reduceEnergy()}
                            className={'bg-amber-400 text-black p-3 m-2 rounded-md'}>
                            Play Animal
                        </button>

                        <button
                            onClick={() => animalStore.increaseEnergy()}
                            className={'bg-emerald-400 text-black p-3 m-2 rounded-md'}>
                            Sleep Animal
                        </button>
                    </> :
                    <h2 className={'text-xl'}>Animal is died !</h2>
            }

        </div>
    )
})

export default AnimalEnergy;