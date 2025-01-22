import { formatCurrency } from "../helpers"
import { MenuItem, OrderItem } from "../types"

type OrderContentsProps = {
    order: OrderItem[],
    removeItem: (id : MenuItem['id']) => void
}

export default function OrderContents({order, removeItem} : OrderContentsProps) {
  return (
    <div className="p-5">
        <h2 className='font-black text-4xl'>Consumo</h2>

        <div className="space-y-3 mt-5">
            {order.map(item => (
                <div key={item.id}
                     className="flex justify-between items-center border-t border-t-gray-200 py-4 last-of-type:border-b">
                    <div>
                        <p className="text-lg">
                            {item.name} - {formatCurrency( item.price)}
                        </p>
                        <p className="font-black">
                            Cantidad: {item.quantity} - {formatCurrency(item.quantity * item.price)}    
                        </p>
                    </div>
                        <button className="bg-red-500 h-8 w-8 rounded-full text-white font-black mx-4"
                            onClick={() => removeItem(item.id)}
                        >
                            x
                        </button>
                </div>
            ))}
        </div>
    </div>
  )
}
