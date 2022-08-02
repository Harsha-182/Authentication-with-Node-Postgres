const {body,query}=require("express-validator");
const{HTTP_ERROR_MESSAGES}=require("../../constants/messages.js");

const PAGE_LIMIT = [
    query('page')
      .default(1)
      .isNumeric()
      .withMessage('Page is supposed to be a number')
      .bail()
      .isInt('Page is invalid'),
    query('limit')
      .default(10)
      .isNumeric()
      .withMessage('Limit is supposed to be a number')
      .bail()
      .isInt('Limit is invalid'),
  ];
  
  const UPDATE_PROFILE = [
    body('email')
      .optional()
      .escape()
      .normalizeEmail()
      .isEmail()
      .withMessage(HTTP_ERROR_MESSAGES.EMAIL_INVALID),
    body('name')
      .optional()
      .not()
      .isEmpty()
      .withMessage(HTTP_ERROR_MESSAGES.ORG.NAME_REQUIRED),
    body('lock')
      .optional()
      .not()
      .isEmpty()
      .isBoolean()
      .withMessage(HTTP_ERROR_MESSAGES.ORG.NAME_REQUIRED),
  ];
  
  const EMAIL_CHECK = body('email')
    .exists()
    .withMessage(HTTP_ERROR_MESSAGES.EMAIL_REQUIRED)
    .bail()
    .escape()
    .normalizeEmail()
    .isEmail()
    .withMessage(HTTP_ERROR_MESSAGES.EMAIL_INVALID);
  
  const PASSWORD_CHECK = [
    body('password')
      .exists()
      .withMessage(HTTP_ERROR_MESSAGES.PASSWORD_REQUIRED)
      .bail()
      .not()
      .isEmpty()
      .withMessage(HTTP_ERROR_MESSAGES.PASSWORD_REQUIRED)
      .bail()
      .escape()
      .isLength({ min: 8 })
      .withMessage(HTTP_ERROR_MESSAGES.PASSWORD_MIN_LENGTH)
      .bail(),
    body('confirmPassword')
      .exists()
      .withMessage(HTTP_ERROR_MESSAGES.CONFIRMATION_REQUIRED)
      .bail()
      .custom((value, { req }) => {
        if (value !== req.body.password) {
          throw new Error(HTTP_ERROR_MESSAGES.CONFIRMATION_NO_MATCH);
        }
        return true;
      }),
  ];
  
  const UPDATE_PASSWORD = [
    body('password')
      .exists()
      .withMessage(HTTP_ERROR_MESSAGES.PASSWORD_REQUIRED),
    body('newPassword')
      .exists()
      .withMessage(HTTP_ERROR_MESSAGES.PASSWORD_REQUIRED)
      .custom((value, { req }) => value !== req.body.password)
      .withMessage(HTTP_ERROR_MESSAGES.PASSWORD_SAME)
      .not()
      .isEmpty()
      .withMessage(HTTP_ERROR_MESSAGES.PASSWORD_REQUIRED)
      .escape()
      .isLength({ min: 8 })
      .withMessage(HTTP_ERROR_MESSAGES.PASSWORD_MIN_LENGTH)
      .bail(),
    body('confirmPassword')
      .exists()
      .withMessage(HTTP_ERROR_MESSAGES.CONFIRMATION_REQUIRED)
      .bail()
      .custom((value, { req }) => {
        if (value !== req.body.newPassword) {
          throw new Error('Password confirmation does not match password');
        }
        return true;
      })];
  
  const CREDENTIALS = [
    EMAIL_CHECK,
    body('password')
      .exists()
      .withMessage(HTTP_ERROR_MESSAGES.PASSWORD_REQUIRED)
      .not()
      .isEmpty()
      .withMessage(HTTP_ERROR_MESSAGES.PASSWORD_REQUIRED),
  ];
  
  const NEW_ORGANIZATION = [
    body('name')
      .exists()
      .withMessage(HTTP_ERROR_MESSAGES.ORG.NAME_REQUIRED)
      .not()
      .isEmpty()
      .withMessage(HTTP_ERROR_MESSAGES.ORG.NAME_REQUIRED),
  ];
  
  const SIGNUP_CHECKS = [
    EMAIL_CHECK,
    PASSWORD_CHECK,
    body('name')
      .exists()
      .withMessage(HTTP_ERROR_MESSAGES.NAME_REQUIRED)
      .bail()
      .escape()
      .withMessage(HTTP_ERROR_MESSAGES.INVALID_NAME)
      .bail()
      .not()
      .isEmpty()
      .withMessage(HTTP_ERROR_MESSAGES.NAME_REQUIRED),
  ];
  
  const NEW_ORG_USER = [
    EMAIL_CHECK,
    body('name')
      .exists()
      .withMessage(HTTP_ERROR_MESSAGES.NAME_REQUIRED)
      .bail()
      .escape()
      .withMessage(HTTP_ERROR_MESSAGES.INVALID_NAME)
      .bail()
      .not()
      .isEmpty()
      .withMessage(HTTP_ERROR_MESSAGES.NAME_REQUIRED),
    body('password')
      .optional()
      .exists()
      .withMessage(HTTP_ERROR_MESSAGES.PASSWORD_REQUIRED)
      .not()
      .isEmpty()
      .withMessage(HTTP_ERROR_MESSAGES.PASSWORD_REQUIRED)
      .escape()
      .isLength({ min: 8 })
      .withMessage(HTTP_ERROR_MESSAGES.PASSWORD_MIN_LENGTH)
      .bail(),
  ];
  
  const SSO_CONFIG = [
    body('ssoTypeId')
      .exists()
      .withMessage('SSO type is required'),
    body('config')
      .exists()
      .withMessage('SSO config is required.'),
  ];
  
  module.exports = {
    CREDENTIALS,
    SIGNUP_CHECKS,
    EMAIL_CHECK,
    PASSWORD_CHECK,
    NEW_ORGANIZATION,
    UPDATE_PROFILE,
    NEW_ORG_USER,
    UPDATE_PASSWORD,
    SSO_CONFIG,
    PAGE_LIMIT,
  };
  