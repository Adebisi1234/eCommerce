import { createContext, useContext, useEffect, useReducer } from "react";
import { user, clocks, cart } from "../types/defaults";
// import axios from "axios";
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
  useEffect(() => {
    // fetch("localhost:6001/api/clocks/getAllProduct", {
    //   method: "get",
    // })
    //   .then((res: any) => {
    //     console.log(res.message);
    //     dispatch({
    //       type: "updateClocks",
    //       payload: res.message,
    //     });
    //   })
    //   .catch((err) => console.log(err));
  }, [tasks]);

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
    case "addToCart": {
      // axios
      //   .post("localhost:6001/api/user/cart", {
      //     id: tasks.user.id,
      //     name: tasks.user.name,
      //   })
      //   .then((res) => console.log(res))
      //   .catch(console.error);
      return {
        ...tasks,
        cart: tasks.cart.includes(action.payload)
          ? [...tasks.cart]
          : [...tasks.cart, action.payload],
      };
    }
    case "removeFromCart": {
      // tasks.user &&
      //   axios
      //     .post("localhost:6001/api/users/cart", {
      //       id: tasks.user.id,
      //       name: action.payload,
      //     })
      //     .then((res) => console.log(res))
      //     .catch(console.error);
      return {
        ...tasks,
        cart: tasks.cart.filter((clock) => clock !== action.payload),
      };
    }
    case "wishList": {
      // tasks.user &&
      // axios
      //   .post("localhost:6001/api/users/favorite", {
      //     id: tasks.user.id,
      //     name: action.payload,
      //   })
      //   .then((res) => console.log(res))
      //   .catch(console.error);
      let user = tasks.user;
      console.log("payload", action.payload);

      if (user.favorites.find((el) => el === action.payload)) {
        user.favorites = user.favorites.filter((el) => el !== action.payload);
        console.log("fuck", user.favorites);
      } else {
        user.favorites.push(action.payload);
        console.log("fav", user);
      }

      return {
        ...tasks,
        user,
      };
    }
    case "clearCart": {
      // tasks.user &&
      //   axios
      //     .post("localhost:6001/api/users/cart", {
      //       id: tasks.user.id,
      //       name: tasks.user.name,
      //     })
      //     .then((res) => console.log(res))
      //     .catch(console.error);
      return {
        ...tasks,
        cart: [],
      };
    }
    case "updateClocks": {
      return {
        ...tasks,
        clocks: action.payload,
      };
    }
    case "updateUser": {
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
  cart: [],
  user: {
    name: "",
    address: "123, daldk",
    number: "32039443",
    email: "ti.adebisi@gmail.com",
    favorites: ["life", "family"],
    orders: ["family2", "family"],
    cart: ["family3", "family4"],
    delivery: "door",
  },
  clocks: [
    {
      name: "life",
      price: 2100,
      priceWord: "2100",
      category: ["all", "luxury"],
      imgUrl:
        "https://github.com/Adebisi1234/eCommerce/blob/main/Frontend/src/images/clock.jpg?raw=true",
      showcase: ["string"],
      smallImgUrl: "string",
      available: true,
      amount: 100,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laboriosam cumque necessitatibus!",
      discount: 10,
      sold: "false",
      numSold: 21,
    },
    {
      name: "family",
      price: 2000,
      priceWord: "2000",
      category: ["all", "luxury"],
      imgUrl:
        "https://github.com/Adebisi1234/eCommerce/blob/main/Frontend/src/images/clock1.jpg?raw=true",
      showcase: ["string"],
      smallImgUrl: "string",
      available: true,
      amount: 100,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laboriosam cumque necessitatibus!",
      discount: 10,
      sold: "false",
      numSold: 21,
    },
    {
      name: "family2",
      price: 1900,
      priceWord: "1900",
      category: ["all", "luxury"],
      imgUrl:
        "https://github.com/Adebisi1234/eCommerce/blob/main/Frontend/src/images/clock2.jpg?raw=true",
      showcase: ["string"],
      smallImgUrl: "string",
      available: true,
      amount: 100,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laboriosam cumque necessitatibus!",
      discount: 10,
      sold: "false",
      numSold: 21,
    },
    {
      name: "family3",
      price: 1900,
      priceWord: "1900",
      category: ["all", "luxury"],
      imgUrl:
        "https://github.com/Adebisi1234/eCommerce/blob/main/Frontend/src/images/clock3.jpg?raw=true",
      showcase: ["string"],
      smallImgUrl: "string",
      available: true,
      amount: 100,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laboriosam cumque necessitatibus!",
      discount: 10,
      sold: "false",
      numSold: 21,
    },
    {
      name: "family4",
      price: 1900,
      priceWord: "1900",
      category: ["all", "luxury"],
      imgUrl:
        "https://github.com/Adebisi1234/eCommerce/blob/main/Frontend/src/images/clock4.jpg?raw=true",
      showcase: ["string"],
      smallImgUrl: "string",
      available: true,
      amount: 100,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laboriosam cumque necessitatibus!",
      discount: 10,
      sold: "false",
      numSold: 21,
    },
    {
      name: "family5",
      price: 1900,
      priceWord: "1900",
      category: ["all", "luxury"],
      imgUrl:
        "https://github.com/Adebisi1234/eCommerce/blob/main/Frontend/src/images/clock5.jpg?raw=true",
      showcase: ["string"],
      smallImgUrl: "string",
      available: true,
      amount: 100,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laboriosam cumque necessitatibus!",
      discount: 10,
      sold: "false",
      numSold: 21,
    },

    {
      name: "family6",
      price: 1900,
      priceWord: "1900",
      category: ["all", "luxury"],
      imgUrl:
        "https://github.com/Adebisi1234/eCommerce/blob/main/Frontend/src/images/clock7.jpg?raw=true",
      showcase: ["string"],
      smallImgUrl: "string",
      available: true,
      amount: 100,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laboriosam cumque necessitatibus!",
      discount: 10,
      sold: "false",
      numSold: 21,
    },
    {
      name: "family7",
      price: 1900,
      priceWord: "1900",
      category: ["all", "luxury"],
      imgUrl:
        "https://github.com/Adebisi1234/eCommerce/blob/main/Frontend/src/images/clock8.jpg?raw=true",
      showcase: ["string"],
      smallImgUrl: "string",
      available: true,
      amount: 100,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laboriosam cumque necessitatibus!",
      discount: 10,
      sold: "false",
      numSold: 21,
    },
    {
      name: "family8",
      price: 1900,
      priceWord: "1900",
      category: ["all", "luxury"],
      imgUrl:
        "https://github.com/Adebisi1234/eCommerce/blob/main/Frontend/src/images/clock9.jpg?raw=true",
      showcase: ["string"],
      smallImgUrl: "string",
      available: true,
      amount: 100,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laboriosam cumque necessitatibus!",
      discount: 10,
      sold: "false",
      numSold: 21,
    },
    {
      name: "family9",
      price: 1900,
      priceWord: "1900",
      category: ["all", "luxury"],
      imgUrl:
        "https://github.com/Adebisi1234/eCommerce/blob/main/Frontend/src/images/clock10.jpg?raw=true",
      showcase: ["string"],
      smallImgUrl: "string",
      available: true,
      amount: 100,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laboriosam cumque necessitatibus!",
      discount: 10,
      sold: "false",
      numSold: 21,
    },
    {
      name: "family10",
      price: 1900,
      priceWord: "1900",
      category: ["all", "luxury"],
      imgUrl:
        "https://github.com/Adebisi1234/eCommerce/blob/main/Frontend/src/images/clock11.jpg?raw=true",
      showcase: ["string"],
      smallImgUrl: "string",
      available: true,
      amount: 100,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laboriosam cumque necessitatibus!",
      discount: 10,
      sold: "false",
      numSold: 21,
    },
    {
      name: "family12",
      price: 1900,
      priceWord: "1900",
      category: ["all", "luxury"],
      imgUrl:
        "https://github.com/Adebisi1234/eCommerce/blob/main/Frontend/src/images/clock12.jpg?raw=true",
      showcase: ["string"],
      smallImgUrl: "string",
      available: true,
      amount: 100,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laboriosam cumque necessitatibus!",
      discount: 10,
      sold: "false",
      numSold: 21,
    },
    {
      name: "family13",
      price: 190000,
      priceWord: "19,000",
      category: ["all", "luxury"],
      imgUrl:
        "https://github.com/Adebisi1234/eCommerce/blob/main/Frontend/src/images/clock13.jpg?raw=true",
      showcase: ["string"],
      smallImgUrl: "string",
      available: true,
      amount: 100,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laboriosam cumque necessitatibus!",
      discount: 10,
      sold: "false",
      numSold: 21,
    },
    {
      name: "family14",
      price: 1900,
      priceWord: "1900",
      category: ["all", "luxury"],
      imgUrl:
        "https://github.com/Adebisi1234/eCommerce/blob/main/Frontend/src/images/clock14.jpg?raw=true",
      showcase: ["string"],
      smallImgUrl: "string",
      available: true,
      amount: 100,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laboriosam cumque necessitatibus!",
      discount: 10,
      sold: "false",
      numSold: 21,
    },
    {
      name: "family15",
      price: 1900,
      priceWord: "1900",
      category: ["all", "luxury"],
      imgUrl:
        "https://github.com/Adebisi1234/eCommerce/blob/main/Frontend/src/images/clock15.jpg?raw=true",
      showcase: ["string"],
      smallImgUrl: "string",
      available: true,
      amount: 100,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laboriosam cumque necessitatibus!",
      discount: 10,
      sold: "false",
      numSold: 21,
    },
  ],
};
