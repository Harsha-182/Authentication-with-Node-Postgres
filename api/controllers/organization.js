const parser=require("csv-parser");
const XLSX=require("xlsx")

const{Op}=require("sequelize");
const fs=require("fs");
const {User,Organization}=require("../../db/models");


const checkIfOrganizationExists = async (query, orgForAuth = false) => {
    if (orgForAuth) {
      return Organization.findOne({
        where: {
          name: {
            [Op.ne]: 'Public',
          },
        },
      });
    }
    return Organization.findOne({
      where: {
        ...query,
      }
    });
  };

module.exports={
    checkIfOrganizationExists
}















