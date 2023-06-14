import { createContext, useContext, useEffect, useReducer } from "react";
import { user, clocks, cart } from "../types/defaults";

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
    localStorage.setItem("tasks", JSON.stringify(tasks));
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
      return {
        ...tasks,
        cart: tasks.cart.includes(action.payload)
          ? [...tasks.cart]
          : [...tasks.cart, action.payload],
      };
    }
    case "removeFromCart": {
      return {
        ...tasks,
        cart: tasks.cart.filter((clock) => clock !== action.payload),
      };
    }
    case "wishList": {
      return {
        ...tasks,
        clocks: tasks.clocks.map((clock) => {
          if (clock.name === action.payload) {
            tasks.user.favorites.find((el) => el === clock.name)
              ? tasks.user.favorites.filter((el) => el !== clock.name)
              : tasks.user.favorites.push(clock.name);
            clock = {
              ...clock,
              wishListed: !clock.wishListed,
            };
          }
          return clock;
        }),
      };
    }
    case "clearCart": {
      return {
        ...tasks,
        cart: [],
      };
    }
    case "updateDetails": {
      return {
        ...tasks,
        user: action.payload,
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
} = localStorage.getItem("tasks")
  ? JSON.parse(localStorage.getItem("tasks")!)
  : {
      cart: [],
      user: {
        name: "string",
        address: "string",
        number: "string",
        email: "string",
        favorites: ["string"],
        orders: ["string"],
        cart: ["string"],
        delivery: "string",
      },
      clocks: [
        {
          name: "life",
          price: 1900,
          priceWord: "1,900",
          category: ["all", "luxury"],
          imgUrl:
            "https://github.com/Adebisi1234/eCommerce/blob/main/src/images/clock.jpg?raw=true",
          showcase: ["string"],
          smallImgUrl: "string",
          available: true,
          amount: 100,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laboriosam cumque necessitatibus!",
          discount: 10,
          sold: "false",
          wishListed: false,
        },
        {
          name: "family",
          price: 1900,
          priceWord: "1,900",
          category: ["all", "luxury"],
          imgUrl:
            "https://github.com/Adebisi1234/eCommerce/blob/main/src/images/clock1.jpg?raw=true",
          showcase: ["string"],
          smallImgUrl: "string",
          available: true,
          amount: 100,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laboriosam cumque necessitatibus!",
          discount: 10,
          sold: "false",
          wishListed: true,
        },
        {
          name: "family2",
          price: 1900,
          priceWord: "1,900",
          category: ["all", "luxury"],
          imgUrl:
            "https://github.com/Adebisi1234/eCommerce/blob/main/src/images/clock2.jpg?raw=true",
          showcase: ["string"],
          smallImgUrl: "string",
          available: true,
          amount: 100,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laboriosam cumque necessitatibus!",
          discount: 10,
          sold: "false",
          wishListed: false,
        },
        {
          name: "family3",
          price: 1900,
          priceWord: "1,900",
          category: ["all", "luxury"],
          imgUrl:
            "https://github.com/Adebisi1234/eCommerce/blob/main/src/images/clock3.jpg?raw=true",
          showcase: ["string"],
          smallImgUrl: "string",
          available: true,
          amount: 100,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laboriosam cumque necessitatibus!",
          discount: 10,
          sold: "false",
          wishListed: true,
        },
        {
          name: "family4",
          price: 1900,
          priceWord: "1,900",
          category: ["all", "luxury"],
          imgUrl:
            "https://github.com/Adebisi1234/eCommerce/blob/main/src/images/clock4.jpg?raw=true",
          showcase: ["string"],
          smallImgUrl: "string",
          available: true,
          amount: 100,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laboriosam cumque necessitatibus!",
          discount: 10,
          sold: "false",
          wishListed: true,
        },
        {
          name: "family5",
          price: 1900,
          priceWord: "1,900",
          category: ["all", "luxury"],
          imgUrl:
            "https://github.com/Adebisi1234/eCommerce/blob/main/src/images/clock5.jpg?raw=true",
          showcase: ["string"],
          smallImgUrl: "string",
          available: true,
          amount: 100,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laboriosam cumque necessitatibus!",
          discount: 10,
          sold: "false",
          wishListed: true,
        },

        {
          name: "family6",
          price: 1900,
          priceWord: "1,900",
          category: ["all", "luxury"],
          imgUrl:
            "https://github.com/Adebisi1234/eCommerce/blob/main/src/images/clock7.jpg?raw=true",
          showcase: ["string"],
          smallImgUrl: "string",
          available: true,
          amount: 100,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laboriosam cumque necessitatibus!",
          discount: 10,
          sold: "false",
          wishListed: true,
        },
        {
          name: "family7",
          price: 1900,
          priceWord: "1,900",
          category: ["all", "luxury"],
          imgUrl:
            "https://github.com/Adebisi1234/eCommerce/blob/main/src/images/clock8.jpg?raw=true",
          showcase: ["string"],
          smallImgUrl: "string",
          available: true,
          amount: 100,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laboriosam cumque necessitatibus!",
          discount: 10,
          sold: "false",
          wishListed: true,
        },
        {
          name: "family8",
          price: 1900,
          priceWord: "1,900",
          category: ["all", "luxury"],
          imgUrl:
            "https://github.com/Adebisi1234/eCommerce/blob/main/src/images/clock9.jpg?raw=true",
          showcase: ["string"],
          smallImgUrl: "string",
          available: true,
          amount: 100,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laboriosam cumque necessitatibus!",
          discount: 10,
          sold: "false",
          wishListed: true,
        },
        {
          name: "family9",
          price: 1900,
          priceWord: "1,900",
          category: ["all", "luxury"],
          imgUrl:
            "https://github.com/Adebisi1234/eCommerce/blob/main/src/images/clock10.jpg?raw=true",
          showcase: ["string"],
          smallImgUrl: "string",
          available: true,
          amount: 100,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laboriosam cumque necessitatibus!",
          discount: 10,
          sold: "false",
          wishListed: true,
        },
        {
          name: "family10",
          price: 1900,
          priceWord: "1,900",
          category: ["all", "luxury"],
          imgUrl:
            "https://github.com/Adebisi1234/eCommerce/blob/main/src/images/clock11.jpg?raw=true",
          showcase: ["string"],
          smallImgUrl: "string",
          available: true,
          amount: 100,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laboriosam cumque necessitatibus!",
          discount: 10,
          sold: "false",
          wishListed: true,
        },
        {
          name: "family12",
          price: 1900,
          priceWord: "1,900",
          category: ["all", "luxury"],
          imgUrl:
            "https://github.com/Adebisi1234/eCommerce/blob/main/src/images/clock12.jpg?raw=true",
          showcase: ["string"],
          smallImgUrl: "string",
          available: true,
          amount: 100,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laboriosam cumque necessitatibus!",
          discount: 10,
          sold: "false",
          wishListed: true,
        },
        {
          name: "family13",
          price: 1900,
          priceWord: "1,900",
          category: ["all", "luxury"],
          imgUrl:
            "https://github.com/Adebisi1234/eCommerce/blob/main/src/images/clock13.jpg?raw=true",
          showcase: ["string"],
          smallImgUrl: "string",
          available: true,
          amount: 100,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laboriosam cumque necessitatibus!",
          discount: 10,
          sold: "false",
          wishListed: true,
        },
        {
          name: "family14",
          price: 1900,
          priceWord: "1,900",
          category: ["all", "luxury"],
          imgUrl:
            "https://github.com/Adebisi1234/eCommerce/blob/main/src/images/clock14.jpg?raw=true",
          showcase: ["string"],
          smallImgUrl: "string",
          available: true,
          amount: 100,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laboriosam cumque necessitatibus!",
          discount: 10,
          sold: "false",
          wishListed: true,
        },
        {
          name: "family15",
          price: 1900,
          priceWord: "1,900",
          category: ["all", "luxury"],
          imgUrl:
            "https://github.com/Adebisi1234/eCommerce/blob/main/src/images/clock15.jpg?raw=true",
          showcase: ["string"],
          smallImgUrl: "string",
          available: true,
          amount: 100,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laboriosam cumque necessitatibus!",
          discount: 10,
          sold: "false",
          wishListed: true,
        },
      ],
    };
