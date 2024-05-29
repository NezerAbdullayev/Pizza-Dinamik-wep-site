const orders = [
  {
    id: "io43",
    name: " pizza-1",
    price: 3,
    quantity: 2,
  },
  {
    id: "i422",
    name: " pizza-2",
    price: 2,
    quantity: 1,
  },
  {
    id: "11od",
    name: " pizza-3",
    price: 3,
    quantity: 4,
  },
  {
    id: "12s1",
    name: " pizza-4",
    price: 2,
    quantity: 9,
  },
];

function OrderItem() {
  return (

    <div className=" flex flex-wrap items-center justify-center gap-5 rounded-lg bg-stone-100 px-8 py-5">

      {orders.map((orderItem) => {
        return (
          <div
            key={orderItem.id}
            className="inline-block rounded-md bg-white px-4  py-2 text-stone-500 shadow-sm"
          >
            {orderItem.name}{" "}
            <span className="text-pizzaRed">
              ( ${orderItem.price}/- x {orderItem.quantity} )
            </span>
          </div>
        );
      })}

    </div>
  );
}

export default OrderItem;
