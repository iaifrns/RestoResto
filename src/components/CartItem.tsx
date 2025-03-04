import { Icon } from "@iconify/react/dist/iconify.js";

const CartItem = ({
  data,
  ind,
}: {
  data: { name: string; price: string; quantity: number; image: string };
  ind: number;
}) => {
  return (
    <div className="flex w-full gap-2 items-center">
      <p className="text-sm text-secondary">{ind + 1}</p>
      <div className="flex gap-2 w-full">
        <img
          src={data.image}
          alt={data.image}
          className="w-[70px] h-[60px] object-cover"
        />
        <div className="flex flex-col gap-2">
          <p className="text-sm font-semibold text-white">{data.name}</p>
          <p className="text-xs text-white">
            {data.quantity} x {data.price}
          </p>
        </div>
      </div>
      <Icon icon={"iconoir:cancel"} className="text-secondary" width={"24"} />
    </div>
  );
};

export default CartItem;
