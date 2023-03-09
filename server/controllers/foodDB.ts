
import logs from '../models/logs';
import { Context } from 'koa';
const food = require("../models/food");

exports.getDataBase = async (ctx: Context) :Promise <void> => {
  try {
    ctx.status = 200;
    ctx.body = await food.find();
  } catch (e) {
    ctx.status = 500;
    console.log("Internal Server Error", e);
  }
};
