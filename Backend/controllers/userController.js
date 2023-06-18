import User from "../models/userModel";

const editFavorite = async (req, res, next) => {
  try {
    const user = await User.findOne({ _id: req.body.id });
    if (req.body.name) {
      user.favorite.includes(req.body.name)
        ? user.favorite.pop(req.body.name)
        : user.favorite.push(req.body.name);
    } else {
      user.favorite = [];
    }

    await user.save();
    res.status(200).json({
      status: "success",
      message: user,
    });
  } catch (error) {
    console.log(error);
    next();
  }
};

const editCart = async (req, res, next) => {
  try {
    const user = await User.findOne({ _id: req.body.id });
    if (req.body.name) {
      user.cart.includes(req.body.name)
        ? user.cart.pop(req.body.name)
        : user.cart.push(req.body.name);
    } else {
      user.cart = [];
    }
    await user.save();

    res.status(200).json({
      status: "success",
      message: user,
    });
  } catch (error) {
    console.log(error);
    next();
  }
};

const purchasedProduct = async (req, res, next) => {
  try {
    const user = await User.findOne({ _id: req.body.id });
    user.cart = [];
    user.orders.push(req.body.name);
    await user.save();

    res.status(200).json({
      status: "success",
      message: user,
    });
  } catch (error) {
    console.log(error);
    next();
  }
};

export default {
  editFavorite,
  editCart,
  purchasedProduct,
};
