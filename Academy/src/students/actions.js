import hat from 'hat';

import models from '../models/index';

const Students = models.Students;

const list = async(req, res, next) => {
  const result: Array = await Students.findAll();
  res.status(200).send(result);
  await next;
};

const get = async(req, res, next) => {
  const { id }: { id: string } = req.params;

  const result: Object = await Students.find({ where: { id }});
  res.status(200).send(result);
  await next;
};

const create = async(req, res, next) => {
  const {
    mentorId,
    firstName,
    lastName,
    email
  }: {
    mentorId: string,
    firstName: string,
    lastName: string,
    email: ?string
  } = req.body;

  const studentId = hat();
  
  await Students.create({
    id: studentId,
    mentorId,
    firstName,
    lastName,
    email,
  });
  res.status(201).send({ Info: `Student with id: ${studentId} has been created`})
  
  await next;
};

const update = async(req, res, next) => {
  const { id }: { id: string } = req.params;

  const updateData:{
    firstName: ?string,
    lastName: ?string,
    email: ?string
  } = Object.assign({}, req.body);

  await Students.update(updateData, { where: { id }});
  res.status(204).send({ Info: `student with id: ${studentId} has been updated` })
  await next;
};

const del = async(req, res, next) => {
  const { id }: { id: string } = req.params;

  await Students.destroy({ where: { id }});
  res.status(202).send({ Info: `student with id: ${studentId} has been removed`})
  await next;
};

export default {
  list,
  get,
  create,
  update,
  del
}