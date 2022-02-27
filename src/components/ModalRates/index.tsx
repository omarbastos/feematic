import { Dialog, Switch, Transition } from '@headlessui/react'
import { Fragment, useContext, useState } from 'react'
import BaseInput from 'components/base/Input'
import { HiCog } from 'react-icons/hi'
import { useLocalStorage } from 'usehooks-ts'
import {
  CUSTOM_COP,
  CUSTOM_RATES,
  CUSTOM_VES
} from 'utils/constants/modal-rates.constants'
import { RatesContext } from 'utils/contexts/RatesContext'
import Loader from 'components/base/Loader'

export default function MyModal() {
  const [isOpen, setIsOpen] = useState(false)
  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  const [customRates, setCustomRates] = useLocalStorage(CUSTOM_RATES, false)
  const { cop, ves, loading } = useContext(RatesContext)
  const [customCop, setCustomCop] = useLocalStorage(CUSTOM_COP, cop)
  const [customVes, setCustomVes] = useLocalStorage(CUSTOM_VES, ves)

  const toggleCustomCop = (value: number) => {
    setCustomCop(value)
  }
  const toggleCustomVes = (value: number) => {
    setCustomVes(value)
  }
  const handleSwitch = (value: boolean) => {
    setCustomRates(value)
  }
  return (
    <>
      <div className="absolute top-2 left-2">
        <button
          type="button"
          onClick={openModal}
          className="py-2 px-4 text-sm font-medium text-white hover:text-cyan-500"
        >
          <HiCog size={30} />
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="overflow-y-auto fixed inset-0 z-10"
          onClose={closeModal}
        >
          <div className="px-4 min-h-screen text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block overflow-hidden p-6 my-8 w-full max-w-md text-left align-middle bg-white rounded-2xl shadow-xl transition-all transform">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Configuración
                </Dialog.Title>

                <div className="mt-2">
                  <div className="flex justify-between my-4 text-sm text-gray-800">
                    <span>Habilitar Tasa personalizada</span>
                    <Switch
                      checked={customRates}
                      onChange={handleSwitch}
                      className={`${
                        customRates ? 'bg-blue-600' : 'bg-gray-200'
                      } relative inline-flex items-center h-6 rounded-full w-11`}
                    >
                      <span className="sr-only">
                        Habilitar Tasa personalizada
                      </span>
                      <span
                        className={`${
                          customRates ? 'translate-x-6' : 'translate-x-1'
                        } inline-block w-4 h-4 transform bg-white rounded-full`}
                      />
                    </Switch>
                  </div>
                  {loading ? (
                    <Loader />
                  ) : (
                    <div className="divide-y">
                      <BaseInput
                        id="cop"
                        placeholder="3800"
                        type="number"
                        label="Precio del Dolar a Peso Colombiano(Cop)"
                        value={customCop}
                        autoFocus
                        disabled={!customRates}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          toggleCustomCop(+e.target.value.replace(/^0+/, ''))
                        }
                      />
                      <BaseInput
                        id="ves"
                        placeholder="4.6"
                        type="number"
                        disabled={!customRates}
                        label="Precio del Dolar a Bolivares (ves)"
                        value={customVes}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          toggleCustomVes(+e.target.value.replace(/^0+/, ''))
                        }
                      />
                    </div>
                  )}
                </div>

                <div className="flex justify-center items-center mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center py-2 px-4 w-full text-sm font-medium text-red-900 bg-red-100 hover:bg-red-200 rounded-md border border-transparent focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus:outline-none"
                    onClick={closeModal}
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
