import hat from 'hat';
import Sequelize from 'sequelize';
import Bluebird from 'bluebird';

import models from '../models/index';

const Company = models.Company;
const Users = models.Users;
const Op = Sequelize.Op;

// Bluebird.promisifyAll();

const companyIdValidation = Bluebird.coroutine(
  function* validationCompanyId(id: string) {
    const results: Array = yield Company.findAll();
    const companyIds = results.map(companyId => companyId.id);
    return companyIds.includes(id);
  }
);

const usersIdValidation = Bluebird.coroutine(
  function* validationUsersId(id: string) {
    const results: Array = yield Users.findAll();
    const usersIds = results.map(usersId => usersId.id);
    return usersIds.includes(id);
  }
);

const list = async(req, res, next) => {
  const result: Array = await Company.findAll({

    include: [{
      model: models.Users
    }]
  });

  res.status(200).send(result);
  await next;
}

const getOR = async(req, res, next) => {
  const result: Array = await Company.findAll({
    where: {
    name: {
      [Op.or]: ['CodeAcademy1', 'CodeAcademy44']
    }
  }
  });
  res.status(200).send(result);
  
  await next;
}

const getBetween = async(req, res, next) => {
  const result: Array = await Company.findAll({
    where: {
    createdAt: {
      [Op.between]: ['2019-03-08 17:41:37','2019-03-08 18:18:33']
    }
  }
  });
  res.status(200).send(result);
  
  await next;
}

const getNotBetween = async(req, res, next) => {
  const result: Array = await Company.findAll({
    where: {
    name: {
      [Op.notBetween]: ['CodeAcademy1', 'CodeAcademy4']
    }
  }
  });
  res.status(200).send(result);
  
  await next;
}

const getLike = async(req, res, next) => {
  const result: Array = await Company.findAll({
    where: {
    name: {
      [Op.like]: ['%2']
    }
  }
  });
  res.status(200).send(result);
  
  await next;
}

const getNotLike = async(req, res, next) => {
  const result: Array = await Company.findAll({
    where: {
    name: {
      [Op.notLike]: ['%2']
    }
  }
  });
  res.status(200).send(result);
  
  await next;
}

const getCompany = async(req, res, next) => {
  const { id }: { id: string } = req.params;
  const validationCompanyId = await companyIdValidation(id);

  if (validationCompanyId) {
    const result: Object = await Company.find({
      where: { id },
      include:[{
        model: models.Users
      }]
    });
    res.status(200).send(result);
  }
  res.status(400).send({ info: `Company id ${id} is not found`});

  await next;
}

const getUserFromCompany = async(req, res, next) => {
  const { companyId }: { companyId: string } = req.params;
  const { id }: { id: string } = req.params;
   
  const validationCompanyId = await companyIdValidation(companyId);

  if (validationCompanyId) {
    const validationUsersId = await usersIdValidation(id);

  if (validationUsersId) {
    const result: Object = await Users.find({ where: { id }});
    res.status(200).send(result);
  }
      res.status(400).send({ info: `User id ${companyId} is not found`});
  }
  
  res.status(400).send({ info: `Company id ${companyId} is not found`});
}

const create = async(req, res, next) => {
  
  const {
    name,
    empolyeeID,
    foudedOn,
    numberOfEmployees,
    location,
  }: {
    name: string,
    empolyeeID: ?string,
    foudedOn: ?string,
    numberOfEmployees: ?string,
    location: ?string,
  } = req.body;

  const companyId = hat();

    await Company.create({
    id: companyId,
    name,
    location,
    empolyeeID,
    foudedOn,
    numberOfEmployees,
  });

  res.status(201).send({ Info: `Company with id: ${companyId} has been created`})
  await next;
}

const update = async(req, res, next) => {
  const { id }: { id: string } = req.params;

  const updateData: {
    name: ?string,
    empolyeeID: ?string,
    foudedOn: ?string,
    numberOfEmployees: ?string,
    location: ?string,
    email: ?string,
    username: ?string,
    password: ?string,
    passHash: ?string
  } = Object.assign({}, req.body);

  const validationCompanyId = await companyIdValidation(id);
  if (!validationCompanyId) {
    res.status(400).send({ info: `Company id ${id} is not found`});
  }
  
    await Company.update(updateData, { where: { id }})
    res.status(204).send({ info: `Company id ${id} has been updated`});

  await next;
}

const del = async(req, res, next) => {
  const { id }: { id: string } = req.params;
  const validationCompanyId = await companyIdValidation(id);

  if (!validationCompanyId) {
    res.status(400).send({ info: `Company id ${id} is not found`});
  }
    await Company.destroy({ where: { id }});
    res.status(202).send({ info: `Company id ${id} has been removed`});
  await next;
}

export default {
  list,
  getBetween,
  getNotBetween,
  getNotLike,
  getOR,
  getCompany,
  create,
  update,
  getLike,
  del,
  getUserFromCompany
}