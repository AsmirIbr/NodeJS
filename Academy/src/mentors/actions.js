import hat from 'hat';

import models from '../models/index';

const Mentors = models.Mentors;

const list = async(req, res, next) => {
  const result: Array = await Mentors.findAll();
  res.status(200).send(result);
  await next;
};

const get = async(req, res, next) => {
  const { id }: { id: string } = req.params;

  const result: Object = await Mentors.find({ where: { id }});
  res.status(200).send(result);
  await next;
};

const create = async(req, res, next) => {
  const {
    firstName,
    lastName,
    email,
    role
  }: {
    firstName: string,
    lastName: string,
    email: ?string,
    role: ?string
  } = req.body;

  const mentorId = hat();
  
  await Mentors.create({
    id: mentorId,
    firstName,
    lastName,
    email,
    role
  });
  res.status(201).send({ Info: `Mentor with id: ${mentorId} has been created`})
  
  await next;
};

const update = async(req, res, next) => {
  const { id }: { id: string } = req.params;

  const updateData:{
    firstName: ?string,
    lastName: ?string,
    email: ?string,
    role: ?string
  } = Object.assign({}, req.body);

  await Mentors.update(updateData, { where: { id }});
  res.status(204).send({ Info: `Mentor with id: ${mentorId} has been updated` })
  await next;
};

const del = async(req, res, next) => {
  const { id }: { id: string } = req.params;

  await Mentors.destroy({ where: { id }});
  res.status(202).send({ Info: `Mentor with id: ${mentorId} has been removed`})
  await next;
};

export default {
  list,
  get,
  create,
  update,
  del
}