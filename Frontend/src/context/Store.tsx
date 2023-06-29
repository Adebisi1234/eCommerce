import { createContext, useContext, useEffect, useReducer } from "react";
import { user, clocks, cart } from "../types/defaults";
import axios from "axios";
import { BACKEND_URL } from "../App";

export const TasksContext = createContext<{
  cart: cart;
  user: user | undefined;
  clocks: clocks;
}>({ cart: [], user: undefined, clocks: [] });
export const TasksDispatchContext = createContext<React.Dispatch<any>>(
  () => {}
);

export function TasksProvider({ children }: { children: JSX.Element }) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
  // useEffect(() => {
  //   (async () => {
  //     const { data }: { data: { message: clocks } } = await axios.get(
  //       BACKEND_URL + "/api/clocks/"
  //     );
  //     console.log(data.message);
  //     dispatch({ type: "updateClocks", payload: data.message });
  //   })();
  // }, []);
  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

export function useTasks() {
  return useContext(TasksContext);
}

export function useTasksDispatch() {
  return useContext(TasksDispatchContext);
}

function tasksReducer(
  tasks: {
    cart: cart;
    user: user;
    clocks: clocks;
  },
  action: any
) {
  switch (action.type) {
    case "update": {
      return action.payload;
    }
    case "addToCart": {
      axios.post(BACKEND_URL + "/api/user/cart", {
        id: tasks.user.id,
        name: action.payload,
      });
      let cart = tasks.cart.includes(action.payload)
        ? [...tasks.cart]
        : [...tasks.cart, action.payload];

      console.log(cart);
      localStorage.setItem("cart", JSON.stringify(cart));
      return {
        ...tasks,
        cart,
      };
    }
    case "removeFromCart": {
      axios.post(BACKEND_URL + "/api/user/cart", {
        id: tasks.user.id,
        name: action.payload,
      });
      let cart = tasks.cart.filter((clock) => clock !== action.payload);
      console.log(cart);
      localStorage.setItem("cart", JSON.stringify(cart));
      return {
        ...tasks,
        cart,
      };
    }
    case "wishList": {
      axios.post(BACKEND_URL + "/api/user/wishlist", {
        id: tasks.user.id,
        name: action.payload,
      });
      let user = tasks.user;

      if (user.favorites.find((el) => el === action.payload)) {
        user.favorites = user.favorites.filter((el) => el !== action.payload);
      } else {
        user.favorites.push(action.payload);
      }
      localStorage.setItem("user", JSON.stringify(user));
      return {
        ...tasks,
        user,
      };
    }
    case "clearCart": {
      axios.post(BACKEND_URL + "/api/user/cart", {
        id: tasks.user.id,
      });
      localStorage.setItem("cart", JSON.stringify([]));
      return {
        ...tasks,
        cart: [],
      };
    }
    case "purchase": {
      axios.put(BACKEND_URL + "/api/user/purchase", { name: action.payload });
      let user = tasks.user.orders.includes(action.payload)
        ? [...tasks.user.orders]
        : [...tasks.user.orders, action.payload];
      localStorage.setItem("user", JSON.stringify(user));
      return {
        ...tasks,
        user,
      };
    }
    case "updateClocks": {
      return {
        ...tasks,
        clocks: action.payload,
      };
    }
    case "updateUser": {
      axios.post(BACKEND_URL + "/api/users/register", {
        ...action.payload,
      });

      const { password, ...other } = action.payload;
      localStorage.setItem("user", JSON.stringify({ ...tasks.user, ...other }));
      return {
        ...tasks,
        user: {
          ...tasks.user,
          ...action.payload,
        },
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

const initialTasks: {
  cart: cart;
  user: user | undefined;
  clocks: clocks;
} = {
  cart: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart") as string)
    : [],
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") as string)
    : {
        name: "",
        address: "",
        number: "",
        email: "",
        favorites: [],
        orders: [],
        cart: [],
        delivery: "door",
      },
  clocks: [
    {
      name: "life",
      price: 2100,
      priceWord: "2100",
      category: [
        "all",
        "luxury",
        "forMen",
        "forWomen",
        "forKids",
        "trending",
        "forCouples",
        "budget",
      ],
      imgUrl:
        "https://github.com/Adebisi1234/eCommerce/blob/main/Frontend/src/images/clock.jpg?raw=true",
      showcase: ["string"],
      smallImgUrl: "string",
      available: true,
      amount: 100,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laboriosam cumque necessitatibus!",
      discount: 10,
      sold: 0,
      numSold: 21,
    },
    {
      name: "family",
      price: 2000,
      priceWord: "2000",
      category: [
        "all",
        "luxury",
        "forMen",
        "forWomen",
        "forKids",
        "trending",
        "forCouples",
        "budget",
      ],
      imgUrl:
        "https://github.com/Adebisi1234/eCommerce/blob/main/Frontend/src/images/clock1.jpg?raw=true",
      showcase: ["string"],
      smallImgUrl: "string",
      available: true,
      amount: 100,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laboriosam cumque necessitatibus!",
      discount: 10,
      sold: 0,
      numSold: 21,
    },
    {
      name: "family2",
      price: 1900,
      priceWord: "1900",
      category: [
        "all",
        "luxury",
        "forMen",
        "forWomen",
        "forKids",
        "trending",
        "forCouples",
        "budget",
      ],
      imgUrl:
        "https://github.com/Adebisi1234/eCommerce/blob/main/Frontend/src/images/clock2.jpg?raw=true",
      showcase: ["string"],
      smallImgUrl: "string",
      available: true,
      amount: 100,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laboriosam cumque necessitatibus!",
      discount: 10,
      sold: 0,
      numSold: 21,
    },
    {
      name: "family3",
      price: 1900,
      priceWord: "1900",
      category: [
        "all",
        "luxury",
        "forMen",
        "forWomen",
        "forKids",
        "trending",
        "forCouples",
        "budget",
      ],
      imgUrl:
        "https://github.com/Adebisi1234/eCommerce/blob/main/Frontend/src/images/clock3.jpg?raw=true",
      showcase: ["string"],
      smallImgUrl: "string",
      available: true,
      amount: 100,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laboriosam cumque necessitatibus!",
      discount: 10,
      sold: 0,
      numSold: 21,
    },
    {
      name: "family4",
      price: 1900,
      priceWord: "1900",
      category: [
        "all",
        "luxury",
        "forMen",
        "forWomen",
        "forKids",
        "trending",
        "forCouples",
        "budget",
      ],
      imgUrl:
        "https://github.com/Adebisi1234/eCommerce/blob/main/Frontend/src/images/clock4.jpg?raw=true",
      showcase: ["string"],
      smallImgUrl: "string",
      available: true,
      amount: 100,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laboriosam cumque necessitatibus!",
      discount: 10,
      sold: 0,
      numSold: 21,
    },
    {
      name: "family5",
      price: 1900,
      priceWord: "1900",
      category: [
        "all",
        "luxury",
        "forMen",
        "forWomen",
        "forKids",
        "trending",
        "forCouples",
        "budget",
      ],
      imgUrl:
        "https://github.com/Adebisi1234/eCommerce/blob/main/Frontend/src/images/clock5.jpg?raw=true",
      showcase: ["string"],
      smallImgUrl: "string",
      available: true,
      amount: 100,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laboriosam cumque necessitatibus!",
      discount: 10,
      sold: 0,
      numSold: 21,
    },
    {
      name: "family6",
      price: 1900,
      priceWord: "1900",
      category: [
        "all",
        "luxury",
        "forMen",
        "forWomen",
        "forKids",
        "trending",
        "forCouples",
        "budget",
      ],
      imgUrl:
        "https://github.com/Adebisi1234/eCommerce/blob/main/Frontend/src/images/clock7.jpg?raw=true",
      showcase: ["string"],
      smallImgUrl: "string",
      available: true,
      amount: 100,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laboriosam cumque necessitatibus!",
      discount: 10,
      sold: 0,
      numSold: 21,
    },
    {
      name: "family7",
      price: 1900,
      priceWord: "1900",
      category: [
        "all",
        "luxury",
        "forMen",
        "forWomen",
        "forKids",
        "trending",
        "forCouples",
        "budget",
      ],
      imgUrl:
        "https://github.com/Adebisi1234/eCommerce/blob/main/Frontend/src/images/clock8.jpg?raw=true",
      showcase: ["string"],
      smallImgUrl: "string",
      available: true,
      amount: 100,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laboriosam cumque necessitatibus!",
      discount: 10,
      sold: 0,
      numSold: 21,
    },
    {
      name: "family8",
      price: 1900,
      priceWord: "1900",
      category: [
        "all",
        "luxury",
        "forMen",
        "forWomen",
        "forKids",
        "trending",
        "forCouples",
        "budget",
      ],
      imgUrl:
        "https://github.com/Adebisi1234/eCommerce/blob/main/Frontend/src/images/clock9.jpg?raw=true",
      showcase: ["string"],
      smallImgUrl: "string",
      available: true,
      amount: 100,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laboriosam cumque necessitatibus!",
      discount: 10,
      sold: 0,
      numSold: 21,
    },
    {
      name: "family9",
      price: 1900,
      priceWord: "1900",
      category: [
        "all",
        "luxury",
        "forMen",
        "forWomen",
        "forKids",
        "trending",
        "forCouples",
        "budget",
      ],
      imgUrl:
        "https://github.com/Adebisi1234/eCommerce/blob/main/Frontend/src/images/clock10.jpg?raw=true",
      showcase: ["string"],
      smallImgUrl: "string",
      available: true,
      amount: 100,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laboriosam cumque necessitatibus!",
      discount: 10,
      sold: 0,
      numSold: 21,
    },
    {
      name: "family10",
      price: 1900,
      priceWord: "1900",
      category: [
        "all",
        "luxury",
        "forMen",
        "forWomen",
        "forKids",
        "trending",
        "forCouples",
        "budget",
      ],
      imgUrl:
        "https://github.com/Adebisi1234/eCommerce/blob/main/Frontend/src/images/clock11.jpg?raw=true",
      showcase: ["string"],
      smallImgUrl: "string",
      available: true,
      amount: 100,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laboriosam cumque necessitatibus!",
      discount: 10,
      sold: 0,
      numSold: 21,
    },
    {
      name: "family12",
      price: 1900,
      priceWord: "1900",
      category: [
        "all",
        "luxury",
        "forMen",
        "forWomen",
        "forKids",
        "trending",
        "forCouples",
        "budget",
      ],
      imgUrl:
        "https://github.com/Adebisi1234/eCommerce/blob/main/Frontend/src/images/clock12.jpg?raw=true",
      showcase: ["string"],
      smallImgUrl: "string",
      available: true,
      amount: 100,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laboriosam cumque necessitatibus!",
      discount: 10,
      sold: 0,
      numSold: 21,
    },
    {
      name: "family13",
      price: 190000,
      priceWord: "19,000",
      category: [
        "all",
        "luxury",
        "forMen",
        "forWomen",
        "forKids",
        "trending",
        "forCouples",
        "budget",
      ],
      imgUrl:
        "https://github.com/Adebisi1234/eCommerce/blob/main/Frontend/src/images/clock13.jpg?raw=true",
      showcase: ["string"],
      smallImgUrl: "string",
      available: true,
      amount: 100,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laboriosam cumque necessitatibus!",
      discount: 10,
      sold: 0,
      numSold: 21,
    },
    {
      name: "family14",
      price: 1900,
      priceWord: "1900",
      category: [
        "all",
        "luxury",
        "forMen",
        "forWomen",
        "forKids",
        "trending",
        "forCouples",
        "budget",
      ],
      imgUrl:
        "https://github.com/Adebisi1234/eCommerce/blob/main/Frontend/src/images/clock14.jpg?raw=true",
      showcase: ["string"],
      smallImgUrl: "string",
      available: true,
      amount: 100,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laboriosam cumque necessitatibus!",
      discount: 10,
      sold: 0,
      numSold: 21,
    },
    {
      name: "family15",
      price: 1900,
      priceWord: "1900",
      category: [
        "all",
        "luxury",
        "forMen",
        "forWomen",
        "forKids",
        "trending",
        "forCouples",
        "budget",
      ],
      imgUrl:
        "https://github.com/Adebisi1234/eCommerce/blob/main/Frontend/src/images/clock15.jpg?raw=true",
      showcase: ["string"],
      smallImgUrl: "string",
      available: true,
      amount: 100,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laboriosam cumque necessitatibus!",
      discount: 10,
      sold: 0,
      numSold: 21,
    },
  ],
};
// [
//   {
//     name: "life",
//     price: 2100,
//     priceWord: "2100",
//     category: ["all", "luxury", "forMen", "forWomen", "forKids", "trending", "forCouples", "budget"],
//     imgUrl:
//       "https://github.com/Adebisi1234/eCommerce/blob/main/Frontend/src/images/clock.jpg?raw=true",
//     showcase: ["string"],
//     smallImgUrl: "string",
//     available: true,
//     amount: 100,
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laboriosam cumque necessitatibus!",
//     discount: 10,
//     sold: 0,
//     numSold: 21,
//   },
//   {
//     name: "family",
//     price: 2000,
//     priceWord: "2000",
//     category: ["all", "luxury", "forMen", "forWomen", "forKids", "trending", "forCouples", "budget"],
//     imgUrl:
//       "https://github.com/Adebisi1234/eCommerce/blob/main/Frontend/src/images/clock1.jpg?raw=true",
//     showcase: ["string"],
//     smallImgUrl: "string",
//     available: true,
//     amount: 100,
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laboriosam cumque necessitatibus!",
//     discount: 10,
//     sold: 0,
//     numSold: 21,
//   },
//   {
//     name: "family2",
//     price: 1900,
//     priceWord: "1900",
//     category: ["all", "luxury", "forMen", "forWomen", "forKids", "trending", "forCouples", "budget"],
//     imgUrl:
//       "https://github.com/Adebisi1234/eCommerce/blob/main/Frontend/src/images/clock2.jpg?raw=true",
//     showcase: ["string"],
//     smallImgUrl: "string",
//     available: true,
//     amount: 100,
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laboriosam cumque necessitatibus!",
//     discount: 10,
//     sold: 0,
//     numSold: 21,
//   },
//   {
//     name: "family3",
//     price: 1900,
//     priceWord: "1900",
//     category: ["all", "luxury", "forMen", "forWomen", "forKids", "trending", "forCouples", "budget"],
//     imgUrl:
//       "https://github.com/Adebisi1234/eCommerce/blob/main/Frontend/src/images/clock3.jpg?raw=true",
//     showcase: ["string"],
//     smallImgUrl: "string",
//     available: true,
//     amount: 100,
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laboriosam cumque necessitatibus!",
//     discount: 10,
//     sold: 0,
//     numSold: 21,
//   },
//   {
//     name: "family4",
//     price: 1900,
//     priceWord: "1900",
//     category: ["all", "luxury", "forMen", "forWomen", "forKids", "trending", "forCouples", "budget"],
//     imgUrl:
//       "https://github.com/Adebisi1234/eCommerce/blob/main/Frontend/src/images/clock4.jpg?raw=true",
//     showcase: ["string"],
//     smallImgUrl: "string",
//     available: true,
//     amount: 100,
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laboriosam cumque necessitatibus!",
//     discount: 10,
//     sold: 0,
//     numSold: 21,
//   },
//   {
//     name: "family5",
//     price: 1900,
//     priceWord: "1900",
//     category: ["all", "luxury", "forMen", "forWomen", "forKids", "trending", "forCouples", "budget"],
//     imgUrl:
//       "https://github.com/Adebisi1234/eCommerce/blob/main/Frontend/src/images/clock5.jpg?raw=true",
//     showcase: ["string"],
//     smallImgUrl: "string",
//     available: true,
//     amount: 100,
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laboriosam cumque necessitatibus!",
//     discount: 10,
//     sold: 0,
//     numSold: 21,
//   },
//   {
//     name: "family6",
//     price: 1900,
//     priceWord: "1900",
//     category: ["all", "luxury", "forMen", "forWomen", "forKids", "trending", "forCouples", "budget"],
//     imgUrl:
//       "https://github.com/Adebisi1234/eCommerce/blob/main/Frontend/src/images/clock7.jpg?raw=true",
//     showcase: ["string"],
//     smallImgUrl: "string",
//     available: true,
//     amount: 100,
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laboriosam cumque necessitatibus!",
//     discount: 10,
//     sold: 0,
//     numSold: 21,
//   },
//   {
//     name: "family7",
//     price: 1900,
//     priceWord: "1900",
//     category: ["all", "luxury", "forMen", "forWomen", "forKids", "trending", "forCouples", "budget"],
//     imgUrl:
//       "https://github.com/Adebisi1234/eCommerce/blob/main/Frontend/src/images/clock8.jpg?raw=true",
//     showcase: ["string"],
//     smallImgUrl: "string",
//     available: true,
//     amount: 100,
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laboriosam cumque necessitatibus!",
//     discount: 10,
//     sold: 0,
//     numSold: 21,
//   },
//   {
//     name: "family8",
//     price: 1900,
//     priceWord: "1900",
//     category: ["all", "luxury", "forMen", "forWomen", "forKids", "trending", "forCouples", "budget"],
//     imgUrl:
//       "https://github.com/Adebisi1234/eCommerce/blob/main/Frontend/src/images/clock9.jpg?raw=true",
//     showcase: ["string"],
//     smallImgUrl: "string",
//     available: true,
//     amount: 100,
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laboriosam cumque necessitatibus!",
//     discount: 10,
//     sold: 0,
//     numSold: 21,
//   },
//   {
//     name: "family9",
//     price: 1900,
//     priceWord: "1900",
//     category: ["all", "luxury", "forMen", "forWomen", "forKids", "trending", "forCouples", "budget"],
//     imgUrl:
//       "https://github.com/Adebisi1234/eCommerce/blob/main/Frontend/src/images/clock10.jpg?raw=true",
//     showcase: ["string"],
//     smallImgUrl: "string",
//     available: true,
//     amount: 100,
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laboriosam cumque necessitatibus!",
//     discount: 10,
//     sold: 0,
//     numSold: 21,
//   },
//   {
//     name: "family10",
//     price: 1900,
//     priceWord: "1900",
//     category: ["all", "luxury", "forMen", "forWomen", "forKids", "trending", "forCouples", "budget"],
//     imgUrl:
//       "https://github.com/Adebisi1234/eCommerce/blob/main/Frontend/src/images/clock11.jpg?raw=true",
//     showcase: ["string"],
//     smallImgUrl: "string",
//     available: true,
//     amount: 100,
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laboriosam cumque necessitatibus!",
//     discount: 10,
//     sold: 0,
//     numSold: 21,
//   },
//   {
//     name: "family12",
//     price: 1900,
//     priceWord: "1900",
//     category: ["all", "luxury", "forMen", "forWomen", "forKids", "trending", "forCouples", "budget"],
//     imgUrl:
//       "https://github.com/Adebisi1234/eCommerce/blob/main/Frontend/src/images/clock12.jpg?raw=true",
//     showcase: ["string"],
//     smallImgUrl: "string",
//     available: true,
//     amount: 100,
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laboriosam cumque necessitatibus!",
//     discount: 10,
//     sold: 0,
//     numSold: 21,
//   },
//   {
//     name: "family13",
//     price: 190000,
//     priceWord: "19,000",
//     category: ["all", "luxury", "forMen", "forWomen", "forKids", "trending", "forCouples", "budget"],
//     imgUrl:
//       "https://github.com/Adebisi1234/eCommerce/blob/main/Frontend/src/images/clock13.jpg?raw=true",
//     showcase: ["string"],
//     smallImgUrl: "string",
//     available: true,
//     amount: 100,
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laboriosam cumque necessitatibus!",
//     discount: 10,
//     sold: 0,
//     numSold: 21,
//   },
//   {
//     name: "family14",
//     price: 1900,
//     priceWord: "1900",
//     category: ["all", "luxury", "forMen", "forWomen", "forKids", "trending", "forCouples", "budget"],
//     imgUrl:
//       "https://github.com/Adebisi1234/eCommerce/blob/main/Frontend/src/images/clock14.jpg?raw=true",
//     showcase: ["string"],
//     smallImgUrl: "string",
//     available: true,
//     amount: 100,
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laboriosam cumque necessitatibus!",
//     discount: 10,
//     sold: 0,
//     numSold: 21,
//   },
//   {
//     name: "family15",
//     price: 1900,
//     priceWord: "1900",
//     category: ["all", "luxury", "forMen", "forWomen", "forKids", "trending", "forCouples", "budget"],
//     imgUrl:
//       "https://github.com/Adebisi1234/eCommerce/blob/main/Frontend/src/images/clock15.jpg?raw=true",
//     showcase: ["string"],
//     smallImgUrl: "string",
//     available: true,
//     amount: 100,
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laboriosam cumque necessitatibus!",
//     discount: 10,
//     sold: 0,
//     numSold: 21,
//   },
// ];
