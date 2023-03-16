import logs from '../models/logs';
import { Context } from 'koa';
import koaBody from 'koa-bodyparser';

exports.getLogs = async  (ctx : Context ) : Promise <void>=> {
  try {
    ctx.status = 200;
    ctx.body = await logs.find();
  } catch(e) {
    ctx.status = 500;
    console.log('Internal Server Error', e);
  }
}

exports.getLog = async  (ctx : Context ) : Promise <void>=> {
  try {
    const { id } = ctx.params
    ctx.status = 200;
    ctx.body = await logs.findById(id);
  } catch (e) {
    ctx.status = 500;
    console.log("Internal Server Error", e);
  }
};

exports.postLog = async   (ctx : Context ) : Promise <void>=> {
  try {
    ctx.status = 201;
    ctx.body = await logs.create(ctx.request.body);
  } catch (e) {
    ctx.status = 500;
    console.log("Internal Server Error", e);
  }
}

exports.deleteLog = async   (ctx : Context ) : Promise <void>=> {
  try {
    const { id } = ctx.params;
    ctx.status = 200;
    ctx.body = await logs.deleteOne({ _id: id });
  } catch (e) {
    ctx.status = 500;
    console.log("Internal Server Error", e);
  }
};


exports.editLog = async (ctx : Context ) : Promise <void> => {
  try {
    const { id } = ctx.params;
    ctx.status = 200;
    //@ts-ignore
    ctx.body = await logs.findByIdAndUpdate(id, ctx.request.body);
  } catch (e) {
    ctx.status = 500;
    console.log("Internal Server Error", e);
  }
};


