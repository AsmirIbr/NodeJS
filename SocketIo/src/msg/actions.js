import hat from 'hat';

import models from '../models/index';

const Message = models.Message;

const list = async(req, res, next) => {
  const result: Array = await Message.findAll({ 
    order: [
      ['createdAt', 'DESC']
    ]
  });

  res.status(200).send(result);
  await next;
}

const create = async(req, res, next) => {
  const {
    msg
  }: {
    msg: string
  } = req.body;

  const msgId = hat();

  await Message.create({
    id: msgId,
    msg
  });

  res.status(201)
  await next;
}

export default {
  list,
  create
}