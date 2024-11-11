import React from 'react'

import { Button } from './ui/button'
import { Badge, StepBack, Delete } from 'lucide-react'
import { Label } from './ui/label'
import ButtonIcon from './ButtonIcon'

const CustomCard = () => {
  return (
    <div className="bg-white rounded-lg flex flex-col justify-between items-start  gap-2xl w-full p-2xl ">
      <div className="flex flex-col w-full">
        <div className="flex justify-between">
          <h2 className="font-semibold text-lg">
            Číslo objednávky: 2200245834
          </h2>
          <Label variant="approved">Zaplaceno</Label>
        </div>

        <div className="flex gap-2 mt-2">
          <div className="bg-gray-100 p-2 rounded">
            <Badge />
          </div>
          <div className="bg-gray-100 p-2 rounded">
            <Badge />
          </div>
          <div className="bg-gray-100 p-2 rounded">
            <Badge />
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="flex w-full justify-between items-center">
          <p className="text-sm">
            <strong className="font-[500]"> Datum objednávky:</strong> 6. 12.
            2022
          </p>
          <a href="#" className="text-blue-500">
            Potřebujete poradit?
          </a>
        </div>
        <></>
        <div className="flex w-full justify-between items-center">
          <p className="text-sm">
            <strong className="font-[500]">Cena celkem:</strong> 1 500 Kč
          </p>
          <p className="text-sm  font-bold">314 004 540 (po-pá 8:00-16:00)</p>
        </div>
      </div>

      <div className="flex justify-between w-full items-center">
        <Button size={'lg'}>Detail</Button>
        <div className="flex ">
          <ButtonIcon icon={StepBack}>Zopakovat</ButtonIcon>
          <ButtonIcon icon={Delete}>Stornovat</ButtonIcon>
        </div>
      </div>
    </div>
  )
}

export default CustomCard
