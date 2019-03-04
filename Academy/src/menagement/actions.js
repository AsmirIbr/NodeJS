import hat from 'hat';

import models from '../models/index';

const Menagement = models.Menagement;

const list = async(req, res, next) => {
  const result: Array = await Menagement.findAll({
    include: [
      {
        model: models.Mentors,
        include: [{
          model: models.Students
        }],
      }
    ]
  });
  res.status(200).send(result);
  await next;
};

const get = async(req, res, next) => {
  const { id }: { id: string } = req.params;

  const result: Object = await Menagement.find({ 
    where: { id },
    include: [
      {
        model: models.Mentors,
        include: [{
          model: models.Students
        }],
      }]
  });
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

  const menagementId = hat();
  
  await Menagement.create({
    id: menagementId,
    firstName,
    lastName,
    email,
    role
  });
  res.status(201).send({ Info: `Menagement with id: ${menagementId} has been created`})
  
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

  await Menagement.update(updateData, { where: { id }});
  res.status(204).send({ Info: `Menagement with id: ${menagementId} has been updated` })
  await next;
};

const del = async(req, res, next) => {
  const { id }: { id: string } = req.params;

  await Menagement.destroy({ where: { id }});
  res.status(202).send({ Info: `Menagement with id: ${menagementId} has been removed`})
  await next;
};

export default {
  list,
  get,
  create,
  update,
  del
}