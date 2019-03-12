import hat from 'hat';
import Bluebird from 'bluebird';
import bcrypt from 'bcrypt';

import models from '../models/index';

Bluebird.promisifyAll(bcrypt);

const Users = models.Users;

const usersIdValidation = Bluebird.coroutine(
  function* validationUsersId(id: string) {
    const results: Array = yield Users.findAll();
    const usersIds = results.map(usersId => usersId.id);
    return usersIds.includes(id);
  }
);

const list = async(req, res, next) => {
  const result: Array = await Users.findAll();

  res.status(200).send(result);
  await next;
}

const get = async(req, res, next) => {
  const { id }: { id: string } = req.params;
  const validationUsersId = await usersIdValidation(id);

  if (validationUsersId) {
    const result: Object = await Users.find({ where: { id }});
    res.status(200).send(result);
  }
  res.status(400).send({ info: `Users id ${id} is not found`});
  await next;
}

const create = async(req, res, next) => {
  const {
    companyId,
    personelID,
    firstName,
    lastName,
    gender,
    dateOfBirth,
    driverLicense,
    citizenship,
    currentLocation,
    address,
    city,
    municipality,
    zip,
    legalEntity,
    jobTitle,
    jobSeniority,
    placeOfWork,
    branchOffice,
    startData,
    endData,
    pastExperience,
    dOfEmpl,
    yearOfExpi,
    email,
    username,
    password,
  }: {
    companyId: string,
    personelID: ?string,
    firstName: string,
    lastName: ?string,
    gender: ?string,
    dateOfBirth: ?string,
    driverLicense: ?string,
    citizenship: ?string,
    currentLocation: ?string,
    address: ?string,
    city: ?string,
    municipality: ?string,
    zip: ?string,
    legalEntity: ?string,
    jobTitle: ?string,
    jobSeniority: ?string,
    placeOfWork: ?string,
    branchOffice: ?string,
    startData: ?string,
    endData: ?string,
    pastExperience: ?string,
    dOfEmpl: ?string,
    yearOfExpi: ?string,
    email: string,
    username: string,
    password: string
  } = req.body;

  const userId = hat();
  const salt = await bcrypt.genSaltSync(10);
  const passHash = await bcrypt.hashSync(password, salt);

  await Users.create({
    id: userId,
    companyId,
    email,
    username,
    password,
    passHash,
    personelID,
    firstName,
    lastName,
    gender,
    dateOfBirth,
    driverLicense,
    citizenship,
    currentLocation,
    address,
    city,
    municipality,
    zip,
    legalEntity,
    jobTitle,
    jobSeniority,
    placeOfWork,
    branchOffice,
    startData,
    endData,
    pastExperience,
    dOfEmpl,
    yearOfExpi
  });

  res.status(201).send({ Info: `User with id: ${userId} has been created`})
  await next;
}

const update = async(req, res, next) => {
  const { id }: { id: string } = req.params;

  const updateData: {  
    companyId: ?string,
    personelID: ?string,
    firstName: string,
    lastName: ?string,
    gender: ?string,
    dateOfBirth: ?string,
    driverLicense: ?string,
    citizenship: ?string,
    currentLocation: ?string,
    address: ?string,
    city: ?string,
    municipality: ?string,
    zip: ?string,
    email: ?string,
    legalEntity: ?string,
    jobTitle: ?string,
    jobSeniority: ?string,
    placeOfWork: ?string,
    branchOffice: ?string,
    startData: ?string,
    endData: ?string,
    pastExperience: ?string,
    dOfEmpl: ?string,
    yearOfExpi: ?string,
    email: ?string,
    username: ?string,
    password: ?string
  } = Object.assign({}, req.body);

  const validationUsersId = await usersIdValidation(id);
  if (!validationUsersId) {
    res.status(400).send({ info: `Users id ${id} is not found`});
  }
  
    await Users.update(updateData, { where: { id }})
    res.status(204).send({ info: `Users id ${id} has been updated`});
  await next;
}

const del = async(req, res, next) => {
  const { id }: { id: string } = req.params;

  const validationUsersId = await usersIdValidation(id);

  if (!validationUsersId) {
    res.status(400).send({ info: `Users id ${id} is not found`});
  }
    await Company.destroy({ where: { id }});
    res.status(202).send({ info: `Users id ${id} has been removed`});
  await next;
}

export default {
  list,
  get,
  create,
  update,
  del
}