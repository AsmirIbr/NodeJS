import hat from 'hat';
import Sequelize from 'sequelize';
import Bluebird from 'bluebird';
import bcrypt from 'bcrypt';

import models from '../models/index';

Bluebird.promisifyAll(bcrypt);

const Company = models.Company;
const Op = Sequelize.Op;

const companyIdValidation = Bluebird.coroutine(
  function* validationCompanyId(id: string) {
    const results: Array = yield Company.findAll();
    const companyIds = results.map(companyId => companyId.id);
    return companyIds.includes(id);
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
    const result: Object = await Company.find({ where: { id }});
    res.status(200).send(result);
  }
  res.status(400).send({ info: `Company id ${id} is not found`});

  await next;
}

const create = async(req, res, next) => {
  
  const {
    name,
    empolyeeID,
    foudedOn,
    numberOfEmployees,
    location,
    email,
    username,
    password,
  }: {
    name: string,
    empolyeeID: ?string,
    foudedOn: ?string,
    numberOfEmployees: ?string,
    location: ?string,
    email: string,
    username: string,
    password: string
  } = req.body;

  const companyId = hat();
  const salt = await bcrypt.genSaltSync(10);
  const passHash = await bcrypt.hashSync(password, salt);

    await Company.create({
    id: companyId,
    name,
    location,
    email,
    username,
    password,
    passHash,
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
  del
}