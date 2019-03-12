import hat from 'hat';

import models from '../models/index';

const Users = models.Users;

const list = async(req, res, next) => {
  await next;
}

const get = async(req, res, next) => {
  const { id }: { id: string } = req.params;

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
    email,
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
    yearOfExpi: ?string
  } = req.body;

  const userId = hat();

  await Users.create({
    id: userId,
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
    email,
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

  await next;
}

const del = async(req, res, next) => {
  const { id }: { id: string } = req.params;
  
  await next;
}

export default {
  list,
  get,
  create,
  update,
  del
}