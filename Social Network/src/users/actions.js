import hat from 'hat';

import models from '../models/index';

const Users = models.Users;

const list = async(req, res, next) => {
  const result: Array = await Users.findAll();
  res.status(200).send(result);
  await next;
};

const get = async(req, res, next) => {
  const { id }: { id: string } = req.params;

  const result: Object = await Users.find({ where: { id }});
  res.status(200).send(result);

  await next;
};

const create = async(req, res, next) => {
  const {
    firstName,
    lastName,
    email,
    role,
    status,
  }: {
    firstName: string,
    lastName: string,
    email: ?string,
    role: ?string,
    status: ?string,
  } = req.body;

  const userId = hat();

  await Users.create({
    id: userId,
    firstName,
    lastName,
    email,
    role,
    status,
  });
  res.status(201).send({ Info: `User with id: ${userId} has been created`});

  await next;
};

const update = async(req, res, next) => {
  const { id }: { id: string } = req.params;

  const updateData:{
    firstName: ?string,
    lastName: ?string,
    email: ?string,
    role: ?string,
    status: ?string,
  } = Object.assign({}, req.body);

  await Users.update(updateData, { where: { id }});
  res.status(204).send({ Info: `User with id: ${userId} has been updated`})
  await next;
};

const del = async(req, res, next) => {
  const { id }: { id: string } = req.params;

  await Users.destroy({ where: { id }});
  res.status(202).send({ Info: `User with id: ${userId} has been removed`})
  await next;
};

export default {
  get,
  list,
  create,
  update,
  del
}