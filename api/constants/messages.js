/**
 * @constant
 * @description Common response messages.
 */
 const HTTP_SUCCESS_MESSAGES = {
    SUCCESS: 'Success',
    PASSWORD_RESET_MAIL: 'Password reset mail sent.',
    PASSWORD_UPDATED: 'Password updated.',
    PROFILE_UPDATED: 'Profile updated.',
    ORG: {
      CREATED: 'Organization created.',
      USER_ADDED: 'User added to organization.',
      ORG_UPDATED: 'Organization info updated.',
      SSO: {
        OAUTH: {
          CREATED: 'OAuth config created',
          CONFIGURED: 'OAuth config updated',
        },
        SAML: {
          CREATED: 'SAML config created',
          CONFIGURED: 'SAML config updated',
        },
      },
    },
  };
  
  const HTTP_ERROR_MESSAGES = {
    EMAIL_IN_USE: 'Email already in use.',
    USER_NOT_FOUND: 'User not found',
    UNAUTHORIZED: 'Unauthorized',
    USE_SSO: 'Please use your SSO credentials to sign in',
    SSO_USER_FEATURE_RESTRICTION: 'Feature not available for SSO user.',
    ACCOUNT_LOCKED: 'Account locked. Please contact admin.',
    UNABLE_TO_GET_USER: 'Unable to get user.',
    CANNOT_DETERMINE_EMAIL: 'Unable to determine the users email',
    UNABLET_TO_ADD_USER: 'Unable to add user.',
    EMAIL_REQUIRED: 'Email is required.',
    EMAIL_INVALID: 'Email is invalid.',
    PASSWORD_REQUIRED: 'Password is required.',
    CONFIRMATION_REQUIRED: 'Confirm password required.',
    CONFIRMATION_NO_MATCH: 'Password confirmation does not match password',
    PASSWORD_MIN_LENGTH: 'Password should be atleast 8 character.',
    PASSWORD_ALPHANUMERIC: 'Should be a mix of letters and numbers.',
    NAME_REQUIRED: 'Name is required.',
    INVALID_NAME: 'Name is invalid.',
    INVALID_PASSWORD: 'Incorrect password',
    PASSWORD_SAME: 'New password cannot be the same as the old password.',
    INVALID_ROLE: 'Role not valids',
    INVALID_TOKEN: 'Token is invalid',
    NOT_ALLOWED: 'You are not allowed to perform this operation.',
    ORG: {
      NAME_REQUIRED: 'Organization name is required.',
      NAME_IN_USE: 'Organization already exists.',
      DOMAIN_IN_USE: 'Organization subdomain is already in use',
      NOT_EXISTS: 'Organization does not exist.',
      DUPLICATE_MEMBER: 'User is already a member.',
      OTHER_ORG_MEMBER: 'Current user is a member of another organization.',
      NO_SSO_CONFIGURED: 'Organization has no SSO configured.',
      NO_ORG_IDENTIFIER_FOR_SSO: 'No valid organization identifier detected.',
      USER_NOT_PART_OF_ORG: 'User not part of specified organization',
      PUBLIC_ORG_CANNOT_BE_DELETED: 'Unable to delete public organization',
      UNABLE_TO_DELETE: 'Unable to delete org',
      SSO: {
        TYPE_NOT_EXISTS: 'Specified sso type is invalid.',
        INVALID_CONFIG: 'Invalid config file.',
      },
    },
  };
  
  module.exports = {
    HTTP_ERROR_MESSAGES,
    HTTP_SUCCESS_MESSAGES,
  };
  