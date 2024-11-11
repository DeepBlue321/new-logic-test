import React from 'react'
import { Form, FormField, FormItem } from '../components/ui/form'
import { Button } from '../components/ui/button'
import { useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select'
import { Checkbox } from '../components/ui/checkbox'
import { Flag } from 'lucide-react'

const SettingsPage = () => {
  const form = useForm({
    resolver: {},
    defaultValues: {},
  })

  return (
    <Form {...form} className="w-full">
      <FormField
        control={form.control}
        name="username"
        render={({}) => (
          <FormItem>
            <div className=" p-6 rounded-md  bg-white ">
              <h2 className="text-xl font-semibold ">Kontaktní údaje</h2>
              <section className="border-b py-4xl">
                <div className="grid grid-cols-1 lg:md:grid-cols-2 md:grid-cols-1  gap-4">
                  <Input placeholder="Lubomír" required />
                  <Input placeholder="Příjmení" required />
                  <Input placeholder="+420" />
                  <Input
                    placeholder="daniil.filatov@newlogic.cz"
                    required
                    error="Invalid email format"
                  />
                </div>
              </section>

              <h2 className="text-xl font-semibold mt-4xl">Fakturační údaje</h2>
              <section className="border-b py-4xl">
                <div className="grid grid-cols-1 lg:md:grid-cols-2 md:grid-cols-1 gap-4">
                  <Input placeholder="Jméno" />
                  <Input placeholder="Příjmení" required />
                  <Input placeholder="Název firmy" required />
                  <div className="flex  gap-2">
                    <Input placeholder="IČ" required />
                    <Input placeholder="DIČ" />
                  </div>

                  <Input placeholder="Ulice a číslo popisné" />
                  <Input placeholder="Město" />
                  <Input placeholder="PSČ" />
                  <Select>
                    <SelectTrigger className="relative">
                      <SelectValue placeholder="Země" />
                      <Flag aria-hidden="true" className="absolute right-8" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </section>

              <section className="pt-4xl">
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms1" />
                  <label htmlFor="terms">
                    Nesouhlasím se zasláním dotazníku spokojenosti Ověřeno
                    zákazníky
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms2" />
                  <label htmlFor="terms">
                    Přeji si dostávat informace o novinkách a slevách nebo
                    inspiraci
                  </label>
                </div>
              </section>

              <div className="flex justify-between pt-4xl">
                <div className="flex gap-2">
                  <Button variant="default">Uložit změny</Button>
                  <Button variant="secondary">Změnit heslo</Button>
                </div>
                <Button variant="outlineDestructive">Zrušit účet</Button>
              </div>
            </div>
          </FormItem>
        )}
      />
    </Form>
  )
}

export default SettingsPage
