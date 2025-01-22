import MenuItem from './components/MenuItem'
import OrderContents from './components/OrderContents'
import { menuItems } from './data/db'
import useOrder from './hooks/useOrder'
import OrderTotals from './components/OrderTotals'
import TipPorcentageForm from './components/TipPorcentajeForm'

function App() {

  const { order, tip, setTip, addItem, removeItem, pleaceOrder } = useOrder()



  return (
    <>
        <header className="bg-teal-400 py-5">
          <h1 className="text-center text-4xl font-black">Calculadora de Propinas y Consumo</h1>
        </header>

        <main className=' max-w-7xl mx-auto py-20 grid md:grid-cols-2 gap-7'>
          <div className='P-5'>
            <h2 className='text-4xl font-black'>Menu</h2>

            <div className="space-y-3 mt-10">
              {menuItems.map(item => (
                  <MenuItem
                    key={item.id}
                    item={item}
                    addItem={addItem}
                  />
                ))}
              </div>
            </div>

          <div className='border border-dashed border-slate-300 rounded-lg space-y-10 p-5'>
            {order.length > 0 ?(
              <>
                <OrderContents
                  order={order}
                  removeItem={removeItem}
                />

                <TipPorcentageForm 
                  setTip={setTip}
                  tip={tip}
                />

                <OrderTotals
                  order={order}
                  tip={tip}
                  placeOrder={pleaceOrder}
                />

              </>
            ) : (
              <p className="text-center">La Orden esta vacia</p>
            )}
           





          </div>


        </main>
    </>
  )
}

export default App
